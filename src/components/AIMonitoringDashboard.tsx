
"use client";

import { motion } from "framer-motion";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function CompactAnalytics() {
    // Performance data
    const lineData = [
        { name: "Mon", value: 92 },
        { name: "Tue", value: 88 },
        { name: "Wed", value: 94 },
        { name: "Thu", value: 91 },
        { name: "Fri", value: 96 },
        { name: "Sat", value: 93 },
        { name: "Sun", value: 95 },
    ];

    const barData = [
        { name: "CPU", efficiency: 78 },
        { name: "Memory", efficiency: 85 },
        { name: "Disk", efficiency: 62 },
        { name: "Network", efficiency: 91 },
        { name: "GPU", efficiency: 74 },
    ];

    const pieData = [
        { name: "Optimized", value: 45, color: "#000000" },
        { name: "Efficient", value: 30, color: "#10b981" },
        { name: "Moderate", value: 15, color: "#ef4444" },
        { name: "Critical", value: 10, color: "#6b7280" },
    ];

    const scatterData = [
        { x: 100, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 280, z: 200 },
    ];

    const statsCards = [
        { title: "System Efficiency", value: "94.2%", change: "+3.5%", positive: true },
        { title: "Resource Utilization", value: "68.4%", change: "-2.1%", positive: false },
        { title: "Response Time", value: "124ms", change: "-8.3%", positive: true },
        { title: "Error Rate", value: "0.12%", change: "-0.05%", positive: true },
    ];

    return (
        <div className="min-h-screen bg-white p-6">
            <div className=" mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >

                </motion.div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-1">
                    {statsCards.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                        >
                            <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                            <p className="text-3xl font-light text-black mb-2">{stat.value}</p>
                            <p className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                                {stat.change} from last week
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                    {/* Line Chart */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                    >
                        <h3 className="text-lg font-light text-black mb-4">Weekly Efficiency</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="name" tick={{ fill: "#6b7280" }} />
                                <YAxis tick={{ fill: "#6b7280" }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
                                />
                                <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Bar Chart */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                    >
                        <h3 className="text-lg font-light text-black mb-4">Resource Efficiency</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={barData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="name" tick={{ fill: "#6b7280" }} />
                                <YAxis tick={{ fill: "#6b7280" }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
                                />
                                <Bar dataKey="efficiency" fill="#000000" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Pie Chart */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                    >
                        <h3 className="text-lg font-light text-black mb-1">Performance Status</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={40}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="flex flex-wrap gap-4 mt-1 justify-center">
                            {pieData.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                    <span className="text-sm text-gray-600">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Scatter Chart */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                    >
                        <h3 className="text-lg font-light text-black mb-4">Load vs Response</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <ScatterChart>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="x" tick={{ fill: "#6b7280" }} />
                                <YAxis dataKey="y" tick={{ fill: "#6b7280" }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
                                    cursor={{ strokeDasharray: '3 3' }}
                                />
                                <Scatter data={scatterData} fill="#ef4444" />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}