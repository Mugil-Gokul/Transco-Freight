import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTruckPickup,
  FaTruckMoving,
  FaTrailer,
  FaCogs
} from 'react-icons/fa'
import CustomButton from '../../Components/CustomButton'
import { Link } from 'react-router-dom'

const fleet = [
  // {
  //   id: 'sprinter',
  //   icon: FaTruckPickup,
  //   title: 'Sprinter Vans',
  //   capacity: '1–4 pallets',
  //   details: 'Best for city deliveries. Compact, agile, and efficient for urban logistics.'
  // },
  // {
  //   id: 'straight',
  //   icon: FaTruckMoving,
  //   title: 'Straight Trucks',
  //   capacity: '12–14 pallets',
  //   details: 'Versatile for mid-sized loads. Ideal for regional freight and flexible routing.'
  // },
  {
    id: 'trailer',
    icon: FaTrailer,
    title: '53′ Trailers',
    capacity: 'Full truckload',
    details: 'Perfect for long-haul and bulk shipments. Reliable for nationwide coverage.'
  },
  {
    id: 'specialty',
    icon: FaCogs,
    title: 'Specialty Equipment',
    capacity: 'Liftgates, climate control',
    details: 'Custom configurations for sensitive cargo. Includes temperature control and hydraulic lifts.'
  }
]

const FleetAtGlance = () => {
  const [activeId, setActiveId] = useState(null)
  const detailsRef = useRef(null)

  const handleLearnMore = (id) => {
    setActiveId(activeId === id ? null : id)
  }

  // Scroll into view when activeId changes
  useEffect(() => {
    if (activeId && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activeId])

  const activeTruck = fleet.find((truck) => truck.id === activeId)

  return (
    <section className="bg-white py-10 md:py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 md:mb-16 mb-6"
      >
        Fleet at a Glance
      </motion.h2>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {fleet.map((vehicle, index) => {
          const Icon = vehicle.icon
          return (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-50 md:p-20 p-16 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center border"
            >
              {/* Icon on the left */}
              <Icon className="text-red-600 md:text-8xl text-5xl mr-4 flex-shrink-0" />
              <div className="flex-1 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                  {vehicle.title}
                </h3>
                <p className="text-gray-600 mb-2">{vehicle.capacity}</p>
                <button
                  onClick={() => handleLearnMore(vehicle.id)}
                  className="text-sm md:text-md text-red-600 font-medium hover:underline hover:text-[#18357b]"
                >
                  {activeId === vehicle.id ? 'Hide Details' : 'Learn More'}
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Expanded details section below grid */}
      <AnimatePresence>
        {activeTruck && (
          <motion.div
            ref={detailsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-gray-100 p-8 rounded-xl shadow-md max-w-4xl mx-auto flex items-center justify-between"
          >
            {/* Text on the left */}
            <div className="text-left max-w-lg">
              <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">
                {activeTruck.title}
              </h3>
              <p className="text-gray-700 mb-6">{activeTruck.details}</p>
              <CustomButton>
                <Link to="/contact">
                  Book Now
                </Link>
              </CustomButton>
            </div>

            {/* Icon on the right */}
            <div className="ml-8">
              <activeTruck.icon className="text-red-600 md:text-9xl text-6xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FleetAtGlance



// import React, { useState, useRef, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import {
//   FaTruckPickup,
//   FaTruckMoving,
//   FaTrailer,
//   FaCogs
// } from 'react-icons/fa'

// const fleet = [
//   {
//     id: 'sprinter',
//     icon: FaTruckPickup,
//     title: 'Sprinter Vans',
//     capacity: '1–4 pallets',
//     details: 'Best for city deliveries. Compact, agile, and efficient for urban logistics.'
//   },
//   {
//     id: 'straight',
//     icon: FaTruckMoving,
//     title: 'Straight Trucks',
//     capacity: '12–14 pallets',
//     details: 'Versatile for mid-sized loads. Ideal for regional freight and flexible routing.'
//   },
//   {
//     id: 'trailer',
//     icon: FaTrailer,
//     title: '53′ Trailers',
//     capacity: 'Full truckload',
//     details: 'Perfect for long-haul and bulk shipments. Reliable for nationwide coverage.'
//   },
//   {
//     id: 'specialty',
//     icon: FaCogs,
//     title: 'Specialty Equipment',
//     capacity: 'Liftgates, climate control',
//     details: 'Custom configurations for sensitive cargo. Includes temperature control and hydraulic lifts.'
//   }
// ]

// const FleetAtGlance = () => {
//   const [activeId, setActiveId] = useState(null)
//   const detailsRef = useRef(null)

//   const handleLearnMore = (id) => {
//     setActiveId(activeId === id ? null : id)
//   }

//   useEffect(() => {
//     if (activeId && detailsRef.current) {
//       detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
//     }
//   }, [activeId])

//   const activeTruck = fleet.find((truck) => truck.id === activeId)

//   return (
//     <section className="bg-white py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20">
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12 md:mb-16"
//       >
//         Fleet at a Glance
//       </motion.h2>

//       {/* Responsive Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
//         {fleet.map((vehicle, index) => {
//           const Icon = vehicle.icon
//           return (
//             <motion.div
//               key={vehicle.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group bg-gray-50 p-6 sm:p-10 md:p-16 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center"
//             >
//               {/* Icon */}
//               <Icon className="text-red-600 text-5xl sm:text-6xl md:text-8xl mr-4 flex-shrink-0" />
//               <div className="flex-1 text-left">
//                 <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
//                   {vehicle.title}
//                 </h3>
//                 <p className="text-sm sm:text-base text-gray-600 mb-2">{vehicle.capacity}</p>
//                 <button
//                   onClick={() => handleLearnMore(vehicle.id)}
//                   className="text-red-600 text-sm sm:text-base font-medium hover:underline hover:text-[#18357b]"
//                 >
//                   {activeId === vehicle.id ? 'Hide Details' : 'Learn More'}
//                 </button>
//               </div>
//             </motion.div>
//           )
//         })}
//       </div>

//       {/* Expanded details */}
//       <AnimatePresence>
//         {activeTruck && (
//           <motion.div
//             ref={detailsRef}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.5 }}
//             className="mt-8 sm:mt-12 bg-gray-100 p-6 sm:p-8 rounded-xl shadow-md max-w-3xl md:max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between"
//           >
//             {/* Text */}
//             <div className="text-center md:text-left max-w-lg">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
//                 {activeTruck.title}
//               </h3>
//               <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
//                 {activeTruck.details}
//               </p>
//               <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-md shadow w-full sm:w-auto">
//                 Book Now
//               </button>
//             </div>

//             {/* Icon */}
//             <div className="mt-6 md:mt-0 md:ml-8">
//               <activeTruck.icon className="text-red-600 text-6xl sm:text-7xl md:text-9xl" />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }

// export default FleetAtGlance
