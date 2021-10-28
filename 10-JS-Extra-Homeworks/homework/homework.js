// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arrobj=[];
  for (let clave in objeto){
    var arrtemp=[];
    arrtemp.push(clave,objeto[clave]);
    arrobj.push(arrtemp);
    }
    return arrobj;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var i=0;
  var j=0;
  var c=0;
  var str={};
  for (i=0;i<string.length;i++){
    c=1;
    j=0;
    if(str[string.charAt(i)]===undefined) {
      str[string.charAt(i)]=c;
      for (j=i+1;j<string.length;j++){
        if (string.charAt(i)===string.charAt(j)){
          c=c+1;
          str[string.charAt(i)]=c;
        }
      }
    }
  }
  return str;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var i=0;
  var strM="";
  var strMin="";
  for (i=0;i<s.length;i++){
    if (s.charAt(i)===s.charAt(i).toUpperCase()){
          strM= strM+s.charAt(i);
    }else{
      strMin= strMin+s.charAt(i);
    }
  }
  return strM+strMin;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var s="";
  var tmp ="";

  for (i=0;i<str.length;i++){
    if(str[i]==" "){
      tmp=tmp+s+str[i];
      s="";
    }else{
    s=str[i]+s;
    }
  }

  return tmp+s;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var s="";
  var tmp ="";
  var num="";
  num = numero.toString();
  for (i=0;i<num.length;i++){
    s=num[i]+s;
  }

  if (num==s){
    return "Es capicua";
  }else{
    return "No es capicua";
  }


}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  cadena = cadena.replace("a","");
  cadena = cadena.replace("b","");
  cadena = cadena.replace("c","");
  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a, b){
    return a.length - b.length;
  });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var iguales=[];
  for(var i=0;i<arreglo1.length;i++)
  {
    for(var j=0;j<arreglo2.length;j++)
    {
      console.log(arreglo1[i]+" "+arreglo2[j]);
      if(arreglo1[i]===arreglo2[j])
        iguales.push(arreglo1[i]);
    }
  }
  
    return iguales;
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

