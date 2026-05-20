import { motion } from "framer-motion";

const RecentOrders = ({ orders }) => {
  return (
    <div className="mt-10 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-6">

      {/* HEADER */}
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

      {/* TABLE HEADER */}
      <div className="hidden md:grid grid-cols-4 gap-4 px-5 mb-4 text-sm text-slate-400">

        <p>Order ID</p>

        <p>Customer</p>

        <p className="text-center">
          Amount
        </p>

        <p className="text-right">
          Status
        </p>

      </div>

      {/* ORDERS */}
      <div className="space-y-4">

        {orders.map((order, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="bg-white/5 border border-white/5 hover:border-white/10 transition rounded-2xl p-5"
          >

            {/* DESKTOP */}
            <div className="hidden md:grid grid-cols-4 gap-4 items-center">

              {/* ORDER ID */}
              <div>

                <h3 className="font-semibold text-sm">
                  {order.id}
                </h3>

              </div>

              {/* CUSTOMER */}
              <div>

                <p className="text-slate-300 text-sm">
                  {order.customer}
                </p>

              </div>

              {/* AMOUNT */}
              <div className="text-center">

                <p className="font-semibold text-sm">
                  {order.amount}
                </p>

              </div>

              {/* STATUS */}
              <div className="flex justify-end">

                <span
                  className={`px-4 py-2 rounded-full text-xs font-medium
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

            </div>

            {/* MOBILE */}
            <div className="md:hidden space-y-4">

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-sm">
                  {order.id}
                </h3>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium
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

              <div className="flex items-center justify-between text-sm">

                <p className="text-slate-400">
                  {order.customer}
                </p>

                <p className="font-semibold">
                  {order.amount}
                </p>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default RecentOrders;