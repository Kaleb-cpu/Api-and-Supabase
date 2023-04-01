import { supabase } from '$lib/supabaseClient';

export async function load() {
	let { data, error } = await supabase.from('customer').select();

	console.log(error);

	return {
		customer: data ?? ['error']
	};
}
