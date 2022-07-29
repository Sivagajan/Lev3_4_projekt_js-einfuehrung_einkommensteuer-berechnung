console.log('works')

let yearField = document.getElementById('jahr')

let fall1 = 0
let hWert1 = 0
let fall2 = 0
let hWert2 = 0 
let hWert21 = 0
let fall3 = 0
let hWert3 = 0
let hWert31 = 0
let fall4 = 0 
let hWert4 = 0 
let hWert41 = 0


function splitting(){

    if(document.getElementById('einePerson').checked){
        console.log('eine Person')
        return 1
    }else if(document.getElementById('zweiPersonen').checked){
        console.log('zwei Personen')
        prompt('Haben Sie das Einkommen beider Partner eingegeben ? ')
        return 2
    }else{
        return 1
    }
}

const churchTax = () => {
    if(document.getElementById('kirchenSteuer').checked == true){
        return true
    }else{
        return false
    }
}

let year = () => {

    sYear = yearField.options[document.getElementById('jahr').selectedIndex].value
    // fallunterscheidung der Jahre 

    if(sYear == 2019){
        fall1 = 9168
        fall2 = 14254
        hWert1 = Number('980.14')
        fall3 = 55960
        hWert2 = Number ('216.16')
        hWert21 = Number ('965.58')
        fall4 = 265326
        hWert3 = Number('0.42')
        hwert31 = ('8780.90')
        hWert4 = Number('0.45')
        hWert41 = Number ('16740.68')

    }else if(sYear == 2020){
        fall1 = 9408
        fall2 = 14532
        hWert1 = Number('972.87')
        fall3 = 57051
        hWert2 = Number('212.02')
        hWert21 = Number('972.79')
        fall4 = 270500
        hWert3 = Number('0.42')
        hWert31 = Number('8963.74')
        hWert4 = Number('0.45')
        hWert41 = Number('17078.74')
    }
    else if(sYear == 2021){
        fall1 = 9744
        fall2 = 14753
        hWert1 = Number('995.21')
        fall3 = 57918
        hWert2 = Number('208.85')
        hWert21 = Number('950.96')
        fall4 = 274612
        hWert3 = Number('0.42')
        hWert31 = Number('9136.63')
        hWert4 = Number('0.45')
        hWert41 = Number('17374.99')
    }
    else if(sYear == 2022){
        fall1 = 10347
        fall2 = 14926
        hWert1 = Number('1088.67')
        fall3 = 57918
        hWert2 = Number('206.43')
        hWert21 = Number('869.32')
        fall4 = 274612
        hWert3 = Number('0.42')
        hWert31 = Number('9136.63')
        hWert4 = Number('0.45')
        hWert41 = Number('17671.20')
    }
}

function berechnen1(){


    let income = Number(document.getElementById('einkommen').value)

    console.log(income)

    const church = churchTax()
    console.log('kirche ' + church)

    const split = splitting()
    console.log('wieviele Personen' + split)

    let ayear = year()

    console.log(fall1)

    let y 
    let eSt


    if( isNaN(income)){

        alert('Sie dürfen nur zahlen eingeben ')

    }else  if(split == 2){

        console.log(income)

        let sIncome = Number (prompt('Bitte geben Sie das Einkommen der 2ten Person ein '))
        income = income + sIncome
        income = income / 2

        console.log(income, sIncome)

    }else if(income <= fall1){

        alert('Sie sind von der Einkommens Steuer befreit ')

    }else if(income <= fall2){
    
        y = (income - fall1)/10000
        eSt = (hWert1*y+1400)*y
        let zZESt = Math.floor(eSt)
        zZESt += ' €'
        /* const paragraph = document.createElement('p')
        paragraph.innerText = zZESt
        document.getElementById('ergebnis').appendChild(paragraph)  */ 
        document.getElementById('ergebnis').innerHTML = ' <p> ' + zZESt + ' </p>'   
    
    }else if(income <= fall3){
    
        y = (income - fall2)/10000
        eSt = (hWert2 * y +2397) * y + hWert21
        let zZESt = Math.floor(eSt)
        zZESt += ' €'
        /* const paragraph = document.createElement('p')
        paragraph.innerText = zZESt
        document.getElementById('ergebnis').appendChild(paragraph) */
        document.getElementById('ergebnis').innerHTML = ' <p> ' + zZESt + ' </p>'   
    
    }else if(income <= fall4){
    
        eSt = (hWert3 * income) - hWert31
        alert(eSt)
        let zZESt = Math.floor(eSt)
        zZESt += ' €'
        /*  const paragraph = document.createElement('p')
        paragraph.innerText = zZESt
        document.getElementById('ergebnis').appendChild(paragraph) */
        document.getElementById('ergebnis').innerHTML = ' <p> ' + zZESt + ' </p>'
    
    }else if(income > fall4)
    {
        alert(hWert4,hWert41,income)
        eSt = (hWert4 * income) - hWert41
        alert(eSt)
        let zZESt = Math.floor(eSt)
        zZESt += ' €  '
        /* const paragraph = document.createElement('p')
        paragraph.innerText = zZESt
        document.getElementById('ergebnis').appendChild(paragraph)  */
        document.getElementById('ergebnis').innerHTML = ' <p> ' + zZESt + ' </p>'
    }
}