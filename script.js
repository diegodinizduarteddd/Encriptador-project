
const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
	const textoEncriptado = encriptar(textArea.value);
	mensagem.value = textoEncriptado;
	textArea.value = "";
}
function btnDesencriptar() {
	const textoDesencriptado = desencriptar(textArea.value);
	mensagem.value = textoDesencriptado;
	textArea.value = "";
}

	

function encriptar(stringEnciptada)	{
	let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
	stringEnciptada = stringEnciptada.toLowerCase();

		for(let i = 0; i < matrizCodigo.length; i++) {
			if (stringEnciptada.includes(matrizCodigo[i][0])) {
				stringEnciptada = stringEnciptada.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1]);
			}}

		return stringEnciptada;

}

function desencriptar(stringDesencriptada) {
	let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
	stringDesencriptada = stringDesencriptada.toLowerCase();

		for (let i = 0; i < matrizCodigo.length; i++) {
			if (stringDesencriptada.includes(matrizCodigo[i][1])) {
				stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);
			}
		}
		return stringDesencriptada;
}

