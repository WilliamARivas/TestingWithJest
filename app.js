// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (aDollarAmount) => {
    return (aDollarAmount/oneEuroIs.USD)*oneEuroIs.JPY
}

const fromEuroToDollar = (aEuroAmount) => {
    return aEuroAmount*oneEuroIs.USD
}

const fromYenToPound = (aYanAmount) => {
    return (aYanAmount/oneEuroIs.JPY)*oneEuroIs.GBP
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum,fromDollarToYen,fromYenToPound,fromEuroToDollar };
