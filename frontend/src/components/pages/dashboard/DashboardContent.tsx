const DashboardContent = () => {
  return (<>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                ["Total Courses", "150", "+5.2% this month"],
                                ["Active Students", "2,450", "+1.8% this month"],
                                ["Total Revenue", "$58,900", "+12.5% this month"],
                                ["Pending Orders", "12", "+3 today"],
                            ].map(([label, value, change], i) => (
                                <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                                    <p className="text-gray-700 dark:text-gray-300">{label}</p>
                                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
                                    <p className="text-green-600 dark:text-green-500 text-sm">{change}</p>
                                </div>
                            ))}
                        </div>

                    </>);
}
export default DashboardContent;