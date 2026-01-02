
export default function Pagination({
    currentPage,
    totalPages,
    onPageChange
}) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center items-center gap-3 mt-12 text-white">

            {/* Previous */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border 
          ${currentPage === 1
                        ? "opacity-40 cursor-not-allowed"
                        : "hover:bg-white hover:text-black"
                    }
        `}
                aria-label="prev btn">
                ← Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;

                return (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-10 h-10 rounded-full border
              ${currentPage === page
                                ? "bg-white text-black"
                                : "hover:bg-white hover:text-black"
                            }
            `}
                    >
                        {page}
                    </button>
                );
            })}

            {/* Next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border
          ${currentPage === totalPages
                        ? "opacity-40 cursor-not-allowed"
                        : "hover:bg-white hover:text-black"
                    }
        `}
                aria-label="next btn" >
                Next →
            </button>
        </div>
    );
}
