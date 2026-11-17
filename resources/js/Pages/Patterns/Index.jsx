import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function PatternLibrary() {
    const [activeTab, setActiveTab] = useState('bundles'); // 'bundles' | 'general' | 'custom'
    const [searchQuery, setSearchQuery] = useState('');
    const [showBundleBuilder, setShowBundleBuilder] = useState(false);

    const bundleSets = [
        {
            id: 'b1',
            name: 'Oversized Streetwear T-Shirt Pack (L)',
            category: 'T-Shirt',
            componentsCount: 5,
            components: ['Badan Depan (54×70cm)', 'Badan Belakang (54×72cm)', 'Lengan Kiri (24×22cm)', 'Lengan Kanan (24×22cm)', 'Rib Kerah (48×4cm)'],
            defaultFabric: 'Cotton Combed 24s/30s',
            estArea: '0.98 m²',
            createdDate: '12 Nov 2026',
        },
        {
            id: 'b2',
            name: 'Formal Slim Fit Shirt Pack (M)',
            category: 'Shirt',
            componentsCount: 8,
            components: ['Depan Kiri', 'Depan Kanan', 'Belakang', 'Lengan 2x', 'Kerah & Stand', 'Manset 2x', 'Saku'],
            defaultFabric: 'Oxford Cotton / Poplin',
            estArea: '1.45 m²',
            createdDate: '8 Nov 2026',
        },
        {
            id: 'b3',
            name: 'A-Line Summer Dress Set (S/M)',
            category: 'Dress',
            componentsCount: 4,
            components: ['Bodice Depan', 'Bodice Belakang', 'Rok Flare 2x', 'Puff Sleeve 2x'],
            defaultFabric: 'Linen / Rayon Twill',
            estArea: '1.80 m²',
            createdDate: '14 Nov 2026',
        },
        {
            id: 'b4',
            name: 'Heavyweight Canvas Tote Bag Pack',
            category: 'Accessories',
            componentsCount: 3,
            components: ['Body Panel 2x (38×42cm)', 'Tali Webbing 2x (65×4cm)', 'Saku Dalam (18×16cm)'],
            defaultFabric: 'Canvas Marsoto / Denim',
            estArea: '0.42 m²',
            createdDate: '16 Nov 2026',
        },
    ];

    const generalPatterns = [
        { id: 'g1', name: 'Crewneck Rib Collar Band', dim: '48 × 4.5 cm', grain: 'Horizontal', cat: 'Rib Trim' },
        { id: 'g2', name: 'Square Patch Pocket (Chest)', dim: '12 × 14 cm', grain: 'Vertical', cat: 'Pocket' },
        { id: 'g3', name: 'Hoodie Kangaroo Pocket', dim: '36 × 26 cm', grain: 'Vertical', cat: 'Pocket' },
        { id: 'g4', name: 'Back Yoke Panel Curved', dim: '46 × 14 cm', grain: 'Horizontal', cat: 'Yoke' },
        { id: 'g5', name: 'Sleeve Cuff Band Interfaced', dim: '22 × 7 cm', grain: 'Vertical', cat: 'Cuff' },
        { id: 'g6', name: 'Waistband Elastic Tunnel', dim: '90 × 8 cm', grain: 'Horizontal', cat: 'Waist' },
    ];

    const customPatterns = [
        { id: 'c1', name: 'Atelier Asymmetric Lapel Collar', dim: '38 × 18 cm', date: '2 hari lalu', method: 'Polygon Draw' },
        { id: 'c2', name: 'Cargo Pants Multi-Pocket Flap', dim: '18 × 12 cm', date: '5 hari lalu', method: 'Image Upload' },
        { id: 'c3', name: 'Custom Kimono Sleeve Gusset', dim: '16 × 16 cm', date: 'Seminggu lalu', method: 'Dimension' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-charcoal">
                            Pattern Library & Sets
                        </h1>
                        <p className="text-xs text-charcoal-muted mt-0.5">
                            Katalog bundle paket garmen siap potong dan komponen pola individual.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setShowBundleBuilder(true)}
                            className="px-3.5 py-2 rounded-lg bg-surface hover:bg-warm-bg border border-surface-border text-xs font-semibold text-charcoal flex items-center gap-1.5 transition"
                        >
                            <span>+ Bundle Set Builder</span>
                        </button>
                        <Link
                            href="/patterns/create"
                            className="px-4 py-2 rounded-lg bg-forest hover:bg-forest-hover text-white text-xs font-semibold shadow-sm flex items-center gap-1.5 transition"
                        >
                            <span>+ Custom Pattern Editor</span>
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title="Pattern Library - CutMap" />

            <div className="space-y-6">
                {/* Search Bar & Tabs Navigation */}
                <div className="bg-surface rounded-2xl border border-surface-border p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Tabs */}
                    <div className="flex items-center gap-1 bg-warm-bg p-1 rounded-xl border border-surface-border text-xs font-mono">
                        <button
                            onClick={() => setActiveTab('bundles')}
                            className={`px-3 py-1.5 rounded-lg transition ${
                                activeTab === 'bundles' ? 'bg-forest text-white font-bold' : 'text-charcoal-muted hover:text-charcoal'
                            }`}
                        >
                            Bundle Sets ({bundleSets.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('general')}
                            className={`px-3 py-1.5 rounded-lg transition ${
                                activeTab === 'general' ? 'bg-forest text-white font-bold' : 'text-charcoal-muted hover:text-charcoal'
                            }`}
                        >
                            General Library ({generalPatterns.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('custom')}
                            className={`px-3 py-1.5 rounded-lg transition ${
                                activeTab === 'custom' ? 'bg-forest text-white font-bold' : 'text-charcoal-muted hover:text-charcoal'
                            }`}
                        >
                            My Custom ({customPatterns.length})
                        </button>
                    </div>

                    {/* Search Input */}
                    <div className="relative max-w-xs w-full">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari pola, komponen, ukuran..."
                            className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border-surface-border focus:border-forest focus:ring-forest"
                        />
                        <svg className="w-4 h-4 text-charcoal-light absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* TAB 1: BUNDLE SETS */}
                {activeTab === 'bundles' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {bundleSets.map((bundle) => (
                            <div
                                key={bundle.id}
                                className="bg-surface rounded-2xl border border-surface-border p-6 shadow-sm hover:border-forest/40 transition flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sage/60 text-forest font-bold">
                                                {bundle.category}
                                            </span>
                                            <h3 className="text-base font-bold text-charcoal mt-1.5">
                                                {bundle.name}
                                            </h3>
                                        </div>
                                        <span className="text-xs font-mono font-bold text-forest bg-forest-light px-2.5 py-1 rounded-full border border-forest/20">
                                            {bundle.componentsCount} Komponen
                                        </span>
                                    </div>

                                    {/* Component chips */}
                                    <div className="mt-4 space-y-1.5">
                                        <div className="text-[11px] font-medium text-charcoal-muted">Komponen dalam paket:</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {bundle.components.map((c, i) => (
                                                <span key={i} className="text-[10px] font-mono bg-warm-bg px-2 py-0.5 rounded border border-surface-border text-charcoal">
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono">
                                    <div className="text-charcoal-muted">
                                        <span>Estimasi Luas: </span>
                                        <span className="font-bold text-charcoal">{bundle.estArea}</span>
                                    </div>
                                    <Link
                                        href="/cut-plan/new"
                                        className="px-3 py-1.5 rounded-lg bg-forest hover:bg-forest-hover text-white text-xs font-semibold flex items-center gap-1 transition"
                                    >
                                        <span>Gunakan di Cut Plan</span>
                                        <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* TAB 2: GENERAL LIBRARY */}
                {activeTab === 'general' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {generalPatterns.map((pat) => (
                            <div
                                key={pat.id}
                                className="bg-surface rounded-2xl border border-surface-border p-5 shadow-sm hover:border-forest/40 transition flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between text-xs font-mono text-charcoal-muted">
                                        <span className="text-forest font-semibold">{pat.cat}</span>
                                        <span>Grain: {pat.grain}</span>
                                    </div>
                                    <h3 className="text-sm font-bold text-charcoal mt-2">{pat.name}</h3>
                                    <div className="text-xs font-mono font-bold text-charcoal-muted mt-1">{pat.dim}</div>
                                </div>

                                <div className="mt-5 pt-3 border-t border-surface-border flex items-center justify-between text-xs">
                                    <span className="text-[11px] font-mono text-charcoal-light">Standar Studio</span>
                                    <Link
                                        href="/cut-plan/new"
                                        className="text-forest hover:underline font-semibold text-xs"
                                    >
                                        + Tambah ke Plan
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* TAB 3: MY CUSTOM PATTERNS */}
                {activeTab === 'custom' && (
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {customPatterns.map((pat) => (
                                <div
                                    key={pat.id}
                                    className="bg-surface rounded-2xl border border-surface-border p-5 shadow-sm hover:border-forest/40 transition flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between text-xs font-mono">
                                            <span className="text-[10px] bg-sage/60 text-forest px-1.5 py-0.5 rounded font-bold">
                                                {pat.method}
                                            </span>
                                            <span className="text-charcoal-light">{pat.date}</span>
                                        </div>
                                        <h3 className="text-sm font-bold text-charcoal mt-2">{pat.name}</h3>
                                        <div className="text-xs font-mono text-charcoal-muted mt-1">{pat.dim}</div>
                                    </div>

                                    <div className="mt-5 pt-3 border-t border-surface-border flex items-center justify-between text-xs">
                                        <Link href="/patterns/create" className="text-charcoal-muted hover:text-charcoal text-[11px]">
                                            Edit Bentuk Pola
                                        </Link>
                                        <Link href="/cut-plan/new" className="text-forest font-semibold hover:underline">
                                            + Pakai di Plan
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Create Pattern */}
                        <div className="p-6 rounded-2xl border-2 border-dashed border-forest/30 bg-warm-bg/60 text-center">
                            <h4 className="text-sm font-bold text-charcoal">Ingin mendigitalkan pola pakaian baru?</h4>
                            <p className="text-xs text-charcoal-muted mt-1 max-w-md mx-auto">
                                Gunakan Custom Pattern Editor untuk mengunggah sketsa pola, menggambar poligon manual, atau input dimensi presisi.
                            </p>
                            <div className="mt-4">
                                <Link
                                    href="/patterns/create"
                                    className="px-4 py-2 rounded-xl bg-forest text-white text-xs font-semibold shadow-sm inline-flex items-center gap-1.5"
                                >
                                    <span>Buka Custom Pattern Editor</span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Bundle Set Builder Modal */}
            {showBundleBuilder && (
                <div className="fixed inset-0 z-50 bg-charcoal/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-surface rounded-2xl border border-surface-border max-w-lg w-full p-6 shadow-xl space-y-4">
                        <div className="flex items-center justify-between border-b pb-3">
                            <h3 className="font-bold text-charcoal text-base">Bundle Set Builder</h3>
                            <button onClick={() => setShowBundleBuilder(false)} className="text-charcoal-muted hover:text-charcoal">✕</button>
                        </div>
                        <p className="text-xs text-charcoal-muted">
                            Gabungkan berbagai komponen pola pakaian ke dalam satu bundle set agar dapat di-nesting secara bersamaan dalam kelipatan kuantitas.
                        </p>

                        <div className="space-y-3">
                            <div>
                                <label className="text-xs font-medium text-charcoal block mb-1">Nama Bundle Set</label>
                                <input
                                    type="text"
                                    placeholder="Contoh: Jaket Bomber Pack (XL)"
                                    className="w-full text-xs rounded-lg border-surface-border focus:border-forest focus:ring-forest"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-medium text-charcoal block mb-1">Pilih Komponen yang Masuk Bundle</label>
                                <div className="space-y-1.5 max-h-40 overflow-y-auto p-2 bg-warm-bg rounded-lg text-xs font-mono">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" defaultChecked className="rounded text-forest focus:ring-forest" />
                                        <span>Badan Depan (2x)</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" defaultChecked className="rounded text-forest focus:ring-forest" />
                                        <span>Badan Belakang (1x)</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" defaultChecked className="rounded text-forest focus:ring-forest" />
                                        <span>Lengan Kanan & Kiri (2x)</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="rounded text-forest focus:ring-forest" />
                                        <span>Rib Kerah Leher (1x)</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-3 border-t">
                            <button
                                onClick={() => setShowBundleBuilder(false)}
                                className="px-4 py-2 rounded-lg border text-xs font-medium text-charcoal"
                            >
                                Batal
                            </button>
                            <button
                                onClick={() => {
                                    alert('Bundle Set Baru berhasil disimpan ke perpustakaan!');
                                    setShowBundleBuilder(false);
                                }}
                                className="px-4 py-2 rounded-lg bg-forest text-white text-xs font-semibold shadow-sm"
                            >
                                Simpan Bundle Set
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
