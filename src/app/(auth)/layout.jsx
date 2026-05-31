import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { montsarrat } from '../layout';

const Authlayout = ({ children }) => {
      return (
            <div className={`${montsarrat.className}`}>
                  <Navbar />
                  {children}
            </div>
      );
};

export default Authlayout;