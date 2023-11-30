//cevapla butonuna basıldığında değerlendirme işlemi
cevapla.onclick=function(){
    let cevap,s1,s2;
    s1=Number(sayi1.textContent);
    s2=Number(sayi2.textContent);
    switch(opt.textContent){
    case '+':cevap=s1+s2;break;
    case "-":cevap=s1-s2;break;
    case "*":cevap=s1*s2;break;
    case "/":cevap=s1/s2;break;
    default:break; 
    }
     
    if(sonuc.value==cevap){
    dogru.textContent=Number(dogru.textContent)+1;
    }
    else{
    yanlis.textContent=Number(yanlis.textContent)+1;
    }
     
    yeniSoru(); 
    }