window.onload = function () {
	var email = document.getElementById('email');
	// console.log(email);
	function validateEmail () {
		var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		if (emailRegex.test(email.value)) {
			email.insertAdjacentHTML('afterend', '<p class="emailValidator">Valid email</p>');
		} else {
			email.insertAdjacentHTML('afterend', '<p class="emailValidator">Invalid email</p>');
		}
	}
	function focusEmail () {
		email.parentElement.getElementsByClassName('emailValidator').remove();
	}

	email.addEventListener('blur', validateEmail);
	
	email.addEventListener('focus', focusEmail);
}