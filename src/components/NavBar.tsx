import { useIsMobile } from "../hooks/useIsMobile";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Stack, IconButton } from "@mui/material";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import FormDialog from "./FormDialog";

const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const NavItems = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
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
        sx={{ color: "white" }}
      >
        <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>
          About
        </Link>
      </MotionButton>

      <MotionButton
        variant="text"
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.95 }}
        sx={{ color: "white" }}
      >
        <Link
          to="/services"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Services
        </Link>
      </MotionButton>

      <MotionButton
        variant="text"
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.95 }}
        sx={{ color: "white" }}
      >
        <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>
          Contact
        </Link>
      </MotionButton>

      <FormDialog />
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
