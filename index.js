module.exports = () => {
	let rickyAndCal = 'Cal and Ricky both like racing.'
	let calRegex = /change/ // Change this line
	let result = calRegex.test(rickyAndCal)

	return result
}
