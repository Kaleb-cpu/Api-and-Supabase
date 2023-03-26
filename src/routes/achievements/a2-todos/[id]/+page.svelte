<script>
  export let data;
</script>

<main>
    {#if data.todo.id === 1}
      <p>This ID is number 1</p>
      {:else}
      <p>This card is not ID: 1, Please select the first card!!</p>
      {/if}
</main> 

<style>
  main{
    text-align: center;
    font-size: 2em;
  }
</style>