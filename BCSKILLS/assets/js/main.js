/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('navMenu'),
        navToggle = document.getElementById('navToggle'),
        navClose = document.getElementById('navClose')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('navMenu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION NEWS ====================*/
const newsContent = document.getElementsByClassName('news-content'),
        newsHeader = document.querySelectorAll('.news-header')

function toggleNews(){
    let itemClass = this.parentNode.className

    for(i = 0; i < newsContent.length; i++){
        newsContent[i].className = 'news-content news-close'
    }
    if(itemClass === 'news-content news-close'){
        this.parentNode.className = 'news-content news-open'
    }
}

newsHeader.forEach((el) =>{
    el.addEventListener('click', toggleNews)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
     tab.addEventListener('click', ()=>{
         const target = document.querySelector(tab.dataset.target)

         tabContent.forEach(tabContent =>{
             tabContent.classList.remove('qualification-active')
         })
         target.classList.add('qualification-active')

         tab.forEach(tab =>{
             tab.classList.remove('qualification-active')
         })
         tab.classList.add('qualification-active')
     })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services-modal'),
        modalBtns = document.querySelectorAll('.services-button'),
        modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i) =>{
    modalBtns.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
}) 