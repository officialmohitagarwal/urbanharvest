import {
  ShoppingBag,
  DollarSign,
  Users,
  Truck,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

import Header from "../components/Header";
import RecentOrders from "../components/RecentOrders";

const stats = [
  {
    title: "Total Orders",
    value: "1,240",
    icon: ShoppingBag,
    color:
      "from-violet-500/20 to-violet-700/20 border-violet-500/20",
    iconBg: "bg-violet-500/20",
  },
  {
    title: "Revenue",
    value: "$24,000",
    icon: DollarSign,
    color:
      "from-emerald-500/20 to-emerald-700/20 border-emerald-500/20",
    iconBg: "bg-emerald-500/20",
  },
  {
    title: "Active Users",
    value: "892",
    icon: Users,
    color:
      "from-sky-500/20 to-sky-700/20 border-sky-500/20",
    iconBg: "bg-sky-500/20",
  },
  {
    title: "Pending Deliveries",
    value: "48",
    icon: Truck,
    color:
      "from-orange-500/20 to-orange-700/20 border-orange-500/20",
    iconBg: "bg-orange-500/20",
  },
];

const orders = [
  {
    id: "#1001",
    customer: "Aarav Sharma",
    amount: "$120",
    status: "Delivered",
  },
  {
    id: "#1002",
    customer: "Priya Verma",
    amount: "$80",
    status: "Pending",
  },
  {
    id: "#1003",
    customer: "Rohan Gupta",
    amount: "$210",
    status: "Delivered",
  },
  {
    id: "#1004",
    customer: "Ananya Das",
    amount: "$65",
    status: "Processing",
  },
];

const Dashboard = () => {
  return (
    <div>

      <Header
        title="Dashboard"
        subtitle="Monitor your business performance & analytics"
        rightContent={
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl">

            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 flex items-center justify-center text-black font-bold">
              M
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                Mohit Agarwal
              </h3>

              <p className="text-sm text-slate-400">
                Administrator
              </p>
            </div>

          </div>
        }
      />

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((stat, index) => {

          const Icon = stat.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className={`bg-gradient-to-br ${stat.color}
              border backdrop-blur-2xl rounded-3xl p-5 shadow-lg`}
            >

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-slate-300 text-sm">
                    {stat.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-4">
                    {stat.value}
                  </h2>

                </div>

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.iconBg}`}
                >
                  <Icon size={28} />
                </div>

              </div>

              <div className="flex items-center gap-2 mt-6 text-sm text-emerald-400">

                <ArrowUpRight size={16} />

                <span>12% growth this month</span>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* RECENT ORDERS */}
      <RecentOrders orders={orders} />

    </div>
  );
};

export default Dashboard;

