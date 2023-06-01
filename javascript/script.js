//cartel de consentimiento para ingresar a la

  var aceptar= confirm("eres mayor de edad?") 
  if (aceptar== true){
      console.log("ingresa")}
   else { alert("usted ingresa a esta pagina bajo su responsabilidad")};


 //CARTEL PARA ABANDONAR LA PAGINA 

   window.onbeforeunload= function(){
      return "¡Atención!Estás abandonando comida con sabor. ¿salir de todas formas?";};

