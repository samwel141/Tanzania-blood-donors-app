

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { getBloodRequests } from '../../api/blood_requests';
import { useBloodDonation } from '../../store/ctx';

const Container = styled.div`
  margin-top: 70px;
  width: 100%; /* Ensure the table occupies full width */
`;

const Table = styled.table`
  width: 100%; /* Occupy full width */
  border-collapse: collapse;
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

const StatusLabel = styled.span`
  padding: 8px;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  color: white;

  ${({ status }) => {
    switch (status) {
      case 'approved':
        return 'background-color: #ff9800;'; // Orange
      case 'pending':
        return 'background-color: #2196F3;'; // Blue
      default:
        return 'background-color: #4CAF50;'; // Green
    }
  }}
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

  const { setRequest } = useBloodDonation();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getBloodRequests();
        const formattedRequests = data.data.map(request => ({
          ...request,
          createdAt: request.createdAt ? new Date(request.createdAt) : null
        }));
        setRequests(formattedRequests);
        setRequest(data.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleApprove = (id, event) => {
    // event.stopPropagation();
    const updatedRequests = requests.map(request => {
      if (request.id === id) {
        return { ...request, status: 'approved' };
      }
      return request;
    });
    setRequests(updatedRequests);
    setIsModalOpen(false);
  };

  const handleRowClick = request => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowMore(false); 
  };



  const closeModal = () => {
    setSelectedRequest(null);
    setIsModalOpen(false);
    setShowMore(false);
  };

  return (
    <Container>
      <h1 style={{ textAlign: 'left', marginLeft: '20px' }}>Blood Requests - {requests.length}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <>
          <Table>
            <TableHeader>
              <tr>
                <th>id</th>
                <th>Center</th>
                <th>Total Units</th>
                <th>Date</th>
              </tr>
            </TableHeader>
            <tbody>
              {requests.map(request => (
                <TableRow key={request._id} onClick={() => handleRowClick(request)}>
                  <TableCell>{request._id}</TableCell>
                  <TableCell>{request.center_name ? request.center_name : request.center_id}</TableCell>
                  <TableCell>{request.basic_info.total_requested}</TableCell>
                  <TableCell>{request.createdAt.toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>

          {isModalOpen && (
            <ModalOverlay>
              <ModalContent>
                <ModalCloseButton onClick={handleCloseModal}>Close</ModalCloseButton>
                <h2>Blood Request Details</h2>
                <p>ID: {selectedRequest._id}</p>
                <p>Center: {selectedRequest.center_name ? selectedRequest.center_name : selectedRequest.center_id}</p>
                <p>Total Units: {selectedRequest.basic_info.total_requested}</p>
                <p>Date: {selectedRequest.createdAt.toLocaleDateString()}</p>
              {/* <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
               <ActionButton onClick={() => handleApprove(selectedRequest.id)}>Approve</ActionButton>
               <CloseModalButton onClick={handleCloseModal}>Cancel</CloseModalButton>
              </div> */}
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
              <div>
                <h3>Detailed Information</h3>
                {selectedRequest.basic_info && (
                  <>
                    <p>Name of Requester: {selectedRequest.basic_info.name_of_requester}</p>
                    <p>Designation of Requester: {selectedRequest.basic_info.designation_of_requester}</p>
                    <p>Name of Approver: {selectedRequest.basic_info.name_of_approver}</p>
                    <p>Total Expired: {selectedRequest.basic_info.total_expired}</p>
                  </>
                )}
                <h4>Whole Blood Details</h4>
                {selectedRequest.whole_blood && Object.entries(selectedRequest.whole_blood).map(([key, value]) => (
                  <div key={key}>
                    <h5>{key.replace('_', ' ').toUpperCase()}</h5>
                    <p>Stock (Adult): {value.stock.adult}</p>
                    <p>Stock (Pediatric): {value.stock.pediatric}</p>
                    <p>Requested (Adult): {value.requested.adult}</p>
                    <p>Requested (Pediatric): {value.requested.pediatric}</p>
                    <p>Issued (Adult): {value.issued.adult}</p>
                    <p>Issued (Pediatric): {value.issued.pediatric}</p>
                    <p>Total: {value.total}</p>
                    <p>Remarks: {value.remarks}</p>
                  </div>
                ))}
                <h4>PRC Details</h4>
                {selectedRequest.prc && Object.entries(selectedRequest.prc).map(([key, value]) => (
                  <div key={key}>
                    <h5>{key.replace('_', ' ').toUpperCase()}</h5>
                    <p>Stock (Adult): {value.stock.adult}</p>
                    <p>Stock (Pediatric): {value.stock.pediatric}</p>
                    <p>Requested (Adult): {value.requested.adult}</p>
                    <p>Requested (Pediatric): {value.requested.pediatric}</p>
                    <p>Issued (Adult): {value.issued.adult}</p>
                    <p>Issued (Pediatric): {value.issued.pediatric}</p>
                    <p>Total: {value.total}</p>
                    <p>Remarks: {value.remarks}</p>
                  </div>
                ))}
                <h4>FFP Details</h4>
                {selectedRequest.ffp && Object.entries(selectedRequest.ffp).map(([key, value]) => (
                  <div key={key}>
                    <h5>{key.replace('_', ' ').toUpperCase()}</h5>
                    <p>Stock (Adult): {value.stock.adult}</p>
                    <p>Stock (Pediatric): {value.stock.pediatric}</p>
                    <p>Requested (Adult): {value.requested.adult}</p>
                    <p>Requested (Pediatric): {value.requested.pediatric}</p>
                    <p>Issued (Adult): {value.issued.adult}</p>
                    <p>Issued (Pediatric): {value.issued.pediatric}</p>
                    <p>Total: {value.total}</p>
                    <p>Remarks: {value.remarks}</p>
                  </div>
                ))}
                <h4>PRC Details</h4>
                {selectedRequest.prc && Object.entries(selectedRequest.prc).map(([key, value]) => (
                  <div key={key}>
                    <h5>{key.replace('_', ' ').toUpperCase()}</h5>
                    <p>Stock (Adult): {value.stock.adult}</p>
                    <p>Stock (Pediatric): {value.stock.pediatric}</p>
                    <p>Requested (Adult): {value.requested.adult}</p>
                    <p>Requested (Pediatric): {value.requested.pediatric}</p>
                    <p>Issued (Adult): {value.issued.adult}</p>
                    <p>Issued (Pediatric): {value.issued.pediatric}</p>
                    <p>Total: {value.total}</p>
                    <p>Remarks: {value.remarks}</p>
                  </div>
                ))}
              </div>
            )}
              </ModalContent>
            </ModalOverlay>
          )}
        </>
      )}
    </Container>
  );
};

export default BloodEntry;








