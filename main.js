function play_sound(idSound) {
    const sound = document.querySelector(idSound);

    if (sound && sound.localName === 'audio') {
        sound.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');
const keys_list = document.querySelectorAll('.tecla');
for(let i = 0; i< keys_list.length; i++) {

    const keybord_key = keys_list[i];
    const instrument = keybord_key.classList[1]
    const idSound = `#som_${instrument}`
    keybord_key.onclick = function () {
        play_sound(idSound);
    }
    keybord_key.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            keybord_key.classList.add('ativa'); // css event
        }
    }   
    keybord_key.onkeyup = function () {
        keybord_key.classList.remove('ativa');
    }
   

}

