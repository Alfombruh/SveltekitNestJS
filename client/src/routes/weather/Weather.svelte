<script lang="ts">
  export let weatherRes: string;
</script>

<div>
  {#if weatherRes === ''}
    <h2>rea is empty</h2>
  {:else}
    <h2>{@html weatherRes}</h2>
  {/if}
</div>

<style>
  h2 {
    text-align: center;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: darkorchid;
  }
</style>
