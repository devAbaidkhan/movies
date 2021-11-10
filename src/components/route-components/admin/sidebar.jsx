import {Link} from "react-router-dom";
import React from "react";

const Sidebar = props=>{

    return(
        <ul>
            <li>
                <Link to="/admin/post" path="">Posts </Link>
            </li>
            <li>
                <Link to="/admin/user" path="">Users </Link>
            </li>
        </ul>
    );
}
export default Sidebar;