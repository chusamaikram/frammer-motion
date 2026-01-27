export default function TablePagination({
    currentPage,
    totalItems,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
}) {
    const totalPages = Math.ceil(totalItems / rowsPerPage)

    return (
        <div className="flex items-center justify-between mt-4 text-sm text-[#757575]">
            {/* Rows per page */}
            <div className="flex items-center gap-2">
                <span>Show</span>

                <select
                    value={rowsPerPage}
                    onChange={(e) => {
                        onRowsPerPageChange(Number(e.target.value))
                        onPageChange(1)
                    }}
                    className="rounded-[8px] p-1.5 bg-[#F7F7F7] text-[#333] font-medium"
                >
                    {[5, 10, 20, 30, 50].map(n => (
                        <option key={n} value={n}>{n}</option>
                    ))}
                </select>

                <span>of {totalItems} results</span>
            </div>

            {/* Page numbers */}
            <div className="flex items-center gap-1">
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="h-7 w-7 flex items-center justify-center bg-[#F5F5F5] rounded-[8px] disabled:opacity-40"
                >
                    ‹
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .slice(
                        Math.max(0, currentPage - 2),
                        Math.min(totalPages, currentPage + 1)
                    )
                    .map(page => (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`px-2.5 py-1.5 text-xs font-medium rounded-[8px] ${currentPage === page
                                    ? "bg-[#087BB3] text-white"
                                    : "bg-[#F7F7F7] text-[#333]"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="h-7 w-7 flex items-center justify-center bg-[#F5F5F5] rounded-[8px] disabled:opacity-40"
                >
                    ›
                </button>
            </div>
        </div>
    )
}
