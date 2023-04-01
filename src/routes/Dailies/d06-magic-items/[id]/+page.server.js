import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data, error } = await supabase.from('magic_item').select();
	return {
		magicItem: data ?? ['error']
	};
}
