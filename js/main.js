if(window.innerWidth<768){
    window.location.href = 'https://hjs4272.github.io/shakeShake__m/'
}


// 햄버거 사이드 쇼업 메뉴
function openNav(){
    $("#leftMenu").addClass("showLeftMenu");
}

function closeNav(){
    $("#leftMenu").removeClass("showLeftMenu")
}

// 오른쪽 location 사이드 쇼업 메뉴
function openNav2(){
    $("#rightMenu").addClass("showRightMenu");
}

function closeNav2(){
    $("#rightMenu").removeClass("showRightMenu")
}



// 1번째 스와이프 슬라이드
$(document).ready(function(){
    // {}안에는 속성값 - 기본적으로 변수, 오브젝트값(json)
    const swiper = new Swiper('.swiper-container', {
        direction:'horizontal',   // 수평
        slidePerView:1,
        spaceBetween:30,
        debugger:true,        //  드래그
        loop: true,
        centeredSlides:true,

        autoplay:{
            delay: 5000,
            disableOnInteraction : false,
        },

        pagination:{
            el:'.swiper-pagination',
            clickable:true,
        }
    });     
});



// 하단 2번째 스와이프 슬라이드
$(document).ready(function(){
    // {}안에는 속성값 - 기본적으로 변수, 오브젝트값(json)
    const swiper2 = new Swiper('.swiper-container2', {
        direction:'horizontal',   // 수평
        slidePerView:1,
        spaceBetween:30,
        debugger:true,        //  드래그
        loop: true,
        centeredSlides:true,

        autoplay:{
            delay: 5000,
            disableOnInteraction : false,
        },
        
        navigation: {
            //이전페이지
            prevEl: '.swiper-button-prev',
            //다음페이지
            nextEl: '.swiper-button-next'
        }
    });     
});
