// SHOW MENU(nav 클릭)
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}



//REMOVE MOBILE(nav-list 클릭)
const navLink = document.querySelectorAll('.nav_link') //.nav_link의 class를 가진 모든 요소를 NodeList로 반환

//각 nav_menu를 클릭하면 show-menu 클래스가 제거됨
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction)) //forEach 반복문



//CHANGE BACKGROUND HEADER(헤더 그림자)
function scrollHeader(){
    //스크롤이 50 뷰포트 높이보다 크면 header 태그에 scroll-header 클래스를 추가
    const header = document.getElementById('header')
    if(this.scrollY >= 50) 
    header.classList.add('scroll-header');
    else 
    header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);



//NEW SWIPER(스와이퍼)
let newSwiper = new Swiper(".new-swiper",{
    spaceBetween: 24, //슬라이드 사이 여백
    loop: 'true', //슬라이드 반복 여부
    slidesPerView: 'auto', // 한 슬라이드 보여줄 갯수
    centeredSlides: true, // 센터모드
    pagination: {
        el: ".swiper-pagination", //버튼을 담을 태그 설정
        dynamicBullets: true //버튼스타일
    },
    breakpoints: { //반응형
        992: { //width
            //slidePerView:   //한 슬라이드에 보여줄 갯수
            spaceBetween: 80, //슬라이드 사이 여백
        },
    },
});

window.addEventListener('scroll', function(){
    //SCROLL SECTIONS ACTIVE LINK(나브메뉴 클릭 스크롤 이동)
    const sections = document.querySelectorAll('section[id]') //querySelectorAll : section태그의 id값 가져와 배열 형태로 반환
    const scrollY = window.pageYOffset //문서가 수직으로 얼마나 스크롤 됐는지 px 단위로 반환    
    sections.forEach(current =>{    
        const sectionHeight = current.offsetHeight; //offsetHeight : 요소의 높이 
        const sectionTop = current.offsetTop - 58; //offsetTop : 요소 경계의 맨 윗부분
        const sectionId = current.getAttribute('id'); //getAttribute는 선택한 요소(element)의 특정 속성(attribute)의 값을 가져옴
        console.log('scrollY => '+scrollY);
        console.log('offsetTop =>'+current.offsetTop);
        console.log('sectionTop =>'+sectionTop);
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
            //console.log(document.querySelector('.nav_menu a[href*=' + sectionId + ']'));
        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
});


//SHOW SCROLL UP (스크롤 위로 이동)
function scrollUp(){
    //스크롤이 350 보다 크면 show-scroll 클래스를 추가
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) 
    scrollUp.classList.add('show-scroll');
    else
    scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)


//SCROLL REVEAL ANIMATION (스크롤 애니메이션)
const sr = ScrollReveal({
    origin: 'top', //방향
    distance: '60px', //거리
    duration: 2500, //시간
    delay: 400, //지연시간(처음에 뜨는시간)
})

sr.reveal('.home_img, .new__container, .footer__container')
sr.reveal('.home_data', {delay: 500})
sr.reveal('.giving_content, .gift_card',{interval: 100}) //시간간격
sr.reveal('.celebrate_data, .message_form, .footer_img1',{origin: 'left'})
sr.reveal('.celebrate_img, .message_img, .footer_img2',{origin: 'right'})
