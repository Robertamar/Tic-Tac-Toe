let boxes=document.querySelectorAll(".box");
let newGame=document.querySelector(".newBtn");
let resetBtn=document.querySelector(".resetGame");
let winnerText=document.querySelector(".winnerText");
let winnerBox=document.querySelector(".winnerBox")
let is0=true;



// const startNew = ()=>{
//    turn0=true;
//    for(let box of boxes){
//       box.innerText=" ";
//       box.disabled=false;
//    }
//    winnerBox.classList.add("hide");
// }
// newGame.addEventListener("click",startNew);


const resetGame = ()=>{
   turn0=true;
   enableButton();
   winnerBox.classList.add("hide");
};

resetBtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);


for(let box of boxes){
    box.addEventListener("click",()=>{
         if(is0){
            box.innerHTML="O"
            is0=false;
         }
         else{
            box.innerHTML="X"
            is0=true;
         }
         box.disabled=true;
         checkWing();  
    })
    
}
let winningBoxes=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8]
];

const disableButton =()=>{
   for(let box of boxes){
      box.disabled=true;
   }
}

const enableButton = ()=>{
   for(let box of boxes){
      box.disabled=false;
      box.innerText="";
   }   
}

const displayWinner = (pos1)=>{
   winnerText.innerText=`Congratulations Winner is : ${pos1}`;
   winnerBox.classList.remove("hide");
   disableButton();
}

const checkWing=()=>{
   for(let box of winningBoxes){
      // console.log(box[0],box[1],box[2]);
      // console.log(boxes[box[0]],boxes[box[1]],boxes[box[2]]);
      let pos1=boxes[box[0]].innerText;
      let pos2=boxes[box[1]].innerText;
      let pos3=boxes[box[2]].innerText;
      if(pos1 != "" && pos2 !="" && pos3 !=""){
         if(pos1 == pos2 && pos2 == pos3){
            console.log("winner",pos1);
            
            displayWinner(pos1);
         }
      }
   }
}