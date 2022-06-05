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
    let smeschV = 5;
    let smeschVn = 200;
    let smesch = '';
    let pole_2;
    let index_mul;
    for ( index_cart=1; index_cart<106; index_cart++) {
        //tempstr = '#karta'+index_cart;
        //imyadiv = 'divk'+index_cart;
        masobjk[index_cart] = document.createElement('div');
        pole_2 = document.querySelector('#pole2');
        pole_2.append(masobjk[index_cart]);
        masobjk[index_cart].className = "karta";
        masobjk[index_cart].innerHTML = "k"+index_cart;
        index_mul = index_cart*3;
        tempstr = `${index_mul}px`;
        masobjk[index_cart].style.left = tempstr;
        smesch = `${smeschV}`;
        if (index_cart>55) {smesch=`${smeschVn}`};
        masobjk[index_cart].style.top = smesch+"px";
        console.log(index_cart, tempstr, smesch);
    }
}

formirkart();





