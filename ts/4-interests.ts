/**
 * Calculates and outputs the interest based on the given parameters.
 * @param capital The capital that already exists
 * @param interestRate The rate at which the capital grows within the specified duration
 * @param duration The timespan over which the capital will be left growing
 */
export function calculateInterest(capital: number, interestRate: number, duration: number) {
    let totalInterest = capital;
    for (let i = 0; i < duration; i++) {
        let additionalInterest = totalInterest * (1 + interestRate / 100) - totalInterest; // New interest
        console.log(`year ${i + 1}: ${totalInterest.toFixed(2)} + ${additionalInterest.toFixed(2)} = ${(totalInterest + additionalInterest).toFixed(2)}`);
        totalInterest += additionalInterest; // Add newly gained interest to total interest
    }
}
