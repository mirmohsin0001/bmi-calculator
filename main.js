window.onload = () => {
    const button = document.getElementById('#btn');
    button.addEventListner('click', calculateBMI);    
}


function calculateBMI() {
    const result = document.querySelector('#result');
    const weight = document.querySelector('#weight').value;
    const heightInInches = document.querySelector('#height-inches').value;
    const heightInFeet = document.querySelector('#height-feet').value;

    const heightInMtr = (heightInInches + (heightInFeet * 12)) * 0.0245;

    
    const bmi = weight / (heightInMtr * heightInMtr);
    result.innerHTML = ('fsalkdjf sldkjflks jadflkj' + bmi);

}