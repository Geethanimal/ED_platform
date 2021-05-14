// Disable form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

function ShowHide(){
var organisation = document.getElementById("organisation");

var ord=document.getElementById("ord");
var mg=document.getElementById("ca_m");

if(organisation.checked)
{
    mg.style.marginTop="50px";
    ord.style.display="block";
}else{
    
    ord.style.display="none";
    mg.style.marginTop="150px";
}
}
