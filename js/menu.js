
const inicio = document.querySelector(".inicio");

inicio.addEventListener("click", function(){

    document.getElementById('buscador0').style.display = 'flex';;
    document.getElementById('buscador1').style.display = 'none';;
    document.getElementById('buscador2').style.display = 'none';
    document.getElementById('buscador3').style.display = 'none';
    document.getElementById('buscador4').style.display = 'none';;
    document.getElementById('artistas-japo').style.display = 'none';;
    document.getElementById('artistas-lati').style.display = 'none';;
    document.getElementById('artistas-covers').style.display = 'none';;
    document.getElementById('anime').style.display = 'none';;
    document.getElementById('inicios').style.display = 'flex';;
})

const artistasJap = document.querySelector(".artistas-jap");

artistasJap.addEventListener("click", function(){

    document.getElementById('buscador0').style.display = 'none';;
    document.getElementById('buscador1').style.display = 'flex';;
    document.getElementById('buscador2').style.display = 'none';;
    document.getElementById('buscador3').style.display = 'none';;
    document.getElementById('buscador4').style.display = 'none';;
    document.getElementById('artistas-lati').style.display = 'none';;
    document.getElementById('artistas-covers').style.display = 'none';;
    document.getElementById('anime').style.display = 'none';;
    document.getElementById('inicios').style.display = 'none';;
    document.getElementById('artistas-japo').style.display = 'flex';;
});



const artistasLat = document.querySelector(".artistas-lat");

artistasLat.addEventListener("click", function(){

    document.getElementById('buscador0').style.display = 'none';;
    document.getElementById('buscador1').style.display = 'none';;
    document.getElementById('buscador2').style.display = 'flex';;
    document.getElementById('buscador3').style.display = 'none';;
    document.getElementById('buscador4').style.display = 'none';;
    document.getElementById('artistas-covers').style.display = 'none';;
    document.getElementById('anime').style.display = 'none';;
    document.getElementById('artistas-japo').style.display = 'none';;
    document.getElementById('inicios').style.display = 'none';;
    document.getElementById('artistas-lati').style.display = 'flex';;
});

const artistasCover = document.querySelector(".artistas-cover");

artistasCover.addEventListener("click", function(){

    document.getElementById('buscador0').style.display = 'none';;
    document.getElementById('buscador1').style.display = 'none';;
    document.getElementById('buscador2').style.display = 'none';
    document.getElementById('buscador3').style.display = 'flex';;
    document.getElementById('buscador4').style.display = 'none';;
    document.getElementById('artistas-lati').style.display = 'none';;
    document.getElementById('anime').style.display = 'none';;
    document.getElementById('artistas-japo').style.display = 'none';;
    document.getElementById('inicios').style.display = 'none';;
    document.getElementById('artistas-covers').style.display = 'flex';;
})

const anime = document.querySelector(".animes");

anime.addEventListener("click", function(){

    document.getElementById('buscador0').style.display = 'none';;
    document.getElementById('buscador1').style.display = 'none';;
    document.getElementById('buscador2').style.display = 'none';
    document.getElementById('buscador3').style.display = 'none';
    document.getElementById('buscador4').style.display = 'flex';;
    document.getElementById('artistas-japo').style.display = 'none';;
    document.getElementById('artistas-lati').style.display = 'none';;
    document.getElementById('inicios').style.display = 'none';;
    document.getElementById('artistas-covers').style.display = 'none';;
    document.getElementById('anime').style.display = 'flex';;
})

