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

let infoline = document.querySelector('#infoline');
infoline.innerHTML = mascards[0][5];


//  вывод карт во вспомог окно
function vyvodkart(){
    let needshow = true;
    let ryad = 0;
    let stroki = ['r0 ','r1 ','r2 ','r3 ','r4 ','r5 '];
    while (needshow) {
        needshow = false;
        for ( let kolon = 0; kolon<10; kolon++ ) {
            if ( mascards[kolon].length>ryad ) {
                needshow = true;
                stroki[ryad] += mascards[kolon][ryad]+' ';
            }
        }
        if (needshow) console.log(stroki[ryad]);
        ryad++;
    }
}   //  vyvodkart

//vyvodkart();


  //document.body.append(div);


//  отображение карт
let div0 = document.createElement('div');

let kolon = document.querySelector('#col0');
kolon.append(div0);
div0.className = "card";
div0.innerHTML = "A";
let div1 = document.createElement('div');
kolon = document.querySelector('#col1');
kolon.append(div1);
div1.className = "card";
div1.innerHTML = "B";

function formirkart(){
    let index_cart;
    let tempstr;
    let imyadiv;
    let pole_2;
    for ( index_cart=1; index_cart<4; index_cart++) {
        tempstr = '#karta'+index_cart;
        imyadiv = 'divk'+index_cart;
        //let `${imyadiv}` = document.createElement('div');
        pole_2 = document.querySelector('#pole2');
        pole_2.append(`${imyadiv}`);
        //`${imyadiv}`.className = "kart";
        //`${imyadiv}`.innerHTML = "new";
    }
}

//formirkart();

//let proba1 = document.createElement('div'); 
let proba1 = document.querySelector('.colon2');
//proba1.style.position = 'absolute';
proba1.innerHTML = '1-1';
proba1.style.height = "100px";
proba1.style.width = "40px";

/*
for ( let cnt = 0; cnt<9; cnt++) {
    let kolon = document.querySelector('#col'+cnt);
    kolon.append(div);
    div.className = "card";
    div.innerHTML = "A";
}
*/




