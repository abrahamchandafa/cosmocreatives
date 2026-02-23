import { Stack } from "@mui/system";
import { useIsMobile } from "../hooks/useIsMobile";
import { Typography, Paper, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BrushIcon from "@mui/icons-material/Brush";
import PeopleIcon from "@mui/icons-material/People";
import LanguageIcon from "@mui/icons-material/Language";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

interface ServicesContentProps {
  isMobile: boolean;
}

const ServicesContent = ({ isMobile }: ServicesContentProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.3,
  });

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    } else {
      setHasAnimated(false);
    }
  }, [isInView]);

  const services = [
    {
      icon: <BrushIcon sx={{ fontSize: 40 }} />,
      title: "Creative Direction",
      description:
        "We help brands find their authentic voice through strategic creative direction that resonates across cultures and connects with audiences on a deeper level.",
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: "Talent Incubation",
      description:
        "From emerging artists to established creators, we provide the guidance, resources, and connections needed to thrive in today's competitive landscape.",
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 40 }} />,
      title: "Cultural Strategy",
      description:
        "Navigate the complexities of cross-cultural communication with strategies that honor local nuances while maintaining global appeal.",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: "Brand Development",
      description:
        "Build brands that matter. We partner with you to develop identities, narratives, and experiences that leave lasting impressions.",
    },
  ];

  return (
    <Stack
      ref={containerRef}
      sx={{
        backgroundColor: "#0B0D12",
        width: "100vw",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        py: 8,
        px: 2,
      }}
    >
      <Stack
        spacing={6}
        sx={{
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
          animate={
            hasAnimated
              ? {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }
              : {
                  opacity: 0,
                  filter: "blur(20px)",
                  y: 30,
                }
          }
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            sx={{
              color: "white",
              textAlign: "center",
              fontFamily: '"Lato", sans-serif',
              fontWeight: 300,
              letterSpacing: "-0.02em",
              mb: 2,
            }}
          >
            What We Do
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              fontFamily: '"Lato", sans-serif',
              fontSize: isMobile ? "1.1rem" : "1.3rem",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            We partner with visionaries to transform ideas into impact
          </Typography>
        </motion.div>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
                animate={
                  hasAnimated
                    ? {
                        opacity: 1,
                        filter: "blur(0px)",
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        filter: "blur(20px)",
                        y: 30,
                      }
                }
                transition={{
                  duration: 1.2,
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 4,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: "#4a90e2",
                    },
                  }}
                >
                  <Stack spacing={2} alignItems="flex-start">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Paper
                        sx={{
                          p: 1.5,
                          backgroundColor: "#4a90e2",
                          borderRadius: 2,
                          color: "white",
                        }}
                      >
                        {service.icon}
                      </Paper>
                    </motion.div>

                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        fontFamily: '"Lato", sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        fontFamily: '"Lato", sans-serif',
                        fontWeight: 300,
                        lineHeight: 1.8,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

const MobileView = () => {
  return <ServicesContent isMobile={true} />;
};

const DesktopView = () => {
  return <ServicesContent isMobile={false} />;
};

export const Services = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
};
