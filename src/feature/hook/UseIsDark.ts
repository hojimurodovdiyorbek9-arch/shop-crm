// hook/UseIsDark.ts
import { useEffect, useState } from "react";

function checkIsDark() {
  return document.querySelector(".dark") !== null;
}

export function useIsDark() {
  const [isDark, setIsDark] = useState(checkIsDark);

  useEffect(() => {
    const update = () => setIsDark(checkIsDark());

    // DOM daraxtidagi istalgan joyda class o'zgarishini kuzatish
    const observer = new MutationObserver(update);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
      subtree: true,
    });

    // Ehtiyot chorasi: darhol qayta tekshirish
    update();

    return () => observer.disconnect();
  }, []);

  return isDark;
}
