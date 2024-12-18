import React from 'react';
import { Heart, Calendar, Clock, MapPin, GlassWater } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100">
      {/* Hero Section with Background Image */}
      <div 
        className="h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlend: 'overlay'
        }}
      >
        <div className="text-center text-white p-8 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg">
          <div className="mb-4 animate-pulse">
            <Heart className="inline-block w-8 h-8 text-rose-400" />
          </div>
          <h1 className="text-5xl font-serif mb-4">25th Wedding Anniversary</h1>
          <p className="text-xl mb-6">Celebrating Twenty-Five Years of Love</p>
          <h2 className="text-3xl font-serif mb-2">Mr.Ramachandra Raju & Mrs.Usha Rani</h2>
          <p className="text-lg italic">1999 - 2024</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h3 className="text-3xl font-serif text-center mb-8 text-gray-800">Join Us in Celebration</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Calendar className="w-6 h-6 text-rose-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">Date</h4>
                  <p className="text-gray-600">Saturday, Dec 15th, 2024</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-rose-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">Time</h4>
                  <p className="text-gray-600">9:00 AM Onwards</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-rose-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">Venue</h4>
                  <p className="text-gray-600">1/458, vuda Colony</p>
                  <p className="text-gray-600">Gonthinavanipalem, Gajuwaka</p>
                  <p className="text-gray-600">Vizag, AP-530026</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <GlassWater className="w-6 h-6 text-rose-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">Dress Code</h4>
                  <p className="text-gray-600">Formal Attire</p>
                </div>
              </div>
            </div>

            <div className="bg-rose-50 p-6 rounded-lg">
              <h4 className="text-2xl font-serif text-center mb-4 text-gray-800">Program</h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex justify-between">
                  <span>Kailasa Gowri Nomu</span>
                  <span>9:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Cake Cutting</span>
                  <span>11:30 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Lunch Service</span>
                  <span>12:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Dancing & Celebration</span>
                  <span>2:30 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Your presence is our greatest gift. However, if you wish to honor us with a gift,
            a gift registry has been created at our favorite stores.
          </p>
          <button className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors">
            RSVP Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;