import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Projects() {
    const [filterCategory, setFilterCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const projects = [
        {
            id: 'CP-2026-089',
            title: 'Cotton Combed 30s — Oversized T-Shirt (50 Pcs)',
            fabricType: 'Standard Roll 150 × 240 cm',
            category: 'T-Shirt',
            utilization: 93.4,
            pieces: 200,
            date: '10 menit lalu',
            status: 'Optimal',
        },
        {
            id: 'CP-2026-088',
            title: 'Linen Crepe — Summer Dress Pattern & Sleeves',
            fabricType: 'Standard Roll 140 × 180 cm',
            category: 'Dress',
            utilization: 91.2,
            pieces: 48,
            date: '2 jam lalu',
            status: 'Optimal',
        },
        {
            id: 'CP-2026-087',
            title: 'Denim Selvedge Scrap — Totebag & Pouch Nested',
            fabricType: 'Irregular Polygon (Upload Foto Perca)',
            category: 'Accessories',
            utilization: 87.8,
            pieces: 16,
            date: 'Kemarin',
            status: 'Warning Spacing',
        },
        {
            id: 'CP-2026-086',
            title: 'Oxford Cotton — Kemeja Formal Slim Fit (L & XL)',
            fabricType: 'Standard Roll 150 × 300 cm',
            category: 'Shirt',
            utilization: 92.0,
            pieces: 84,
            date: '15 Nov 2026',
            status: 'Optimal',
        },
        {
            id: 'CP-2026-085',
            title: 'Rayon Viscose Floral — Flare Skirt Tiered',
            fabricType: 'Standard Roll 150 × 200 cm',
            category: 'Dress',
            utilization: 94.1,
            pieces: 32,
            date: '13 Nov 2026',
            status: 'Optimal',
        },
        {
            id: 'CP-2026-084',
            title: 'Heavy Twill Khaki — Cargo Shorts Multi-Pocket',
            fabricType: 'Standard Roll 140 × 220 cm',
            category: 'Bottoms',
            utilization: 89.6,
            pieces: 56,
            date: '10 Nov 2026',
            status: 'Optimal',
        },
    ];

    const filteredProjects = projects.filter((p) => {
        const matchesCategory = filterCategory === 'all' || p.category.toLowerCase() === filterCategory.toLowerCase();
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-charcoal">
                            My Saved Projects
                        </h1>
                        <p className="text-xs text-charcoal-muted mt-0.5">
                            Arsip seluruh rencana pemotongan kain dan riwayat efisiensi studio Anda.
                        </p>
                    </div>

                    <Link
                        href="/cut-plan/new"
                        className="px-4 py-2 rounded-lg bg-forest hover:bg-forest-hover text-white text-xs font-semibold shadow-sm flex items-center gap-1.5 transition"
                    >
                        <span>+ New Cut Plan</span>
                    </Link>
                </div>
            }
        >
            <Head title="My Projects - CutMap" />

            <div className="space-y-6">
                {/* Filter and Search Bar */}
                <div className="bg-surface rounded-2xl border border-surface-border p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-1 bg-warm-bg p-1 rounded-xl border border-surface-border text-xs font-mono">
                        {['all', 'T-Shirt', 'Shirt', 'Dress', 'Accessories'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilterCategory(cat)}
                                className={`px-3 py-1.5 rounded-lg capitalize transition ${
                                    filterCategory === cat ? 'bg-forest text-white font-bold' : 'text-charcoal-muted hover:text-charcoal'
                                }`}
                            >
                                {cat === 'all' ? 'Semua Proyek' : cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative max-w-xs w-full">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari ID atau nama kain..."
                            className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border-surface-border focus:border-forest focus:ring-forest"
                        />
                        <svg className="w-4 h-4 text-charcoal-light absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-surface rounded-2xl border border-surface-border p-5 shadow-sm hover:border-forest/40 transition flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between text-xs font-mono mb-2">
                                    <span className="text-charcoal-light">{project.id}</span>
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                                        project.status === 'Optimal' 
                                            ? 'bg-forest-light text-forest border-forest/20' 
                                            : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>

                                <h3 className="text-sm font-bold text-charcoal group-hover:text-forest transition">
                                    {project.title}
                                </h3>

                                <div className="mt-3 p-3 rounded-xl bg-warm-bg/70 border border-surface-border space-y-1.5 text-xs font-mono">
                                    <div className="flex justify-between text-charcoal-muted">
                                        <span>Jenis Kain:</span>
                                        <span className="text-charcoal font-medium text-right truncate max-w-[170px]">{project.fabricType}</span>
                                    </div>
                                    <div className="flex justify-between text-charcoal-muted">
                                        <span>Jumlah Pola:</span>
                                        <span className="text-charcoal font-medium">{project.pieces} pieces</span>
                                    </div>
                                    <div className="flex justify-between text-charcoal-muted">
                                        <span>Utilisasi AI:</span>
                                        <span className="text-forest font-bold">{project.utilization}%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-surface-border flex items-center justify-between text-xs">
                                <span className="text-charcoal-light font-mono text-[11px]">{project.date}</span>
                                <div className="flex items-center gap-2">
                                    <Link
                                        href="/cut-plan/new"
                                        className="px-3 py-1.5 rounded-lg bg-forest hover:bg-forest-hover text-white font-medium text-xs shadow-xs"
                                    >
                                        Buka CAD →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
