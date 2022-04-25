//for code
// / forward slash
// \ backslash

const exp = /^\(?\d{3}\)?-?\d{3}-\d{4}$/

function phoneNumCheck(string) {
    // console.log(exp.test(string))
    if (exp.test(string)) {
        return true
    } else {
        return false
    }
}

// phoneNumCheck('(123)456-7890')

function changePhoneNum(string) {
    const remove = /[()-]/g
    const replace = ''

    const newNum = string.replace(remove, replace)
    console.log(newNum)
    console.log(parseInt(newNum))
}

changePhoneNum('(123)456-7890')