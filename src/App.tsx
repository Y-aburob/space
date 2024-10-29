import './App.css';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<PageTransition component={Home} />} />
          <Route path='/destination' element={<PageTransition component={Destination} />} />
          <Route path='/crew' element={<PageTransition component={Crew} />} />
          <Route path='/technology' element={<PageTransition component={Technology} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const PageTransition = ({ component: Component }: { component: React.FC }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      <Component />
    </motion.div>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
