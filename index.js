const domPerfil = new Array();

domPerfil[0] = ["1.jpg"],
    domPerfil[1] = ["2.jpg"],
    domPerfil[2] = ["3.jpg"],
    domPerfil[3] = ["4.jpg"],
    domPerfil[4] = ["5.jpg"],
    domPerfil[5] = ["6.jpg"],
    domPerfil[6] = ["7.jpg"],
    domPerfil[7] = ["8.jpg"],
    domPerfil[8] = ["9.jpg"],
    domPerfil[9] = ["10.jpg"];

let fotosPerfil = document.getElementsByClassName("fotoHistoria");




let domFeed = new Array();

domFeed[0] = ["./imagenes/fotos del feed/1.jpg"],
    domFeed[1] = ["./imagenes/fotos del feed/2.jpg"],
    domFeed[2] = ["./imagenes/fotos del feed/3.jpg"],
    domFeed[3] = ["./imagenes/fotos del feed/4.jpg"],
    domFeed[4] = ["./imagenes/fotos del feed/5.jpg"],
    domFeed[5] = ["./imagenes/fotos del feed/6.jpg"],
    domFeed[6] = ["./imagenes/fotos del feed/7.jpg"],
    domFeed[7] = ["./imagenes/fotos del feed/8.jpg"],
    domFeed[8] = ["./imagenes/fotos del feed/9.jpg"],
    domFeed[9] = ["./imagenes/fotos del feed/10.jpg"];

let fotoFeed = document.getElementsByClassName("fotoFeed");

let domPie = new Array();

domPie[0] = '"Lo que haces hoy puede mejorar todos tus mañanas."';
domPie[1] = '"Cuando pierdas, no olvides la lección."';
domPie[2] = '"Vuelve a intentarlo. Fracasa de nuevo. Fracasa mejor."';
domPie[3] = '"Nuestra recompensa se encuentra en el esfuerzo y no en el resultado. Un esfuerzo total es una victoria completa."';
domPie[4] = '"Mientras más duro trabajo, más suerte tengo."';
domPie[5] = '"Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, sino un hábito."';
domPie[6] = '"Todo lo que hagas, hazlo con amor."';
domPie[7] = '"Poder decir adiós es crecer."';
domPie[8] = '"La palabra Recordar viene del latín “re-cordis”, que significa volver a pasar por el corazón."';
domPie[9] = '"Podrán cortar todas las flores, pero no podrán detener nuestra primavera."';

let Textpie = document.getElementsByClassName("publicacion_pie");

let user = ["Jose", "Maria", "Delia", "Pablo", "Ramon", "Ivan", "Bucky", "Carlos", "Hector", "Ramiro"];

function userRamdom() {
    let Newuser;
    return Newuser = user[Math.floor(Math.random() * 10)];
}



function creadorHistorias() {

    let divContainer = document.getElementById("historias");
    let div = document.createElement("div");
    div.className = "historys";
    fotosPerfil = domPerfil[Math.floor(Math.random() * 10)];
    let imagen = document.createElement("img");
    imagen.className = "fotoHistoria";

    imagen.src = fotosPerfil;


    let p = document.createElement("p");
    p.className = "userHistorys";

    p.innerHTML = userRamdom();

    div.appendChild(imagen);
    div.appendChild(p);
    divContainer.appendChild(div);

    div.style.display = "flex";


}

for (let i = 0; i < 10; i++) {

    creadorHistorias();

}

function creadorFeed() {

    let fotosDePerfil = domPerfil[Math.floor(Math.random() * 10)];

    fotoFeed = domFeed[Math.floor(Math.random() * 10)];

    Textpie = domPie[Math.floor(Math.random() * 10)];

    let usuario = userRamdom();
    let publicaciones = document.getElementById("publicaciones");

    let publicacion = document.createElement("div");
    publicacion.className = "publicacion";

    /////////
    let datoUser = document.createElement("div");
    datoUser.className = "dato_user";

    let fotoPerfil = document.createElement("img");
    fotoPerfil.className = "fotoPerfilFeed";
    fotoPerfil.src = fotosDePerfil;

    let nombreUser = document.createElement("p");
    nombreUser.className = "nombreUserFeed";
    nombreUser.innerHTML = usuario;
    ////

    let contenido = document.createElement("div");
    contenido.className = "contenido";


    let imgFeed = document.createElement("img");
    imgFeed.className = "fotoFeed";
    imgFeed.src = fotoFeed;

    ////

    let pie = document.createElement("div");
    pie.className = "pie";


    let userPie = document.createElement("p");
    userPie.className = "user_pie";
    userPie.innerHTML = usuario;


    let publicacionPie = document.createElement("p");
    publicacionPie.className = "publicacion_pie";
    publicacionPie.innerHTML = Textpie;
    /////////
    let br = document.createElement("br");
    ///////////

    let publi = document.createElement("div");
    publi.className = "publi";






    datoUser.appendChild(fotoPerfil);
    datoUser.appendChild(nombreUser);
    contenido.appendChild(imgFeed);
    pie.appendChild(userPie);
    pie.appendChild(publicacionPie);


    publicacion.appendChild(datoUser);
    publicacion.appendChild(contenido);
    publicacion.appendChild(pie);


    publi.appendChild(publicacion);

    publicaciones.appendChild(publi);

    publicacion.style.display = "flex";

}

for (let i = 0; i < 10; i++) {

    creadorFeed();

}



let form = document.getElementById("landingUser");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let usuario = document.getElementById("inputText").value;
    let user = document.getElementById("usuario");

    user.innerHTML = usuario;

    let landing = document.getElementById("landing");
    landing.style.display = "none";

    let container = document.getElementById("container");
    container.style.display = "flex";


})