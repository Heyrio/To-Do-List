// check off to do by clicking

$("ul").on("click", "li", function() {

	$(this).toggleClass("completed");

});

// click on x to delete to do

$("ul").on("click", "span", function(e) {

	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	 e.stopPropagation();
});


$("input[type='text']").keypress(function(e){

	if(e.which === 13){

		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li> <span> <i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
		

	}




});
