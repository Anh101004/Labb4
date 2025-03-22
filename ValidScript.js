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


  function showMessage(msg, isError) {
	const messageContainer = document.getElementById("message");
	messageContainer.innerHTML = msg;
	messageContainer.style.color = isError ? "red" : "green";
  }

  function validForm(f) {
	
	if (checkNull(f.fullname)) {
	  showMessage("Fullname must not be empty.", true);
	  f.fullname.focus();
	  return false;
	}

	if (checkNull(f.age)) {
	  showMessage("Age must not be empty.", true);
	  f.age.focus();
	  return false;
	}

	if (!isInteger(f.age)) {
	  showMessage("Age must be a number.", true);
	  f.age.value = "";
	  f.age.focus();
	  return false;
	}

	let age = parseInt(f.age.value, 10);
	if (age <= 0 || age >= 120) {
	  showMessage("Age must be between 1 and 120.", true);
	  f.age.value = "";
	  f.age.focus();
	  return false;
	}

   
	if (notCheck(f.gender)) {
	  showMessage("You must select a gender.", true);
	  return false;
	}

 
	let phonePattern = /^\(\d{2,4}\)[\s.-]\d{3}[\s.-]\d{3}$/;
	if (!stringMatch(f.phone, phonePattern)) {
	  showMessage("Phone number is not valid. Format: (XX) XXX-XXX or (XXX) XXX-XXX", true);
	  f.phone.focus();
	  return false;
	}

	showMessage("Form hợp lệ! Đang tải lại...", false);
	f.reset();
	return false;
  }