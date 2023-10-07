
const quizForm = document.getElementById("quizForm");
const successMessage = document.getElementById("successMessage");

quizForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get values from the form fields
    const newQuestion = document.getElementById("newQuestion").value;
    const newOptionA = document.getElementById("newOptionA").value;
    const newOptionB = document.getElementById("newOptionB").value;
    const newOptionC = document.getElementById("newOptionC").value;
    const newOptionD = document.getElementById("newOptionD").value;
    const newCorrectAnswer = document.getElementById("newCorrectAnswer").value;

    // Create a new quiz object
    const newQuiz = {
        question: newQuestion,
        a: newOptionA,
        b: newOptionB,
        c: newOptionC,
        d: newOptionD,
        correct: newCorrectAnswer
    };

  
    quizData.push(newQuiz);

   
    quizForm.reset();

    
    successMessage.textContent = "Quiz added successfully!";

 
    const addAnother = confirm("Do you want to add another quiz question?");
    
    if (!addAnother) {
       
        window.location.href = "index.html"; 
    }
});
