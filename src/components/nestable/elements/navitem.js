import React from 'react'
import { Link } from 'gatsby'
// import Components from '../../components.js';

const Navitem = ({ title, url, childItems }) => (
  <li>
    <Link to={url} activeClassName="active">
      {title}
    </Link>
    {childItems && (
      <ul>
        {childItems.map(item => (
          <Navitem key={item._uid} url={item.link.cached_url} title={item.title} childItems={item.sub_items} />
        ))}
      </ul>
    )}
  </li>
)

export default Navitem
