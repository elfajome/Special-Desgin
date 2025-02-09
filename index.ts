
// start model overlay
document.addEventListener("DOMContentLoaded", () => {
    // model variable
    const model = document.querySelector(".modal") as HTMLElement;
    const  modelCloseBtn = document.querySelector(".modal-close-btn") as HTMLElement;
    // modal eventListener
    if (modelCloseBtn) {
        modelCloseBtn.addEventListener("click",function () {
            model.style.display = "none" ;
        });
    }
});

// mobile-bottom-navigation
let ClickIcon = document.querySelector(".category-icon");
let category = document.querySelector(".sidebar") as HTMLElement | null;
let overlay = document.querySelector(".overlay") as HTMLElement | null;

ClickIcon?.addEventListener("click", () => {
    if (category !== null && overlay !== null) {
        category.classList.toggle("active");
        overlay.classList.toggle("active");
    }
});

// عند الضغط على الـ overlay، يتم إغلاق القائمة
overlay?.addEventListener("click", () => {
    category?.classList.remove("active");
    overlay?.classList.remove("active");
});


// start click bullet
// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(el => {
    el.addEventListener("click", (e) => {
        const targ = e.target as HTMLElement;
        const section = targ.dataset.section ? document.querySelector(targ.dataset.section) : null;

        if (section) {
            (section as HTMLElement).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// check if ther's local storage color option
let mainColors = localStorage.getItem("color_option");
if ( mainColors !== null ) {
    document.documentElement.style.setProperty('--salmon-pink',mainColors);
    // Remove Active Class From All Colors List Item
    document.querySelectorAll('.colors-list li').forEach(element => {
        element.classList.remove('active');
    // Add Active Class On Element With Data-Color === Local Storage Item
        if ( element instanceof HTMLElement && element.dataset.color === mainColors ) {
            element.classList.add('active');
        }
        
    });
}


// Click On Toggle Settings Gear
let icon = document.querySelector(".toggle-settings .fa-gear") as HTMLElement ;
if (icon) {
    icon.addEventListener("click",() => {
        // // Toggle Class Fa-spin For Rotation on Self
        // icon.classList.toggle("fa-spin");
    
        // Toggle Class Open On Main Settings Box
        document.querySelector(".settings-box")?.classList.toggle("open");
    
    });
}

// Switch Colors
const colorli = document.querySelectorAll(".colors-list li");

// loop Li 
colorli.forEach(li => {
    li.addEventListener("click",(e) => {
        const target = e.target as HTMLElement;
        if (target.dataset.color) {
            document.documentElement.style.setProperty('--salmon-pink', target.dataset.color);
            localStorage.setItem('color_option' , target.dataset.color);
        }
        document.querySelectorAll('.colors-list li').forEach(el => el.classList.remove('active'));
        target.classList.add('active');
    });
});


// start click Category products

let li = document.querySelectorAll(".sidebar-menu-category-list li");

li.forEach(el => {
    el.addEventListener("click", () => {
        // إغلاق جميع العناصر المفتوحة باستثناء العنصر المضغوط عليه
        document.querySelectorAll(".sidebar-menu-category-list .element").forEach(element => {
            if (element !== el.querySelector(".sidebar-menu-category-list .element")) {
                (element as HTMLElement).classList.remove("active");
            }
        });

        // تبديل حالة العنصر (فتح أو إغلاق)
        let element_content = el.querySelector(".sidebar-menu-category-list .element") as HTMLElement | null;
        if (element_content) {
            element_content.classList.toggle("active");
        }
    });
});


// start sign-in and sign-up

const sign_in_btn = document.querySelector("#sign-in-btn") as HTMLElement;
const sign_up_btn = document.querySelector("#sign-up-btn") as HTMLElement;
const container = document.querySelector(".container") as HTMLElement;
const sign_in_btn2 = document.querySelector("#sign-in-btn2") as HTMLElement;
const sign_up_btn2 = document.querySelector("#sign-up-btn2") as HTMLElement;

if (sign_up_btn) {
    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });
}
if (sign_in_btn) {
    sign_in_btn.addEventListener("click", () => {
        console.log(container);
        container.classList.remove("sign-up-mode");
    });
}
if (sign_up_btn2) {
    sign_up_btn2.addEventListener("click", () => {
        container.classList.add("sign-up-mode2");
    });
}
if (sign_in_btn2) {
    sign_in_btn2.addEventListener("click", () => {
        container.classList.remove("sign-up-mode2");
    });
}
