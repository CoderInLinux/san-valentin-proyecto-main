const btnNo = document.querySelector("#btn-random")

function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%"
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%"
}

btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target)
})


window.onload = function () {
    setTimeout(() => {
        let audio = document.getElementById("miAudio");
        if (audio) audio.play().catch(error => console.log("Autoplay bloqueado:", error));
    }, 2000);
};

