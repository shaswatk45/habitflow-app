const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

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
} // here I might be able to extend

test(); //not a deadlock

//cyber mode
//stand down feature