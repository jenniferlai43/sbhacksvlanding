$(document).ready(() => {

	function resetForm(){
		$('#email_input').val("");
	}

	$('form').on('submit', (e) =>{
		e.preventDefault();
		var email_input = $('#email_input');
		var email = {email: email_input.val()};
		$.ajax({
			type: 'POST',
			url: '/email',
			data: email,
			success: ((data)=>{
				resetForm();
			})
		});
		
	});
});