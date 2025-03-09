
import React from 'react';

const FooterInfo: React.FC = () => {
  return (
    <footer className="mt-20 mb-10">
      <div className="bg-anaplan-neutral-linkwater rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-anaplan-blue-midnight mb-6">Notes & Reminders</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-anaplan-blue-midnight mb-2">Participants</h3>
            <ul className="list-disc pl-5 space-y-1 text-anaplan-neutral-mulledwine">
              <li><span className="font-medium">Core Guests:</span> You (Trip Owner), Justin Gill, Mike Kehler, Nitzan Paz, Yaniv Dassa</li>
              <li><span className="font-medium">Precipitant/Support:</span> Ashish Kapoor, UI Team, "Many Others" per office</li>
              <li><span className="font-medium">Agenda Led/Facilitated By:</span> Aniruddha Shendrikar</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-anaplan-blue-midnight mb-2">Action Items</h3>
            <ul className="list-disc pl-5 space-y-1 text-anaplan-neutral-mulledwine">
              <li>Ashish & Monisha will capture meeting minutes during specific discussions (API negotiations, etc.).</li>
              <li>Provide feedback to Aniruddha if any changes or additional sessions are needed.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-anaplan-blue-midnight mb-2">Evening Activities</h3>
            <p className="text-anaplan-neutral-mulledwine">
              Discuss with Aniruddha whether you want to adjust or add a city tour, group dinner, or alternative team-bonding activities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-anaplan-blue-midnight mb-2">Luggage & Logistics (Day 4)</h3>
            <p className="text-anaplan-neutral-mulledwine">
              Confirm checkout plans in the morning or arrange for the driver to stop at the hotel en route to the airport.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-anaplan-blue-midnight mb-2">Flexibility</h3>
            <p className="text-anaplan-neutral-mulledwine">
              Times are approximate. Some sessions or breaks may shift slightly based on discussions and team availability.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterInfo;
