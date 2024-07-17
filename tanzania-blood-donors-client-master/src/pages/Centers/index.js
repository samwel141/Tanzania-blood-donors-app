

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { getAllCenters } from '../../api/blood_requests';
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

const Centers = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [centers, setCenters] = useState([]);

const { setCenter } = useBloodDonation();


  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const data = await getAllCenters();
        setCenters(data.Blood_Centers);
        setCenter(data.Blood_Centers.length);
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
      <h1 style={{ textAlign: 'left', marginLeft: '20px'}}>All Centers</h1>
      <TextField>Loading...</TextField>
      </>
    )
  }
  

  return (
    <Container>
      <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>All Centers</h1>

      <Table>
        <TableHeader>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Address</th>
            <th>Location</th>
            <th>Region</th>
            <th>Phone</th>
            <th>WhatsApp</th>
            {/* <th>Instagram</th>
            <th>Facebook</th>
            <th>Twitter</th> */}
          </tr>
        </TableHeader>
        <tbody>
          {centers.map((hospital, index) => (
            <TableRow key={index}>
              <TableCell>{hospital.name}</TableCell>
              <TableCell>{hospital.username}</TableCell>
              <TableCell>{hospital.address}</TableCell>
              <TableCell>{hospital.location}</TableCell>
              <TableCell>{hospital.region}</TableCell>
              <TableCell>{hospital.phone}</TableCell>
              <TableCell>{hospital.whatsapp}</TableCell>
              {/* <TableCell>{hospital.instagram}</TableCell>
              <TableCell>{hospital.facebook}</TableCell>
              <TableCell>{hospital.twitter}</TableCell> */}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Centers;
