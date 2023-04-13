<script lang="ts">
  import Weather from "./Weather.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>Here I will be calling some APIs</h1>

<Weather weatherRes={data.res ?? ""} />

<style>
  h1 {
    font-family: sans-serif;
    font-size: 2em;
    color: rebeccapurple;
    text-align: center;
  }
</style>
