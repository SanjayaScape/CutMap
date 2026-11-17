import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function NewCutPlan() {
    // Current wizard step (1: Fabric, 2: Patterns & Rules, 3: CAD Workspace)
    const [currentStep, setCurrentStep] = useState(1);

    // Step 1: Fabric Selection State
    const [fabricMode, setFabricMode] = useState('standard'); // 'standard' | 'manual' | 'irregular'
    const [standardRoll, setStandardRoll] = useState('150x100');
    const [manualLength, setManualLength] = useState(150);
    const [manualWidth, setManualWidth] = useState(100);
    const [fabricName, setFabricName] = useState('Cotton Combed 30s — Navy');

    // Step 2: Patterns & Smart Rules State
    const [patternTab, setPatternTab] = useState('bundle'); // 'bundle' | 'general' | 'custom'
    const [selectedBundles, setSelectedBundles] = useState([
        { id: 'b1', name: 'Oversized T-Shirt Pack (L)', pieces: 5, multiplier: 2, totalPieces: 10 },
    ]);
    const [selectedPatterns, setSelectedPatterns] = useState([
        { id: 'p1', name: 'T-Shirt Front (L)', dim: '54 × 70 cm', qty: 2, grain: 'Vertical' },
        { id: 'p2', name: 'T-Shirt Back (L)', dim: '54 × 72 cm', qty: 2, grain: 'Vertical' },
        { id: 'p3', name: 'Sleeve Left (L)', dim: '24 × 22 cm', qty: 2, grain: 'Vertical' },
        { id: 'p4', name: 'Sleeve Right (L)', dim: '24 × 22 cm', qty: 2, grain: 'Vertical' },
        { id: 'p5', name: 'Rib Collar Band', dim: '48 × 4 cm', qty: 2, grain: 'Horizontal' },
    ]);

    // Smart AI Rules State
    const [minSpacing, setMinSpacing] = useState(5); // mm
    const [edgeMargin, setEdgeMargin] = useState(10); // mm
    const [allowRotation, setAllowRotation] = useState('180'); // 'none' | '180' | 'free'
    const [respectGrain, setRespectGrain] = useState(true);

    // Step 3: CAD Cutting Workspace State
    const [aiOption, setAiOption] = useState('A'); // 'A' | 'B'
    const [canvasTheme, setCanvasTheme] = useState('light'); // 'light' | 'dark'
    const [zoomLevel, setZoomLevel] = useState(100);
    const [isReoptimizing, setIsReoptimizing] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);
    const [selectedPiece, setSelectedPiece] = useState('FRONT_1');

    const handleReoptimize = () => {
        setIsReoptimizing(true);
        setTimeout(() => {
            setIsReoptimizing(false);
        }, 800);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-charcoal-muted">
                            <Link href="/dashboard" className="hover:text-forest">Cut Plans</Link>
                            <span>/</span>
                            <span className="text-forest font-semibold">New Cut Plan Wizard</span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-charcoal mt-1">
                            {currentStep === 1 && 'Step 1 — Input Fabric & Dimensi Kain'}
                            {currentStep === 2 && 'Step 2 — Patterns & Smart AI Rules'}
                            {currentStep === 3 && 'Step 3 — AI Cutting Workspace CAD'}
                        </h1>
                    </div>

                    {/* Step Wizard Indicator Bar */}
                    <div className="flex items-center gap-1.5 bg-surface p-1.5 rounded-xl border border-surface-border shadow-xs">
                        <button
                            onClick={() => setCurrentStep(1)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono flex items-center gap-1.5 transition ${
                                currentStep === 1
                                    ? 'bg-forest text-white'
                                    : 'text-charcoal-muted hover:text-charcoal hover:bg-warm-bg'
                            }`}
                        >
                            <span className="w-4 h-4 rounded-full bg-surface/20 flex items-center justify-center text-[10px]">1</span>
                            <span>Fabric</span>
                        </button>
                        <span className="text-charcoal-light">→</span>
                        <button
                            onClick={() => setCurrentStep(2)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono flex items-center gap-1.5 transition ${
                                currentStep === 2
                                    ? 'bg-forest text-white'
                                    : 'text-charcoal-muted hover:text-charcoal hover:bg-warm-bg'
                            }`}
                        >
                            <span className="w-4 h-4 rounded-full bg-surface/20 flex items-center justify-center text-[10px]">2</span>
                            <span>Patterns & Rules</span>
                        </button>
                        <span className="text-charcoal-light">→</span>
                        <button
                            onClick={() => setCurrentStep(3)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono flex items-center gap-1.5 transition ${
                                currentStep === 3
                                    ? 'bg-forest text-white'
                                    : 'text-charcoal-muted hover:text-charcoal hover:bg-warm-bg'
                            }`}
                        >
                            <span className="w-4 h-4 rounded-full bg-surface/20 flex items-center justify-center text-[10px]">3</span>
                            <span>CAD Workspace</span>
                        </button>
                    </div>
                </div>
            }
        >
            <Head title="New Cut Plan - CutMap" />

            {/* ================= STEP 1: INPUT FABRIC ================= */}
            {currentStep === 1 && (
                <div className="space-y-8 max-w-5xl mx-auto">
                    {/* Fabric Metadata Card */}
                    <div className="bg-surface rounded-2xl border border-surface-border p-6 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs font-medium text-charcoal block mb-1">
                                    Nama Rencana Potong / Referensi Kain
                                </label>
                                <input
                                    type="text"
                                    value={fabricName}
                                    onChange={(e) => setFabricName(e.target.value)}
                                    className="w-full text-sm rounded-lg border-surface-border focus:border-forest focus:ring-forest"
                                    placeholder="e.g. Cotton Combed 30s Batch #02"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-medium text-charcoal block mb-1">
                                    Kategori Garmen
                                </label>
                                <select className="w-full text-sm rounded-lg border-surface-border focus:border-forest focus:ring-forest">
                                    <option>Kaos / T-Shirt Garmen</option>
                                    <option>Kemeja Formal / Casual Shirt</option>
                                    <option>Dress & Rok Atelier</option>
                                    <option>Tote Bag & Aksesori Perca</option>
                                    <option>Celana / Denim Trouser</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Mode Pemilihan Kain: 3 Tab Pilihan */}
                    <div className="bg-surface rounded-2xl border border-surface-border p-6 shadow-sm">
                        <div className="flex items-center justify-between pb-4 mb-6 border-b border-surface-border">
                            <div>
                                <h2 className="text-base font-bold text-charcoal">Pilih Jenis & Bentuk Lembar Kain</h2>
                                <p className="text-xs text-charcoal-muted">
                                    Gunakan standar gulungan kain roll, masukkan dimensi presisi, atau unggah foto kain perca.
                                </p>
                            </div>
                            <div className="flex items-center gap-1 bg-warm-bg p-1 rounded-xl border border-surface-border text-xs font-mono">
                                <button
                                    onClick={() => setFabricMode('standard')}
                                    className={`px-3 py-1.5 rounded-lg transition ${
                                        fabricMode === 'standard' ? 'bg-forest text-white font-semibold' : 'text-charcoal-muted hover:text-charcoal'
                                    }`}
                                >
                                    Gulungan Standar
                                </button>
                                <button
                                    onClick={() => setFabricMode('manual')}
                                    className={`px-3 py-1.5 rounded-lg transition ${
                                        fabricMode === 'manual' ? 'bg-forest text-white font-semibold' : 'text-charcoal-muted hover:text-charcoal'
                                    }`}
                                >
                                    Input Dimensi Manual
                                </button>
                                <button
                                    onClick={() => setFabricMode('irregular')}
                                    className={`px-3 py-1.5 rounded-lg transition ${
                                        fabricMode === 'irregular' ? 'bg-forest text-white font-semibold' : 'text-charcoal-muted hover:text-charcoal'
                                    }`}
                                >
                                    Foto / Poligon Irregular
                                </button>
                            </div>
                        </div>

                        {/* Sub-mode 1: Standar Roll Presets */}
                        {fabricMode === 'standard' && (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        { id: '150x100', label: '150 × 100 cm', name: 'Standar 1 Meter', desc: 'Lebar 150 cm (59")', area: '1.50 m²' },
                                        { id: '150x200', label: '150 × 200 cm', name: 'Standar 2 Meter', desc: 'Lebar 150 cm (59")', area: '3.00 m²' },
                                        { id: '140x90', label: '140 × 90 cm', name: 'Single Yard Roll', desc: 'Lebar 140 cm (55")', area: '1.26 m²' },
                                        { id: '160x250', label: '160 × 250 cm', name: 'Lebar Ekstra (63")', desc: 'Untuk Sprei & Outer', area: '4.00 m²' },
                                    ].map((roll) => (
                                        <div
                                            key={roll.id}
                                            onClick={() => setStandardRoll(roll.id)}
                                            className={`p-4 rounded-xl border cursor-pointer transition flex flex-col justify-between ${
                                                standardRoll === roll.id
                                                    ? 'border-forest bg-sage/30 ring-1 ring-forest'
                                                    : 'border-surface-border hover:border-forest/40 bg-warm-bg/40'
                                            }`}
                                        >
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs font-mono font-bold text-forest">{roll.label}</span>
                                                    {standardRoll === roll.id && (
                                                        <span className="w-2 h-2 rounded-full bg-forest" />
                                                    )}
                                                </div>
                                                <div className="text-sm font-semibold text-charcoal mt-1">{roll.name}</div>
                                                <div className="text-xs text-charcoal-muted mt-0.5">{roll.desc}</div>
                                            </div>
                                            <div className="mt-4 pt-2 border-t border-surface-border text-[11px] font-mono text-charcoal-muted flex justify-between">
                                                <span>Luas:</span>
                                                <span className="font-bold text-charcoal">{roll.area}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sub-mode 2: Manual Dimensions */}
                        {fabricMode === 'manual' && (
                            <div className="max-w-xl space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-medium text-charcoal block mb-1">
                                            Panjang Kain (cm)
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                value={manualLength}
                                                onChange={(e) => setManualLength(Number(e.target.value))}
                                                className="w-full text-sm font-mono rounded-lg border-surface-border focus:border-forest focus:ring-forest pr-10"
                                            />
                                            <span className="absolute right-3 top-2.5 text-xs font-mono text-charcoal-muted">cm</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-medium text-charcoal block mb-1">
                                            Lebar Kain (cm)
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                value={manualWidth}
                                                onChange={(e) => setManualWidth(Number(e.target.value))}
                                                className="w-full text-sm font-mono rounded-lg border-surface-border focus:border-forest focus:ring-forest pr-10"
                                            />
                                            <span className="absolute right-3 top-2.5 text-xs font-mono text-charcoal-muted">cm</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 bg-warm-bg rounded-lg text-xs font-mono text-charcoal-muted flex justify-between">
                                    <span>Total Estimasi Luas Lembaran:</span>
                                    <span className="font-bold text-forest">
                                        {((manualLength * manualWidth) / 10000).toFixed(2)} m² ({manualLength * manualWidth} cm²)
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Sub-mode 3: Irregular Polygon & Photo Editor */}
                        {fabricMode === 'irregular' && (
                            <div className="space-y-4">
                                <div className="border-2 border-dashed border-forest/40 rounded-xl p-6 bg-warm-bg/50 text-center">
                                    <svg className="w-10 h-10 mx-auto text-forest mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <div className="text-sm font-medium text-charcoal">
                                        Unggah Foto Kain Perca / Sisa Bentuk Irregular
                                    </div>
                                    <p className="text-xs text-charcoal-muted mt-1 max-w-md mx-auto">
                                        AI akan mendeteksi garis tepi kain secara otomatis. Anda dapat menggeser titik sudut (*vertex*) untuk menyempurnakan batas area potong.
                                    </p>
                                    <div className="mt-4 flex items-center justify-center gap-3">
                                        <button className="px-4 py-2 rounded-lg bg-surface border border-surface-border hover:bg-warm-bg text-xs font-semibold text-charcoal">
                                            Pilih Foto Kain (JPG / PNG)
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-sage/60 hover:bg-sage text-xs font-mono font-medium text-forest">
                                            Gunakan Contoh Sampel Perca Irregular
                                        </button>
                                    </div>
                                </div>

                                {/* Interactive Vertex Polygon Canvas Mockup */}
                                <div className="bg-surface rounded-xl border border-surface-border p-4">
                                    <div className="flex items-center justify-between text-xs font-mono text-charcoal-muted mb-2">
                                        <span className="text-forest font-semibold">● Polygon Boundary Editor (6 Vertices)</span>
                                        <span>Skala: 1:10 (Grid 10 cm)</span>
                                    </div>
                                    <div className="h-56 bg-warm-bg rounded-lg border border-surface-border relative overflow-hidden flex items-center justify-center">
                                        <svg className="w-full h-full" viewBox="0 0 600 240">
                                            {/* Irregular Fabric Polygon */}
                                            <polygon
                                                points="40,30 520,40 560,190 320,210 120,180 50,110"
                                                fill="#dce7df"
                                                fillOpacity="0.5"
                                                stroke="#1f6347"
                                                strokeWidth="2"
                                                strokeDasharray="4 2"
                                            />
                                            {/* Vertices Draggable Points */}
                                            {[
                                                [40, 30], [520, 40], [560, 190], [320, 210], [120, 180], [50, 110]
                                            ].map(([x, y], i) => (
                                                <g key={i}>
                                                    <circle cx={x} cy={y} r="6" fill="#1f6347" className="cursor-move hover:scale-125 transition" />
                                                    <text x={x + 10} y={y - 5} fill="#1f6347" fontSize="10" fontFamily="JetBrains Mono">
                                                        V{i + 1}
                                                    </text>
                                                </g>
                                            ))}
                                        </svg>
                                        <div className="absolute bottom-2 right-2 bg-surface/90 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-forest border border-forest/20">
                                            Luas Efektif Terdeteksi: 1.18 m²
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Footer Step 1 */}
                    <div className="flex items-center justify-between pt-2">
                        <Link
                            href="/dashboard"
                            className="px-5 py-2.5 rounded-xl border border-surface-border text-sm font-medium text-charcoal hover:bg-surface"
                        >
                            Batal
                        </Link>
                        <button
                            onClick={() => setCurrentStep(2)}
                            className="px-6 py-2.5 rounded-xl bg-forest hover:bg-forest-hover text-white text-sm font-semibold shadow-sm flex items-center gap-2"
                        >
                            <span>Lanjut ke Step 2: Patterns & Rules</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            )}

            {/* ================= STEP 2: PATTERNS & SMART AI RULES ================= */}
            {currentStep === 2 && (
                <div className="space-y-8 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Kolom Kiri: Pattern Selector (8 Kolom) */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="bg-surface rounded-2xl border border-surface-border p-6 shadow-sm">
                                {/* 3 Tab Sumber Pola */}
                                <div className="flex items-center justify-between pb-4 mb-6 border-b border-surface-border">
                                    <div>
                                        <h2 className="text-base font-bold text-charcoal">Pilih Komponen Pola Potong</h2>
                                        <p className="text-xs text-charcoal-muted">
                                            Tambahkan paket pakaian siap pakai atau pilih pola lepasan.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-warm-bg p-1 rounded-xl border border-surface-border text-xs font-mono">
                                        <button
                                            onClick={() => setPatternTab('bundle')}
                                            className={`px-3 py-1.5 rounded-lg transition ${
                                                patternTab === 'bundle' ? 'bg-forest text-white font-semibold' : 'text-charcoal-muted hover:text-charcoal'
                                            }`}
                                        >
                                            Bundle Sets (Paket)
                                        </button>
                                        <button
                                            onClick={() => setPatternTab('general')}
                                            className={`px-3 py-1.5 rounded-lg transition ${
                                                patternTab === 'general' ? 'bg-forest text-white font-semibold' : 'text-charcoal-muted hover:text-charcoal'
                                            }`}
                                        >
                                            General Library
                                        </button>
                                        <button
                                            onClick={() => setPatternTab('custom')}
                                            className={`px-3 py-1.5 rounded-lg transition ${
                                                patternTab === 'custom' ? 'bg-forest text-white font-semibold' : 'text-charcoal-muted hover:text-charcoal'
                                            }`}
                                        >
                                            My Custom
                                        </button>
                                    </div>
                                </div>

                                {/* Tab 1: Bundle Sets */}
                                {patternTab === 'bundle' && (
                                    <div className="space-y-4">
                                        <div className="p-4 rounded-xl border-2 border-forest bg-sage/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-forest text-white">
                                                        BUNDLE AKTIF
                                                    </span>
                                                    <span className="text-sm font-bold text-charcoal">
                                                        Oversized T-Shirt Pack (L)
                                                    </span>
                                                </div>
                                                <p className="text-xs text-charcoal-muted mt-1">
                                                    Termasuk 5 komponen: Badan Depan, Badan Belakang, Lengan Kiri, Lengan Kanan, Rib Kerah.
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3 shrink-0">
                                                <span className="text-xs font-mono text-charcoal-muted">Kuantitas:</span>
                                                <div className="flex items-center border border-surface-border rounded-lg bg-surface overflow-hidden">
                                                    <button className="px-2.5 py-1 text-sm font-mono hover:bg-warm-bg">-</button>
                                                    <span className="px-3 py-1 text-xs font-mono font-bold text-forest">2 Set (10 Pcs)</span>
                                                    <button className="px-2.5 py-1 text-sm font-mono hover:bg-warm-bg">+</button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Other Bundle Cards */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                            {[
                                                { name: 'Kemeja Casual Slim (M)', pieces: '8 Komponen', category: 'Shirt Pack' },
                                                { name: 'Canvas Tote Bag Set', pieces: '3 Komponen', category: 'Accessory Pack' },
                                            ].map((b, i) => (
                                                <div key={i} className="p-3.5 rounded-xl border border-surface-border hover:border-forest/40 bg-warm-bg/30 flex items-center justify-between">
                                                    <div>
                                                        <div className="text-xs font-bold text-charcoal">{b.name}</div>
                                                        <div className="text-[11px] font-mono text-charcoal-muted">{b.pieces} • {b.category}</div>
                                                    </div>
                                                    <button className="px-2.5 py-1 rounded-lg bg-surface border border-surface-border text-xs font-mono text-forest hover:bg-forest hover:text-white transition">
                                                        + Tambah
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Tab 2 & 3: General / Custom Pattern List */}
                                {(patternTab === 'general' || patternTab === 'custom') && (
                                    <div className="space-y-3">
                                        <div className="text-xs text-charcoal-muted flex justify-between items-center mb-2">
                                            <span>Daftar Komponen Mandiri</span>
                                            <Link href="/patterns/create" className="text-forest hover:underline font-mono">
                                                + Buat Pola Kustom Baru
                                            </Link>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {[
                                                { name: 'Hoodie Pocket Kangaroo', dim: '36 × 24 cm', pieces: '1 pc' },
                                                { name: 'Collar Stand Band', dim: '42 × 3.5 cm', pieces: '2 pcs' },
                                                { name: 'Cuff Rib Trim', dim: '18 × 8 cm', pieces: '2 pcs' },
                                                { name: 'Back Yoke Panel', dim: '48 × 16 cm', pieces: '1 pc' },
                                            ].map((p, i) => (
                                                <div key={i} className="p-3 rounded-lg border border-surface-border bg-warm-bg/40 flex items-center justify-between">
                                                    <div>
                                                        <div className="text-xs font-semibold text-charcoal">{p.name}</div>
                                                        <div className="text-[10px] font-mono text-charcoal-muted">{p.dim}</div>
                                                    </div>
                                                    <button className="px-2 py-0.5 rounded bg-surface border border-surface-border text-xs font-mono text-forest hover:bg-forest hover:text-white">
                                                        + Add
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Komponen Pola Terpilih yang Akan Di-Nest */}
                            <div className="bg-surface rounded-2xl border border-surface-border p-6 shadow-sm">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-surface-border">
                                    <h3 className="text-sm font-bold text-charcoal">
                                        Komponen Terpilih untuk Optimasi ({selectedPatterns.reduce((acc, p) => acc + p.qty, 0)} Potongan)
                                    </h3>
                                    <span className="text-xs font-mono text-forest">Siap Di-nesting</span>
                                </div>
                                <div className="space-y-2">
                                    {selectedPatterns.map((pat) => (
                                        <div
                                            key={pat.id}
                                            className="px-3 py-2 rounded-lg bg-warm-bg/60 border border-surface-border flex items-center justify-between text-xs font-mono"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="w-2 h-2 rounded-full bg-forest" />
                                                <span className="font-semibold text-charcoal">{pat.name}</span>
                                                <span className="text-charcoal-muted">{pat.dim}</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="text-charcoal-muted">Grain: {pat.grain}</span>
                                                <span className="font-bold text-forest bg-surface px-2 py-0.5 rounded border border-surface-border">
                                                    Qty: {pat.qty}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Kolom Kanan: Smart AI Rules Sidebar (4 Kolom) */}
                        <div className="lg:col-span-4 bg-surface rounded-2xl border border-surface-border p-6 shadow-sm space-y-6">
                            <div className="border-b border-surface-border pb-3">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-forest animate-pulse" />
                                    <h2 className="text-sm font-bold text-charcoal uppercase tracking-wider font-mono">
                                        Smart AI Rules
                                    </h2>
                                </div>
                                <p className="text-xs text-charcoal-muted mt-1">
                                    Batasan parameter komputasi algoritma pemotongan.
                                </p>
                            </div>

                            {/* Rule 1: Minimum Spacing */}
                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <label className="text-xs font-semibold text-charcoal">Minimum Spacing (Blade Gap)</label>
                                    <span className="text-xs font-mono font-bold text-forest">{minSpacing} mm</span>
                                </div>
                                <p className="text-[11px] text-charcoal-muted mb-2">Jarak celah antar pola potong untuk toleransi pisau/gunting.</p>
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    value={minSpacing}
                                    onChange={(e) => setMinSpacing(Number(e.target.value))}
                                    className="w-full accent-forest cursor-pointer"
                                />
                            </div>

                            {/* Rule 2: Edge Margin */}
                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <label className="text-xs font-semibold text-charcoal">Edge Margin (Jarak Tepi Kain)</label>
                                    <span className="text-xs font-mono font-bold text-forest">{edgeMargin} mm</span>
                                </div>
                                <p className="text-[11px] text-charcoal-muted mb-2">Jarak aman dari pinggiran kain/selvedge.</p>
                                <input
                                    type="range"
                                    min="0"
                                    max="30"
                                    value={edgeMargin}
                                    onChange={(e) => setEdgeMargin(Number(e.target.value))}
                                    className="w-full accent-forest cursor-pointer"
                                />
                            </div>

                            {/* Rule 3: Allow Rotation */}
                            <div>
                                <label className="text-xs font-semibold text-charcoal block mb-1">
                                    Aturan Rotasi Pola
                                </label>
                                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                                    {[
                                        { id: 'none', label: '0° (No Rot)' },
                                        { id: '180', label: '180° Flip' },
                                        { id: 'free', label: 'Bebas 90°' },
                                    ].map((rot) => (
                                        <button
                                            key={rot.id}
                                            onClick={() => setAllowRotation(rot.id)}
                                            className={`py-1.5 px-2 rounded-lg border transition ${
                                                allowRotation === rot.id
                                                    ? 'bg-forest text-white border-forest font-semibold'
                                                    : 'border-surface-border text-charcoal-muted hover:bg-warm-bg'
                                            }`}
                                        >
                                            {rot.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Rule 4: Respect Grain Direction */}
                            <div className="pt-2 border-t border-surface-border">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={respectGrain}
                                        onChange={(e) => setRespectGrain(e.target.checked)}
                                        className="mt-0.5 rounded text-forest focus:ring-forest border-surface-border"
                                    />
                                    <div>
                                        <span className="text-xs font-semibold text-charcoal block">Respect Grain Direction</span>
                                        <span className="text-[11px] text-charcoal-muted leading-tight block mt-0.5">
                                            Kunci arah serat kain agar baju tidak melintir saat dicuci.
                                        </span>
                                    </div>
                                </label>
                            </div>

                            {/* Action CTA Step 2 */}
                            <div className="pt-4 border-t border-surface-border">
                                <button
                                    onClick={() => setCurrentStep(3)}
                                    className="w-full py-3 px-4 rounded-xl bg-forest hover:bg-forest-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition"
                                >
                                    <span>⚡ Jalankan AI Nesting Optimizer</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Footer Step 2 */}
                    <div className="flex items-center justify-between pt-2">
                        <button
                            onClick={() => setCurrentStep(1)}
                            className="px-5 py-2.5 rounded-xl border border-surface-border text-sm font-medium text-charcoal hover:bg-surface"
                        >
                            ← Kembali ke Step 1
                        </button>
                        <button
                            onClick={() => setCurrentStep(3)}
                            className="px-6 py-2.5 rounded-xl bg-forest hover:bg-forest-hover text-white text-sm font-semibold shadow-sm flex items-center gap-2"
                        >
                            <span>Lanjut ke Step 3: CAD Workspace</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            )}

            {/* ================= STEP 3: AI CUTTING WORKSPACE ================= */}
            {currentStep === 3 && (
                <div className="space-y-6">
                    {/* Top Workspace Toolbar */}
                    <div className="bg-surface rounded-2xl border border-surface-border p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
                        {/* Left Controls: Option A / B Comparison */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 bg-warm-bg p-1 rounded-xl border border-surface-border text-xs font-mono">
                                <button
                                    onClick={() => setAiOption('A')}
                                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition ${
                                        aiOption === 'A'
                                            ? 'bg-forest text-white font-bold'
                                            : 'text-charcoal-muted hover:text-charcoal'
                                    }`}
                                >
                                    <span>Option A (Max Density)</span>
                                    <span className="text-[10px] opacity-80">93.8%</span>
                                </button>
                                <button
                                    onClick={() => setAiOption('B')}
                                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition ${
                                        aiOption === 'B'
                                            ? 'bg-forest text-white font-bold'
                                            : 'text-charcoal-muted hover:text-charcoal'
                                    }`}
                                >
                                    <span>Option B (Easy Straight Cut)</span>
                                    <span className="text-[10px] opacity-80">89.4%</span>
                                </button>
                            </div>

                            {/* Re-Optimize Button */}
                            <button
                                onClick={handleReoptimize}
                                disabled={isReoptimizing}
                                className="px-3 py-1.5 rounded-lg bg-surface hover:bg-warm-bg border border-surface-border text-xs font-medium text-charcoal flex items-center gap-1.5 transition"
                            >
                                <svg className={`w-3.5 h-3.5 text-forest ${isReoptimizing ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span>{isReoptimizing ? 'Re-calculating...' : 'AI Re-Optimize'}</span>
                            </button>
                        </div>

                        {/* Right Controls: Canvas Mode, Zoom, and Export */}
                        <div className="flex items-center gap-3">
                            {/* Canvas Theme Toggle */}
                            <div className="flex items-center border border-surface-border rounded-lg bg-warm-bg p-0.5 text-xs font-mono">
                                <button
                                    onClick={() => setCanvasTheme('light')}
                                    className={`px-2 py-1 rounded ${canvasTheme === 'light' ? 'bg-surface font-semibold text-charcoal shadow-xs' : 'text-charcoal-muted'}`}
                                >
                                    ☀️ Light
                                </button>
                                <button
                                    onClick={() => setCanvasTheme('dark')}
                                    className={`px-2 py-1 rounded ${canvasTheme === 'dark' ? 'bg-charcoal text-white font-semibold' : 'text-charcoal-muted'}`}
                                >
                                    🌙 Dark CAD
                                </button>
                            </div>

                            {/* Zoom controls */}
                            <div className="flex items-center border border-surface-border rounded-lg bg-surface text-xs font-mono">
                                <button onClick={() => setZoomLevel(Math.max(60, zoomLevel - 10))} className="px-2 py-1 hover:bg-warm-bg">-</button>
                                <span className="px-2 py-1 text-charcoal-muted">{zoomLevel}%</span>
                                <button onClick={() => setZoomLevel(Math.min(150, zoomLevel + 10))} className="px-2 py-1 hover:bg-warm-bg">+</button>
                            </div>

                            {/* Export SVG Button */}
                            <button
                                onClick={() => setShowExportModal(true)}
                                className="px-4 py-2 rounded-lg bg-forest hover:bg-forest-hover text-white text-xs font-semibold shadow-sm flex items-center gap-1.5 transition"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span>Export SVG / CAD</span>
                            </button>
                        </div>
                    </div>

                    {/* CAD Canvas + Metrics Panel Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        {/* Main Interactive CAD Canvas (9 Kolom) */}
                        <div className="lg:col-span-9 bg-surface rounded-2xl border border-surface-border shadow-sm p-4 overflow-hidden">
                            {/* Ruler CM Header Bar */}
                            <div className="flex items-center justify-between pb-2 mb-2 border-b border-surface-border text-[11px] font-mono text-charcoal-muted">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-forest" />
                                    <span>CANVAS: 150 × 100 cm (Scale 1:1)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-forest font-semibold">● Status: Optimal (0 Overlaps)</span>
                                    <span>Toleransi Jarak: 5 mm</span>
                                </div>
                            </div>

                            {/* CAD Visual Canvas Area */}
                            <div 
                                className={`w-full h-[520px] rounded-xl border-2 border-dashed relative overflow-hidden select-none transition-colors duration-200 ${
                                    canvasTheme === 'dark' 
                                        ? 'bg-[#181a1b] border-gray-700 text-gray-200' 
                                        : 'bg-warm-bg border-forest/30 text-charcoal'
                                }`}
                                style={{
                                    transform: `scale(${zoomLevel / 100})`,
                                    transformOrigin: 'top left',
                                }}
                            >
                                {/* Background CAD Grid Lines */}
                                <div 
                                    className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{
                                        backgroundImage: canvasTheme === 'dark'
                                            ? 'linear-gradient(to right, #4ade80 1px, transparent 1px), linear-gradient(to bottom, #4ade80 1px, transparent 1px)'
                                            : 'linear-gradient(to right, #1f6347 1px, transparent 1px), linear-gradient(to bottom, #1f6347 1px, transparent 1px)',
                                        backgroundSize: '25px 25px'
                                    }}
                                />

                                {/* Ruler Corner Ticks */}
                                <div className="absolute top-2 left-2 text-[10px] font-mono opacity-60">0 cm</div>
                                <div className="absolute top-2 right-4 text-[10px] font-mono opacity-60">150 cm</div>
                                <div className="absolute bottom-2 left-2 text-[10px] font-mono opacity-60">100 cm</div>

                                {/* Edge Margin Guide Line (10mm) */}
                                <div className="absolute inset-3 border border-red-400/25 pointer-events-none rounded">
                                    <span className="absolute top-1 left-1 text-[8px] font-mono text-red-400/60">Edge Margin: 10mm</span>
                                </div>

                                {/* Nested Cut Pieces (Arrangement based on Option A vs Option B) */}
                                {aiOption === 'A' ? (
                                    <>
                                        {/* Pattern: Front 1 */}
                                        <div
                                            onClick={() => setSelectedPiece('FRONT_1')}
                                            className={`absolute top-8 left-8 w-44 h-56 rounded-t-3xl p-3 shadow-md flex flex-col justify-between cursor-move transition-transform ${
                                                selectedPiece === 'FRONT_1'
                                                    ? 'ring-2 ring-forest bg-surface'
                                                    : 'bg-surface/90 hover:scale-[1.01]'
                                            } border-2 border-forest`}
                                        >
                                            <div className="flex items-center justify-between text-[10px] font-mono text-forest font-bold">
                                                <span>TSHIRT_FRONT_01</span>
                                                <span className="bg-sage text-forest px-1.5 rounded">0°</span>
                                            </div>
                                            <div className="text-center py-6">
                                                <div className="text-xs font-bold text-charcoal">Badan Depan #1</div>
                                                <div className="text-[10px] font-mono text-charcoal-muted">54 × 70 cm</div>
                                            </div>
                                            <div className="flex items-center justify-between text-[8px] font-mono text-charcoal-muted border-t pt-1">
                                                <span>Grain: ↑ Vertical</span>
                                                <span className="text-forest font-bold">Valid</span>
                                            </div>
                                        </div>

                                        {/* Pattern: Back 1 */}
                                        <div
                                            onClick={() => setSelectedPiece('BACK_1')}
                                            className={`absolute top-8 left-56 w-44 h-56 rounded-t-3xl p-3 shadow-md flex flex-col justify-between cursor-move transition-transform ${
                                                selectedPiece === 'BACK_1'
                                                    ? 'ring-2 ring-forest bg-sage/70'
                                                    : 'bg-sage/50 hover:scale-[1.01]'
                                            } border-2 border-forest`}
                                        >
                                            <div className="flex items-center justify-between text-[10px] font-mono text-forest font-bold">
                                                <span>TSHIRT_BACK_01</span>
                                                <span className="bg-sage-dark text-forest-dark px-1.5 rounded">180°</span>
                                            </div>
                                            <div className="text-center py-6">
                                                <div className="text-xs font-bold text-charcoal">Badan Belakang #1</div>
                                                <div className="text-[10px] font-mono text-charcoal-muted">54 × 72 cm</div>
                                            </div>
                                            <div className="flex items-center justify-between text-[8px] font-mono text-charcoal-muted border-t pt-1">
                                                <span>Grain: ↓ Inverted</span>
                                                <span className="text-forest font-bold">Valid</span>
                                            </div>
                                        </div>

                                        {/* Pattern: Sleeves */}
                                        <div className="absolute top-8 right-8 w-32 h-32 bg-forest-light border-2 border-forest rounded-t-2xl p-2 flex flex-col justify-between cursor-move">
                                            <span className="text-[9px] font-mono text-forest font-bold">SLEEVE_LEFT_01</span>
                                            <span className="text-[11px] font-bold text-charcoal text-center">Lengan Kiri #1</span>
                                            <span className="text-[9px] font-mono text-charcoal-muted text-center">24 × 22 cm</span>
                                        </div>

                                        <div className="absolute top-44 right-8 w-32 h-32 bg-forest-light border-2 border-forest rounded-t-2xl p-2 flex flex-col justify-between cursor-move">
                                            <span className="text-[9px] font-mono text-forest font-bold">SLEEVE_RIGHT_01</span>
                                            <span className="text-[11px] font-bold text-charcoal text-center">Lengan Kanan #1</span>
                                            <span className="text-[9px] font-mono text-charcoal-muted text-center">24 × 22 cm</span>
                                        </div>

                                        {/* Collar Bands at Bottom */}
                                        <div className="absolute bottom-8 left-8 w-96 h-12 bg-surface border border-forest rounded p-2 flex items-center justify-between text-xs font-mono text-forest">
                                            <span className="font-bold">RIB_COLLAR_BAND (2x)</span>
                                            <span className="text-charcoal-muted">48 × 4 cm</span>
                                            <span className="text-[9px] bg-sage px-2 py-0.5 rounded">Spacing: 5mm OK</span>
                                        </div>
                                    </>
                                ) : (
                                    /* Option B: Straight Cutting Alignment */
                                    <>
                                        <div className="absolute top-8 left-8 w-48 h-56 rounded bg-surface border-2 border-forest p-3 flex flex-col justify-between">
                                            <span className="text-[10px] font-mono text-forest font-bold">FRONT_01 (STRAIGHT)</span>
                                            <div className="text-center font-bold text-xs">Guillotine Block A</div>
                                            <span className="text-[9px] font-mono text-charcoal-muted">Aligned 0°</span>
                                        </div>
                                        <div className="absolute top-8 left-60 w-48 h-56 rounded bg-sage/50 border-2 border-forest p-3 flex flex-col justify-between">
                                            <span className="text-[10px] font-mono text-forest font-bold">BACK_01 (STRAIGHT)</span>
                                            <div className="text-center font-bold text-xs">Guillotine Block B</div>
                                            <span className="text-[9px] font-mono text-charcoal-muted">Aligned 0°</span>
                                        </div>
                                    </>
                                )}

                                {/* Interactive Floating Action Pill */}
                                <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md border border-forest/30 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-3 text-xs font-mono">
                                    <span className="flex items-center gap-1.5 text-forest font-bold">
                                        <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                                        UTILISASI: {aiOption === 'A' ? '93.8%' : '89.4%'}
                                    </span>
                                    <span className="text-charcoal-light">|</span>
                                    <span className="text-charcoal-muted">WASTE: {aiOption === 'A' ? '6.2%' : '10.6%'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel: Metrics & Validation Status (3 Kolom) */}
                        <div className="lg:col-span-3 space-y-5">
                            {/* Card 1: Key Nesting Metrics */}
                            <div className="bg-surface rounded-2xl border border-surface-border p-5 shadow-sm space-y-4">
                                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest border-b pb-2">
                                    Efisiensi Material
                                </h3>

                                <div className="space-y-3">
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-charcoal-muted">Tingkat Utilisasi:</span>
                                            <span className="font-mono font-bold text-forest text-sm">
                                                {aiOption === 'A' ? '93.8%' : '89.4%'}
                                            </span>
                                        </div>
                                        <div className="w-full bg-warm-bg rounded-full h-2 overflow-hidden">
                                            <div
                                                className="bg-forest h-full rounded-full transition-all duration-500"
                                                style={{ width: aiOption === 'A' ? '93.8%' : '89.4%' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-surface-border text-xs font-mono">
                                        <div className="p-2 bg-warm-bg rounded-lg">
                                            <div className="text-[10px] text-charcoal-muted">Total Bahan</div>
                                            <div className="font-bold text-charcoal">1.50 m²</div>
                                        </div>
                                        <div className="p-2 bg-warm-bg rounded-lg">
                                            <div className="text-[10px] text-charcoal-muted">Terpakai</div>
                                            <div className="font-bold text-forest">1.41 m²</div>
                                        </div>
                                    </div>

                                    <div className="p-2.5 rounded-lg bg-sage/30 border border-forest/20 text-xs">
                                        <span className="text-charcoal-muted">Sisa Kain Terbuang:</span>
                                        <span className="block font-mono font-bold text-charcoal mt-0.5">
                                            0.09 m² (Hanya 6.2%)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Validasi Potongan */}
                            <div className="bg-surface rounded-2xl border border-surface-border p-5 shadow-sm space-y-3">
                                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal border-b pb-2">
                                    Validasi Potongan
                                </h3>
                                <ul className="space-y-2 text-xs">
                                    <li className="flex items-center justify-between">
                                        <span className="text-charcoal-muted">Batas Overlap (Tabrakan):</span>
                                        <span className="font-mono font-bold text-forest">✓ 0 Overlap</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-charcoal-muted">Blade Spacing:</span>
                                        <span className="font-mono font-bold text-forest">✓ Min 5 mm OK</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-charcoal-muted">Arah Serat (Grain):</span>
                                        <span className="font-mono font-bold text-forest">✓ Sesuai (100%)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Card 3: Action Buttons */}
                            <div className="space-y-2 pt-1">
                                <button
                                    onClick={() => setShowExportModal(true)}
                                    className="w-full py-3 px-4 rounded-xl bg-forest hover:bg-forest-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm transition"
                                >
                                    Simpan & Ekspor SVG
                                </button>
                                <button
                                    onClick={() => setCurrentStep(2)}
                                    className="w-full py-2.5 px-4 rounded-xl border border-surface-border hover:bg-surface text-charcoal text-xs font-medium transition"
                                >
                                    Edit Pola & Rules
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Export SVG Modal Preview */}
                    {showExportModal && (
                        <div className="fixed inset-0 z-50 bg-charcoal/50 backdrop-blur-xs flex items-center justify-center p-4">
                            <div className="bg-surface rounded-2xl border border-surface-border max-w-md w-full p-6 shadow-xl space-y-4">
                                <div className="flex items-center justify-between border-b pb-3">
                                    <h3 className="font-bold text-charcoal text-base">Ekspor File Cutting SVG</h3>
                                    <button onClick={() => setShowExportModal(false)} className="text-charcoal-muted hover:text-charcoal">✕</button>
                                </div>
                                <p className="text-xs text-charcoal-muted">
                                    Pola siap diekspor dalam format vektor SVG presisi skala 1:1, kompatibel dengan plotter potong kain, proyektor CAD, dan mesin laser CNC.
                                </p>
                                <div className="space-y-2 text-xs font-mono">
                                    <label className="flex items-center gap-2 p-2 bg-warm-bg rounded">
                                        <input type="checkbox" defaultChecked className="rounded text-forest focus:ring-forest" />
                                        <span>Sertakan garis potong (cut line vector)</span>
                                    </label>
                                    <label className="flex items-center gap-2 p-2 bg-warm-bg rounded">
                                        <input type="checkbox" defaultChecked className="rounded text-forest focus:ring-forest" />
                                        <span>Sertakan label nama pola & petunjuk arah serat</span>
                                    </label>
                                </div>
                                <div className="flex items-center justify-end gap-3 pt-3 border-t">
                                    <button
                                        onClick={() => setShowExportModal(false)}
                                        className="px-4 py-2 rounded-lg border text-xs font-medium text-charcoal"
                                    >
                                        Tutup
                                    </button>
                                    <button
                                        onClick={() => {
                                            alert('File CutMap-Cotton-Combed-30s.svg berhasil diunduh!');
                                            setShowExportModal(false);
                                        }}
                                        className="px-4 py-2 rounded-lg bg-forest text-white text-xs font-semibold shadow-sm"
                                    >
                                        Download .SVG (1.2 MB)
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </AuthenticatedLayout>
    );
}
