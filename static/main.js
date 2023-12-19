// const socket = new WebSocket("ws://" + location.host + "/color");
function sendColor(color) {
    fetch(`/color/${color}`)
        .then(response => response.text())
        .then(data => console.log(data));
}

function toggleSwitch(element) {
    let color = element.checked ? 'on' : 'off';
    fetch(`/color/${color}`)
        .then(response => response.text())
        .then(data => console.log(data));
}

document.addEventListener("DOMContentLoaded", function () {
	let buttons = document.querySelectorAll(".btn");
    // let switch_on_off = document.querySelector(".switch");
    // let click = 0;

    // switch_on_off.addEventListener("click", function () {
    //     if (click % 2 == 0) {
    //         socket.send("on");
    //     }
    //     else {
    //         socket.send("off");
    //     }
    //     click += 1;
    // });
    
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

            // socket.send(button.id);
		});
	});
});
