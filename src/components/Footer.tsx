import { useIsMobile } from "../hooks/useIsMobile";
import { Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Create motion-enhanced button
const MotionButton = motion(Button);

const FooterItems = () => (
  <>
    {/* Left side */}
    <Typography sx={{ color: "white", opacity: 0.8 }}>
      COSMO © 2026
    </Typography>

    {/* Right side */}
    <Stack direction="row" spacing={10} alignItems="center" bgcolor={"transparent"}>
      <Stack direction="row" spacing={1} alignItems="center" bgcolor={"transparent"}>
        <Typography sx={{ color: "white", fontWeight: "bold" }}>Connect</Typography>
        <MotionButton 
          variant="text" 
          sx={{ color: "white", opacity: 0.8 }}
          whileHover={{ 
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          Instagram
        </MotionButton>
        <MotionButton 
          variant="text" 
          sx={{ color: "white", opacity: 0.8 }}
          whileHover={{ 
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          TikTok
        </MotionButton>
        <MotionButton 
          variant="text" 
          sx={{ color: "white", opacity: 0.8 }}
          whileHover={{ 
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          X
        </MotionButton>
        <MotionButton 
          variant="text" 
          sx={{ color: "white", opacity: 0.8 }}
          whileHover={{ 
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          FaceBook
        </MotionButton>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center" bgcolor={"transparent"}>
        <Typography sx={{ color: "white", fontWeight: "bold" }}>More</Typography>
        <MotionButton 
          variant="text" 
          sx={{ color: "white", opacity: 0.8 }}
          whileHover={{ 
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          Terms
        </MotionButton>
        <MotionButton 
          variant="text" 
          sx={{ color: "white", opacity: 0.8 }}
          whileHover={{ 
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          Privacy
        </MotionButton>
      </Stack>
    </Stack>
  </>
);

const MobileFooter = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      bgcolor={"transparent"}
      sx={{
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        padding: 2,
        zIndex: 1200,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" bgcolor={"transparent"}>
        <Typography sx={{ color: "white", opacity: 0.8 }}>
          COSMO © 2026
        </Typography>
        <Stack direction="row" spacing={2} bgcolor={"transparent"}>
          <Stack direction="row" spacing={1} alignItems="center" bgcolor={"transparent"}>
            <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "0.9rem" }}>Connect</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" bgcolor={"transparent"}>
            <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "0.9rem" }}>More</Typography>
          </Stack>
        </Stack>
      </Stack>
      
      {/* Social links row for mobile */}
      <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap={1} bgcolor={"transparent"}>
        <MotionButton 
          variant="text" 
          sx={{ color: "white", opacity: 0.8, fontSize: "0.8rem", p: 0.5 }}
          whileHover={{ 
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          Instagram
        </MotionButton>
        <MotionButton 
          variant="text" 
          sx={{ color: "white", opacity: 0.8, fontSize: "0.8rem", p: 0.5 }}
          whileHover={{ 
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          TikTok
        </MotionButton>
        <MotionButton 
          variant="text" 
          sx={{ color: "white", opacity: 0.8, fontSize: "0.8rem", p: 0.5 }}
          whileHover={{ 
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          X
        </MotionButton>
        <MotionButton 
          variant="text" 
          sx={{ color: "white", opacity: 0.8, fontSize: "0.8rem", p: 0.5 }}
          whileHover={{ 
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          FaceBook
        </MotionButton>
        <MotionButton 
          variant="text" 
          sx={{ color: "white", opacity: 0.8, fontSize: "0.8rem", p: 0.5 }}
          whileHover={{ 
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          Terms
        </MotionButton>
        <MotionButton 
          variant="text" 
          sx={{ color: "white", opacity: 0.8, fontSize: "0.8rem", p: 0.5 }}
          whileHover={{ 
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          Privacy
        </MotionButton>
      </Stack>
    </Stack>
  );
};

const DesktopFooter = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        padding: "20px 40px",
        zIndex: 1200,
      }}
    >
      <FooterItems />
    </Stack>
  );
};

export const Footer = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileFooter /> : <DesktopFooter />;
};