module.exports = () => {
	let repeatNum = '42 42 42'
	let reRegex = /change/ // Change this line
	let result = reRegex.test(repeatNum)

	return result
}
