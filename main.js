window.aler("Are you over the age of 18 if yes you may proceed if not DO NOT continue /n rated A")

function genrateNum() {
    let num = Math.floor(Math.random() * document.getElementById("number").value);
    document.getElementById("numeberOutput").innerHTML = num;
    console.log(num)
}
