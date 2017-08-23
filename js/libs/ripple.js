//jQuery time
var parent, ink, d, x, y;
$(".ripple").click(function(e){
	parent = $(this).parent();
	//create .ink element if it doesn't exist
	if(parent.find(".ink").length == 0)
		parent.prepend("<span class='ink'></span>");

	ink = parent.find(".ink");
	//incase of quick double clicks stop the previous animation
	ink.removeClass("animate");

	//set size of .ink
	ink.css({height: "40px", width: "40px"});


	//get click coordinates
	//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
	x = e.pageX - parent.offset().left - ink.width()/2;
	y = e.pageY - parent.offset().top - ink.height()/2;

	//set the position and add class .animate
	ink.css({top: y+'px', left: x+'px'}).addClass("animate");
})
