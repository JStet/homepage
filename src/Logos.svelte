<script>
  export let size;
  import { createEventDispatcher } from "svelte";

  import { onMount } from "svelte";

  const dispatch = createEventDispatcher();

  function handleClick(name) {
    dispatch("clicked", {
      name: name,
    });
  }
</script>

<span class="icon is-{size} mx-3" id="ansible">
  <img
    on:click={() => handleClick("ansible")}
    src="media/ansible-icon.svg"
    alt="Ansible Logo"
  />
</span>
<span class="icon is-{size}  mx-3" id="python">
  <img
    on:click={() => handleClick("python")}
    src="media/python-icon.svg"
    alt="Python Logo"
  />
</span>
<span class="icon is-{size} mx-3" id="raspberry">
  <img
    on:click={() => handleClick("raspberry")}
    src="media/raspberry.svg"
    alt="Raspberry Logo"
  />
</span>
<span class="icon is-{size} mx-3" id="js">
  <img
    on:click={() => handleClick("js")}
    src="media/javascript.svg"
    alt="Javascript Logo"
  />
</span>
<span class="icon is-{size} mx-3" id="R">
  <img on:click={() => handleClick("R")} src="media/r.svg" alt="R Logo" />
</span>
<span class="icon is-{size} mx-3" id="bash">
  <img
    on:click={() => handleClick("bash")}
    src="media/bash-shell-icon.svg"
    alt="Bash Logo"
  />
</span>

<style>
  img:hover {
    cursor: pointer;
  }
</style>
