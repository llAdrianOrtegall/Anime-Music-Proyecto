
//*--Aaron Montalvo--*//

var x = 0;

var music = document.getElementById("player");

$("#player").bind("ended", function(){

    x=x+1;
    music.src = `./music/artistas lat/aaron/${x%11}.mp3`;
    music.load();
    music.play();

});

const adelantar = document.querySelector(".adelantar");

adelantar.addEventListener("click", function(){

        x=x+1;
        music.src = `./music/artistas lat/aaron/${x%11}.mp3`;
        music.load();
        music.play();

});

const retroceder = document.querySelector(".retroceder");

retroceder.addEventListener("click", function(){

        x=x-1;
        music.src = `./music/artistas lat/aaron/${x%11}.mp3`;
        music.load();
        music.play();

})

//*----*//


//*--Adrian Barba--*//

var x1 = 0;

var music1 = document.getElementById("player1");

$("#player1").bind("ended", function(){

    x1=x1+1;
    music1.src = `./music/artistas lat/adrian/${x1%12}.mp3`;
    music1.load();
    music1.play();

});

const adelantar1 = document.querySelector(".adelantar1");

adelantar1.addEventListener("click", function(){

        x1=x1+1;
        music1.src = `./music/artistas lat/adrian/${x1%12}.mp3`;
        music1.load();
        music1.play();

});

const retroceder1 = document.querySelector(".retroceder1");

retroceder1.addEventListener("click", function(){

        x1=x1-1;
        music1.src = `./music/artistas lat/adrian/${x1%12}.mp3`;
        music1.load();
        music1.play();

})

//*----*//

//*--Kimetsu No Yaiba--*//

var x10 = 0;

var music10 = document.getElementById("player10");

$("#player10").bind("ended", function(){

    x10=x10+1;
    music10.src = `./music/animes/kimetsu-no-yaiba/${x10%4}.mp3`;
    music10.load();
    music10.play();

});

const adelantar10 = document.querySelector(".adelantar10");

adelantar10.addEventListener("click", function(){

        x10=x10+1;
        music10.src = `./music/animes/kimetsu-no-yaiba/${x10%4}.mp3`;
        music10.load();
        music10.play();

});

const retroceder10 = document.querySelector(".retroceder10");

retroceder10.addEventListener("click", function(){

        x10=x10-1;
        music10.src = `./music/animes/kimetsu-no-yaiba/${x10%4}.mp3`;
        music10.load();
        music10.play();

})

//*----*//