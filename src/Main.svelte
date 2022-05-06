<script>
  import Logos from "./Logos.svelte";
  import Projects from "./Projects.svelte";

  export let topic;

  function handleClicked(event) {
    topic = event.detail.name;
  }

  $: topic = topic;
</script>

<div id="home_anker" class="is-hidden-touch" />
<div class="columns is-mobile" id="home">
  <div class="column is-1" />
  <div class="column is-hidden-touch" />
  <div class="column">
    <div class="content pt-5 is-size-7-mobile">
      <h2 class="is-size-3 is-size-4-mobile">About me</h2>
      <p class="is-size-4 is-size-5-mobile">
        After completing my Bachelor's degree in Governance and Public Policy at
        the <a href="https://www.uni-passau.de/">University of Passau</a>, I
        worked for one year at the
        <a
          href="https://www.pik-potsdam.de/de/institut/futurelabs/sozialer-metabolismus-klimafolgen"
        >
          Potsdam Institute for Climate Impact Research</a
        >. Currently, I am studying Social and Economic Data Science at the
        <a href="https://www.uni-konstanz.de/">University of Konstanz</a>, where
        I also work as a student assistant at the
        <a href="https://www.polver.uni-konstanz.de/cdm/"
          >Center for Data and Methods</a
        >.
      </p>
      <p class="is-size-4 is-size-5-mobile">
        In my free time, I volunteer with <a href="https://correlaid.org/correlaidx/konstanz/"
          >CorrelAid</a
        >
        and grow vegetables in the
        <a href="https://www.instagram.com/campusgemuesekonstanz/"
          >university garden</a
        >.
      </p>
      <p class="is-size-6">
        To find out more, follow the links in the footer or
        <a href="mailto:mail@jstet.net">contact me</a>.
      </p>
    </div>
  </div>
  <div class="column is-1" />
</div>

<div class="column is-1 is-hidden-mobile" />

<!-- Icon Hero for mobile-->
<div
  class="columns has-background-light is-hidden-desktop mt-5"
  id="projects_hero_mobile"
>
  <div class="column is-1" />
  <div class=" column has-text-centered mb-0">
    <!-- getting clicked logo from desktop hero -->
    <Logos size={"medium"} on:clicked={handleClicked} />
  </div>
  <div class="column is-1" />
</div>
<!--  -->
<div id="projects_anker" class="is-hidden-touch" />
<div class="columns is-mobile " id="projects">
  <div class="column is-1 " />
  <div class="column is-hidden-touch" />
  <div class="column is-5-desktop">
    <div class="content is-size-7-mobile pt-5">
      <h2 class="is-size-3 is-size-4-mobile">Projects</h2>
      <p class="is-size-4 is-size-5-mobile">
        Click on the icons above to select a topic.
      </p>

      <div class="columns is-multiline">
        <Projects selectedTopic={topic} />
      </div>
    </div>
  </div>
  <div class="column is-1" />
</div>
