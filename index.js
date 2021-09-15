// Code your solution here
//function findMatching(names) {
//    if(names.equalsIgnoreCase('bobby') === true) {
//        return names;
//    } else {
//        return []
//    }
//}

function findMatching(array, names) {
    let newArray = []
    for (const drivers of array) {
        if(drivers === names) {
            return newArray.push(names)
        } else {
            return []
        }
    }
}