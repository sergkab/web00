console.log ("spider");

// 0 - неизвестная карта ( закрытая )
//  124 - _ пики ( сотни и десятки: 1 - туз, 2-9, 10, 11 - валет, 12 - дама, 13 - король)
// единицы - масть : 1 - черви, 2 - буби, 3 - крести, 4 - пики
let mascards = [0, 
    0,0,0,0,0,4,
    0,0,0,0,0,109,
    0,0,0,0,0,113,
    0,0,0,0,0,1,
    0,0,0,0,109,
    0,0,0,0,10,
    0,0,0,0,112,
    0,0,0,0,105,
    0,0,0,0,10,
    0,0,0,0,10,

    105,9,110,7,102, 108,101,8,4,12,
    3,109,11,106,6, 12,103,13,107,106,
    5,6,106,11,111, 6,12,104,103,8,
    112,101,12,2,13, 1,103,1,102,10,
    8,3,9,6,109, 107,9,105,11,113
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
    const mnozX = 50;
    const mnozY = 30;
    let smesch = '';
    let smeschX = 0;
    let smeschY = 0;
    let smeschXstr;
    let smeschYstr;
    let pole_2;
    let index_mul;
    let dobavka_X = 0;
    let dobavka_Y = 0;
    for ( index_cart=1; index_cart<105; index_cart++) {
        //tempstr = '#karta'+index_cart;
        //imyadiv = 'divk'+index_cart;
        masobjk[index_cart] = document.createElement('div');
        pole_2 = document.querySelector('#pole2');
        pole_2.append(masobjk[index_cart]);
        masobjk[index_cart].className = "karta";
        masobjk[index_cart].innerHTML = "k"+index_cart;
        //  расположение на столе
        if (index_cart<25) {
            dobavka_Y =  ((index_cart-1) % 6)*mnozY;
            dobavka_X = (Math.floor((index_cart-1)/6))*mnozX;
        }
        else {
            dobavka_Y =  (((index_cart-25) % 5))*mnozY ;
            dobavka_X = (Math.floor((index_cart-25)/5+4))*mnozX;
        }

        
        // смещение по гориз
        tempstr = `${dobavka_X}px`;
        masobjk[index_cart].style.left = tempstr;
        // смещение по вертик
        smeschY = dobavka_Y;
        smesch = `${smeschV}`;
        if (index_cart>54) {
            smesch=`${smeschVn}`;
            smeschY += smeschVn;
        };
        smeschYstr = `${smeschY}`+"px";
        masobjk[index_cart].style.top = smeschYstr;
        //console.log(index_cart, tempstr, smeschY);
    }
}

formirkart();

console.log( mascards.length)



