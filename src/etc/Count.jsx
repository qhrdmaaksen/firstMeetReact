import {useEffect, useState} from "react";

const Count = () => {
	const [count, setCount] = useState(0)

	//componentDidMount , componentDidUpdate 와 비슷하게 작동함
	useEffect(() => {
		document.title = `my count ${count} times`
	})

	return (
			<div>
				<p>총 {count}번 클릭함</p>
				<button onClick={()=> setCount(count +1)}>클릭</button>
			</div>
	)
}
export default Count