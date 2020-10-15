module.exports = function check(str, bracketsConfig) {
    let  chars = str.split('');
    let stack = [];
    let open = [];
    let close = [];
    let closeIndex;
    let openIndex;

    for (var i = 0; i < bracketsConfig.length; i++) {
            open[i] = bracketsConfig[i][0];
            close [i] = bracketsConfig[i][1];
    }
    for (var i = 0, len = chars.length; i < len; i++) {
        openIndex = open.indexOf(chars[i]);
        if (openIndex !== -1) {
            if ( openIndex === close.indexOf(chars[i]) && openIndex === stack[stack.length - 1]) {
                openIndex = stack.pop();
            } else {
                stack.push(openIndex);
            }
            continue;
        }
 
        closeIndex = close.indexOf(chars[i]);
        if (closeIndex !== -1) {
            openIndex = stack.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }
     if (stack.length !== 0) {
        return false;
    }

    return true;
       
}
