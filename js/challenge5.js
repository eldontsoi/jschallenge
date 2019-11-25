var image = $('img')

for (let i = 0; i < image.length;i++) {
	// console.log(image[i]);
	$(image[i]).mouseover(function(){
		var alt = $(this).attr('alt');
		 $('div').html(alt);
		 console.log('this is alt text:' + alt)
		 var img = $(this).attr('src');
		 console.log('this is the source:' + img);
		 $('div').css('background-image',"url('"+img+"')");
	 $(image[i]).mouseleave(function(){
	 	$('div').html('Hover over an image below.');
	 	console.log('changes back')
	 	$('div').css('background-image','none');
	 })

	})  // COMPLETE THE FREAKING FOR LOOP :) //just join the strings and stuff lah very easy gal a
}

// $(image1).mouseover(function(){



// 	var alt = $(this).attr('alt');
// 	 $('div').html(alt);
// 	 console.log('alt text is changed')
// 	 var img = $(this).attr('src');
// 	 console.log(img);
// 	 $('div').css('background-image','url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg)');
// 	 // is it ok to get the image's link?
// })

// $(image1).mouseleave(function(){
// 	 $('div').html('Hover over an image below.');
// 	 console.log('changes back')
// 	 $('div').css('background-image','none');

// 	 // it works
// })

// $(image2).mouseover(function(){
// 	var alt = $(this).attr('alt');
// 	 $('div').html(alt);
// 	 console.log('alt text is changed')
// 	 $('div').css('background-image','url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon2.JPG)');
// })

// $(image2).mouseleave(function(){
// 	 $('div').html('Hover over an image below.');
// 	 $('div').css('background-image','none');
// 	 console.log('changes back')
// 	 // it works
// })

// $(image3).mouseover(function(){
// 	var alt = $(this).attr('alt');
// 	 $('div').html(alt);
// 	 console.log('alt text is changed')
// 	 $('div').css('background-image','url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon3.jpg)');
// })

// $(image3).mouseleave(function(){
// 	 $('div').html('Hover over an image below.');
// 	 $('div').css('background-image','none');
// 	 console.log('changes back')
// 	 // it works
// })

//should be working - just check with GSI on monday :) yay

// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
	 	// document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }

// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }
