let inputWindow = document.getElementById('getInput')
let saved = document.querySelector('#saveInput')

let count =0;
let result = 0;
let store =0;
let op =''
let j=0;
let numbers =[
    {id:'i0', value:0},
    {id:'i1', value:1},
    {id:"i2", value:2},
    {id:"i3", value:3},
    {id:"i4", value:4},
    {id:"i5", value:5},
    {id:"i6", value:6},
    {id:"i7", value:7},
    {id:"i8", value:8},
    {id:"i9", value:9},
    {id:"dot", value:'.'},

    
];
let operator = [
    {id:"add", value: '+'},
    {id:"module", value:'%'},
    {id:"multiply", value:'*'},
    {id:"divide", value:'/'},
    {id:"substract", value:'-'},
];
let actions = [
    {id:"equal", value:'='},
    {id:"delete", value:'del'},
    {id:"clearAll", value:'C'},
]

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        count++;
        for(let i =0; i<numbers.length;i++){
            if(button.id === numbers[i].id){
                inputWindow.value=""
                inputWindow.value+=numbers[i].value;

                console.log("button clicked ")
               saved.textContent+=inputWindow.value;
              
            } 

        }
        result = saved.textContents;

        for(let i =0; i<operator.length;i++){
            if(button.id === operator[i].id){
                inputWindow.value=""
                inputWindow.value+=operator[i].value;
                console.log("button clicked ")
               saved.textContent+=inputWindow.value;

            }

        }
             
        
      handleOperator(button,operator,actions,result)

    });
    count=0;
});
const num1 =0
const opt =0
const num2=0
function handleOperator(button,operator,actions,result) {
    switch(button.id){
        case 'clearAll':
            inputWindow.value ='';
            saved.textContent ='';
            break;
        case 'delete':
            result = saved.textContent ;
            let l = result.length-1

            console.log(result.length)
            saved.textContent = result.slice(0,l);
            inputWindow.value=""
            break;
        case 'equal':
            result = saved.textContent;
            const parts = result.split(/([+\-*/])/).filter(Boolean);
            let a=0;
            const num1 = parseFloat(parts[0]);
            const opt = parts[1];
            const num2 = parseFloat(parts[2]);

            console.log(opt)
            if(opt.length>2){
                opt =opt.slice(-1)
            }
            console.log(opt ,num1,num2)
            
            if(opt ==='+'){
                a = num1+num2;
            }else if(opt ==='-'){
                a = num1-num2;
            }else if(opt ==='*'){
                a = num1*num2;
            }else if(opt ==='/'){
                a = num1/num2;
            }else if(opt ==='%'){
                a = num1%num2;
            }
            inputWindow.value=a
            
            
            console.log(a);
            break;

        default:
           



    }

}
