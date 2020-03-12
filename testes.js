const config1 = [["(", ")"]];
const config2 = [
    ["(", ")"],
    ["[", "]"]
];
const config3 = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"]
];
const config4 = [["|", "|"]];
const config5 = [
    ["(", ")"],
    ["|", "|"]
];
const config6 = [
    ["1", "2"],
    ["3", "4"],
    ["5", "6"],
    ["7", "7"],
    ["8", "8"]
];
const config7 = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["|", "|"]
];
//const regex = /([\(][\)])/g;

function checks(str, bracketsConfig) {
    let regex;

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    for (r = 0; r < str.length ** 3; r++) {
        for (let i in bracketsConfig) {
            if (isNumber(str)) {
                regex = new RegExp(
                    `([\\\\${bracketsConfig[i][0]}][\\\\${bracketsConfig[i][1]}])`,
                    "g"
                );
            } else {
                regex = new RegExp(
                    `([\\${bracketsConfig[i][0]}][\\${bracketsConfig[i][1]}])`,
                    "g"
                );
            }
            //console.log(regex);
            for (let ii = 0; ii <= str.length; ii++) {
                //console.log(str);
                str = str.replace(regex, "");
                //console.log(str);
            }
        }
    }
    //console.log(str);

    return str.length > 0 ? false : true;
}

//console.log("1 - true", checks("()", config1)); // true
//console.log("2 - true", checks("((()))()", config1)); // true
//console.log("3 - false", checks("())(", config1));
//console.log("4 - true", checks("([{}])", config3)); // true *
// console.log("5 - false", checks("[(])", config2));
// console.log("6 - true", checks("[]()", config2)); // true *
// console.log("7 - false", checks("[]()(", config2));
// console.log("8 - true", checks("||", config4)); // true
// console.log("9 - true", checks("|()|", config5)); // true
// console.log("10 - false", checks("|(|)", config5));
// console.log("11",checks("|()|(||)||", config5)); // true
console.log(
    "12 - true",
    checks(
        "111115611111111222288888822225577877778775555666677777777776622222",
        config6
    )
); // true

// console.log(  "13 - false",
//     checks(
//         "5555512575557777777555566667888888667661133833448441111222233333444442266666",
//         config6
//     )
// ); // false
// console.log( "14 - false",
//     checks(
//         "8888877878887777777888888887777777887887788788887887777777788888888887788888",
//         config6
//     )
// ); // false
console.log(
    "15 - true",
    checks(
        "111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222",
        config6
    )
); // true
// console.log(checks("[]][[]", config3)); // false
// console.log(checks("[]][[]", config2)); // false
// console.log(
//     checks(
//         "([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()",
//         config7
//     )
// ); // false
// console.log(
//     checks(
//         "([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())",
//         config7
//     )
// ); // true
// console.log(
//     checks(
//         "([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))",
//         config7
//     )
// ); // true
