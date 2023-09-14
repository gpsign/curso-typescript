function identity<T>(value: T) {
	return value;
}

console.log(identity<number>(1)); // 1
console.log(identity<string>("abc")); // 1
console.log(identity<number[]>([1])); // 1
