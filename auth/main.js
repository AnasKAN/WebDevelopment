//! تعريف متغيرات الحقول الي موجود عندي في ملف ال html
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//! الزر اذا ضغط يشيك على اليثودز وملحقاتها ليتاكد من صحت النص المقدم وايضا ان الحقول ممتلئه
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

//! ميثود خاصة برفض الحقل
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
//!ميثود الخاصة بقبول الحقل
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
//! التحقق من الايميل و صحته من ناحية النصوص والعلامات 
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};


//! التعامل مع النصوص بالشروط طبعا ميثود كامله خاصة بهذه الخاصية
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "اسم المستخدم حقل  مطلوب");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "ادخل حساب ايميل صحيح");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "كامة السر حقل الزامي");
  } else if (passwordValue.length < 8) {
    setError(password, "ضع كلمة مرور مكونه من 8 خانات");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "قم بتاكيد كلمة المرور ");
  } else if (password2Value !== passwordValue) {
    setError(password2, "كلمة المرور لاتطابق ماسبق");
  } else {
    setSuccess(password2);
  }
  if (username.value.trim() !== "" &&
  isValidEmail(email.value.trim()) &&
  password.value.trim().length >= 8 &&
  password2.value.trim() === password.value.trim()) {
  form.submit(); //! إرسال النموذج
}
};
