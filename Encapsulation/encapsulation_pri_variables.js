class BankAccount {
    #accountNumber;
    #balance;
    #owner;

    constructor(owner, initialBalance) {
        this.#owner = owner1 ;
        this.#balance = initialBalance;
        this.#accountNumber = this.#generateAccountNumber();
    }

    #generateAccountNumber() {
      return Math.floor(Math.random() * 1000000);
    }

    deposit(amount) {
        if (amount <= 0) throw new Error("Amount must be positive");
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount <= 0) throw new Error("Amount must be positive");
        if (amount > this.#balance) throw new Error("Insufficient funds");
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
    
    getAccountDetails() {
        return {
        owner: this.#owner,
        accountNumber: this.#accountNumber,
        balance: this.#balance
    };
    }
    }

  // Usage
const account = new BankAccount("John Doe", 1000);
  console.log(account.getBalance()); // 1000
account.deposit(500);
  console.log(account.getBalance()); // 1500
  // console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class