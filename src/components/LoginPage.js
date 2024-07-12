
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Form, Button, Alert } from 'react-bootstrap';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email === 'test@example.com' && password === 'password') {
//       localStorage.setItem('isLoggedIn', 'true');
//       navigate('/candidate/home');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <Container className="container">
//       <h1>Login</h1>
//       <Form onSubmit={handleSubmit}>
//         {error && <Alert variant="danger">{error}</Alert>}
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Login
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default LoginPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Spinner, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Simple email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === 'test@gmail.com' && password === '123456') {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        navigate('/candidate/home');
      } else {
        setError('Invalid email or password');
      }
    }, 1000); // Simulate server delay
  };

  return (
    <Container className="mt-5">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
