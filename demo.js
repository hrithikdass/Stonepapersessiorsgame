let userscore=0;
let compscore=0;
const userscore_span= document.getElementById("userscore");
const compscore_span= document.getElementById("compscore");
const scoreboard_div= document.querySelector(".scoreboard");
const result_p= document.querySelector(".result > p");
const rock_div=document.getElementById("cr");
const paper_div=document.getElementById("cp");
const sesiors_div=document.getElementById("cs");

function getcomputerchoice()
{

  const choices=['cr','cp','cs'];
  const randomnumber = Math.floor(Math.random() * 3);
  return choices[randomnumber];
}

function convert(letter)
{
   if(letter==="cr") return "rock";

 if (letter==="cp") return "paper";

   return "sessiors";
}

function win(userchoice, computerchoice){
   userscore++;
   userscore_span.innerHTML=userscore;
   compscore_span.innerHTML=compscore;
   result_p.innerHTML= convert(userchoice)+ " beats " +convert(computerchoice)+ " You WIN! ";
   
}

function lose(userchoice, computerchoice){
   compscore++;
   compscore_span.innerHTML=compscore;
   userscore_span.innerHTML=userscore;
   result_p.innerHTML= "Comp choice " + convert(computerchoice)+" \nUser choice "+ convert(userchoice) + " You LOSE!" ;
   

}

function draw(userchoice, computerchoice)
{
    result_p.innerHTML=" Its a DRAW! ";

}

function game(userchoice)
{
  const computerchoice= getcomputerchoice();
  switch(userchoice + computerchoice)
  {
    case "crcs":
    case "cpcr":
    case "cscp":
        win(userchoice,computerchoice);
        break;

    case "crcp":
    case "cpcs":
    case "cscr":
      lose(userchoice,computerchoice);
       break;

    case "crcr":
    case "cpcp":
    case "cscs":
      draw(userchoice,computerchoice);
       break;          
            
  }
}



function main()
{
   rock_div=addEventListener('click', function() {
   game("cr"); 
})

paper_div=addEventListener('click', function() 
 {
    game("cp"); 
 })

sesiors_div=addEventListener('click', function()
 {
    game("cs"); 
 })

}

main();
