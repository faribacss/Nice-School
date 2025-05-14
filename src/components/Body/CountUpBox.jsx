import React, { useEffect, useState } from "react";
function CountUpBox({ id, label, targetNumber }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (!element) return;
      const position = element.getBoundingClientRect();

      if (position.top < window.innerHeight && !hasAnimated) {
        setHasAnimated(true);
        let current = 0;
        const interval = setInterval(() => {
          current += Math.ceil(targetNumber / 40);
          if (current >= targetNumber) {
            clearInterval(interval);
            setCount(targetNumber);
          } else {
            setCount(current);
          }
        }, 30);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated, id, targetNumber]);

  return (
    <div className="state-item" id={id} data-aos="fade-up">
      <span>{count}</span>
      <p>{label}</p>
    </div>
  );
}

export default CountUpBox;
