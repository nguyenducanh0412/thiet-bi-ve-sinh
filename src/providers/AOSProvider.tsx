"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      mirror: true,
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
