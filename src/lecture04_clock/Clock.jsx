import React from 'react';

const Clock = () => {
	return (
			<div>
				<h1>현재 시간</h1>
				<p>현재 시간은 {new Date().toLocaleTimeString()} 입니다.</p>
			</div>
	)
}
export default Clock;