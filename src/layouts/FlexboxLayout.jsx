/* eslint-disable react/prop-types */

import '../styles/layouts/flexbox.css';

function FlexboxLayout({ children, direction }) {
  const layoutClassName =
    direction === 'column' ? 'flexbox-layout-column' : 'flexbox-layout-row';
  return <div className={layoutClassName}>{children}</div>;
}

export default FlexboxLayout;
