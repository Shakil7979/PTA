
$('.coupon-field').hide();
// const dataCheckd = document.getElementById('check1'); 
// const myFunction = (event) => {
//     let text = event.currentTarget.tagName;
//     document.getElementById("demo").innerHTML = text;
//   }
//   document.getElementById("check1").addEventListener("click", function(e) {
//     console.log(e.target.value);
// });

function validate(){
    if (remember.checked == 1){ 
      $('.coupon-field').show();
      $('#check_label').hide();
    } else {
        $('.coupon-field').hide();
        $('#check_label').show();
    }
  }




