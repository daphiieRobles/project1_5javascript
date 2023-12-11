"use strict";
$(document).ready(function(){
    $('.show-more-1').click(function (e) {
        e.preventDefault();
        $(this).prev('.hide').toggleClass('expanded');
        if ($(this).prev('.hide').hasClass('expanded')) {
          $(this).text('Show less');
        } else {
          $(this).text('Show more');
        }
      });
    
      $('.show-more-2').click(function (e) {
        e.preventDefault();
        $(this).prev('.hide').toggleClass('expanded');
        if ($(this).prev('.hide').hasClass('expanded')) {
          $(this).text('Show less');
        } else {
          $(this).text('Show more');
        }
      });
    
      $('.show-more-3').click(function (e) {
        e.preventDefault();
        $(this).prev('.hide').toggleClass('expanded');
        if ($(this).prev('.hide').hasClass('expanded')) {
          $(this).text('Show less');
        } else {
          $(this).text('Show more');
        }
      });
    });
    