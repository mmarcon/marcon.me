module.exports = function(env, variable) {

    if(env === 'production') {
        return variable;
    }
    return '';
}