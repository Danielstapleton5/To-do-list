//check off specific TODOs by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
})

//click on the X to delete TODO
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	})
	//this stops the 'bubbling effect'
	event.stopPropagation()
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
	var todotext = 	$(this).val()
	$(this).val('')
	//create a new li and add to ul
	$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todotext + '</li>')
	}
})
//click the plus to fade in the input or fade out

$('.fa-plus').click(function(){
	$("input[type='text']").fadeToggle()
})