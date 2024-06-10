let initialNumber = 0

try {
    increamentCounter()
} catch (error) {
    console.log(error)
    console.log(initialNumber)
}

function increamentCounter (){
    initialNumber++
    increamentCounter()
}



