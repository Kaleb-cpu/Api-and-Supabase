<script>
  export let data;
</script>

<h1>Magic Items</h1>
{#if data.customer}
<ul>
  {#each data.customer as item}
    <li><a href="/a7-custom-database/{item.id}">{item.customer_name}</a></li>
  {/each}
</ul>
{:else}
<p>No items found</p>
{/if}