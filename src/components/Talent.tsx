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
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  
  const fullText1 = "Developing talent that resonates,";
  const fullText2 = "not just translates";
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.5,
  });

  // Reset animation when component leaves view
  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
      
      // Reset text when starting new animation
      setDisplayedText1("");
      setDisplayedText2("");
    } else {
      setHasAnimated(false);
      setDisplayedText1("");
      setDisplayedText2("");
    }
  }, [isInView]);

  // Typewriter effect for first line
  useEffect(() => {
    if (!hasAnimated) return;

    let index = 0;
    const timer1 = setInterval(() => {
      if (index <= fullText1.length) {
        setDisplayedText1(fullText1.slice(0, index));
        index++;
      } else {
        clearInterval(timer1);
        
        // Start second line after first is complete
        let index2 = 0;
        const timer2 = setInterval(() => {
          if (index2 <= fullText2.length) {
            setDisplayedText2(fullText2.slice(0, index2));
            index2++;
          } else {
            clearInterval(timer2);
          }
        }, 100);
        
        return () => clearInterval(timer2);
      }
    }, 50);

    return () => clearInterval(timer1);
  }, [hasAnimated]);

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
        transition={{ duration: 4, ease: "easeOut" }}
      >
        <Stack spacing={2} sx={{ alignItems: "center" }} bgcolor={"transparent"}>
          <Typography
            variant={isMobile ? "h3" : "h1"}
            sx={{
              fontSize: isMobile ? "2.5rem" : "5rem",
              color: "white",
              textAlign: "center",
              minHeight: isMobile ? "3.5rem" : "6rem",
            }}
          >
            {displayedText1}
            {displayedText1.length < fullText1.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                style={{ marginLeft: "2px" }}
              >
                |
              </motion.span>
            )}
          </Typography>
          
          <Typography
            variant={isMobile ? "h3" : "h1"}
            sx={{
              fontSize: isMobile ? "2.5rem" : "5rem",
              color: "white",
              textAlign: "center",
              minHeight: isMobile ? "3.5rem" : "6rem",
            }}
          >
            {displayedText2}
            {displayedText1.length === fullText1.length && 
             displayedText2.length < fullText2.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                style={{ marginLeft: "2px" }}
              >
                |
              </motion.span>
            )}
          </Typography>
        </Stack>
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

export const Talent = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
};