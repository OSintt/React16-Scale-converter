export default function Output(props) {
	let operation = props.medidaReal / props.escala;
	
	const handleInt = res => {
		if (res % 1 === 0) return 0; 
		if ((operation * 100).toString().split(".")[1].split("")[0] === "0" && (operation * 100).toString().split(".")[1].split("")[1] === "0") {
			return 0;
		}
		return 2;
	}


	const handleNaN = res => {
		if (isNaN(res)) return "Por favor, ingrese un valor válido";
		if (res === Infinity) return "Por favor, ingrese un valor válido";
		res = res * 100;
		return `${res.toFixed(handleInt(res))}cm`;
	}

	return (
		<p>{handleNaN(operation)}</p>
	);
}