// import React from 'react';
// import { Link } from 'react-router-dom';
// import SearchComponent from './Common/SearchComponent';
// import { Container, Navbar, Nav } from 'react-bootstrap';

// const IndexPage = () => {
//   return (
//     <div>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="/">Worko</Navbar.Brand>
//           <Nav className="ml-auto">
//             <Nav.Link as={Link} to="/login">Login</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <Container className="container">
//         <h1 className="text-center">Welcome to Worko</h1>
//         <SearchComponent />
//       </Container>
//     </div>
//   );
// };

// export default IndexPage;


import React from 'react';
import { Container } from 'react-bootstrap';
import SearchComponent from './Common/SearchComponent';



const IndexPage = () => {
  return (
    <Container className="container">
      <h1 className="text-center">Welcome to Worko</h1>
      <SearchComponent />
    </Container>
  );
};

export default IndexPage;
