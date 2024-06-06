import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useDarkMode } from '../context/DarkModeContext'

function DarkModeToggle() {
  const {isDarkMode, toggleDarkMode} = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
        {
            isDarkMode ? (
                <HiOutlineSun className='hi-icon text-purple-700' />
        ) : (
                <HiOutlineMoon className='hi-icon text-purple-700' />
        )}
    </button>
  )
}

export default DarkModeToggle