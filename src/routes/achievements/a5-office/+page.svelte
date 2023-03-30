<script>
  export let data;
  console.log(data)
</script>

<h1>Office Employees</h1>
<ul>
  {#each data.office_employee as employee}
  <li>{employee.first_name}</li>
  {/each}
</ul>