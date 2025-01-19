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
  { min: 1, max: 49, epesipayUsers: "Free", otherUsers: "Free", withdrawal: "N/A" },
  { min: 50, max: 100, epesipayUsers: "Free", otherUsers: "Free", withdrawal: 11 },
  { min: 101, max: 500, epesipayUsers: 7, otherUsers: 7, withdrawal: 29 },
  { min: 501, max: 1000, epesipayUsers: 13, otherUsers: 13, withdrawal: 29 },
  { min: 1001, max: 1500, epesipayUsers: 23, otherUsers: 23, withdrawal: 29 },
  { min: 1501, max: 2500, epesipayUsers: 33, otherUsers: 33, withdrawal: 29 },
  { min: 2501, max: 3500, epesipayUsers: 53, otherUsers: 53, withdrawal: 52 },
  { min: 3501, max: 5000, epesipayUsers: 57, otherUsers: 57, withdrawal: 69 },
  { min: 5001, max: 7500, epesipayUsers: 78, otherUsers: 78, withdrawal: 87 },
  { min: 7501, max: 10000, epesipayUsers: 90, otherUsers: 90, withdrawal: 115 },
  { min: 10001, max: 15000, epesipayUsers: 100, otherUsers: 100, withdrawal: 167 },
  { min: 15001, max: 20000, epesipayUsers: 105, otherUsers: 105, withdrawal: 185 },
  { min: 20001, max: 35000, epesipayUsers: 108, otherUsers: 108, withdrawal: 197 },
  { min: 35001, max: 50000, epesipayUsers: 108, otherUsers: 108, withdrawal: 278 },
  { min: 50001, max: 250000, epesipayUsers: 108, otherUsers: 108, withdrawal: 309 },
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
            Below Are EpesiPay Tariffs
        </Typography>
        <Table sx={{ maxWidth: "900px", margin: "0 auto", border: "2px solid #5A3316" }}>
            <TableHead>
                <TableRow>
                    <TableCell align="center" colSpan={2} sx={{ backgroundColor: "#F8B400", color: "#fff", fontWeight: "bold", border: "1px solid #5A3316" }}>
                        Transaction Range (Kshs)
                    </TableCell>
                    <TableCell align="center" colSpan={3} sx={{ backgroundColor: "#F8B400", color: "#fff", fontWeight: "bold", border: "1px solid #5A3316" }}>
                        Transaction Type And Customer Charges (Kshs)
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Min</TableCell>
                    <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Max</TableCell>
                    <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Transfer To EpesiPay Users Users, <br /> Pochi La Biashara And Business <br /> Till To Customer</TableCell>
                    <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Transfer To Other <br /> Registered Mobile <br /> Money Users</TableCell>
                    <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Withdrawal From <br />Epesipay Agent</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {pricingData.map((row, index) => (
                    <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "inherit" }}>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.min}</TableCell>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.max}</TableCell>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.epesipayUsers}</TableCell>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.otherUsers}</TableCell>
                        <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.withdrawal}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
};

export default PricingTable;