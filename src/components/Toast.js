import React from 'react';
import M from 'materialize-css';

export default function Toast({ label, text }) {
  const showToast = () => {
    M.toast({ html: `${text}` });
  };

  return (
    <div className="center">
      <a
        href
        onClick={showToast}
        className="waves-effect waves-light btn red darken-4"
      >
        {label}
      </a>
    </div>
  );
}
