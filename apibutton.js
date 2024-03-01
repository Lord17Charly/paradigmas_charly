$(document).ready(function() {
    const apidata = $('#apidata');
    const div = $('#info');
     

    $('#llamarjquery').click(function() {
        $.ajax({
            url: 'https://rickandmortyapi.com/api/character/',
            method: 'GET',
            success: function(data) {
                rendercharacter(data.results);
            }
        });
    });
    
    $('#llamarapi').click(function() {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(data => rendercharacter(data.results));
    });

    function rendercharacter(personajes){
        div.empty();
        personajes.forEach(ch => {
            div.append(`<img src='${ch.image}'> 
            <p>${ch.name}</p>  <p>${ch.gender}</p> <p>${ch.species}</p>`);
        });
    }
});

$('#limpiar').click (function() 
{
    console.log("se limpio la panalla")
    $('#apidata').empty();
    $('#info').empty();
});

  
    
