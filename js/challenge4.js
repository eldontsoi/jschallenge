var fullname = false;
var streetaddr = false;

$("input[name='fullname' ").click(function(){
    // fullname = false;
    // if ($("#fullname").val().length == 0){
    //     $("#nameerrormsg").show();
    // }
    //     console.log('full name is empty');
    // if ($("input[name='fullname']").not(":empty")){
    //     fullname = true;
    //     console.log('full name is not empty');

    // }
})

// $("input[name='streetaddr']").click(function(){
//     if ($("input[name='streetaddr']").val().length == 0){
//         streetaddr = false;
//         console.log('streetaddr is not empty');
//         $("#addrerrormsg").show();
//     }
//     if ($("input[name='streetaddr']").not(":empty")){
//         streetaddr = true;
//         console.log('streetaddr is not empty');
//         $("#addrerrormsg").hide();

//     }
// })

//i dont knowwwww but it looks fine??

$("input[type='submit']").click(function(e){
    if ($('#fullname').val().length == 0) {
        fullname = false;
    }else{
        fullname = true;
        $("#nameerrormsg").hide();
    }
    if ($('#streetaddr').val().length == 0) {
        streetaddr = false;
    }else{
        streetaddr = true;
        $("#addrerrormsg").hide();
    }
    if (fullname==false && streetaddr==true){
        e.preventDefault();
        $("#nameerrormsg").show();
        $("#addrerrormsg").hide();
    }
    if (fullname==true && streetaddr==false){
        e.preventDefault();
        $("#addrerrormsg").show();
        $("#nameerrormsg").hide();
    }
    if (fullname == false && streetaddr == false){
        e.preventDefault();
        $("#addrerrormsg").show();
        $("#nameerrormsg").show();
    }
})

// $("input[name='fullname' ").click(function(){
//     $("input[name='fullname' ").is(":empty");
//     console.log(this.checked)
//     console.log("yes i'm checked")})
// $("input[name='streetaddr' ").click(function(){
//     standing = true;
//     console.log(this.checked)
//     console.log("yesasfsfds i'm checked")})

// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//     console.log("Here");
//     console.log(name);
//     console.log(address)
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }

//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }

//     return validInput;
// }
