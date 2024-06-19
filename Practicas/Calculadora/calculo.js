function calcular(operacion) {
    var val1 = parseFloat(document.getElementById("v1").value);
    var val2 = parseFloat(document.getElementById("v2").value);
    var res = document.getElementById("res");
    var resultado;

    if (isNaN(val1) || isNaN(val2)) {
        res.innerHTML = "Datos nulos o incompletos";
        if (isNaN(val1)) {
            document.getElementById("v1").focus();
        } else {
            document.getElementById("v2").focus();
        }
        return;
    }

    switch (operacion) {
        case 'sumar':
            resultado = val1 + val2;
            break;
        case 'restar':
            resultado = val1 - val2;
            break;
        case 'multiplicar':
            resultado = val1 * val2;
            break;
        case 'dividir':
            if (val2 !== 0) {
                resultado = val1 / val2;
            } else {
                res.innerHTML = "Error: División por cero";
                return;
            }
            break;
        default:
            res.innerHTML = "Operación no válida";
            return;
    }

    res.innerHTML = resultado;
}
