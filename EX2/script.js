function bigword() {

    let pharse = document.getElementById("word").value;

    const myList = pharse.split(" ");

    let biggestword = myList [0];


    for(i = 1; i <  myList.length; i++) {
        if(biggestword.length < myList [i].length){
                biggestword = myList[i];
        }


    }
    document.getElementById('bigword').innerHTML = "A maior palavra da frase indicada, é a palavra: " + biggestword



}