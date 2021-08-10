export default function Input(props) {

	const handleInput = e => {
		if (props._id === 1) {
			props.getMedidaReal(e.target.value)
		} else {
			props.getEscala(e.target.value)
		}
	}
	

	return (
		<div>
			<label>{props.title}</label>
			<input 
				type="text"
				onChange={handleInput}
			/>
			<label className="m">m</label>
		</div>
	)
}