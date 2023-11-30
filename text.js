//rastgele sayı üretme fonksiyonu
//https://www.yazilimbilisim.net/javascript/javascript-rastgele-sayi-uretme/
Math.rastgele=function(alt, ust){
    let sayi=Math.random(); 
    sayi=sayi*(ust-alt);
    sayi=Math.floor(sayi)+alt;
     
    return sayi; 
    }