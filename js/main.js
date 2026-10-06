let button = document.querySelector('button');
console.log(button)
button.addEventListener('click',getResult);
let word;
let result;
let displayResult = document.querySelector('h2')
function getResult(){
word =  document.querySelector('#user-input').value.toLowerCase();

console.log(word)

fetch(`/api?word=${word}`) 
.then(res => res.json())
.then(data =>{
result = data.message;

displayResult.innerText = result;
});



}





