$(document).ready(() => {

	function resetForm(){
		$('#email_input').val("");
	}

	$('#email_submit').on('click', (e) =>{
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