//Check off specific todos by clicking
$('ul').on("click", ".todo-item", function() {
    $(this).toggleClass("completed");
});

//click on x to delete todo

$('ul').on("click", ".trash", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$('#toggler').on("click", function() {
    $("input[type='text']").fadeToggle();
});

$("input[type='text']").keypress(function(event) {
    if(event.which == 13) {
        //store input value in var
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("#todo-list").append("<li class='todo-item'><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

    }
});