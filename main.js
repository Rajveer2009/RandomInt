function genrateNum() {
    let num = Math.floor(Math.random() * document.getElementById("number").value);
    document.getElementById("numeberOutput").innerHTML = num;
    console.log(num)
}
