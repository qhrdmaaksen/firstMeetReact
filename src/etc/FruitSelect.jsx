// 과일 선택 상태 관리
import {useState} from "react";

const FruitSelect = () => {
	const [value, setValue] = useState('grape')

	const fruitSubmitHandler = (event) => {
		alert(`당신이 선택한 과일은 ${value} 입니다.`)
		event.preventDefault()
	}

	const fruitSelectHandler = (event) => {
		setValue(event.target.value)
	}

	return (
			<form onSubmit={fruitSubmitHandler}>
				<label>
					선택한 과일 :
					<select value={value} onChange={fruitSelectHandler}>
						<option value="apple">사과</option>
						<option value="banana">바나나</option>
						<option value="grape">포도</option>
						<option value="watermelon">수박</option>
					</select>
				</label>
				<button type="submit">제출</button>
			</form>
	)
}
export default FruitSelect;