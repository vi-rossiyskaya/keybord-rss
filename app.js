const body = document.querySelector('body');
const main = document.createElement('main');
const container = document.createElement('div');

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

for (let i = 0; i < 63; i++) {
    let btn = document.createElement('div');
    btn.append(`${en[i].key}`);
    btn.classList.add('btn')
    btn.dataset.code = `${en[i].code}`;
    container.append(btn);
    // console.log(btn)
}




document.onkeyup = function (event) {
    let a = {}
    a.key = event.key;
    a.code = event.code;
    console.log(a)

}


console.log(en)


container.classList.add('container')

main.append(container);
body.append(main);