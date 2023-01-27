const textbox = document.querySelector('.textbox');
const resultbox = document.querySelector('.resultbox');
const bn1 = document.getElementById('n1');
const bn2 = document.getElementById('n2');
const bn3 = document.getElementById('n3');
const bn4 = document.getElementById('n4');
const bn5 = document.getElementById('n5');
const bn6 = document.getElementById('n6');
const bn7 = document.getElementById('n7');
const bn8 = document.getElementById('n8');
const bn9 = document.getElementById('n9');
const bn0 = document.getElementById('n0');
const bpoint = document.getElementById('point');
const bdeleteall = document.getElementById('deleteallbutton');
const bdeletebutton = document.getElementById('deletebutton');
const badd = document.getElementById('addbutton');
const bsub = document.getElementById('subbutton');
const bmolt = document.getElementById('moltbutton');
const bdiv = document.getElementById('divbutton');
const bequal = document.getElementById('equalbutton');

textbox.innerHTML = '';
resultbox.innerHTML = '0';
let valuesarray = ['','',''];
let oldvaluearray;
let newnumber = true;
let justusedequal = true
let lasttimeresultwas
let justdidafstcalc = false;

calculate = function(){
    if(valuesarray[0] !== '' && valuesarray[1] !== '' && valuesarray[2] !== ''){
        if(valuesarray[1] === '+'){
            risultato = parseFloat(valuesarray[0]) + parseFloat(valuesarray[2]);
        }else if(valuesarray[1] === '−'){
            risultato = parseFloat(valuesarray[0]) - parseFloat(valuesarray[2]);
        }else if(valuesarray[1] === '×'){
            risultato = parseFloat(valuesarray[0]) * parseFloat(valuesarray[2]);
        }else if(valuesarray[1] === '÷'){
            risultato = parseFloat(valuesarray[0]) / parseFloat(valuesarray[2]);
        }
        risultato = risultato.toFixed(2)
        oldvaluearray = valuesarray;
        valuesarray = ['','',''];
        if(risultato==parseInt(risultato)){
            risultato = parseInt(risultato)
        }
        return risultato;
    }
    else if(valuesarray[0] !== '' && valuesarray[1] !== '' && valuesarray[2] === ''){
        console.log('something isnt good')
    }  }


checkifisnewnumber = function(){
    justdidafstcalc = false;
    justusedequal = false;
    if(newnumber === true){
        newnumber = false;
        return '';
    }
    else{
        return resultbox.innerHTML;
    }
}

document.addEventListener('keydown', (key) => {
    var name = key.key;
    var code = key.code;
    //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    switch(code){
    
        case 'Digit1':
            bn1function();
            break;
        
        case 'Digit2':
            bn2function();
            break;

        case 'Digit3':
            bn3function();
            break;

        case 'Digit4':
            bn4function();
            break;

        case 'Digit5':
            bn5function();
            break;

        case 'Digit6':
            bn6function();
            break;

        case 'Digit7':
            if(key.shiftKey === true){
                bdivfunction();
                break;
            }
            else{
            bn7function();
            break;
            }

        case 'Digit8':
            bn8function();
            break;
        
        case 'Digit9':
            bn9function();
            break;

        case 'Digit0':
            if(key.shiftKey === true){
                bequalfunction();
                break;
            }
            else{
                bn0function();
                break;
            }

        case 'Period':
            bpointfunction();
            break;

        case 'Backspace':
            bdeletefunction();
            break;

        case 'BracketRight':
            if(key.shiftKey === true){
            bmoltfunction();
            break;
            }
            else{
            baddfunction();
            break;
            }
        
        case 'Slash':
            bsubfunction();
            break;    
            
        case 'Enter':
            bequalfunction()
            break;  
    }
  }, false);

function bn1function(){
    if(resultbox.innerHTML.length > 13){return}
    resultbox.innerHTML = checkifisnewnumber();
    resultbox.innerHTML = resultbox.innerHTML+'1';
}
bn1.addEventListener('click', ()=> {
    bn1function();
});

function bn2function(){
    if(resultbox.innerHTML.length > 13){return}
    resultbox.innerHTML = checkifisnewnumber();
    resultbox.innerHTML = resultbox.innerHTML+'2';
}

bn2.addEventListener('click', ()=> {
    bn2function()
});


function bn3function(){
    if(resultbox.innerHTML.length > 13){return}
    resultbox.innerHTML = checkifisnewnumber();
    resultbox.innerHTML = resultbox.innerHTML+'3';
}

bn3.addEventListener('click', ()=> {
    bn3function();
});

function bn4function(){
    if(resultbox.innerHTML.length > 13){return}
    resultbox.innerHTML = checkifisnewnumber();
    resultbox.innerHTML = resultbox.innerHTML+'4';
}

bn4.addEventListener('click', ()=> {
    bn4function();
});

