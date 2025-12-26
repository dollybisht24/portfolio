import React, { useState, useEffect } from 'react';

// navigate programmatically
export function navigate(to) {
  if (window.location.pathname.replace(/\/+$/, '') === to.replace(/\/+$/, '')) return;
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

// Link component — uses history API to navigate without reload
export const Link = ({ to, children, onClick, ...rest }) => {
  const handleClick = (e) => {
    // allow open in new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    navigate(to);
    if (onClick) onClick(e);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

// Router — simple map of path -> component
export const Router = ({ routes }) => {
  const getPath = () => window.location.pathname.replace(/\/+$/, '') || '/';
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onPop = () => setPath(getPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const Comp = routes[path] || routes['*'] || null;
  return Comp ? <Comp /> : null;
};

export default Router;
