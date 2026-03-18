const SUPABASE_URL = "https://tbriupljhrrnmzrnrlgi.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRicml1cGxqaHJybm16cm5ybGdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NTUzNTIsImV4cCI6MjA4OTMzMTM1Mn0.DGcGBRkz_ACKXmPREq5lh42WXdZbYe75O0AbFuTpN-U";

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
