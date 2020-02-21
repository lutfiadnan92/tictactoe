let x = 'x';
let o = 'o';
let count = 0;
let o_win = 0;
let x_win = 0;

function checkOWinner() {
    if ($('#one').hasClass('o') && $('#two').hasClass('o') && $('#three').hasClass('o') ||
        $('#four').hasClass('o') && $('#five').hasClass('o') && $('#six').hasClass('o') ||
        $('#seven').hasClass('o') && $('#eight').hasClass('o') && $('#nine').hasClass('o') ||
        $('#one').hasClass('o') && $('#four').hasClass('o') && $('#seven').hasClass('o') ||
        $('#two').hasClass('o') && $('#five').hasClass('o') && $('#eight').hasClass('o') ||
        $('#three').hasClass('o') && $('#six').hasClass('o') && $('#nine').hasClass('o') ||
        $('#one').hasClass('o') && $('#five').hasClass('o') && $('#nine').hasClass('o') ||
        $('#three').hasClass('o') && $('#five').hasClass('o') && $('#seven').hasClass('o'))
    {
        o_win++;
        setTimeout(() => {
            alert('O wins');
            $('#o_win').text(o_win);
            resetGame();
        }, 100);
    }
}

function checkXWinner() {
    if ($('#one').hasClass('x') && $('#two').hasClass('x') && $('#three').hasClass('x') ||
    $('#four').hasClass('x') && $('#five').hasClass('x') && $('#six').hasClass('x') ||
    $('#seven').hasClass('x') && $('#eight').hasClass('x') && $('#nine').hasClass('x') ||
    $('#one').hasClass('x') && $('#four').hasClass('x') && $('#seven').hasClass('x') ||
    $('#two').hasClass('x') && $('#five').hasClass('x') && $('#eight').hasClass('x') ||
    $('#three').hasClass('x') && $('#six').hasClass('x') && $('#nine').hasClass('x') ||
    $('#one').hasClass('x') && $('#five').hasClass('x') && $('#nine').hasClass('x') ||
    $('#three').hasClass('x') && $('#five').hasClass('x') && $('#seven').hasClass('x'))
    {
        x_win++;
        setTimeout(() => {
            alert('X wins');
            $('#x_win').text(x_win);
            resetGame();
        }, 100);
    }
}

//reset game if x/o win
function resetGame() {
    $('#game li').text('+');
    $('#game li').removeClass('disable o x btn-primary btn-info');
    count = 0;
}

//reset game from start
function hardReset() {
    $('#game li').text('+');
    $('#o_win').text(0);
    $('#x_win').text(0);
    $('#game li').removeClass('disable o x btn-primary btn-info');
    o_win = 0;
    x_win = 0;
    count = 0;
}

//check if draw
setInterval(() => {
    if (count === 9)
    {
        alert(`It's a tie. It will restart.`);
        resetGame();
    }
}, 1000);

$('#game li').click(function(){
    if ($(this).hasClass('disable'))
    {
        alert('Already selected');
    }
    else if (count % 2 === 0)
    {
        count++;
        $(this).text(o);
        $(this).addClass('o disable btn-primary');
        checkOWinner();
    }
    else  
    {
        count++;
        $(this).text(x);
        $(this).addClass('x disable btn-info');
        checkXWinner();
    }
});

$('#reset').click(function () {
    hardReset();
});