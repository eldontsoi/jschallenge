$('#useBilling').click(function(){
    this.checked;
    // console.log(this.checked);
    if (this.checked == false) {
        // console.log('lol')
        x = '';
        $('#home').val(x);
    }

    if(this.checked == true) {
        // console.log('lel')
        var x = $('#billing').val();
        $('#home').val(x).attr('readonly','readonly').attr('disabled',true);
         //grey out
    }
    // var x = $('#billing').val();
    // $('#home').val(x); //how to change this
    // console.log('hello??')
    // // console.log('i got clicked 3')

    // // console.log('i got clicked')
    // if ($('#useBilling').click(function(){
    //     check_box = false;
    //     console.log('false')
    //     $('#home').val(x).remove()
    // }if (check_box === false) {
    //     var y = ' ';
    //     $('home').val(y);
    // })

});



// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	if (this.checked){
// 		home.value = document.querySelector("#billing").value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}

// 	}
