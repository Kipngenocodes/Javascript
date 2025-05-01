import random
import time
import json
import threading
import sys
from colorama import init, Fore, Style

init()  # Initialize colorama for colored output

class SudokuGenerator:
    def __init__(self):
        self.board = [[0 for _ in range(9)] for _ in range(9)]
        self.solution = None
    
    def is_valid(self, board, row, col, num):
        # Optimized: Use direct checks with bit manipulation for flags if needed
        for x in range(9):
            if board[row][x] == num or board[x][col] == num:
                return False
        start_row, start_col = 3 * (row // 3), 3 * (col // 3)
        for i in range(3):
            for j in range(3):
                if board[i + start_row][j + start_col] == num:
                    return False
        return True
    
    def find_best_cell(self, board):
        # Find cell with fewest possible numbers (MRV heuristic)
        min_options = 10
        best_cell = None
        for row in range(9):
            for col in range(9):
                if board[row][col] == 0:
                    options = sum(1 for num in range(1, 10) if self.is_valid(board, row, col, num))
                    if options < min_options:
                        min_options = options
                        best_cell = (row, col)
                    if min_options == 0:  # No valid numbers
                        return None
        return best_cell
    
    def solve_board(self, board):
        # Optimized backtracking with MRV
        cell = self.find_best_cell(board)
        if not cell:
            return True  # No empty cells or invalid state
        row, col = cell
        nums = list(range(1, 10))
        random.shuffle(nums)  # Randomize for varied solutions
        for num in nums:
            if self.is_valid(board, row, col, num):
                board[row][col] = num
                if self.solve_board(board):
                    return True
                board[row][col] = 0
        return False
    
    def count_solutions(self, board, limit=2):
        # Count solutions to ensure uniqueness (stop at limit)
        solutions = [0]
        self._count_solutions(board, solutions, limit)
        return solutions[0]
    
    def _count_solutions(self, board, solutions, limit):
        if solutions[0] >= limit:
            return
        cell = self.find_best_cell(board)
        if not cell:
            solutions[0] += 1
            return
        row, col = cell
        for num in range(1, 10):
            if self.is_valid(board, row, col, num):
                board[row][col] = num
                self._count_solutions(board, solutions, limit)
                board[row][col] = 0
    
    def generate_solution(self):
        self.board = [[0 for _ in range(9)] for _ in range(9)]
        for i in range(0, 9, 3):
            self.fill_box(i, i)
        self.solve_board(self.board)
        self.solution = [row[:] for row in self.board]
    
    def fill_box(self, row, col):
        nums = list(range(1, 10))
        random.shuffle(nums)
        for i in range(3):
            for j in range(3):
                self.board[row + i][col + j] = nums.pop()
    
    def generate_puzzle(self, difficulty):
        self.generate_solution()
        self.board = [row[:] for row in self.solution]
        difficulties = {'easy': 30, 'medium': 40, 'hard': 50, 'expert': 60}
        cells_to_remove = difficulties.get(difficulty.lower(), 40)
        
        # Ensure unique solution
        attempts = 0
        max_attempts = 10
        while attempts < max_attempts:
            self.board = [row[:] for row in self.solution]
            cells = [(i, j) for i in range(9) for j in range(9)]
            random.shuffle(cells)
            removed = 0
            temp_board = [row[:] for row in self.board]
            for i, j in cells:
                if removed >= cells_to_remove:
                    break
                temp_board[i][j] = 0
                if self.count_solutions([row[:] for row in temp_board]) == 1:
                    self.board[i][j] = 0
                    removed += 1
            if removed >= cells_to_remove - 2:  # Allow slight variation
                break
            attempts += 1
        
        return self.board

class SudokuGame:
    def __init__(self):
        self.generator = SudokuGenerator()
        self.board = None
        self.solution = None
        self.original = None
        self.start_time = 0
        self.hints_used = 0
        self.moves_made = 0
        self.difficulty = 'medium'
        self.timer_running = False
        self.elapsed_time = 0
    
    def new_game(self, difficulty='medium'):
        self.board = self.generator.generate_puzzle(difficulty)
        self.solution = self.generator.solution
        self.original = [[self.board[i][j] != 0 for j in range(9)] for i in range(9)]
        self.start_time = time.time()
        self.hints_used = 0
        self.moves_made = 0
        self.difficulty = difficulty
        self.elapsed_time = 0
        self.timer_running = True
    
    def display_board(self):
        print("\n  " + " ".join([f"{i+1}" for i in range(9)]))
        print("  " + "-" * 17)
        for i in range(9):
            row_str = f"{chr(65 + i)}|"
            for j in range(9):
                cell = self.board[i][j]
                if cell == 0:
                    row_str += " ."
                else:
                    color = Fore.BLUE if self.original[i][j] else Fore.GREEN
                    row_str += f" {color}{cell}{Style.RESET_ALL}"
                if (j + 1) % 3 == 0 and j < 8:
                    row_str += " |"
            print(row_str)
            if (i + 1) % 3 == 0 and i < 8:
                print("  " + "-" * 17)
    
    def make_move(self, row, col, num):
        if self.original[row][col]:
            return False, "Cannot modify original puzzle cells"
        if num < 1 or num > 9:
            return False, "Number must be between 1 and 9"
        if not self.generator.is_valid(self.board, row, col, num):
            return False, "Invalid move: number conflicts with row, column, or box"
        self.board[row][col] = num
        self.moves_made += 1
        return True, "Move successful"
    
    def clear_cell(self, row, col):
        if not self.original[row][col]:
            self.board[row][col] = 0
            return True, "Cell cleared"
        return False, "Cannot clear original puzzle cells"
    
    def is_complete(self):
        for i in range(9):
            for j in range(9):
                if self.board[i][j] == 0 or self.board[i][j] != self.solution[i][j]:
                    return False
        self.timer_running = False
        return True
    
    def get_hint(self):
        empty_cells = [(i, j) for i in range(9) for j in range(9) if self.board[i][j] == 0]
        if not empty_cells:
            return False, "No empty cells left"
        row, col = random.choice(empty_cells)
        self.board[row][col] = self.solution[row][col]
        self.hints_used += 1
        return True, f"Hint added at {chr(65 + row)}{col + 1}"
    
    def save_game(self, filename):
        game_state = {
            'board': self.board,
            'solution': self.solution,
            'original': self.original,
            'difficulty': self.difficulty,
            'start_time': self.start_time,
            'hints_used': self.hints_used,
            'moves_made': self.moves_made,
            'elapsed_time': self.elapsed_time
        }
        try:
            with open(filename, 'w') as f:
                json.dump(game_state, f)
            return True, "Game saved"
        except:
            return False, "Failed to save game"
    
    def load_game(self, filename):
        try:
            with open(filename, 'r') as f:
                game_state = json.load(f)
            self.board = game_state['board']
            self.solution = game_state['solution']
            self.original = game_state['original']
            self.difficulty = game_state['difficulty']
            self.start_time = game_state['start_time']
            self.hints_used = game_state['hints_used']
            self.moves_made = game_state['moves_made']
            self.elapsed_time = game_state['elapsed_time']
            self.timer_running = True
            return True, "Game loaded"
        except:
            return False, "Failed to load game"
    
    def calculate_score(self):
        base_scores = {'easy': 1000, 'medium': 2000, 'hard': 3000, 'expert': 4000}
        base = base_scores.get(self.difficulty.lower(), 2000)
        time_taken = self.elapsed_time
        max_time = 1800  # 30 minutes
        time_bonus = max(0, 1000 * (1 - time_taken / max_time))
        hint_penalty = self.hints_used * 100
        expected_moves = {'easy': 51, 'medium': 41, 'hard': 31, 'expert': 21}
        move_bonus = max(0, (expected_moves[self.difficulty.lower()] - self.moves_made) * 10)
        total_score = int(base + time_bonus - hint_penalty + move_bonus)
        return max(0, total_score)

def parse_move(move_str):
    parts = move_str.strip().upper().split()
    if len(parts) != 2:
        return None, None, None
    cell, num = parts
    if len(cell) != 2:
        return None, None, None
    row_char, col_char = cell[0], cell[1]
    if not ('A' <= row_char <= 'I') or not ('1' <= col_char <= '9'):
        return None, None, None
    try:
        row = ord(row_char) - ord('A')
        col = int(col_char) - 1
        num = int(num)
        return row, col, num
    except ValueError:
        return None, None, None

def display_timer(game):
    while game.timer_running:
        game.elapsed_time = time.time() - game.start_time
        minutes, seconds = divmod(int(game.elapsed_time), 60)
        sys.stdout.write(f"\rTime: {minutes}m {seconds}s")
        sys.stdout.flush()
        time.sleep(1)
    # Print final time
    minutes, seconds = divmod(int(game.elapsed_time), 60)
    sys.stdout.write(f"\rTime: {minutes}m {seconds}s\n")
    sys.stdout.flush()

def main():
    print("Welcome to Sudoku!")
    print("=================")
    
    game = SudokuGame()
    
    while True:
        print("\nMain Menu:")
        print("1. New Game")
        print("2. Load Game")
        print("3. Quit")
        choice = input("Enter your choice (1-3): ").strip()
        
        if choice == '3':
            print("Thanks for playing!")
            break
        
        if choice == '2':
            filename = input("Enter save file name: ").strip()
            success, message = game.load_game(filename)
            print(message)
            if not success:
                continue
        else:
            print("\nChoose difficulty:")
            print("1. Easy")
            print("2. Medium")
            print("3. Hard")
            print("4. Expert")
            choice = input("Enter your choice (1-4) [default: 2]: ").strip()
            difficulties = {'1': 'easy', '2': 'medium', '3': 'hard', '4': 'expert'}
            game.new_game(difficulties.get(choice, 'medium'))
        
        # Start timer thread
        timer_thread = threading.Thread(target=display_timer, args=(game,), daemon=True)
        timer_thread.start()
        
        while True:
            game.display_board()
            if game.is_complete():
                score = game.calculate_score()
                minutes, seconds = divmod(int(game.elapsed_time), 60)
                print(f"\nCongratulations! You solved the puzzle in {minutes}m {seconds}s!")
                print(f"Score: {score}")
                print(f"Hints used: {game.hints_used}, Moves made: {game.moves_made}")
                break
            
            print("\nCommands:")
            print("- Move: 'A1 5' (row column number)")
            print("- Clear: 'clear A1'")
            print("- Hint: 'hint'")
            print("- Save: 'save filename'")
            print("- New: 'new'")
            print("- Quit: 'quit'")
            
            command = input("\nEnter command: ").strip().lower()
            
            if command == 'quit':
                game.timer_running = False
                print("Thanks for playing!")
                return
            
            elif command == 'new':
                game.timer_running = False
                break
            
            elif command == 'hint':
                success, message = game.get_hint()
                print(message)
                continue
            
            elif command.startswith('save '):
                filename = command[5:].strip()
                if not filename:
                    print("Please provide a filename")
                    continue
                success, message = game.save_game(filename)
                print(message)
                continue
            
            elif command.startswith('clear '):
                cell = command[6:].strip().upper()
                if len(cell) != 2 or not ('A' <= cell[0] <= 'I') or not ('1' <= cell[1] <= '9'):
                    print("Invalid cell format. Use 'A1' to 'I9'.")
                    continue
                row = ord(cell[0]) - ord('A')
                col = int(cell[1]) - 1
                success, message = game.clear_cell(row, col)
                print(message)
                continue
            
            row, col, num = parse_move(command)
            if row is None:
                print("Invalid command format. Use 'A1 5' for moves.")
                continue
            
            success, message = game.make_move(row, col, num)
            print(message)

if __name__ == "__main__":
    main()