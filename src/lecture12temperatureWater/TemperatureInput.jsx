// 사용자 입력 온도 값을 받아 물이 끓는지 출력해줄 컴포넌트
// 온도를 입력 받아 섭씨 화씨 온도로 변환해주는 컴포넌트
import React from "react";

const scaleName = {
	c: '섭씨',
	f: '화씨',
}

const TemperatureInput = (props) => {
	const enteredTemperatureHandler = (event) => {
		props.onTemperatureChange(event.target.value)
	}
	return (
			<fieldset>
				<legent>온도를 입력 해주세요(단위: {scaleName[props.scale]} </legent>
				<input value={props.temperature} onChange={enteredTemperatureHandler}/>
			</fieldset>
	)
}
export default TemperatureInput;