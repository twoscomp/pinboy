$(document).ready(function() {
    console.log("score.js loaded.");

    $('.shot').bind('input', function(event) {
        console.log($(this).attr('id') + " new data: " + $(this).val());
        //calculateFrame(event.target);
        calculateScore(event.target);
    });
});

function calculateFrame(el) {
    console.log("Calculate frame called.");
    var frame = $(el).closest('.frame');
    var firstShot = parseInt($(frame).find('.shot:first').val());
    var secondShot = parseInt($(frame).find('.shot:last').val());
    var frameTotal = firstShot + secondShot;

    $(frame).find('.score').text(frameTotal);
}

function calculateScore(frameEl) {
    var game = $(frameEl).closest('.game');
    var total = 0;
    var frames = $(game).find('.frame');
    for (var i = 0; i < frames.length; i++) {
        var firstShot = parseInt($(frames[i]).find('.shot:first').val());
        var secondShot = parseInt($(frames[i]).find('.shot:last').val());
        var frameScore = firstShot + secondShot;
        total += frameScore;
        $(frames[i]).find('.score').text(total);
    }
}
