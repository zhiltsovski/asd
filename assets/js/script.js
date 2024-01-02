$('.input-mail').click(function() {// при клике по кнопке
    if( !$('#input-mail').val()) { //проверяем на заполнение инпут
    $('#input-mail').css('border-bottom','2px solid #e0211b');// подсвечиваем его красным, если пустой    
    $('.input-mail-p').css('display','block'); // отображаем ворнинг
    }
    });
    $('#input-mail').keyup(function() { // при наборе текста
    $('#input-mail').css('border-bottom','1px solid #7f7f7f'); // снимаем подсветку    
    $('.input-mail-p').css('display','none'); // скрываем ворнинг
});

$('.input-pass').click(function() {// при клике по кнопке
    if( !$('#input-pass').val()) { //проверяем на заполнение инпут
    $('#input-pass').css('border-bottom','2px solid #e0211b');// подсвечиваем его красным, если пустой    
    $('.input-pass-p').css('display','block'); // отображаем ворнинг
    }
    });
    $('#input-pass').keyup(function() { // при наборе текста
    $('#input-pass').css('border-bottom','1px solid #7f7f7f'); // снимаем подсветку    
    $('.input-pass-p').css('display','none'); // скрываем ворнинг
});

$('.input-pass').click(function() {// при клике по кнопке
    if( !$('#input-pass').val()) { //проверяем на заполнение инпут
    }
    });
    $('#input-pass').keyup(function() {
        $('.pokaz, a').css('color','#008673');
// подсвечиваем его красным, если пустой    
});

window.addEventListener("load", function() {

    // icono para mostrar contraseña
    showPassword = document.querySelector('.pokaz');
    showPassword.addEventListener('click', () => {

        // elementos input de tipo clave
        password1 = document.querySelector('.password');
        password2 = document.querySelector('.password2');

        if ( password1.type === "password" ) {
            password1.type = "text"
            document.getElementById("pok").textContent="UKRYJ";

        } else {
            password1.type = "password"
            document.getElementById("pok").textContent="POKAŻ";
            
        }
    })

});
