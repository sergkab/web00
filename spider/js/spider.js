
// 0 - неизвестная карта ( закрытая )
//  112 - черная дама  ( десятки и единицы: 1 - туз, 2-9, 10, 11 - валет, 12 - дама, 13 - король)
// сотни - масть : 0 - красн, 1 - черн 
let mascards = [0, 
    0,0,0,0,0,8,
    0,0,0,0,0,111,
    0,0,0,0,0,112,
    0,0,0,0,0,103,
    0,0,0,0,10,
    0,0,0,0,1,
    0,0,0,0,4,
    0,0,0,0,7,
    0,0,0,0,112,
    0,0,0,0,107,

    12,12,104,10,109,102,103,101,113,6,
    109,4,1,103,9,111,105,106,11,106,
    11,112,3,9,110, 1,102,9,107,105,
    113,12,110,7,5,110,107,6,13,12,
    3,5,104,101,102, 13,3,2,105,106
    ];   // [ [прав верх,,,прав низ]... ]

let masobjk = ['0','','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    ];

let infoline = document.querySelector('#infoline');
infoline.innerHTML = mascards[0][5];



function formirkart(){
    let index_cart;
    let tempstr;
    const smeschV = 5;
    const smeschVn = 200;
    const smeschX = 300;
    const smeschY0 = 300;
    const mnozX = 50;
    const mnozY = 30;
    let smesch = '';
    let smeschY = 0;
    let smeschXstr;
    let smeschYstr;
    let pole_2;
    const arrmast=['R','B']
    let mastj;
    const arrnominal = [0,'A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
    let nominal;
    let dobavka_X = 0;
    let dobavka_Y = 0;
    for ( index_cart=1; index_cart<105; index_cart++) {
        //tempstr = '#karta'+index_cart;
        //imyadiv = 'divk'+index_cart;
        masobjk[index_cart] = document.createElement('div');
        pole_2 = document.querySelector('#pole2');
        pole_2.append(masobjk[index_cart]);
        masobjk[index_cart].className = "karta";
        //  Обозначение карты
        mastj = Math.floor((mascards[ index_cart ])/100);
        nominal = mascards[ index_cart ] % 100;
        masobjk[index_cart].innerHTML = arrnominal[nominal] + arrmast[ mastj ];
        if (mastj<1) {masobjk[index_cart].style.color = 'red'};
        //  расположение на столе
        if (index_cart<25) {
            dobavka_Y =  ((index_cart-1) % 6)*mnozY;
            dobavka_X = (Math.floor((index_cart-1)/6))*mnozX;
        }
        else {
            dobavka_Y =  (((index_cart-25) % 5))*mnozY ;
            dobavka_X = (Math.floor((index_cart-25)/5+4))*mnozX;
        }

        
        // смещение по вертик
        smeschY = dobavka_Y;
        smesch = `${smeschV}`;
        if (index_cart>54) {
            //smesch=`${smeschVn}`;
            //smeschY += smeschVn;
            dobavka_X = ((index_cart-55) % 10)*50 + smeschX;
            smeschY = (Math.floor(index_cart-55)/10)*20 + smeschY0;
        };
        // смещение по гориз
        smeschXstr = `${dobavka_X}px`;
        masobjk[index_cart].style.left = smeschXstr;
        // смещение по вертик
        smeschYstr = `${smeschY}`+"px";
        masobjk[index_cart].style.top = smeschYstr;
        //console.log(index_cart, tempstr, smeschY);
    }
}

formirkart();

console.log( mascards.length)



