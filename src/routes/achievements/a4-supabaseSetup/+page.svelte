<script>
  export let data;
  console.log(data)
</script>

<h1>Countries</h1>
<ul>
  {#each data.countries as country}
  <li>{country.id}:{country.name}</li>
  {/each}
</ul>