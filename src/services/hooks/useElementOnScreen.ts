import { useEffect, useRef, useState } from "react";

const useElementOnScreen = (
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  }
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [options]);

  return { containerRef, isVisible };
};

export default useElementOnScreen;
