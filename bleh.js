const getRandomNum = () => Math.floor(Math.random() * 10) + 1;
let sheldon=0, leonard=0;
for(let i=0; i<10; i++){
if(getRandomNum()>5) {
    console.log("Sheldon");
    sheldon+=1;
}
else{ 
    console.log("Leonard");
    leonard+=1;
}
}
console.log("Sheldon:", sheldon, "Leonard:", leonard);
if(sheldon>leonard) console.log("Sheldon wins!");
else console.log("Leonard wins!")