export default {
    "normal": {

        _meta: {
            "tab": { key: "\t", text: "Tab", width: 60, classes: "control"},
            "shiftl": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
            "shiftr": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
            "caps": { keySet: "capsed", text: "Caps lock", width: 80, classes: "control"},
            "space": { key: " ", text: "Space", width: 180},
            "enter": { key: "\r\n", text: "Enter", width: 80, classes: "control"},
            "backspace": { func: "backspace", classes: "control backspace", width: 65},
            "accept": { func: "accept", text: "Close", classes: "control featured"},
            "next": { func: "next", text: "Next", classes: "control featured"}
        },

        default: [
            "` 1 2 3 4 5 6 7 8 9 0 ß ´ {backspace}",
            "{tab} q w e r t z u i o p ü +",
            "{caps} a s d f g h j k l ö ä {enter}",
            "{shiftl} y x c v b n m , . - {shiftr}",
            "{next} {space} {accept}"
        ],
        shifted: [
            "° ! \" § $ % & / ( ) = ? ` {backspace}",
            "{tab} Q W E R T Z U I O P Ü *",
            "{caps} A S D F G H J K L Ö Ä {enter}",
            "{shiftl} Y X C V B N M ; : _ {shiftr}",
            "{next} {space} {accept}"
        ],
        
        capsed: [
            "` 1 2 3 4 5 6 7 8 9 0 ß ´ {backspace}",
            "{tab} Q W E R T Z U I O P Ü +",
            "{caps} A S D F G H J K L Ö Ä {enter}",
            "{shiftl} Y X C V B N M , . - {shiftr}", 
            "{next} {space} {accept}"
        ]		
    },

    "compact": {

        _meta: {
            "default": { keySet: "default", text: "abc", classes: "control"},
            "alpha": { keySet: "default", text: "Abc", classes: "control"},
            "shift": { keySet: "shifted", text: "ABC", classes: "control"},
            "numbers": { keySet: "numbers", text: "123", classes: "control"},
            "space": { key: " ", text: "Space", width: 200},
            "backspace": { func: "backspace", classes: "control"},
            "accept": { func: "accept", text: "Close", classes: "control featured"},
            "next": { func: "next", text: "Next", classes: "featured"},
            "zero": { key: "0", width: 130}
        },

        default: [
            "q w e r t z u i o p",
            " a s d f g h j k l ",
            "{shift} y x c v b n m {backspace}",
            "{numbers} , {space} . {next} {accept}"
        ],

        shifted: [
            "Q W E R T Z U I O P",
            " A S D F G H J K L ",
            "{default} Y X C V B N M ",
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
            "backspace": { func: "backspace", classes: "control"},
            "accept": { func: "accept", text: "Close", classes: "control featured"},
            "next": { func: "next", text: "Next", classes: "control featured"},
            "zero": { key: "0", width: 130}
        },

        default: [
            "1 2 3",
            "4 5 6",
            "7 8 9",
            "_ - . {zero} {backspace} {next} {accept}"
        ]
    }

};