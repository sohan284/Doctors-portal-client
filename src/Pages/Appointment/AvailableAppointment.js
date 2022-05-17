import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
    const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);

    useEffect(()=>{
        fetch(`services.json`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
       <div>
            <div className='grid grid-cols-3 gap-5'>
           {
               services.map(service=> <Service service={service} key={service._id}
               setTreatment={setTreatment}
               ></Service>)
           }
        </div>
        {treatment && <BookingModal treatment={treatment}></BookingModal>}
       </div>
    );
};

export default AvailableAppointment;