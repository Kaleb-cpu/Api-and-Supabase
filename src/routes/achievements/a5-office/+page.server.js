import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('office_employee').select();
	return {
		office_employee: data ?? ['error']
	};
}
