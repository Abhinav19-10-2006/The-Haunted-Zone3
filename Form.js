class Form {
    constructor(){

    }
display(){
    var title = createElement('h2')
    title.html("The Haunted Zone");
    title.position(130,0);

    var input = createInput("Name");
    var button = createButton('Play');

    input.position(130,50);
    button.position(250,60);

    button.mousepressed(function(){
        input.hide();
        button.hide();

        var input = input.name();       
    });
}

}