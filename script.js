let yourName= "Chime";
let friendsName="dragonfly";

$(".sent").show();
$(".f").click(function() {
    let d= $(".friend-input").val();
    console.log(d);
    $(".fol").append( "<li>" + d +" </li>");
    $("#counter").text(Number($('#counter').text())+1);
});

$(".m").click(function() {
    let c= $(".your-input").val();
    console.log(c);
    $(".mol").append("<li>"+c+"</li>");
   
});















//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}