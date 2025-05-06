import { useEffect, useRef, useState } from "react";

export default function useClickOutside(initialValue: boolean) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialValue);
  const ref = useRef<HTMLElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });
  return { ref, isComponentVisible, setIsComponentVisible };
}
