// // //Sanitary src/App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './SHomePage';
// import ProductDetailPage from './SProductDetailPage';
// import './Sanitary.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/product/:id" element={<ProductDetailPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './HHomePage ';
// import ProductDetailPage from './HProductDetail';
// import './Hardware.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/product/:id" element={<ProductDetailPage />} />
          
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
//Paintpage                                                                                                                                                                       import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './PHomePage ';
// import ProductDetailPage from './PProductDetail';
// import './Paints.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/product/:id" element={<ProductDetailPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductList from './PHomePage ';
import ProductDetailPage from './PProductDetail';
import HomePage from './HomePage';
import PHomePage from './PHomePage ';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/PProductDetail" element={<PHomePage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

 export default App;
