var index;
var previous;
var next;

var gallery = {
	image: '.gallery__image',
	title: '.gallery__title',
	item: '.gallery__item'
}

var lightbox = {
	previousArrow: '.lightbox__prev',
	nextArrow: '.lightbox__next',
	lightbox: '.lightbox',
	close: '.lightbox__close',
	imagemage: '.lightbox__image',
	title: '.lightbox__title'
}


var classes = {
	active: 'active',
	inactive: 'inactive'
}

$(document).ready(function()
{
	var close = '<span class="lightbox__close"></span>';
	var previous = '<span class="lightbox__prev"></span>';
	var next = '<span class="lightbox__next"></span>';
	var title = '<span class="lightbox__title"></span>';
	var controls = '<div class="lightbox__controls">' + previous + title + next + '</div>';
	var contents = '<div class="lightbox__image"></div>';
	var canvas = '<div class="lightbox__canvas">' + contents + controls + '</div>';
	var lightbox = '<div class="lightbox">' + close + canvas + '</div>';

	$(lightbox).prependTo('body');

	var length = $('.gallery li').length;

	console.log(length);

	$(gallery.item).click(function()
	{

		// console.log($(this));

		$(lightbox.lightbox).addClass(classes.active);

		var item = $(this);
		index = item.index();

		// var image = item.find(gallery.image).css('background-image');
		// image = image.replace('url("','').replace('")','');

		// var imageTitle = item.find(gallery.title).html();

		// $('.gallery li.active').removeClass(classes.active);
		// item.addClass(classes.active);

		// var largeImage = new Image();
		// largeImage = image;

		// if (index === 0) {
		// 	$(lightbox.previousArrow).addClass(classes.inactive);
		// 	prev 
		// }

		// else if (index == length-1) {
		// 	$(lightbox.nextArrow).addClass(classes.inactive);
		// }

		// else {
		// 	$(lightbox.previousArrow).removeClass(classes.inactive);
		// 	$(lightbox.nextArrow).removeClass(classes.inactive);
		// }

		// $(lightbox.image).html('<img src="' + largeImage + '" style="opacity: 0;" />')
		// $(lightbox.image).find('img').fadeTo('slow', 1);
		// $(lightbox.title).html(imageTitle);

	});

	$(settings.close).click(function()
	{
		$(settings.lightbox).removeClass(classes.active);
		$('.gallery li.active').removeClass(classes.active);
	});

	// $('.gallery li').click(function()
	// {
	// 	$('.lightbox').addClass('active');

	// 	var item = $(this);
	// 	console.log(item);
	// 	index = item.index();
	// 	console.log("Index from display: " + index);

	// 	var image = item.find('.gallery__image').css('background-image');
	// 	image = image.replace('url("','').replace('"")','');

	// 	var imageTitle = item.find('.gallery__title').html();

	// 	$('.gallery li.active').removeClass('active');
	// 	item.addClass('active');

	// 	var largeImage = new Image();
	// 	largeImage = image;

	// 	if (index == 0) {
	// 		$('.lightbox__prev').addClass('inactive');
	// 	}
	// 	else if (index >= length-1) {
	// 		$('.lightbox__next').addClass('inactive');
	// 	}
	// 	else {
	// 		$('.lightbox__prev').removeClass('inactive');
	// 		$('.lightbox__next').removeClass('inactive');
	// 	}

	// 	$('.lightbox__image').html('<img src="' + largeImage + '" style="opacity: 0;" />')
	// 	$('.lightbox__image img').fadeTo('slow', 1);
	// 	$('.lightbox__title').html(imageTitle);

	// 	$('.lightbox__prev').click(function() {
	// 		// navigate(-1);
	// 		index = index - 1;
	// 		console.log("Previous: " + index);
	// 		display($('.gallery li:eq('+index+')'));
	// 	});

	// 	$('.lightbox__next').click(function() {
	// 		// navigate(1);
	// 		index = index + 1;
	// 		console.log("Next: " + index);
	// 		display($('.gallery li:eq('+index+')'));
	// 	});

	// 	$('.lightbox__close').click(function() {
	// 		// navigate(0);
	// 		$('.lightbox').removeClass('active');
	// 		$('.lightbox__canvas, .lightbox__title').html('');
	// 	});

	// });

});


