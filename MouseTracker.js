import React, { useEffect } from 'react';

const MouseTracker = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Move your mouse around!</h2>
    </div>
  );
};

export default MouseTracker;
