import { useIsMobile } from "../hooks/useIsMobile";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Stack } from "@mui/material";

const NavItems = () => (
  <>
    <HomeIcon />
    <Button variant="text">Manifesto</Button>
    <Button variant="text">Careers</Button>
    <Button variant="outlined">Sign In</Button>
    <Button variant="contained">Join Waitlist</Button>
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