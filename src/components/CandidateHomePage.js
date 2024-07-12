// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SearchComponent from './Common/SearchComponent';
// import ServiceCard from './Common/ServiceCard';
// import ReferralCard from './Common/ReferralCard';
// import { Container, Col, Row } from 'react-bootstrap';

// const CandidateHomePage = () => {
//   const [referrals, setReferrals] = useState([]);
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const referralsResponse = await axios.get('https://api.mockaroo.com/api/46fb8870?count=20&key=d94eb7c0');
//         if (Array.isArray(referralsResponse.data)) {
//           setReferrals(referralsResponse.data);
//         } else {
//           console.error('Invalid data structure for referrals:', referralsResponse.data);
//         }

//         const servicesResponse = await axios.get('https://api.mockaroo.com/api/872c24b0?count=20&key=d94eb7c0');
//         if (Array.isArray(servicesResponse.data)) {
//           setServices(servicesResponse.data);
//         } else {
//           console.error('Invalid data structure for services:', servicesResponse.data);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (query) => {
//     const filteredReferrals = referrals.filter((referral) => {
//       return referral.referrals.company.toLowerCase().includes(query.toLowerCase());
//     });
//     const filteredServices = services.filter((service) => {
//       return service.services.company.toLowerCase().includes(query.toLowerCase());
//     });

//     setReferrals(filteredReferrals);
//     setServices(filteredServices);
//   };

//   return (
//     <Container className="container mt-5">
//       <h1>Candidate Home</h1>
//       <SearchComponent onSearch={handleSearch} inline="true" />

//       <Row>
//         <Col>
//           <h2>Referrals</h2>
//           <div>
//             {referrals.map((referral, index) => (
//               <ReferralCard key={index} item={referral.referrals} />
//             ))}
//           </div>
//         </Col>
//         <Col>
//           <h2>Services</h2>
//           <div>
//             {services.map((service, index) => (
//               <ServiceCard key={index} item={service.services} />
//             ))}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CandidateHomePage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchComponent from './Common/SearchComponent';
import ServiceCard from './Common/ServiceCard';
import ReferralCard from './Common/ReferralCard';
import { Container, Col, Row } from 'react-bootstrap';

const CandidateHomePage = () => {
  const [referrals, setReferrals] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const referralsResponse = await axios.get('https://api.mockaroo.com/api/46fb8870?count=20&key=d94eb7c0');
       
        if (Array.isArray(referralsResponse.data)) {
          setReferrals(referralsResponse.data.map(item => item.referrals));
        } else {
          console.error('Invalid data structure for referrals:', referralsResponse.data);
        }

        const servicesResponse = await axios.get('https://api.mockaroo.com/api/872c24b0?count=20&key=d94eb7c0');
       
        if (Array.isArray(servicesResponse.data)) {
          setServices(servicesResponse.data);
        } else {
          console.error('Invalid data structure for services:', servicesResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    const filteredReferrals = referrals.filter((referral) => {
      return referral.company.toLowerCase().includes(query.toLowerCase());
    });
    const filteredServices = services.filter((service) => {
      return service.name.toLowerCase().includes(query.toLowerCase());
    });

    setReferrals(filteredReferrals);
    setServices(filteredServices);
  };

  return (
    <Container className="container mt-5">
      <h1>Candidate Home</h1>
      <SearchComponent onSearch={handleSearch} inline="true" />

      <Row>
        <Col>
          <h2>Referrals</h2>
          <div>
            {referrals.map((referral, index) => (
              <ReferralCard key={index} item={referral} />
            ))}
          </div>
        </Col>
        <Col>
          <h2>Services</h2>
          <div>
            {services.map((service, index) => (
              <ServiceCard key={index} item={service} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CandidateHomePage;
