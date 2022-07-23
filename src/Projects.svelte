<script>
  import Card from "./Card.svelte";
  import { ProjectsData } from "./data.js";

  export let selectedTopic = "";

  // thanks to https://svelte.dev/repl/e67e1a90ef3945ec988bf39f6a10b6b3?version=3.32.3

  // Query results
  let filteredProjects = [];

  $: if (selectedTopic) getProjectsByTopic();
  $: console.log(filteredProjects, selectedTopic);

  const getProjectsByTopic = () => {
    if (selectedTopic === "") {
      return (filteredProjects = []);
    }
    return (filteredProjects = ProjectsData.filter((project) =>
      project.topic.includes(selectedTopic)
    ));
  };
</script>

{#if filteredProjects.length === 0}
  <div id="placeholder" class="column">
    <p class="is-size-5 is-size-6-mobile">
      Currently not much to show. I will populate this in the future.
    </p>
  </div>
{:else}
  {#each filteredProjects as { id, topic, text, title, href }}
    <Card {text} {title} {href} />
  {/each}
{/if}

<style>
  #placeholder {
    height: 100%;
  }
</style>
