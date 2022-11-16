const tabs = () => {

    const tabHeaders = document.querySelectorAll('[data-tab]');
    const contentBoxes = document.querySelectorAll('[data-tab-content]');

    tabHeaders.forEach(function (item) {
        item.addEventListener('click', function () {

            const noActiv = document.querySelector('.activ');
            noActiv.classList.remove('activ');
            this.classList.add('activ');

            contentBoxes.forEach(function (item) {
                item.classList.add('hidden');
            });

            const contentBox = document.querySelector('#' + this.dataset.tab);
            contentBox.classList.remove('hidden');

        })
    })

}

tabs();
