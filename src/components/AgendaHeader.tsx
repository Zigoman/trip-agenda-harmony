
import React from 'react';

const AgendaHeader: React.FC = () => {
  return (
    <header className="mb-10 relative">
      <div className="bg-anaplan-blue-midnight py-16 px-8 rounded-lg overflow-hidden relative">
        <div className="absolute top-0 right-0 bottom-0 left-0">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="absolute h-full w-[1px] bg-anaplan-orange opacity-30"
                style={{ left: `${20 + i * 15}%`, transform: 'rotate(30deg) translateY(-50%)', transformOrigin: 'top' }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <img 
              src="./uploads/anaplan-logo.png"
              alt="Anaplan Logo" 
              className="h-10 mr-2"
            />
            <span className="h-8 w-[1px] bg-anaplan-orange mx-3"></span>
            <div className="text-anaplan-neutral-athens font-light">Global Logic Office</div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight animate-fade-in">
            India Trip Agenda
          </h1>
          
          <div className="flex items-center text-anaplan-neutral-ghost animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>November 15-18, 2023</span>
            </div>
            <span className="mx-3">•</span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Global Logic Office, India</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AgendaHeader;
