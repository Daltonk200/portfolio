import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="bg-[#0C0C0C] font-kanit min-h-screen flex flex-col overflow-x-clip">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 relative z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
