$(function() {

	// Get the form.
	var form = $('#new_contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			//$('.say-hello').remove();
			$('.notice').append('<p class="notice" style="margin:20px 0 10px">Thank you. Your message has been sent!</p>');

			// Set the message text.
			//$(formMessages).text(response);

			// Clear the form.
			$('#contact_name').val('');
			$('#contact_email').val('');
			$('#contact_message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			//$('.notice').append('<p class="notice" style="margin:20px 0 10px">Please fill out everything in the form. (app.js 2)</p>');

			// Set the message text.
			if (data.responseText !== '') {
				$('.notice').append('<p class="notice" style="margin:20px 0 10px">Please fill everything out in the form.</p>');
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent. (app.js)');
			}
		});

	});

});
