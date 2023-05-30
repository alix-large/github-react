function colorNumber(number) {

    if(number < 10) {
        return 'green'
    }
    else if (number < 100) {
        return 'orange'
    }
    else {
        return 'red'
    }
}

export default colorNumber;