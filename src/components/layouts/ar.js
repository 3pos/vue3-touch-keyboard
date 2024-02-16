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
            "ذ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ٠ - = {backspace}",
            "{tab} ض ص ث ق ف غ ع ه خ ح ج د \\",
            "{caps} ش س ي ب ل ا ت ن م ك ط {enter}",
            "{shiftl} ئءؤ رلا ى ة و ز ظ {shiftr}",
            "{next} {space} {accept}"
        ],
        shifted: [
            "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
            "{tab} ض ص ث ق ف غ ع ه خ ح ج د \\",
            "{caps} ش س ي ب ل ا ت ن م ك ط {enter}",
            "{shiftl} ئءؤ رلا ى ة و ز ظ {shiftr}",
            "{next} {space} {accept}"
        ],
        
        capsed: [
            "ذ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ٠ - = {backspace}",
            "{tab} ض ص ث ق ف غ ع ه خ ح ج د \\",
            "{caps} ش س ي ب ل ا ت ن م ك ط {enter}",
            "{shiftl} ئءؤ رلا ى ة و ز ظ {shiftr}", 
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
            "ض ص ث ق ف غ ع ه خ ح ج د",
            " ش س ي ب ل ا ت ن م ك ط ",
            "{shift} ئءؤ رلا ى ة و ز ظ {backspace}",
            "{numbers} , {space} . {next} {accept}"
        ],

        shifted: [
            "ض ص ث ق ف غ ع ه خ ح ج د",
            " ش س ي ب ل ا ت ن م ك ط ",
            "{default} ئءؤ رلا ى ة و ز ظ ",
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