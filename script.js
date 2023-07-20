function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const maleRadio = document.querySelector('input[value="male"]');
    const femaleRadio = document.querySelector('input[value="female"]');
    const age = parseInt(document.getElementById('age').value);
  
    if (isNaN(weight) || isNaN(height) || height === 0 || (!maleRadio.checked && !femaleRadio.checked) || isNaN(age)) {
      alert("Harap lengkapi semua data yang diminta.");
      return;
    }
  
    const gender = maleRadio.checked ? "male" : "female";
    const bmi = weight / ((height / 100) ** 2);
    const bmiRounded = bmi.toFixed(2);
    let category;
  
    if (gender === "male") {
      if (age >= 19 && age <= 24) {
        if (bmi < 17) {
          category = "Kurus";
        } else if (bmi < 23) {
          category = "Normal";
        } else if (bmi < 27) {
          category = "Gemuk";
        } else {
          category = "Obesitas";
        }
      } else {
        if (bmi < 18.5) {
          category = "Kurus";
        } else if (bmi < 25) {
          category = "Normal";
        } else if (bmi < 30) {
          category = "Gemuk";
        } else {
          category = "Obesitas";
        }
      }
    } else if (gender === "female") {
      if (age >= 19 && age <= 24) {
        if (bmi < 16) {
          category = "Kurus";
        } else if (bmi < 22) {
          category = "Normal";
        } else if (bmi < 27) {
          category = "Gemuk";
        } else {
          category = "Obesitas";
        }
      } else {
        if (bmi < 18.5) {
          category = "Kurus";
        } else if (bmi < 25) {
          category = "Normal";
        } else if (bmi < 30) {
          category = "Gemuk";
        } else {
          category = "Obesitas";
        }
      }
    }
  
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `BMI Anda: ${bmiRounded} (${category})`;
  }
  
  document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBMI();
  });
  