"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Download, SmartphoneIcon as AndroidLogo } from "lucide-react";
import Image from "next/image";

export default function GameShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeGame, setActiveGame] = useState(0);

  const games = [
    {
      title: "PiratePazzle",
      description:
        "An epic space adventure with stunning visuals and challenging gameplay.",
      image: "/gamelogo.jpg",
      rating: 4.8,
      downloads: "500K+",
      genre: "Action",
    },
    {
      title: "Puzzle Quest",
      description:
        "Exercise your brain with our challenging puzzle game that evolves as you play.",
      image:
        "/placeholder.svg?height=600&width=300&query=colorful puzzle game mobile screenshot",
      rating: 4.6,
      downloads: "250K+",
      genre: "Puzzle",
    },
    {
      title: "Fantasy Kingdom",
      description:
        "Build your own kingdom in this immersive fantasy world full of magic and adventure.",
      image:
        "/placeholder.svg?height=600&width=300&query=fantasy kingdom mobile game screenshot with castle",
      rating: 4.7,
      downloads: "300K+",
      genre: "Strategy",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="games" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="gradient-text">Games</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Discover our collection of captivating mobile games, designed to
            bring joy and excitement to your Android device.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGame}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Image
                  src={games[activeGame].image || "/placeholder.svg"}
                  alt={games[activeGame].title}
                  width={300}
                  height={600}
                  className="mx-auto rounded-3xl shadow-xl"
                />
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-1">
                    <Star
                      className="text-yellow-400 fill-yellow-400"
                      size={16}
                    />
                    <span className="font-bold">
                      {games[activeGame].rating}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGame}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {games[activeGame].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {games[activeGame].description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                      <span className="font-medium">
                        {games[activeGame].genre}
                      </span>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
                      <Download size={16} />
                      <span className="font-medium">
                        {games[activeGame].downloads}
                      </span>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
                      <AndroidLogo size={16} />
                      <span className="font-medium">Android Only</span>
                    </div>
                  </div>
                  <button className="btn-primary flex items-center gap-2">
                    <Download size={20} />
                    Download Now
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex gap-4">
              {games.map((game, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveGame(index)}
                  className={`flex-1 py-3 px-4 rounded-lg transition-colors ${
                    activeGame === index
                      ? "bg-primary text-white"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {game.title}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
