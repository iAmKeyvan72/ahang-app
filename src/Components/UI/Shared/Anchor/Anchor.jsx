import React from 'react';
import Link from 'next/link';

import classes from './Anchor.module.css';

const Anchor = (props) => {
  const { href, style, title, children, className } = props;

  let classNames = [classes.a];

  if (className?.includes('btn')) {
    classNames.push(classes.btn);
    if (className.includes('curvedBtn')) {
      classNames.push(classes.curvedBtn);
    }
    if (className.includes('primary')) {
      classNames.push(classes.primary);
    }
    if (className.includes('secondary')) {
      classNames.push(classes.secondary);
    }
  }

  return (
    <Link href={href}>
      <a className={classNames.join(' ')} style={style} title={title}>
        {children}
      </a>
    </Link>
  );
};

export default Anchor;
