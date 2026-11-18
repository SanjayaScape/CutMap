import React from 'react';
import { Link } from '@inertiajs/react';
import CutMapLogo from '@/Components/CutMapLogo';

export default function GuestLayout({ children, title = 'Welcome back', subtitle = 'Access your CutMap workspace' }) {
    return (
        <div className="min-h-screen bg-warm-bg flex flex-col lg:flex-row text-charcoal">
            {/* Left Brand & Visual Column (Soft Blue Panel) */}
            <div className="lg:w-5/12 bg-brand-subtle/60 border-b lg:border-b-0 lg:border-r border-surface-border p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
                {/* Subtle CAD Grid Background */}
                <div 
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#2B07BB 1px, transparent 1px), radial-gradient(#2B07BB 1px, #ede9fe 1px)`,
                        backgroundSize: '24px 24px',
                        backgroundPosition: '0 0, 12px 12px'
                    }}
                />

                {/* Top Logo */}
                <div className="relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2">
                        <CutMapLogo textClassName="text-2xl" />
                    </Link>
                </div>

                {/* Center CAD Polygon & Nesting Illustration */}
                <div className="relative z-10 my-10 max-w-sm">
                    <div className="bg-surface/95 backdrop-blur-sm rounded-xl p-5 border border-brand/20 shadow-sm">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-surface-border text-xs font-mono text-charcoal-muted">
                            <span className="flex items-center gap-1.5 font-medium text-brand">
                                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                                2D NESTING ENGINE
                            </span>
                            <span>150 × 100 cm</span>
                        </div>

                        {/* Interactive-looking Fabric Sheet with nested irregular & garment polygons */}
                        <div className="w-full h-44 bg-warm-bg rounded-lg border border-dashed border-brand/30 relative overflow-hidden flex items-center justify-center">
                            {/* Ruler CM grid ticks */}
                            <div className="absolute top-1 left-2 text-[9px] font-mono text-charcoal-light">0 cm</div>
                            <div className="absolute top-1 right-2 text-[9px] font-mono text-charcoal-light">150 cm</div>
                            
                            {/* Nested Pattern piece: T-Shirt Front */}
                            <div className="absolute top-4 left-6 w-24 h-28 bg-brand-light border border-brand/40 rounded-t-2xl flex flex-col items-center justify-center text-[10px] font-mono text-brand font-semibold">
                                <span>FRONT</span>
                                <span className="text-[8px] font-normal text-charcoal-muted">54×68 cm</span>
                            </div>

                            {/* Nested Pattern piece: Sleeve Left */}
                            <div className="absolute top-4 left-32 w-16 h-18 bg-brand-subtle border border-brand/40 rounded-t-lg flex flex-col items-center justify-center text-[9px] font-mono text-brand">
                                <span>SLEEVE L</span>
                                <span className="text-[8px] text-charcoal-muted">22×18 cm</span>
                            </div>

                            {/* Nested Pattern piece: Collar / Trim */}
                            <div className="absolute bottom-5 left-32 w-28 h-8 bg-surface border border-brand/40 rounded flex items-center justify-center text-[8px] font-mono text-brand">
                                <span>COLLAR BAND (2x)</span>
                            </div>

                            {/* Utilization Pill */}
                            <div className="absolute bottom-3 right-3 bg-brand text-white text-[10px] font-mono font-medium px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                                <span>UTIL: 91.8%</span>
                            </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between text-xs">
                            <span className="text-charcoal-muted">Waste reduction:</span>
                            <span className="font-mono font-semibold text-brand">-24.3% scrap</span>
                        </div>
                    </div>

                    <div className="mt-8 space-y-2">
                        <span className="inline-block px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-brand-light text-brand border border-brand/20">
                            AI-Assisted Fabric Optimization
                        </span>
                        <h2 className="text-2xl font-bold tracking-tight text-charcoal">
                            Make Every Cut Count.
                        </h2>
                        <p className="text-sm text-charcoal-muted leading-relaxed">
                            Maksimalkan potensi setiap meter kain roll maupun sisa kain tak beraturan dengan algoritma nesting cerdas.
                        </p>
                    </div>
                </div>

                {/* Bottom Footer Note */}
                <div className="relative z-10 text-xs text-charcoal-muted font-mono">
                    CutMap CAD v1.0 • Precision Garment Nesting
                </div>
            </div>

            {/* Right Form Column */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-16">
                <div className="w-full max-w-md">
                    {/* Header Inside Form Column */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold tracking-tight text-charcoal">{title}</h1>
                        <p className="text-sm text-charcoal-muted mt-1">{subtitle}</p>
                    </div>

                    {/* Card Surface */}
                    <div className="bg-surface rounded-2xl border border-surface-border p-6 sm:p-8 shadow-sm">
                        {children}
                    </div>

                    {/* Quick navigation helpers for preview */}
                    <div className="mt-6 text-center text-xs text-charcoal-muted">
                        <Link href="/dashboard" className="text-brand hover:underline font-medium">
                            Langsung Pratinjau Workspace (Bypass Login) →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
