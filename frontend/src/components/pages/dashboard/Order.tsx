import { useEffect, useState } from "react";
import { getOrders } from "../../services/httpServices";
import { useAppContext } from "../../appcontext/AppContext";
import Pagination from "../../pagination/Pagination";
import type { Ordered } from "../../types/orders";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrder } from "../../slicers/OrderSlice";

const Order = () => {
    const { orders, setOrders } = useAppContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        getOrders().then(data => {
            console.log("COMPONENT RECEIVED:", data);
        });
    }, [setOrders]);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const onViewClick = (addorders: Ordered) => {
        dispatch(addOrder(addorders))
        navigate('/order/view')
    }
    const handleDelete = (orderId: string): void => {
        setOrders((prev: Ordered[]) =>
            prev.filter((order: Ordered) => order.order_id !== orderId)
        );
    };



    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;
    const totalItems = orders.length;

    const startIndex = (currentPage - 1) * pageSize;
    const currentOrders = orders.slice(startIndex, startIndex + pageSize);
    return (
        <>
            <main className="flex flex-1 flex-col p-6 md:p-8 lg:p-10">
                <div className="w-full max-w-7xl mx-auto">
                    {/* <!-- PageHeading --> */}
                    <header className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black tracking-tighter">Order Management</h1>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
                            <span className="material-symbols-outlined text-base">download</span>
                            <span className="truncate">Export Data</span>
                        </button>
                    </header>
                    {/* <!-- Filters & Search --> */}
                    <div className="mb-6 p-4 rounded-xl bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-800">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* <!-- SearchBar --> */}
                            <div className="md:col-span-3">
                                <label className="flex flex-col w-full">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-12 bg-gray-100 dark:bg-white/10">
                                        <div className="text-gray-500 dark:text-gray-400 flex items-center justify-center pl-4">
                                            <span className="material-symbols-outlined">search</span>
                                        </div>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-gray-900 dark:text-white focus:outline-none focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 pl-2 text-base font-normal" placeholder="Search by Order ID, Student, or Course..." value="" />
                                    </div>
                                </label>
                            </div>
                            {/* <!-- Chips / Filters --> */}
                            <div className="md:col-span-3 flex flex-wrap items-center gap-3">
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-white/10 pl-4 pr-2 hover:bg-gray-200 dark:hover:bg-white/20">
                                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Status</p>
                                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-400 text-lg">expand_more</span>
                                </button>
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-white/10 pl-4 pr-2 hover:bg-gray-200 dark:hover:bg-white/20">
                                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Date Range</p>
                                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-400 text-lg">expand_more</span>
                                </button>
                                <div className="flex-grow"></div>
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10">
                                    Reset
                                </button>
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 text-sm font-medium text-white bg-primary hover:bg-primary/90">
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Table --> */}
                    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px]">
                                <thead className="bg-gray-50 dark:bg-white/5">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Student Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Course Purchased</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {currentOrders.map((order: any) => (

                                        <tr className="hover:bg-gray-50 dark:hover:bg-white/5" key={order.order_id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">#{order.order_id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{order.student_name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{order.course_purchased}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{order.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{order.amount}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">{order.status}</span>
                                            </td>
                                            <td className="relative px-6 py-4 whitespace-nowrap text-sm font-medium">

                                                {/* 3-dot button */}
                                                <button
                                                    onClick={() => setOpenMenu(openMenu === order.order_id ? null : order.order_id)}
                                                    className="text-gray-500 dark:text-gray-400 hover:text-primary"
                                                >
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>

                                                {/* Dropdown Menu */}
                                                {openMenu === order.order_id && (
                                                    <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg z-50">

                                                        <button
                                                            onClick={() => { setOpenMenu(null); onViewClick(order) }}
                                                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                                                        >
                                                            View
                                                        </button>

                                                        <button
                                                            // onClick={() => { setOpenMenu(null); handleEdit(order); }}
                                                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                                                        >
                                                            Edit
                                                        </button>

                                                        <button
                                                            onClick={() => { setOpenMenu(null); handleDelete(order.order_id); }}
                                                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 dark:text-red-400"
                                                        >
                                                            Delete
                                                        </button>

                                                    </div>
                                                )}
                                            </td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>


                        </div>
                        {/* <!-- Pagination --> */}
                        <Pagination
                            currentPage={currentPage}
                            totalItems={totalItems}
                            pageSize={pageSize}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}
export default Order;