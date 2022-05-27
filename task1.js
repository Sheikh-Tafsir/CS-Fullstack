console.log("hello world");

var number=5; //in line comment

/*
this is multi line comment
*/

/*var myName="beau";
console.log(myName);
myName=8;
console.log(myName);

let ourName="freeCode";
console.log(ourName);
ourName=8;
console.log(ourName);

/*const ourName="freeCode";
console.log(ourName);
ourName=8;
console.log(ourName);*/

/*var a;
console.log(a);
a=7;
console.log(a);

var str="tafsir";
console.log(str);
str+=" rahman";
console.log(str);

var A=5;
console.log(A);
var a=6;
console.log(a);

var myVar=87;
console.log(myVar);
myVar++;
console.log(myVar);

var ourDecimal =5.7;
console.log(ourDecimal);
ourDecimal*=2.5;
console.log(ourDecimal);

var myStr= "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
var myStr= 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);
myStr[2]+="h";
console.log(myStr);
console.log(myStr.length);*/

/*function wordBlanks(myNoun, myAdjective, myVerb,myAdverb){
  var result="";
  result+="The " + myAdjective + " " + myNoun + " " + myVerb + " to the store";
  return result;
}
console.log(wordBlanks("dog","big","ran","quickly"));*/

/*var ourArray=["tafsir",21];
for(i=0;i<ourArray.length;i++){
  console.log(ourArray[i]);
}*/

var ourArray=[["tafsir",21],["the universe",42] ];
ourArray.push(["sakib",28]);
for(i=0;i<ourArray.length;i++){
  console.log(ourArray[i]);
}
//ourArray.pop();
ourArray.shift();
console.log(ourArray)
