import Dialog from "./Dialog";
import {useState} from "react";

const SignUpDialog = (props) => {

	const [nickname, setNickname] = useState('')

	const handleSignUp = () => {
		alert(`어서오세요, ${nickname} 님!`)
	}

	const handleChange = (event) => {
		setNickname(event.target.value)
	}

	return (
			<Dialog title="화성 탐사 프로그램" message="닉네임을 입력해주세요">
				<input value={nickname} onChange={handleChange} />
				<button onClick={handleSignUp}>가입하기</button>
			</Dialog>
	)
}
export default SignUpDialog