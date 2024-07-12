// import React from 'react';
// import { Card } from 'react-bootstrap';

// const ReferralCard = ({ item }) => {
//   return (
//     <Card className="card">
//       <Card.Body>
//         <Card.Title>{item.company}</Card.Title>
//         <Card.Text>{item.industry}</Card.Text>
//         <Card.Text>{item.description}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ReferralCard;

import React from 'react';
import { Card } from 'react-bootstrap';


const ReferralCard = ({ item }) => {
  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>{item.company}</Card.Title>
        <Card.Text>{item.industry}</Card.Text>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReferralCard;
