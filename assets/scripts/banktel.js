( function() {

  'use strict';

// Inst fancy-select on selects with class '.dropdown'
  $('.dropdown').fancySelect();

// Inst Datepicker
  $.datepicker.setDefaults({
    dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    inline: true,
    showAnim: "fadeIn",
    showOtherMonths: true
  });
  $('.input-group.date input').datepicker();

// Inst Sortable Tiers
  $('.draggable-container').sortable({
    axis: 'y',
    cursor: "move",
    items: '.tier',
    handle: ".btn-tier-drag",
    refresh: true,
    zIndex: 1010
  });

// Remove tier
  $(".draggable-container").on('click', '.btn-tier-remove', function () {
    $( this ).closest('.tier').remove();
  });

// Expand menu on larger screens
  if( $( window ).width() <= 1280 ) {
    $( '.menu' ).removeClass( 'expanded' );
  };

// Expand menu on initial click/touch on smaller screens 
   $( document.body ).on( 'click', '.menu', function(){
      $( '.menu' ).toggleClass( 'expanded' ),
        $('.menu-collapse').toggleClass('rotator');
      return false;
    });

// Menu, downward traversal
  $( document.body ).on('click', '.menu.expanded .level-down', function () {
    $( this ).next( ".level" ).css( "left", "0" );
    return false;
  });

// Menu, upward traversal
  $( document.body ).on('click', '.menu.expanded .level-up', function () {
    $( this ).closest( ".level" ).css( "left", "-201px" );
    return false;
  });

  // Expand or collapse menu on resize of window
    $( window ).on( 'resize', function() {
      if( $( window ).width() < 1280 ) {
        if( $( '.menu' ).hasClass( 'expanded' ) ) {
          $( '.menu' ).removeClass( 'expanded' );
        };
      } else if ( $( window ).width() >= 1280 ) {
        if( $( '.menu' ).hasClass( 'expanded' ) ) {
          return false;
        } else {
          $( '.menu' ).addClass( 'expanded' );
        };
      };
    } );

    // if($('.menu').hasClass('closed')) {

    // }







}());
//= require bootstrap/affix
//= require bootstrap/alert
//= require bootstrap/button
//= require bootstrap/carousel
//= require bootstrap/collapse
//= require bootstrap/dropdown
//= require bootstrap/tab
//= require bootstrap/transition
//= require bootstrap/scrollspy
//= require bootstrap/modal
//= require bootstrap/tooltip
//= require bootstrap/popover

// Avoid `console` errors in browsers that lack a console.
(function() {
  'use strict';
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
