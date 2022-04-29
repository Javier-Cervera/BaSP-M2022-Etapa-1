window.onload = function () {
	/* First name validation */
	var fname = document.getElementById('first-name');
	function validateFirstName() {
		if (validateChar(fname.value) && fname.value.length > 3) {
			if (fname.parentElement.querySelector(".valid") === null) {
				fname.insertAdjacentHTML('afterend', '<p class="valid">Valid first name</p>');
			}
		} else if (fname.value != '' && (fname.value.length <= 3 || !validateChar(fname.value))) {
			fname.insertAdjacentHTML('afterend', '<p class="invalid">Invalid first name. Use only letters and more than 3 of \
			them</p>');
			if (fname.parentElement.querySelector(".valid") !== null) {
				fname.parentElement.querySelector('.valid').remove();
			}
		}
		if (fname.nextSibling.className == 'valid' && fname.value == '') {
			fname.parentElement.querySelector('.valid').remove();
		}
	}
	function validateChar(string) {
		var aux = string.split('');
		return aux.every(function (s) {
			return ((s.charCodeAt() >= 65 && s.charCodeAt() < 91) || (s.charCodeAt() >= 97 && s.charCodeAt() < 123))
		});
	}
	function focus(element) {
		if (element.nextSibling.className == 'invalid') {
			element.parentElement.querySelector('.invalid').remove();
		}
	}
	fname.addEventListener('blur', validateFirstName);
	fname.addEventListener('focus', function () { focus(fname) });

	//Last name validation
	var lname = document.getElementById('last-name');
	function validateLastName() {
		if (validateChar(lname.value) && lname.value.length > 3) {
			if (lname.parentElement.querySelector(".valid") === null) {
				lname.insertAdjacentHTML('afterend', '<p class="valid">Valid last name</p>');
			}
		} else if (lname.value != '' && (lname.value.length <= 3 || !validateChar(lname.value))) {
			lname.insertAdjacentHTML('afterend', '<p class="invalid">Invalid last name. Use only letters and more than 3 of \
			them</p>');
			if (lname.parentElement.querySelector(".valid") !== null) {
				lname.parentElement.querySelector('.valid').remove();
			}
		}
		if (lname.nextSibling.className == 'valid' && lname.value == '') {
			lname.parentElement.querySelector('.valid').remove();
		}
	}
	lname.addEventListener('blur', validateLastName);
	lname.addEventListener('focus', function () { focus(lname) });

	// DNI validation
	var dni = document.getElementById('dni');
	function validateDni() {
		if (validateNum(dni.value) && dni.value.length > 7) {
			if (dni.parentElement.querySelector(".valid") === null) {
				dni.insertAdjacentHTML('afterend', '<p class="valid">Valid DNI</p>');
			}
		} else if (dni.value != '' && (dni.value.length <= 7 || !validateNum(dni.value))) {
			dni.insertAdjacentHTML('afterend', '<p class="invalid">Invalid DNI format. Use only numbers and more than 7 of \
			them</p>');
			if (dni.parentElement.querySelector(".valid") !== null) {
				dni.parentElement.querySelector('.valid').remove();
			}
		}
		if (dni.nextSibling.className == 'valid' && dni.value == '') {
			dni.parentElement.querySelector('.valid').remove();
		}
	}
	function validateNum(string) {
		var aux = string.split('');
		return aux.every(function (n) {
			return (n.charCodeAt() >= 48 && n.charCodeAt() <= 57)
		});
	}
	dni.addEventListener('blur', validateDni);
	dni.addEventListener('focus', function () { focus(dni) });

	// Date of birth validation
	var bday = document.getElementById('birthday');
	function validateBday() {
		var todayDate = new Date();
		var bdayDate = new Date(bday.value.substring(6), bday.value.substring(3, 5) - 1, bday.value.substring(0, 2));
		// Date format validation
		if (inRange(bday.value.substring(0, 2), 0, 31)
			&& bday.value.substring(2, 3) == '/'
			&& inRange(bday.value.substring(3, 5), 0, 12)
			&& bday.value.substring(5, 6) == '/'
			&& inRange(bday.value.substring(6), 1850, 2022)
			// Relation day-month (february 28 or 29 days for example)
			&& daysInMonth(bday.value.substring(3, 5), bday.value.substring(6)) >= bday.value.substring(0, 2)
			// Current date validation
			&& bdayDate <= todayDate
		) {
			if (bday.parentElement.querySelector(".valid") === null) {
				bday.insertAdjacentHTML('afterend', '<p class="valid">Valid birthday</p>');
			}
		} else if (bday.value != '') {
			bday.insertAdjacentHTML('afterend', '<p class="invalid">Invalid birthday date. Use valid dd/mm/yyyy date</p>');
			if (bday.parentElement.querySelector(".valid") !== null) {
				bday.parentElement.querySelector('.valid').remove();
			}
		}
		if (bday.nextSibling.className == 'valid' && bday.value == '') {
			bday.parentElement.querySelector('.valid').remove();
		}
	}
	function daysInMonth(m, y) {
		switch (m) {
			case '02':
				// Leap year
				return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
			case '04':
			case '06':
			case '09':
			case '11':
				return 30;
			default:
				return 31
		}
	}
	function inRange(n, start, end) {
		return n >= start && n <= end;
	}
	bday.addEventListener('blur', validateBday);
	bday.addEventListener('focus', function () { focus(bday) });

	// Phone number validation
	var phone = document.getElementById('telephone');
	function validatePhone() {
		if (validateNum(phone.value) && phone.value.length == 10) {
			if (phone.parentElement.querySelector(".valid") === null) {
				phone.insertAdjacentHTML('afterend', '<p class="valid">Valid phone</p>');
			}
		} else if (phone.value != '') {
			phone.insertAdjacentHTML('afterend', '<p class="invalid">Invalid phone. Use 10 numbers exactly</p>');
			if (phone.parentElement.querySelector(".valid") !== null) {
				phone.parentElement.querySelector('.valid').remove();
			}
		}
		if (phone.nextSibling.className == 'valid' && phone.value == '') {
			phone.parentElement.querySelector('.valid').remove();
		}
	}
	phone.addEventListener('blur', validatePhone);
	phone.addEventListener('focus', function () { focus(phone) });

	// Address validation
	var address = document.getElementById('address');
	function validateAddress() {
		if (address.value.length >= 5
			// Check for word first
			&& validateChar(address.value.substring(0, address.value.indexOf(' ')))
			// Check for number after whitespace
			&& validateNum(address.value.substring(address.value.indexOf(' ') + 1))
			// Check for second whitespace
			&& address.value.indexOf(' ', address.value.indexOf(' ') + 1) == -1
		) {
			if (address.parentElement.querySelector(".valid") === null) {
				address.insertAdjacentHTML('afterend', '<p class="valid">Valid address</p>');
			}
		} else if (address.value != '') {
			address.insertAdjacentHTML('afterend', '<p class="invalid">Invalid address. Use at least 5 characters, with \
			letters, numbers and a space in between</p>');
			if (address.parentElement.querySelector(".valid") !== null) {
				address.parentElement.querySelector('.valid').remove();
			}
		}
		if (address.nextSibling.className == 'valid' && address.value == '') {
			address.parentElement.querySelector('.valid').remove();
		}
	}
	address.addEventListener('blur', validateAddress);
	address.addEventListener('focus', function () { focus(address) });

	// Location validation
	var location = document.getElementById('location');
	function validateLocation() {
		if (validateAlphanumeric(location.value) && letterCounter(location.value) > 3) {
			if (location.parentElement.querySelector(".valid") === null) {
				location.insertAdjacentHTML('afterend', '<p class="valid">Valid location</p>');
			}
		} else if (location.value != '') {
			location.insertAdjacentHTML('afterend', '<p class="invalid">Invalid location. Use alphanumeric and more than 3 \
			letters</p>');
			if (location.parentElement.querySelector(".valid") !== null) {
				location.parentElement.querySelector('.valid').remove();
			}
		}
		if (location.nextSibling.className == 'valid' && location.value == '') {
			location.parentElement.querySelector('.valid').remove();
		}
	}
	function validateAlphanumeric(string) {
		var aux = string.split('');
		// Check for some integer, and some lowercase or uppercase character, and whitespace using ASCII code
		return aux.every(function (a) {
			return (a.charCodeAt() >= 48 && a.charCodeAt() <= 57) || (a.charCodeAt() >= 65 && a.charCodeAt() < 91)
				|| (a.charCodeAt() >= 97 && a.charCodeAt() < 123 || a.charCodeAt() == 32)
		});
	}
	function letterCounter(string) {
		var aux = string.split('');
		// Filter characters and count them with .length
		return aux.filter(function (letter) {
			return (letter.charCodeAt() >= 65 && letter.charCodeAt() < 91)
				|| (letter.charCodeAt() >= 97 && letter.charCodeAt() < 123)
		}).length;
	}
	location.addEventListener('blur', validateLocation);
	location.addEventListener('focus', function () { focus(location) });

	// Postal Code validation
	var postal = document.getElementById('postal-code');
	function validatePostal() {
		if (validateNum(postal.value) && postal.value.length >= 4 && postal.value.length <= 5) {
			if (postal.parentElement.querySelector(".valid") === null) {
				postal.insertAdjacentHTML('afterend', '<p class="valid">Valid postal</p>');
			}
		} else if (postal.value != '') {
			postal.insertAdjacentHTML('afterend', '<p class="invalid">Invalid postal. Use only numbers and between 4 and 5 of\
			 them</p>');
			if (postal.parentElement.querySelector(".valid") !== null) {
				postal.parentElement.querySelector('.valid').remove();
			}
		}
		if (postal.nextSibling.className == 'valid' && postal.value == '') {
			postal.parentElement.querySelector('.valid').remove();
		}
	}
	postal.addEventListener('blur', validatePostal);
	postal.addEventListener('focus', function () { focus(postal) });

	// Email validation
	var email = document.getElementById('email');
	function validateEmail() {
		var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		if (emailRegex.test(email.value)) {
			if (email.parentElement.querySelector(".valid") === null) {
				email.insertAdjacentHTML('afterend', '<p class="valid">Valid email</p>');
			}
		} else if (!emailRegex.test(email.value) && email.value != '') {
			email.insertAdjacentHTML('afterend', '<p class="invalid">Invalid email format</p>');
			if (email.parentElement.querySelector(".valid") !== null) {
				email.parentElement.querySelector('.valid').remove();
			}
		}
		if (email.nextSibling.className == 'valid' && email.value == '') {
			email.parentElement.querySelector('.valid').remove();
		}
	}
	function focus(element) {
		if (element.nextSibling.className == 'invalid') {
			element.parentElement.querySelector('.invalid').remove();
		}
	}
	email.addEventListener('blur', validateEmail);
	email.addEventListener('focus', function () { focus(email) });

	// Password validation
	var password = document.getElementById('pass');
	function validatePassword() {
		if (password.value != '' && (!validateNumAndChar(password.value) || password.value.length < 8)) {
			password.insertAdjacentHTML('afterend', '<p class="invalid">Invalid password. Use 8 letters AND numbers</p>');
			if (password.parentElement.querySelector(".valid") !== null) {
				password.parentElement.querySelector('.valid').remove();
			}
		} else if (password.parentElement.querySelector(".valid") === null) {
			if (validateNumAndChar(password.value) && password.value.length >= 8) {
				password.insertAdjacentHTML('afterend', '<p class="valid">Valid password</p>');
			}
		}
		if (password.nextSibling.className == 'valid' && password.value == '') {
			password.parentElement.querySelector('.valid').remove();
		}
	}
	function validateNumAndChar(string) {
		var aux = string.split('');
		// Check for some integer in [0, 9], and some lowercase or uppercase character using ASCII code
		// Check for special characters, checking that every char is either a number or an lower/uppercase char using ASCII
		return aux.some(function (n) { return n >= 0 && n <= 9 })
			&& aux.some(function (l) {
				return (l.charCodeAt() >= 65 && l.charCodeAt() < 91) || (l.charCodeAt() >= 97 && l.charCodeAt() < 123)
			})
			&& aux.every(function (s) {
				return (s.charCodeAt() >= 48 && s.charCodeAt() <= 57) || (s.charCodeAt() >= 65 && s.charCodeAt() < 91)
					|| (s.charCodeAt() >= 97 && s.charCodeAt() < 123)
			});
	}
	password.addEventListener('blur', validatePassword);
	password.addEventListener('focus', function () { focus(password) });

	// Repeat password validation
	var passwordRepeat = document.getElementById('pass-repeat');
	function validateRepeatedPassword() {
		if (password.value == passwordRepeat.value) {
			if (passwordRepeat.parentElement.querySelector(".valid") === null) {
				passwordRepeat.insertAdjacentHTML('afterend', '<p class="valid">Passwords match</p>');
			}
		} else if (passwordRepeat.value != '') {
			passwordRepeat.insertAdjacentHTML('afterend', '<p class="invalid">Passwords did not match</p>');
			if (passwordRepeat.parentElement.querySelector(".valid") !== null) {
				passwordRepeat.parentElement.querySelector('.valid').remove();
			}
		}
		if (passwordRepeat.nextSibling.className == 'valid' && passwordRepeat.value == '') {
			passwordRepeat.parentElement.querySelector('.valid').remove();
		}
	}
	passwordRepeat.addEventListener('blur', validateRepeatedPassword);
	passwordRepeat.addEventListener('focus', function () { focus(passwordRepeat) });

	/* Popup */
	var signupButton = document.getElementsByClassName('button-typo create')[0];
	var main = document.getElementsByTagName('main')[0];
	function createModal() {
		main.appendChild(document.createElement('div'));
		var popup = main.lastChild;
		popup.classList.add("signup-modal");
		popup.insertAdjacentHTML('afterbegin', '<h2 class="title-typo">Sign up confirmation</p>');
		popup.insertAdjacentHTML('beforeend', '<p>First name: <span>' + fname.value + '</span></p>');
		popup.insertAdjacentHTML('beforeend', verifyNullHtml(fname.nextElementSibling));
		popup.insertAdjacentHTML('beforeend', '<p>Last name: <span>' + lname.value + '</span></p>');
		popup.insertAdjacentHTML('beforeend', verifyNullHtml(lname.nextElementSibling));
		popup.insertAdjacentHTML('beforeend', '<p>DNI: <span>' + dni.value + '</span></p>');
		popup.insertAdjacentHTML('beforeend', verifyNullHtml(dni.nextElementSibling));
		popup.insertAdjacentHTML('beforeend', '<p>Date of birth: <span>' + bday.value + '</span></p>');
		popup.insertAdjacentHTML('beforeend', verifyNullHtml(bday.nextElementSibling));
		popup.insertAdjacentHTML('beforeend', '<p>Telephone: <span>' + phone.value + '</span></p>');
		popup.insertAdjacentHTML('beforeend', verifyNullHtml(phone.nextElementSibling));
		popup.insertAdjacentHTML('beforeend', '<p>Address: <span>' + address.value + '</span></p>');
		popup.insertAdjacentHTML('beforeend', verifyNullHtml(address.nextElementSibling));
		popup.insertAdjacentHTML('beforeend', '<p>Location: <span>' + location.value + '</span></p>');
		popup.insertAdjacentHTML('beforeend', verifyNullHtml(location.nextElementSibling));
		popup.insertAdjacentHTML('beforeend', '<p>Postal code: <span>' + postal.value + '</span></p>');
		popup.insertAdjacentHTML('beforeend', verifyNullHtml(postal.nextElementSibling));
		popup.insertAdjacentHTML('beforeend', '<p>Email: <span>' + email.value + '</span></p>');
		popup.insertAdjacentHTML('beforeend', verifyNullHtml(email.nextElementSibling));
		popup.insertAdjacentHTML('beforeend', '<p>Password: <span>' + password.value + '</span></p>');
		popup.insertAdjacentHTML('beforeend', verifyNullHtml(password.nextElementSibling));
		popup.insertAdjacentHTML('beforeend', '<p>Password confirmation: <span>' + passwordRepeat.value + '</span></p>');
		popup.insertAdjacentHTML('beforeend', verifyNullHtml(passwordRepeat.nextElementSibling));
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
	signupButton.addEventListener('click', createModal);
}