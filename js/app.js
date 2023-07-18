const $ = document;
const bmiSection = $.querySelector(".bmi-section");
const weightRange = $.querySelector(".weight-range");
const heightRange = $.querySelector(".height-range");
const userWeight = $.querySelector(".user-weight");
const userHeight = $.querySelector(".user-height");
const resultNumber = $.querySelector(".result-number");
const resultStatus = $.querySelector(".result-status");
let user_Weight_Value = weightRange.value;
let user_Height_Value = heightRange.value;

function calcBmi() {

  user_Weight_Value = weightRange.value;
  user_Height_Value = heightRange.value;

  // calculate square of height in meter scale
  let square_Of_Height = heightRange.value / 100;
  let bmi = user_Weight_Value / square_Of_Height ** 2;
  // show bmi to one deciaml place
  resultNumber.textContent = bmi.toFixed(1);

  // show bmi status and chnage background color
  if (bmi.toFixed(1) < 18.5) {
    resultStatus.textContent = "under weight";
    resultNumber.style.color = "rgb(237, 167, 37)";
    bmiSection.style.backgroundImage =
      "linear-gradient(135deg,rgb(232, 173, 65),rgb(237, 167, 37))";
  } else if (bmi.toFixed(1) < 24.9) {
    resultStatus.textContent = "normal weight";
    resultNumber.style.color = "rgb(90, 191, 92)";
    bmiSection.style.backgroundImage =
      "linear-gradient(135deg,#5fc15a,#2ca875)";
  } else if (bmi.toFixed(1) < 29.9) {
    resultStatus.textContent = "over weight";
    resultNumber.style.color = "rgb(237, 97, 37)";
    bmiSection.style.backgroundImage =
      "linear-gradient(135deg, rgb(193 145 90), rgb(168 109 44))";
  } else {
    resultStatus.textContent = "obese";
    resultNumber.style.color = "rgb(237, 37, 37)";
    bmiSection.style.backgroundImage =
      "linear-gradient(135deg, rgb(193 90 90), rgb(168 44 44))";
  }

  // show weight and height value

  userWeight.textContent = user_Weight_Value + " kg";
  userHeight.textContent = user_Height_Value + " cm";
}

/* All Events */
window.addEventListener("load", () => {
  userWeight.textContent = weightRange.value + " kg";
  userHeight.textContent = heightRange.value + " cm";
  calcBmi();
});
weightRange.addEventListener("change", calcBmi);
heightRange.addEventListener("change", calcBmi);
