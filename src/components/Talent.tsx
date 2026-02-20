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
        backgroundColor: "#0B0D12",
        width: "90vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        padding: "auto",
        margin: "auto",
        mx: "20px",
      }}
    >
      <Typography
        variant={isMobile ? "h3" : "h1"}
        sx={{
          fontSize: isMobile ? "3rem" : "5rem",
        }}
      >
        Developing talent that resonates,
      </Typography>
      <Typography
        variant={isMobile ? "h3" : "h1"}
        sx={{
          fontSize: isMobile ? "3rem" : "5rem",
        }}
      >
        not just translates
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

export const Talent = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
};
