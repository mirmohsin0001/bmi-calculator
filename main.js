window.onload = () => {
    const button = document.getElementById('btn');
    button.addEventListener('click', calculateBMI);    
}


function calculateBMI() {
    const result = document.querySelector('#result');
    const weight = document.querySelector('#weight').value;
    const heightInInches = document.querySelector('#height-inches').value;
    const heightInFeet = document.querySelector('#height-feet').value;

    const heightInMtr = ((heightInFeet * 12)+ parseInt(heightInInches)) * 0.0245;


    
    const bmi = (weight / (heightInMtr * heightInMtr));
    result.innerHTML = ('Your BMI is: ' + bmi.toFixed(2));

}