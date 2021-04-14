/* popolando gli elementi della lista con JavaScript
* inserendo un nuovo todo con un input testuale e gli eventi da tastiera
* Rimozione todo con click su icona
* Cliccando sul testo compare uno sbarramento a indicarne il completamento
*/


$(document).ready(function(){

    var listHtml = $(".list");
    var input = $(".input");
    var themeplate = $(".themeplate");

    var list =[
        {
            text : "Mission 1",
            completed : false,
        },{
            text : "Mission 2",
            completed : false,
        },{
            text : "Mission 3",
            completed : false,
        },
    ];   

    //inserimento todo da js
    for( var i = 0; i<list.length; i++){
        var todo = list[i];
        var item = themeplate.clone();
        item.find("em").text(todo.text);
        listHtml.append(item);
    }

    //aggiunta nuovo todo da input
    input.keyup(function(e){
        //console.log(e.which);
        if( e.which === 13){
            var newToDo = input.val().trim();
            //console.log(newToDo);
            if( newToDo !== "" ){
                var item = themeplate.clone();
                item.find("em").text(newToDo);
                listHtml.append(item);
                input.val("");
            }
        }
    });

    //rimozione todo
    $('body').on('click', '.list li span', function(){
        $(this).parent().remove();
    });

    //indicare completamento todo
    $('body').on('click', '.list li em', function(){
        $(this).toggleClass("check");
    });

    //FINE READY
});