import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const TableComponent = ({ responseData }) => {
  console.log(responseData);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: "5vh" }}>
      <TableContainer component={Paper} sx={{ backgroundColor: "rgba(96, 96, 96, 0)", color: "white" }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Insurance Premium</TableCell>
              <TableCell sx={{ color: "white" }}>{responseData.insurancePremium}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
