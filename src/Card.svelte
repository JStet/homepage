<script>
  export let title;
  export let text;
  export let href;
</script>

<div class="column is-half ">
  <a {href}>
    <div class="card has-background-light">
      <div class="card-content">
        <div class="content">
          <span class="icon-text has-text-info  pb-2">
            <span class="icon">
              <i class="fa-solid fa-link" />
            </span>
            <span class="is-size-4">{title}</span>
          </span>
          <p class="is-size-6-mobile">{@html text}</p>
        </div>
      </div>
    </div>
  </a>
</div>

<style>
  .card {
    height: 100%;
  }
</style>
