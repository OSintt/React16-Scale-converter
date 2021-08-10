import Input from "./InputEscala";
import Output from './OutputEscala';
import { useState } from 'react';

export default function Banner() {
	const [medidaReal, getMedidaReal] = useState([]);
	const [escala, getEscala] = useState([]);

	return (
		<>
		<div className="container">
			<div className="titles">
				<h1>Calculadora de escala de plano</h1>
				<code>v1.0.0</code>
			</div>
			<div className="body">
				<Input 
					title="Medida real"
					getMedidaReal={getMedidaReal}
					_id={1}
				/>
				<Input 
					title="Escala"
					getEscala={getEscala}
					_id={2}
				/>
				
				<Output escala={escala} medidaReal={medidaReal}/>
			</div>
			<code>uwu</code>
		</div>
		</>
	);
}