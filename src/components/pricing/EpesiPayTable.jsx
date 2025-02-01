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
  { min: 1, max: 10, send: 0, receive: 0, otherUsers: "Not Allowed", toDtb: 20, toPesalink: 0 },
  { min: 11, max: 100, send: 0, receive: 0, otherUsers: 0, toDtb: 20, toPesalink: 20 },
  { min: 101, max: 500, send: 2, receive: 0.5, otherUsers: 11, toDtb: 20, toPesalink: 20 },
  { min: 501, max: 1000, send: 5, receive: 1, otherUsers: 13, toDtb: 20, toPesalink: 60 },
  { min: 1001, max: 1500, send: 9, receive: 1.5, otherUsers: 18, toDtb: 20, toPesalink: 60 },
  { min: 1501, max: 2500, send: 11, receive: 2, otherUsers: 25, toDtb: 20, toPesalink: 60 },
  { min: 2501, max: 3500, send: 13, receive: 3, otherUsers: 30, toDtb: 20, toPesalink: 60 },
  { min: 3501, max: 5000, send: 15, receive: 5, otherUsers: 35, toDtb: 20, toPesalink: 70 },
  { min: 5000, max: 7500, send: 20, receive: 5, otherUsers: 40, toDtb: 20, toPesalink: 80 },
  { min: 7501, max: 20000, send: 20, receive: 10, otherUsers: 45, toDtb: 20, toPesalink: 100 },
  { min: 20001, max: 50000, send: 20, receive: 10, otherUsers: 50, toDtb: 20, toPesalink: 100 },
  { min: 50001, max: 100000, send: 20, receive: 20, otherUsers: 60, toDtb: 20, toPesalink: 100 },
  { min: 100001, max: 250000, send: 20, receive: 20, otherUsers: 70, toDtb: 20, toPesalink: 100 },
  { min: 250001, max: 999999, send: 20, receive: 20, otherUsers: "Not Allowed", toDtb: 20, toPesalink: 100 },
 
];

const EpesiPayTable = () => {
  return (
    <TableContainer sx={{ overflowX: "auto", paddingBottom: '3rem' }}>
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
        Business Customers
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
            <TableCell align="center" colSpan={2} sx={{ backgroundColor: "#F8B400", color: "#fff", fontWeight: "bold", border: "1px solid #5A3316" }}>
              EpesiPay to EpesiPay
            </TableCell>
            <TableCell align="center" colSpan={3} sx={{ backgroundColor: "#F8B400", color: "#fff", fontWeight: "bold", border: "1px solid #5A3316" }}>
              Charges (Kshs)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Min</TableCell>
            <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Max</TableCell>
            <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Send</TableCell>
            <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>Receive</TableCell>
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
              <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.send}</TableCell>
              <TableCell align="center" sx={{ border: "1px solid #5A3316" }}>{row.receive}</TableCell>
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

export default EpesiPayTable;