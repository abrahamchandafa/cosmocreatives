import { Stack } from "@mui/system";
import { useIsMobile } from "../hooks/useIsMobile";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const expandTimer = setTimeout(() => {
      setExpand(true);
    }, 1);

    const blurTimer = setTimeout(() => {
      setBlur(true);
    }, 3000); // Slower blur start

    const switchTimer = setTimeout(() => {
      setShowFirst(false);
      setShowSecond(true);
      
      // Line 1 appears (slower)
      setTimeout(() => {
        setShowLine1(true);
      }, 2000); // Increased from 1500ms
      
      // Line 2 appears (slower)
      setTimeout(() => {
        setShowLine2(true);
      }, 4000); // Increased from 2500ms
      
      // Line 3 appears (slower)
      setTimeout(() => {
        setShowLine3(true);
      }, 6000); // Increased from 3500ms
      
    }, 5000); // Increased from 4000ms

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(blurTimer);
      clearTimeout(switchTimer);
    };
  }, []);

  return (
    <Stack
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
      <Typography
        variant={isMobile ? "h3" : "h1"}
        sx={{
          fontSize: isMobile ? "3rem" : "5rem",
          color: "white",
          position: "absolute",
          transition: "all 6s ease-in-out", // Slower transition
          transform: expand ? "scale(5)" : "scale(1)",
          opacity: showFirst ? (blur ? 0 : 1) : 0,
          filter: blur ? "blur(20px)" : "blur(0px)",
          pointerEvents: "none",
        }}
      >
        Where creativity expands
      </Typography>

      {/* Container for second text and lines */}
      <Stack
        sx={{
          position: "absolute",
          alignItems: "center",
          bgcolor: 'transparent'
        }}
      >
        {/* Second text */}
        <Typography
          variant={isMobile ? "h3" : "h1"}
          sx={{
            fontSize: isMobile ? "3rem" : "5rem",
            color: "white",
            opacity: showSecond ? 1 : 0,
            transition: "opacity 4s ease-in-out", // Slower fade in
            pointerEvents: "none",
            mb: 4,
          }}
        >
          and connection begins...
        </Typography>

        <Stack spacing={2} sx={{ alignItems: "center", bgcolor: 'transparent' }}>
          {/* Line 1 */}
          <Typography
            variant={isMobile ? "h5" : "h3"}
            sx={{
              fontSize: isMobile ? "1.2rem" : "2rem",
              color: "rgba(255,255,255,0.9)",
              opacity: showLine1 ? 1 : 0,
              transform: showLine1 ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 2.5s ease-in-out, transform 2.5s ease-in-out", // Slower
              textAlign: "center",
            }}
          >
            Between talent and opportunity.
          </Typography>

          {/* Line 2 */}
          <Typography
            variant={isMobile ? "h5" : "h3"}
            sx={{
              fontSize: isMobile ? "1.2rem" : "2rem",
              color: "rgba(255,255,255,0.9)",
              opacity: showLine2 ? 1 : 0,
              transform: showLine2 ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 2.5s ease-in-out, transform 2.5s ease-in-out", // Slower
              textAlign: "center",
            }}
          >
            Between brands and culture.
          </Typography>

          {/* Line 3 */}
          <Typography
            variant={isMobile ? "h5" : "h3"}
            sx={{
              fontSize: isMobile ? "1.2rem" : "2rem",
              color: "rgba(255,255,255,0.9)",
              opacity: showLine3 ? 1 : 0,
              transform: showLine3 ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 2.5s ease-in-out, transform 2.5s ease-in-out", // Slower
              textAlign: "center",
            }}
          >
            Between global vision and China.
          </Typography>
        </Stack>
      </Stack>
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