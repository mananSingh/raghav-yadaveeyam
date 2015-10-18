$(document).ready(function(){
	
	var output="";
	var i=1;
	$.getJSON('dual.json', function(data){
		$.each(data, function(key, val){
			output+='<div class="verse">';
			output+='<div class="card">';
			output+='<div class="front">';
			output+='<div class="num">'+i+'</div>';
			output+='<div class="shloka">';
			output+=val.ram;
			output+='</div>';
			output+='<div class="meaning">';
			output+=val.rame;
			output+='</div></div>'; 	//II div to end front
			output+='<div class="back">';
			output+='<div class="num">'+i+'</div>';
			output+='<div class="shloka">';
			output+=val.krishna;
			output+='</div>';
			output+='<div class="meaning">';
			output+=val.krishnae;
			output+='</div></div>';		//II div to end back
			output+='</div></div>';		//divs to end 'card'&'verse'
			i++;
		});
		$('#mainPage').html(output);
		$(".card").flip();
	});
});
