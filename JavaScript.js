const yesBtn = document.querySelector(".yes_btn");
const noBtn = document.querySelector(".no_btn");

const describeBtns = document.querySelectorAll(".describe_btn");
const DataSubmitBtn = document.querySelector(".submit_input");
const describeBtns2 = document.querySelectorAll(".describe_btn_1");
const jobBtn = document.getElementById("submit_1");
const yearMonthBtn = document.getElementById("submit_y_m");
const earnBtn = document.getElementById("submit_error");
const adressBtn = document.querySelectorAll(".button_item");
const swups = [
  document.querySelector("#swup_1"),
  document.querySelector("#swup_2"),
  document.querySelector("#swup_3"),
  document.querySelector("#swup_4"),
  document.querySelector("#swup_5"),
  document.querySelector("#swup_6"),
  document.querySelector("#swup_7"),
  document.querySelector("#swup_8"),
  document.querySelector("#swup_9"),
  document.querySelector("#swup_10"),
  document.querySelector("#swup_11"),
  document.querySelector("#swup_12"),
  document.querySelector("#swup_13"),
];

yesBtn.addEventListener("click", (event) =>
  showNextPage(event, swups[0], swups[1])
);
noBtn.addEventListener("click", (event) =>
  showNextPage(event, swups[0], swups[1])
);
describeBtns.forEach((btn) =>
  btn.addEventListener("click", (event) =>
    showNextPage(event, swups[1], swups[2])
  )
);
describeBtns2.forEach((btn) =>
  btn.addEventListener("click", (event) =>
    showNextPage(event, swups[3], swups[4])
  )
);
adressBtn.forEach((btn) =>
  btn.addEventListener("click", (event) =>
    showNextPage(event, swups[8], swups[9])
  )
);

let procentBar = document.querySelector(".procent_bar");
let totalSteps = 13; // общее количество шагов
let currentStep = 0; // текущий шаг

function showNextPage(event, currentSwup, nextSwup) {
  event.preventDefault();
  currentSwup.style.visibility = "hidden";
  currentSwup.style.transform = "translateX(-100%)";
  nextSwup.style.transform = "translateX(0)";
  nextSwup.style.visibility = "visible";

  // увеличиваем текущий шаг
  if (currentStep < totalSteps) {
    currentStep++;
  }
  // вычисляем новую ширину в процентах
  let newWidth = (currentStep / totalSteps) * 100;
  // обновляем ширину элемента procentBar
  procentBar.style.width = newWidth + "%";
}

function previousPage(event, currentSwup, previousSwup) {
  event.preventDefault();
  currentSwup.style.visibility = "hidden";
  currentSwup.style.transform = "translateX(100%)";
  previousSwup.style.transform = "translateX(0)";
  previousSwup.style.visibility = "visible";

  // уменьшаем текущий шаг
  if (currentStep > 0) {
    currentStep--;
  }
  // вычисляем новую ширину в процентах
  let newWidth = (currentStep / totalSteps) * 100;
  // обновляем ширину элемента procentBar
  procentBar.style.width = newWidth + "%";
}

const previousBtns = document.querySelectorAll(".previous");
previousBtns.forEach((btn, index) => {
  if (index > 0) {
    btn.addEventListener("click", (event) =>
      previousPage(event, swups[index], swups[index - 1])
    );
  }
});

// todo Data perxod

function nextInput(index) {
  if (event.target.value.length === event.target.maxLength) {
    if (index === 1) {
      monthInput.focus();
    } else if (index === 2) {
      yearInput.focus();
    }
  }
}

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkAge();
});

let inputs = document.querySelector(".inputs");
let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");
let errorElement = document.getElementById("error");
let labelTitle = document.querySelector(".date_title");

DataSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (checkAge() && errorElement.textContent === "") {
    showNextPage(event, swups[2], swups[3]);
  }
});
function activateInputs() {
  inputs.classList.add("active");
  labelTitle.classList.add("active_label");
}
function deactivateInputs() {
  inputs.classList.remove("active");
  if (dayInput.value === "" && monthInput.value === "" && year.value === "") {
    labelTitle.classList.remove("active_label");
  }
}

let submitButton4 = document.getElementById("submit");
submitButton4.addEventListener("click", function (event) {
  if (!checkAge()) {
    event.preventDefault();
  }
});

let submitButton3 = document.getElementById("submit");
submitButton3.addEventListener("click", function (event) {
  if (errorElement.textContent === "") {
    if (!checkAge()) {
      event.preventDefault();
    }
  }
});

