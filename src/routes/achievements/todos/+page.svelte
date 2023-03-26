<script>
  export let data;
</script>

<h1>Todo List</h1>
<ul>
  {#each data.todos as todo}
  <a href="/achievements/todos/{todo.id}">
    <article>
      <h2>{todo.id}</h2>
      <h3>{todo.title}</h3>
      <h4>{todo.completed}</h4>
    </article>
  </a>
  {/each}
  </ul>

  <style>
    a{

      text-decoration: none;
    }
    article{
      color: black;
      border: 3px solid darkgrey;
      width: max-content;
      margin-bottom: 1em;
      display: inline-block;
    }
  </style>



