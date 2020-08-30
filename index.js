module.exports = () => {
	let str = 'one two three'
	let fixRegex = /change/ // Change this line
	let replaceText = '' // Change this line
	let result = str.replace(fixRegex, replaceText)

	return result
}
