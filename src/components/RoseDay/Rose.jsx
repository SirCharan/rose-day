import { forwardRef } from 'react';

const Rose = forwardRef(function Rose({ id, className = '', isExtra = false, style = {} }, ref) {
  return (
    <div
      ref={ref}
      id={id}
      className={`rose-container ${isExtra ? 'extra' : ''} ${className}`.trim()}
      style={style}
    >
      <div className="rose-head">
        <div className="shine" />
        <div className="petal-swirl" />
      </div>
      <div className="stem" />
      <div className="leaf left" />
      <div className="leaf right" />
    </div>
  );
});

export default Rose;
