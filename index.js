module.exports = () => {
	let haStr = 'Hazzzzah'
	let haRegex = /change/ // Change this line
	let result = haRegex.test(haStr)

	return result
}
