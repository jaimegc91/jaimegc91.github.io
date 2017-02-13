(function () {
  'use strict';

  
}());
var dropdownMenu1 = document.getElementById('dropdownMenu1');
  console.log('dropdownMenu1 = ', dropdownMenu1);

var $elemento = $('#dropdownMenu1');


 $elemento.click(function(){
   var classList = '';

   if($elemento.hasClass('clicked')){
     // Si myBtn contiene la clase active la elimino
     $(this).removeClass('clicked');

     // Recuperamos el atributo clase y los partimos
     classList = $elemento.attr('class').split(' ');
     console.log('classList === ', classList);
   }else{
     // En caso contrario la añado
     $(this).addClass('clicked');

         }
           });
