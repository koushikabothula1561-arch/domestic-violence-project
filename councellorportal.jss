// DashboardComponents.jsx (continued)

// Line 371 - Dashboard for Counsellors
const CounsellorDashboard = () => (
    <div className="p-4 md:p-8">
        <h2 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6">Counsellor Portal</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Manage support cases and track progress for individuals in need.
        </p>

        {/* Active Support Requests Mock List */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Active Support Requests (Mock)</h3>
            <ul className="space-y-3">
                {/* List Item (Lines 380-382) */}
                <li className="p-3 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg flex justify-between items-center text-gray-800 dark:text-gray-200">
                    Case 1001: New Chat Request
                    <span className="text-sm font-medium text-red-600 dark:text-red-400">High Priority</span>
                </li>
                
                <li className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex justify-between items-center text-gray-800 dark:text-gray-200">
                    Case 1002: Resource Inquiry
                    <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Medium Priority</span>
                </li>
                
            </ul>
        </div>
    </div>
);

// export { CounsellorDashboard };
