import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/appRouter';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <Suspense fallback={'ad'}>
      <Router>
        <AppRouter />
      </Router>
      <ToastContainer
        position='top-right'
        autoClose={4998}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Suspense>
  );
}

export default App;
