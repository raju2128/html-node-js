import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header/Header';
import { EventDetails } from './components/EventDetails/EventDetails';
import { Story } from './components/Story/Story';
import { RSVPForm } from './components/RSVPForm/RSVPForm';
import { eventConfig } from './config/eventConfig';

function App() {
  const eventDate = new Date('2024-12-25T09:00:00');

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
    }}>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Header eventDate={eventDate} couple={eventConfig.couple} />
            <EventDetails eventInfo={eventConfig.event} />
            <Story content={eventConfig.story} />
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-3xl font-serif text-center mb-8">RSVP</h2>
              <RSVPForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;