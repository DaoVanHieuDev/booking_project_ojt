/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import { useState, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faCar, faLandmarkFlag, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './Header.css';

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [options, setOptions] = useState({
    adult: 0,
    children: 0,
    room: 1
  });

  const handleOptions = (name, operation) => {
    setOptions(prev => ({
      ...prev,
      [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1
    }));
  };

  return (
    <div className='bg-blue-900 text-white p-10 '>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-center gap-4 md:justify-start md:pt-3 animate-fadeInFromLeft'>
          <div className='flex font-bold gap-3 items-center border-2 border-white rounded-full p-2 md:p-3 cursor-pointer hover:bg-white hover:text-blue-900'>
            <FontAwesomeIcon icon={faBed} />
            <span className='hidden md:inline'>Stays</span>
          </div>
          <div className='flex font-bold gap-3 items-center border-2 border-white rounded-full p-2 md:p-3 cursor-pointer hover:bg-white hover:text-blue-900'>
            <FontAwesomeIcon icon={faPlane} />
            <span className='hidden md:inline'>Flights</span>
          </div>
          <div className='flex font-bold gap-3 items-center border-2 border-white rounded-full p-2 md:p-3 cursor-pointer hover:bg-white hover:text-blue-900'>
            <FontAwesomeIcon icon={faCar} />
            <span className='hidden md:inline'>Car rentals</span>
          </div>
          <div className='flex font-bold gap-3 items-center border-2 border-white rounded-full p-2 md:p-3 cursor-pointer hover:bg-white hover:text-blue-900'>
            <FontAwesomeIcon icon={faLandmarkFlag} />
            <span className='hidden md:inline'>Attractions</span>
          </div>
          <div className='flex font-bold gap-3 items-center border-2 border-white rounded-full p-2 md:p-3 cursor-pointer hover:bg-white hover:text-blue-900'>
            <FontAwesomeIcon icon={faTaxi} />
            <span className='hidden md:inline'>Airport taxis</span>
          </div>
        </div>
        <h1 className='text-3xl font-sans font-bold mt-5 blinking-text'>A lifetime of discounts? It's Genius.</h1>
        <p className='mt-3 '>Get rewarded for your travels. Unlock instant savings of 10% or more with a free Booking account</p>

        <div className='sm:absolute flex sm:top-[14.4rem] sm:h-10 sm:w-2/3 mt-8 border-8 sm:p-6 border-yellow-500 bg-white rounded-lg  items-center sm:justify-between px-3 sm:flex-row flex-col text-sm sm:text-lg'>
          <div className='text-gray-400'>
            <FontAwesomeIcon icon={faBed} className='cursor-pointer mx-2 ' />
            <input type="text" placeholder='Where are you going?' className='cursor-pointer outline-none border-transparent' />
          </div>
          <div className='text-gray-400' onClick={() => setOpenDate(!openDate)}>
            <FontAwesomeIcon icon={faCalendarDays} className='cursor-pointer mx-2 ' />
            <span className='cursor-pointer'>
              {format(state[0].startDate, "dd/MM/yyyy")} -- {format(state[0].endDate, "dd/MM/yyyy")}
            </span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className='sm:absolute sm:top-12 z-10 sm:left-1/3 sm:w-2/3 bg-slate-50 p-4 rounded-lg shadow-md'
            />}
          </div>
          <div className='text-gray-400 cursor-pointer' >
            <FontAwesomeIcon icon={faPerson} className='cursor-pointer mx-2 ' />
            <span className='' onClick={() => setOpenOptions(!openOptions)}>
              {options.adult} adult - {options.children} children - {options.room} room
            </span>
            {openOptions && <div className='sm:absolute z-10 bg-slate-50 sm:top-12 sm:left-2/3 shadow-md p-8 rounded-lg h-fit'>
              <div className='my-2'>
                <span className='text-sm sm:text-lg font-semibold text-gray-700'>Adults</span>
                <div className='flex items-center'>
                  <button className='bg-blue-900 text-white font-bold px-3 py-1 hover:scale-105 rounded-full ' onClick={() => handleOptions("adult", "d")} disabled={options.adult <= 1}>
                    -
                  </button>
                  <span className='mx-3'>{options.adult}</span>
                  <button className='bg-blue-900 text-white font-bold px-3 py-1 hover:scale-105 rounded-full' onClick={() => handleOptions("adult", "i")}>
                    +
                  </button>
                </div>
              </div>
              <div className='my-2'>
                <span className='text-sm sm:text-lg font-semibold text-gray-700'>Children</span>
                <div className='flex items-center'>
                  <button className='bg-blue-900 text-white font-bold px-3 py-1 hover:scale-105 rounded-full' onClick={() => handleOptions("children", "d")} disabled={options.children <= 0}>
                    -
                  </button>
                  <span className='mx-3'>{options.children}</span>
                  <button className='bg-blue-900 text-white font-bold px-3 py-1 hover:scale-105 rounded-full' onClick={() => handleOptions("children", "i")}>
                    +
                  </button>
                </div>
              </div>
              <div className='my-2'>
                <span className='text-sm sm:text-lg font-semibold text-gray-700'>Rooms</span>
                <div className='flex items-center'>
                  <button className='bg-blue-900 text-white font-bold px-3 py-1 hover:scale-105 rounded-full' onClick={() => handleOptions("room", "d")} disabled={options.room <= 1}>
                    -
                  </button>
                  <span className='mx-3'>{options.room}</span>
                  <button className='bg-blue-900 text-white font-bold px-3 py-1 hover:scale-105 rounded-full' onClick={() => handleOptions("room", "i")}>
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <div>
            <button className='bg-blue-900 text-white font-bold py-2 hover:scale-105 px-4 rounded-full mt-2 sm:mt-0'>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