function bn5function(){
    if(resultbox.innerHTML.length > 13){return}
    resultbox.innerHTML = checkifisnewnumber();
    resultbox.innerHTML = resultbox.innerHTML+'5';
}

bn5.addEventListener('click', ()=> {
    bn5function();
});

function bn6function(){
    if(resultbox.innerHTML.length > 13){return}
    resultbox.innerHTML = checkifisnewnumber();
    resultbox.innerHTML = resultbox.innerHTML+'6';
}

bn6.addEventListener('click', ()=> {
    bn6function();
});

function bn7function(){
    if(resultbox.innerHTML.length > 13){return}
    resultbox.innerHTML = checkifisnewnumber();
    resultbox.innerHTML = resultbox.innerHTML+'7';
}

bn7.addEventListener('click', ()=> {
    bn7function();
});

function bn8function(){
    if(resultbox.innerHTML.length > 13){return}
    resultbox.innerHTML = checkifisnewnumber();
    resultbox.innerHTML = resultbox.innerHTML+'8';
}

bn8.addEventListener('click', ()=> {
    bn8function();
});

function bn9function(){
    if(resultbox.innerHTML.length > 13){return}
    resultbox.innerHTML = checkifisnewnumber();
    resultbox.innerHTML = resultbox.innerHTML+'9';
}

bn9.addEventListener('click', ()=> {
    bn9function();
});

function bn0function(){
    if(resultbox.innerHTML.length > 13){return}
    
    resultbox.innerHTML = checkifisnewnumber();
    if(resultbox.innerHTML === '0'){
        return
        }
    resultbox.innerHTML = resultbox.innerHTML+'0';
}

bn0.addEventListener('click', ()=> {
    bn0function();
});

function bpointfunction(){
    newnumber = false;
    if(newnumber !== true){
        if(resultbox.innerHTML.includes('.') === false){
        resultbox.innerHTML = resultbox.innerHTML+'.';
    }}
    else if(newnumber == true){
        resultbox.innerHTML = '0'+'.';     
    }
}


bpoint.addEventListener('click', ()=> {
    bpointfunction();
});


function bdeleteallfunction(){
    textbox.innerHTML = '';
    resultbox.innerHTML = '0';
    valuesarray = ['','',''];
    newnumber = true;
    justusedequal = false;
}

bdeleteall.addEventListener('click', ()=> {
    bdeleteallfunction();
});


function bdeletefunction(){
    let string = resultbox.innerHTML;
    let stringlength = string.length;


    if(justdidafstcalc===true){
        return
    }

    if(justusedequal===true){
        bdeleteallfunction()
        return
    }

    if(textbox.innerHTML.slice(0,stringlength-1) !== resultbox.innerHTML){
        if(stringlength > 1){
            resultbox.innerHTML = resultbox.innerHTML.slice(0,stringlength-1);
        }
        else{
            resultbox.innerHTML = '0';
            newnumber = true;
        }
    }
    /*

    let string = resultbox.innerHTML;
    let stringlength = string.length;

    if(textbox.innerHTML.slice(0,stringlength-1) === resultbox.innerHTML){
        if(stringlength > 1){
            resultbox.innerHTML = resultbox.innerHTML.slice(0,stringlength-1);
        }
        else{
            resultbox.innerHTML = '0';
        }
    }

    if(justusedequal === true){
        textbox.innerHTML = '';
        resultbox.innerHTML = risultato;
    }
    */
}

bdeletebutton.addEventListener('click', ()=> {
    bdeletefunction();
});

function baddfunction(){
    
    let operator = '+';

    if(newnumber===true){
        if(resultbox.innerHTML === '0'){
            textbox.innerHTML = '0' + operator;
        }
        textbox.innerHTML = textbox.innerHTML.slice(0,textbox.innerHTML.length-1)+operator;
        return
    }

    if(valuesarray[0]===''){
        valuesarray[1] = operator;
        valuesarray[0] = resultbox.innerHTML;
        textbox.innerHTML = resultbox.innerHTML + operator;
    }
    else if(valuesarray[0]!=='' && valuesarray[2]===''){
        
        valuesarray[1] = textbox.innerHTML.slice(textbox.innerHTML.length-1,textbox.innerHTML.length);
        valuesarray[2] = resultbox.innerHTML;
        risultato = calculate();
        textbox.innerHTML = risultato + operator;
        valuesarray[0] = risultato
        resultbox.innerHTML = risultato
        justdidafstcalc = true;

    }
    newnumber = true;
}

badd.addEventListener('click', ()=> {
    baddfunction();
});

