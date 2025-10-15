import React, { useState } from "react";
import { Link } from "react-router-dom";
export function Navbar(){
    const [search,setsearch]=useState("")
return(<>
<div className="navbar">

<Link>Top rated</Link>
<input type="text" placeholder="Search" value={search} onChange={e=> setsearch(e.target.value)} />
</div>
</>)

}