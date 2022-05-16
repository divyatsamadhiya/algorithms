function maxChar(str) {
	let count = 0;
	let maxStr = "";
	let obj = {};
	for (let i = 0; i < str.length; i++) {
		obj[str[i]] = obj[str[i]] + 1 || 1;
		if (obj[str[i]] > count) {
			count = obj[str[i]];
			maxStr = str[i];
		}
	}
	return maxStr;
}
console.log(maxChar("I loveeeeee javascript"));
