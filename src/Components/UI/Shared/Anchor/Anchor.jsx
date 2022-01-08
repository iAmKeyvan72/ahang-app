import React from 'react';
import Link from 'next/link';

import classes from './Anchor.module.css';

const Anchor = (props) => {
  let classNames = [classes.a];

  if (props.className?.includes('btn')) {
    classNames.push(classes.btn);
    if (props.className.includes('curvedBtn')) {
      classNames.push(classes.curvedBtn);
    }
    if (props.className.includes('primary')) {
      classNames.push(classes.primary);
    }
    if (props.className.includes('secondary')) {
      classNames.push(classes.secondary);
    }
  }

  return (
    <Link href={props.href}>
      <a
        className={classNames.join(' ')}
        style={props.style}
        title={props.title}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default Anchor;
