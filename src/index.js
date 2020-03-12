module.exports = function checks(str, bracketsConfig) {
    let regex;
    for (r = 0; r < str.length ** 3; r++) {
        for (let i in bracketsConfig) {
            regex = new RegExp(
                `([\\${bracketsConfig[i][0]}][\\${bracketsConfig[i][1]}]|[\\\\${bracketsConfig[i][0]}][\\\\${bracketsConfig[i][1]}])`,
                "g"
            );
            for (let ii = 0; ii <= str.length; ii++) {
                str = str.replace(regex, "");
            }
        }
    }

    return str.length > 0 ? false : true;
};
