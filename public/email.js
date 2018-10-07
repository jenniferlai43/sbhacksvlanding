$(document).ready(() => {

	function resetForm(){
		$('#email_input').val("");
	}

	$('#email_submit').on('click', () =>{
		var email = $('#email_input').val();
		$.ajax({
			type: 'POST',
			url: '/email',
			data: email,
			success: ((data)=>{
				resetForm();
				alert("Email added to mailing list!");
			});
		});
		return false;
	});
});