function checkAge() {
  let day = parseInt(dayInput.value);
  let month = parseInt(monthInput.value);
  let year = parseInt(yearInput.value);
  if (isNaN(day) || day < 1 || day > 31) {
    errorElement.textContent = "Please enter a day between 1 and 31.";
    return false;
  } else if (isNaN(month) || month < 1 || month > 12) {
    errorElement.textContent = "Please enter a month between 1 and 12.";
    return false;
  } else if (year > new Date().getFullYear()) {
    errorElement.textContent =
      "Please try again. We can’t arrange finance for people from the future";
    return false;
  } else if (isNaN(year) || year < 1900) {
    errorElement.textContent = "Please enter your date birth";
    return false;
  } else {
    let day = parseInt(dayInput.value);
    let month = parseInt(monthInput.value);
    let year = parseInt(yearInput.value);

    let selectedDate = new Date(year, month - 1, day);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - selectedDate.getFullYear();

    if (age > 18) {
      errorElement.textContent = "";
      return true;
    } else {
      errorElement.textContent = "Вам еще не исполнилось 18 лет";
      return false;
    }
  }
}

// ? Job perxod

let jobInput = document.getElementById("job-title");
let companyInput = document.getElementById("company-title");
let workplaceInput = document.getElementById("workplace-title");
let errorElement1 = document.getElementById("error_please_1");
let errorElement2 = document.getElementById("error_please_2");
let errorElement3 = document.getElementById("error_please_3");
let labelTitle1 = document.querySelector(".job_title");
let labelTitle2 = document.querySelector(".company_title");
let labelTitle3 = document.querySelector(".workplace_title");

jobBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    checkJob() &&
    errorElement1.textContent === "" &&
    errorElement2.textContent === "" &&
    errorElement3.textContent === ""
  ) {
    showNextPage(event, swups[4], swups[5]);
  }
});

let submitButton1 = document.getElementById("submit_1");
submitButton1.addEventListener("click", function (event) {
  if (!checkJob()) {
    event.preventDefault();
  }
});

let submitButton2 = document.getElementById("submit_1");
submitButton2.addEventListener("click", function (event) {
  if (errorElement1.textContent === "") {
    if (!checkJob()) {
      event.preventDefault();
    }
  }
});

function activateInputs1() {
  jobInput.classList.add("active");
  labelTitle1.classList.add("active_j_c_w");
  jobInput.placeholder = "";
}

function deactivateInputs1() {
  jobInput.classList.remove("active");
  if (jobInput.value === "") {
    labelTitle1.classList.remove("active_j_c_w");
  }
  jobInput.placeholder = "Your job title";
}

function activateInputs2() {
  companyInput.classList.add("active");
  labelTitle2.classList.add("active_j_c_w");
  companyInput.placeholder = "";
}

function deactivateInputs2() {
  companyInput.classList.remove("active");
  if (companyInput.value === "") {
    labelTitle2.classList.remove("active_j_c_w");
  }
  companyInput.placeholder = "Which company do you work for?";
}

function activateInputs3() {
  workplaceInput.classList.add("active");
  labelTitle3.classList.add("active_j_c_w");
  workplaceInput.placeholder = "";
}

function deactivateInputs3() {
  workplaceInput.classList.remove("active");
  if (workplaceInput.value === "") {
    labelTitle3.classList.remove("active_j_c_w");
  }
  workplaceInput.placeholder = "Where is your workplace based?";
}

function checkJob() {
  let job = jobInput.value;
  let company = companyInput.value;
  let workplace = workplaceInput.value;

  if (job === "") {
    errorElement1.textContent = "Please tell us what you do for a job.";
  } else {
    errorElement1.textContent = "";
  }

  if (company === "") {
    errorElement2.textContent = "Please tell us who you work for.";
  } else {
    errorElement2.textContent = "";
  }

  if (workplace === "") {
    errorElement3.textContent = "Please tell us which town you work in.";
  } else {
    errorElement3.textContent = "";
  }

  if (job === "" || company === "" || workplace === "") {
    return false;
  } else {
    return true;
  }
}

//! Func checkInput

function checkInput(inputElement, errorElement, errorMessage) {
  if (inputElement.value === "") {
    errorElement.textContent = errorMessage;
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}

// todo Month year

let yearCountInput = document.getElementById("year_c");
let monthCountInput = document.getElementById("month_c");
let errorElement4 = document.getElementById("error_y_m");
let labelTitle4 = document.querySelector(".year_count_title");
let labelTitle5 = document.querySelector(".month_count_title");

yearMonthBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("yearMonthCheck:", yearMonthCheck());
  console.log("errorElement4.textContent:", errorElement4.textContent);
  if (yearMonthCheck() && errorElement4.textContent === "") {
    console.log("showNextPage called");
    showNextPage(event, swups[5], swups[6]);
  }
});

