import { useIsMobile } from "../hooks/useIsMobile";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Stack } from "@mui/material";
import { motion } from "motion/react";

const MotionButton = motion(Button);

const NavItems = () => (
  <>
    <HomeIcon />
    <MotionButton 
      variant="text"
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      Manifesto
    </MotionButton>
    <MotionButton 
      variant="text"
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      Careers
    </MotionButton>
    <MotionButton 
      variant="outlined"
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      Sign In
    </MotionButton>
    <MotionButton 
      variant="contained"
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      Join Waitlist
    </MotionButton>
  </>
);

const MobileView = () => {
  return (
    <Stack
      direction={"row"}
      spacing={0.5}
      position={"fixed"}
      zIndex={1200}
      justifyContent={"center"}
      alignItems={"center"}
      padding={0.5}
      sx={{
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        "& .MuiButton-root": {
          fontSize: "0.75rem",
          minWidth: "auto",
          padding: "5px 15px",
        },
        "& svg": {
          fontSize: "1.5rem",
        },
      }}
    >
      <NavItems />
    </Stack>
  );
};

const DesktopView = () => {
  return (
    <Stack
      direction={"row"}
      position={"fixed"}
      sx={{
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)"
      }}
      zIndex={1200}
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
      padding={1}
    >
      <NavItems />
    </Stack>
  );
};

export const NavBar = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
};