function multiply(num1: number, num2: number): number {
	return num1 * num2;
}

function sum(num1: number, num2: number): number {
	return num1 * num2;
}

function isEven(num: number): boolean {
	return num % 2 === 0;
}

function showResult(result: number): void {
	if (isEven(result)) {
		console.log(`The result is ${result} and it's even!`);
	} else {
		console.log(`The result is ${result} and it's even!`);
	}
}

(() => {
	const aux1: string | null = prompt("First Number");
	const aux2: string | null = prompt("Second Number");

	let num1: number;
	let num2: number;
	let result: number;

	if (!isNaN(Number(aux1)) && !isNaN(Number(aux2))) {
		num1 = Number(aux1);
		num2 = Number(aux2);

		result = sum(num1, num2);
		result += multiply(1, 2);
		showResult(result);
	} else console.log(`Não é possível executar com essa entrada`);
})();
