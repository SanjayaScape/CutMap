import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard() {
    const kpiCards = [
        {
            title: 'Total Cut Plans',
            value: '142',
            unit: 'Rencana',
            trend: '+12% bln ini',
            trendPositive: true,
            icon: (
                <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            title: 'Total Fabric Analyzed',
            value: '1,845.2',
            unit: 'm²',
            trend: '+320 m² minggu ini',
            trendPositive: true,
            icon: (
                <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z" />
                </svg>
            ),
        },
        {
            title: 'Average Material Utilization',
            value: '91.8%',
            unit: 'Target > 88%',
            trend: '+4.2% efisiensi AI',
            trendPositive: true,
            icon: (
                <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
        },
    ];

    const recentCutPlans = [
        {
            id: 'CP-2026-089',
            title: 'Cotton Combed 30s — Oversized T-Shirt (50 Pcs)',
            fabricType: 'Standard Roll (150 × 240 cm)',
            category: 'T-Shirt Garment',
            utilization: 93.4,
            piecesCount: 200,
            date: '10 menit lalu',
            status: 'Optimal',
            previewColor: '#2B07BB',
        },
        {
            id: 'CP-2026-088',
            title: 'Linen Crepe — Summer Dress Pattern & Sleeves',
            fabricType: 'Standard Roll (140 × 180 cm)',
            category: 'Dress Atelier',
            utilization: 91.2,
            piecesCount: 48,
            date: '2 jam lalu',
            status: 'Optimal',
            previewColor: '#4318d1',
        },
        {
            id: 'CP-2026-087',
            title: 'Denim Selvedge Scrap — Totebag & Pouch Nested',
            fabricType: 'Irregular Polygon (Upload Foto Perca)',
            category: 'Upcycling / Scraps',
            utilization: 87.8,
            piecesCount: 16,
            date: 'Kemarin',
            status: 'Warning Spacing',
            previewColor: '#ca8a04',
        },
        {
            id: 'CP-2026-086',
            title: 'Oxford Cotton — Kemeja Formal Slim Fit (L & XL)',
            fabricType: 'Standard Roll (150 × 300 cm)',
            category: 'Formal Shirt',
            utilization: 92.0,
            piecesCount: 84,
            date: '15 Nov 2026',
            status: 'Optimal',
            previewColor: '#2B07BB',
        },
    ];

    const utilizationBars = [
        { day: 'Sen', rate: 89, plans: 12 },
        { day: 'Sel', rate: 93, plans: 18 },
        { day: 'Rab', rate: 91, plans: 14 },
        { day: 'Kam', rate: 95, plans: 22 },
        { day: 'Jum', rate: 92, plans: 19 },
        { day: 'Sab', rate: 94, plans: 15 },
        { day: 'Min', rate: 90, plans: 8 },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h1 className="text-xl font-bold tracking-tight text-charcoal">
                        Overview Workspace
                    </h1>
                    <p className="text-xs text-charcoal-muted mt-0.5">
                        Ringkasan performa optimasi pemotongan kain dan rencana potong aktif.
                    </p>
                </div>
            }
            actions={
                <Link
                    href="/cut-plan/new"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-forest hover:bg-forest-hover text-white text-xs font-semibold shadow-sm transition"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <span>+ New Cut Plan</span>
                </Link>
            }
        >
            <Head title="Overview Dashboard - CutMap" />

            <div className="space-y-8">
                {/* 3 KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {kpiCards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-surface rounded-2xl border border-surface-border p-6 shadow-sm hover:border-forest/30 transition flex flex-col justify-between"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-charcoal-muted">{card.title}</span>
                                <div className="p-2 rounded-lg bg-warm-bg border border-surface-border">
                                    {card.icon}
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-extrabold font-mono text-charcoal tracking-tight">
                                        {card.value}
                                    </span>
                                    <span className="text-xs font-mono text-charcoal-muted">{card.unit}</span>
                                </div>
                                <div className="mt-2 text-xs font-mono text-forest flex items-center gap-1">
                                    <span>↑</span>
                                    <span>{card.trend}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section Dua Kolom: Recent Cut Plans & Recent Utilization Chart */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Kolom Kiri: Recent Cut Plans (8 Kolom) */}
                    <div className="lg:col-span-8 bg-surface rounded-2xl border border-surface-border p-6 shadow-sm">
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border">
                            <div>
                                <h2 className="text-base font-bold text-charcoal">Recent Cut Plans</h2>
                                <p className="text-xs text-charcoal-muted">Rencana pemotongan kain yang baru saja dioptimasi.</p>
                            </div>
                            <Link
                                href="/projects"
                                className="text-xs font-medium text-forest hover:underline"
                            >
                                Lihat Semua Proyek →
                            </Link>
                        </div>

                        {/* List Cut Plans */}
                        <div className="space-y-3.5">
                            {recentCutPlans.map((plan) => (
                                <div
                                    key={plan.id}
                                    className="p-4 rounded-xl border border-surface-border hover:border-forest/40 hover:bg-warm-bg/40 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Mini Fabric Preview Thumbnail */}
                                        <div className="w-16 h-12 rounded-lg bg-warm-bg border border-dashed border-surface-border flex items-center justify-center p-1 relative overflow-hidden shrink-0 group-hover:border-forest transition">
                                            {/* Simulated Nested Mini Polygons */}
                                            <div className="w-5 h-7 rounded-t bg-forest/20 border border-forest/40 absolute left-1 top-2" />
                                            <div className="w-4 h-5 rounded bg-sage border border-forest/40 absolute left-7 top-1" />
                                            <div className="w-3 h-4 rounded bg-surface border border-forest/40 absolute right-1 bottom-1" />
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[11px] font-mono text-charcoal-light">{plan.id}</span>
                                                <span className="text-xs font-bold text-charcoal group-hover:text-forest transition">
                                                    {plan.title}
                                                </span>
                                            </div>
                                            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-charcoal-muted font-mono">
                                                <span className="flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                                                    {plan.fabricType}
                                                </span>
                                                <span>{plan.piecesCount} pola potong</span>
                                                <span>{plan.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Utilization & Action */}
                                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                                        <div className="text-right">
                                            <div className="text-sm font-mono font-bold text-forest">
                                                {plan.utilization}%
                                            </div>
                                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                                                plan.status === 'Optimal' 
                                                    ? 'bg-forest-light text-forest border-forest/20' 
                                                    : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                            }`}>
                                                {plan.status}
                                            </span>
                                        </div>

                                        <Link
                                            href="/cut-plan/new"
                                            className="p-2 rounded-lg text-charcoal-muted hover:text-forest hover:bg-surface-subtle transition"
                                            title="Buka CAD Workspace"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Kolom Kanan: Recent Utilization Bar Chart (4 Kolom) */}
                    <div className="lg:col-span-4 bg-surface rounded-2xl border border-surface-border p-6 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border">
                                <div>
                                    <h2 className="text-base font-bold text-charcoal">Recent Utilization</h2>
                                    <p className="text-xs text-charcoal-muted">Efisiensi pemotongan 7 hari terakhir.</p>
                                </div>
                                <span className="text-xs font-mono font-semibold text-forest bg-forest-light px-2 py-0.5 rounded border border-forest/20">
                                    Avg 92.1%
                                </span>
                            </div>

                            {/* Bar Chart Visualization */}
                            <div className="h-48 flex items-end justify-between gap-2 pt-6 px-2">
                                {utilizationBars.map((bar) => {
                                    const heightPercent = Math.max(20, (bar.rate - 75) * 4);
                                    return (
                                        <div key={bar.day} className="flex-1 flex flex-col items-center gap-2 group">
                                            {/* Tooltip on hover */}
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono bg-charcoal text-white px-1.5 py-0.5 rounded absolute -translate-y-8 pointer-events-none">
                                                {bar.rate}% ({bar.plans} plan)
                                            </div>

                                            {/* Bar */}
                                            <div className="w-full bg-warm-bg rounded-t-md h-36 flex items-end">
                                                <div
                                                    style={{ height: `${heightPercent}%` }}
                                                    className="w-full bg-forest hover:bg-forest-hover rounded-t-md transition-all duration-300 relative group-hover:shadow-sm"
                                                />
                                            </div>

                                            {/* Day label */}
                                            <span className="text-[11px] font-mono text-charcoal-muted">
                                                {bar.day}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 pt-4 border-t border-surface-border space-y-2 text-xs">
                                <div className="flex items-center justify-between text-charcoal-muted">
                                    <span>Bahan terselamatkan:</span>
                                    <span className="font-mono font-bold text-forest">148.5 m² (Est. Rp 4.2 Juta)</span>
                                </div>
                                <div className="flex items-center justify-between text-charcoal-muted">
                                    <span>Toleransi batas potong rata-rata:</span>
                                    <span className="font-mono text-charcoal">5 mm blade spacing</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick CTA to New Plan */}
                        <div className="mt-6 pt-4 border-t border-surface-border">
                            <Link
                                href="/cut-plan/new"
                                className="w-full py-2.5 px-4 rounded-xl bg-sage/60 hover:bg-sage text-forest text-xs font-semibold flex items-center justify-center gap-2 transition"
                            >
                                <span>Optimasi Kain Berikutnya</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
