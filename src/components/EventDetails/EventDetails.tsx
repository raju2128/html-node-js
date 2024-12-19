import React from 'react';
import { Calendar, Clock, MapPin, PhoneCall } from 'lucide-react';
import { EventInfo } from '../../types/event';

interface EventDetailsProps {
  eventInfo: EventInfo;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ eventInfo }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-12">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <Calendar className="w-8 h-8 mx-auto mb-2 text-gold-600" />
          <h3 className="font-semibold text-xl mb-1">Date</h3>
          <p>{eventInfo.date}</p>
        </div>
        <div>
          <Clock className="w-8 h-8 mx-auto mb-2 text-gold-600" />
          <h3 className="font-semibold text-xl mb-1">Time</h3>
          <p>{eventInfo.time}</p>
        </div>
        <div>
          <MapPin className="w-8 h-8 mx-auto mb-2 text-gold-600" />
          <h3 className="font-semibold text-xl mb-1">Location</h3>
          <p>
            {eventInfo.venue}<br />
            {eventInfo.address}<br />
            {eventInfo.city}
          </p>
        </div>
        <div>
          <PhoneCall className="w-8 h-8 mx-auto mb-2 text-gold-600" />
          <h3 className="font-semibold text-xl mb-1">Contact Details</h3>
          <p className="text-gray-600">7075247520-Vinay</p>
          <p className="text-gray-600">9515507075-Vineeth</p>
        </div>  
      </div>
    </div>
  );
};