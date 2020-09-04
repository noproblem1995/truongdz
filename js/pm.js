$(document).ready(function() {
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'Chào cậu, tớ đứng đây từ chiều :))',
        text: 'Tớ có chuyện này muốn hỏi cậu, cậu nhớ phải trả lời thật lòng nha!',
        imageWidth: 100,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}

 function switchButton() {
    var audio = new Audio('amthanh/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
function moveButton() {
    var audio = new Audio('amthanh/Swish1.mp3');
    audio.play();
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

$('#yes').click(function() {
    var audio = new Audio('amthanh/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'Vì sao cậu thích tớ <3',
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' placeholder='Whyyy'>",
        background: '#fff url("img/iput-bg.jpg")',
        showCancelButton: true,
        cancelButtonText: "Không, ngại lắm -.-",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Gửi cho tớ <3'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: 'Tới luôn nè :))',
                background: '#fff url("img/iput-bg.jpg")',
                title: 'Tớ cũng yêu cậu hihi ^.^',
                text: "inbox cho tớ nhé hehe :))))",
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = 'https://www.facebook.com/08.Rimuru';
                  }
            })
        }
    })
})
