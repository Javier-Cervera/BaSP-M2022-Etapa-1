window.onload = function () {
	// Email validation
	var email = document.getElementById('email');
	function validateEmail () {
		var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		if (emailRegex.test(email.value)) {
			email.insertAdjacentHTML('afterend', '<p class="valid">Valid email</p>');
		} else if (!emailRegex.test(email.value) && email.value != ''){
			email.insertAdjacentHTML('afterend', '<p class="invalid">Invalid email format</p>');
		}
	}
	function focusEmail () {
		// Check if there is an error message
		if (email.nextSibling.className == 'valid' || email.nextSibling.className == 'invalid') {
			email.parentElement.querySelector('.valid , .invalid').remove();
		}
	}
	email.addEventListener('blur', validateEmail);
	email.addEventListener('focus', focusEmail);

	// Password validation
	var savedPassword = 'radium22'
	var password = document.getElementById('password');
	function validatePassword () {
		// Check first for empty string and then if it fulfills the requirements
		if (password.value != '' && (!validateNumAndChar(password.value) || password.value.length < 8)) {
			password.insertAdjacentHTML('afterend',
			 '<p class="invalid">Invalid password. Use 8 letters AND numbers (or use default password: radium22)</p>');
		} else if (password.value === savedPassword) {
			password.insertAdjacentHTML('afterend', '<p class="valid">Valid default password</p>');
		} else if (validateNumAndChar(password.value) && password.value.length >= 8) {
			password.insertAdjacentHTML('afterend', '<p class="valid">Valid password</p>');
		}
	}
	function validateNumAndChar(string) {
		var aux = string.split('');
		// Check for integer in [0, 9], and lowercase and uppercase character using ASCII code
		// Check for special characters, checking that every char is either a number or an lower/uppercase char using ASCII
		return aux.some(function(n) {return n >= 0 && n <= 9})
			&& aux.some(function(l) {
			 return (l.charCodeAt() >= 65 && l.charCodeAt() < 91) || (l.charCodeAt() >= 97 && l.charCodeAt() < 123)
			})
			&& aux.every(function(s) {
				return (s.charCodeAt() >= 48 && s.charCodeAt() <= 57) || (s.charCodeAt() >= 65 && s.charCodeAt() < 91)
				 || (s.charCodeAt() >= 97 && s.charCodeAt() < 123)
			});
	}
	function focusPassword () {
		// Check if there is an error message
		if (password.nextSibling.className == 'valid' || password.nextSibling.className == 'invalid') {
			password.parentElement.querySelector('.valid , .invalid').remove();
		}
	}
	password.addEventListener('blur', validatePassword);
	password.addEventListener('focus', focusPassword);

	// Popup
	var loginbutton = document.getElementsByClassName('button-typo login')[0];
	//function createModal
	loginbutton.addEventListener('click', createModal);
	//var popup = document.getElementsByClassName('login-modal')[0];
	//console.log(popup);
	console.log(loginbutton);
}