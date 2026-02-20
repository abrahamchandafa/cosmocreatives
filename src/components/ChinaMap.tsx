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
  const [isVisible, setIsVisible] = useState(false);
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.3,
  });

  // Handle visibility and reset
  useEffect(() => {
    if (isInView && !isVisible) {
      // Just came into view - trigger animation
      setIsVisible(true);
      setHasAnimated(true);
    } else if (!isInView && isVisible) {
      // Just left view - reset everything
      setIsVisible(false);
      setHasAnimated(false);
    }
  }, [isInView, isVisible]);

  return (
    <Stack
      ref={containerRef}
      sx={{
        backgroundImage: isMobile ? 'url("/chn3.png")' : 'url("/chn1.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {hasAnimated && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ 
            opacity: 1, 
            filter: "blur(0px)" 
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Typography
            variant={isMobile ? "h3" : "h1"}
            sx={{
              fontSize: isMobile ? "3rem" : "5rem",
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              textAlign: "center",
              padding: "20px",
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: "8px",
            }}
          >
            From Global Narratives to Local Resonance
          </Typography>
        </motion.div>
      )}
    </Stack>
  );
};

const MobileView = () => {
  return <HomeContent isMobile={true} />;
};

const DesktopView = () => {
  return <HomeContent isMobile={false} />;
};

export const ChinaMap = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
};