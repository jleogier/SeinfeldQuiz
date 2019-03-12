$(function() {


/*************** Displays Quiz *****************/

    function quizDisplay (questionNum){

        let questionIndex = questionNum - 1;
        let qnASet = quizApp[questionIndex];


    /****** Displays 4 Answers for the question ****/

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

        /******** Displays the Quiz question, progression, and score  ******/           
            return `
            <section class="Quiz">        
                <h3 id='questionDisplay'>${qnASet.question}</h3>        
                    <h4 id="trackerDisp">Quiz completion:<br>${questionNum} / 5</h4>
                        <form>
                            <fieldset>
                                ${answersDisplay()}
                            </fieldset>
                            <h4 id="scoreDisplay">Your Score:<br> ${score} / 5</h4>
                            <button id="submitButton" type="submit">Giddy Up!</button>
                        </form>               
            </section>
            `;
        };


/******* Submit Button ******/

    $('section.Quiz').on('submit', 'form', function (e) {
        e.preventDefault();

        // Find input from user for radio button 

        let userAns = $('input[name="option"]:checked').siblings("span").text()

        console.log('This is suppose to be the user input captured: ' + userAns);

        console.log('This is the correct answer: '+ quizApp.correctAns);


        evalQnA(userAns);

    });

 // Evaluates user answer against correct answer -- How to make it Dynamic?
    
    function evalQnA (userAns){

        let correctMessage = '';
        let wrongMessage = '';    
        
        

        if (userAns === quizApp.correctAns){

            console.log('The user selected the Correct Answer.');

            score++;

            let correctMessage = `
                                <section class="Quiz">
                                    <iframe id="rightAnsGif" src="https://giphy.com/embed/Xhxd8T0og4oKs" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/seinfeld-Xhxd8T0og4oKs">via GIPHY</a></p>
                                </section> 
                                <button id="nextQ">Next Question</button>                       
                                `
            return $('.Quiz').html(correctMessage);

            }     else {

            let wrongMessage = `
                                <section class="Quiz">
                                    <div id="wrongAnsGif" class="tenor-gif-embed" data-postid="8852814" data-share-method="host" data-width="100%" data-aspect-ratio="1.41"><a href="https://tenor.com/view/babu-seinfeld-finger-wag-gif-8852814">Babu Seinfeld GIF</a> from <a href="https://tenor.com/search/babu-gifs">Babu GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                                </section> 
                                <button id="nextQ">Next Question</button>                       
                                `

            return $('.Quiz').html(wrongMessage);
        }            
    }

/****** Goes to the Next Question *******/    

    $('body').on('click','#nextQ',function(e){
        questionNum++; 
        console.log('Next Button gets clicked');

        e.preventDefault();
        function nextQuestion (){            

            console.log('This is the question number: ' + questionNum);
            return $('.Quiz').html(quizDisplay(questionNum));
            
        };
        nextQuestion();
    });



/***** Starts Quiz *****/

    $('#startButton').on('click', function (e) {
            function startQuiz (){
                let questionNum = 1;
                return $('.Quiz').html(quizDisplay(questionNum));
            };
        startQuiz();
    });

    

});