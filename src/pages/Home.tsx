import React from 'react';
import Navbar from '../components/Navbar';
import TabFilter from '../components/TabFilter';
import SortFilter from '../components/SortFilter';
import Expert from '../components/Expert';
import Product from '../components/Product';
import InfoCard from '../components/InfoCard';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen font-sans overflow-x-hidden">

      {/* Top Section */}
      <div className="sticky top-0 z-50 bg-white">
        <Navbar />

        <div className="w-full bg-white">
          <div className="max-w-screen-xl mx-auto w-full px-4">
            <InfoCard model="2025 Honda Accord EX" size="ขนาดยาง 225/50R17" />

            <div className="mt-4">
              <TabFilter />
            </div>

            <div className="mt-4 mb-2">
              <SortFilter />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex-1 w-full max-w-full overflow-y-auto overflow-x-hidden bg-gray-100">
        <div className="w-full mx-auto w-full px-4 py-4 space-y-[12px] bg-gray-100">
          <Expert />
          <Product
            brand="Petlas"
            model="Petlas Elegant PT311"
            rating={4.8}
            reviews={423}
            price={2340}
            originalPrice={2750}
            discount={15}
          />
          <Product
            brand="Petlas"
            model="Petlas Elegant PT311"
            rating={4.8}
            reviews={423}
            price={2340}
          />
        </div>
      </div>
</div>
  );
};

export default Home;
