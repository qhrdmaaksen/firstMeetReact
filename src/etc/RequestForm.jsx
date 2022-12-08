// 요청 사항 출력 컴포넌트
import {useState} from "react";

const RequestForm = () => {

	const [request, setRequest] = useState('요청 사항을 입력하세요.')

	const requestSubmitHandler = (event) => {
		alert(`고객이 입력한 요청 사항은 ${request} 입니다.`)
		event.preventDefault()
	}

	const requestChangeHandler = (event) => {
		setRequest(event.target.value)
	}

	return (
			<form onSubmit={requestSubmitHandler}>
				<label>
					요청 사항 :
					<textarea value={request} onChange={requestChangeHandler}/>
				</label>
				<button type="submit">제출</button>
			</form>
	)
}
export default RequestForm