function invert() {
    
    let word = document.getElementById('word').value;
    document.getElementById('result').innerHTML =   word.split("").reverse().join("");

}

