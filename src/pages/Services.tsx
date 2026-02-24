import { Stack } from "@mui/system";
import { useIsMobile } from "../hooks/useIsMobile";
import { Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ServicesContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(20px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <Stack
        sx={{
          width: "100vw",
          minHeight: "100vh",
          py: 12,
          backgroundColor: "#0B0D12",
        }}
      >
        <Container maxWidth="md">
          <Stack
            spacing={4}
            sx={{
              padding: 4,
              backgroundColor: "#0B0D12",
            }}
          >
            <Typography variant="h3" sx={{ color: "white", fontWeight: 300 }}>
              Services
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              We partner with artists and creators who see China as more than a
              tour stop - but as a long-term creative and commercial opportunity.
              Our role is to help you enter, grow, and build sustainably within
              one of the world's most engaged and community-driven fan ecosystems.
            </Typography>

            <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
              Market Entry & Positioning
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              We help you define how your story translates for China audiences -
              without losing your identity. From platform selection and account
              setup to long-term brand vision, we design a clear roadmap tailored
              to your stage of career and goals.
            </Typography>

            <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
              Localized Content & Community Building
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              Success in China requires platform-native storytelling. We guide
              content strategy, oversee local production, manage social accounts,
              and build engaged fan communities that feel personal and authentic.
              No recycled grids - every rollout is intentional and culturally
              fluent.
            </Typography>

            <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
              Fan Economy & Monetization Strategy
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              China's fan culture is powerful and organized. We help you activate
              it thoughtfully - through merchandise, exclusive content, streaming
              optimization, brand collaborations, and curated experiences that
              deepen loyalty while creating recurring revenue.
            </Typography>

            <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
              Brand Partnerships
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              We connect you with aligned local and international brands operating
              in China, negotiating partnerships that enhance your artistic
              credibility while unlocking meaningful commercial upside.
            </Typography>

            <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
              Touring & Live Experiences
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              We extend your digital footprint into real-world impact. From
              production to promotion and local partnerships, we help you step
              into the market confidently - performing, connecting, and building
              lasting bonds with your audience.
            </Typography>

            <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
              Long-Term Growth
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              We believe China rewards commitment. We work with artists who want
              to immerse themselves in the culture, collaborate locally, and scale
              thoughtfully over time - not chase short-term moments.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: "1.2rem",
                textAlign: "center",
                mt: 6,
                fontStyle: "italic",
              }}
            >
              At Cosmo Creatives, we act as both strategic partner and cultural
              translator - helping you build something real, sustainable, and
              globally powerful within the China market.
            </Typography>
          </Stack>
        </Container>
      </Stack>
    </motion.div>
  );
};

const MobileView = () => {
  return <ServicesContent />;
};

const DesktopView = () => {
  return <ServicesContent />;
};

export const Services = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
};