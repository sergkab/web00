    //  GLOBAL {
let mascards = [[3,0,0,0],[0,0,0,0],[1,2,4,0]];   // [ [лев низ,,,лев верх]... ]

const letterscol = ['a','b','c'];
let coorIZ = null;  //  клетка ОТКУДА
let etap = 0;
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
          if ( chislo>0  ) {
            currcell.innerHTML = String(chislo);
            //console.log( chislo );
          }
        }       //  for
    }       //  for
    
}   //  ZapolnKletok


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
    let imyaid = cell.attributes[1].value;     //  attribute, например b2
    let nrow = imyaid[1];
    if (+nrow<=0) return null;
    nrow--;
    //let ncol = (imyaid[0].charCodeAt(0)-97);    //  номер ряда <- буква
    loimyaid = '#'+imyaid[0]+nrow;
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


infoline = document.querySelector('.infoline');
infoline.innerHTML = "Отметьте карту ( верхнюю в столбце ) ";


//console.log('hanoi 2');

    //  STAKAN
stakan = document.querySelector('#pole');
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
        if (currcell.innerHTML!==0) {
            if (isverhcell(imyaid) ) {
              currcell.style.background="#AFA";
              etap = 1;
              coorIZ = currcell;
              //chisloIZ = currcell.innerHTML;
              infoline.innerHTML = 'Отметьте куда переместить';
            }
        }
    }   //  if ( etap === 0
    else if ( etap == 1 ) {
        
        //  if empty
        if ( ( currcell.innerHTML==='' ) & !TaKolonka(currcell, coorIZ ) ) {
            console.log(' empty');
            let tempCell = LowerCell(currcell);
            if (tempCell !== null ) {
                while (tempCell.innerHTML==='') {
                    currcell = tempCell;
                    tempCell = LowerCell(tempCell);
                    if ( tempCell === null ) break;
                    console.log(' lower ', currcell.attributes[1].value);
                }
            }
            console.log(' TO ', currcell.attributes[1].value);
            currcell.style.background="yellow";
            coorIZ.style.background="aliceblue";
            currcell.innerHTML = coorIZ.innerHTML;
            coorIZ.innerHTML = '';
            etap = 0;
            infoline.innerHTML = "Отметьте карту ( верхнюю в столбце ) ";
        }
        else { console.log('not empty'); }
        /*
        если клетка  пустая,
            спуститься до ближ пустой
            etap = 0;
        иначе  сообщ об ошибке
        */
    }
};  //  stakan.onclick

console.log ('a'.charCodeAt(0));



