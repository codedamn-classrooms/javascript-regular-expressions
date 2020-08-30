module.exports = () => {
	let myString = 'freeCodeCamp'
	let fccRegex = /change/ // Change this line
	let result = fccRegex.test(myString)

	return result
}
