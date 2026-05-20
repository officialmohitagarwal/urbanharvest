import { motion } from "framer-motion";

const RecentOrders = ({ orders }) => {
  return (
    <div className="mt-10 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-6">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-xl font-bold">
            Recent Orders
          </h2>

          <p className="text-slate-400 mt-1">
            Latest transactions from customers
          </p>

        </div>

        <button className="bg-white/5 hover:bg-white/10 transition px-4 py-2 rounded-xl text-sm">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {orders.map((order, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/5 border border-white/5 hover:border-white/10 transition rounded-2xl p-5"
          >

            <div>

              <h3 className="font-semibold text-base">
                {order.id}
              </h3>

              <p className="text-slate-400 text-sm mt-1">
                {order.customer}
              </p>

            </div>

            <div className="text-base font-semibold">
              {order.amount}
            </div>

            <div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-medium
                ${
                  order.status === "Delivered"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : order.status === "Pending"
                    ? "bg-orange-500/20 text-orange-400"
                    : "bg-sky-500/20 text-sky-400"
                }`}
              >
                {order.status}
              </span>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default RecentOrders;