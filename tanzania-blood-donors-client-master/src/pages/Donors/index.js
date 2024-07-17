
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { getAllDonors } from '../../api/blood_requests';
import { TextField } from '@mui/material';
import { useBloodDonation } from '../../store/ctx';

const Container = styled.div`
  margin-top: 70px;
  width: 100%; /* Ensure the table occupies full width */
`;

const Table = styled.table`
  width: 100%; /* Occupy full width */
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #2196F3;
  color: white;
  font-size: 20px;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center; /* Center all content */
  font-size: 17px;
`;

const StatusLabel = styled.span`
  padding: 8px;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  color: white;

  ${({ status }) => {
    switch (status) {
      case 'Approved':
        return 'background-color: #ff9800;'; // Orange
      case 'Rejected':
        return 'background-color: #4CAF50;'; // Green
      default:
        return 'background-color: #2196F3;'; // Blue
    }
  }}
`;

const Donors = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { setDonor } = useBloodDonation();

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const data = await getAllDonors();
        setDonors(data.donors);
        setDonor(data.donors.length);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);


  if(loading) {
    return (
      <>
      <h1 style={{ textAlign: 'left', marginLeft: '20px'}}>All Donors</h1>
      <TextField>Loading...</TextField>
      </>
    )
  }
  
  return (
    <Container>
      <h1 style={{ textAlign: 'left', marginLeft: '20px'}}>All Donors</h1>

      <Table>
        <TableHeader>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Sex</th>
            <th>Region</th>
            <th>Date of Birth</th>
          </tr>
        </TableHeader>
        <tbody>
          {donors.map((donor, index) => (
            <TableRow key={index}>
              <TableCell>{donor.firstname}</TableCell>
              <TableCell>{donor.middlename}</TableCell>
              <TableCell>{donor.sirname}</TableCell>
              <TableCell>{donor.email}</TableCell>
              <TableCell>{donor.phone}</TableCell>
              <TableCell>{donor.sex}</TableCell>
              <TableCell>{donor.region}</TableCell>
              <TableCell>{donor.dateOfBirth}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Donors;
