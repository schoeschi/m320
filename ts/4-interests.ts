function calculateInterest(capital: number, interestRate: number, duration: number) {
    let totalInterest = capital;
    for (let i = 0; i < duration; i++) {
        let additionalInterest = totalInterest * (1 + interestRate / 100) - totalInterest;
        console.log(`year ${i + 1}: ${totalInterest.toFixed(2)} + ${additionalInterest.toFixed(2)} = ${(totalInterest + additionalInterest).toFixed(2)}`);
        totalInterest += additionalInterest;
    }
}

calculateInterest(1000, 5, 5)