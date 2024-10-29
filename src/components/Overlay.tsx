import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useEffect } from "react";

interface Props {
  children: ReactNode;
  isTransparent?: boolean;
}

const Overlay = ({ children, isTransparent = false }: Props) => {
  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className="z-[100] fixed inset-0 bg-overlay transition-opacity opacity-[0.15s] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ backgroundColor: isTransparent ? "transparent" : "" }}
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
