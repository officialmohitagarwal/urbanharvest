import { motion } from "framer-motion";

const StatCard = ({ title, value }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg"
    >
      <p className="text-slate-400">{title}</p>

      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>
    </motion.div>
  );
};

export default StatCard;