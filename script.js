let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.toString().slice(0,-1);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '%'){
            
            string = eval(string)/100;
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'pi'){
            
            string = eval(string)*3.14159265359 ;
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
    })
})