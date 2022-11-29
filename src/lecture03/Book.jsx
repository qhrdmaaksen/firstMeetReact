const Book = (props) => {
	return (
		<div>
			<h1>책 제목: {props.title}</h1>
			<p>책 설명: {props.description}</p>
		</div>
	)
}
export default Book;