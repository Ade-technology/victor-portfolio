import { motion } from "framer-motion";

interface VALogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-16 h-16 text-2xl",
};

const VALogo = ({ size = "md", className = "" }: VALogoProps) => {
  return (
    <motion.div
      className={`${sizeMap[size]} rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground select-none ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      VA
    </motion.div>
  );
};

export default VALogo;
