const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

async function run() {
  console.log('Testing insert...');
  
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/habits`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({ name: 'Test from Node', category: 'Health', user_id: 'test-user-id' })
    });

    console.log('Status:', res.status);
    const json = await res.text();
    console.log('Response:', json);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

run();
