<script lang="ts">
  import type { LayoutData } from "./weather/$types";

  export let data: LayoutData;
</script>

<nav>
    <a href="/">home</a>
    <a href="/api">api</a>
    <a href="/backend">backend</a>
    <a href="/ionmi">ionmi</a>
    <a href="/test">test</a>
    <a href="/weather">weather</a>
  </nav>

<slot />

<style>
 nav {
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color:purple;
    border-radius: 6px;
    max-width: 320px;
    margin: auto;
 }
  a {
    font-family: 'Courier New', Courier, monospace;
    color:beige;
    text-align: center;
  }
</style>
