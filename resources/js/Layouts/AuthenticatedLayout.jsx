import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import CutMapLogo from '@/Components/CutMapLogo';

export default function AuthenticatedLayout({ header, actions, children }) {
    const { url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        {
            name: 'Overview',
            href: '/dashboard',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            ),
        },
        {
            name: 'Pattern Library',
            href: '/patterns',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
        },
        {
            name: 'My Projects',
            href: '/projects',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
            ),
        },
        {
            name: 'Settings',
            href: '/settings',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
    ];

    const isActive = (path) => url.startsWith(path);

    return (
        <div className="min-h-screen bg-warm-bg text-charcoal flex flex-col md:flex-row antialiased">
            {/* Sidebar Desktop */}
            <aside className="hidden md:flex flex-col w-64 border-r border-surface-border bg-surface shrink-0 h-screen sticky top-0 justify-between">
                <div>
                    {/* Brand Logo */}
                    <div className="h-16 px-6 border-b border-surface-border flex items-center justify-between">
                        <Link href="/" className="inline-flex items-center">
                            <CutMapLogo />
                        </Link>
                    </div>

                    {/* New Cut Plan Action Button */}
                    <div className="p-4">
                        <Link
                            href="/cut-plan/new"
                            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm font-medium shadow-sm transition-all duration-150 group"
                        >
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-90 duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 4v16m8-8H4" />
                            </svg>
                            <span>+ New Cut Plan</span>
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="px-3 space-y-1">
                        <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-charcoal-muted">
                            Workspace
                        </div>
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                                        active
                                            ? 'bg-brand-light text-brand font-semibold'
                                            : 'text-charcoal-muted hover:text-charcoal hover:bg-warm-bg'
                                    }`}
                                >
                                    <span className={active ? 'text-brand' : 'text-charcoal-muted'}>
                                        {item.icon}
                                    </span>
                                    <span>{item.name}</span>
                                    {item.name === 'Pattern Library' && (
                                        <span className="ml-auto text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-surface-subtle text-charcoal-muted border border-surface-border">
                                            24
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Bottom User / Workspace Status */}
                <div className="p-4 border-t border-surface-border bg-warm-bg/50">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand text-white font-mono text-xs flex items-center justify-center font-medium shadow-xs">
                                AT
                            </div>
                            <div className="text-xs">
                                <div className="font-semibold text-charcoal truncate max-w-[110px]">Atelier Studio</div>
                                <div className="text-[10px] font-mono text-brand flex items-center gap-1 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                                    Pro Fabric Plan
                                </div>
                            </div>
                        </div>
                        <Link
                            href="/login"
                            title="Sign In / Ganti Akun"
                            className="p-1.5 text-charcoal-muted hover:text-charcoal hover:bg-surface rounded-lg transition"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden bg-surface border-b border-surface-border px-4 py-3 flex items-center justify-between sticky top-0 z-20">
                <CutMapLogo />
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 rounded-lg text-charcoal-muted hover:bg-warm-bg"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-surface border-b border-surface-border px-4 py-3 space-y-2">
                    <Link
                        href="/cut-plan/new"
                        className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-forest text-white text-sm font-medium"
                    >
                        + New Cut Plan
                    </Link>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-charcoal-muted hover:bg-warm-bg"
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            )}

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 min-h-screen">
                {/* Top Action Header */}
                {(header || actions) && (
                    <header className="bg-surface/80 backdrop-blur-sm border-b border-surface-border px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sticky top-0 z-10">
                        <div>{header}</div>
                        {actions && <div className="flex items-center gap-2.5">{actions}</div>}
                    </header>
                )}

                {/* Page Canvas */}
                <main className="flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
