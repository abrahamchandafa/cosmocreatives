import { Stack } from "@mui/system";
import { useIsMobile } from "../hooks/useIsMobile";
import {
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
  Paper,
  InputAdornment,
} from "@mui/material";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import MessageIcon from "@mui/icons-material/Message";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactContent = ({ isMobile }: { isMobile: boolean }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/abrahamchandafa@gmail.com", {
        method: "POST",
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || "Not provided",
          message: data.message,
          _subject: `New Contact from ${data.name}`,
          _replyto: data.email,
          _template: "table",
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSnackbarMessage("Message sent successfully! We'll get back to you soon.");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSnackbarMessage("Message sent! We'll get back to you soon.");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      reset();
    }
  };

  return (
    <Stack
      ref={containerRef}
      sx={{
        backgroundColor: "#0B0D12",
        width: "100vw",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 6, md: 10 },
        px: 2,
        mt: 2
      }}
    >
      <motion.div
        initial={{ opacity: 0,}}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "2rem", width: "100%" }}
      >
        <Typography
          variant={isMobile ? "h3" : "h2"}
          sx={{
            color: "white",
            fontFamily: '"Lato", sans-serif',
            fontWeight: 300,
            mb: 2,
            background: "linear-gradient(135deg, #fff 0%, #ffffff 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgba(255,255,255,0.7)", maxWidth: "500px", mx: "auto" }}
        >
          Have a question or want to work together? Drop us a message below.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <Paper
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          elevation={0}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            borderRadius: 4,
            padding: { xs: 3, md: 5 },
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Stack spacing={3}>
            <TextField
              label="Name"
              {...register("name", { required: "Name is required", minLength: { value: 1, message: "Minimum 1 character" } })}
              error={!!errors.name}
              helperText={errors.name?.message}
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: "rgba(255,255,255,0.5)" }} /></InputAdornment>,
              }}
              sx={textFieldStyles}
            />

            <TextField
              label="Email"
              {...register("email", { 
                required: "Email is required", 
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" } 
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start"><EmailIcon sx={{ color: "rgba(255,255,255,0.5)" }} /></InputAdornment>,
              }}
              sx={textFieldStyles}
            />

            <TextField
              label="Company (Optional)"
              {...register("company")}
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start"><BusinessIcon sx={{ color: "rgba(255,255,255,0.5)" }} /></InputAdornment>,
              }}
              sx={textFieldStyles}
            />

            <TextField
              label="Message"
              {...register("message", { required: "Message is required", minLength: { value: 10, message: "Minimum 10 characters" } })}
              error={!!errors.message}
              helperText={errors.message?.message}
              fullWidth
              multiline
              rows={5}
              InputProps={{
                startAdornment: <InputAdornment position="start" sx={{ alignItems: "flex-start", mt: 1.5 }}><MessageIcon sx={{ color: "rgba(255,255,255,0.5)" }} /></InputAdornment>,
              }}
              sx={textFieldStyles}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              endIcon={<SendIcon />}
              sx={{
                height: "56px",
                fontSize: "1.05rem",
                borderRadius: 2,
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </Stack>
        </Paper>
      </motion.div>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert severity={snackbarSeverity} sx={{ backgroundColor: snackbarSeverity === "success" ? "rgba(34, 197, 94, 0.9)" : "rgba(239, 68, 68, 0.9)", color: "white" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    color: "white",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 2,
    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
    "&:hover fieldset": { borderColor: "rgba(74,144,226,0.6)" },
    "&.Mui-focused fieldset": { borderColor: "#4a90e2", borderWidth: 2 },
  },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.6)" },
  "& .MuiFormHelperText-root": { color: "#ff6b6b" },
};

const MobileView = () => <ContactContent isMobile={true} />;
const DesktopView = () => <ContactContent isMobile={false} />;

export const Contact = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileView /> : <DesktopView />;
};