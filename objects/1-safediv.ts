/**
 * Divides two numbers safely.
 * If the second number is 0 or the first number is not given, the function will return 0.
 * @param n
 * @param m
 * @returns The safely calculated division
 */
export function safeDivide(n: number, m: number) {
    if (m === null || m === 0) return 0; // Return 0 for invalid values
    return n / m; // Otherwise, return division result
}