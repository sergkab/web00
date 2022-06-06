console.log ("spider");

// 0 - неизвестная карта ( закрытая )
//  124 - _ пики ( сотни и десятки: 1 - туз, 2-9, 10, 11 - валет, 12 - дама, 13 - король)
// единицы - масть : 1 - черви, 2 - буби, 3 - крести, 4 - пики
let mascards = [[0,0,0,0,0,11],
    [0,0,0,0,0,31],
    [0,0,0,0,0,111],
    [0,0,0,0,0,74],
    [0,0,0,0,91],
    [0,0,0,0,104],
    [0,0,0,0,114],
    [0,0,0,0,11],
    [0,0,0,0,94],
    [0,0,0,0,111]];   // [ [прав верх,,,прав низ]... ]

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
    const mnozY = 40;
    let smesch = '';
    let smeschX = 0;
    let smeschY = 0;
    let smeschXstr;
    let smeschYstr;
    let pole_2;
    let index_mul;
    let dobavka_X = 0;
    let dobavka_Y = 0;
    for ( index_cart=1; index_cart<106; index_cart++) {
        //tempstr = '#karta'+index_cart;
        //imyadiv = 'divk'+index_cart;
        masobjk[index_cart] = document.createElement('div');
        pole_2 = document.querySelector('#pole2');
        pole_2.append(masobjk[index_cart]);
        masobjk[index_cart].className = "karta";
        masobjk[index_cart].innerHTML = "k"+index_cart;
        //  расположение на столе
        if (index_cart<26) {
            dobavka_Y =  ((index_cart-1) % 6)*mnozY;
            
        }
        else {
            dobavka_Y =  (((index_cart-25) % 5))*mnozY ;
        }
        dobavka_X = (Math.floor((index_cart-1)/6))*mnozX;
        
        // смещение по гориз
        tempstr = `${dobavka_X}px`;
        masobjk[index_cart].style.left = tempstr;
        //
        smeschY = dobavka_Y;
        smesch = `${smeschV}`;
        if (index_cart>55) {
            smesch=`${smeschVn}`;
            smeschY += smeschVn;
        };
        smeschYstr = `${smeschY}`+"px";
        masobjk[index_cart].style.top = smeschYstr;
        console.log(index_cart, tempstr, smeschY);
    }
}

formirkart();





