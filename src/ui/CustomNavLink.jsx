import { NavLink } from "react-router-dom"
export default function CustomNavLink ({ children, to }) {
    //const navlinkClass = "flex items-center gap-x-2 hover:bg-primary-100/70 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300"
    const navlinkClass = "flex items-center gap-x-2 hover:border-y-2 hover:border-primary-100/70 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300"
    return (
        <li>
            <NavLink
                to={to}         
                className={
                    ({isActive}) => isActive ? 
                    `${navlinkClass} bg-primary-100/80 text-primary-900` : 
                    `${navlinkClass} text-secondary-600`}
            >
                {children}
            </NavLink>
        </li>
    )
}