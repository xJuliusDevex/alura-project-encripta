const encryptKey = {
	e: "enter",
	i: "imes",
	a: "ai",
	o: "ober",
	u: "ufat",
};

const btnAreaEnctypt = document.getElementById("btn-encrypt");
const btnAreaDecrypt = document.getElementById("btn-decrypt");
const textAreaResult = document.getElementById("text-result");
const textAreaInput = document.getElementById("text-input");
const alertMessage = document.getElementById("alert-message");
const textOutput = document.getElementById("text-output");
const btnCopy = document.getElementById("btn-copy");

btnAreaEnctypt.addEventListener("click", () => {
	// console.log(textAreaInput.value);
	const encryptedText = textAreaInput.value
		.split("")
		.map((letter) => {
			return encryptKey[letter] || letter;
		})
		.join("");
	// console.log(textAreaResult);
	textOutput.style.display = "none";
	btnCopy.style.display = "block";
	textAreaResult.innerText = encryptedText;
});

btnAreaDecrypt.addEventListener("click", () => {
	let decryptedText = textAreaInput.value;
	Object.keys(encryptKey).forEach((key) => {
		const regex = new RegExp(encryptKey[key], "g");
		decryptedText = decryptedText.replace(regex, key);
	});
	textOutput.style.display = "none";
	btnCopy.style.display = "block";
	textAreaResult.innerText = decryptedText;
});

btnCopy.addEventListener("click", () => {
	navigator.clipboard.writeText(textAreaResult.innerText);
});

textAreaInput.addEventListener("keyup", () => {
	if (
		/[A-Z]/.test(textAreaInput.value) ||
		/[éèàù]/.test(textAreaInput.value) ||
		/[\-+_!@#$%^&*.,?'"]/.test(textAreaInput.value)
	) {
		btnAreaEnctypt.disabled = true;
		btnAreaDecrypt.disabled = true;
		alertMessage.style.color = "red";
	} else {
		btnAreaEnctypt.disabled = false;
		btnAreaDecrypt.disabled = false;
		alertMessage.style.color = "black";
	}
});
