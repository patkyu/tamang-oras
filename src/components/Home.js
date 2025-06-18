import React, { useState, useEffect } from 'react';
import RouteInput from './RouteInput';
import { getSmartSuggestion } from '../utils/predictions';
import { fetchRealTimeTraffic } from '../utils/trafficAPI';


const Home = () => {
  const [time, setTime] = useState(new Date());
  const [duration, setDuration] = useState('');
  const [origin, setOrigin] = useState('Cubao');
  const [destination, setDestination] = useState('Makati');
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const getData = async () => {
      const trafficDuration = await fetchRealTimeTraffic(origin, destination);
      setDuration(trafficDuration);
      const smartMsg = getSmartSuggestion(trafficDuration, time);
      setSuggestion(smartMsg);
    };
    getData();
  }, [origin, destination, time]);

  return (
    <div className="w-full max-w-md mx-auto space-y-6 text-gray-800">
        <div className="bg-white rounded shadow p-4 text-center">
          <h2 className="text-3xl font-semibold mb-2">🕒 Time Now</h2>
          <p className="text-xl font-mono">{time.toLocaleTimeString()}</p>
        </div>

        <div className="bg-white rounded shadow p-4">
          <RouteInput
            origin={origin}
            destination={destination}
            setOrigin={setOrigin}
            setDestination={setDestination}
          />
        </div>

        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-md text-gray-600 uppercase">Estimated Travel Time</p>
          <p className="text-2xl font-semibold">{duration || 'Loading...'}</p>
        </div>

        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-md text-gray-600 uppercase">Traffic Suggestion</p>
          <p className="text-lg font-medium">{suggestion}</p>
        </div>

        <p className="text-xs text-center text-gray-500 italic">Powered by TomTom Traffic API | Made by Pat Kyu</p>
    </div>
  );
};

export default Home;
