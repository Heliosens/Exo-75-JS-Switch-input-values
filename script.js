
let button = document.getElementById('switch');

button.addEventListener('click', function (){
    let inp1 = document.getElementById('input1').value;
    document.getElementById('input1').value = document.getElementById('input2').value;
    document.getElementById('input2').value = inp1;
})

