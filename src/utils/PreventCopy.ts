export default function PreventCopy() {
	window.addEventListener("copy", (e) => {
		if (e.clipboardData !== null) {
			e.preventDefault();
			e.clipboardData.setData("Text", "복사하시면 안돼요!!");
		}
	});
}
