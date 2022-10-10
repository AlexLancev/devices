const accordeonTitle = document.querySelectorAll('[data-name="accordeon-title"]');

accordeonTitle.forEach((el) => {
    el.addEventListener('click', () => {

        el.classList.toggle('active');

        let content = el.nextElementSibling;
        
        if(content.style.maxHeight) {

            document.querySelectorAll('.questions-info__text').forEach((el) => el.style.maxHeight = null);

        } else {

            document.querySelectorAll('.questions-info__text').forEach((el) => el.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight + 'px';

        };

    });
});
