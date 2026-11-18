import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CustomPatternEditor() {
    const [creationMethod, setCreationMethod] = useState('upload'); // 'upload' | 'draw' | 'dimensions'
    const [patternName, setPatternName] = useState('Custom Asymmetric Front Bodice');
    const [grainDirection, setGrainDirection] = useState('vertical');
    const [isPolygonConfirmed, setIsPolygonConfirmed] = useState(false);

    // Dimension based state
    const [dimWidth, setDimWidth] = useState(48);
    const [dimHeight, setDimHeight] = useState(65);
    const [curveRadius, setCurveRadius] = useState(12);

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-charcoal-muted">
                            <Link href="/patterns" className="hover:text-forest">Patterns</Link>
                            <span>/</span>
                            <span className="text-forest font-semibold">Custom Pattern Editor</span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-charcoal mt-1">
                            Digitalisasi Pola Kustom Baru
                        </h1>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link
                            href="/patterns"
                            className="px-3.5 py-2 rounded-lg border border-surface-border text-xs font-medium text-charcoal hover:bg-surface transition"
                        >
                            Batal
                        </Link>
                        <button
                            onClick={() => {
                                alert(`Pola "${patternName}" berhasil disimpan ke My Custom Patterns!`);
                                window.location.href = '/patterns';
                            }}
                            className="px-4 py-2 rounded-lg bg-forest hover:bg-forest-hover text-white text-xs font-semibold shadow-sm transition"
                        >
                            Simpan ke My Patterns
                        </button>
                    </div>
                </div>
            }
        >
            <Head title="Custom Pattern Editor - CutMap" />

            <div className="space-y-8 max-w-5xl mx-auto">
                {/* Pattern Metadata Header */}
                <div className="bg-surface rounded-2xl border border-surface-border p-6 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="text-xs font-medium text-charcoal block mb-1">
                                Nama Pola Komponen
                            </label>
                            <input
                                type="text"
                                value={patternName}
                                onChange={(e) => setPatternName(e.target.value)}
                                className="w-full text-xs rounded-lg border-surface-border focus:border-forest focus:ring-forest font-mono"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-charcoal block mb-1">
                                Arah Serat Kain (Grain Direction)
                            </label>
                            <select
                                value={grainDirection}
                                onChange={(e) => setGrainDirection(e.target.value)}
                                className="w-full text-xs rounded-lg border-surface-border focus:border-forest focus:ring-forest"
                            >
                                <option value="vertical">Vertikal / Panjang Kain (Straight)</option>
                                <option value="horizontal">Horizontal / Lebar Kain (Crosswise)</option>
                                <option value="bias">Serong 45° (True Bias)</option>
                                <option value="any">Bebas (Non-directional Fabric)</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-charcoal block mb-1">
                                Tipe Pakaian
                            </label>
                            <select className="w-full text-xs rounded-lg border-surface-border focus:border-forest focus:ring-forest">
                                <option>Top / Atasan</option>
                                <option>Bottom / Bawahan</option>
                                <option>Outerwear</option>
                                <option>Aksesori & Pouch</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* 3 Creation Methods Selector */}
                <div className="bg-surface rounded-2xl border border-surface-border p-6 shadow-sm">
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-surface-border">
                        <div>
                            <h2 className="text-base font-bold text-charcoal">Pilih Metode Input Pola</h2>
                            <p className="text-xs text-charcoal-muted">
                                3 cara mudah mengonversi pola fisik menjadi vektor poligon CAD.
                            </p>
                        </div>

                        <div className="flex items-center gap-1 bg-warm-bg p-1 rounded-xl border border-surface-border text-xs font-mono">
                            <button
                                onClick={() => setCreationMethod('upload')}
                                className={`px-3 py-1.5 rounded-lg transition ${
                                    creationMethod === 'upload' ? 'bg-forest text-white font-bold' : 'text-charcoal-muted hover:text-charcoal'
                                }`}
                            >
                                1. Upload & Konfirmasi
                            </button>
                            <button
                                onClick={() => setCreationMethod('draw')}
                                className={`px-3 py-1.5 rounded-lg transition ${
                                    creationMethod === 'draw' ? 'bg-forest text-white font-bold' : 'text-charcoal-muted hover:text-charcoal'
                                }`}
                            >
                                2. Manual Shape Draw
                            </button>
                            <button
                                onClick={() => setCreationMethod('dimensions')}
                                className={`px-3 py-1.5 rounded-lg transition ${
                                    creationMethod === 'dimensions' ? 'bg-forest text-white font-bold' : 'text-charcoal-muted hover:text-charcoal'
                                }`}
                            >
                                3. Dimension-Based
                            </button>
                        </div>
                    </div>

                    {/* METHOD 1: UPLOAD PATTERN IMAGE + POLYGON CONFIRMATION */}
                    {creationMethod === 'upload' && (
                        <div className="space-y-6">
                            <div className="border-2 border-dashed border-forest/40 rounded-xl p-6 bg-warm-bg/40 text-center">
                                <svg className="w-10 h-10 mx-auto text-forest mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <div className="text-sm font-semibold text-charcoal">
                                    Unggah Foto Kertas Pola / Sketsa Garment
                                </div>
                                <p className="text-xs text-charcoal-muted mt-1 max-w-sm mx-auto">
                                    Format JPG, PNG, atau scan PDF. AI Computer Vision akan melacak kontur garis potong terluar secara otomatis.
                                </p>
                                <button className="mt-3 px-4 py-2 bg-forest text-white text-xs font-semibold rounded-lg shadow-sm">
                                    Pilih File Pola
                                </button>
                            </div>

                            {/* Tahap Wajib: Konfirmasi Poligon */}
                            <div className="bg-warm-bg rounded-xl border border-surface-border p-5 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sage text-forest">
                                            TAHAP WAJIB
                                        </span>
                                        <h3 className="text-sm font-bold text-charcoal mt-1">
                                            Konfirmasi Deteksi Kontur Poligon AI
                                        </h3>
                                        <p className="text-xs text-charcoal-muted">
                                            Pastikan garis hijau membungkus seluruh tepi potongan pola tanpa ada bagian yang terpotong.
                                        </p>
                                    </div>
                                    <div className="text-right text-xs font-mono">
                                        <div className="text-forest font-bold">8 Titik Sudut (Vertices)</div>
                                        <div className="text-charcoal-muted">Skala Kalibrasi: 1:1</div>
                                    </div>
                                </div>

                                {/* Preview Detected Polygon */}
                                <div className="h-64 bg-surface rounded-lg border border-dashed border-forest/50 relative overflow-hidden flex items-center justify-center">
                                    <svg className="w-80 h-56" viewBox="0 0 320 220">
                                        {/* Detected garment contour */}
                                        <path
                                            d="M40 30 L260 30 L280 180 L200 200 L120 200 L30 150 Z"
                                            fill="#ede9fe"
                                            fillOpacity="0.4"
                                            stroke="#2B07BB"
                                            strokeWidth="2.5"
                                        />
                                        {/* Vertices */}
                                        {[
                                            [40, 30], [260, 30], [280, 180], [200, 200], [120, 200], [30, 150]
                                        ].map(([x, y], idx) => (
                                            <circle key={idx} cx={x} cy={y} r="5" fill="#2B07BB" className="cursor-pointer" />
                                        ))}
                                    </svg>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={isPolygonConfirmed}
                                            onChange={(e) => setIsPolygonConfirmed(e.target.checked)}
                                            className="rounded text-forest focus:ring-forest border-surface-border"
                                        />
                                        <span className="text-xs font-semibold text-charcoal">
                                            Saya mengonfirmasi bahwa kontur poligon ini sudah presisi dan siap di-nesting.
                                        </span>
                                    </label>

                                    <button
                                        disabled={!isPolygonConfirmed}
                                        onClick={() => alert('Poligon berhasil dikonfirmasi!')}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition ${
                                            isPolygonConfirmed
                                                ? 'bg-forest text-white'
                                                : 'bg-surface-border text-charcoal-light cursor-not-allowed'
                                        }`}
                                    >
                                        ✓ Konfirmasi Poligon
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* METHOD 2: MANUAL SHAPE DRAWING */}
                    {creationMethod === 'draw' && (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between text-xs font-mono text-charcoal-muted">
                                <span>Klik pada kanvas untuk membuat titik sudut poligon baru.</span>
                                <span>Total Titik: 5 Vertices</span>
                            </div>

                            <div className="h-72 bg-warm-bg rounded-xl border-2 border-dashed border-forest/40 relative overflow-hidden flex items-center justify-center select-none cursor-crosshair">
                                <div 
                                    className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{
                                        backgroundImage: 'linear-gradient(to right, #2B07BB 1px, transparent 1px), linear-gradient(to bottom, #2B07BB 1px, transparent 1px)',
                                        backgroundSize: '20px 20px'
                                    }}
                                />
                                <div className="text-center">
                                    <div className="w-10 h-10 rounded-full bg-forest-light text-forest flex items-center justify-center mx-auto mb-2 font-mono font-bold">
                                        +
                                    </div>
                                    <span className="text-xs font-mono text-charcoal font-medium">CAD Drawing Mode Aktif</span>
                                    <span className="block text-[10px] text-charcoal-muted mt-0.5">Tekan 'Esc' atau klik titik awal untuk menutup loop poligon</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* METHOD 3: DIMENSION-BASED CREATION */}
                    {creationMethod === 'dimensions' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-medium text-charcoal block mb-1">
                                        Lebar Dasar / Chest (cm)
                                    </label>
                                    <input
                                        type="number"
                                        value={dimWidth}
                                        onChange={(e) => setDimWidth(Number(e.target.value))}
                                        className="w-full text-xs font-mono rounded-lg border-surface-border focus:border-forest focus:ring-forest"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-charcoal block mb-1">
                                        Panjang Pola / Height (cm)
                                    </label>
                                    <input
                                        type="number"
                                        value={dimHeight}
                                        onChange={(e) => setDimHeight(Number(e.target.value))}
                                        className="w-full text-xs font-mono rounded-lg border-surface-border focus:border-forest focus:ring-forest"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-charcoal block mb-1">
                                        Radius Kurva Kerung Lengan (cm)
                                    </label>
                                    <input
                                        type="number"
                                        value={curveRadius}
                                        onChange={(e) => setCurveRadius(Number(e.target.value))}
                                        className="w-full text-xs font-mono rounded-lg border-surface-border focus:border-forest focus:ring-forest"
                                    />
                                </div>
                            </div>

                            {/* Live Preview */}
                            <div className="bg-warm-bg rounded-xl border border-surface-border p-4 flex flex-col items-center justify-center">
                                <span className="text-[11px] font-mono text-charcoal-muted mb-4">Pratinjau Geometri Vektor (Skala 1:10)</span>
                                <div
                                    style={{
                                        width: `${dimWidth * 2.8}px`,
                                        height: `${dimHeight * 2.8}px`,
                                        borderRadius: `${curveRadius * 2}px ${curveRadius * 2}px 4px 4px`,
                                    }}
                                    className="bg-surface border-2 border-forest shadow-sm flex items-center justify-center text-[10px] font-mono text-forest"
                                >
                                    {dimWidth} × {dimHeight} cm
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
