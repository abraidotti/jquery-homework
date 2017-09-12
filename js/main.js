$(document).ready(function(){	
	console.log('Ready!');

	//Toggle images and change button label
	$('#toggleImages').click(function(){
 		console.log('User toggled images.');
 		$('img').toggle();
 		//change button label
		var value = $(this).html();
		if(value === 'Show images'){
			$(this).html('Hide images'); 
			} else {
				$(this).html('Show images');   		
				};
 	});

	//Change background color.
	$("#changeBGC").click(function(){
		console.log("User changed background color.");
		
			function getRandomColor(){
				var colorLetters = '0123456789ABCDEF';
				var randomColor = '#';

				for (var i = 0; i < 6; i++) {
					randomColor += letters[Math.floor(Math.random() * 16)];

			};

 			$('body').css('background-color', randomColor);
		});

	//Shrink images and disable shrink menu item
	$("#shrinkImages").click(function(){
		console.log("User shrank images.");
		$(this).addClass("disabled");
		$("#embiggenImages").removeClass("disabled");
 		$('img').css({'width':'50%', 'height':'50%'});
		});


	//Embiggen images and disable embiggen menu item
	$("#embiggenImages").click(function(){
		console.log("User embiggened images.");
		$(this).addClass("disabled");
		$("#shrinkImages").removeClass("disabled");
 		$('img').css({'width':'100%', 'height':'100%'});
		});

	//Apply a round border to images
	$("#roundImages").click(function(){
		console.log("User applied round image border.")
		$(this).addClass("disabled");
		$("#squareImages").removeClass("disabled");
		$('img').css('border-radius', '50px');
	});

	//Apply a round border to images
	$("#squareImages").click(function(){
		console.log("User applied square image border.")
		$(this).addClass("disabled");
		$("#roundImages").removeClass("disabled");
		$('img').css('border-radius', '0px');
	});

	// show/hide the console
	$('#imageConsole').hide();
	$('#toggleConsole').click(function(){
		console.log('User toggled console.');
    $('#imageConsole').toggle();
	});

});
