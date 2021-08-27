
var buscador0 = $("#table0").DataTable();

$("#input-search0").keyup(function(){
    
    buscador0.search($(this).val()).draw();
    
    if ($("#input-search0").val() == "1"){
        $(".content-search0").fadeOut(300);
    }else{
        $(".content-search0").fadeIn(300);
    }
})

var buscador1 = $("#table1").DataTable();

$("#input-search1").keyup(function(){
    
    buscador1.search($(this).val()).draw();
    
    if ($("#input-search1").val() == "1"){
        $(".content-search1").fadeOut(300);
    }else{
        $(".content-search1").fadeIn(300);
    }
})

var buscador2 = $("#table2").DataTable();

$("#input-search2").keyup(function(){
    
    buscador2.search($(this).val()).draw();
    
    if ($("#input-search2").val() == "1"){
        $(".content-search2").fadeOut(300);
    }else{
        $(".content-search2").fadeIn(300);
    }
})

var buscador3 = $("#table3").DataTable();

$("#input-search3").keyup(function(){
    
    buscador3.search($(this).val()).draw();
    
    if ($("#input-search3").val() == "1"){
        $(".content-search3").fadeOut(300);
    }else{
        $(".content-search3").fadeIn(300);
    }
})

var buscador4 = $("#table4").DataTable();

$("#input-search4").keyup(function(){
    
    buscador4.search($(this).val()).draw();
    
    if ($("#input-search4").val() == "1"){
        $(".content-search4").fadeOut(300);
    }else{
        $(".content-search4").fadeIn(300);
    }
})


var buscadorCanciones = $("#table-canciones").DataTable();

$("#input-canciones").keyup(function(){
    
    buscador0.search($(this).val()).draw();
    
    if ($("#input-canciones").val() == "1"){
        $(".content-search-canciones").fadeOut(300);
    }else{
        $(".content-search-canciones").fadeIn(300);
    }
})