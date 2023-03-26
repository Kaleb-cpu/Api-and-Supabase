export const load = async ({ fetch, params }) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
	const todosData = await response.json();

	return {
		todo: todosData
	};
};
