const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;
function girar(){
  if (giros < 5) {
    let rand = Math.random() * 9200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Has terminado tus 5 intentos!!!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = 'La persona en responder sera: ';
         document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;        
      }
    })
  }


function premio(premios){

  document.querySelector('.elije').innerHTML = 'La segunda persona sera: ' + premios;

}


 function calcular(rand) {

  valor = rand / 860;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 860;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
  premio("Guivany Aguirre");
  break;
  case valor > 45 && valor <= 90:
  premio("Miguel angel bahamon");
  break;
  case valor > 90 && valor <= 135:
  premio("David casagua");
  break;
  case valor > 135 && valor <= 180:
  premio("juan manuel chica");
  break;
  case valor > 180 && valor <= 225:
  premio("juan sebastian cleves");
  break;
  case valor > 225 && valor <= 270:
  premio("jhon cortes");
  break;
  case valor > 270 && valor <= 315:
  premio("jose alejandro cuellar");
  break;
  case valor > 315 && valor <= 360:
  premio("Jhoan guilombo");
  break;
  case valor > 360 && valor <= 405:
  premio("Edith yohana idrobo");
  break;
  case valor > 405 && valor <= 450:
  premio("manuel begambre");
  break;
  case valor > 450 && valor <= 495:
  premio("brayan medina");
  break;
  case valor > 495 && valor <= 540:
  premio("Gabriela montenegro");
  break;
  case valor > 540 && valor <= 585:
  premio("Julian david narvaez");
  break;
  case valor > 585 && valor <= 630:
  premio("Pedro jose mendez");
  break;
  case valor > 630 && valor <= 675:
  premio("Ever paez");
  break;
  case valor > 675 && valor <= 720:
  premio("Diego romero");
  break;
  case valor > 720 && valor <= 765:
  premio("Camilo andres vargas");
  break;
  case valor > 765 && valor <= 810:
  premio("Karen velasco");
  break;
  }

 }, 5000);

}    
} 