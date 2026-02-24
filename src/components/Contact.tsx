import { Stack } from "@mui/system";
import { useIsMobile } from "../hooks/useIsMobile";
import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionButton = motion(Button);

interface HomeContentProps {
  isMobile: boolean;
}

const HomeContent = ({ isMobile }: HomeContentProps) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <Stack
      sx={{
        backgroundColor: "#0B0D12",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant={isMobile ? "h3" : "h1"}
        sx={{
          fontSize: isMobile ? "2.5rem" : "3rem",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        Partner with us.
      </Typography>
      
      <MotionButton
        variant="contained"
        onClick={handleGetStarted}
        sx={{
          my: 5,
          height: isMobile ? "80px" : "120px",
          fontSize: isMobile ? "1.5rem" : "2rem",
          borderRadius: "60px",
          width: isMobile ? "250px" : "300px",
          padding: "10px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 0.1,
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
          <ArrowForwardIcon sx={{ fontSize: isMobile ? "1.5rem" : "2rem" }} />
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