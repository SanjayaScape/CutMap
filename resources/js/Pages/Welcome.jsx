import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import CutMapLogo from '@/Components/CutMapLogo';

export default function Welcome() {
    const [selectedTab, setSelectedTab] = useState('tshirt');

    return (
        <div className="min-h-screen bg-warm-bg text-charcoal font-sans antialiased selection:bg-forest selection:text-white">
            <Head title="CutMap — AI-Assisted Fabric Cutting & 2D Nesting Optimizer" />

            {/* Navigation Bar */}
            <header className="sticky top-0 z-40 bg-surface/85 backdrop-blur-md border-b border-surface-border">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center">
                            <CutMapLogo />
                        </Link>
                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal-muted">
                            <a href="#how-it-works" className="hover:text-forest transition">How It Works</a>
                            <a href="#comparison" className="hover:text-forest transition">Problem vs Solution</a>
                            <a href="#features" className="hover:text-forest transition">Features</a>
                        </nav>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/login"
                            className="px-4 py-2 text-sm font-medium text-charcoal hover:text-forest transition"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/dashboard"
                            className="px-4 py-2 text-sm font-semibold rounded-lg bg-forest hover:bg-forest-hover text-white shadow-sm transition inline-flex items-center gap-1.5"
                        >
                            <span>Buka Workspace</span>
                            <span className="text-xs">→</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section (2 Kolom) */}
            <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-surface-border bg-gradient-to-b from-warm-bg to-warm-light">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Kolom Kiri: Copywriting & CTA */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/60 border border-forest/20 text-forest text-xs font-mono font-medium">
                                <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                                AI-ASSISTED 2D NESTING ENGINE
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal leading-[1.1]">
                                Unlock the Full Potential of <span className="text-forest underline decoration-sage decoration-wavy decoration-2">Every Fabric</span>.
                            </h1>

                            <p className="text-lg text-charcoal-muted leading-relaxed max-w-xl">
                                Platform tata letak pemotongan kain presisi tinggi berbasis AI. Maksimalkan utilisasi kain gulungan maupun perca irregular, hemat bahan hingga 28%, dan percepat alur kerja garmen Anda.
                            </p>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                                <Link
                                    href="/cut-plan/new"
                                    className="px-6 py-3.5 rounded-xl bg-forest hover:bg-forest-hover text-white font-semibold text-center shadow-md transition-all duration-150 flex items-center justify-center gap-2 group"
                                >
                                    <span>+ Buat Cut Plan Baru</span>
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>

                                <Link
                                    href="/dashboard"
                                    className="px-6 py-3.5 rounded-xl bg-surface hover:bg-warm-bg border border-surface-border font-medium text-charcoal text-center transition"
                                >
                                    Eksplor Dashboard Demo
                                </Link>
                            </div>

                            <div className="pt-4 flex items-center gap-6 text-xs font-mono text-charcoal-muted">
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-forest" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Standar Roll & Irregular Shape
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-forest" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Export SVG Vector Cutting
                                </span>
                            </div>
                        </div>

                        {/* Kolom Kanan: Pratinjau Interaktif Tata Letak AI pada Kain */}
                        <div className="lg:col-span-6">
                            <div className="bg-surface rounded-2xl border border-surface-border shadow-lg p-5 sm:p-6 relative">
                                {/* Top Control Mockup */}
                                <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-red-400" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <span className="w-3 h-3 rounded-full bg-green-400" />
                                        <span className="ml-2 text-xs font-mono text-charcoal-muted font-medium">
                                            canvas_preview.cad • 150 × 100 cm
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-sage/60 text-forest border border-sage-dark/40">
                                            AI OPTION A
                                        </span>
                                        <span className="text-xs font-mono font-bold text-forest bg-forest-light px-2.5 py-0.5 rounded-full border border-forest/20">
                                            92.4% UTILISASI
                                        </span>
                                    </div>
                                </div>

                                {/* Simulated CAD Nesting Canvas */}
                                <div className="w-full h-72 sm:h-80 bg-warm-bg rounded-xl border border-dashed border-forest/40 relative overflow-hidden p-3 select-none">
                                    {/* Ruler Grid Overlay */}
                                    <div 
                                        className="absolute inset-0 opacity-20 pointer-events-none"
                                        style={{
                                            backgroundImage: 'linear-gradient(to right, #1f6347 1px, transparent 1px), linear-gradient(to bottom, #1f6347 1px, transparent 1px)',
                                            backgroundSize: '20px 20px'
                                        }}
                                    />

                                    {/* Dimension Labels */}
                                    <div className="absolute top-2 left-3 text-[10px] font-mono text-charcoal-muted">0,0 cm</div>
                                    <div className="absolute top-2 right-3 text-[10px] font-mono text-charcoal-muted">150 cm</div>
                                    <div className="absolute bottom-2 left-3 text-[10px] font-mono text-charcoal-muted">100 cm</div>

                                    {/* Nested Garment Patterns */}
                                    {/* Pattern 1: T-Shirt Body Front */}
                                    <div className="absolute top-8 left-8 w-36 h-48 bg-surface border-2 border-forest rounded-t-3xl p-2 shadow-sm flex flex-col justify-between hover:scale-[1.02] transition cursor-pointer">
                                        <div className="flex items-center justify-between text-[9px] font-mono text-forest font-semibold">
                                            <span>TSHIRT_FRONT_L</span>
                                            <span className="bg-sage px-1 rounded">0°</span>
                                        </div>
                                        <div className="text-center py-4">
                                            <span className="text-xs font-medium text-charcoal block">Badan Depan (L)</span>
                                            <span className="text-[9px] font-mono text-charcoal-muted">54 × 70 cm</span>
                                        </div>
                                        <div className="text-[8px] font-mono text-charcoal-light text-right">Grain: Vertical</div>
                                    </div>

                                    {/* Pattern 2: T-Shirt Body Back */}
                                    <div className="absolute top-8 left-48 w-36 h-48 bg-sage/50 border-2 border-forest rounded-t-3xl p-2 shadow-sm flex flex-col justify-between hover:scale-[1.02] transition cursor-pointer">
                                        <div className="flex items-center justify-between text-[9px] font-mono text-forest font-semibold">
                                            <span>TSHIRT_BACK_L</span>
                                            <span className="bg-sage px-1 rounded">180°</span>
                                        </div>
                                        <div className="text-center py-4">
                                            <span className="text-xs font-medium text-charcoal block">Badan Belakang (L)</span>
                                            <span className="text-[9px] font-mono text-charcoal-muted">54 × 72 cm</span>
                                        </div>
                                        <div className="text-[8px] font-mono text-charcoal-light text-right">Grain: Vertical</div>
                                    </div>

                                    {/* Pattern 3: Sleeve Left */}
                                    <div className="absolute top-8 right-6 w-28 h-28 bg-forest-light border-2 border-forest rounded-t-xl p-2 flex flex-col justify-between hover:scale-[1.02] transition cursor-pointer">
                                        <span className="text-[9px] font-mono text-forest font-semibold">SLEEVE_LEFT</span>
                                        <span className="text-[11px] font-medium text-charcoal text-center">Lengan Kiri</span>
                                        <span className="text-[8px] font-mono text-charcoal-muted text-center">24 × 22 cm</span>
                                    </div>

                                    {/* Pattern 4: Sleeve Right */}
                                    <div className="absolute bottom-8 right-6 w-28 h-28 bg-forest-light border-2 border-forest rounded-t-xl p-2 flex flex-col justify-between hover:scale-[1.02] transition cursor-pointer">
                                        <span className="text-[9px] font-mono text-forest font-semibold">SLEEVE_RIGHT</span>
                                        <span className="text-[11px] font-medium text-charcoal text-center">Lengan Kanan</span>
                                        <span className="text-[8px] font-mono text-charcoal-muted text-center">24 × 22 cm</span>
                                    </div>

                                    {/* Pattern 5: Rib Collar Band */}
                                    <div className="absolute bottom-8 left-8 w-84 h-10 bg-surface border border-forest rounded p-1.5 flex items-center justify-between text-[10px] font-mono text-forest">
                                        <span className="font-semibold">RIB_COLLAR_BAND</span>
                                        <span className="text-charcoal-muted">48 × 4 cm</span>
                                        <span className="text-[9px] bg-sage px-1.5 py-0.2 rounded">Optimal 0 Overlap</span>
                                    </div>
                                </div>

                                {/* Bottom Canvas Metrics Bar */}
                                <div className="mt-4 pt-3 border-t border-surface-border grid grid-cols-3 gap-2 text-center">
                                    <div className="p-2 rounded-lg bg-warm-bg">
                                        <div className="text-[10px] font-mono text-charcoal-muted uppercase">Luas Bahan</div>
                                        <div className="text-sm font-mono font-bold text-charcoal">1.50 m²</div>
                                    </div>
                                    <div className="p-2 rounded-lg bg-warm-bg">
                                        <div className="text-[10px] font-mono text-charcoal-muted uppercase">Total Terpakai</div>
                                        <div className="text-sm font-mono font-bold text-forest">1.38 m²</div>
                                    </div>
                                    <div className="p-2 rounded-lg bg-warm-bg">
                                        <div className="text-[10px] font-mono text-charcoal-muted uppercase">Sisa / Waste</div>
                                        <div className="text-sm font-mono font-bold text-yellow-700">7.6% (0.12 m²)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem vs The Solution Section */}
            <section id="comparison" className="py-20 bg-surface border-b border-surface-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-forest">
                            Perbandingan Nyata
                        </span>
                        <h2 className="text-3xl font-bold tracking-tight text-charcoal mt-2">
                            The Problem vs. The CutMap Solution
                        </h2>
                        <p className="text-charcoal-muted mt-2 text-sm">
                            Mengapa memotong kain secara manual membuang uang dan waktu bisnis garmen Anda.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Kartu The Problem */}
                        <div className="bg-warm-bg/70 rounded-2xl border border-surface-border p-8 relative">
                            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-5">
                                ✕
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-3">Cara Konvensional & Manual</h3>
                            <p className="text-sm text-charcoal-muted mb-6">
                                Estimasi posisi pola kain dilakukan manual dengan intuisi tukang potong:
                            </p>
                            <ul className="space-y-3.5 text-sm text-charcoal-muted">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold">−</span>
                                    <span>Tingkat bahan terbuang (*waste*) mencapai <strong>25% - 35%</strong> per lembar kain.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold">−</span>
                                    <span>Kain sisa potongan (*irregular scrap*) langsung dibuang karena sulit dihitung manual.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold">−</span>
                                    <span>Butuh waktu 30–60 menit hanya untuk menyusun pola sebelum gunting berjalan.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold">−</span>
                                    <span>Arah serat (*grainline*) sering terlewat dan menyebabkan cacat garmen jadi.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Kartu The Solution (Aksen Soft Sage) */}
                        <div className="bg-sage/40 rounded-2xl border-2 border-forest/30 p-8 relative shadow-sm">
                            <div className="absolute top-6 right-6">
                                <span className="text-[10px] font-mono font-bold bg-forest text-white px-2.5 py-1 rounded-full uppercase">
                                    AI-Optimized
                                </span>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-forest text-white flex items-center justify-center font-bold mb-5">
                                ✓
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-3">Solusi CutMap CAD AI</h3>
                            <p className="text-sm text-charcoal-muted mb-6">
                                Komputasi nesting cerdas yang mengoptimalkan jutaan kemungkinan tata letak dalam hitungan detik:
                            </p>
                            <ul className="space-y-3.5 text-sm text-charcoal font-medium">
                                <li className="flex items-start gap-3">
                                    <span className="text-forest font-bold">✓</span>
                                    <span>Rata-rata utilisasi kain melonjak hingga <strong>88% - 94%</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-forest font-bold">✓</span>
                                    <span>Mendukung kain irregular via upload foto & editor poligon interaktif.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-forest font-bold">✓</span>
                                    <span>Kalkulasi layout instan (&lt; 3 detik) dengan opsi perbandingan A / B.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-forest font-bold">✓</span>
                                    <span>Kepatuhan ketat terhadap arah serat (*grain direction*) & toleransi jarak pisau (*spacing*).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works (3 Langkah Cepat) */}
            <section id="how-it-works" className="py-20 bg-warm-bg border-b border-surface-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-forest">
                            Alur Sederhana
                        </span>
                        <h2 className="text-3xl font-bold tracking-tight text-charcoal mt-2">
                            How CutMap Works in 3 Quick Steps
                        </h2>
                        <p className="text-charcoal-muted mt-2 text-sm">
                            Dari bahan mentah hingga pola potong teroptimalisasi dalam hitungan menit.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-surface rounded-2xl border border-surface-border p-7 relative flex flex-col justify-between shadow-sm">
                            <div>
                                <div className="text-3xl font-mono font-extrabold text-forest/20 mb-3">01</div>
                                <h3 className="text-lg font-bold text-charcoal mb-2">Input Dimensi / Foto Kain</h3>
                                <p className="text-sm text-charcoal-muted leading-relaxed">
                                    Pilih ukuran gulungan standar (`150×100 cm`), input dimensi kustom, atau unggah foto kain perca untuk mendeteksi poligon bentuk irregular.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-surface-border text-xs font-mono text-forest">
                                Step 1 — Input Fabric
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-surface rounded-2xl border border-surface-border p-7 relative flex flex-col justify-between shadow-sm">
                            <div>
                                <div className="text-3xl font-mono font-extrabold text-forest/20 mb-3">02</div>
                                <h3 className="text-lg font-bold text-charcoal mb-2">Pilih Pola & Smart AI Rules</h3>
                                <p className="text-sm text-charcoal-muted leading-relaxed">
                                    Pilih paket pola garmen (Bundle Sets / Kaos / Kemeja), tentukan kuantitas, serta atur aturan batas tepi, jarak antar potongan, dan arah serat.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-surface-border text-xs font-mono text-forest">
                                Step 2 — Patterns & Smart AI Rules
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-surface rounded-2xl border border-surface-border p-7 relative flex flex-col justify-between shadow-sm">
                            <div>
                                <div className="text-3xl font-mono font-extrabold text-forest/20 mb-3">03</div>
                                <h3 className="text-lg font-bold text-charcoal mb-2">Generate & Ekspor ke CAD/SVG</h3>
                                <p className="text-sm text-charcoal-muted leading-relaxed">
                                    AI menyusun pola paling padat. Periksa kanvas CAD 2D, lakukan penyesuaian manual jika diperlukan, lalu unduh file SVG siap potong.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-surface-border text-xs font-mono text-forest">
                                Step 3 — AI Cutting Workspace
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-20 bg-surface border-b border-surface-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-forest">
                            Fitur Lengkap
                        </span>
                        <h2 className="text-3xl font-bold tracking-tight text-charcoal mt-2">
                            Dirancang untuk Kebutuhan Studio & Garmen Modern
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl border border-surface-border bg-warm-bg/50">
                            <div className="w-10 h-10 rounded-lg bg-forest-light text-forest flex items-center justify-center font-bold mb-4">
                                📐
                            </div>
                            <h4 className="font-bold text-charcoal mb-1">Irregular Fabric Support</h4>
                            <p className="text-xs text-charcoal-muted leading-relaxed">
                                Deteksi dan sesuaikan titik poligon kain bentuk tak beraturan secara manual untuk memanfaatkan kain perca sisa produksi.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl border border-surface-border bg-warm-bg/50">
                            <div className="w-10 h-10 rounded-lg bg-forest-light text-forest flex items-center justify-center font-bold mb-4">
                                ⚡
                            </div>
                            <h4 className="font-bold text-charcoal mb-1">Instant Multi-Option Nesting</h4>
                            <p className="text-xs text-charcoal-muted leading-relaxed">
                                Bandingkan AI Option A dan Option B dengan fokus utilisasi kain maksimal atau kemudahan alur potong lurus (*guillotine cut*).
                            </p>
                        </div>

                        <div className="p-6 rounded-xl border border-surface-border bg-warm-bg/50">
                            <div className="w-10 h-10 rounded-lg bg-forest-light text-forest flex items-center justify-center font-bold mb-4">
                                📦
                            </div>
                            <h4 className="font-bold text-charcoal mb-1">Bundle Set Management</h4>
                            <p className="text-xs text-charcoal-muted leading-relaxed">
                                Kelompokkan komponen busana (badan depan, belakang, lengan, saku) ke dalam satu bundle set untuk input batch dengan 1-klik.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl border border-surface-border bg-warm-bg/50">
                            <div className="w-10 h-10 rounded-lg bg-forest-light text-forest flex items-center justify-center font-bold mb-4">
                                🎯
                            </div>
                            <h4 className="font-bold text-charcoal mb-1">Grain Direction Enforcement</h4>
                            <p className="text-xs text-charcoal-muted leading-relaxed">
                                Kunci arah serat vertikal/horizontal agar potongan pola tidak miring dan hasil baju tetap simetris saat dipakai.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl border border-surface-border bg-warm-bg/50">
                            <div className="w-10 h-10 rounded-lg bg-forest-light text-forest flex items-center justify-center font-bold mb-4">
                                ✂️
                            </div>
                            <h4 className="font-bold text-charcoal mb-1">Blade Spacing & Margin</h4>
                            <p className="text-xs text-charcoal-muted leading-relaxed">
                                Atur toleransi jarak antar pola (misal: 5 mm untuk gunting kain atau 1 mm untuk mesin laser CNC).
                            </p>
                        </div>

                        <div className="p-6 rounded-xl border border-surface-border bg-warm-bg/50">
                            <div className="w-10 h-10 rounded-lg bg-forest-light text-forest flex items-center justify-center font-bold mb-4">
                                🖨️
                            </div>
                            <h4 className="font-bold text-charcoal mb-1">CAD & SVG Ready Export</h4>
                            <p className="text-xs text-charcoal-muted leading-relaxed">
                                Ekspor hasil nesting langsung ke format SVG presisi skala 1:1 untuk proyektor kain atau mesin potong otomatis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section className="py-20 bg-forest text-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-forest-hover border border-sage/30 text-sage text-xs font-mono">
                        MAKE EVERY CUT COUNT
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Siap Menghemat Bahan Kain Anda Hari Ini?
                    </h2>
                    <p className="text-sage-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                        Mulai rancang rencana pemotongan kain pertama Anda dalam hitungan menit dengan AI Nesting Optimizer.
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/cut-plan/new"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-surface text-forest hover:bg-sage transition font-bold shadow-lg"
                        >
                            <span>Mulai Cut Plan Baru Sekarang</span>
                            <span className="text-lg">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-surface py-8 border-t border-surface-border text-xs text-charcoal-muted">
                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <CutMapLogo showText={true} textClassName="text-base" />
                        <span className="font-mono text-charcoal-light">© 2026 CutMap Inc.</span>
                    </div>
                    <div className="flex items-center gap-6 font-mono text-[11px]">
                        <span>CAD v1.0</span>
                        <span>Warm Off-White UI</span>
                        <Link href="/dashboard" className="text-forest hover:underline">
                            Buka Workspace →
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
