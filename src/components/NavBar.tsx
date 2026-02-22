import { useIsMobile } from "../hooks/useIsMobile";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Stack, IconButton } from "@mui/material";
import { motion } from "motion/react";

const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const NavItems = () => {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <>
      <MotionIconButton
        onClick={handleHomeClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        sx={{ color: "white" }}
      >
        <HomeIcon />
      </MotionIconButton>

      <MotionButton
        variant="text"
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        About
      </MotionButton>

      <MotionButton
        variant="text"
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Services
      </MotionButton>

      <MotionButton
        variant="outlined"
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Contact Us
      </MotionButton>

      <MotionButton
        variant="contained"
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Subscribe
      </MotionButton>
    </>
  );
};

const MobileView = () => {
  return (
    <Stack
      direction={"row"}
      spacing={0.5}
      position={"fixed"}
      zIndex={1200}
      justifyContent={"center"}
      alignItems={"center"}
      padding={1}
      sx={{
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        "& .MuiButton-root": {
          fontSize: "0.7rem",
          minWidth: "auto",
          padding: "10px 15px",
          whiteSpace: "nowrap",
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
        transform: "translateX(-50%)",
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
