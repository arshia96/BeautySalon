import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useDarkMode } from '../context/DarkModeContext'

function DarkModeToggle() {
  const {isDarkMode, toggleDarkMode} = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
        {
            isDarkMode ? (
                <HiOutlineSun className='hi-icon text-purple-700 dark:text-purple-800' />
        ) : (
                <HiOutlineMoon className='hi-icon text-purple-700 dark:text-purple-800' />
        )}
    </button>
  )
}

export default DarkModeToggle