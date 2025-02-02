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

const BusinessNote = () => {
 
  const otherTransactions = [
    { transaction: "EpesiPay Registeration", ksh: "Free" },
    { transaction: "Changing Pin", ksh: "Free" },
  ];

  return (
    <div style={{ padding: "16px" }}>
    
   

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
                       Transaction
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold", border: "1px solid #5A3316" }}>
                        Fee
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
        sx={{ marginTop: "24px",maxWidth:"900px", whiteSpace: "pre-line" }}
      >
        Note:
        {"\n"}1. Phone numbers must be entered in International format for all transactions. That is,
                    country code followed by the number without the leading 0. For example, if the number
                    is 07123456789 and country is Kenya, then enter +2547123456789
        {"\n"}2. Maximum amount per transaction is Kshs.300,000
        {"\n"}3. Maximum Account Balance is Kshs.500,000
        {"\n"}4. Maximum daily transaction value is Kshs.500,000
       
      </Typography>
    </div>
  );
};

export default BusinessNote;