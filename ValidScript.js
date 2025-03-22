function checkNull(txt) {
	return txt.value.trim().length === 0;
  }

  function isInteger(txt) {
	return /^\d+$/.test(txt.value);
  }

  function notCheck(radio) {
	for (let i = 0; i < radio.length; i++) {
	  if (radio[i].checked) return false;
	}
	return true;
  }

  function stringMatch(txt, reg) {
	return reg.test(txt.value);
  }

  function validForm(f) {
	if (checkNull(f.fullname)) {
	  alert("Fullname must not be empty.");
	  f.fullname.focus();
	  return false;
	}

	if (checkNull(f.age)) {
	  alert("Age must not be empty.");
	  f.age.focus();
	  return false;
	}

	if (!isInteger(f.age)) {
	  alert("Age must be a number.");
	  f.age.value = "";
	  f.age.focus();
	  return false;
	}

	let age = parseInt(f.age.value, 10);
	if (age <= 0 || age >= 120) {
	  alert("Age must be between 1 and 120.");
	  f.age.value = "";
	  f.age.focus();
	  return false;
	}

	if (notCheck(f.gender)) {
	  alert("You must select a gender.");
	  return false;
	}

	let phonePattern = /^\(\d{2,4}\)[\s.-]\d{3}[\s.-]\d{3}$/;
	if (!stringMatch(f.phone, phonePattern)) {
	  alert("Phone number is not valid. Format: (XX) XXX-XXX or (XXX) XXX-XXX");
	  f.phone.focus();
	  return false;
	}

	alert("Form hợp lệ! Đang tải lại...");
	f.reset();
	return false;
  }