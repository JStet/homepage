import trianglify from "trianglify";
import 'bulma/css/bulma.css';
import lax from 'lax.js'

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
	}
});


export default app;

var x = window.matchMedia("(max-width: 1023px)") //Media query

function lax_animation(){
  if (!x.matches) { // If media query matches

    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver(
      'scrollY',                          // Driver name
      function(laxFrame) {
        return window.scrollY    // Value method
      },
      {}                                 // Options
    )

    // Add animation bindings to elements
    lax.addElements(
      '#first_hero',  // Element selector rule
      {             // Animation data

      scrollY: {                // Driver name
      translateX: [
          [0, projects_anker.getBoundingClientRect().top + document.documentElement.scrollTop, "pageHeight"],
          [0, "elInX", "elInX",],
        {
                  // Options
        }
        ],

      }
    }
    )
    lax.addElements(
      '#third_hero',  // Element selector rule
      {             // Animation data

      scrollY: {                // Driver name
      translateX: [
          [0, projects_anker.getBoundingClientRect().top + document.documentElement.scrollTop, "pageHeight"],
          ["elOutX", 0, 0],
        {
                  // Options
        }
        ],

      }
    }
    )
  }
  }

function viewportToPixels(value) {
  var parts = value.match(/([0-9\.]+)(vh|vw)/)
  var q = Number(parts[1])
  var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
  return side * (q/100)
}

function draw_pattern(x){
  if (!x.matches) { // If media query matches
    var pattern_container = document.getElementById("pattern_container");
    var body = document.body;
    var html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight, body.clientHeight, document.body.scrollHeight);

    var width = body.offsetWidth/2;

    // apply trianglify to convert the points to polygons and apply the color
    // gradient
    var pattern1 = trianglify({
      height,
      width,
      cellSize: 80,
      strokeWidth: 2,
      fill: false,
      yColors: ['#3273DC', '#F4F4F4'],


    })


    // use the toCanvas function to render the generated geometry to an HTML5
    // canvas element
    pattern_container.appendChild(pattern1.toCanvas())


  }
}


function adjust(x) {

  if (x.matches) { // If media query matches
    var main_margin = navbar_mobile.offsetHeight + hero_mobile.offsetHeight;

		hero_mobile.style.paddingTop = navbar_mobile.offsetHeight + "px";

		projects.style.marginBottom =   80 + "px"

    // projects.style.height = viewportToPixels("100vh") - projects_hero_mobile.style.paddingTop - navbar_mobile.offsetHeight + "px"

  } else {
    var main_margin = navbar.offsetHeight + hero.offsetHeight;
		var home_height = home.clientHeight;
		var footer_height = footer.clientHeight;

    hero.style.marginTop = navbar.offsetHeight + "px";

    home_anker.style.height = main_margin + "px"
		home.style.height = viewportToPixels("100vh") - main_margin + "px"

    projects_anker.style.height =  main_margin  + "px"
		// projects.style.margin = viewportToPixels("100vh") - main_margin + "px"
		// projects.style.marginBottom =  footer_height +  "px"

		placeholder.style.height = viewportToPixels("100vh") - main_margin - footer_height  + "px"

  }
}

function scrollbar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


window.addEventListener('load', () => {
  var hero_mobile = document.getElementById("hero_mobile");
  hero_mobile.classList.toggle("navbar_margin") //Add margin when documents load to compensate for header(only for mobile)

  var hero = document.getElementById("hero");
  var navbar = document.getElementById("navbar");
  var navbar_mobile = document.getElementById("navbar_mobile")
  var home_anker = document.getElementById("home_anker");
	var home = document.getElementById("home");
	var projects = document.getElementById("projects");
  var projects_anker = document.getElementById("projects_anker");
	var projects_hero_mobile = document.getElementById("projects_hero_mobile");
	var footer = document.getElementById("footer");
	var placeholder = document.getElementById("placeholder");



  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
        // Toggle class that adds margin to compensate for nav menu
        hero_mobile.classList.toggle("navbar_margin")

      });
    });

  }


    adjust(x) //passing the media query to all of the relevant functions for different behaviours


    lax_animation()

    window.onscroll = function() {scrollbar()};

		draw_pattern(x)

  //end of docload event
  });

  window.addEventListener('resize', function(event) {
    setTimeout(function(){
      window.location.reload(); //a bit of a cheat, but some things just need to reset (pattern, margins, animations etc.) when window resizes and I didnt find a better way
    });

}, false);
