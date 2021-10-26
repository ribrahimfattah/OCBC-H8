// ambli "Page title" dengan menggunakan getElementById
// document.getElementById
let pageTitleElement = document.getElementById('title')

// document.getElementsByClassName
let pageBoxElement = document.getElementsByClassName('page-box')

// document.getElementsByTagName
let divElement = document.getElementsByTagName('div')

$(document).ready(function () {

    $('#title').click( function () {
        alert("hahahha");
    });
});

$('.page-box:first').addClass('btn-danger')