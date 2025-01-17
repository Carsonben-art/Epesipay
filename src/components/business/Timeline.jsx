import React from "react";
import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";

const steps = [
  {
    title: "Lightning–Fast Transactions",
    description:
      "Say goodbye to long queues and waiting times! With EpesiPay, payments are processed in a matter of seconds, allowing you to focus on what truly matters – running your business.",
  },
  {
    title: "Simple QR Code Payments",
    description:
      "Gone are the days of fumbling for cash or entering lengthy card details. Our seamless QR code system makes payments effortless and secure with just a quick scan.",
  },
  {
    title: "Merchant–Friendly Integration",
    description:
      "EpesiPay integrates smoothly into your point-of-sale system, ensuring a hassle-free setup tailored to your business needs.",
  },
  {
    title: "Affordable for All",
    description:
      "Big or small, we believe every business should have access to affordable payment solutions. Our competitive pricing supports businesses of all sizes.",
  },
];

const Features = () => {
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
                        <Typography variant="h5" fontWeight="bold" color="#5A3316">
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

export default Features;
