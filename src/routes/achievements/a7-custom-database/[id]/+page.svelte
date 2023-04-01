<script>
  export let data;
</script>


{#if data.customer.id}
<h1>{data.customer.customer_name}</h1>
<h2>Customer info:</h2>
<p>{data.customer.customer_name} is {data.customer.age} years old and his favourite hobby is {data.customer.hobby}</p>
{:else}
<h1>Customer not found</h1>
{/if}