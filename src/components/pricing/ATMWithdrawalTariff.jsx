import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

const ATMWithdrawalTariff = () => {
  const withdrawalData = [
    { min: 200, max: 2500, ksh: 35 },
    { min: 2501, max: 5000, ksh: 69 },
    { min: 5001, max: 10000, ksh: 115 },
    { min: 10001, max: 35000, ksh: 203 },
  ];

  const otherTransactions = [
    { transaction: "All Deposits", ksh: "Free" },
    { transaction: "Epesipay Registration", ksh: "Free" },
    { transaction: "Buying Airtime Through Epesipay", ksh: "Free" },
    { transaction: "Epesipay Balance Enquiry", ksh: "Free" },
    { transaction: "Change Epesipay PIN", ksh: "Free" },
  ];

  return (
    <div style={{ padding: "16px" }}>
      {/* Title */}
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: "24px" }}
      >
        ATM Withdrawal Tariff
      </Typography>
    <TableContainer
        component={Paper}
        sx={{
            maxWidth: "900px",
            overflowX: "auto",
            marginBottom: "24px",
            margin: "0 auto",
            border: "1px solid #5A3316",
        }}
    >
        <Table>
            <TableHead>
                <TableRow sx={{ backgroundColor: "#f5a623" }}>
                    <TableCell align="center" sx={{ fontWeight: "bold", border: "1px solid #5A3316" }}>
                        Min
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold", border: "1px solid #5A3316" }}>
                        Max
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold", border: "1px solid #5A3316" }}>
                        Ksh
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {withdrawalData.map((row, index) => (
                    <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? "#d7d7d7" : "inherit" }}>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.min}</TableCell>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.max}</TableCell>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.ksh}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>

    <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: "16px" }}
    >
        Other Transactions
    </Typography>
    <TableContainer
        component={Paper}
        sx={{
            maxWidth: "900px",
            overflowX: "auto",
            margin: "0 auto",
            border: "1px solid #5A3316",
        }}
    >
        <Table>
            <TableHead>
                <TableRow sx={{ backgroundColor: "#f5a623" }}>
                    <TableCell align="center" sx={{ fontWeight: "bold", border: "1px solid #5A3316" }}>
                        Other Transactions
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold", border: "1px solid #5A3316" }}>
                        Kshs
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {otherTransactions.map((row, index) => (
                    <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? "#d7d7d7" : "inherit" }}>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.transaction}</TableCell>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.ksh}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
     {/* More tables here... */}
      


      {/* Notes Section */}
      <Typography
        variant="body2"
        sx={{ marginTop: "24px",maxWidth:"1200px", whiteSpace: "pre-line" }}
      >
        Note:
        {"\n"}1. Maximum Account Balance is Kshs.500,000
        {"\n"}2. Maximum daily transaction value is Kshs.500,000
        {"\n"}3. Maximum amount per transaction is Kshs.250,000
        {"\n"}4. You cannot withdraw less than Kshs.50 at an Epesipay agent outlet.
        {"\n"}5. To initiate Epesipay Self Reversal, send the transaction confirmation to 456.
        {"\n"}6. You cannot deposit money directly into another Epesipay customer's account at an agent outlet.
        {"\n"}7. For registration at Agent outlets, only Kenyan Passports and National IDs are valid. Foreign Passports, Military IDs, and Foreigner Certificates can only be registered at Safaricom Shops and Care Desks.
        {"\n"}8. For deposits and withdrawals, the valid documentation are Kenyan Passports, National IDs, Foreign Passports, Military IDs, and Foreigner Certificates.
        {"\n"}9. For inquiries, complaints, feedback, or further support, reach out to our customer support line by dialing 100 for FreePay customers or 200 for PostPay customers and *234# for self-service. Send us an email at: support@epesipay.com
      </Typography>
    </div>
  );
};

export default ATMWithdrawalTariff;