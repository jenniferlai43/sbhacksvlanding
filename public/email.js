$(document).ready(() => {
	console.log("in ajax");

	function resetForm(){
		$('#email_input').val("");
	}

	function emailSuccess()
	{
		var email_input = $('#email_input')[0];
        email_input.placeholder = "Added email to mailing list!";
        setTimeout(function(){ email_input.placeholder = "Enter Email for Notifications..."; }, 2000);
	}

	function emailDuplicate()
	{
		var email_input = $('#email_input')[0];
        email_input.placeholder = "That email is already added!";
        setTimeout(function(){ email_input.placeholder = "Enter Email for Notifications...";}, 2000);
	}

	function submitBackCheck()
      {
        var check = $('#check')[0];
        var submit_text = $('#submit_text')[0];
        check.style.display = "none";
        submit_text.style.display = "block";
      }

	function cssLoader()
      {
        var check = $('#check')[0];
        var submit_text = $('#submit_text')[0];
        check.style.display = "block";
        submit_text.style.display = "none";
        setTimeout(submitBackCheck, 2000);
      }

	function submitBackError()
      {
        var error = $('#error')[0];
        var submit_text = $('#submit_text')[0];
        error.style.display = "none";
        submit_text.style.display = "block";
      }

      function cssLoaderError()
      {
        var error = $('#error')[0];
        var submit_text = $('#submit_text')[0];
        error.style.display = "block";
        submit_text.style.display = "none";
        setTimeout(submitBackError, 2000);
      }     

	$('form').on('submit', (e) =>{
		e.preventDefault();
		var email_input = $('#email_input');
		var email = {email: email_input.val()};
		$.ajax({
			type: 'POST',
			url: '/email',
			data: email,
			success: ((response)=>{
				console.log("in success");
				resetForm();
				cssLoader();
				emailSuccess();
			}),
			error: ((xhr, status, error)=>{
				console.log("in error");
				//alert(xhr.responseJSON.message);
				resetForm();
				cssLoaderError();
				emailDuplicate();
			})
		});
		
	});
});