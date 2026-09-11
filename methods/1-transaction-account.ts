class TransactionAccount {
    private balance: number = 0.0;
    private readonly iban: string;
    private holder: string;

    constructor(iban: string, holder: string) {
        this.iban = iban;
        this.holder = holder;
    }

    withdraw(amount: number) {
        const newAccountBalance = this.balance - amount;
        if (amount > 0 && newAccountBalance >= 0) this.balance = newAccountBalance;
    }

    deposit(amount: number) {
        if (amount > 0) this.balance += amount;
    }

    show() {
        return `IBAN: ${this.iban}
                Balance: ${this.balance}
                Holder: ${this.holder}`;
    }
}

const johnAccount = new TransactionAccount("CH67 1234 1938 0294 1739", "Johann Sins");
johnAccount.deposit(100_000);
console.log(johnAccount.show());