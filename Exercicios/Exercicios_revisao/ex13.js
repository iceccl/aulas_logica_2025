function Boletim(n1,n2,n3,n4) {
let media = (n1+n2+n3+n4) / 4
if (media >= 7) {
    console.log('Passou de ano.');
   }
   else if( media < 7 && media >5){
    console.log('Em recuperação');
   } else{
    console.log('Reprovado!');
   }
}
Boletim(10,3,7,6)
Boletim(10,8,4,9)