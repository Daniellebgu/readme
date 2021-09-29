const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");

openNav.addEventListener("click", () => {
  menu.classList.add("show");
});

closeNav.addEventListener("click", () => {
  menu.classList.remove("show");
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map((link) => {
  if (!link) return;
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});
/*---------------------------New valid check---------------------------------------------------------------------*/
/*$(document).ready(function () {
    $('#myform.form1').validate({
        rules: {
            firstName: {
                required: true,
            },
            Shipping Address: {
                required: true,
            },
            Contact phone: {
                required: true,
            },
            datetime: {
                required: true,
            },
            Dedication: {
                required: false,
            },
        },
        messages: {
            firstName: {
                required: 'Please enter a valid name <br/>',
            },
            Shipping Address: {
                required: 'Please enter a shipping address <br/>',
            },
            datetime: {
                required: 'Please select a date <br/>',
            },

        },

        errorPlacement: function (error, element) {
            if (element.prop('type') === 'radio') {
                error.insertBefore(element);
            } else {
                error.insertBefore(element);
            }
        },
    });

    $('#message').keyup(function () {
        el = $(this);
        if (el.val().length >= 201) {
            el.val(el.val().substr(0, 200));
        } else {
            $('#characters').text('(' + el.val().length + '/200)');
        }
    });

    //Removes the default checked radio button, setting it to false
    $('input[name=radio]').attr('checked', false);
});
*/
function validateForm() {
    let x = document.forms["myForm"]["firstName"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}