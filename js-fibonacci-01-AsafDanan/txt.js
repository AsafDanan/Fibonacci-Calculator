const clcBtn = document.getElementById("calcButton");
let clcInput = document.getElementById("calcInput");
const result = document.getElementById('paragraph');
const loader = document.getElementById('spinner');
const error = document.getElementById('error-message');
const serverError = document.getElementById('server-error');
const numbersOne = document.getElementById('numbersOne');
const numbersTwo = document.getElementById('numbersTwo');
const numbersThree = document.getElementById('numbersThree');
const numbersFour = document.getElementById('numbersFour');





clcBtn.addEventListener("click", calcFunc);

function numValidate(value) {
  if(value > 50) {
    return false;
  } 
  
  return true;
}


function calcFunc() {
  if (!numValidate (clcInput.value)) {
    error.style.display = "block"
    setTimeout(() => {
      error.style.display = "none";
    }, 5000);
    console.error("Can't be larger than 50") // only bec it's a cool feature :D
    
    return;
  }

   if (clcInput.value == 42){
    serverError.style.display = "block";
    
    return;
   }


   //  function calc(x) {
  //   let a = 0;
  //   let b = 1;
  //   c = input;
  //   for (let i = 2; i <= input.value; i++) {
  //       c = a + b
  //       a = b
  //       b = c
  //     }
      
  //     paragraph.innerHTML = `<p>${c}</p>` ; 
  //   }
  //   button.addEventListener('click', () => {
  //     const x = input.value;
  //     calc(x);
  //   });


  
  
  loader.classList.add("spinner-border");
  
  fetch(`http://localhost:5050/fibonacci/${clcInput.value}`).then(function (response) {
    return response.json().then(function (data) {
      result.innerHTML = data.result;

      numbers.innerHTML += `${data.number}  ${data.result}<br/>`;
      
      // printNumbers();
    });
  });
  
  setTimeout(() => {
    loader.classList.remove("spinner-border");
  }, 600);
}

function printNumbers() {
  fetch(`http://localhost:5050/getFibonacciResults`).then(function (response) {
    return response.json().then(function (data) {
      numbersTwo.innerHTML = data.results.map(item => {
        
        




        return `<span class='itemOne'>
        <span>The fibonacci of ${item.number} is ${item.result}. Calculated at: ${item.createdDate = Date(3)}</span>
            </span>`;
          }).join('');


           numbersThree.innerHTML = data.results.map(item => {
            return `<span class='itemTwo'>
            <span>The fibonacci of ${item.number} is ${item.result}. Calculated at: ${item.createdDate}</span>
            </span>`;
          }).join('');




               numbersFour.innerHTML = data.results.map(item => {
                return `<span class='itemThree'>
                <span>The fibonacci of ${item.number} is ${item.result}. Calculated at: ${item.createdDate}</span>
            </span>`;
          }).join('');



      numbersOne.innerHTML = data.results.map(item =>  {
          return `<span class='itemFour'>
            <span>The fibonacci of ${item.number} is ${item.result}. Calculated at: ${item.createdDate}</span>
            </span>`;
          }).join('');
          
        });
    });
  };

// return `${item.number} ${item.result.append} -- ${item.id} ${item.createdDate}`;
  //   alert("hello");
  // }
  