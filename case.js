function oddOrEven(num) {
    let strNum = num.toString()
    let arr = strNum.split("")
    let intArr = []
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        intArr.push(parseInt(arr[i]))
    }
    for (let i = 0; i < intArr.length; i++) {
        sum += intArr[i]
    }
    return sum % 2 == 0 ? "Even" : "Odd"
}


console.log(oddOrEven(43))
console.log(oddOrEven(373))
console.log(oddOrEven(4433))