function bsubfunction(){
    
    let operator = '−';

    if(newnumber===true){
        if(resultbox.innerHTML === '0'){
            textbox.innerHTML = '0' + operator;
        }
        textbox.innerHTML = textbox.innerHTML.slice(0,textbox.innerHTML.length-1)+operator;
        return
    }

    if(valuesarray[0]===''){
        valuesarray[1] = operator;
        valuesarray[0] = resultbox.innerHTML;
        textbox.innerHTML = resultbox.innerHTML + operator;
    }
    else if(valuesarray[0]!=='' && valuesarray[2]===''){
        
        valuesarray[1] = textbox.innerHTML.slice(textbox.innerHTML.length-1,textbox.innerHTML.length);
        valuesarray[2] = resultbox.innerHTML;
        risultato = calculate();
        textbox.innerHTML = risultato + operator;
        valuesarray[0] = risultato
        resultbox.innerHTML = risultato
        justdidafstcalc = true;


    }
    newnumber = true;
}

bsub.addEventListener('click', ()=> {
    bsubfunction()
});

function bmoltfunction(){
  
    let operator = '×';

    if(newnumber===true){
        if(resultbox.innerHTML === '0'){
            textbox.innerHTML = '0' + operator;
        }
        textbox.innerHTML = textbox.innerHTML.slice(0,textbox.innerHTML.length-1)+operator;
        return
    }

    if(valuesarray[0]===''){
        valuesarray[1] = operator;
        valuesarray[0] = resultbox.innerHTML;
        textbox.innerHTML = resultbox.innerHTML + operator;
    }
    else if(valuesarray[0]!=='' && valuesarray[2]===''){
        
        valuesarray[1] = textbox.innerHTML.slice(textbox.innerHTML.length-1,textbox.innerHTML.length);
        valuesarray[2] = resultbox.innerHTML;
        risultato = calculate();
        textbox.innerHTML = risultato + operator;
        valuesarray[0] = risultato
        resultbox.innerHTML = risultato
        justdidafstcalc = true;


    }
    newnumber = true;
}

bmolt.addEventListener('click', ()=> {
    bmoltfunction();
});

function bdivfunction(){
    let operator = '÷';

    if(newnumber===true){
        if(resultbox.innerHTML === '0'){
            textbox.innerHTML = '0' + operator;
        }
        textbox.innerHTML = textbox.innerHTML.slice(0,textbox.innerHTML.length-1)+operator;
        return
    }

    if(valuesarray[0]===''){
        valuesarray[1] = operator;
        valuesarray[0] = resultbox.innerHTML;
        textbox.innerHTML = resultbox.innerHTML + operator;
    }
    else if(valuesarray[0]!=='' && valuesarray[2]===''){
        
        valuesarray[1] = textbox.innerHTML.slice(textbox.innerHTML.length-1,textbox.innerHTML.length);
        valuesarray[2] = resultbox.innerHTML;
        risultato = calculate();
        textbox.innerHTML = risultato + operator;
        valuesarray[0] = risultato
        resultbox.innerHTML = risultato
        justdidafstcalc = true;


    }
    newnumber = true;
}

bdiv.addEventListener('click', ()=> {
    bdivfunction();
});


function bequalfunction(){
    if((valuesarray[0] === '' || valuesarray[0] === lasttimeresultwas) && valuesarray[1] === '' && valuesarray[2] === ''){
        if(resultbox.innerHTML.slice(resultbox.innerHTML.length-1,resultbox.innerHTML.length) === '.'){
            textbox.innerHTML = resultbox.innerHTML.slice(0,resultbox.innerHTML.length-1) + '='
            resultbox.innerHTML = resultbox.innerHTML.slice(0,resultbox.innerHTML.length-1)
        }
        textbox.innerHTML = resultbox.innerHTML + '='
        resultbox.innerHTML = resultbox.innerHTML
        newnumber = true;
        justusedequal = true;
        valuesarray= [resultbox.innerHTML,'','']
        lasttimeresultwas = resultbox.innerHTML;
    }
    else if(justusedequal === true){
        
        valuesarray[0] = risultato.toString()
        valuesarray[1] = oldvaluearray[1];
        valuesarray[2] = oldvaluearray[2];

        let number1 = valuesarray[0];
        let operator = valuesarray[1];
        let number2 = valuesarray[2];
       
        risultato = calculate();
        valuesarray[0] = risultato 
        textbox.innerHTML = number1 + operator + number2 + '=';
        resultbox.innerHTML = risultato
        return
    }
    else{
    valuesarray[2] = resultbox.innerHTML;
    valuesarray[1] = textbox.innerHTML.slice(textbox.innerHTML.length-1,textbox.innerHTML.length);
    let num1 = valuesarray[0];
    let num2 = valuesarray[2];
    let oper = valuesarray[1];
    risultato = calculate();
    textbox.innerHTML = num1 + oper + num2 + '=';
    resultbox.innerHTML = risultato;
    newnumber = true;
    valuesarray= [risultato,'','']
    justusedequal = true;
    }
}

bequal.addEventListener('click', ()=> {
    bequalfunction();
});