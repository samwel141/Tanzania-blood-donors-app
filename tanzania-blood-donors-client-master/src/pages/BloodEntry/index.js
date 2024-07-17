
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { getBloodSubmits } from '../../api/blood_requests';
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
    cursor: pointer; /* Change cursor on hover */
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center; /* Center all content */
  font-size: 17px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%; /* Adjust modal width */
  max-width: 600px; /* Set maximum width for responsiveness */
  max-height: 80%; /* Set maximum height */
  overflow-y: auto; /* Make content scrollable */
  text-align: center;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const CloseModalButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const ApproveButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const SeeMoreLink = styled.a`
  display: block;
  margin-top: 20px;
  color: #2196F3;
  cursor: pointer;
  text-decoration: underline;
`;

const BloodEntry = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const { setSubmit } = useBloodDonation();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getBloodSubmits();
        setRequests(data.data);
        setSubmit(data.total)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const openModal = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRequest(null);
    setIsModalOpen(false);
    setShowMore(false);
  };

  const handleApprove = () => {
    console.log('Approved:', selectedRequest);
  };

  return (
    <Container>
        <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Blood Submits - {requests.length}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data: {error.message}</p>}
      {!loading && !error && (

        
        <Table>
          <TableHeader>
            <tr>
              <th>ID</th>
              <th>Center Name</th>
              <th>Facility Sending Sample</th>
              {/* <th>Center</th> */}
              <th>Hub</th>
              <th>Sender Name</th>
              <th>Dispatch Date</th>
              {/* <th>Actions</th> */}
            </tr>
          </TableHeader>
          <tbody>
            {requests.map((request) => (
              <TableRow key={request._id} onClick={() => openModal(request)}>
                <TableCell>{request._id}</TableCell>
                <TableCell>{request.center_name}</TableCell>
                <TableCell>{request.facility_sending_sample}</TableCell>
                {/* <TableCell>{request.center}</TableCell> */}
                <TableCell>{request.hub}</TableCell>
                <TableCell>{request.sender_name}</TableCell>
                <TableCell>{request.dispatch_date}</TableCell>
                {/* <TableCell>
                  <SeeMoreLink onClick={(e) => { e.stopPropagation(); openModal(request); }}>See more</SeeMoreLink>
                </TableCell> */}
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalCloseButton onClick={closeModal}>×</ModalCloseButton>
            <h2>Blood Submit Details</h2>
            {selectedRequest && (
              <>
                <p><strong>ID:</strong> {selectedRequest._id}</p>
                <p><strong>Center ID:</strong> {selectedRequest.center_id}</p>
                <p><strong>Facility Sending Sample:</strong> {selectedRequest.facility_sending_sample}</p>
                <p><strong>Center:</strong> {selectedRequest.center}</p>
                <p><strong>Hub:</strong> {selectedRequest.hub}</p>
                <p><strong>Sender Name:</strong> {selectedRequest.sender_name}</p>
                <p><strong>Dispatch Date:</strong> {selectedRequest.dispatch_date}</p>
               <div style={{ display: 'flex', justifyContent: 'space-around'}}>
               <ApproveButton onClick={handleApprove}>Approve</ApproveButton>
                <CloseModalButton onClick={closeModal}>Close</CloseModalButton>
               </div>

                {!showMore && (
                  <SeeMoreLink onClick={() => setShowMore(true)}>See more</SeeMoreLink>
                )}
                 {showMore && (
                  <SeeMoreLink onClick={() => setShowMore(false)}>See less</SeeMoreLink>
                )}

                {showMore && (
                  <div style={{overflow: 'scroll'}}>
                 
                    <h3>Samples - {selectedRequest.samples.length}</h3>
                    <Table>
                      <TableHeader>
                        <tr>
                          <th>Sample ID</th>
                          <th>HIV</th>
                          <th>HBsAg</th>
                          <th>Syphilis</th>
                          <th>BGS</th>
                          <th>HCV</th>
                          <th>Other</th>
                        </tr>
                      </TableHeader>
                      <tbody>
                        {selectedRequest.samples.map((sample) => (
                          <TableRow key={sample._id}>
                            <TableCell>{sample.sample_id}</TableCell>
                            <TableCell>{sample.hiv}</TableCell>
                            <TableCell>{sample.hbsag}</TableCell>
                            <TableCell>{sample.syphilis}</TableCell>
                            <TableCell>{sample.bgs}</TableCell>
                            <TableCell>{sample.hcv}</TableCell>
                            <TableCell>{sample.other}</TableCell>
                          </TableRow>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}
              </>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default BloodEntry;
