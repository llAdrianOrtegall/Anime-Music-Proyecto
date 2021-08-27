const aaronMontalvo = document.querySelector(".aaron-montalvo");

aaronMontalvo.addEventListener("click", function(){

    document.getElementById('adrian-barba').style.display = 'none';;
    document.getElementById("aaron-montalvo").style.backgroundImage = "url(https://www.egames.news/__export/1623955768689/sites/debate/img/2021/06/17/dragon-ball-gt_x5x.jpg_554688468.jpg)";
    document.getElementById('aaron-montalvo').style.display = 'block';;
})

const adrianBarba = document.querySelector(".adrian-barba")

adrianBarba.addEventListener("click", function(){

    document.getElementById('aaron-montalvo').style.display = 'none';;
    document.getElementById("adrian-barba").style.backgroundImage = "url(https://www.canalviax.com/wp-content/uploads/2018/07/MA%C3%91ANA-SALE-A-LA-VENTA-SLAM-DUNK-2-2.jpg)";
    document.getElementById('adrian-barba').style.display = 'block';;
})