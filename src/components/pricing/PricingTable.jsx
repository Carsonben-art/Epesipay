import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const pricingData = [
  { min: 0, max: 10, epesipayUsers: 0, otherUsers: "Not Allowed", toDtb: 20, toPesalink: 0 },
  { min: 11, max: 100, epesipayUsers: 0, otherUsers: 0, toDtb: 20, toPesalink: 0 },
  { min: 101, max: 500, epesipayUsers: 2, otherUsers: 11, toDtb: 20, toPesalink: 10 },
  { min: 501, max: 1000, epesipayUsers: 5, otherUsers: 15, toDtb: 20, toPesalink: 58 },
  { min: 1001, max: 1500, epesipayUsers: 9, otherUsers: 17, toDtb: 20, toPesalink: 58 },
  { min: 1501, max: 2500, epesipayUsers: 11, otherUsers: 25, toDtb: 20, toPesalink: 58 },
  { min: 2501, max: 3500, epesipayUsers: 13, otherUsers: 30, toDtb: 20, toPesalink: 58 },
  { min: 3501, max: 5000, epesipayUsers: 15, otherUsers: 35, toDtb: 20, toPesalink: 58 },
  { min: 5001, max: 7500, epesipayUsers: 20, otherUsers: 40, toDtb: 20, toPesalink: 70 },
  { min: 7501, max: 20000, epesipayUsers: 20, otherUsers: 45, toDtb: 20, toPesalink: 85 },
  { min: 20001, max: 50000, epesipayUsers: 20, otherUsers: 50, toDtb: 20, toPesalink: 85 },
  { min: 50001, max: 100000, epesipayUsers: 20, otherUsers: 60, toDtb: 20, toPesalink: 90 },
  { min: 100001, max: 150000, epesipayUsers: 20, otherUsers: 70, toDtb: 20, toPesalink: 100 },
  { min: 150001, max: 300000, epesipayUsers: 20, otherUsers: "N/A", toDtb: 20, toPesalink: 100 },
  
];

const PricingTable = () => {
return (
    <TableContainer  sx={{ overflowX: "auto", paddingBottom:'3rem',  }}>
        <Typography
            variant="h2"
            align="center"
            color="#5A3316"
            sx={{ padding: "10px", fontWeight: "bold" }}
        >
            Service price for EpesiPay

        </Typography>
        <Typography
            variant="h4"
            align="center"
            color="#5A3316"
            sx={{ padding: "10px", fontWeight: "bold" }}
        >
            Individual Users

        </Typography>
        <Typography
            variant="h6"
            align="center"
            color="#5A3316"
            sx={{ padding: "10px", fontWeight: "bold" }}
        >
            A monthly Fee of KES 30

        </Typography>
        <Table sx={{ maxWidth: "900px", margin: "0 auto", border: "2px solid #5A3316" }}>
            <TableHead>
                <TableRow>
                    <TableCell align="center" colSpan={2} sx={{ backgroundColor: "#F8B400", color: "#fff", fontWeight: "bold", border: "1px solid #5A3316" }}>
                        Transaction Band (Kshs)
                    </TableCell>
                    <TableCell align="center" colSpan={4} sx={{ backgroundColor: "#F8B400", color: "#fff", fontWeight: "bold", border: "1px solid #5A3316" }}>
                        Charges (Kshs)
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Min</TableCell>
                    <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Max</TableCell>
                    <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>EpesiPay to EpesiPay</TableCell>
                    <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Transfer To Other Mobile Money</TableCell>
                    <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Transfer to DTB Account</TableCell>
                    <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Transfer Via Pesalink</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {pricingData.map((row, index) => (
                    <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "inherit" }}>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.min}</TableCell>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.max}</TableCell>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.epesipayUsers}</TableCell>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.otherUsers}</TableCell>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.toDtb}</TableCell>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.toPesalink}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
};

export default PricingTable;