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

    for( var i = 0; i<list.length; i++){
        var todo = list[i];
        var item = themeplate.clone();
        item.find("em").text(todo.text);
        listHtml.append(item);
    }

    //FINE READY
});