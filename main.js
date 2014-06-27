$(document).on('ready', function() {
  	$('.enter-profile').submit(function(e) {
	  	e.preventDefault();
	  	$('.user-name').html($('.form-user-name').val());
	  	$('.page-title').html($('.form-user-name').val() + '\'s Profile Page');

	  	$('.bio').html($('.form-user-bio textarea').val());

	  	$('.books ul').append('<li>' + $('.form-books1').val() + '</li>');
	   	$('.books ul').append('<li>' + $('.form-books2').val() + '</li>');

	    $('.js-libraries ul').append('<li>' + $('.form-js-libraries1').val() + '</li>');
	   	$('.js-libraries ul').append('<li>' + $('.form-js-libraries2').val() + '</li>'); 	
  });
  	
  	$('.show-hide-form').on('click', function() {
  		$('.enter-profile').toggleClass('is-hidden');
  		if($(this).html() === 'Enter profile info') {
  			$(this).html('Hide the Form');
  		}
  		else {
  			$(this).html('Enter profile info');
  		}
  	});

  	$('.form-user-name').on('blur', function() {
  		$('.user-name').html($(this).val());
  		
  	});
});