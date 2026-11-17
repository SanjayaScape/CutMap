import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Settings() {
    const [studioName, setStudioName] = useState('Atelier Garmen Studio');
    const [studioEmail, setStudioEmail] = useState('production@atelier.studio');
    const [unitPref, setUnitPref] = useState('cm');
    const [defaultSpacing, setDefaultSpacing] = useState(5);
    const [defaultMargin, setDefaultMargin] = useState(10);
    const [exportFormat, setExportFormat] = useState('svg');

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h1 className="text-xl font-bold tracking-tight text-charcoal">
                        Workspace Settings
                    </h1>
                    <p className="text-xs text-charcoal-muted mt-0.5">
                        Konfigurasi parameter default studio, akun, dan aturan komputasi nesting.
                    </p>
                </div>
            }
        >
            <Head title="Settings - CutMap" />

            <div className="space-y-8 max-w-4xl mx-auto">
                {/* Section 1: Profil Studio */}
                <div className="bg-surface rounded-2xl border border-surface-border p-6 shadow-sm space-y-4">
                    <div className="border-b border-surface-border pb-3">
                        <h2 className="text-sm font-bold text-charcoal uppercase tracking-wider font-mono">
                            Studio & Akun Workspace
                        </h2>
                        <p className="text-xs text-charcoal-muted">Informasi identitas studio garmen Anda.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-medium text-charcoal block mb-1">Nama Studio / Brand</label>
                            <input
                                type="text"
                                value={studioName}
                                onChange={(e) => setStudioName(e.target.value)}
                                className="w-full text-xs rounded-lg border-surface-border focus:border-forest focus:ring-forest"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-charcoal block mb-1">Email Notifikasi Produksi</label>
                            <input
                                type="email"
                                value={studioEmail}
                                onChange={(e) => setStudioEmail(e.target.value)}
                                className="w-full text-xs rounded-lg border-surface-border focus:border-forest focus:ring-forest"
                            />
                        </div>
                    </div>
                </div>

                {/* Section 2: Default Cutting & CAD Rules */}
                <div className="bg-surface rounded-2xl border border-surface-border p-6 shadow-sm space-y-5">
                    <div className="border-b border-surface-border pb-3">
                        <h2 className="text-sm font-bold text-charcoal uppercase tracking-wider font-mono">
                            Default Cutting & Algoritma Nesting
                        </h2>
                        <p className="text-xs text-charcoal-muted">Nilai awal otomatis setiap membuat Cut Plan baru.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div>
                            <label className="text-xs font-medium text-charcoal block mb-1">Satuan Ukuran Utama</label>
                            <select
                                value={unitPref}
                                onChange={(e) => setUnitPref(e.target.value)}
                                className="w-full text-xs rounded-lg border-surface-border focus:border-forest focus:ring-forest font-mono"
                            >
                                <option value="cm">Sentimeter (cm)</option>
                                <option value="mm">Milimeter (mm)</option>
                                <option value="inch">Inci (inch)</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs font-medium text-charcoal block mb-1">Default Blade Spacing (mm)</label>
                            <input
                                type="number"
                                value={defaultSpacing}
                                onChange={(e) => setDefaultSpacing(Number(e.target.value))}
                                className="w-full text-xs font-mono rounded-lg border-surface-border focus:border-forest focus:ring-forest"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-medium text-charcoal block mb-1">Default Edge Margin (mm)</label>
                            <input
                                type="number"
                                value={defaultMargin}
                                onChange={(e) => setDefaultMargin(Number(e.target.value))}
                                className="w-full text-xs font-mono rounded-lg border-surface-border focus:border-forest focus:ring-forest"
                            />
                        </div>
                    </div>

                    <div className="pt-3 border-t border-surface-border">
                        <label className="text-xs font-medium text-charcoal block mb-1">Format Vektor Export Default</label>
                        <div className="flex items-center gap-4 text-xs font-mono">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="export"
                                    value="svg"
                                    checked={exportFormat === 'svg'}
                                    onChange={(e) => setExportFormat(e.target.value)}
                                    className="text-forest focus:ring-forest"
                                />
                                <span>SVG (Scalable Vector Graphics) — Disarankan</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="export"
                                    value="dxf"
                                    checked={exportFormat === 'dxf'}
                                    onChange={(e) => setExportFormat(e.target.value)}
                                    className="text-forest focus:ring-forest"
                                />
                                <span>DXF / AutoCAD</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Save CTA */}
                <div className="flex justify-end">
                    <button
                        onClick={() => alert('Pengaturan workspace CutMap berhasil disimpan!')}
                        className="px-6 py-2.5 rounded-xl bg-forest hover:bg-forest-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm transition"
                    >
                        Simpan Pengaturan
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
