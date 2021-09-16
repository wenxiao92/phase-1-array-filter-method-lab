// Code your solution here
function findMatching(array, singleName) {
    let newArray = []
    for (const driver of array) {
        if(driver.toUpperCase() === singleName.toUpperCase()) {
            newArray.push(driver)
        }
    }
    return newArray
}

function fuzzyMatch(array, initials) {
    let newArray = []
    for (const driver of array) {
        if(driver.substring(0,2) === initials.substring(0,2)) {
            newArray.push(driver)
        }
    }
    return newArray
}

function matchName(array, nameMatch) {
    let newArray = []
    for (const nameHomeObj of array) {
        if(nameHomeObj.name === nameMatch) {
            newArray.push(nameHomeObj)
        }
    }
    return newArray
}