<script>
  import Logos from "./Logos.svelte";
</script>

<!---Mobile Navbar------------------>
<nav
  class="navbar is-hidden-desktop is-light is-fixed-top"
  id="navbar_mobile"
>
  <div class="is-mobile is-light">
    <div class="navbar-item breadcrumb is-marginless center px-6 ">
      <a href="#top" class="has-text-weight-bold is-size-5 logo has-text-dark ">
        <span class="icon is-small">
          <i class="fas fa-home" />
        </span>
        <span>Jonas Stettner</span>
      </a>
    </div>
  </div>
</nav>
<!---Mobile Navbar------------------>
<!---Navbar for other Devices------------------>
<nav class="columns is-marginless is-hidden-touch" id="navbar">
  <div class="column" />
  <div class="column center_h is-marginless py-5 is-3 has-background-white">
    <ul class="">
      <li>
        <a
          href="#home_anker"
          class="breadcrumb has-text-weight-bold is-size-4 is-size-5-mobile has-text-dark logo"
        >
          <span class="icon is-small">
            <i class="fas fa-home" />
          </span>
          <span>Jonas Stettner</span>
        </a>
      </li>
    </ul>
    <div class="progress-container mt-3">
      <div class="progress-bar" id="myBar" />
    </div>
  </div>
  <div
    class="column breadcrumb is-medium center has-background-white has-arrow-separator"
  >
    <ul class="">
      <li>
        <a href="#projects_anker">
          <span class="icon is-small">
            <i class="fas fa-wrench" />
          </span>
          <span>Projects</span>
        </a>
      </li>
    </ul>
  </div>
</nav>
<!---Navbar for other Devices------------------>
<!---Hero with image for Mobile------------------>
<section
  class="has-background-light pb-3 mb-0 is-hidden-desktop navbar_margin"
  id="hero_mobile"
>
  <div class="columns">
    <div class="column is-1 center" />
    <div class="column center">
      <figure class="image is-128x128 ">
        <img class="is-rounded" src="media/me2.jpeg" alt="My (Jonas) Face" />
      </figure>
    </div>
    <div class="column center has-text-centered">
      <div class="container">
        <h1 class="title is-size-4-mobile ">MSc Student</h1>
        <h2 class="subtitle is-size-6-mobile">University of Konstanz</h2>
      </div>
    </div>
    <div class="column is-1" />
  </div>
</section>
<!-------------------->
<!--- Animated Hero for other Devices------------------>
<section class="has-background-light py-5 is-hidden-touch center" id="hero">
  <div class="columns" id="first_hero">
    <div class="column is-1" />
    <div class="column center">
      <figure class="image is-128x128 ">
        <img class="is-rounded" src="media/me2.jpeg" alt="My (Jonas) face" />
      </figure>
    </div>
    <div class="column center has-text-left">
      <div class="container">
        <h1 class="title is-size-4-mobile ">MSc Student</h1>
        <h2 class="subtitle is-size-6-mobile">University of Konstanz</h2>
      </div>
    </div>
    <div class="column is-1" />
  </div>

  <div class="level is-marginless is-paddingless px-6 columns" id="third_hero">
    <div class="column is-1" />
    <!-- forwarind clicked icon -->
    <Logos size={"large"} on:clicked />
    <div class="column is-1" />
  </div>
</section>

<style>
  #hero {
    position: fixed;
    width: 100%;
    height: 150px;
    z-index: 100;
  }

  /* The progress container (grey background) */
  .progress-container {
    width: 100%;
    height: 8px;
    background: hsl(0, 0%, 96%);
  }

  /* The progress bar (scroll indicator) */
  .progress-bar {
    height: 8px;
    background: hsl(171, 100%, 41%);
    width: 0%;
  }

  nav {
    position: fixed;
    margin: 0;
    width: 100%;
    z-index: 1000;
  }

  #first_hero,
  #third_hero {
    position: absolute;
    width: 100%;
    margin: 0;
  }
</style>
