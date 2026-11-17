import React from 'react';

export default function CutMapLogo({ className = 'h-8 w-auto', showText = true, textClassName = 'text-xl' }) {
    return (
        <div className="flex items-center gap-2.5 select-none">
            {/* CAD / Cutting Nesting Icon */}
            <div className="relative flex items-center justify-center h-9 w-9 rounded-lg bg-forest text-white shadow-sm overflow-hidden border border-forest-dark">
                <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                >
                    {/* Outer Fabric Outline */}
                    <rect x="3" y="3" width="30" height="30" rx="3" stroke="#dce7df" strokeWidth="1.5" strokeDasharray="3 2" />
                    
                    {/* Nested Pattern Piece 1 */}
                    <path
                        d="M6 7H18V19H6V7Z"
                        fill="#dce7df"
                        fillOpacity="0.85"
                    />
                    
                    {/* Nested Pattern Piece 2 (L-shape / sleeve) */}
                    <path
                        d="M21 7H29V25H23V13H21V7Z"
                        fill="#ffffff"
                        fillOpacity="0.95"
                    />

                    {/* Small nested piece 3 */}
                    <path
                        d="M6 22H18V29H6V22Z"
                        fill="#ffffff"
                        fillOpacity="0.75"
                    />

                    {/* Cut guideline crosshair / precision cut marker */}
                    <circle cx="19.5" cy="20.5" r="1.5" fill="#facc15" />
                </svg>
            </div>

            {showText && (
                <div className="flex flex-col">
                    <span className={`font-semibold tracking-tight text-charcoal font-sans flex items-center gap-1 ${textClassName}`}>
                        Cut<span className="text-forest">Map</span>
                        <span className="inline-block text-[10px] font-mono font-medium px-1.5 py-0.2 rounded bg-sage/60 text-forest border border-sage-dark/40">
                            CAD AI
                        </span>
                    </span>
                </div>
            )}
        </div>
    );
}
