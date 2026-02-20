import { Stack } from "@mui/system";
import { useIsMobile } from "../hooks/useIsMobile";
import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

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
        mx: "20px",
      }}
    >
      <Typography
        variant={isMobile ? "h3" : "h1"}
        sx={{
          fontSize: "3rem",
          color: "white",
        }}
      >
        Partner with us.
      </Typography>
      
      <MotionButton
        variant="contained"
        sx={{
          my: 5,
          height: "80px",
          fontSize: "2rem",
          borderRadius: "40px",
          width: "300px",
          padding: "10px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 0.1
        }}
        whileHover="hover"
        initial="initial"
      >
        <motion.span
          variants={{
            initial: { x: 0 },
            hover: { x: -10 }
          }}
          transition={{ duration: 0.3 }}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          Get Started
        </motion.span>
        
        <motion.div
          variants={{
            initial: { x: 0 },
            hover: { x: 10 }
          }}
          transition={{ duration: 0.3 }}
          style={{ display: "inline-flex", alignItems: "center", height: "100%" }}
        >
          <ArrowForwardIcon sx={{ fontSize: "2rem" }} />
        </motion.div>
      </MotionButton>
    </Stack>
  );
};

const MobileView = () => {
  return <HomeContent isMobile={true} />;
};

const DesktopView = () => {
  return <HomeContent isMobile={false} />;
};

export const Contact = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
};