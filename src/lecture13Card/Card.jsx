
// specialization & composition 사용
const Card = (props) => {
	const {title, backgroundColor, children} = props
	return (
			<div
				style={{
					margin: 8,
					padding: 8,
					boarderRadius: 8,
					boxShadow: '0px 0px 4px grey',
					backgroundColor: backgroundColor || 'white'
				}}
			>
				{title && <h1>{title}</h1>}
				{children}
			</div>
	)
}
export default Card ;