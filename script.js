var bill_amount = document.querySelector("#bill-amount");
var check_button1 = document.querySelector(".Check-Button1");
var check_button2 = document.querySelector(".Check-Button2");
var error_message = document.querySelector("#error-message");
var cash_amount = document.querySelector("#Cash-Given");
var notes_value = document.querySelectorAll(".no-of-notes");

var paid_amount_box = document.querySelector(".paid-amount");
var show_return = document.querySelector(".show-return");

paid_amount_box.style.display = "none";
show_return.style.display = "none";

var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

check_button1.addEventListener("click", function show_output() {
  error_message.style.display = "none";
  //console.log(cash_amount.value,bill_amount.value);
  if (bill_amount.value == parseInt(bill_amount.value, 10)) {
    if (bill_amount.value > 0) {
      paid_amount_box.style.display = "block";
    } else {
      show_error("Enter the Valid Amount");
    }
  } else {
    show_error("Please enter Integer Value As Bill");
  }
});

check_button2.addEventListener("click", give_amount);

function show_error(message) {
  error_message.style.display = "block";
  error_message.innerText = message;
  for (let i = 0; i < notes.length; i++) {
    notes_value[i].innerText = "";
  }
}

function give_amount() {
  if (cash_amount.value == parseInt(cash_amount.value, 10)) {
    if (cash_amount.value > 0) {
      var remaining = cash_amount.value - bill_amount.value;
      if (remaining > 0) {
        error_message.style.display = "none";
        show_return.style.display = "block";
        var remaining = cash_amount.value - bill_amount.value;
        for (let i = 0; i < notes.length; i++) {
          var number = Math.trunc(remaining / notes[i]);
          remaining = remaining % notes[i];
          if (number > 0) {
            notes_value[i].innerText = number;
          } else {
            notes_value[i].innerText = "";
          }
        }
      } else if (remaining == 0) {
        show_return.style.display = "none";
        show_error("No return as cash amount is equal to bill");
      } else {
        show_return.style.display = "none";
        show_error("Pay amount atleast equal to bill");
      }
    } else {
      show_return.style.display = "none";
      show_error("Enter the Valid Amount");
    }
  } else {
    show_return.style.display = "none";
    show_error("Please enter Integer Value As Cash");
  }
}
