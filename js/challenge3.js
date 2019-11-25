var fruit = false;
var standing = false;

$("input[type='submit']").click(function(e){
    if (fruit == true && standing == false) {
        e.preventDefault();
        alert('you must choose a standing!')
    }
    if (fruit == false && standing == true){
        e.preventDefault();
        alert('you must choose a fruit!')

    }
    if (fruit == false && standing == false){
        e.preventDefault();
        alert('you must choose a fruit and standing!')
}
})

$("input[name='fruit' ").click(function(){
    fruit = true;
    console.log(this.checked)
    console.log("yes i'm checked")})
$("input[name='standing' ").click(function(){
    standing = true;
    console.log(this.checked)
    console.log("yesasfsfds i'm checked")})

//debug








// if one is checked
//     if the otehr one is checked
//         if non is checked

// ch3form.onsubmit = function() {
//     var fruit = document.querySelectorAll('input[name="fruit"]')
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//     alert("You must pick a fruit!")
//     return false;
// // 3 conditions
//     // Advanced Answer
//     // if(document.querySelector('input[name="fruit"]:checked'))
//     //     return true;

//     // alert("You must pick a fruit!")
//     // return false;
//   }
