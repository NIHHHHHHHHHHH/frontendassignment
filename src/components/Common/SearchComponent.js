// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// const SearchComponent = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = () => {
//     // Ensure onSearch exists and is a function
//     if (typeof onSearch === 'function') {
//       // Call onSearch with current query state
//       onSearch(query);
//     }
//   };

//   return (
//     <Form inline className="mb-3">
//       <Form.Control
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search..."
//         className="mr-sm-2"
//       />
//       <Button onClick={handleSearch} variant="outline-primary">
//         Search
//       </Button>
//     </Form>
//   );
// };

// export default SearchComponent;


import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (typeof onSearch === 'function') {
      onSearch(query);
    }
  };

  return (
    <Form inline className="mb-3">
      <Form.Control
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="mr-sm-2"
      />
      <Button className='search' onClick={handleSearch} variant="outline-primary">
        Search
      </Button>
    </Form>
  );
};

export default SearchComponent;
