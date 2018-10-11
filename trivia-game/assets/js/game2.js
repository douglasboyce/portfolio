$(document).ready(function () {

    correct: 0;
    incorrect: 0;
    unanswered: 0;
    timer: 0;
    timerId: '';
    var val;

    $('.option').on('click', evalChoice());

    var questions = ['Which 70s TV family had eight kids?', 'Which TV undercover cop had a cockatoo named Fred?', 'Before playing Jack Tripper on Three\'s Company,\' John Ritter played a preacher on this feel-good 70s family drama.', 'Which of the following is *not* a spin-off of \'All in the Family\'?', 'Which is ""not" an actor on \'The Mary Tyler Moore Show\'?'];
    var choices = ['The Bradford Family,The Partridge family,The Bundy family,The Brady family', 'Police Woman, Barnaby Jones, Baretta, Rockford', 'Eight is Enough, The Waltons, Family, Room 222', 'One Day at a time, The Jeffersons, Maude, Gloria', 'John Amos, Ted Knight, Ted Baxter, Betty White'];
    var answers = ['The Bradford Family', 'Baretta', 'The Waltons', 'One Day at a time', 'Ted Baxter',];

    function startGame() {
        var timer = 30000;
        for (var i = 0; i < questions.length; i++) {
            $('#question-content').append(questions[i] + '<br>')
            $('#options').addClass('radio-inline');
            $('#options').append('<form">');
            $.each(choices, function (index, value) {
                val = value.split(",");

                // $('#options').append('<input type="radio" name=' + val);
                // $('#options').append('<label for=' + val + ">" + val + '</label>')
            })

            console.log(val);

        }

        $.each(answers, function (index, value) {
            console.log(index + ' ' + value);

        })



    }

    function evalChoice() {
        // alert("Hey");
    }

    startGame();

});
