import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LiquidMetalButton } from './components/ui/liquid-metal-button'

function mountButton(rootId: string, buttonId: string, label: string) {
  const container = document.getElementById(rootId)
  if (container) {
    createRoot(container).render(
      <StrictMode>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <LiquidMetalButton 
            label={label} 
            onClick={() => document.getElementById(buttonId)?.click()} 
          />
        </div>
      </StrictMode>,
    )
  }
}

// Mount the 4 target buttons
mountButton('react-btnSignIn-root', 'btnSignIn', 'Sign In')
mountButton('react-btnSignUp-root', 'btnSignUp', 'Sign Up')
mountButton('react-addHabitBtn-root', 'addHabitBtn', 'Add Habit')
mountButton('react-settingsAddHabitBtn-root', 'settingsAddHabitBtn', 'Add New Habit')
