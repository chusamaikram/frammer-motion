
import TablePagination from "../../components/Tablepagination";
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

const UserTable = ({
    users = [],
    searchValue = "",
    onSelectionChange,
}) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const headerCheckboxRef = useRef(null);

    /* ---------------- Pagination ---------------- */

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        setCurrentPage(1);
    }, [rowsPerPage, searchValue]);

    /* ---------------- Filter (from parent search) ---------------- */

    const filteredUsers = useMemo(() => {
        if (!searchValue) return users;

        const q = searchValue.toLowerCase();

        return users.filter(u =>
            [
                u.employeeId,
                u.name,
                u.role,
                u.region,
                u.clinic,
            ]
                .join(" ")
                .toLowerCase()
                .includes(q)
        );
    }, [users, searchValue]);

    /* ---------------- Pagination Data ---------------- */

    const totalItems = filteredUsers.length;

    const currentData = useMemo(() => {
        const start = (currentPage - 1) * rowsPerPage;
        return filteredUsers.slice(start, start + rowsPerPage);
    }, [filteredUsers, currentPage, rowsPerPage]);

    const pageIds = useMemo(
        () => currentData.map(u => u.employeeId),
        [currentData]
    );

    /* ---------------- Selection ---------------- */

    const allSelected =
        pageIds.length > 0 && pageIds.every(id => selectedRows.includes(id));

    const someSelected =
        pageIds.some(id => selectedRows.includes(id)) && !allSelected;

    useEffect(() => {
        if (headerCheckboxRef.current) {
            headerCheckboxRef.current.indeterminate = someSelected;
        }
    }, [someSelected]);

    useEffect(() => {
        setSelectedRows([]);
    }, [users]);

    useEffect(() => {
        const selectedUsers = users.filter(u =>
            selectedRows.includes(u.employeeId)
        );
        onSelectionChange?.(selectedUsers);
    }, [selectedRows, users, onSelectionChange]);

    const toggleAll = useCallback(
        (checked) => {
            setSelectedRows(prev => {
                if (checked) {
                    return [...new Set([...prev, ...pageIds])];
                }
                return prev.filter(id => !pageIds.includes(id));
            });
        },
        [pageIds]
    );

    const toggleRow = useCallback((id, checked) => {
        setSelectedRows(prev =>
            checked ? [...prev, id] : prev.filter(x => x !== id)
        );
    }, []);

    /* ---------------- UI ---------------- */

    const Header = [
        "Name",
        "Role",
        "Region",
        "Clinic",
        "# of Logins",
        "Ticket Submitted",
        "Last Login",
    ];

    const cellClass = "px-7 py-5 text-xs whitespace-nowrap truncate";

    return (
        <div className="w-full">
            <div className="w-full overflow-x-auto">
                <table className="w-full   font-['DM_Sans'] whitespace-nowrap ">
                    <thead>
                        <tr className="bg-[#F7F7F7] rounded-lg">
                            <th className="px-7 py-5 text-xs text-[#63716E] text-center">
                                <div className="flex items-center gap-6">
                                    <input
                                        type="checkbox"
                                        ref={headerCheckboxRef}
                                        checked={allSelected}
                                        onChange={(e) => toggleAll(e.target.checked)}
                                        className="w-3 h-3 rounded-md bg-[#F7F7F7] border border-[#E5E6E6]"
                                    />
                                    <span>Employee ID</span>
                                </div>
                            </th>

                            {Header.map((col, index) => (
                                <th key={index} className="px-7 py-5 text-xs text-[#63716E] text-start">
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {currentData.length === 0 && (
                            <tr>
                                <td
                                    colSpan={8}
                                    className="text-center py-10 text-sm text-gray-400"
                                >
                                    No records found
                                </td>
                            </tr>
                        )}
                        {currentData.map(user => {
                            const checked = selectedRows.includes(user.employeeId);

                            return (
                                <tr
                                    key={user.employeeId}
                                    className={`rounded-lg ${checked ? "bg-[#F1F9FF]" : ""
                                        }`}
                                >
                                    <td className="px-7 py-5 text-xs text-[#63716E]">
                                        <div className="flex items-center gap-6">
                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                onChange={(e) =>
                                                    toggleRow(user.employeeId, e.target.checked)
                                                }
                                                className="w-3 h-3 rounded-md bg-[#F7F7F7] border border-[#E5E6E6]"
                                            />
                                            <span>{user.employeeId}</span>
                                        </div>
                                    </td>

                                    <td className="px-7 py-5 text-xs text-start">
                                        <div className="flex items-center gap-1">
                                            <div className="w-7 h-7 rounded-full overflow-hidden">
                                                <img className="w-full h-full object-cover" src={user.avatar} alt={user.name} />
                                            </div>
                                            <span>{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-7 py-5 text-xs text-start">{user.role}</td>
                                    <td className="px-7 py-5 text-xs text-start">{user.region}</td>
                                    <td className="px-7 py-5 text-xs text-start">{user.clinic}</td>
                                    <td className="px-7 py-5 text-xs text-center">{user.logins}</td>
                                    <td className="px-7 py-5 text-xs text-center">{user.ticketsSubmitted}</td>
                                    <td className="px-7 py-5 text-xs text-center">{user.lastLogin}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <TablePagination
                currentPage={currentPage}
                totalItems={totalItems}
                rowsPerPage={rowsPerPage}
                onPageChange={setCurrentPage}
                onRowsPerPageChange={setRowsPerPage}

            />

        </div>
    );
};

export default UserTable;

