/* for (varcount = 0; count < array; count)
 var ul =  document.createElement("ul");
          document.createElement("li")
var title = Arr[count].Title;
var choices = Arr[count].choice;
for(var countB = 0; countB < choices.length ; countB++);


main.append(ul);
ul.append(li);  */

/* var main = document.querySelector("main");
var quizAnswers = 0; 
var renderQuestions = function () {
main.innerHTML = ""; */

 function buildQuiz(){}

function showResults(){}

buildQuiz();

submitButton.addEventListener("click", showResults); 
  
const myQuestions = [{
      question: "Which answer is it?",
      answers: {A: "Sky", B: "Blue", C: "Yellow"},
      correctAnswer: "C"}, 


  main.addEventListener("click", function(event) {
  var targetedClick = event.target; 



/* var question = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result'); 

function loadQuestion (questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
  opt1.textContent = q.option1; 
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;

};

function loadNextQuestion () {
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if(!selectOption){
    ('Please select your answer!');
    return;
  }
  var answer = selectedOption.value;
  if(questions[currentQuestion].answer === answer) {
    score += 10;
  }

  selectedOption.checked = false;
  currentQuestion++;

  if(currentQuestion == totQuestions - 1){
     nextButton.textContent = 'Finish';
  }
  if(currentQuestion == totQuestions - 1){
    container.style.display = 'none';
    resultCont.style.display = '';
    resultCont.textContent = 'Your Score: ' + score;
    return;
  }
   loadQuestion(currentQuestion);
}


*/













