<script>
  export let data;
  console.log(data)
</script>

<h1>Office Employees</h1>
<ul>
  {#each data.office_employee as employee}
  <li>{employee.first_name} {employee.last_name}: Birth Date: {employee.birth_date}: Gender: {employee.gender}: Salary {employee.salary} </li>
  {/each}
</ul>

<style>
  ul{
    display: grid;
    row-gap: 1.5em;
  }
  li{
    font-size: 1.5em;
  }
</style>