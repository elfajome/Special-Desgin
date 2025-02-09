"use strict";

// start model overlay
document.addEventListener("DOMContentLoaded", function () {
  // model variable
  var model = document.querySelector(".modal");
  var modelCloseBtn = document.querySelector(".modal-close-btn");
  // modal eventListener
  if (modelCloseBtn) {
    modelCloseBtn.addEventListener("click", function () {
      model.style.display = "none";
    });
  }
});

// mobile-bottom-navigation
var ClickIcon = document.querySelector(".category-icon");
var category = document.querySelector(".sidebar");
var overlay = document.querySelector(".overlay");
ClickIcon === null || ClickIcon === void 0 || ClickIcon.addEventListener("click", function () {
  if (category !== null && overlay !== null) {
    category.classList.toggle("active");
    overlay.classList.toggle("active");
  }
});

// عند الضغط على الـ overlay، يتم إغلاق القائمة
overlay === null || overlay === void 0 || overlay.addEventListener("click", function () {
  category === null || category === void 0 || category.classList.remove("active");
  overlay === null || overlay === void 0 || overlay.classList.remove("active");
});

// start click bullet
// Select All Bullets
var allBullets = document.querySelectorAll(".nav-bullets .bullet");
allBullets.forEach(function (el) {
  el.addEventListener("click", function (e) {
    var targ = e.target;
    var section = targ.dataset.section ? document.querySelector(targ.dataset.section) : null;
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// check if ther's local storage color option
var mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
  document.documentElement.style.setProperty('--salmon-pink', mainColors);
  // Remove Active Class From All Colors List Item
  document.querySelectorAll('.colors-list li').forEach(function (element) {
    element.classList.remove('active');
    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element instanceof HTMLElement && element.dataset.color === mainColors) {
      element.classList.add('active');
    }
  });
}

// Click On Toggle Settings Gear
var icon = document.querySelector(".toggle-settings .fa-gear");
if (icon) {
  icon.addEventListener("click", function () {
    var _document$querySelect;
    // // Toggle Class Fa-spin For Rotation on Self
    // icon.classList.toggle("fa-spin");

    // Toggle Class Open On Main Settings Box
    (_document$querySelect = document.querySelector(".settings-box")) === null || _document$querySelect === void 0 || _document$querySelect.classList.toggle("open");
  });
}

// Switch Colors
var colorli = document.querySelectorAll(".colors-list li");

// loop Li 
colorli.forEach(function (li) {
  li.addEventListener("click", function (e) {
    var target = e.target;
    if (target.dataset.color) {
      document.documentElement.style.setProperty('--salmon-pink', target.dataset.color);
      localStorage.setItem('color_option', target.dataset.color);
    }
    document.querySelectorAll('.colors-list li').forEach(function (el) {
      return el.classList.remove('active');
    });
    target.classList.add('active');
  });
});

// start click Category products

var li = document.querySelectorAll(".sidebar-menu-category-list li");
li.forEach(function (el) {
  el.addEventListener("click", function () {
    // إغلاق جميع العناصر المفتوحة باستثناء العنصر المضغوط عليه
    document.querySelectorAll(".sidebar-menu-category-list .element").forEach(function (element) {
      if (element !== el.querySelector(".sidebar-menu-category-list .element")) {
        element.classList.remove("active");
      }
    });

    // تبديل حالة العنصر (فتح أو إغلاق)
    var element_content = el.querySelector(".sidebar-menu-category-list .element");
    if (element_content) {
      element_content.classList.toggle("active");
    }
  });
});

// start sign-in and sign-up

var sign_in_btn = document.querySelector("#sign-in-btn");
var sign_up_btn = document.querySelector("#sign-up-btn");
var container = document.querySelector(".container");
var sign_in_btn2 = document.querySelector("#sign-in-btn2");
var sign_up_btn2 = document.querySelector("#sign-up-btn2");
if (sign_up_btn) {
  sign_up_btn.addEventListener("click", function () {
    container.classList.add("sign-up-mode");
  });
}
if (sign_in_btn) {
  sign_in_btn.addEventListener("click", function () {
    console.log(container);
    container.classList.remove("sign-up-mode");
  });
}
if (sign_up_btn2) {
  sign_up_btn2.addEventListener("click", function () {
    container.classList.add("sign-up-mode2");
  });
}
if (sign_in_btn2) {
  sign_in_btn2.addEventListener("click", function () {
    container.classList.remove("sign-up-mode2");
  });
}