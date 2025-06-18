import React from 'react';

const RouteInput = ({ origin, destination, setOrigin, setDestination }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm mb-1">FROM</label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="e.g. Cubao"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">TO</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="e.g. Makati"
        />
      </div>
    </div>
  );
};

export default RouteInput;