function navigate(direction)
{

	if (direction == -1)
	{
		index = index - 1;
		console.log("Previous: " + index);
		display($('.gallery li:eq('+index+')'));
	}

	else if (direction == 1)
	{
		index = index + 1;
		console.log("Next: " + index);
		display($('.gallery li:eq('+index+')'));
	}

	else
	{
		$('.lightbox').removeClass('active');
		$('.lightbox__canvas, .lightbox__title').html('');
	}

}


function display(item)
{
	console.log(item);
	index = item.index();
	console.log("Index from display: " + index);

	var image = item.find('.gallery__image').css('background-image');
	image = image.replace('url("','').replace('"")','');

	var imageTitle = item.find('.gallery__title').html();

	$('.gallery li.active').removeClass('active');
	item.addClass('active');

	var largeImage = new Image();
	largeImage = image;

	if (index == 0) {
		$('.lightbox__prev').addClass('inactive');
	}
	else if (index >= length-1) {
		$('.lightbox__next').addClass('inactive');
	}
	else {
		$('.lightbox__prev').removeClass('inactive');
		$('.lightbox__next').removeClass('inactive');
	}

	$('.lightbox__image').html('<img src="' + largeImage + '" style="opacity: 0;" />')
	$('.lightbox__image img').fadeTo('slow', 1);
	$('.lightbox__title').html(imageTitle);

	$('.lightbox__prev').click(function() {
		// navigate(-1);
		index = index - 1;
		console.log("Previous: " + index);
		display($('.gallery li:eq('+index+')'));
	});

	$('.lightbox__next').click(function() {
		// navigate(1);
		index = index + 1;
		console.log("Next: " + index);
		display($('.gallery li:eq('+index+')'));
	});

	$('.lightbox__close').click(function() {
		// navigate(0);
		$('.lightbox').removeClass('active');
		$('.lightbox__canvas, .lightbox__title').html('');
	});

}











	// var index;
	// var size = $('.gallery li').length();

	// $('.gallery li').click(function() 
	// {
	// 	console.log($(this));
	// 	var image = $(this).find('.gallery__image').css('background-image');
	//     image = image.replace('url("','').replace('"")','');

	// 	var imageTitle = $(this).find('.gallery__title').html();

	// 	// $('.gallery li.active').removeClass('active');
	// 	$(this).addClass('active');

	// 	var largeImage = new Image();
	// 	largeImage = image;

	// 	if ($('.lightbox').length < 1)
	// 	{
	// 		var close = '<span class="lightbox__close"></span>';
	// 		var previous = '<span class="lightbox__prev"></span>';
	// 		var next = '<span class="lightbox__next"></span>';
	// 		var title = '<span class="lightbox__title"></span>';
	// 		var controls = '<div class="lightbox__controls">' + previous + title + next + '</div>';
	// 		var contents = '<div class="lightbox__image"></div>';
	// 		var canvas = '<div class="lightbox__canvas">' + contents + controls + '</div>';
	// 		var lightbox = '<div class="lightbox">' + close + canvas + '</div>';

	// 		$(lightbox).prependTo('body');
	// 	}

	// 	$('.lightbox').removeClass('inactive');

	// 	if ($(this).prev().length == 0) $('.lightbox__prev').addClass('inactive');
	// 	else $('.lightbox__prev').removeClass('inactive');

	// 	if ($(this).next().length == 0) $('.lightbox__next').addClass('inactive');
	// 	else $('.lightbox__next').removeClass('inactive');

	// 	$('.lightbox__image').html('<img src="' + largeImage + '" style="opacity: 0;" />');
	// 	$('.lightbox__image img').fadeTo('slow', 1);
	// 	$('.lightbox__title').html(imageTitle);

	// 	$('.lightbox__prev').click(function()
	// 	{
	// 		navigate(-1);
	// 	});

	// 	$('.lightbox__next').click(function()
	// 	{
	// 		navigate(1);
	// 	});

	// 	// $('.lightbox').click(function()
	// 	// {
	// 	// 	navigate(0);
	// 	// });

	// 	$('.lightbox__close').click(function()
	// 	{
	// 		navigate(0);
	// 	});

	// 	// $(document).keyup(function(e)
	// 	// {
	// 	// 	if ($('.lightbox:visible').length == 1)
	// 	// 	{
	// 	// 		if (e.keyCode == "37") { if ($(this).prev().length == 0) navigate(-1); }
	// 	// 		else if (e.keyCode == "39") { if ($(this).next().length == 0) navigate(1); }
	// 	// 		else if (e.keyCode == "27") navigate(0);
	// 	// 	}
	// 	// });
	// });




