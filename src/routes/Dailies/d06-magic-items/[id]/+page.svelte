<script>
  export let data;
  console.log(data)
</script>

{#if data.magicItems.length > 0}
<h1>{item.name}</h1>
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