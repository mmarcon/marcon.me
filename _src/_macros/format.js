var marked = require('marked');

function multiline(array){
    return array.join('<br>');
}

function paragraphs(array){
    return '<p>' + array.join('</p><p>') + '</p>';
}

function list(array, ordered){
    var output = ordered ? '<ol>' : '<ul>';
    output += '\n';
    output += '<li>' + array.join('</li>\n<li>') + '</li>';
    output += '\n';
    output += ordered ? '</ol>' : '</ul>';

    return output;
}

function md(string){
    if(string instanceof Array) {
        return string.map(function(s){return marked(s);}).join('\n');
    }
    return marked(string);
}

function makeId(string){
    return string.replace(/[^a-zA-Z0-9]/g,'_');
}

module.exports = {
    multiline: multiline,
    paragraphs: paragraphs,
    list: list,
    md: md,
    makeId: makeId
};