document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            buttons.forEach(btn => {
                if (btn !== this) btn.classList.add('darken');
            });
        });
    
        button.addEventListener('mouseout', function() {
            buttons.forEach(btn => btn.classList.remove('darken'));
        });
    });
});
