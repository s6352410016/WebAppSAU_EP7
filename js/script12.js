const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const calBMI = document.querySelector('#calBMI');
const BMIValue = document.querySelector('#BMIValue');
const BMIResult = document.querySelector('#BMIResult');

calBMI.onclick = () => {
    document.querySelector('.box-wrapper').classList.add('active');

    if(weight.value.length == 0){
        alert('ป้อนน้ำหนักด้วย');
    }
    else if(height.value.length == 0){
        alert('ป้อนส่วนสูงด้วย');
    }
    else{
        // หาค่า BMI
        let BMIValueShow = Number(weight.value) / ((Number(height.value)/100) ** 2)
        BMIValue.innerHTML = BMIValueShow.toFixed(2);
        // แปลผลค่า BMI
        if(BMIValueShow < 18.50){
            BMIResult.innerHTML = 'น้ำหนักน้อย / ผอม'
        }
        else if(BMIValueShow <= 22.90){
            BMIResult.innerHTML = 'ปกติ / สุขภาพดี'
        }
        else if(BMIValueShow <= 24.90){
            BMIResult.innerHTML = 'ท้วม / โรคอ้วนระดับ 1'
        }
        else if(BMIValueShow <= 29.90){
            BMIResult.innerHTML = 'อ้วน / โรคอ้วนระดับ 2'
        }
        else{
            BMIResult.innerHTML = 'อ้วนมาก / โรคอ้วนระดับ 3'
        }

    }
}