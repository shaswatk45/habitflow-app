const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://tbriupljhrrnmzrnrlgi.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRicml1cGxqaHJybm16cm5ybGdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NTUzNTIsImV4cCI6MjA4OTMzMTM1Mn0.DGcGBRkz_ACKXmPREq5lh42WXdZbYe75O0AbFuTpN-U";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function test() {
  console.log('Registering auth state change');
  supabase.auth.onAuthStateChange(async (event, session) => {
    console.log('Auth event:', event);
    if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') {
      console.log('Calling supabase.from inside onAuthStateChange...');
      // If this deadlocks, it will hang here
      const { data } = await supabase.from('habits').select('*').limit(1);
      console.log('Query finished inside auth state change:', data);
    }
  });

  console.log('Signing in anonymously or anything to trigger state change...');
  // We can just wait for INITIAL_SESSION
  setTimeout(() => {
    console.log('Done waiting.');
  }, 2000);
}

test();
