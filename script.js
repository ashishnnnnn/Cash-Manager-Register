var bill_amount = document.querySelector("#bill-amount");
var cash_amount = document.querySelector('#Cash-Given');
var check_button = document.querySelector('.Check-Button');
var error_message = document.querySelector("#error-message");
var notes_value = document.querySelectorAll('.no-of-notes');

var notes = [2000,500,200,100,50,20,10,5,2,1]

check_button.addEventListener("click",function show_output(){
    error_message.style.display = 'none';
    //console.log(cash_amount.value,bill_amount.value);
    if(bill_amount.value == parseInt(bill_amount.value, 10)){
        if(bill_amount.value>0){
            var remaining = cash_amount.value-bill_amount.value;
            if(remaining>=0){
                var remaining = cash_amount.value-bill_amount.value;
                for(let i=0;i<notes.length;i++){
                    var number = Math.trunc(remaining/notes[i]);
                    remaining = remaining%notes[i];
                    if(number>0){
                        notes_value[i].innerText = number;
                    }
                    else{
                        notes_value[i].innerText = '';
                    }
                }
            }
            else{
                show_error("Cash should be atleast equal to bill");
            }
        }
        else{
            show_error("Enter the Valid Amount");
        }
    }
    else{
        console.log(bill_amount.value);
        show_error("Please enter Integer Value As Bill");
    }
})

function show_error(message){
    error_message.style.display = 'block';
    error_message.innerText = message;
    for(let i=0;i<notes.length;i++){
        notes_value[i].innerText = '';
    }
}