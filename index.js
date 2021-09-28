var readlineSync=require('readline-sync')

var username=readlineSync.question("What is your name?")
console.log("welcome " + username)
console.log("lets check how well you know Jayakrishnan")

var score=0

function play(question,answer){
  var userAnswer=readlineSync.question(question)
  if (userAnswer===answer){
    console.log("correct")
    score=score+1
  }else{
    console.log("incorrect")
    
  }
  console.log("current score is " + score)
  console.log("---------------------")
}
 var questions=[
   {
     question:"what is my favourite color",
     answer:"blue",
   },
   {
     question:"what is my favourite hobby",
     answer:"dancing",
   },
   {
     question:"where do i live",
     answer:"thiruvalla",
   }
 ]
 for(i=0;i<questions.length;i=i+1){
   var thisquestion=questions[i]
   play(thisquestion.question,thisquestion.answer)
 }

 console.log("your score is " + score)
