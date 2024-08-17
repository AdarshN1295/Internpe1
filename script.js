let  input = document.querySelector('input.inputValue');

let btn = document.querySelectorAll('button.calc_button').forEach((bt)=>{
    bt.addEventListener('click', ()=>{
        input.value = input.value + bt.innerHTML;
    })
})

const eqBtn = document.querySelector('button.buttoneq.btn--eq').addEventListener('click', ()=>{
    if(input.value.includes('+') == true){
      let digit_arr = input.value.split('+');
      let sum = digit_arr.reduce((partialSum, a) => parseInt(partialSum) + parseInt(a), 0);
      input.value = sum;
    } else if(input.value.includes('-') == true){
      let digit_arr = input.value.split('-');
      input.value = parseInt(digit_arr[0]) - parseInt(digit_arr[1]);
    } else if(input.value.includes('x') == true){
        let digit_arr = input.value.split('x');
        input.value = parseInt(digit_arr[0]) * parseInt(digit_arr[1]);
    } else if(input.value.includes('/') == true){
        let digit_arr = input.value.split('/');
        input.value = parseInt(digit_arr[0]) / parseInt(digit_arr[1]);
    } else {
        console.log("Enter a Valid Value!")
    }

})

let ac = document.querySelector('button.buttonAC').addEventListener('click', ()=>{
    input.value = "";
})

// eqBtn.addEventListener('click', ()=>{
//     for(i=0;i<operator.length;i++){
//     let digit_arr = input.value.split(operator[i]);
//     console.log(digit_arr)
//     input.value = `${parseInt(digit_arr[0])} ${digit_arr[i]} ${parseInt(digit_arr[1])}`;
//     }
// })