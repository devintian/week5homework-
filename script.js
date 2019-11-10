$("#currentDay").text(moment().format("dddd , MMM Do YYYY"));
console.log(moment().format('H'));

for(var i=0;i<9;i++){
    var row = $("<div>");
    row.attr({
        "class" : "row",
        "id" : "lyy"+ i
    });
    var timeblock= $("<div>");
    timeblock.attr({
        "class": "time-block hour"
    });
    var text =$("<textarea>");
    text.attr({"class": "description","id": "text"+i})
    var svButton = $("<button>");
    svButton.attr("class", "saveBtn");



    row.append(timeblock);
    row.append(text);
    row.append(svButton);
    $(".container").append(row);
}

$(".row").each(function(i){
    //console.log($(this).children(".time-block"));
    if(i<4){
        $(this).children(".time-block").text(9+i +": 00"+ "am");
    }
    else{
        $(this).children(".time-block").text(i-3 +": 00" +"pm");
    }
    
});

$(".saveBtn").each(function(){
    var i = $('<i class="material-icons">alarm</i>');
    $(this).append(i);

})

$(".saveBtn").on("click", function(){
    //$(this).parent(".row")
    console.log($(this).parent().children(".description"));
    var task = $(this).parent().children(".description").val().trim();
    var taskId = $(this).parent().children(".description").attr("id");
    localStorage.setItem(taskId,task);
});

$("textarea").each(function(){
    console.log(this);
    var descriptionId = $(this).attr("id");
    var taskMes = localStorage.getItem(descriptionId);

    $(this).text(taskMes);
});



setInterval(() => {
    $(".time-block").each(function(){
        var currenttime = parseInt(moment().format('H'));
        //console.log(parseInt($(this).text()));
        var i = parseInt($(this).text());
        //console.log(i);
        //console.log(currenttime);
        if(i<6){
            i=i+12;
        }

        if(currenttime>i){
            var n =$(this).parent().children(".description");
            n.attr("class","description past");
        }
        else if (currenttime===i){
            var n =$(this).parent().children(".description");
            n.attr("class","description present");
        }
        else{
            var n =$(this).parent().children(".description");
            n.attr("class","description future");
        }    
    })
}, 100);



   