import { NavLink } from "react-router-dom"
export default function CustomHeaderNavLink ({ children, to }) {
    const navlinkClass = 
    "flex items-center gap-x-2 border-y border-purple-100/10 hover:border-y hover:border-purple-100/70 hover:text-purple-900 " + 
    "px-2 py-1.5 rounded-lg transition-all duration-300 dark:text-purple-700 dark:hover:text-purple-500"
    return (
        <li>
            <NavLink
                to={to}         
                className={
                    ({isActive}) => isActive ? 
                    `${navlinkClass} bg-purple-100/80 text-purple-800 dark:text-purple-900` : 
                    `${navlinkClass} text-purple-600`
                }
            >
                {children}
            </NavLink>
        </li>
    )
}