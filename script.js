function calculoImpositivo() {

    // Variable para repetir el ciclo
    let repetirCalculo;

    do {
        // Datos principales para el cálculo
        let salarioNominal = prompt("Ingrese su salario nominal");
        let tasaImpositiva = prompt("¿Qué porcentaje paga de impuestos?");

        // Verificación de que el impuesto sea válido 
        if (tasaImpositiva >= 0 && tasaImpositiva <= 100) {
            let impuestosPagados = salarioNominal * (tasaImpositiva / 100);
            let salarioReal = salarioNominal - impuestosPagados;
            alert("Usted paga " + impuestosPagados + " de impuestos");
            alert("Su salario real es " + salarioReal);
        } 
        // Si la tasa es mayor a 100, responde error y pide ingresar una nueva tasa
        else {
            do {
                alert("Error. No puede pagar más del 100 % de impuestos");
                alert("Por favor, vuelva a ingresar su tasa impositiva");
                tasaImpositiva = prompt("¿Qué porcentaje paga de impuestos?");
            } while (!(tasaImpositiva >= 0 && tasaImpositiva <= 100));

            // Si la tasa impositiva es correcta, hace el cálculo
            let impuestosPagados = salarioNominal * (tasaImpositiva / 100);
            let salarioReal = salarioNominal - impuestosPagados;
            alert("Usted paga " + impuestosPagados + " de impuestos");
            alert("Su salario real es " + salarioReal);
        }
        // Consulta para repetir ciclo
        repetirCalculo = confirm("¿Desea realizar otro cálculo impositivo?");

        // Si el usuario no quiere hacer otro cálculo, muestra mensaje de despedida
        if (!repetirCalculo) {
            alert("¡Gracias por usar nuestra calculadora!");
        }
    } 
        // Si el usuario acepta, repite el ciclo y empieza de nuevo la función
        while (repetirCalculo);
}

calculoImpositivo();
