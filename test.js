
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
 
//oyun başladığında yada soru tahmin edildiğinde yeni soru sormak için kullanılır.
function yeniSoru(){
let islem=["+","-","*","/"];
opt.textContent=islem[Math.rastgele(0,4)]; //operatör seçimi
 
sayi1.textContent=Math.rastgele(0,50); 
sayi2.textContent=Math.rastgele(0,50);
if(opt.textContent=="/"){
//kalansız bölüm için eklenmiştir.
while(true){
sayi2.textContent=Math.rastgele(0,50);
if(sayi1.textContent%sayi2.textContent==0)
{break;}
}
}
 
}