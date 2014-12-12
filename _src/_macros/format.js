var marked = require('marked');

function multiline(array){
    return array.join('<br>');
}

function paragraphs(array){
    return '<p>' + array.map(transform).join('</p><p>') + '</p>';
}

function md(string){
    if(string instanceof Array) {
        return string.map(function(s){return marked(s);}).join('\n');
    }
    return marked(string);
}

module.exports = {
    multiline: multiline,
    paragraphs: paragraphs,
    md: md
};