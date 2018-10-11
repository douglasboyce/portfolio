$(document).ready(function () {

    correct: 0;
    incorrect: 0;
    unanswered: 0;
    timer: 0;
    timerId: '';

    // var questions = ['Which 70s TV family had eight kids?', 'Which TV undercover cop had a cockatoo named Fred?', 'Before playing Jack Tripper on Three\'s Company,\' John Ritter played a preacher on this feel-good 70s family drama.', 'Which of the following is *not* a spin-off of \'All in the Family\'?', 'Which is ""not" an actor on \'The Mary Tyler Moore Show\'?'];
    // var choices = ['The Bradford Family,The Partridge family,The Bundy family,The Brady family', 'Police Woman, Barnaby Jones, Baretta, Rockford', 'Eight is Enough, The Waltons, Family, Room 222', 'One Day at a time, The Jeffersons, Maude, Gloria', 'John Amos, Ted Knight, Ted Baxter, Betty White'];
    // var answers = ['The Bradford Family', 'Baretta', 'The Waltons', 'One Day at a time', 'Ted Baxter',];


    var game = {
        questions: {
            q1: 'Question 1',
            option1: "A, B, C",
            q2: 'Question 2',
            option2: "A, B, C",
            q3: 'Question 2',
            option3: "A, B, C",
        },

        startGame: function () {
            for (var i = 0; i < 3; i++) {
                console.log(i+1);
                $('#question-content').append(game.questions.q1 + '<br>')
            }
        }
    }





    game.startGame();

});