// function navigate(direction)
// {
// 	if (direction == -1) 
// 	{ 
// 		var previous = $('.gallery li.active').prev();
// 		console.log(previous);
// 		$('.gallery li.active').removeClass('active');
// 		$(previous).trigger('click');
// 		// $('.gallery li.active').prev().trigger('click');
// 		// console.log($('.gallery li.active').prev());
// 		// display($('.gallery li.active').prev());
// 		// index = index - 1;
// 		// $('.gallery li.active').removeClass('active');
// 		// $('.gallery li:eq('+index+')').trigger('click');
// 		// console.log($('.gallery li:eq('+index+')'));
// 	}
// 	else if (direction == 1) 
// 	{ 
// 		var next = $('.gallery li.active').next();
// 		console.log(next);
// 		$('.gallery li.active').removeClass('active');
// 		$(next).trigger('click');
// 		// $('.gallery li.active').next().trigger('click');
// 		// console.log($('.gallery li.active').next());
// 		// display($('.gallery li.active').next());
// 		// index = index + 1;
// 		// $('.gallery li.active').removeClass('active');
// 		// $('.gallery li:eq('+index+')').trigger('click');
// 		// console.log($('.gallery li:eq('+index+')'))
// 	}
// 	else if (direction == 0) 
// 	{
// 		$('.gallery li.active').removeClass('active');
// 		// $('.lightbox, .lightbox__canvas, .lightbox__controls').fadeOut('slow', function()
// 		// {
// 			$('.lightbox').addClass('inactive');
// 			// $('.lightbox__canvas, .lightbox__title').html('');
// 			// $('.lightbox__prev, .lightbox__next').removeClass('inactive');
// 		// })
// 	}
// }



// $(document).ready(function(){
// 	var item, img, title, large_img;
// 	var CW, CH, CL, CT, hpadding, vpadding, imgtag;
// 	//Flag for preventing multiple image displays
// 	var lb_loading = false;
// 	var doc = $(document);
	
// 	$(".gallery li").click(function(){
// 		if(lb_loading) return false;
// 		lb_loading= true;
		
// 		item = $(this);
// 		img = item.find("img");
// 		title = item.find(".title").html();
		
// 		//Remove active class from previously clicked LI
// 		$(".gallery li.active").removeClass("active");
// 		//Mark the clicked LI as active for later use
// 		item.addClass("active");
		
// 		//The large image
// 		large_img = new Image();
// 		//Use data-large or the src itself if large image url is not available
// 		large_img.src = img.attr("data-large") ? img.attr("data-large") : img.attr("src");
		
// 		//Adding additional HTML - only if it hasn't been added before
// 		if($(".lb_backdrop").length < 1)
// 		{
// 			var lb_backdrop = '<div class="lb_backdrop"></div>';
// 			var lb_canvas = '<div class="lb_canvas"></div>';
// 			var lb_previous = '<span class="lb_previous"><</span>';
// 			var lb_title = '<span class="lb_title"></span>';
// 			var lb_next = '<span class="lb_next">></span>';
// 			var lb_controls = '<div class="lb_controls">'+lb_previous+lb_title+lb_next+'</div>';
// 			var total_html = lb_backdrop+lb_canvas+lb_controls;
			
