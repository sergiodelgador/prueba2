
$(document).ready(function(){
$("#myform").on('submit', function(event){
	var text = $("#mytext").val ();
	event.preventDefault();
	$("body").append(
		'<div class="note">'
		+'<div class="pin">'
		+'</div>'
		+ text
		+'</div>')
});

$('.pin').on('click', function(){
	$(this).parent().fadeOut(500);
	})
		
	});


