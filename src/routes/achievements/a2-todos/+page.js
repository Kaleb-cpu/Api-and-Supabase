export const load = async ({ fetch }) => {
const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
const todosData = await response.json();

	return {
		todos: todosData
	};
};