// 			$(total_html).appendTo("body");
// 		}
// 		//Fade in lightbox elements if they are hidden due to a previous exit
// 		if($(".lb_backdrop:visible").length == 0)
// 		{
// 			$(".lb_backdrop, .lb_canvas, .lb_controls").fadeIn("slow");
// 		}
		
// 		//Display preloader till the large image loads and make the previous image translucent so that the loader in the BG is visible
// 		if(!large_img.complete) 
// 			$(".lb_canvas").addClass("loading").children().css("opacity", "0.5")
		
// 		//Disabling left/right controls on first/last items
// 		if(item.prev().length == 0)
// 			$(".lb_previous").addClass("inactive");
// 		else
// 			$(".lb_previous").removeClass("inactive");
// 		if(item.next().length == 0)
// 			$(".lb_next").addClass("inactive");
// 		else
// 			$(".lb_next").removeClass("inactive");
		
// 		//Centering .lb_canvas
// 		CW = $(".lb_canvas").outerWidth();
// 		CH = $(".lb_canvas").outerHeight();
// 		//top and left coordinates
// 		CL = ($(window).width() - CW)/2;
// 		CT = ($(window).height() - CH)/2;
// 		$(".lb_canvas").css({top: CT, left: CL});
		
// 		//Inserting the large image into .lb_canvas once it's loaded
// 		$(large_img).load(function(){
// 			//Recentering .lb_canvas with new dimensions
// 			CW = large_img.width;
// 			CH = large_img.height;
// 			//.lb_canvas padding to be added to image width/height to get the total dimensions
// 			hpadding = parseInt($(".lb_canvas").css("paddingLeft")) + parseInt($(".lb_canvas").css("paddingRight"));
// 			vpadding = parseInt($(".lb_canvas").css("paddingTop")) + parseInt($(".lb_canvas").css("paddingBottom"));
// 			CL = ($(window).width() - CW - hpadding)/2;
// 			CT = ($(window).height() - CH - vpadding)/2;
			
// 			//Animating .lb_canvas to new dimentions and position
// 			$(".lb_canvas").html("").animate({width: CW, height: CH, top: CT, left: CL}, 500, function(){
// 				//Inserting the image but keeping it hidden
// 				imgtag = '<img src="'+large_img.src+'" style="opacity: 0;" />';
// 				$(".lb_canvas").html(imgtag);
// 				$(".lb_canvas img").fadeTo("slow", 1);
// 				//Displaying the image title
// 				$(".lb_title").html(title);
				
// 				lb_loading= false;
// 				$(".lb_canvas").removeClass("loading");
// 			})
// 		})
// 	})
	
// 	//Click based navigation
// 	doc.on("click", ".lb_previous", function(){ navigate(-1) });
// 	doc.on("click", ".lb_next", function(){ navigate(1) });
// 	doc.on("click", ".lb_backdrop", function(){ navigate(0) });
	
// 	//Keyboard based navigation
// 	doc.keyup(function(e){
// 		//Keyboard navigation should work only if lightbox is active which means backdrop is visible.
// 		if($(".lb_backdrop:visible").length == 1)
// 		{
// 			//Left
// 			if(e.keyCode == "37") navigate(-1);
// 			//Right
// 			else if(e.keyCode == "39") navigate(1);
// 			//Esc
// 			else if(e.keyCode == "27") navigate(0);
// 		}
// 	});
	
// 	//Navigation function
// 	function navigate(direction)
// 	{
// 		if(direction == -1) // left
// 			$("#lightbox li.active").prev().trigger("click");
// 		else if(direction == 1) //right
// 			$("#lightbox li.active").next().trigger("click");
// 		else if(direction == 0) //exit
// 		{
// 			$("#lightbox li.active").removeClass("active");
// 			$(".lb_canvas").removeClass("loading");
// 			//Fade out the lightbox elements
// 			$(".lb_backdrop, .lb_canvas, .lb_controls").fadeOut("slow", function(){
// 				//empty canvas and title
// 				$(".lb_canvas, .lb_title").html("");
// 			})
// 			lb_loading= false;
// 		}
// 	}
// })




