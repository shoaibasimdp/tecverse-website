"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Search, MapPin, Briefcase, Clock, Filter, X } from "lucide-react";

const ITEMS_PER_PAGE = 5;

// Mock data types for better type safety (optional but good practice)
interface Job {
    id: string | number;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
}

export default function OpenPositions({ jobListings = [] }: { jobListings: Job[] }) {
    const [search, setSearch] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    const [selectedLocation, setSelectedLocation] = useState("All");
    const [selectedType, setSelectedType] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    // Extract unique values for filters
    const departments = ["All", ...Array.from(new Set(jobListings.map((job) => job.department)))];
    const locations = ["All", ...Array.from(new Set(jobListings.map((job) => job.location)))];
    const types = ["All", ...Array.from(new Set(jobListings.map((job) => job.type)))];

    const filteredJobs = useMemo(() => {
        return jobListings.filter((job) => {
            const matchesSearch = `${job.title} ${job.description}`
                .toLowerCase()
                .includes(search.toLowerCase());
            const matchesDept = selectedDepartment === "All" || job.department === selectedDepartment;
            const matchesLoc = selectedLocation === "All" || job.location === selectedLocation;
            const matchesType = selectedType === "All" || job.type === selectedType;

            return matchesSearch && matchesDept && matchesLoc && matchesType;
        });
    }, [search, selectedDepartment, selectedLocation, selectedType, jobListings]);

    const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

    const paginatedJobs = filteredJobs.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const clearFilters = () => {
        setSearch("");
        setSelectedDepartment("All");
        setSelectedLocation("All");
        setSelectedType("All");
        setCurrentPage(1);
    };

    return (
        <section
            id="open-positions"
            className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900"
        >
            <Container>
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                        Join Our Team
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                        We’re looking for passionate people to help us build the future of technology.
                        Find your perfect role and make an impact.
                    </p>
                </div>

                {/* Search & Filters */}
                <div className="flex flex-col lg:flex-row gap-4 mb-12 p-2 bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">

                    {/* Search Input */}
                    <div className="flex-1 relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search roles..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full pl-11 pr-4 py-4 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0"
                        />
                    </div>

                    <div className="w-px bg-slate-200 dark:bg-slate-800 hidden lg:block my-2" />

                    {/* Filters Group */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-2 p-2 lg:p-0">
                        {/* Department Filter */}
                        <div className="relative">
                            <select
                                value={selectedDepartment}
                                onChange={(e) => { setSelectedDepartment(e.target.value); setCurrentPage(1); }}
                                className="w-full sm:w-48 appearance-none bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3.5 pr-8 text-sm font-medium text-slate-700 dark:text-slate-200 cursor-pointer focus:ring-2 focus:ring-blue-500/20 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                {departments.map(dept => <option key={dept} value={dept}>{dept === "All" ? "All Departments" : dept}</option>)}
                            </select>
                            <Briefcase className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                        </div>

                        {/* Location Filter */}
                        <div className="relative">
                            <select
                                value={selectedLocation}
                                onChange={(e) => { setSelectedLocation(e.target.value); setCurrentPage(1); }}
                                className="w-full sm:w-48 appearance-none bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3.5 pr-8 text-sm font-medium text-slate-700 dark:text-slate-200 cursor-pointer focus:ring-2 focus:ring-blue-500/20 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                {locations.map(loc => <option key={loc} value={loc}>{loc === "All" ? "All Locations" : loc}</option>)}
                            </select>
                            <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                        </div>

                        {/* Type Filter */}
                        <div className="relative">
                            <select
                                value={selectedType}
                                onChange={(e) => { setSelectedType(e.target.value); setCurrentPage(1); }}
                                className="w-full sm:w-48 appearance-none bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3.5 pr-8 text-sm font-medium text-slate-700 dark:text-slate-200 cursor-pointer focus:ring-2 focus:ring-blue-500/20 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                {types.map(t => <option key={t} value={t}>{t === "All" ? "All Types" : t}</option>)}
                            </select>
                            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Active Filters Summary (Optional, if users want to see exactly what is filtered) */}
                {(selectedDepartment !== "All" || selectedLocation !== "All" || selectedType !== "All" || search) && (
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'}
                        </p>
                        <button
                            onClick={clearFilters}
                            className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-1"
                        >
                            <X className="h-4 w-4" /> Clear all filters
                        </button>
                    </div>
                )}

                {/* Jobs Grid */}
                <div className="grid gap-6">
                    {paginatedJobs.length > 0 ? (
                        paginatedJobs.map((job) => (
                            <div
                                key={job.id}
                                className="group relative p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                                                <Briefcase className="h-3 w-3" /> {job.department}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 border border-purple-100 dark:border-purple-500/20">
                                                <MapPin className="h-3 w-3" /> {job.location}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
                                                <Clock className="h-3 w-3" /> {job.type}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {job.title}
                                        </h3>

                                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-2">
                                            {job.description}
                                        </p>
                                    </div>

                                    <Link href={`/careers/${job.id}`} className="mt-2 md:mt-0 shrink-0">
                                        <button className="w-full md:w-auto px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold shadow-lg shadow-slate-900/10 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95">
                                            Apply Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800">
                            <Briefcase className="h-12 w-12 mx-auto text-slate-300 dark:text-slate-600 mb-4" />
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">No positions found</h3>
                            <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-6">
                                We couldn't find any roles matching your criteria. Try clearing filters or searching for something else.
                            </p>
                            <button onClick={clearFilters} className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Clear all filters</button>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-16">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(p => p - 1)}
                            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:hover:bg-transparent transition-colors text-slate-600 dark:text-slate-400"
                        >
                            Prev
                        </button>
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all ${currentPage === i + 1
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                                            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(p => p + 1)}
                            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:hover:bg-transparent transition-colors text-slate-600 dark:text-slate-400"
                        >
                            Next
                        </button>
                    </div>
                )}
            </Container>
        </section>
    );
}
