export default {
    "normal": {
        _meta: {
            "tab": { key: "\t", text: "Tab", width: 60, classes: "control" },
            "shiftl": { keySet: "shifted", text: "Shift", width: 100, classes: "control" },
            "shiftr": { keySet: "shifted", text: "Shift", width: 100, classes: "control" },
            "caps": { keySet: "capsed", text: "Caps lock", width: 80, classes: "control" },
            "space": { key: " ", text: "Espace", width: 180 },
            "enter": { key: "\r\n", text: "Entrée", width: 80, classes: "control" },
            "backspace": { func: "backspace", classes: "control backspace", width: 65 },
            "accept": { func: "accept", text: "Fermer", classes: "control featured" },
            "next": { func: "next", text: "Suivant", classes: "control featured" }
        },
        default: [
            "² 1 2 3 4 5 6 7 8 9 0 ° + {backspace}",
            "{tab} a z e r t y u i o p ^ $",
            "{caps} q s d f g h j k l m ù µ {enter}",
            "{shiftl} < w x c v b n , ; : ! {shiftr}",
            "{next} {space} {accept}"
        ],
        shifted: [
            "² & é \" ' ( - è _ ç à ) = {backspace}",
            "{tab} A Z E R T Y U I O P ¨ £",
            "{caps} Q S D F G H J K L M % µ {enter}",
            "{shiftl} > W X C V B N ? . / § {shiftr}",
            "{next} {space} {accept}"
        ],
        capsed: [
            "² 1 2 3 4 5 6 7 8 9 0 ° + {backspace}",
            "{tab} A Z E R T Y U I O P ^ $",
            "{caps} Q S D F G H J K L M ù µ {enter}",
            "{shiftl} < W X C V B N , ; : ! {shiftr}",
            "{next} {space} {accept}"
        ]
    },
    "compact": {
        _meta: {
            "default": { keySet: "default", text: "abc", classes: "control" },
            "alpha": { keySet: "default", text: "Abc", classes: "control" },
            "shift": { keySet: "shifted", text: "ABC", classes: "control" },
            "numbers": { keySet: "numbers", text: "123", classes: "control" },
            "space": { key: " ", text: "Espace", width: 200 },
            "backspace": { func: "backspace", classes: "control" },
            "accept": { func: "accept", text: "Fermer", classes: "control featured" },
            "next": { func: "next", text: "Suivant", classes: "featured" },
            "zero": { key: "0", width: 130 }
        },
        default: [
            "a z e r t y u i o p",
            " q s d f g h j k l ",
            "{shift} w x c v b n m {backspace}",
            "{numbers} , {space} . {next} {accept}"
        ],
        shifted: [
            "A Z E R T Y U I O P",
            " Q S D F G H J K L ",
            "{default} W X C V B N M ",
            "{numbers} _ {space} {backspace} {next} {accept}"
        ],
        numbers: [
            "1 2 3",
            "4 5 6",
            "7 8 9",
            "  {alpha} . {zero} {backspace} {next} {accept}"
        ]
    },
    "numeric": {
        _meta: {
            "backspace": { func: "backspace", classes: "control" },
            "accept": { func: "accept", text: "Fermer", classes: "control featured" },
            "next": { func: "next", text: "Suivant", classes: "control featured" },
            "zero": { key: "0", width: 130 }
        },
        default: [
            "1 2 3",
            "4 5 6",
            "7 8 9",
            "_ - . {zero} {backspace} {next} {accept}"
        ]
    }
};