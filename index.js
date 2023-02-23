const colors=["red","green","blue","yellow"];
var no;
var colorno;
var clickedcolor;
const pattern=[];
const clickedpattern=[];
var level=0;
var toggle=0;
$(document).keypress(function () { 
    if(toggle==0)
    {
        $("#level-title").html("level 0");
        sequence();
    }
});
var j=0;
function sequence()
{
    j=0;
    toggle=1;
    no=Math.floor(Math.random() * 4);
    color=colors[no];
    pattern.push(color);
    $('#'+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio(color+'.mp3');
    audio.play();
    $("#level-title").html('level '+level);
}
$('.btn').click(function () { 
    if(toggle==1){
    clickedcolor=$(this).attr("id");
    animatePress(clickedcolor);
    clickedpattern.push(clickedcolor);
    if(j==level)
    {
        var audio = new Audio(clickedcolor+'.mp3');
        audio.play();
        while(clickedpattern.length > 0) {
            clickedpattern.pop();
        }
        level++;
        setTimeout(function () {sequence()}, 550);
    }
    else if(clickedpattern[j]==pattern[j])
    {
        var audio = new Audio(clickedcolor+'.mp3');
        audio.play();
        j++;
    }
    else
    {
            var audio = new Audio('wrong.mp3');
            audio.play();   
            $("#level-title").html('GAME OVER AT LEVEL  '+level);
            setTimeout(function () {
                $("#level-title").html("PRESS ANY KEY TO START");
            }, 1000);
            toggle=0;
            while(pattern.length > 0) {
                pattern.pop();
            }
            level=0;
    }
}
    //console.log(clickedcolor);
});
function animatePress(clickedcolor)
{
    $("#"+clickedcolor).addClass("pressed");
    setTimeout(function () {
        $("#" + clickedcolor).removeClass("pressed");
      }, 100);
}
