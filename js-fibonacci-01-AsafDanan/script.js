let p = new Promise((resolve, rejected) =>{
  let a = 1 + 3;
  if(a == 2){
    resolve("yay, it is num2");
  }
  else{
    rejected(console.error("your access is denied."))
  }
})

p.then((message) => {
  console.log("this is in the then" + message);
})
  .catch((message) => {
    console.log("this is in the catch message error" + message);
})

































// // צריך שברגע שיהיה שיתבצע קליק על הכפתור הפונקציה תיכנס לפעולה
// // צריך פונקציה נוספת שמאמתת מספרים מול 50
// // פונקציה נוספת האם לשמור בשרת או לא
// // חישוב מקומי של הפיבונצ'י
// // חישוב דרך השרת
// // הצגת הנתונים INNEHTML

// const clcBtn = document.getElementById("calcButton");
// let clcInput = document.getElementById("calcInput");
// const result = document.getElementById("paragraph");
// const loader = document.getElementById("spinner");
// const error = document.getElementById("error-message");
// const serverError = document.getElementById("server-error");
// const numbersOne = document.getElementById("numbersOne");
// const numbersTwo = document.getElementById("numbersTwo");
// const numbersThree = document.getElementById("numbersThree");
// const numbersFour = document.getElementById("numbersFour");
// const checkbox = document.getElementById('serverCheck');


// clcBtn.addEventListener("click", calcFunc);

// function calcFunc() {
//   if (!numValidate(clcInput.value)) {
//     error.style.display = "block";
//     setTimeout(() => {
//       error.style.display = "none";
//     }, 5000);
//     console.error("Can't be larger than 50"); // only bec it's a cool feature :D

//     return;
//   }
//   if(isSaving()) {
//     fetchNsave();
//   }
//   else{
//    let localresult = document.getElementById("localresult");
//     localresult.innerHTML = calc()
//   }


  
//   //     paragraph.innerHTML = `<p>${c}</p>` ;
//   //   }
//   //   button.addEventListener('click', () => {
//   //     const x = input.value;
//   //     calc(x);
//   //   });
// }
// function calc() {
//  let a = 0;
//  let b = 1;
//  c = clcInput;
//  for (let i = 2; i <= clcInput.value; i++) {
//      c = a + b
//      a = b
//      b = c
//    }
//    return c;
//   }

// function fetchNsave() {
//   loader.classList.add("spinner-border");

//   fetch(`http://localhost:5050/fibonacci/${clcInput.value}`).then(function (
//     response
//   ) {
//     return response.json().then(function (data) {
//       result.innerHTML = data.result;
//       numbers.innerHTML += `${data.number}  ${data.result}<br/>`;
//     });
//   });

//   setTimeout(() => {
//     loader.classList.remove("spinner-border");
//   }, 600);
// }

// function isSaving() {
//   if(checkbox.checked) {
//     return true;
//   }
//   return false;
// }
// function printNumbers() {
//   fetch(`http://localhost:5050/getFibonacciResults`).then(function (response) {
//     return response.json().then(function (data) {
//       numbersTwo.innerHTML = data.results
//         .map((item) => {
//           return `<span class='itemOne'>
//               <span>The fibonacci of ${item.number} is ${
//             item.result
//           }. Calculated at: ${(item.createdDate = Date(3))}</span>
//               </span>`;
//         })
//         .join("");

//       numbersThree.innerHTML = data.results
//         .map((item) => {
//           return `<span class='itemTwo'>
//             <span>The fibonacci of ${item.number} is ${item.result}. Calculated at: ${item.createdDate}</span>
//             </span>`;
//         })
//         .join("");

//       numbersFour.innerHTML = data.results
//         .map((item) => {
//           return `<span class='itemThree'>
//             <span>The fibonacci of ${item.number} is ${item.result}. Calculated at: ${item.createdDate}</span>
//             </span>`;
//         })
//         .join("");

//       numbersOne.innerHTML = data.results
//         .map((item) => {
//           return `<span class='itemFour'>
//             <span>The fibonacci of ${item.number} is ${item.result}. Calculated at: ${item.createdDate}</span>
//             </span>`;
//         })
//         .join("");
//     });
//   });
// }

// function numValidate(value) {
//   if (value > 50) {
//     return false;
//   }

//   return true;
// }
// // return `${item.number} ${item.result.append} -- ${item.id} ${item.createdDate}`;
// //   alert("hello");
// // }
