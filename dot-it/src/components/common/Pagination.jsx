// export default function Pagination({
//     currentPage,
//     totalPages = 10,
//     onPageChange,
// }) {
//     return (
//         <div className="flex items-center justify-between w-full mt-8 overflow-x-auto">
//             {/* Previous */}
//             <button
//                 onClick={() => onPageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full border border-[#D0D5DD] text-sm
//           ${currentPage === 1
//                         ? "opacity-50 cursor-not-allowed"
//                         : "hover:bg-gray-100"
//                     }`}
//             >
//                 <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M15.8346 10.0013H4.16797M4.16797 10.0013L10.0013 15.8346M4.16797 10.0013L10.0013 4.16797" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//                 </span>
//                 Previous
//             </button>

//             {/* Page Numbers */}
//             <div className="flex items-center gap-2">
//                 {Array.from({ length: totalPages }, (_, index) => {
//                     const page = index + 1;

//                     return (
//                         <button
//                             key={page}
//                             onClick={() => onPageChange(page)}
//                             className={`w-10 h-10 rounded-lg text-sm transition
//                 ${currentPage === page
//                                     ? "bg-gray-100 font-semibold text-[#0160C9]"
//                                     : "hover:bg-gray-100 font-medium text-[#788393]"
//                                 }`}
//                         >
//                             {page}
//                         </button>
//                     );
//                 })}
//             </div>

//             {/* Next */}
//             <button
//                 onClick={() => onPageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full border border-[#D0D5DD] text-sm
//           ${currentPage === totalPages
//                         ? "opacity-50 cursor-not-allowed"
//                         : "hover:bg-gray-100"
//                     }`}
//             >
//                 Next
//                 <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M4.16797 10.0013H15.8346M15.8346 10.0013L10.0013 4.16797M15.8346 10.0013L10.0013 15.8346" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//                 </span>
//             </button>
//         </div>
//     );
// }



export default function Pagination({
    currentPage,
    totalPages = 10,
    onPageChange,
}) {
    return (
        <div className="flex gap-4 flex-row items-center justify-between w-full mt-8 overflow-x-auto">

            {/* Previous */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-fit flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full border border-[#D0D5DD] text-sm
          ${currentPage === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-gray-100"
                    }`}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15.8346 10.0013H4.16797M4.16797 10.0013L10.0013 15.8346M4.16797 10.0013L10.0013 4.16797" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Mobile Page Info */}
            <div className="text-sm text-gray-600 sm:hidden text-center">
                Page <span className="font-semibold">{currentPage}</span> of{" "}
                <span className="font-semibold">{totalPages}</span>
            </div>

            {/* Page Numbers (hidden on mobile) */}
            <div className="hidden sm:flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;

                    return (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`w-9 h-9 rounded-lg text-sm transition
                ${currentPage === page
                                    ? "bg-gray-100 font-semibold text-[#0160C9]"
                                    : "hover:bg-gray-100 font-medium text-[#788393]"
                                }`}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>

            {/* Next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex w-fit items-center gap-2 px-3 py-2 sm:px-4 rounded-full border border-[#D0D5DD] text-sm
          ${currentPage === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-gray-100"
                    }`}
            >
                <span className="hidden sm:inline">Next</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.16797 10.0013H15.8346M15.8346 10.0013L10.0013 4.16797M15.8346 10.0013L10.0013 15.8346" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}
