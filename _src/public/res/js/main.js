(function(w, d){
    var body = d.querySelector('body'),
        container = d.querySelector('.container'),
        content = d.querySelector('.content'),
        pusher = d.querySelector('.pusher'),
        hamburger = d.querySelector('.hamburger'),
        overlay = d.createElement('div');

    function go(){
        hamburger.addEventListener('click', function(e){
            container.classList.toggle('has-hamburger');
        }, false);
        overlay.addEventListener('click', function(e){
            container.classList.toggle('has-hamburger');
        }, false);
        overlay.classList.add('overlay');
        pusher.appendChild(overlay);
        content.addEventListener('click', function(e){
            var target = e.target,
                classList = target.classList,
                classChangeTarget;
            if(classList.contains('asider')){
                e.preventDefault();
                classChangeTarget = target.parentNode.parentNode;
                if(classList.contains('more')) {
                    classChangeTarget.classList.add('aside');
                } else if(classList.contains('less')) {
                    classChangeTarget.classList.remove('aside');
                }
            }
        }, false);
    }

    go();
})(window, document);