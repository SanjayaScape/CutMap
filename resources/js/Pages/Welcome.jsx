import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import CutMapLogo from '@/Components/CutMapLogo';

export default function Welcome() {
    return (
        <div className="min-h-screen bg-warm-bg text-charcoal font-sans antialiased selection:bg-brand selection:text-white">
            <Head title="CutMap — AI-Assisted Fabric Cutting & 2D Nesting Optimizer" />

            {/* Navigation Bar (Tone: #2B07BB) */}
            <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-surface-border shadow-xs">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center">
                            <CutMapLogo />
                        </Link>
                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal-muted">
                            <a href="#how-it-works" className="hover:text-brand transition">How It Works</a>
                            <a href="#comparison" className="hover:text-brand transition">Problem vs Solution</a>
                            <a href="#features" className="hover:text-brand transition">Features</a>
                        </nav>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/login"
                            className="px-4 py-2 text-sm font-medium text-charcoal hover:text-brand transition"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/dashboard"
                            className="px-4 py-2 text-sm font-semibold rounded-lg bg-brand hover:bg-brand-hover text-white shadow-sm shadow-brand/25 transition inline-flex items-center gap-1.5"
                        >
                            <span>Buka Workspace</span>
                            <span className="text-xs">→</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* ================= HERO SECTION (CENTERED TEXT, FABRIC BG, MAGNIFY GLASS, TONE #2B07BB) ================= */}
            <section 
                className="relative overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-surface-border bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/FabricBG.jpg')",
                }}
            >
                {/* Translucent Glassmorphism Overlay tinted with #2B07BB */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-light/95 via-white/90 to-brand-subtle/85 backdrop-blur-[2px]" />

                {/* Subtle Technical Grid Lines */}
                <div 
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #2B07BB 1px, transparent 1px), linear-gradient(to bottom, #2B07BB 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="relative max-w-5xl mx-auto px-6 text-center space-y-8 z-10">
                    {/* Top Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-border text-brand text-xs font-mono font-medium shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                        AI-ASSISTED 2D FABRIC NESTING OPTIMIZER
                    </div>

                    {/* Centered Headline */}
                    <div className="relative inline-block max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-charcoal leading-[1.12]">
                            Unlock the Full Potential of <br className="hidden sm:inline" />
                            <span className="text-brand underline decoration-brand-border decoration-wavy decoration-2">
                                Every Fabric
                            </span>
                        </h1>
                    </div>

                    {/* Centered Subtitle */}
                    <p className="text-base sm:text-lg lg:text-xl text-charcoal-muted leading-relaxed max-w-2xl mx-auto font-normal">
                        Cara paling mudah dan hemat untuk menata setiap potongan kain Anda secara optimal — setiap lembar kain jadi lebih berharga bersama CutMap!
                    </p>

                    {/* Centered Action CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                        <Link
                            href="/cut-plan/new"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-center shadow-lg shadow-brand/25 transition-all duration-150 flex items-center justify-center gap-2 group"
                        >
                            <span>+ Buat Cut Plan Baru</span>
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>

                        <Link
                            href="/dashboard"
                            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-surface hover:bg-warm-bg border border-surface-border text-charcoal font-medium text-center shadow-sm transition"
                        >
                            Eksplor Dashboard Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= THE PROBLEM VS THE SOLUTION (#2B07BB THEMED) ================= */}
            <section id="comparison" className="py-20 bg-surface border-b border-surface-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand">
                            Perbandingan Nyata
                        </span>
                        <h2 className="text-3xl font-bold tracking-tight text-charcoal mt-2">
                            The Problem vs. The CutMap Solution
                        </h2>
                        <p className="text-charcoal-muted mt-2 text-sm">
                            Mengapa menyusun potongan pola secara konvensional membuang waktu dan biaya kain bisnis Anda.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Kartu The Problem */}
                        <div className="bg-warm-bg rounded-2xl border border-surface-border p-8 relative">
                            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-5">
                                ✕
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-3">Cara Konvensional & Manual</h3>
                            <p className="text-sm text-charcoal-muted mb-6">
                                Estimasi posisi pola kain dilakukan manual mengandalkan perkiraan mata tukang potong:
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
                                    <span>Arah serat (*grainline*) rawan miring dan menyebabkan baju melintir setelah dicuci.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Kartu The Solution (Aksen #2B07BB) */}
                        <div className="bg-brand-light/60 rounded-2xl border-2 border-brand/40 p-8 relative shadow-sm">
                            <div className="absolute top-6 right-6">
                                <span className="text-[10px] font-mono font-bold bg-brand text-white px-2.5 py-1 rounded-full uppercase shadow-xs">
                                    AI-Optimized
                                </span>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center font-bold mb-5 shadow-xs">
                                ✓
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-3">Solusi CutMap CAD AI</h3>
                            <p className="text-sm text-charcoal-muted mb-6">
                                Komputasi nesting cerdas yang mengoptimalkan ribuan variasi tata letak dalam hitungan detik:
                            </p>
                            <ul className="space-y-3.5 text-sm text-charcoal font-medium">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand font-bold">✓</span>
                                    <span>Rata-rata utilisasi kain melonjak hingga <strong>88% - 94%</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand font-bold">✓</span>
                                    <span>Mendukung kain irregular via upload foto & editor poligon interaktif.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand font-bold">✓</span>
                                    <span>Kalkulasi layout instan (&lt; 3 detik) dengan opsi perbandingan A / B.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand font-bold">✓</span>
                                    <span>Kepatuhan ketat terhadap arah serat (*grain direction*) & toleransi jarak pisau (*spacing*).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= HOW IT WORKS (#2B07BB THEMED) ================= */}
            <section id="how-it-works" className="py-20 bg-warm-bg border-b border-surface-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand">
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
                                <div className="text-3xl font-mono font-extrabold text-brand/20 mb-3">01</div>
                                <h3 className="text-lg font-bold text-charcoal mb-2">Input Dimensi / Foto Kain</h3>
                                <p className="text-sm text-charcoal-muted leading-relaxed">
                                    Pilih ukuran gulungan standar (`150×100 cm`), input dimensi manual, atau unggah foto kain perca untuk mendeteksi poligon batas kain tak beraturan.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-surface-border text-xs font-mono text-brand font-semibold">
                                Step 1 — Input Fabric
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-surface rounded-2xl border border-surface-border p-7 relative flex flex-col justify-between shadow-sm">
                            <div>
                                <div className="text-3xl font-mono font-extrabold text-brand/20 mb-3">02</div>
                                <h3 className="text-lg font-bold text-charcoal mb-2">Pilih Pola & Smart AI Rules</h3>
                                <p className="text-sm text-charcoal-muted leading-relaxed">
                                    Pilih paket pola garmen (Bundle Sets / Kaos / Kemeja), tentukan kuantitas, serta atur margin tepi, jarak antar potongan, dan arah serat kain.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-surface-border text-xs font-mono text-brand font-semibold">
                                Step 2 — Patterns & Smart AI Rules
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-surface rounded-2xl border border-surface-border p-7 relative flex flex-col justify-between shadow-sm">
                            <div>
                                <div className="text-3xl font-mono font-extrabold text-brand/20 mb-3">03</div>
                                <h3 className="text-lg font-bold text-charcoal mb-2">Generate & Ekspor ke CAD/SVG</h3>
                                <p className="text-sm text-charcoal-muted leading-relaxed">
                                    AI menyusun pola paling padat. Periksa kanvas CAD 2D, lakukan penyesuaian manual jika diperlukan, lalu unduh file SVG siap potong.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-surface-border text-xs font-mono text-brand font-semibold">
                                Step 3 — AI Cutting Workspace
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES GRID ================= */}
            <section id="features" className="py-20 bg-surface border-b border-surface-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand">
                            Fitur Lengkap
                        </span>
                        <h2 className="text-3xl font-bold tracking-tight text-charcoal mt-2">
                            Dirancang untuk Kebutuhan Studio & Garmen Modern
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl border border-surface-border bg-warm-bg/50 hover:border-brand-border transition">
                            <div className="w-10 h-10 rounded-lg bg-brand-light text-brand flex items-center justify-center font-bold mb-4">
                                📐
                            </div>
                            <h4 className="font-bold text-charcoal mb-1">Irregular Fabric Support</h4>
                            <p className="text-xs text-charcoal-muted leading-relaxed">
                                Deteksi dan sesuaikan titik poligon kain bentuk tak beraturan secara manual untuk memanfaatkan kain perca sisa produksi.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl border border-surface-border bg-warm-bg/50 hover:border-brand-border transition">
                            <div className="w-10 h-10 rounded-lg bg-brand-light text-brand flex items-center justify-center font-bold mb-4">
                                ⚡
                            </div>
                            <h4 className="font-bold text-charcoal mb-1">Instant Multi-Option Nesting</h4>
                            <p className="text-xs text-charcoal-muted leading-relaxed">
                                Bandingkan AI Option A dan Option B dengan fokus utilisasi kain maksimal atau kemudahan alur potong lurus (*guillotine cut*).
                            </p>
                        </div>

                        <div className="p-6 rounded-xl border border-surface-border bg-warm-bg/50 hover:border-brand-border transition">
                            <div className="w-10 h-10 rounded-lg bg-brand-light text-brand flex items-center justify-center font-bold mb-4">
                                📦
                            </div>
                            <h4 className="font-bold text-charcoal mb-1">Bundle Set Management</h4>
                            <p className="text-xs text-charcoal-muted leading-relaxed">
                                Kelompokkan komponen busana (badan depan, belakang, lengan, saku) ke dalam satu bundle set untuk input batch dengan 1-klik.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl border border-surface-border bg-warm-bg/50 hover:border-brand-border transition">
                            <div className="w-10 h-10 rounded-lg bg-brand-light text-brand flex items-center justify-center font-bold mb-4">
                                🎯
                            </div>
                            <h4 className="font-bold text-charcoal mb-1">Grain Direction Enforcement</h4>
                            <p className="text-xs text-charcoal-muted leading-relaxed">
                                Kunci arah serat vertikal/horizontal agar potongan pola tidak miring dan hasil baju tetap simetris saat dipakai.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl border border-surface-border bg-warm-bg/50 hover:border-brand-border transition">
                            <div className="w-10 h-10 rounded-lg bg-brand-light text-brand flex items-center justify-center font-bold mb-4">
                                ✂️
                            </div>
                            <h4 className="font-bold text-charcoal mb-1">Blade Spacing & Margin</h4>
                            <p className="text-xs text-charcoal-muted leading-relaxed">
                                Atur toleransi jarak antar pola (misal: 5 mm untuk gunting kain atau 1 mm untuk mesin laser CNC).
                            </p>
                        </div>

                        <div className="p-6 rounded-xl border border-surface-border bg-warm-bg/50 hover:border-brand-border transition">
                            <div className="w-10 h-10 rounded-lg bg-brand-light text-brand flex items-center justify-center font-bold mb-4">
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

            {/* ================= BOTTOM CTA BANNER (ROYAL BLUE GRADIENT #2B07BB) ================= */}
            <section className="py-20 bg-gradient-to-r from-brand-dark via-brand to-brand-accent text-white relative overflow-hidden shadow-inner">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-brand-light text-xs font-mono font-medium backdrop-blur-xs">
                        MAKE EVERY CUT COUNT • BLUE EDITION
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Siap Menghemat Bahan Kain Anda Hari Ini?
                    </h2>
                    <p className="text-brand-subtle text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                        Mulai rancang rencana pemotongan kain pertama Anda dalam hitungan menit dengan AI Nesting Optimizer.
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/cut-plan/new"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-brand hover:bg-brand-light transition font-bold shadow-lg shadow-black/10"
                        >
                            <span>Mulai Cut Plan Baru Sekarang</span>
                            <span className="text-lg">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="bg-surface py-8 border-t border-surface-border text-xs text-charcoal-muted">
                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <CutMapLogo showText={true} textClassName="text-base" />
                        <span className="font-mono text-charcoal-light">© 2026 CutMap Inc.</span>
                    </div>
                    <div className="flex items-center gap-6 font-mono text-[11px]">
                        <span className="text-brand font-medium">Royal Blue #2B07BB</span>
                        <span>Fabric CAD v1.3</span>
                        <Link href="/dashboard" className="text-brand hover:underline font-semibold">
                            Buka Workspace →
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
