function readText (input){
let index = 0
let word = input[index]
while (word !== "Stop"){
    console.log (word);
    index ++ 
    word = input[index]
    
}
    console.log();
}
readText(["Nakov","Gosho", "Dragan","Petkan", "Stop", "Tzarev"])