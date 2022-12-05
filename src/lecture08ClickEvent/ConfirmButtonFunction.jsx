import {useState} from "react";

const ConfirmButtonFunction = () => {

	const [isConfirm, setIsConfirm] = useState(false)
	const confirmHandler = () => {
		setIsConfirm((prevConfirmState) => !prevConfirmState)
	}
	return (
			<button onClick={confirmHandler} disabled={isConfirm}>
				{isConfirm ? "확인됨" : "확인하기"}
			</button>
	)
}
export default ConfirmButtonFunction;