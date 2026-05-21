import { useEffect, useRef, useState } from "react";

function ScrollReveal({ children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={show ? "animate-fadeUp" : "opacity-0"}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
