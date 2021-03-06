import React from "react";
import {Link} from "react-router-dom";

const SingleItem = props => (
  <div>
    <Link to={`item/${props.item.id}`}>
      <span id='product'>{`${props.item.name} ${props.item.price}`}</span>
    </Link>
  </div>
);

export default SingleItem;
