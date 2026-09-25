/**
 * This class defines an account able to perform transactions.
 */
class TransactionAccount {
    private balance: number = 0.0;
    private readonly iban: string;
    private readonly holder: string;

    /**
     * Creates an account with a set IBAN number and the account holders full name.
     * @param iban Initial IBAN specified by `ISO 13616`
     * @param holder Full name of the account holder
     */
    constructor(iban: string, holder: string) {
        this.iban = iban;
        this.holder = holder;
    }

    /**
     * Withdraws the given amount from the accounts balance.
     * The withdrawal won't be performed if the accounts funds are insufficient.
     * @param amount The amount to be withdrawn
     */
    withdraw(amount: number) {
        const newAccountBalance = this.balance - amount; // Theoretical new balance
        if (amount > 0 && newAccountBalance >= 0 /* only allow if funds are sufficient */) this.balance = newAccountBalance; // Subtract from current balance
    }

    /**
     * Deposits the given amount onto the account.
     * The deposit won't be performed if the given amount is negative or 0.
     * @param amount The non-negative and non-zero amount to be deposited
     */
    deposit(amount: number) {
        if (amount > 0 /* allow if amount is positive */) this.balance += amount; // add to current balance
    }

    /**
     * Displays the accounts information.
     * @returns The formatted account information
     */
    show() {
        return `IBAN: ${this.iban}
                Balance: ${this.balance}
                Holder: ${this.holder}`; // Format info
    }
}
