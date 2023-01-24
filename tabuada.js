function isInt(value) {
    console.log("isInt?", value)
    var numbers = /^-?[0-9]+$/;
    return numbers.test(value);
}

function tabuada() {
    var value = document.getElementById("number").value;
    var resposta = document.getElementById('resposta');
    var tabuada = '';

    if (isInt(value)) {
        var num = parseInt(value)
        if (num > 0 && num <= 10) {
            for (var count = 1; count <= 10; count++)
                tabuada += num + " x " + count + " = " +
                    num * count + "<br />";

            resposta.innerHTML = tabuada;

        } else {
            alert("Valores não aceitos, informar numero entre 1 e 10")
        }

    } else {
        alert("Serão aceitos somente valores inteiros")
    }

}