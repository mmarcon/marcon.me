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
            var target = e.target.tagName === 'SPAN' ? e.target.parentNode : e.target,
                classList = target.classList,
                classChangeTarget;
            if(classList.contains('asider')){
                e.preventDefault();
                classChangeTarget = target.parentNode.parentNode.parentNode;
                [].slice.call(d.querySelectorAll('.aside')).forEach(function(e){
                    e.classList.remove('aside');
                });
                if(classList.contains('more')) {
                    classChangeTarget.classList.add('aside');
                }
            }
        }, false);
    }

    go();
})(window, document);