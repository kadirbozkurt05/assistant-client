import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, GraduationCap, BookOpen, Home, Calculator, Clock, PenTool, GamepadIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">EğitimPortal</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Home className="h-5 w-5 mr-1" />
              Anasayfa
            </Link>

            <div className="relative group"
                 onMouseEnter={() => setToolsOpen(true)}
                 onMouseLeave={() => setToolsOpen(false)}>
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <BookOpen className="h-5 w-5 mr-1" />
                Araçlar
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              <AnimatePresence>
                {toolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link to="/hece-calismasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <PenTool className="h-4 w-4 inline-block mr-2" />
                      Heceleme Çalışması
                    </Link>
                    <Link to="/matematik-araclari" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <Calculator className="h-4 w-4 inline-block mr-2" />
                      Matematik Araçları
                    </Link>
                    <Link to="/zaman-planlayici" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <Clock className="h-4 w-4 inline-block mr-2" />
                      Zaman Planlayıcı
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative group"
                 onMouseEnter={() => setGamesOpen(true)}
                 onMouseLeave={() => setGamesOpen(false)}>
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <GamepadIcon className="h-5 w-5 mr-1" />
                Oyunlar
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              <AnimatePresence>
                {gamesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link to="/oyunlar/hafiza" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      Hafıza Oyunu
                    </Link>
                    <Link to="/oyunlar/kelime-karistirma" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      Kelime Karıştırma
                    </Link>
                    <Link to="/oyunlar/matematik-yarismasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      Matematik Yarışması
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative group"
                 onMouseEnter={() => setResourcesOpen(true)}
                 onMouseLeave={() => setResourcesOpen(false)}>
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Menu className="h-5 w-5 mr-1" />
                Kaynaklar
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/kaynaklar"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 font-medium border-b border-gray-100"
                    >
                      Tüm Sınıflar
                    </Link>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((grade) => (
                      <Link
                        key={grade}
                        to={`/sinif/${grade}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        {grade}. Sınıf
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;