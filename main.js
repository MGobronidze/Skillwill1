// დავალება 1 ორი რიცხვის შედარება
function compare(a,b){
    if(a===b){
        return "ტოლია"
    }else{
        return "არ არის ტოლი"
    }
}

// test
console.log(compare(5,8))
console.log(compare(5,5))
console.log(compare(5,"5"))

// დავალება 2 ფარენჰეიტის ცელსიუსში გადაყვანა
function toCelsius(a){
    if(typeof a === "number"){
            return (5/9)*(a-32)
        }else{
            return false
        }
}

let value = toCelsius(15)
let value2 = toCelsius("hello")
console.log(value)
console.log(value2)

// დავალება 3 "კალკულატორი"
function calculator(a,b,op){
    if(typeof a === "number" && typeof b === "number"){
        switch (op){
            case "+":   
                return a+b
            case "-":
                return a-b
            case "*":
                return a*b
            case "/":
                return a*b
            default:
                return "enter valid operator"
        }
    }else{
        return "please enter valid numbers"
    }
}
let h= "h"
console.log((calculator(4,h,"+")))
console.log((calculator(4,7,"0")))
console.log((calculator(4,7,"+")))
