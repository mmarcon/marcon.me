var TEMPLATES = {
    css: '<link rel="stylesheet" type="text/css" href="{path}?{id}">',
    js: '<script src="{path}?{id}"></script>'
};

module.exports = {
    css: function css(path) {
        return TEMPLATES.css.replace('{path}', path).replace('{id}', Date.now());
    },
    js: function js(path) {
        return TEMPLATES.js.replace('{path}', path).replace('{id}', Date.now());
    }
};