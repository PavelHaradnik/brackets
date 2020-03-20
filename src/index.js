module.exports = function check(str, bracketsConfig) {
    let rp = [];
    for (let i=0; i<str.length; i++) {
        for ( j=0; j<bracketsConfig.length; j++) {
            if(str[i] === bracketsConfig [j] [0] && str[i] === bracketsConfig [j] [1]) {
                if (rp[rp.length-1] === str [i]) {
                    rp.pop();
                } else rp.push (str[i]);
                break;
            }
            if (str [i] === bracketsConfig [j] [0]) {
                rp.push (str[i]);
            }
            if (str [i] === bracketsConfig [j] [1]) {
                if (rp[rp.length-1] === bracketsConfig [j] [0]) {
                    rp.pop();
                }else return false
            }
        }
    }
    return rp.length === 0;
}

