import {useEffect, useState} from "react";
import useCounter from "./useCounter";

const Accommodate = () => {

	const [isFull, setIsFull] = useState(false)
	const [count, increaseCount, decreaseCount] = useCounter(0)

	useEffect(()=> {

	})

	return (
			<div></div>
	)
}
export default Accommodate;