function activateInputs4() {
  yearCountInput.classList.add("active_bottom");
  labelTitle4.classList.add("active_y_m_title");
  yearCountInput.placeholder = "";
}

function deactivateInputs4() {
  yearCountInput.classList.remove("active_bottom");
  if (yearCountInput.value === "") {
    labelTitle4.classList.remove("active_y_m_title");
  }
  yearCountInput.placeholder = "Year";
}

function activateInputs5() {
  monthCountInput.classList.add("active_bottom");
  labelTitle5.classList.add("active_y_m_title");
  monthCountInput.placeholder = "";
}

function deactivateInputs5() {
  monthCountInput.classList.remove("active_bottom");
  if (monthCountInput.value === "") {
    labelTitle5.classList.remove("active_y_m_title");
  }
  monthCountInput.placeholder = "Month";
}

function yearMonthCheck() {
  let year = yearCountInput.value;
  let month = monthCountInput.value;

  if (year === "" && month === "") {
    errorElement4.textContent =
      "Please tell us how long you’ve worked at this job.";
    return false;
  } else {
    errorElement4.textContent = "";
    return true;
  }
}

// ? £ Earn

let earnInput = document.getElementById("earn_input");
let labelTitle6 = document.querySelector(".earn_title");
let errorElement6 = document.getElementById("error_earn");

function activateInputs6() {
  earnInput.classList.add("active_bottom");
  labelTitle6.classList.add("active_color");
}

function deactivateInputs6() {
  earnInput.classList.remove("active_bottom");
  labelTitle6.classList.remove("active_color");
}

earnBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    checkInput(
      earnInput,
      errorElement6,
      "Let us know your monthly income to continue."
    ) &&
    errorElement6.textContent === ""
  ) {
    console.log("showNextPage called");
    showNextPage(event, swups[6], swups[7]);
  }
});

// ? adress input
let adressInput = document.querySelectorAll("#submit_address");
let adressesInput = document.getElementById("adress_input");
let stolbok = document.querySelector(".stolbik");
let submitAddress = document.getElementById("submit_addres");

submitAddress.addEventListener("click", (event) =>
  showNextPage(event, swups[7], swups[8])
);

let addressItems = document.querySelectorAll(".address_item");

adressesInput.addEventListener("input", function () {
  let searchText = adressesInput.value.toLowerCase();
  if (searchText !== "") {
    stolbok.classList.add("display_block");
    addressItems.forEach(function (item) {
      if (item.textContent.toLowerCase().includes(searchText)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  } else {
    stolbok.classList.remove("display_block");
  }
});

addressItems.forEach(function (item) {
  item.addEventListener("click", function () {
    adressesInput.value = item.textContent;
    stolbok.classList.remove("display_block");
    submitAddress.classList.add("display_block");
  });
});

// year month 2

let yearCountInput2 = document.getElementById("year_c_2");
let monthCountInput2 = document.getElementById("month_c_2");
let errorElement42 = document.getElementById("error_y_m_2");
let labelTitle42 = document.querySelector(".year_count_title_2");
let labelTitle52 = document.querySelector(".month_count_title_2");
let yearMonthCountBtn2 = document.getElementById("submit_y_m_2");

function activateInputs4_2() {
  yearCountInput2.classList.add("active_bottom");
  labelTitle42.classList.add("active_y_m_title");
  yearCountInput2.placeholder = "";
}

yearMonthCountBtn2.addEventListener("click", function (event) {
  event.preventDefault();
  if (yearMonthCheck2() && errorElement42.textContent === "") {
    showNextPage(event, swups[9], swups[10]);
  }
});

function deactivateInputs4_2() {
  yearCountInput2.classList.remove("active_bottom");
  if (yearCountInput2.value === "") {
    labelTitle42.classList.remove("active_y_m_title");
  }
  yearCountInput2.placeholder = "Year";
}

function activateInputs5_2() {
  monthCountInput2.classList.add("active_bottom");
  labelTitle52.classList.add("active_y_m_title");
  monthCountInput2.placeholder = "";
}

function deactivateInputs5_2() {
  monthCountInput2.classList.remove("active_bottom");
  if (monthCountInput2.value === "") {
    labelTitle52.classList.remove("active_y_m_title");
  }
  monthCountInput2.placeholder = "Month";
}

function yearMonthCheck2() {
  let year = yearCountInput2.value;
  let month = monthCountInput2.value;

  if (year === "" && month === "") {
    errorElement42.textContent =
      "Please tell us how long you’ve worked at this job.";
    return false;
  } else {
    errorElement42.textContent = "";
    return true;
  }
}

// ? Earn 2

let earnBtn2 = document.getElementById("submit_error_2");
let earnInput2 = document.getElementById("earn_input_2");
let labelTitle62 = document.querySelector(".earn_title_2");
let errorElement62 = document.getElementById("error_earn_2");

function activateInputs6_2() {
  earnInput2.classList.add("active_bottom");
  labelTitle62.classList.add("active_color");
}

function deactivateInputs6_2() {
  earnInput2.classList.remove("active_bottom");
  labelTitle62.classList.remove("active_color");
}

earnBtn2.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    checkInput(
      earnInput2,
      errorElement62,
      "Let us know your monthly income to continue."
    ) &&
    errorElement62.textContent === ""
  ) {
    showNextPage(event, swups[10], swups[11]);
  }
});

