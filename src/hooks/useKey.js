import { useEffect } from "react";

export const useKey = (keycode, callback) => {
  useEffect(() => {
    const eventHandler = (e) => {
      if (e.code.toLowerCase() === keycode.toLowerCase()) {
        callback();
      }
    };

    document.addEventListener("keydown", eventHandler);

    return () => {
      document.removeEventListener("keydown", eventHandler);
    };
  }, [callback, keycode]);
};
