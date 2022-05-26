    //  GLOBAL {
let mascards = [[3,0,0,0],[0,0,0,0],[4,2,1,0]];   // [ [лев низ,,,лев верх]... ]

const letterscol = ['a','b','c'];
let coorIZ = null;  //  клетка ОТКУДА
let etap = 0;
let cell_TO_may = false;
    //  global _____  }


//      FUNCTION
// Заполнение клеток картами
function ZapolnKletok(){
    let vCol;
    let vRow;
    let indcol;
    let indstr;
    let imyaid;
    let currcell;
    let chislo;
    for ( vCol=0; vCol<3; vCol++ ) {
        for ( vRow=0; vRow<4; vRow++ ){
          indcol =  letterscol[vCol];
          indstr = String(vRow);
          imyaid = '#'+indcol+indstr;
          currcell = document.querySelector(imyaid);
          chislo = mascards[vCol][vRow];
          currcell.style.background="aliceblue";
          currcell.stolbec = vCol;
          currcell.stroka = vRow;
          currcell.strokas = indcol;
          currcell.innerHTML = '';
          if ( chislo>0  ) {
            currcell.innerHTML = String(chislo);
            currcell.style.background="yellow";
            console.log( imyaid, currcell.stolbec, currcell.stroka, currcell.strokas );
          }
        }       //  for
    }       //  for
    etap = 0;
    predupr('');
    cell_TO_may = false;
    infoline.innerHTML = "Отметьте карту ( верхнюю в столбце ) ";
    let tempCell = document.querySelector('.victory')
    tempCell.style.display='';
}   //  ZapolnKletok

infoline = document.querySelector('.infoline');


//      ЗАПОЛНЕНИЕ
ZapolnKletok();

//      FUNCTION
// new определение, является ли данная карта верхней в кол col и в ряду row
//  аргумент imyaid - строка типа 'b2' ( 2 - это 3-й снизу )
function isverhcell(imyaid){
    let dada = false;
    let nrow = imyaid[1];
    let ncol = (imyaid[0].charCodeAt(0)-97);    //  номер ряда <- буква
    //console.log(imyaid, ncol, nrow);
    if ( nrow>2) { return true }   //  если ряд == 3
     // вверх
    let indstr = +nrow+1;
    let hiimyaid = '#'+imyaid[0]+indstr;
    //console.log(hiimyaid);
    let lcurrcell = document.querySelector(hiimyaid);
    if (lcurrcell.innerHTML==='') { return true;}
    return dada;
}   // function isverhcell _______ }

//      FUNCTION    пуста ли более нижняя от cell
function LowerCell(cell){
    //let imyaid = cell.attributes[1].value;     //  attribute, например b2
    let nrow = cell.stroka;
    if (+nrow<=0) return null;
    nrow--;
    let loimyaid = '#'+cell.strokas+nrow;
    console.log(loimyaid);
    let lcurrcell = document.querySelector(loimyaid);
    return lcurrcell;
}

//      FUNCTION    равны ли колонки IZ & TO
function TaKolonka(cellIZ, cellTO){
    let colonIZ = cellIZ.attributes[1].value[0];
    let colonTO = cellTO.attributes[1].value[0];
    console.log( colonIZ, colonTO );
    return (colonIZ == colonTO);
}

//      FUNCTION 
function predupr(flag){
    let vcell;
    vcell = document.querySelector('.predupr');
    if ( flag =='red') {
        vcell.style.backgroundColor='red';
        vcell.style.color='white';
    }
    else{
        vcell.style.backgroundColor='';
        vcell.style.color='';
    }
}

//console.log('hanoi 2');

    //  STAKAN
const stakan = document.querySelector('#pole');
//stakan.onclick = alert('Yes');

// ********************  Действия по клику
stakan.onclick = function(event) {
    let target = event.target; // где был клик?
    let imyaid = target.attributes[1].value;     //  attribute, например b2
    let currcell = document.querySelector('#'+imyaid);
    console.log(imyaid);
    //
    if ( etap === 0 ) {
        //  if not empty
        if (currcell.innerHTML!=='') {
            if (isverhcell(imyaid) ) {
              currcell.style.background="#AFA";
              etap = 1;
              predupr('');
              coorIZ = currcell;
              //chisloIZ = currcell.innerHTML;
              infoline.innerHTML = 'Отметьте куда переместить';
            }
        }
    }   //  if ( etap === 0
    else if ( etap == 1 ) {
        let tempCell;
        let znachNIZ = -1;
        let znachIZ;
        //  if empty and not the same column
        if ( ( currcell.innerHTML==='' ) & !TaKolonka(currcell, coorIZ ) ) {
            console.log(' empty');
            // проверим более нижнюю, если пустая, спустимся
            
            tempCell = LowerCell(currcell);
            if (tempCell !== null ) {
                while (tempCell.innerHTML==='') {
                    currcell = tempCell;
                    tempCell = LowerCell(tempCell);
                    if ( tempCell === null ) break;
                    znachNIZ = tempCell.innerHTML;
                    console.log(' lower ', currcell.attributes[1].value);
                }
            }
            console.log('if tempCell !== null ');
            cell_TO_may = true;
        }
        //console.log('not empty'); 
        tempCell = LowerCell(currcell);
        if (tempCell !== null ) {
            znachNIZ = tempCell.innerHTML;
            znachIZ = coorIZ.innerHTML;
            if ( +znachIZ > znachNIZ ) {
                console.log(' big on less');
                coorIZ.style.background="yellow";
                predupr('red');
                cell_TO_may = false;
                etap = 0;
            }
            else {
                cell_TO_may = true;
            }
        }
        //  если та же ячейка
        if (currcell.innerHTML==coorIZ.innerHTML) {cell_TO_may = false;};
        if ( cell_TO_may ) {
            //  ставим фишку
            currcell.style.background="yellow";
            currcell.innerHTML = coorIZ.innerHTML;
            coorIZ.innerHTML = '';
            coorIZ.style.background="aliceblue";
            cell_TO_may = false;
            etap = 0;
            console.log(' TO ', currcell.attributes[1].value);
            infoline.innerHTML = "Отметьте карту ( верхнюю в столбце ) ";
            if ( currcell.stroka == 3 ) {
                console.log('URA!');
                tempCell = document.querySelector('.victory')
                tempCell.style.display='block';
                etap = 3;
            }
        }
        /*
        если клетка  пустая,
            спуститься до ближ пустой
            etap = 0;
        иначе  сообщ об ошибке
        */
    }   //  if ( etap === 0
};  //  stakan.onclick

//console.log ('a'.charCodeAt(0));

const snova = document.querySelector('.btn_snova');
snova.onclick = function(event) {
    console.log ('snova');
    ZapolnKletok();
}

console.log ('js03');
