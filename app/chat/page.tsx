import { createClient } from '@/utils/supabase/server';

export default async function Instruments() {
  const supabase = await createClient();
  const { data: messages, error } = await supabase.from("messages").select();

  return (
    <div className='flex items-center align-items w-full flex-col p-4'>
        <h1 className='text-2xl font-normal mb-5'>
            Chat App
        </h1>

        {messages ? 
            <pre>{JSON.stringify(messages, null, 2)}</pre> : 
            <pre>{JSON.stringify(error, null, 2)}</pre>
        }
    </div>
  );
}