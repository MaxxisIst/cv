const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const tabsUnder = document.getElementById('tabs-under');
const contentUnder = document.querySelectorAll('.content-under');

const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
};

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        console.log(content[i].dataset.content);
        if (content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
});

const changeClass2 = el => {
    for (let i = 0; i < tabsUnder.children.length; i++) {
        tabsUnder.children[i].classList.remove('active');
    }
    el.classList.add('active');
};

tabsUnder.addEventListener('click', e => {
    const currTab2 = e.target.dataset.btn2;
    changeClass2(e.target);
    for (let i = 0; i < contentUnder.length; i++) {
        contentUnder[i].classList.remove('active');
        console.log(contentUnder[i].dataset.content2);
        if (contentUnder[i].dataset.content2 === currTab2) {
            contentUnder[i].classList.add('active');
        }
    }
});