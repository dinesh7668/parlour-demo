import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BookingProvider } from './context/BookingContext';
import { ThemeProvider } from './context/ThemeContext';
import './styles/globals.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Staff from './pages/Staff';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import AdminPanel from './pages/AdminPanel';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.5,
};

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/staff', element: <Staff /> },
  { path: '/reviews', element: <Reviews /> },
  { path: '/contact', element: <Contact /> },
  { path: '/booking', element: <Booking /> },
  { path: '/admin', element: <AdminPanel /> },
];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                {element}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BookingProvider>
        <BrowserRouter>
          <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <Navbar />
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </BookingProvider>
    </ThemeProvider>
  );
}

export default App;
