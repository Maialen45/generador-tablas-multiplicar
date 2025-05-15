function crearEncabezado() {
	let tabla = `<table>
                <thead>
                    <th scope="col">Número</th>
                    <th scope="col"></th>                   
                    <th scope="col">Multiplicador</th>
                    <th scope="col"></th>                    
                    <th scope="col">Resultado</th>
                </thead>
                <tbody id="cuerpoTabla">
                    </tbody>
                </table>`;
	let contenedorTabla = document.getElementById("paraTabla");
	contenedorTabla.innerHTML = tabla;
}

function tablas() {
	let inputNum = parseInt(document.getElementById("numero").value);
	if (!inputNum) {
		alert("Introduce un número");
	} else {
		crearEncabezado();
		let cuerpoTabla = document.getElementById("cuerpoTabla");

		for (let i = 0; i <= 10; i++) {
			let fila = document.createElement("tr");
			let resultado = `<td>${inputNum}</td><td>x</td><td>${i}</td><td>=</td><td>${
				inputNum * i
			}</td>`;
			fila.innerHTML = resultado;
			cuerpoTabla.appendChild(fila);
			// console.log([i, inputNum, i * inputNum]);
		}
	}
}

document.getElementById("generarTabla").addEventListener("click", tablas);
