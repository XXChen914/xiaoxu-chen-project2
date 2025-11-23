import { NavLink } from "react-router";

export default function NavBar() {
    return (<div>
        <span>
            <NavLink to={'/'}>
                Home 
            </NavLink>
            
        </span>
        <span>
            <NavLink to={'/rules'}>
                Rules 
            </NavLink>
        </span>
        <span>
            <NavLink to={'/credits'}>
                credits
            </NavLink>
        </span>


    </div>)
}