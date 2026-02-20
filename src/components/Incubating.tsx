import { Stack } from "@mui/system";
import { useIsMobile } from "../hooks/useIsMobile";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HomeContentProps {
  isMobile: boolean;
}

const HomeContent = ({ isMobile }: HomeContentProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.3,
  });

  // Reset animation when component leaves view
  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    } else {
      setHasAnimated(false);
    }
  }, [isInView]);

  return (
    <Stack
      ref={containerRef}
      sx={{
        backgroundColor: "#0B0D12",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={hasAnimated ? { 
          opacity: 1, 
          filter: "blur(0px)" 
        } : { 
          opacity: 0, 
          filter: "blur(20px)" 
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Typography
          variant={isMobile ? "h3" : "h1"}
          sx={{
            fontSize: isMobile ? "2.5rem" : "5rem",
            color: "white",
            textAlign: "center",
            maxWidth: "90%",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          Incubating talents and brands for China synergies
        </Typography>
      </motion.div>
    </Stack>
  );
};

const MobileView = () => {
  return <HomeContent isMobile={true} />;
};

const DesktopView = () => {
  return <HomeContent isMobile={false} />;
};

export const Incubating = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
};