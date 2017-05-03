// 'noConflict()' allows you to use the '$' that jQuery requires
jQuery.noConflict();

// Immediately after 'noConflict', you MUST write your jQuery
// Note: The line below is a modified '$(document).ready(function ( )) {' 
jQuery(document).ready(function ($) {
    $(".girl").click(function () {
        $(".girl + label").css("background-color", "#555");
        $(".girl + label").css("color", "#fff");
        $(".boy + label").css("background-color", "#fff");
        $(".boy + label").css("color", "#000");
    });
    $(".boy").click(function () {
        $(".boy + label").css("background-color", "#555");
        $(".boy + label").css("color", "#fff");
        $(".girl + label").css("background-color", "#fff");
        $(".girl + label").css("color", "#000");
    });
});