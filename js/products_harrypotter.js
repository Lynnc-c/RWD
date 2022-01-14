// 圖片小放大
    function showLarge(e){
        let small=e.target;
        document.getElementById('large').src = small.src;
    }
    function init(){
        let sm = document.querySelectorAll('.showcaseSm img');
        console.log(sm);
            for(let i=0;i<sm.length;i++){
                sm[i].addEventListener('click',showLarge);
            }
        let smL = document.querySelectorAll('.showcase img');
        console.log(smL);
            for(let a=0;a<smL.length;a++){
                smL[a].addEventListener('click',showLarge);
            }
    }
    window.addEventListener('load',init,false);


// 購物車算式
    function showLarge(e){
        let small=e.target;
        document.getElementById('large').src = small.src;
    }
    function init(){
        let sm = document.querySelectorAll('.showcaseSm img');
        console.log(sm);
            for(let i=0;i<sm.length;i++){
                sm[i].addEventListener('click',showLarge);
            }
        let smL = document.querySelectorAll('.showcase img');
        console.log(smL);
            for(let a=0;a<smL.length;a++){
                smL[a].addEventListener('click',showLarge);
            }
    }
    //購物車
    let cartBtn = document.querySelector('.shoppingCart');
    function showUp(){
        let table = document.querySelector('.tg');
        table.classList.add('showup');
        let pic = document.querySelector('.BigPicScreen img');
        pic.classList.add('animate__zoomOutDown');
    }
    cartBtn.addEventListener('click', showUp);
    //購物車裡面button加減運算
    let cut = document.getElementById('cut');
    let add = document.getElementById('add');
    //運算式
    let number = 1;
    let total;
    function cutNum(){
        let num = document.getElementById('num');
        let price = document.getElementById('price');
        if(number<=0){
            let num = document.getElementById('num');
            let price = document.getElementById('price');
            number = 0;
            num.innerText=number;
            total = number*280;
            price.innerText = total;
            addNum.number = 0;
            cutNum.number = 1;
            console.log(cutNum);
        }else{
            number -= 1;
            num.innerText=number;
            total = number*280;
            price.innerText = total;
        }
        
    }
    function addNum(){
        let num = document.getElementById('num');
        let price = document.getElementById('price');
        number += 1;
        num.innerText=number;
        total = number*280;
        price.innerText = total;
    }
    
    //歸零, 結帳, 刪除購物車
    let clear = document.getElementById('clear');
    function clearNum(){
        let num = document.getElementById('num');
        let price = document.getElementById('price');
        number = 0;
        num.innerText=number;
        total = number*280;
        price.innerText = total;
        addNum.number = 0;
        cutNum.number = 1;
        console.log(cutNum);
    }
    clear.addEventListener('click', clearNum);
    let check = document.getElementById('check');
    function checkPage(){
        location.replace('index.html');  // 結帳頁面連結
    }
    check.addEventListener('click', checkPage);
    let deleteSc = document.getElementById('del');
    function clearCart(){
        location.reload() 
    }
    del.addEventListener('click', clearCart);
    //註冊監聽器
    cut.addEventListener('click', cutNum);
    add.addEventListener('click', addNum);
    window.addEventListener('load',init,false);
