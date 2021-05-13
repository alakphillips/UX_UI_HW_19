console.log("Your index loaded correctly");

// Smooth Scroll Effect
$("#about-section").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".about-me").offset().top
    }, 100);
});
$("#skills-section").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".myskills").offset().top
    }, 100);
});
$("#work-section").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
    }, 100);
});
$("#contact-section").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".contact").offset().top
    }, 100);
});
