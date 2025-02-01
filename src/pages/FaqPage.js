import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';

import { FcExpand } from "react-icons/fc";

import pattern from '../assets/background.png'
const faqData = [
  {
    question: "What payment methods does EpesiPay accept?",
    answer: "EpesiPay accepts payments via bank transfers and mobile money."
  },
  {
    question: "Is EpesiPay reachable on social media?",
    answer: "Yes. We are present on all social media platforms: Facebook, LinkedIn, X, TikTok, and Instagram. Search EpesiPay."
  },
  {
    question: "Can I use EpesiPay internationally?",
    answer: "Yes, EpesiPay can be used internationally. Check our website for a list of supported countries."
  },
  {
    question: "Who is an active user?",
    answer: "One who completes a 30 days cycle of transactions and pays the monthly fee."
  },
  {
    question: "Can I track my transactions?",
    answer: "Yes, you can view, track, and export on PDF all transactions on your EpesiPay account."
  },
  {
    question: "Does EpesiPay offer rewards?",
    answer: "Yes. Use your referral code to invite new users and both of you earn cash for being active users."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach EpesiPay customer support via WhatsApp +254714853448, email support@epesipay.com, and phone 0714853448 or 0107174680."
  }
];

const FaqPage = () => {
  return (
    <Container maxWidth="full" sx={{padding: 0, margin: 0}}>
        <Box
            sx={{
                backgroundImage: `url(${pattern})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px', 
            }}
        >
            <Typography variant="h1" component="h2" gutterBottom align="center" color='#F5AA1B' sx={{ fontWeight: 'bold' }}>
                EpesiPay,
            </Typography>
            <Typography variant="h3" color='#ffffff' align="center" gutterBottom>
                Frequently asked Questions!
            </Typography>
            <Typography variant="body1" color='#ffffff' align="center" sx={{ mb: 4 }}>
                Still Have Questions? Get in Touch!
            </Typography>
        </Box>
        <Container maxWidth="md" sx={{py: 10}}>
        
        {faqData.map((faq, index) => (
            <Accordion key={index}>
            <AccordionSummary expandIcon={<FcExpand />}>
                <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{faq.answer}</Typography>
            </AccordionDetails>
            </Accordion>
        ))}
        </Container>

    </Container>
  );
};

export default FaqPage;