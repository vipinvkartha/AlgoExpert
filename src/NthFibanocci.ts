export function getNthFib(n: number) {
	if (n === 1) {
		return 0;
	} 
		if (n === 2) {
		return 1;
	} 
	let a = 0;
	let b = 1;
	let curr;
	for (let i = 3; i <= n; i++) {
		curr = a + b;
		a = b;
		b= curr;
	}
	return curr;
}
export interface Cache {
    [key: number]: number;
}
export function getNthFibCache(n: number, memoize: Cache = {1: 0, 2: 1}) {
    if (n in memoize) {
        return memoize[n];
    } else {
        memoize[n] = getNthFibCache(n-1, memoize) + getNthFibCache(n-2, memoize);
        return memoize[n];
    }
}
