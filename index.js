module.exports = () => {
	let timStr = 'Timmmmber'
	let timRegex = /change/ // Change this line
	let result = timRegex.test(timStr)

	return result
}
