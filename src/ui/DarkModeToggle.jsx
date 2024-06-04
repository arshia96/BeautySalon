import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useDarkMode } from '../context/DarkModeContext'

function DarkModeToggle() {
  const {isDarkMode, toggleDarkMode} = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
        {
            isDarkMode ? (
                <HiOutlineSun className='hi-icon text-primary-900' />
        ) : (
                <HiOutlineMoon className='hi-icon text-primary-900' />
        )}
    </button>
  )
}

export default DarkModeToggle