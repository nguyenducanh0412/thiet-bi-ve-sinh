"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
