import { Stack } from "@mui/system";
import { useIsMobile } from "../hooks/useIsMobile";
import { Typography } from "@mui/material";

interface HomeContentProps {
  isMobile: boolean;
}

const HomeContent = ({ isMobile }: HomeContentProps) => {
  return (
    <Stack
      sx={{
        backgroundImage: isMobile ? 'url("/chn3.png")' : 'url("/chn1.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
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