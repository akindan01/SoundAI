import React, { useState } from 'react';
import { Headphones } from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <motion.nav
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className="flex sticky top-0 z-50 items-center justify-between px-8 py-6 border-b border-gray-900 bg-black relative">

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
            <span className="text-xl font-semibold flex items-center gap-1">
              SoundAI
            </span>
          </motion.div>

          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8 text-sm">
            {['Home', 'Product', 'Career', 'Pricing'].map((item, i) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <a href="#" className="hover:text-gray-300 transition">{item}</a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden md:flex items-center gap-4">

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm pr-4 hover:text-gray-300 transition">Log in</motion.button>

          <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block group">
           <button
            className="relative bg-gradient-to-b from-black to-gray-800 text-white text-sm px-6 py-3 
               rounded-sm flex items-center gap-2 transition duration-300 ease-in-out
               hover:scale-105 hover:shadow-lg"
            >
             Sign Up
           </button>

           <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
          <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
         <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
        </motion.div>

          </motion.div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-200 text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </motion.button>

          <AnimatePresence>
          {isOpen && (
            <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black border-t border-gray-900 flex flex-col items-center py-4 md:hidden z-50">

              <motion.ul
              className="flex flex-col items-center gap-4 text-sm"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                  initial="hidden"
                  animate="show">
                    {['Home', 'Product', 'Career', 'Pricing'].map((item) => (
                    <motion.li
                      key={item}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        show: { opacity: 1, x: 0 }
                      }}
                    >
                      <a href="#" className="hover:text-gray-300 transition">{item}</a>
                    </motion.li>
                  ))}
               </motion.ul>
              <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 flex flex-col gap-3">
                <button className="text-sm hover:text-gray-300 transition">Log in</button>
                <div className="relative inline-block group">
           <button
            className="relative bg-gradient-to-b from-black to-gray-800 text-white text-sm px-6 py-3 
               rounded-sm flex items-center gap-2 transition duration-300 ease-in-out
               hover:scale-105 hover:shadow-lg"
            >
             Sign Up
           </button>

           <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
          <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
         <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
        </div> 
              </motion.div>
            </motion.div>
          )}
          </AnimatePresence>
        </motion.nav>

        
        <motion.section
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row flex-1 px-8 lg:px-16 py-16"
        >
          <div className="flex-1 flex flex-col justify-center md:border-r border-gray-900 md:pr-8">
            <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl lg:text-6xl font-light leading-tight mb-6">
              The soundboard that keeps<br />your music ops on beat
            </motion.h1>
            <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gray-400 text-lg mb-8 max-w-lg">
              A single system that keeps every part of your music business connected, from data to decisions.
            </motion.p>
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4">
              <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
               className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
                See how it works
              </motion.button>

              <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block group mt-3 md:mt-0">
           <button
            className="relative bg-gradient-to-b from-black to-gray-800 text-white px-6 py-3 font-medium 
               rounded-sm flex items-center gap-2 transition duration-300 ease-in-out
               hover:scale-105 hover:shadow-lg"
            >
             Start listening <Headphones size={20} />
           </button>

           <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
          <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
         <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
        </motion.div>
        </motion.div>
          </div>
        </motion.section>

        <motion.section
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="h-screen px-8 lg:px-16 pb-8 bg-[length:150%] sm:bg-[length:130%] md:bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/sound.jpg')" }}
>
</motion.section>
      </div>
    </>
  );
}

export default Hero;
