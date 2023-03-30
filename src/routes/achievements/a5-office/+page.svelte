<script>
  export let data;
  console.log(data)
</script>

<h1>Office Employees</h1>
<ul>
  {#each data.office_employee as employee}
  <li>{employee.first_name} {employee.last_name}: {employee.birth_date}: {employee.gender}: {employee.salary} </li>
  {/each}
</ul>