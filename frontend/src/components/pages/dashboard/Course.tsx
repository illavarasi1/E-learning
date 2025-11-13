// import { useState } from "react";

import { useEffect } from "react";
import { getCourse } from "../../services/httpServices";

const Course = () => {

    useEffect(() => {
        getCourse().then(data => {
            console.log("COMPONENT RECEIVED:", data);
        });
    }, []);
    return (
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">

                {/* Page Heading */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-primary-text dark:text-white text-2xl sm:text-3xl font-black leading-tight tracking-[-0.033em]">
                            Courses
                        </h1>
                        <p className="text-secondary-text dark:text-slate-400 text-sm sm:text-base">
                            Manage, add, and edit courses on the platform.
                        </p>
                    </div>

                    <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold gap-2 w-full sm:w-auto">
                        <span className="material-symbols-outlined">add_circle</span>
                        <span>Add New Course</span>
                    </button>
                </div>

                {/* Search + Filters */}
                <div className="mb-4 space-y-4 w-full">
                    {/* Search Bar */}
                    <div className="w-full">
                        <label className="flex flex-col min-w-40 h-12">
                            <div className="flex w-full flex-1 items-center rounded-lg h-full bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-700">

                                {/* Icon */}
                                <span className="material-symbols-outlined text-[20px] text-gray-500 pl-4">
                                    search
                                </span>

                                {/* Input */}
                                <input
                                    className="flex-1 border-none bg-transparent focus:outline-none px-3 text-gray-800 dark:text-white placeholder:text-gray-400 text-base"
                                    placeholder="Search by course name or ID..."
                                />
                            </div>
                        </label>
                    </div>


                    {/* Filter Chips */}
                    <div className="flex flex-wrap gap-3 w-full">
                        <button className="flex h-8 items-center gap-x-2 rounded-lg bg-surface-light dark:bg-surface-dark px-4 text-sm text-primary-text dark:text-white">
                            Status
                            <span className="material-symbols-outlined text-base">expand_more</span>
                        </button>

                        <button className="flex h-8 items-center gap-x-2 rounded-lg bg-surface-light dark:bg-surface-dark px-4 text-sm text-primary-text dark:text-white">
                            Category
                            <span className="material-symbols-outlined text-base">expand_more</span>
                        </button>

                        <button className="flex h-8 items-center gap-x-2 rounded-lg px-4 text-sm text-secondary-text dark:text-slate-400 hover:bg-surface-light dark:hover:bg-surface-dark">
                            Clear Filters
                            <span className="material-symbols-outlined text-base">close</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50">
                    {/* TABLE (Visible on md and up) */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="min-w-full text-left">
                            <thead className="bg-surface-light/50 dark:bg-surface-dark/50">
                                <tr className="border-b border-border-light dark:border-border-dark">
                                    <th className="p-2 sm:p-4 w-10"></th>
                                    <th className="p-2 sm:p-4 text-sm font-medium">Course Title</th>
                                    <th className="p-2 sm:p-4 text-sm font-medium">Category</th>
                                    <th className="p-2 sm:p-4 text-sm font-medium">Price</th>
                                    <th className="p-2 sm:p-4 text-sm font-medium">Enrolled</th>
                                    <th className="p-2 sm:p-4 text-sm font-medium">Status</th>
                                    <th className="p-2 sm:p-4 text-sm font-medium">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                <tr className="hover:bg-surface-light/50 dark:hover:bg-surface-dark/50">
                                    <td className="p-2 sm:p-4">
                                        <input type="checkbox" className="form-checkbox h-5 w-5" />
                                    </td>

                                    <td className="p-2 sm:p-4">
                                        <div className="flex items-center gap-4">
                                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM22XKfd6tofqGLb4FteWbxjL6QxHKG49vgNR29R53SXRVZ_AhqU4pDSU4hJbpofLsT11wczYIQCNiPaVe2We8XUGItC8knf31SuOlTTDq5TyJqJWvTG_JINeW7PmYekt7Kv0PogAj3INNkPhfMyWf8ygDiAAkvxPG7MBjCyOOgdDViU4y4GKNr93yke1khi1tisSGO306LeJREpYqSVCYH6I_bhHCd-JCIurvFDT17l-J1NjZQsP7lcioDYZsY-TNaxCihw4Zu7U"
                                                className="h-10 w-16 rounded-md object-cover" />
                                            <span className="font-medium text-primary-text dark:text-white">
                                                Introduction to Python
                                            </span>
                                        </div>
                                    </td>

                                    <td className="p-2 sm:p-4 text-secondary-text dark:text-slate-400">Programming</td>
                                    <td className="p-2 sm:p-4 text-secondary-text dark:text-slate-400">$49.99</td>
                                    <td className="p-2 sm:p-4 text-secondary-text dark:text-slate-400">1,200</td>

                                    <td className="p-2 sm:p-4">
                                        <span className="inline-flex items-center rounded-full bg-status-published/10 px-3 py-1 text-sm font-medium text-status-published">
                                            Published
                                        </span>
                                    </td>

                                    <td className="p-2 sm:p-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 hover:bg-surface-light dark:hover:bg-surface-dark rounded-lg">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button className="p-2 hover:bg-surface-light dark:hover:bg-surface-dark rounded-lg">
                                                <span className="material-symbols-outlined">visibility</span>
                                            </button>
                                            <button className="p-2 hover:bg-surface-light dark:hover:bg-surface-dark rounded-lg">
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    {/* Pagination */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-border-light dark:border-border-dark">
                        <p className="text-sm text-secondary-text dark:text-slate-400">
                            Showing 1 to 5 of 20 courses
                        </p>

                        <div className="flex items-center gap-2">
                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border hover:bg-surface-light dark:hover:bg-surface-dark">
                                <span className="material-symbols-outlined text-xl">chevron_left</span>
                            </button>

                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white border border-primary">1</button>
                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border hover:bg-surface-light dark:hover:bg-surface-dark">2</button>
                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border hover:bg-surface-light dark:hover:bg-surface-dark">3</button>

                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border hover:bg-surface-light dark:hover:bg-surface-dark">
                                <span className="material-symbols-outlined text-xl">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Course;