earnInput2.value = "10,000";

// Name

let btnTitle = document.querySelector(".btn_title_item");

let btnTitleItems = document.querySelectorAll(".btn_title_item");

btnTitleItems.forEach(function (btnTitle) {
  btnTitle.addEventListener("click", function (event) {
    event.preventDefault();
    // удаляем класс clicked со всех кнопок
    btnTitleItems.forEach(function (btn) {
      btn.classList.remove("clicked");
    });
    // добавляем класс clicked только для нажатой кнопки
    btnTitle.classList.add("clicked");
  });
});

let nameInput = document.getElementById("name_input");
let fnameInput = document.getElementById("family_input");
let errorElementName = document.getElementById("error_n");
let errorElementFamily = document.getElementById("error_f");
let labelTitle7 = document.querySelector(".name_title");
let labelTitle8 = document.querySelector(".family_name_title");
let nameBtn = document.getElementById("submit_n_f");

function activateInputs7() {
  nameInput.classList.add("active");
  labelTitle7.classList.add("active_n_f");
  nameInput.placeholder = "";
}

function deactivateInputs7() {
  nameInput.classList.remove("active");
  if (nameInput.value == "") {
    labelTitle7.classList.remove("active_n_f");
  }
  nameInput.placeholder = "First name";
}

function activateInputs8() {
  fnameInput.classList.add("active");

  labelTitle8.classList.add("active_n_f");
  fnameInput.placeholder = "";
}

function deactivateInputs8() {
  fnameInput.classList.remove("active");
  if (nameInput.value == "") {
    labelTitle8.classList.remove("active_n_f");
  }
  fnameInput.placeholder = "Last name";
}
nameBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    checkInput(nameInput, errorElementName, "Please enter your first name.") &&
    checkInput(fnameInput, errorElementFamily, "Please enter your last name.")
  ) {
    showNextPage(event, swups[11], swups[12]);
  }
});

// ! Email Phone
let emailInput = document.getElementById("email_input");
let phoneInput = document.getElementById("phone_input");
let errorElementEmail = document.getElementById("error_e");
let errorElementPhone = document.getElementById("error_p");
let labelTitle9 = document.querySelector(".email_title");
let labelTitle10 = document.querySelector(".phone_title");
let emailBtn = document.getElementById("submit_e_p");

function activateInputs9() {
  emailInput.classList.add("active");
  labelTitle9.classList.add("active_e_p");
  emailInput.placeholder = "";
}

function deactivateInputs9() {
  emailInput.classList.remove("active");
  if (emailInput.value == "") {
    labelTitle9.classList.remove("active_e_p");
  }
  emailInput.placeholder = "Email address";
}

function activateInputs10() {
  phoneInput.classList.add("active");

  labelTitle10.classList.add("active_e_p");
  phoneInput.placeholder = "";
}

function deactivateInputs10() {
  phoneInput.classList.remove("active");
  if (phoneInput.value == "") {
    labelTitle10.classList.remove("active_e_p");
  }
  phoneInput.placeholder = "Phone number";
}

emailBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (!termsCheckbox.checked) {
    errorTerms.textContent = "Please agree to the T&Cs to get your quote.";
  } else {
    errorTerms.textContent = "";
  }
  if (
    checkInput(emailInput, errorElementEmail, "Please enter your email.") &&
    checkInput(phoneInput, errorElementPhone, "Please enter your phone.")
  ) {
    if (!termsCheckbox.checked) {
      errorTerms.textContent = "Please agree to the T&Cs to get your quote.";
      checkmark.classList.add("error");
    } else {
      errorTerms.textContent = "";
      checkmark.classList.remove("error");
      return;
    }
  }
});

// *
let termsCheckbox = document.getElementById("termsCheckbox");
let errorTerms = document.getElementById("errorTerms");
let checkmark = document.querySelector(".checkmark");

termsCheckbox.addEventListener("change", function () {
  if (!termsCheckbox.checked) {
    errorTerms.textContent = "Please agree to the T&Cs to get your quote.";
    checkmark.classList.add("error");
  } else {
    errorTerms.textContent = "";
    checkmark.classList.remove("error");
  }
});
