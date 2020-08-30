module.exports = () => {
	let petString = 'James has a pet cat.'
	let petRegex = /change/ // Change this line
	let result = petRegex.test(petString)

	return result
}
