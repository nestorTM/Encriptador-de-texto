var botonEncriptar = document.querySelector('#encriptar');
var botonDesencriptar = document.querySelector('#desencriptar');
var textoRespuesta = document.querySelector('#textoTransformado');
var botonCopiar = document.querySelector('#copiar');

function encriptar(){
    var texto = capturarTexto();
    if(texto!=''){
        ocultar();
    }
    else if(texto ==''){
        mostrar();
    }
    
    textoRespuesta.textContent=encriptarTexto(texto);
}

function desencriptar(){
    var texto = capturarTexto();
    if(texto!=''){
        ocultar();
    }
    else if(texto ==''){
        mostrar();
    }
    
    textoRespuesta.textContent=desencriptarTexto(texto);
}

function ocultar(){
    document.getElementById('copiar').style.display='block';
    document.getElementById('textoTransformado').style.display='block';
    document.getElementById('imagenDetective').style.display='block';
    document.getElementById('imagenDiamante').style.display='none';
    document.getElementById('textoEncontrado').style.display='none';
    document.getElementById('mensajeIngreso').style.display='none';
    document.querySelector('.input-padron').value = '';
    document.querySelector('.input-padron').focus();
   
}

function mostrar(){
    document.getElementById('copiar').style.display='none';
    document.getElementById('textoTransformado').style.display='none';
    document.getElementById('imagenDetective').style.display='none';
    document.getElementById('imagenDiamante').style.display='block';
    document.getElementById('textoEncontrado').style.display='block';
    document.getElementById('mensajeIngreso').style.display='block';
}

function capturarTexto(){

    var texto = document.querySelector('.input-padron');
    let limitaciones= /^[^áÁéÉíÍóÓúÚA-Z]+$/;
    if(limitaciones.test(texto.value) || texto.value==""){
        return texto.value;
    }
    else{
       
       
        

        alert("solo se aceptan minusculas y sin acentos, por favor vuelve a intetar");
        return texto.value="";
        
    }
   
}

function encriptarTexto(texto){
   
    texto = texto.replace(/e/g,"enter");
    texto = texto.replace(/i/g,"imes");
    texto = texto.replace(/a/g,"ai");
    texto = texto.replace(/o/g,"ober");
    texto = texto.replace(/u/g,"ufat");
    return texto;

}

function desencriptarTexto(texto){
   
    texto = texto.replace(/enter/g,"e");
    texto = texto.replace(/imes/g,"i");
    texto = texto.replace(/ai/g,"a");
    texto = texto.replace(/ober/g,"o");
    texto = texto.replace(/ufat/g,"u");

    return texto;

}


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.addEventListener("click", copiar = () => {
    var textocopiado=document.querySelector('#textoTransformado').textContent;
    navigator.clipboard.writeText(textocopiado);
    document.querySelector('.input-padron').focus();
});
