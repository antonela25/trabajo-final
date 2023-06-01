function calcularEnvio(){
    var clienteUbicacion=document.getElementById("ubicacion").value;
    var costoEnvio=0;
    if( clienteUbicacion=="San Nicolas"|| clienteUbicacion=="san nicolas"|| clienteUbicacion=="San nicolas"|| clienteUbicacion=="SAN NICOLAS") {
        costoEnvio=250;
    }
    else if(clienteUbicacion=="rosario"||clienteUbicacion=="Rosario"||clienteUbicacion=="ROSARIO" ){
        costoEnvio=2000;
    }
    else if(clienteUbicacion=="pergamino"||clienteUbicacion=="Pergamino"||clienteUbicacion=="PERGAMINO" ){
        costoEnvio=3000;
    }
    else if(clienteUbicacion=="ramallo"||clienteUbicacion=="Ramallo"||clienteUbicacion=="RAMALLO" ){
        costoEnvio=1500;
    }
    else{ costoEnvio="no tenemos envios disponibles"}

    document.getElementById("costo-envio").innerHTML= "$" + costoEnvio;
}

//cerrar pagina desde formulario 

function cerrarse(){
    window.alert("Gracias por visitarnos");
    window.close()
}