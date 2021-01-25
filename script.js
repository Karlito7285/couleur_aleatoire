


function changeBG(){
    const col1 = getRandomRGB();
    const col2 = getRandomRGB();
    const col3 = getRandomRGB();
    
    // 3 COULEURS (R) (G) ET (B)
    const colorString = `rgb(${col1}, ${col2}, ${col3})`
    // INTEGRATION SUR LE BODY
    document.body.style.background = colorString;
    // nom de la (RGB) apparait à l'écran
    document.getElementById("color").innerHTML = colorString
}
//Couleur aléatoire==============================
function getRandomRGB(){ 
    
    return Math.floor(Math.random() *256)
}

//APPEL DE LA FONCTION (setInterval relance la fonction toute les 2000ms)
setInterval(changeBG, 2000);