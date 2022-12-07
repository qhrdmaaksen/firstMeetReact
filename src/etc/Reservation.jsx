import {useState} from "react";

const Reservation = () => {

	const [haveBreakFast, setHaveBreakFast] = useState(false)

	const [numberOfGuest, setNumberOfGuest] = useState(2)

	const handleSubmit = (event) => {
		const message = `당신은 ${haveBreakFast ? "아침식사를" : "아침식사를 하지 않고"} ${numberOfGuest}명이 함께 예약하셨습니다`
		alert(`아침 식사 여부: ${message}, 방문객 수: ${numberOfGuest}`)
		event.preventDefault()
	}

	return (
			<form onSubmit={handleSubmit}>
				<label>
					아침 식사 여부 :
					<input type="checkbox" checked={haveBreakFast} onChange={(event) => {
						setHaveBreakFast(event.target.checked)
					}} />
				</label>
				<br />
				<label>
					방문객 수:
					<input type="number" value={numberOfGuest} onChange={(event) => {
						setNumberOfGuest(event.target.value)
					}}/>
				</label>
				<button type="submit">제출</button>
			</form>
	)
}
export default Reservation