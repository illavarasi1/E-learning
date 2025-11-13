import { NavLink } from "react-router-dom";

type SidebarProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
    return (
        <>
            <aside
                className={`fixed md:static top-0 left-0 h-screen bg-white dark:bg-gray-900
        border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between
        w-[250px] transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-[260px]"} md:translate-x-0`}
            >
                {/* Close button visible only on mobile */}
                <button
                    onClick={() => setOpen(false)}
                    className="md:hidden absolute top-4 right-4 text-gray-700 dark:text-gray-200 text-xl"
                >
                    ✕
                </button>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                            data-alt="Admin user avatar"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxxdH0kU2NEMipmaXcs4ksH8wz5Z1IRZEYpd79pKvlRpcVBQ5oL3vdg-FPDWXaIT_4hLMo5ScJqkH9XHEK1qGQ2hM4g_3VBCLTuGRpuMucgJZz0Gr5gM_Vq0sJQUVEaKC8XIktXwIKrfby4LJGX24ZRArCdDGesTQ_lR8Fv47X34is8fjCcdu9jna1MOfXJBq6cfX-N_M8nvvrFY7no9eKX4497CRmk8NzyJxvUdasmRmqmtkRt0CkOiSyF1qNrmwfuEagwQwXpnk")',
                            }}
                        ></div>
                        <div className="flex flex-col">
                            <h1 className="text-primary-text dark:text-white text-base font-medium leading-normal">Alex Morgan</h1>
                            <p className="text-secondary-text dark:text-slate-400 text-sm font-normal leading-normal">Administrator</p>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-2 mt-4">
                        {[
                            { icon: "dashboard", label: "Dashboard", path: "/" },
                            { icon: "school", label: "Courses", path: "/course" },
                            { icon: "group", label: "Students", path: "/student" },
                            { icon: "receipt_long", label: "Orders", path: "/order" },
                            { icon: "settings", label: "Settings", path: "/settings" },
                        ].map((item, i) => (
                            <NavLink
                                key={i}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3 py-2 rounded-lg transition ${isActive
                                        ? "bg-primary/20 text-primary"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`
                                }
                            >
                                <span className="material-symbols-outlined">{item.icon}</span>
                                <p className="text-sm font-medium">{item.label}</p>
                            </NavLink>
                        ))}
                    </nav>
                </div>

                <button className="h-10 bg-primary text-white rounded-lg font-bold px-4">
                    Add New Course
                </button>
            </aside>
        </>
    )
}
export default Sidebar;