// 回頂部按鈕滾動JS
//Get the button:
myButton = document.getElementById("BackToTopBtn");
function topFunction() {
    window.scrollTo({
        // 滾到最上面
        top: 0,
        // 慢慢滾
        behavior: 'smooth',
    });
};
// 回頂部按鈕隱藏，到scrollTop>500才顯示
window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop > 500){
        document.getElementById("backToTop").classList.remove("backToTopNone");
    }else{
        document.getElementById("backToTop").classList.add("backToTopNone");
    }
});