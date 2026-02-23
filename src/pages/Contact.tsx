import { Stack } from "@mui/system";
import { useIsMobile } from "../hooks/useIsMobile";
import {
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";

interface ContactContentProps {
  isMobile: boolean;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactContent = ({ isMobile }: ContactContentProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success",
  );

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.3,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    } else {
      setHasAnimated(false);
    }
  }, [isInView]);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your key
          name: data.name,
          email: data.email,
          company: data.company,
          message: data.message,
          subject: `New Contact from ${data.name}${data.company ? ` - ${data.company}` : ""}`,
          reply_to: data.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSnackbarMessage(
          "Message sent successfully! We'll get back to you soon.",
        );
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setSnackbarMessage("Failed to send message. Please try again." + error);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  return (
    <Stack
      ref={containerRef}
      sx={{
        backgroundColor: "#0B0D12",
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          py: 8,
          px: 2,
        }}
      >
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
          style={{ width: "100%" }}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            sx={{
              color: "white",
              textAlign: "center",
              mb: 6,
              fontFamily: '"Lato", sans-serif',
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            Get in Touch
          </Typography>
        </motion.div>

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
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              backgroundColor: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(10px)",
              borderRadius: 4,
              padding: 4,
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Stack spacing={3}>
              {/* Name Field */}
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.4)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#4a90e2",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.6)",
                  },
                  "& .MuiFormHelperText-root": {
                    color: "#ff6b6b",
                  },
                }}
              />

              {/* Email Field */}
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.4)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#4a90e2",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.6)",
                  },
                }}
              />

              {/* Company Field */}
              <TextField
                label="Company (Optional)"
                variant="outlined"
                fullWidth
                {...register("company")}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.4)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#4a90e2",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.6)",
                  },
                }}
              />

              {/* Message Field */}
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                error={!!errors.message}
                helperText={errors.message?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.4)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#4a90e2",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.6)",
                  },
                }}
              />

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting}
                  endIcon={<SendIcon />}
                  sx={{
                    height: "56px",
                    fontSize: "1.1rem",
                    backgroundColor: "#4a90e2",
                    "&:hover": {
                      backgroundColor: "#357abd",
                    },
                    "&.Mui-disabled": {
                      backgroundColor: "rgba(74,144,226,0.5)",
                    },
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </Stack>
          </Box>
        </motion.div>
      </Stack>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

const MobileView = () => {
  return <ContactContent isMobile={true} />;
};

const DesktopView = () => {
  return <ContactContent isMobile={false} />;
};

export const Contact = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
};
