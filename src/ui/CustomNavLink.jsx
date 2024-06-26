import { NavLink } from "react-router-dom"
export default function CustomNavLink ({ children, to }) {
    //const navlinkClass = "flex items-center gap-x-2 hover:bg-primary-100/70 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300"
    const navlinkClass = "flex gap-x-1 p-1 w-48 rounded-md transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500"
    return (
        <li>
            <NavLink
                to={to}         
                className={
                    ({isActive}) => isActive ? 
                    `${navlinkClass} text-purple-700` : 
                    `${navlinkClass} text-purple-500`}
            >
                ⁘ {children}
            </NavLink>
        </li>
    )
}