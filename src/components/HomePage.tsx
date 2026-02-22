import { Stack } from "@mui/system";
import { useIsMobile } from "../hooks/useIsMobile";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ThreeDBackground } from "./ThreeDBackground";

// Define props interfaces
interface CyclingButtonProps {
  isMobile: boolean;
}

interface HomeContentProps {
  isMobile: boolean;
}

type contentItems = {
  text: string;
};

const CyclingButton = ({ isMobile }: CyclingButtonProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const items: contentItems[] = [
    { text: "artists" },
    { text: "brands" },
    { text: "storytellers" },
    { text: "creators" },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  return (
    <Button
      variant="outlined"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      sx={{
        height: isMobile ? "30px" : "35px",
        width: isMobile ? "90px" : "150px",
        fontSize: isMobile ? "0.9rem" : "1.3rem",
        opacity: fade ? 1 : 0,
        transition: "opacity 0.5s ease-in-out, border-color 0.3s, color 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      {items[currentIndex].text}
    </Button>
  );
};
const HomeContent = ({ isMobile }: HomeContentProps) => {
  return (
    <Stack
      sx={{
        backgroundColor: "#0B0D12",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3D Background */}
      <ThreeDBackground isMobile={isMobile} />

      {/* Content overlay */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          /*backdropFilter: "blur(5px)",
          background: "rgba(0,0,0,0.3)",
          */
          background: "transparent",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant={isMobile ? "h3" : "h1"}
          sx={{
            fontSize: isMobile ? "5rem" : "10rem",
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          COSMO
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={isMobile ? 1 : 1}
          bgcolor={"transparent"}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{
              fontSize: isMobile ? "1.5rem" : "2rem",
              color: "white",
            }}
          >
            A home for
          </Typography>
          <CyclingButton isMobile={isMobile} />
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

export const HomePage = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
};
