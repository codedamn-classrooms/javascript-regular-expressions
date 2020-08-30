module.exports = () => {
	let username = 'JackOfAllTrades'
	let userCheck = /change/ // Change this line
	let result = userCheck.test(username)

	return result
}
