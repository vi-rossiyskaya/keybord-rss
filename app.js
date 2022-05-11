const body = document.querySelector('body');
const main = document.createElement('main');
const container = document.createElement('div');
const message = document.createElement('div');
const textarea = document.createElement('textarea');

let en = [
    {
        "key": "`",
        "code": "IntlBackslash"
    },
    {
        "key": "1",
        "code": "Digit1"
    },
    {
        "key": "2",
        "code": "Digit2"
    },
    {
        "key": "3",
        "code": "Digit3"
    },
    {
        "key": "4",
        "code": "Digit4"
    },
    {
        "key": "5",
        "code": "Digit5"
    },
    {
        "key": "6",
        "code": "Digit6"
    },
    {
        "key": "7",
        "code": "Digit7"
    },
    {
        "key": "8",
        "code": "Digit8"
    },
    {
        "key": "9",
        "code": "Digit9"
    },
    {
        "key": "0",
        "code": "Digit0"
    },
    {
        "key": "-",
        "code": "Minus"
    },
    {
        "key": "=",
        "code": "Equal"
    },
    {
        "key": "Backspace",
        "code": "Backspace"
    },
    {
        "key": "Tab",
        "code": "Tab"
    },
    {
        "key": "q",
        "code": "KeyQ"
    },
    {
        "key": "w",
        "code": "KeyW"
    },
    {
        "key": "e",
        "code": "KeyE"
    },
    {
        "key": "r",
        "code": "KeyR"
    },
    {
        "key": "t",
        "code": "KeyT"
    },
    {
        "key": "y",
        "code": "KeyY"
    },
    {
        "key": "u",
        "code": "KeyU"
    },
    {
        "key": "i",
        "code": "KeyI"
    },
    {
        "key": "o",
        "code": "KeyO"
    },
    {
        "key": "p",
        "code": "KeyP"
    },
    {
        "key": "[",
        "code": "BracketLeft"
    },
    {
        "key": "]",
        "code": "BracketRight"
    },
    {
        "key": "\\",
        "code": "Backslash"
    },
    {
        "key": "CapsLock",
        "code": "CapsLock"
    },
    {
        "key": "a",
        "code": "KeyA"
    },
    {
        "key": "s",
        "code": "KeyS"
    },
    {
        "key": "d",
        "code": "KeyD"
    },
    {
        "key": "f",
        "code": "KeyF"
    },
    {
        "key": "g",
        "code": "KeyG"
    },
    {
        "key": "h",
        "code": "KeyH"
    },
    {
        "key": "j",
        "code": "KeyJ"
    },
    {
        "key": "k",
        "code": "KeyK"
    },
    {
        "key": "l",
        "code": "KeyL"
    },
    {
        "key": ";",
        "code": "Semicolon"
    },
    {
        "key": "'",
        "code": "Quote"
    },
    {
        "key": "Enter",
        "code": "Enter"
    },
    {
        "key": "Shift",
        "code": "ShiftLeft"
    },
    {
        "key": "z",
        "code": "KeyZ"
    },
    {
        "key": "x",
        "code": "KeyX"
    },
    {
        "key": "c",
        "code": "KeyC"
    },
    {
        "key": "v",
        "code": "KeyV"
    },
    {
        "key": "b",
        "code": "KeyB"
    },
    {
        "key": "n",
        "code": "KeyN"
    },
    {
        "key": "m",
        "code": "KeyM"
    },
    {
        "key": ",",
        "code": "Comma"
    },
    {
        "key": ".",
        "code": "Period"
    },
    {
        "key": "/",
        "code": "Slash"
    },
    {
        "key": "Shift",
        "code": "ShiftRight"
    },
    {
        "key": "Function",
        "code": "Function"
    },
    {
        "key": "Control",
        "code": "ControlLeft"
    },
    {
        "key": "Alt",
        "code": "AltLeft"
    },
    {
        "key": "Meta",
        "code": "MetaLeft"
    },
    {
        "key": " ",
        "code": "Space"
    },
    {
        "key": "Meta",
        "code": "MetaRight"
    },
    {
        "key": "Alt",
        "code": "AltRight"
    },
    {
        "key": "ArrowLeft",
        "code": "ArrowLeft"
    },
    {
        "key": "ArrowWrap",
        "code": ""
    },
    {
        "key": "ArrowUp",
        "code": "ArrowUp"
    },
    {
        "key": "ArrowDown",
        "code": "ArrowDown"
    },
    {
        "key": "ArrowRight",
        "code": "ArrowRight"
    }
]

