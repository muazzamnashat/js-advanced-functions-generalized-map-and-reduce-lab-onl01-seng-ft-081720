// Add your functions here
function map(array, func){
    let result=[]
    array.forEach(el => {
        result.push(func(el))
    })
    return result
}

function reduce(array,func,start){
    let initial = start? start : 0
    let status;
    for (let i = 0; i < array.length; i+=2){
        let currEl = array[i]
        let first = array[i] ? array[i]: 0
        let second = array[i+1] ? array[i+1]:0
        if (typeof currEl !== "number"){
          status = func(first,second)
        } 
        initial += func(first,second)
    }
    if (status === true || status === false) return status;
    return initial
}

