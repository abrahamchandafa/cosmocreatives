import { Stack } from "@mui/system";
import { useIsMobile } from "../hooks/useIsMobile";
import { Typography, Container, Avatar, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <>
      {/* Metadata */}
      <title>About Cosmo Creatives | Team & Mission</title>
      <meta
        name="description"
        content="Meet the team behind Cosmo Creatives. Andrea Hosking, Warwick Maddock, and Jordan Stewart bridge global artists with the Chinese market through talent relations, strategy, and business development."
      />
      <meta
        name="keywords"
        content="Cosmo team, Andrea Hosking, Warwick Maddock, Jordan Stewart, China talent agency, artist management"
      />
      <meta
        property="og:title"
        content="About Cosmo Creatives | Team & Mission"
      />
      <meta
        property="og:description"
        content="Meet the team bridging global artists with the Chinese market through talent relations, strategy, and business development."
      />
      <meta property="og:url" content="https://cosmocreatives.com/about" />
      <meta
        property="og:image"
        content="https://cosmocreatives.com/og-image.jpg"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://cosmocreatives.com/about" />
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
                backgroundColor: "#0B0D12",
              }}
            >
              <Typography variant="h3" sx={{ color: "white", fontWeight: 300 }}>
                About Us
              </Typography>

              <Typography
                variant="h5"
                sx={{ color: "#4a90e2", fontWeight: 300 }}
              >
                From Global Narratives to Local Resonance
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
                Cosmo is a Greater China-focused talent and IP platform,
                bridging global artists, brands, and cultural properties with
                one of the world's most influential entertainment markets.
              </Typography>

              <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
                About Cosmo
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
                We operate at the intersection of culture and strategy.
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
                China's digital ecosystem, fan economy, and cultural landscape
                are distinct, sophisticated, and fast-evolving. Success here
                requires more than translation or reposted global campaigns. It
                demands fluency, commitment, and thoughtful positioning.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
              >
                Cosmo Creatives was built to navigate that complexity - aligning
                global ambition with local resonance.
              </Typography>

              <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
                Our Mission
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
                To help global cultural IP build meaningful, long-term presence
                in China - not as an afterthought, but as a core strategic
                pillar.
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
                We believe enduring relevance is built through immersion,
                credibility, and consistency. In China, impact compounds over
                time.
              </Typography>

              <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
                Where Culture Meets Strategy
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
                Our team combines experience across global finance, live
                entertainment, music publishing, digital growth, and
                cross-border partnerships - supported by deep networks
                throughout Greater China's entertainment and corporate
                ecosystems.
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
                We understand both the creative and commercial dimensions of
                expansion.
              </Typography>

              <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
                Leadership
              </Typography>

              {/* Andrea Hosking */}
              <Stack spacing={2} alignItems="center" sx={{ mt: 4, padding: 4 }}>
                <Avatar
                  src="/members/andrea.jpg"
                  sx={{
                    width: 140,
                    height: 140,
                    border: "3px solid #4a90e2",
                  }}
                />
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h5"
                    sx={{ color: "white", fontWeight: 400 }}
                  >
                    Andrea Hosking
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#4a90e2", mb: 2 }}
                  >
                    Talent Relations & Touring
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.8,
                      textAlign: "justify",
                      textJustify: "inter-word",
                    }}
                  >
                    Extensive experience across concert touring, promotion, and
                    production in Asia. Deep network across global managers,
                    agents, and artists. Head of Midas Promotions Greater China
                    & Hong Kong. Former songwriter at Sony Music Publishing.
                    Current artist and songwriter signed under Viva Music
                    Philippines.
                  </Typography>
                </Box>
              </Stack>

              {/* Warwick Maddock */}
              <Stack spacing={2} alignItems="center" sx={{ mt: 8, padding: 4 }}>
                <Avatar
                  src="/members/warwick.jpg"
                  sx={{
                    width: 140,
                    height: 140,
                    border: "3px solid #4a90e2",
                  }}
                />
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h5"
                    sx={{ color: "white", fontWeight: 400 }}
                  >
                    Warwick Maddock
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#4a90e2", mb: 2 }}
                  >
                    Operations & Strategy
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.8,
                      textAlign: "justify",
                      textJustify: "inter-word",
                    }}
                  >
                    Over a decade in investment banking and venture capital
                    across media, technology, and entertainment. Former
                    Portfolio Manager at Animoca Brands. Former M&A & IPO
                    Associate at CITIC Securities.
                  </Typography>
                </Box>
              </Stack>

              {/* Jordan Stewart */}
              <Stack spacing={2} alignItems="center" sx={{ mt: 8, padding: 4 }}>
                <Avatar
                  src="/members/jordan.jpg"
                  sx={{
                    width: 140,
                    height: 140,
                    border: "3px solid #4a90e2",
                  }}
                />
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h5"
                    sx={{ color: "white", fontWeight: 400 }}
                  >
                    Jordan Stewart
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#4a90e2", mb: 2 }}
                  >
                    Business Development
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.8,
                      textAlign: "justify",
                      textJustify: "inter-word",
                    }}
                  >
                    14 years managing institutional capital at J.P. Morgan.
                    Angel investor and cross-border relationship builder with
                    deep ties across the US entertainment industry.
                  </Typography>
                </Box>
              </Stack>

              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  textAlign: "center",
                  mt: 8,
                  fontStyle: "italic",
                }}
              >
                Cosmo Creatives builds enduring bridges between culture,
                strategy, and growth.
              </Typography>
            </Stack>
          </Container>
        </Stack>
      </motion.div>
    </>
  );
};

const MobileView = () => {
  return <AboutContent />;
};

const DesktopView = () => {
  return <AboutContent />;
};

export const About = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
};