for (let i = 0; i < 65; i++) {
    let btn = document.createElement('div');
    btn.append(`${en[i].key}`);
    btn.classList.add('btn')
    if (en[i].key.length > 2 ) {btn.classList.add('justify-left')}
    btn.dataset.code = `${en[i].code}`;
    btn.dataset.key = `${en[i].key}`;
    container.append(btn);
}


container.addEventListener('mousedown', (e) => {
    pressBtn(e)
})



function pressBtn(e) {
    if (e.target.classList.contains('btn')) {
        e.target.classList.toggle('pressed')
        const key = e.target.getAttribute('data-key');
        if (key.length < 2) {
            textarea.innerHTML += `${key}`
        }
    }
}

container.addEventListener('mouseup', (e) => {
    console.log(e)
    if (e.target.classList.contains('btn')) {
        e.target.classList.toggle('pressed')
    }
})

document.onkeydown = function (event) {
    console.log(event)
    if (event.key.length < 2 && event.key != '\\' && event.key != "'") {
        textarea.innerHTML += `${event.key}`;
        const keyBtn = document.querySelector(`.btn[data-key='${event.key}']`)
        keyBtn.classList.add('pressed');
    } else {
        const keyBtn = document.querySelector(`.btn[data-code='${event.code}']`)
        keyBtn.classList.add('pressed');
        keyBtn.onkeyup = () => keyBtn.classList.remove('pressed')
    }
}

function keyup(event) {
    document.onkeyup = function (event) {
        if (event.key.length < 2 && event.key != '\\' && event.key != "'") {
            textarea.innerHTML += `${event.key}`;
            const keyBtn = document.querySelector(`.btn[data-key='${event.key}']`)
            keyBtn.classList.remove('pressed')
        } else {
            const keyBtn = document.querySelector(`.btn[data-code='${event.code}']`)
            keyBtn.classList.remove('pressed')
        }
    }
}

document.onkeyup = function (event) {
    if (event.key.length < 2 && event.key != '\\' && event.key != "'") {
        textarea.innerHTML += `${event.key}`;
        const keyBtn = document.querySelector(`.btn[data-key='${event.key}']`)
        keyBtn.classList.remove('pressed')
    } else {
        const keyBtn = document.querySelector(`.btn[data-code='${event.code}']`)
        keyBtn.classList.remove('pressed')
    }
}

message.append('MacOS keyboard. Switch language: cmd (ctrl) + space. Delete: fn + backspase')


container.classList.add('container')
message.classList.add('message')
textarea.classList.add('textarea')

main.append(textarea)
main.append(container);
main.append(message);
body.append(main);

const cmd = document.querySelectorAll(`.btn[data-key='Meta']`);
cmd.forEach(e => {e.innerHTML = 'Cmd'})

const ctrl = document.querySelector(`.btn[data-key='Control']`);
ctrl.innerHTML = 'Ctrl'
const fn = document.querySelector(`.btn[data-key='Function']`);
fn.innerHTML = 'Fn'
const arrLeft = document.querySelector(`.btn[data-key='ArrowLeft']`);
arrLeft.innerHTML = '&#9668;'
const btnWrap = document.querySelector(`.btn[data-key='ArrowWrap']`);
btnWrap.classList.add('btn')
btnWrap.innerHTML = ""
const arrUp = document.querySelector(`.btn[data-key='ArrowUp']`);

arrUp.innerHTML = '&#9650;'
const arrDown = document.querySelector(`.btn[data-key='ArrowDown']`);
arrDown.innerHTML = '&#9660;'
btnWrap.append(arrUp)
btnWrap.append(arrDown)
const arrRight = document.querySelector(`.btn[data-key='ArrowRight']`);
arrRight.innerHTML = '&#9658;'