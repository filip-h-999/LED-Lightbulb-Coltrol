const socket = new WebSocket("ws://" + location.host + "/color");

document.addEventListener("DOMContentLoaded", function () {
	let buttons = document.querySelectorAll(".btn");

	buttons.forEach((button) => {
		if (!window.matchMedia("only screen and (max-width: 760px)").matches) {
			button.addEventListener("mouseover", function () {
				buttons.forEach((btn) => {
					if (btn !== this) btn.classList.add("darken");
				});
			});

			button.addEventListener("mouseout", function () {
				buttons.forEach((btn) => btn.classList.remove("darken"));
			});
		}
		button.addEventListener("click", function () {
			let audio = new Audio("/static/audio/click.mp3");
			audio.play();

            socket.send(button.id);
		});
	});
});
