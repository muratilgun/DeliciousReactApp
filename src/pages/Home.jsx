import Veggie from '../components/Veggie';
import Popular from '../components/Popular';
import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div>
      <Veggie />
      <Popular />
    </motion.div>
  );
}

export default Home;
