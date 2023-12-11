"use strict";

$(document).ready(() => {
    // preload images
    $("#image_list a").each((index, link) => {
        const image = new Image();
        image.src = link.href;
    });

    // attach event handlers for links
    $("#image_list a").click(evt => {
        // prevent default action of the link
        evt.preventDefault();

        // get clicked <a> tag
        const link = evt.currentTarget;

        // fade out image and caption over one second
        $("#main_image, #caption").fadeOut(1000, () => {
            // swap image
            $("#main_image").attr("src", link.href);

            // swap caption
            $("#caption").text(link.title);

            // fade in image and caption over one second
            $("#main_image, #caption").fadeIn(1000);
        });
    });

    // move focus to first thumbnail
    $("li:first-child a").focus();
});