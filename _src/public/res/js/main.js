(function(w, d){
    var body = d.querySelector('body'),
        container = d.querySelector('.container'),
        content = d.querySelector('.content'),
        hamburger = d.querySelector('.hamburger'),
        overlay = d.createElement('div');

    function go(){
        hamburger.addEventListener('click', function(e){
            container.classList.toggle('has-hamburger');
        }, false);

        overlay.classList.add('overlay');
        // content.appendChild(overlay);
    }

    go();
})(window, document);