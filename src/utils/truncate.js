function truncate(inputString) {

    if(inputString === null) {
        return '';
    }

    if(inputString.length > 50) {
        return inputString.slice(0, 50) + "..."
    }
    return inputString;
}

export default truncate;