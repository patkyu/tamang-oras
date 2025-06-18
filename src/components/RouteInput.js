import React from 'react';

const RouteInput = ({ origin, destination, setOrigin, setDestination }) => {
  return (
    <div className="space-y-4 text-white">
      <div>
        <label className="block text-sm mb-1">FROM</label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="w-full p-2 rounded bg-white/30 text-white border border-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="e.g. Cubao"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">TO</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 rounded bg-white/30 text-white border border-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="e.g. Makati"
        />
      </div>
    </div>
  );
};

export default RouteInput;
