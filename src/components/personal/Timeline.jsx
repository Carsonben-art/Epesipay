import React from "react";
import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";

const steps = [
  {
    title: "Simple and Fast",
    description:
      "EpesiPay is designed to be user-friendly and lightning-fast. No more standing in long lines or waiting for change. Just scan the QR code, and you're good to go!",
  },
  {
    title: "Secure and Reliable",
    description:
      "Your security is our top priority. EpesiPay uses the latest encryption and authentication technologies to ensure your transactions are safe and protected.",
  },
  {
    title: "No Hidden Fees",
    description:
      "With EpesiPay, what you see is what you get. We believe in transparent pricing, so there are no hidden fees or surprises.",
  },
  {
    title: "Accepted Everywhere",
    description:
      "More and more merchants are joining the EpesiPay family every day. From small vendors to big retailers, you'll find EpesiPay at your favorite stores and businesses.",
  },
  {
    title: "Track Your Spending",
    description:
      "EpesiPay provides you with a convenient way to keep track of your transactions. Monitor your spending easily and stay on top of your budget.",
  }
];

const Why = () => {
return (
    <Box sx={{ maxWidth: 500, margin: "0 auto", padding: "20px" }}>
        <Stepper
            orientation="vertical"
            sx={{
                alignItems: "start",
                "& .MuiStepIcon-root.Mui-active": { color: "#F5AA1B" },
                "& .MuiStepConnector-line": { borderColor: "#5A3316", borderWidth: 2, Height: 10 },
            }}
        >
            {steps.map((step, index) => (
                <Step key={index} active={true}>
                    <StepLabel>
                        <Typography variant="h6" fontWeight="bold" color="#5A3316">
                            {step.title}
                        </Typography>
                    </StepLabel>
                    <Box sx={{ ml: 4 }}>
                        <Typography variant="body1" color="#292D32">
                            {step.description}
                        </Typography>
                    </Box>
                </Step>
            ))}
        </Stepper>
    </Box>
);
};

export default Why;
