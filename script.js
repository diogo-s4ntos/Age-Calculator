function validarNumero(input){
    //Remove qualquer caractere que não seja um número
    input.value = input.value.replace(/[^0-9]/g, '');
}

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();

function calc() {
    // Obter a data introduzida pelo usuário
    const dia = parseInt(document.getElementById('day').value, 10);
    const mes = parseInt(document.getElementById('month').value, 10) - 1; // Meses em JavaScript começam do zero
    const ano = parseInt(document.getElementById('year').value, 10);

    const dataIntroduzida = new Date(ano, mes, dia);


    // Obter a data atual
    const dataAtual = new Date();

    // Calcular a diferença em milissegundos
    const diferencaEmMilissegundos = dataAtual - dataIntroduzida;

    // Calcular anos, meses e dias
    const anos = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000));
    const meses = Math.floor((diferencaEmMilissegundos % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const dias = Math.floor((diferencaEmMilissegundos % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    document.getElementById('year-value').value = anos;
    document.getElementById('day-value').value = dias;
    document.getElementById('month-value').value = meses;
  }