import { useEffect, useRef, useState } from 'react';

function LazyImage({ src, alt, className }) {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isInView ? (
        <img src={src} alt={alt} className={className}   width={400}  // specify actual dimensions
        height={300}/>
      ) : (
        // Optional: Add a placeholder or loading spinner
        <div className="animate-pulse bg-gray-200 w-full h-full" />
      )}
    </div>
  );
}

export default LazyImage;
