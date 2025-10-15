import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
export function Navbar(){
    const [search,setsearch]=useState("")
return(<>
<div className="navbar">

<p><Link>Top rated</Link></p>
<p>
    <Link>My likes</Link>
</p>
<input type="text" placeholder="Search" value={search} onChange={e=> setsearch(e.target.value)} />
</div>
</>)

}