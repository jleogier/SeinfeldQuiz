let questionNum = 1;
let score = 0;

const quizApp = [
                {question: "What is The Jerk Store running out of?",            
                ansChoice : [ 
                    "Shrimp",
                    "You!",
                    "Oh Yeah?! Well - I had sex with your wife!",
                    "Jerks"],
                    correctAns: function () {return this.ansChoice[1]},
                },

                {question: "What makes me thirsty?",
                ansChoice : [
                    "Thoughts",
                    "Preztels",
                    "Muffin Tops",
                    "Bagels"],
                correctAns: function () {return this.ansChoice[1]},
                },   

                {question: "Who’s parents were in a red chinese prison and has Uromysotisis?",
                ansChoice : [
                    "Jerrys",
                    "Elaine",
                    "Kramer",
                    "George"],
                correctAns: function () {return this.ansChoice[0]},
                },

                {question: "What does Jerry always have to remember to say to his Uncle Leo?",
                ansChoice : [
                    "Hellooooo!!",
                    "Goodbye",
                    "How are you?",
                    "Mention his cousin Jeffrey"],
                correctAns: function () {return this.ansChoice[0]},
                },

                {question: "Who is a “very bad man?",
                ansChoice : [
                    "David Puddy",
                    "Elaine",
                    "Kruger",
                    "Jerry"],
                correctAns: function () {return this.ansChoice[3]},
                }
]