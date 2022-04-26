window.onload = function() {
	/* First name validation */
	var fname = document.getElementById('first-name');
	function validateFirstName() {
		if (validateChar(fname.value) && fname.value.length > 3) {
			if (fname.parentElement.querySelector(".valid") === null) {
				fname.insertAdjacentHTML('afterend', '<p class="valid">Valid first name</p>');
			}
		} else if (fname.value != '' && (fname.value.length <= 3 || !validateChar(fname.value))) {
			fname.insertAdjacentHTML('afterend', '<p class="invalid">Invalid first name. Use letters and at least 3</p>');
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
		return aux.every(function(s) {
				return ((s.charCodeAt() >= 65 && s.charCodeAt() < 91) || (s.charCodeAt() >= 97 && s.charCodeAt() < 123))
		});
	}
	function focus(element) {
		if (element.nextSibling.className == 'invalid') {
			element.parentElement.querySelector('.invalid').remove();
		}
	}
	fname.addEventListener('blur', validateFirstName);
	fname.addEventListener('focus', function(){focus(fname)});

	//Last name validation
	var lname = document.getElementById('last-name');
	function validateLastName() {
		if (validateChar(lname.value) && lname.value.length > 3) {
			if (lname.parentElement.querySelector(".valid") === null) {
				lname.insertAdjacentHTML('afterend', '<p class="valid">Valid last name</p>');
			}
		} else if (lname.value != '' && (lname.value.length <= 3 || !validateChar(lname.value))) {
			lname.insertAdjacentHTML('afterend', '<p class="invalid">Invalid last name. Use only letters and at least 3</p>');
			if (lname.parentElement.querySelector(".valid") !== null) {
				lname.parentElement.querySelector('.valid').remove();
			}
		}
		if (lname.nextSibling.className == 'valid' && lname.value == '') {
			lname.parentElement.querySelector('.valid').remove();
		}
	}
	lname.addEventListener('blur', validateLastName);
	lname.addEventListener('focus', function(){focus(lname)});

	// DNI validation
	var dni = document.getElementById('dni');
	function validateDni() {
		if (validateNum(dni.value) && dni.value.length > 7) {
			if (dni.parentElement.querySelector(".valid") === null) {
				dni.insertAdjacentHTML('afterend', '<p class="valid">Valid DNI</p>');
			}
		} else if (dni.value != '' && (dni.value.length <= 7 || !validateNum(dni.value))) {
			dni.insertAdjacentHTML('afterend', '<p class="invalid">Invalid DNI format. Use only numbers and at least 7</p>');
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
		return aux.every(function(n) { return n >= 0 && n <= 9});
	}
	dni.addEventListener('blur', validateDni);
	dni.addEventListener('focus', function(){focus(dni)});

	// Date of birth validation
	var bday = document.getElementById('birthday');
	function validateBday() {
		// console.log(typeof(bday.value.substring(3, 5)));
		if (inRange(bday.value.substring(0, 2), 0, 31)
			&& bday.value.substring(2, 3) == '/'
			&& inRange(bday.value.substring(3, 5), 0, 12)
			&& bday.value.substring(5, 6) == '/'
			&& inRange(bday.value.substring(6), 1850, 2022)
			&& daysInMonth(bday.value.substring(3, 5), bday.value.substring(6)) >= bday.value.substring(0, 2)
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
	bday.addEventListener('focus', function(){focus(bday)});
/*
	// Phone number validation
	var fname = document.getElementById('fname');
	function validatefname () {
		var fnameRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		if (fnameRegex.test(fname.value)) {
			if (fname.parentElement.querySelector(".valid") === null) {
				fname.insertAdjacentHTML('afterend', '<p class="valid">Valid fname</p>');
			}
		} else if (!fnameRegex.test(fname.value) && fname.value != ''){
			fname.insertAdjacentHTML('afterend', '<p class="invalid">Invalid fname format</p>');
			if (fname.parentElement.querySelector(".valid") !== null) {
				fname.parentElement.querySelector('.valid').remove();
			}
		}
		if (fname.nextSibling.className == 'valid' && fname.value == '') {
			fname.parentElement.querySelector('.valid').remove();
		}
	}
	fname.addEventListener('blur', validatefname);
	fname.addEventListener('focus', function(){focus(fname)});

	// Address validation
	var fname = document.getElementById('fname');
	function validatefname () {
		var fnameRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		if (fnameRegex.test(fname.value)) {
			if (fname.parentElement.querySelector(".valid") === null) {
				fname.insertAdjacentHTML('afterend', '<p class="valid">Valid fname</p>');
			}
		} else if (!fnameRegex.test(fname.value) && fname.value != ''){
			fname.insertAdjacentHTML('afterend', '<p class="invalid">Invalid fname format</p>');
			if (fname.parentElement.querySelector(".valid") !== null) {
				fname.parentElement.querySelector('.valid').remove();
			}
		}
		if (fname.nextSibling.className == 'valid' && fname.value == '') {
			fname.parentElement.querySelector('.valid').remove();
		}
	}
	fname.addEventListener('blur', validatefname);
	fname.addEventListener('focus', function(){focus(fname)});

	// Postal Code validation
	var fname = document.getElementById('fname');
	function validatefname () {
		var fnameRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		if (fnameRegex.test(fname.value)) {
			if (fname.parentElement.querySelector(".valid") === null) {
				fname.insertAdjacentHTML('afterend', '<p class="valid">Valid fname</p>');
			}
		} else if (!fnameRegex.test(fname.value) && fname.value != ''){
			fname.insertAdjacentHTML('afterend', '<p class="invalid">Invalid fname format</p>');
			if (fname.parentElement.querySelector(".valid") !== null) {
				fname.parentElement.querySelector('.valid').remove();
			}
		}
		if (fname.nextSibling.className == 'valid' && fname.value == '') {
			fname.parentElement.querySelector('.valid').remove();
		}
	}
	fname.addEventListener('blur', validatefname);
	fname.addEventListener('focus', function(){focus(fname)});

	// fname validation
	var fname = document.getElementById('fname');
	function validatefname () {
		var fnameRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		if (fnameRegex.test(fname.value)) {
			if (fname.parentElement.querySelector(".valid") === null) {
				fname.insertAdjacentHTML('afterend', '<p class="valid">Valid fname</p>');
			}
		} else if (!fnameRegex.test(fname.value) && fname.value != ''){
			fname.insertAdjacentHTML('afterend', '<p class="invalid">Invalid fname format</p>');
			if (fname.parentElement.querySelector(".valid") !== null) {
				fname.parentElement.querySelector('.valid').remove();
			}
		}
		if (fname.nextSibling.className == 'valid' && fname.value == '') {
			fname.parentElement.querySelector('.valid').remove();
		}
	}
	fname.addEventListener('blur', validatefname);
	fname.addEventListener('focus', function(){focus(fname)});

	// Password validation
	var fname = document.getElementById('fname');
	function validatefname () {
		var fnameRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		if (fnameRegex.test(fname.value)) {
			if (fname.parentElement.querySelector(".valid") === null) {
				fname.insertAdjacentHTML('afterend', '<p class="valid">Valid fname</p>');
			}
		} else if (!fnameRegex.test(fname.value) && fname.value != ''){
			fname.insertAdjacentHTML('afterend', '<p class="invalid">Invalid fname format</p>');
			if (fname.parentElement.querySelector(".valid") !== null) {
				fname.parentElement.querySelector('.valid').remove();
			}
		}
		if (fname.nextSibling.className == 'valid' && fname.value == '') {
			fname.parentElement.querySelector('.valid').remove();
		}
	}
	password.addEventListener('blur', validatePassword);
	password.addEventListener('focus', function(){focus(password)});

	// Password repeat validation
	var fname = document.getElementById('fname');
	function validatefname () {
		var fnameRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		if (fnameRegex.test(fname.value)) {
			if (fname.parentElement.querySelector(".valid") === null) {
				fname.insertAdjacentHTML('afterend', '<p class="valid">Valid fname</p>');
			}
		} else if (!fnameRegex.test(fname.value) && fname.value != ''){
			fname.insertAdjacentHTML('afterend', '<p class="invalid">Invalid fname format</p>');
			if (fname.parentElement.querySelector(".valid") !== null) {
				fname.parentElement.querySelector('.valid').remove();
			}
		}
		if (fname.nextSibling.className == 'valid' && fname.value == '') {
			fname.parentElement.querySelector('.valid').remove();
		}
	}
	password.addEventListener('blur', validatePassword);
	password.addEventListener('focus', function(){focus(password)});
	*/
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
		// popup.insertAdjacentHTML('beforeend', '<p>Password: <span>' + password.value + '</span></p>');
		// popup.insertAdjacentHTML('beforeend', verifyNullHtml(password.nextElementSibling));
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