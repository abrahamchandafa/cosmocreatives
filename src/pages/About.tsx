import { Stack } from "@mui/system";
import { useIsMobile } from "../hooks/useIsMobile";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AboutContentProps {
  isMobile: boolean;
}

const AboutContent = ({ isMobile }: AboutContentProps) => {
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

  const paragraphs = [
    {
      title: "Our Story",
      text: "Founded at the intersection of creativity and strategy, COSMO was born from a simple belief: that great ideas deserve great partners. We've spent years building bridges between global narratives and local resonance, helping brands and talents find their authentic voice in an increasingly complex cultural landscape.",
    },
    {
      title: "Our Approach",
      text: "We don't believe in one-size-fits-all solutions. Every partnership begins with deep listening, followed by bold thinking and meticulous execution. Whether incubating emerging talent or guiding established brands through cultural transformation, our approach remains rooted in curiosity, collaboration, and craft.",
    },
    {
      title: "Our Promise",
      text: "To be more than just an agency—to be a true partner in your journey. We measure our success not by awards or accolades, but by the lasting impact we create together: connections that resonate, stories that endure, and relationships that outlast any single project.",
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
      }}
    >
      <Stack
        spacing={6}
        sx={{
          maxWidth: isMobile ? "90%" : "1000px",
          margin: "0 auto",
        }}
      >
        {paragraphs.map((para, index) => (
          <motion.div
            key={index}
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
              delay: index * 0.3,
              ease: "easeOut",
            }}
          >
            <Stack spacing={2}>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                sx={{
                  color: "white",
                  fontFamily: '"Lato", sans-serif',
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  borderLeft: "4px solid #4a90e2",
                  paddingLeft: 3,
                }}
              >
                {para.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: '"Lato", sans-serif',
                  fontWeight: 300,
                  fontSize: isMobile ? "1.1rem" : "1.3rem",
                  lineHeight: 1.8,
                  textAlign: "justify",
                  paddingLeft: 4,
                }}
              >
                {para.text}
              </Typography>
            </Stack>
          </motion.div>
        ))}
      </Stack>
    </Stack>
  );
};

const MobileView = () => {
  return <AboutContent isMobile={true} />;
};

const DesktopView = () => {
  return <AboutContent isMobile={false} />;
};

export const About = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
};
