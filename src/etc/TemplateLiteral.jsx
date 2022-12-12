
const name = 'vitamin'
const region = '인천'

const TemplateLiteral = (strings, nameExp, regionExp) => {
	let str0 = strings[0] // 제 이름은
	let str1 = strings[1] // 이고, 사는곳은
	let str2 = strings[2] // 입니다.

	// 여기에서 template literal 을 사용해 리턴
	return `${str0}${nameExp}${str1}${regionExp}${str2}`
}

const output = TemplateLiteral`제 이름은 ${name} 이고, 사는곳은 ${region} 입니다.`
// 출력 결과
// 제 이름은 vitamin 이고, 사는곳은 인천 입니다.
console.log(output)
export default TemplateLiteral