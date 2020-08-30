module.exports = () => {
	let sampleWord = 'astronaut'
	let pwRegex = /change/ // Change this line
	let result = pwRegex.test(sampleWord)

	return result
}
