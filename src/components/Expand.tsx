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
  const [showFirst, setShowFirst] = useState(true);
  const [expand, setExpand] = useState(false);
  const [blur, setBlur] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.3, // Trigger when 30% of the component is visible
  });

  // Handle visibility and reset
  useEffect(() => {
    if (isInView && !isVisible) {
      // Just came into view - trigger animation start
      setIsVisible(true);
    } else if (!isInView && isVisible) {
      // Just left view - hide everything immediately
      setIsVisible(false);
      setShowFirst(false);
      setExpand(false);
      setBlur(false);
      setShowSecond(false);
      setShowLine1(false);
      setShowLine2(false);
      setShowLine3(false);
    }
  }, [isInView, isVisible]);

  // Trigger animations when becomes visible
  useEffect(() => {
    if (!isVisible) return;

    // Clear any existing timers
    const timers: number[] = [];

    // Small delay to ensure component is ready
    const startTimer = setTimeout(() => {
      setShowFirst(true);
      
      const expandTimer = setTimeout(() => {
        setExpand(true);
      }, 1);
      timers.push(expandTimer);

      const blurTimer = setTimeout(() => {
        setBlur(true);
      }, 3000);
      timers.push(blurTimer);

      const switchTimer = setTimeout(() => {
        setShowFirst(false);
        setShowSecond(true);
        
        // Line 1 appears
        const line1Timer = setTimeout(() => {
          setShowLine1(true);
        }, 2000);
        timers.push(line1Timer);
        
        // Line 2 appears
        const line2Timer = setTimeout(() => {
          setShowLine2(true);
        }, 4000);
        timers.push(line2Timer);
        
        // Line 3 appears
        const line3Timer = setTimeout(() => {
          setShowLine3(true);
        }, 6000);
        timers.push(line3Timer);
        
      }, 5000);
      timers.push(switchTimer);
    }, 100);

    timers.push(startTimer);

    // Cleanup function
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isVisible]);

  // Don't render anything if not visible
  if (!isVisible && !isInView) {
    return (
      <Stack
        ref={containerRef}
        sx={{
          backgroundColor: "#0B0D12",
          width: "100vw",
          height: "100vh",
          position: "relative",
        }}
      />
    );
  }

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
        overflow: "hidden",
      }}
    >
      {/* First text - expands and blurs */}
      {(showFirst || expand || blur) && (
        <motion.div
          initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          animate={{
            opacity: showFirst ? (blur ? 0 : 1) : 0,
            scale: expand ? 5 : 1,
            filter: blur ? "blur(20px)" : "blur(0px)",
          }}
          transition={{ duration: 6, ease: "easeInOut" }}
          style={{
            position: "absolute",
            pointerEvents: "none",
          }}
        >
          <Typography
            variant={isMobile ? "h3" : "h1"}
            sx={{
              fontSize: isMobile ? "3rem" : "5rem",
              color: "white",
            }}
          >
            Where creativity expands
          </Typography>
        </motion.div>
      )}

      {/* Container for second text and lines */}
      {(showSecond || showLine1 || showLine2 || showLine3) && (
        <Stack
          sx={{
            position: "absolute",
            alignItems: "center",
            bgcolor: 'transparent'
          }}
        >
          {/* Second text */}
          {showSecond && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showSecond ? 1 : 0 }}
              transition={{ duration: 4, ease: "easeInOut" }}
              style={{ marginBottom: "32px" }}
            >
              <Typography
                variant={isMobile ? "h3" : "h1"}
                sx={{
                  fontSize: isMobile ? "3rem" : "5rem",
                  color: "white",
                  pointerEvents: "none",
                }}
              >
                and connection begins...
              </Typography>
            </motion.div>
          )}

          <Stack spacing={2} sx={{ alignItems: "center", bgcolor: 'transparent' }}>
            {/* Line 1 */}
            {showLine1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: showLine1 ? 1 : 0,
                  y: showLine1 ? 0 : 20,
                }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              >
                <Typography
                  variant={isMobile ? "h5" : "h3"}
                  sx={{
                    fontSize: isMobile ? "1.2rem" : "2rem",
                    color: "rgba(255,255,255,0.9)",
                    textAlign: "center",
                  }}
                >
                  Between talent and opportunity.
                </Typography>
              </motion.div>
            )}

            {/* Line 2 */}
            {showLine2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: showLine2 ? 1 : 0,
                  y: showLine2 ? 0 : 20,
                }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              >
                <Typography
                  variant={isMobile ? "h5" : "h3"}
                  sx={{
                    fontSize: isMobile ? "1.2rem" : "2rem",
                    color: "rgba(255,255,255,0.9)",
                    textAlign: "center",
                  }}
                >
                  Between brands and culture.
                </Typography>
              </motion.div>
            )}

            {/* Line 3 */}
            {showLine3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: showLine3 ? 1 : 0,
                  y: showLine3 ? 0 : 20,
                }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              >
                <Typography
                  variant={isMobile ? "h5" : "h3"}
                  sx={{
                    fontSize: isMobile ? "1.2rem" : "2rem",
                    color: "rgba(255,255,255,0.9)",
                    textAlign: "center",
                  }}
                >
                  Between global vision and China.
                </Typography>
              </motion.div>
            )}
          </Stack>
        </Stack>
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

export const Expand = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
};