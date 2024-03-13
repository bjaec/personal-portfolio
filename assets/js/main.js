/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*====MENU SHOW =====*/
/*validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/*=====MENU HIDDEN =====*/
/*validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //whn we click on each nav__link, we remove the show-menu 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))


/*=============== SHADOW HEADER ===============*/

const shadowscrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header. classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowscrollHeader)


/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

        const sendEmail = (e) =>{
            e.preventDefault()

            // serviceID - templateID - #form - publicKey
            emailjs.sendForm('service_02wwpmv', 'template_edbb7p1', '#contact-form', 'W09aghYV_74I4ZmJi')
            .then(() =>{
                // Show sent message
                contactMessage.textContent = 'Message sent successfully ✅'
                contactMessage.style.display = 'block'; // Make the message visible

                // Remove message after five seconds
                setTimeout(() =>{
                    contactMessage.textContent = ''
                    contactMessage.style.display = 'none'; // Hide the message again
                }, 5000)

                // Clear input fields
                contactForm.reset()

                }, ()=>{
                    // Show error message
                    contactMessage.textContent = 'Message not sent (service error) ❌'
                    contactMessage.style.display = 'block'; // Make the message visible
                })


        }

        contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
