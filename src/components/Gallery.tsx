import { motion } from "framer-motion";

const babies = [
  {
    src: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg",
    title: "Baby: Anika",
    age: "6 months old",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg",
    title: "Baby: Meera",
    age: "8 months old",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg",
    title: "Baby: Kiara",
    age: "1 year old",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg",
    title: "Baby: Naira",
    age: "2 years old",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg",
    title: "Baby: Sia",
    age: "1.5 years old",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg",
    title: "Baby: Aisha",
    age: "9 months old",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg",
    title: "Baby: Myra",
    age: "3 months old",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg",
    title: "Baby: Pari",
    age: "1 year old",
  },
];

export default function BabyGallery() {
  return (
    <div className="relative bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 min-h-screen font-[Poppins] overflow-hidden">
      {/* 🌸 Floating Blurred Lights */}
      <div className="absolute w-72 h-72 bg-pink-300/30 rounded-full blur-[120px] top-10 left-10 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-purple-400/30 rounded-full blur-[140px] bottom-20 right-10 animate-pulse"></div>

      {/* 🌈 Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="bg-white/70 backdrop-blur-lg shadow-md sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 tracking-wide drop-shadow-md">
            👶 Baby Girl Gallery
          </h1>
        </div>
      </motion.nav>

      {/* 🖼️ Gallery Section */}
      <main className="py-20 px-6 flex justify-center items-center">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl w-full"
        >
          {babies.map((baby, i) => (
            <motion.figure
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.9, rotate: -3 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.08,
                rotate: 2,
                boxShadow: "0 25px 40px rgba(255, 192, 203, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-3xl bg-white/30 backdrop-blur-sm shadow-lg transform transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            >
              {/* Image */}
              <img
                src={baby.src}
                alt={baby.title}
                className="w-full h-72 object-cover object-center transition-transform duration-700 ease-in-out hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-pink-600/40 to-transparent opacity-0 hover:opacity-90 transition-opacity duration-500 ease-in-out"></div>

              {/* Caption */}
              <motion.figcaption
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 w-full text-center text-white p-4"
              >
                <h1 className="text-lg font-extrabold tracking-wide drop-shadow-lg">
                  {baby.title}
                </h1>
                <h2 className="text-xs font-medium uppercase opacity-90">
                  {baby.age}
                </h2>
              </motion.figcaption>
            </motion.figure>
          ))}
        </motion.section>
      </main>

      {/* 🌷 Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center py-10 text-gray-600 font-semibold tracking-wide"
      >
        © 2025 Baby Girl Gallery — Made with 💖 by Arun & Humisha 🌸
      </motion.footer>
    </div>
  );
}
