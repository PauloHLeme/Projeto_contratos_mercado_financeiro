let today = new Date()
const dia = today.getDate()
const mes = today.getMonth() +1
const ano = today.getFullYear()

function start() {
    data()
    escritor()

}

function escritor(){
    let output = document.body.querySelector('#wdo')
    const shortyear = ano.toString().substr(-2)
    output.innerHTML = "WDO"
    output.innerHTML += monthletter(mes)
    output.innerHTML += shortyear
}

function data() {
    today = (dia + "/" + mes + "/" + ano)
    return today
}

function monthletter(mes) {
    const key = mes
    let letter = "A"
    switch(key){
        case 1:
            letter = "F";
        break
        case 2:
            letter = "G";
        break
        case 3:
            letter = "H";
        break
        case 4:
            letter = "J";
        break
        case 5:
            letter = "K";
        break
        case 6:
            letter = "M";
        break
        case 7:
            letter = "N";
        break
        case 8:
            letter = "Q";
        break
        case 9:
            letter = "U";
        break
        case 10:
            letter = "V";
        break
        case 11:
            letter = "X";
        break
        case 12:
            letter = "Z";
        break
    }
    return letter
}

start()
