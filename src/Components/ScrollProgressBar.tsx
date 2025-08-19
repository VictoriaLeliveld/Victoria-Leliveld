import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScroll(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
  <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
    <div 
      className="h-1" 
      style={{ width: `${scroll}%`, backgroundColor: 'var(--blue-main)' }} 
    />
  </div>
);
};

export default ScrollProgressBar;