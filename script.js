// // Создал переменную
// let username = "Юрий"
// username = "Юрий Максимович"

// // Создал переменную для фамилии
// let surname = "Каграмян"

// // Вывел имя пользователя
// // alert(`Hello, ${username}!`)


// function calcSum() {
//     let x = document.getElementsByName("x")[0].value 
//     let y = document.getElementsByName("y")[0].value

//     let z = Number(x) + Number(y)

//     let result = document.getElementById("calcResult")
//     result.innerHTML = "Результат: " + z

//     console.log(x)
//     console.log(y)
//     console.log(z)
//     console.log(result)
// }

// function calcDifference() {
//     let x = document.getElementsByName("x")[0].value 
//     let y = document.getElementsByName("y")[0].value

//     let z = Number(x) - Number(y)

//     let result = document.getElementById("calcResult")
//     result.innerHTML = "Результат: " + z

//     console.log(x)
//     console.log(y)
//     console.log(z)
//     console.log(result)
// }

// function calcProduct() {
//     let x = document.getElementsByName("x")[0].value 
//     let y = document.getElementsByName("y")[0].value

//     let z = Number(x) * Number(y)

//     let result = document.getElementById("calcResult")
//     result.innerHTML = "Результат: " + z

//     console.log(x)
//     console.log(y)
//     console.log(z)
//     console.log(result)
// }

// function calcQuotient() {
//     let x = document.getElementsByName("x")[0].value 
//     let y = document.getElementsByName("y")[0].value

//     let z = Number(x) / Number(y)

//     let result = document.getElementById("calcResult")
//     result.innerHTML = "Результат: " + z

//     console.log(x)
//     console.log(y)
//     console.log(z)
//     console.log(result)
// }

// function calcSquare() {
//     let x = document.getElementsByName("x")[0].value;
//     let z = Math.pow(Number(x), 2); // Возводим в квадрат
//     let result = document.getElementById("calcResult");
//     result.innerHTML = "Результат: " + z;
//     console.log(x);
//     console.log(z);
//     console.log(result);
// }

function codeDetector() {
    let country = document.getElementsByName("country")[0].value
    let input = document.getElementsByName("phone")[0]

    if (country == "none") {
        input.value = "Вы не выбрали страну"
    } else if(country == "uz") {
        input.value = "+998"
    } else if(country == "ru") {
        input.value = "+7"
    } else if (country == "usa") {
        input.value = "+1"
    } else {
        input.value = "Ты сотворил что-то невероятное"
    }
}

function courceCalculator() {
      //  let courceName = document.getElementsByName("cource")[0].value
      //  let courceName = document.querySelector("#courceSelect")
      //  let courceName = document.querySelectorAll(".courseForm label")
      let courseName = document.getElementById("courceSelect").value
      const PYTHON_PRICE = 9000000
      const FRONTEND_PRICE = 11000000
      const DA_PRICE = 14000000
      let basicPrice

      if(courseName == "none") {
        basicPrice = 0
      } else if(courseName == "python") {
        basicPrise = PYTHON_PRICE
      } else if(courseName == "frontend") {
        basicPrice = FRONTEND_PRICE
      } else if(courseName == "da") {
        basicPrice = DA_PRICE
      }

      let discount = document.getElementsByName("discountRange")[0].value
      let discountValue = document.getElementById("discountValue")
      discountValue.innerHTML = discount + "%"

      let sum = basicPrice / 100 * (100 - discount)
      
      let resultInput = document.getElementById("courceSum")
      resultInput.value = sum
    }

function activateButton() {
    let confirm = document.getElementById("confirm").checked
    let btn = document.querySelector(".dynamicForm button")
    if(confirm) {
        // Подтверждено
        btn.disabled = false
    } else {
        // Не подтверждено
        btn.disabled = true
    }

}

