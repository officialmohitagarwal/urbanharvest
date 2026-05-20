import { Package, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const ProductCard = ({
  product,
  handleDelete,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6"
    >

      <div className="flex items-start justify-between">

        <div>

          <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-5">

            <Package size={28} />

          </div>

          <h2 className="text-xl font-semibold">
            {product.name}
          </h2>

          <p className="text-slate-400 mt-2">
            {product.price}
          </p>

        </div>

        <button
          onClick={() => handleDelete(product.id)}
          className="hover:bg-red-500/10 p-2 rounded-lg transition text-red-400"
        >
          <Trash2 size={18} />
        </button>

      </div>

      <div className="mt-6">

        <span
          className={`px-4 py-2 rounded-full text-sm font-medium
          ${
            product.status === "Available"
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {product.status}
        </span>

      </div>

    </motion.div>
  );
};

export default ProductCard;