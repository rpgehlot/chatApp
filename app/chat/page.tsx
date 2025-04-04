import { createClient } from '@/utils/supabase/server';

export default async function Instruments() {
  const supabase = await createClient();
  const { data: messages } = await supabase.from("messages").select();

  return <pre>{JSON.stringify(messages, null, 2)}</pre>
}