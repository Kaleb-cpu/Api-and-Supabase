import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
	let { data, error } = await supabase.from('customer').select() .eq('id', params.id);

	console.log(error);

	return {
		customer: data ?? ['error']
	};
}
