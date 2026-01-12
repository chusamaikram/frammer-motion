import { useRef, useState } from "react";

export default function MediaUpload() {
    const inputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const MAX_SIZE = 10 * 1024 * 1024; // 10MB

    const handleFile = (selectedFile) => {
        if (!selectedFile) return;

        if (selectedFile.size > MAX_SIZE) {
            alert("File size must be under 10MB");
            return;
        }

        setFile(selectedFile);
    };

    return (
        <div className="w-full">
            <label className="text-base/normal font-medium text-[#373940]">
                Attach file (optional)
            </label>

            {/* Upload Box */}
            <div
                onClick={() => inputRef.current.click()}
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                    handleFile(e.dataTransfer.files[0]);
                }}
                className={`mt-2 p-6 rounded-lg border-2 border-dashed outline-none w-full text-sm
                flex items-center justify-center cursor-pointer transition
                ${isDragging
                        ? "border-[#087BB3] bg-blue-50"
                        : "border-[#D9DADF]"
                    }
                hover:border-[#087BB3]`}
            >
                <div className="flex flex-col items-center gap-1">
                    {/* Icon */}
                    <span className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-[#64748B]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                        </svg>
                    </span>

                    {/* Text */}
                    <div>
                        <p className="text-sm/5 text-[#374151]">
                            <span className="text-[#087bb3]">
                                Click to upload
                            </span>{" "}
                            or drag and drop
                        </p>
                        <p className="mt-1 text-xs text-[#6B7280] text-center">
                            PNG, JPG, PDF up to 10MB
                        </p>
                    </div>
                </div>

                {/* Hidden Input */}
                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    accept=".png,.jpg,.jpeg,.pdf"
                    onChange={(e) => handleFile(e.target.files[0])}
                />
            </div>

            {/* Selected File Preview */}
            {file && (
                <div className="mt-2 flex items-center justify-between text-sm text-[#374151]">
                    <span className="truncate">{file.name}</span>
                    <button
                        onClick={() => setFile(null)}
                        className="text-red-500 text-xs"
                    >
                        Remove
                    </button>
                </div>
            )}
        </div>
    );
}
