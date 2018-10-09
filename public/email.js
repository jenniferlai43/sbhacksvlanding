$(document).ready(() => {
	console.log("in ajax");

	function resetForm(){
		$('#email_input').val("");
	}

	function submitBack()
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
        setTimeout(submitBack, 1900);
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
				cssLoader();
			})
		});
		
	});
});