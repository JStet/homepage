<script>
  export let src;
  export let alt;
  export let text;
  export let href;
</script>

<div class="column is-half">
  <div class="card has-background-light" id="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <a href={href}><img {src} {alt} /></a>
      </figure>
    </div>
    <div class="card-content">
      <div class="content has-text-centered">
        <h4>{text}</h4>
      </div>
    </div>
  </div>
</div>
