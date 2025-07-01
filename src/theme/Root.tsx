import React, { useState, useEffect, type ReactNode } from 'react';

const Loader = () => (
  <div className="loader-container">
    <div className="spinner"></div>
  </div>
);

export default function Root({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('hasLoaded')) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hasLoaded', 'true');
    }, 1000); // 动画持续1秒

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return children;
} 