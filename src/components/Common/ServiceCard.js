// import React from 'react';
// import { Card } from 'react-bootstrap';

// const ServiceCard = ({ item }) => {
//   return (
//     <Card className="card">
//       <Card.Body>
//         <Card.Title>{item.name}</Card.Title>
//         <Card.Text>{item.description}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ServiceCard;


import React from 'react';
import { Card } from 'react-bootstrap';


const ServiceCard = ({ item }) => {
  if (!item || !item.name) {
    console.error('Invalid service item:', item);
    return null;
  }

  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;

