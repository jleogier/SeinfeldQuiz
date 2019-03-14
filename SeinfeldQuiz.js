let questionIndex;
let qnASet;

$(function() {

/*************** Displays Quiz *****************/

    function quizDisplay (questionNum, score){

        questionIndex = questionNum - 1;
        qnASet = quizApp[questionIndex];

            // Displays the 4 possible Answers to the question 

            function answersDisplay (){
                let output = '';

                    for (i = 0; i < qnASet.ansChoice.length; i++) {
                        let choice = qnASet.ansChoice[i];
                        
                        output += 
                                    `<label>
                                        <input class="answer" type="radio" name="option"></input>
                                        <span>${choice}</span>
                                    </label>`                        
                    }
                return output;
            };

        // Displays the Quiz question, progression, and score
            return `
                    <section class="Quiz">        
                        <h3 id='questionDisplay'>${qnASet.question}</h3>        
                            <h4 id="trackerDisp">Quiz question tracker: ${questionNum} / 5</h4>
                                <form>
                                    <fieldset>
                                        ${answersDisplay()}
                                    </fieldset>
                                    <h4 id="scoreDisplay">Your Score: ${score} / 5</h4>
                                    <button id="submitButton" type="submit">Giddy Up!</button>
                                </form>               
                    </section>
                    `;
        }; 

/******* Submit Button ******/

    $('section.Quiz').on('submit', 'form', function (e) {
        e.preventDefault();

        // Gets user input from radio button 

        let userAns = $('input[name="option"]:checked').siblings("span").text();

        console.log('This is the user input captured: ' + userAns);
        console.log('This is the correct answer: '+ quizApp[questionIndex].correctAns());

        evalQnA(userAns);
    });

 /********  Evaluates user answer against correct answer *******/
    
    function evalQnA (userAns){

        let correctMessage = '';
        let wrongMessage = '';    


        if (userAns === quizApp[questionIndex].correctAns()){
            console.log('The user selected the CORRECT Answer.');
            score++;            

            let correctMessage = `
                                <section class="Quiz">
                                    <h4 id="scoreDisplay">Your Score: ${score} / 5</h4>
                                    <iframe id="rightAnsGif" src="https://giphy.com/embed/Xhxd8T0og4oKs" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                                </section> 
                                <button id="nextQ">Next</button>                       
                                `

            let output = [$('.Quiz').html(correctMessage), score, console.log('The score is: ' + score)];

            return output;

            }     else {

                console.log('The user selected the WRONG answer.');
                
                let wrongMessage = `
                                    <section class="Quiz">
                                        <h4 id="scoreDisplay">Your Score: ${score} / 5</h4>
                                        <iframe id="wrongAnsGif" src="https://giphy.com/embed/W86SkcDSRlnwY" width="244" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                                    </section> 
                                    <button id="nextQ">Next</button>                       
                                    `

                let output = [$('.Quiz').html(wrongMessage), score, console.log('The score is: ' + score)];

            return output;
        }            
    }

/****** Goes to the Next Question *******/    

    $('body').on('click','#nextQ',function(e){

        console.log('Next Button got clicked');
        e.preventDefault();

        questionNum++;         
        score;    

        function nextQuestion (score){      
            score;
            if (questionNum === 6){
                return winLoseDisplay(score);
            } else {
                    console.log('This is the question number: ' + questionNum);
                    let output = [$('.Quiz').html(quizDisplay(questionNum, score)), console.log('The score inside the Next Button Function is: '+ score)];
                return  ;                                    
            }
        };
        nextQuestion(score);       
    });

/******** Displays Quiz Winning/Losing Message  */

    function winLoseDisplay (score) {

        let beatQuizMessage = '';
        let lostQuizMessage = '';

        if (score >= 4) {
            
            let beatQuizMessage =                                         
                                `<section class="Quiz">
                                        <h4 id="scoreDisplay">Your Score: ${score} / 5</h4>
                                        <h1 id="beatQuiz">Congratulations! You know your Seinfeld!</h1>
                                            <a id="beatQuizGif" href="http://reactiongifs.com/?p=13217"><img src="http://www.reactiongifs.com/r/2013/07/happy-dance-.gif"></a>
                                        <button id="restartButton">Restart the Quiz!</button>                       
                                </section>                                
                                `

                return $('.Quiz').html(beatQuizMessage);

        } else {

            let lostQuizMessage = 
                                ` <section class="Quiz">
                                    <h4 id="scoreDisplay">Your Score: ${score} / 5</h4>
                                    <h1 id="beatQuiz">You didn't pass. Try again!</h1>
                                        <iframe id="lostQuizGif" src="https://giphy.com/embed/PEtL0mS2JXMBi" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                                    <button id="restartButton">Restart the Quiz!</button>                       
                                </section>
                                `
                return $('.Quiz').html(lostQuizMessage);
        }
    };

/*** Restarts the Quiz *****/

    $('body').on('click', '#restartButton', function (e) {
        // Resets global variables
        questionNum = 1;
        score = 0;

            console.log('The restart button was clicked, so the question number should be 1, and score 0' + '\n' + 'Question number is: ' + questionNum + '\n' + 'Score is: ' + score);
        return startQuiz ();    
    });


/***** Starts Quiz *****/

    function startQuiz (){
        console.log('Quiz got started');          
    return $('.Quiz').html(quizDisplay(1,0));
    };

    // Button to start quiz
    $('body').on('click', '#startButton', function (e) {
        console.log('Start Button got clicked');
        startQuiz();
    });
});