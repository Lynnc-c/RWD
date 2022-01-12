//Get the button:
myButton = document.getElementById("BackToTopBtn");
function topFunction() {
    window.scrollTo({
        // 滾到最上面
        top: 0,
        // 慢慢滾
        behavior: 'smooth',
    });
}
