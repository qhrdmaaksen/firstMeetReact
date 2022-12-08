// 이름 및 성별 제출 폼 컴포넌트
import {useState} from "react";

const SignUp = () => {

	const [name, setName] = useState("");

	const [gender, setGender] = useState("")

	const userInfoSubmitHandler = (event) => {
		if (gender === "선택") {
			return alert("성별을 선택해주세요.")
		}
		alert(`제출하신 이름은 ${name} , 성별은 ${gender} 입니다.`)
		event.preventDefault()
	}

	const nameChangeHandler = (event) => {
		setName(event.target.value)
	}

	const genderChangeHandler = (event) => {
		setGender(event.target.value)
	}

	return (
			<form onSubmit={userInfoSubmitHandler}>
				<label>
					이름 :
					<input type="text" value={name} placeholder="이름을 입력해주세요" onChange={nameChangeHandler} />
				</label>
				<br />
				<label>
					성별 :
					<select value={gender} onChange={genderChangeHandler}>
						<option value="선택" selected>선택</option>
						<option value="남자">남자</option>
						<option value="여자">여자</option>
					</select>
				</label>
				<button type="submit">제출</button>
			</form>
	)
}
export default SignUp