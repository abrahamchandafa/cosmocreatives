import { Stack } from "@mui/system";
import { useIsMobile } from "../hooks/useIsMobile";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

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
  }, [isPaused]);

  return (
    <Button
      variant="outlined"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      sx={{
        height: isMobile ? "20px" : "25px",
        width: isMobile ? "80px" : "100px",
        fontSize: isMobile ? "0.7rem" : "0.875rem",
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
      }}
    >
      <Typography
        variant={isMobile ? "h3" : "h1"}
        sx={{
          fontSize: isMobile ? "3rem" : "6rem",
        }}
      >
        COSMO
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        spacing={isMobile ? 0.5 : 1}
        bgcolor={"transparent"}
        flexWrap="wrap"
        justifyContent="center"
      >
        <Typography
          variant={isMobile ? "body1" : "h6"}
          color="gray"
          sx={{
            fontSize: isMobile ? "1rem" : "1.25rem",
          }}
        >
          A home for
        </Typography>
        <CyclingButton isMobile={isMobile} />
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
