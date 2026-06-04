const mensaje = document.getElementById("mensaje");

const texto = "Happy Birthday My Love! 💖";

let i = 0;

function escribir(){

    if(i < texto.length){

        mensaje.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir,120);

    }

}

escribir();

function crearConfeti(){

    const confeti = document.createElement("div");

    confeti.classList.add("confetti");

    const colores = [
        "#ff1493",
        "#ffd700",
        "#00ffff",
        "#ffffff",
        "#66ff66",
        "#ff66cc"
    ];

    confeti.style.background =
    colores[Math.floor(Math.random()*colores.length)];

    confeti.style.left =
    Math.random()*window.innerWidth + "px";

    confeti.style.top = "-20px";

    confeti.style.borderRadius =
    Math.random() > 0.5 ? "50%" : "0";

    confeti.style.animationDuration =
    (Math.random()*4 + 3) + "s";

    document.body.appendChild(confeti);

    setTimeout(()=>{
        confeti.remove();
    },7000);

}

setInterval(crearConfeti,80);