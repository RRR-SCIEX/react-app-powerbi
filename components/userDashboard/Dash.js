import React, { Fragment } from 'react';
import classes from "./Dash.module.css";
import Link from 'next/link';
const Dash= (props) => {
  return (
    <Fragment>
        <Link href={props.href} className={classes.dash}>
          <div className={classes.img}>
            <img src={props.src} alt="" />
          </div>
          <div>
            <p>{props.head}</p>
            <p>{props.details}</p>
          </div>
        </Link>
    </Fragment>
  )
}

export default Dash