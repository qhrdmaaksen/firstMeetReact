import {useEffect, useState} from "react";

const OnOffLineState = (props) => {
	const [isOnline, setIsOnline] = useState(null)

	const handleStatusChange = (status) => {
		setIsOnline(status.isOnline)
	}

	// componentWillUnmount 와 비슷하게 작동하도록 함
	useEffect(() => {
		// 컴포넌트가 마운트 된 이후,
		// 의존성 배열에있는 변수들 중 하나라도 값이 변경되었을 때 실행
		// 의존성 배열에 아무것도 넣지 않으면, 컴포넌트가 마운트와 언마운트시에 한번만 실행
		// 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
		ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)

		// 컴포넌트가 마운트 해제되기 전에 실행됨
		return () =>{
			ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange)
		}
	}, [의존성 배열1, 의존성 배열2])

	if(isOnline === null) {
		return '대기 중'
	}
	return isOnline ? '온라인':'오프라인'

}
export default OnOffLineState;