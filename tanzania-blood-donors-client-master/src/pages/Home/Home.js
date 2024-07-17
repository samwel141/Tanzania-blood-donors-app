
import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faSpinner, faCheckCircle, faTint } from '@fortawesome/free-solid-svg-icons';
import { useBloodDonation } from '../../store/ctx';


const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap; 
`;

const Card = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  height: 200px; /* Set a fixed height */
  width: 200px; /* Spread through the full width */
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
`;

const BloodStatIcon = styled.div`
  margin-right: 10px;
`;

const BloodStatText = styled.div`
  font-family: 'Arial', sans-serif; /* Change font family */
  font-size: 18px; /* Increase font size */
  font-weight: 600; /* Increase font weight */
`;

const BloodStatValue = styled.span`
  color: blue; /* Change color of the numbers */
  font-size: 24px; /* Increase font size of the numbers */
`;

const totaldonors = 1000;
const totalrequest = 500;
const totalapprovedrequest = 300;
const totalbloodunit = 15000;

const BloodStatsCard = ({ icon, title, value, theme }) => {
  let iconComponent;
  let iconColor;

  switch (icon) {
    case 'fa-users':
      iconComponent = <FontAwesomeIcon icon={faUsers} size="2x" />; 
      break;
    case 'fa-spinner':
      iconComponent = <FontAwesomeIcon icon={faSpinner} size="2x" />; 
      break;
    case 'fa-check-circle':
      iconComponent = <FontAwesomeIcon icon={faCheckCircle} size="2x" />; 
      break;
    case 'fa-tint':
      iconComponent = <FontAwesomeIcon icon={faTint} size="2x" />; 
      break;
    default:
      iconComponent = null;
  }

  iconColor = '#cc574f';


  return (
    <Card>
      <CardBody>
        <BloodStatIcon>
          {React.cloneElement(iconComponent, { style: { color: iconColor } })}
        </BloodStatIcon>
        <BloodStatText>
          {title} <br />
          <BloodStatValue>{value}</BloodStatValue>
        </BloodStatText>
      </CardBody>
    </Card>
  );
};

const Home = () => {
  const { donor, center, request, submit } = useBloodDonation();

return(
  <div style={{marginTop: 80 }}>
     <h1 style={{ textAlign: 'left', marginLeft: '20px'}}>Home</h1>
  <Container style={{  marginInline: 50 }}>
    {/* Blood stats cards */}
    <BloodStatsCard icon="fa-users" title="Total Donors" value={donor} />
    <BloodStatsCard icon="fa-spinner" title="Total Centers" value={center} />
    <BloodStatsCard icon="fa-check-circle" title="Total Requests" value={request} />
    <BloodStatsCard icon="fa-tint" title="Total Blood Submits" value={submit} />
 
  </Container>
  </div>
);
};

export default Home;
