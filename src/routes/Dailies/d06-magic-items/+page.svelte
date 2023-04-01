<script>
  export let data;
  console.log(data)
</script>

<h1>Magic Items</h1>
{#if data.magicItems.length > 0}
<ul>
  {#each data.magicItems as item}
  <li>{item.first_name}</li>
  {/each}
</ul>
{:else}
<p>No items found</p>
{/if}
<style>
  ul{
    display: grid;
    row-gap: 1.5em;
  }
  li{
    font-size: 1.5em;
  }
</style>