import React from 'react'
import { Link } from "gatsby"
// import Components from '../../components.js';

const Navitem = (props) => (
  <li>
    <Link to={props.url} activeClassName="active">{props.title}</Link>
    {props.children && 
      <ul>
        {props.children.map((item)  => {
          return <Navitem key={item._uid} url={item.link.cached_url} title={item.title} children={item.sub_items}/>
        })}
      </ul>
    }
  </li>
)

export default Navitem
