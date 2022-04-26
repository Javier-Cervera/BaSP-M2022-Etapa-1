window.onload = function() {
	/* Email validation */
	var email = document.getElementById('email');
	function validateEmail() {
		var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		if (emailRegex.test(email.value)) {
			// Check if there isn't already a valid message
			if (email.parentElement.querySelector(".valid") === null) {
				email.insertAdjacentHTML('afterend', '<p class="valid">Valid email</p>');
			}
		// Check if the validation doesn't pass, and if the string isn't empty
		} else if (!emailRegex.test(email.value) && email.value != '') {
			email.insertAdjacentHTML('afterend', '<p class="invalid">Invalid email format</p>');
			// Check if there is an old valid message and delete it
			if (email.parentElement.querySelector(".valid") !== null) {
				email.parentElement.querySelector('.valid').remove();
			}
		}
		// Check if the input's left empty
		if (email.nextSibling.className == 'valid' && email.value == '') {
			email.parentElement.querySelector('.valid').remove();
		}
	}
	function focus(element) {
		// Check if there is an error message
		if (element.nextSibling.className == 'invalid') {
			element.parentElement.querySelector('.invalid').remove();
		}
	}
	email.addEventListener('blur', validateEmail);
	// Anonymous function to pass parameters into the event listener
	email.addEventListener('focus', function(){focus(email)});

	/* Password validation */
	var savedPassword = 'radium22'
	var password = document.getElementById('password');
	function validatePassword() {
		// Check first for an empty string, and then if it fulfills the requirements
		if (password.value != '' && (!validateNumAndChar(password.value) || password.value.length < 8)) {
			password.insertAdjacentHTML('afterend',
			 '<p class="invalid">Invalid password. Use 8 letters AND numbers (or use default password: radium22)</p>');
			// Check if there is an old valid message and delete it
			if (password.parentElement.querySelector(".valid") !== null) {
				password.parentElement.querySelector('.valid').remove();
			}
		// Check if there isn't a valid message already
		} else if (password.parentElement.querySelector(".valid") === null) {
			if (password.value === savedPassword) {
				password.insertAdjacentHTML('afterend', '<p class="valid">Valid password</p>');
			}	else if (validateNumAndChar(password.value) && password.value.length >= 8) {
				password.insertAdjacentHTML('afterend', '<p class="valid">Valid password</p>');
			}
		}
		// Check if the input's left empty
		if (password.nextSibling.className == 'valid' && password.value == '') {
			password.parentElement.querySelector('.valid').remove();
		}
	}
	function validateNumAndChar(string) {
		var aux = string.split('');
		// Check for some integer in [0, 9], and some lowercase or uppercase character using ASCII code
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
	password.addEventListener('blur', validatePassword);
	password.addEventListener('focus', function(){focus(password)});

	/* Popup */
	var loginButton = document.getElementsByClassName('button-typo login')[0];
	var main = document.getElementsByTagName('main')[0];
	function createModal() {
		main.appendChild(document.createElement('div'));
		var popup = main.lastChild;
		popup.classList.add("login-modal");
		popup.insertAdjacentHTML('afterbegin', '<h2 class="title-typo">Log in confirmation</p>');
		popup.insertAdjacentHTML('beforeend', '<p>Email: <span>' + email.value + '</span></p>');
		popup.insertAdjacentHTML('beforeend', verifyNullHtml(email.nextElementSibling));
		popup.insertAdjacentHTML('beforeend', '<p>Password: <span>' + password.value + '</span></p>');
		popup.insertAdjacentHTML('beforeend', verifyNullHtml(password.nextElementSibling));
		popup.insertAdjacentHTML('beforeend', '<button class="button-typo" type="button">Close</button>');
		popup.getElementsByTagName('button')[0].addEventListener('click', deleteModal);
	}
	function verifyNullHtml(element) {
		if (element === null) {
			return '<p class="invalid">Value not entered</p>';
		} else {
			return element.outerHTML;
		}
	}
	function deleteModal() {
		main.lastChild.remove();
	}
	loginButton.addEventListener('click', createModal);
}