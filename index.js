module.exports = () => {
	let caboose = 'The last car on a train is the caboose'
	let lastRegex = /change/ // Change this line
	let result = lastRegex.test(caboose)

	return result
}
