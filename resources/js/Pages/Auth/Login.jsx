import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: 'designer@cutmap.studio',
        password: 'password123',
        remember: true,
    });

    const submit = (e) => {
        e.preventDefault();
        // Fallback for preview: If route('login') exists, post it, otherwise redirect to dashboard
        try {
            post(route('login'), {
                onFinish: () => reset('password'),
            });
        } catch (err) {
            window.location.href = '/dashboard';
        }
    };

    return (
        <GuestLayout title="Sign In ke CutMap" subtitle="Kelola pola, optimasi nesting, dan pantau efisiensi kain Anda.">
            <Head title="Sign In - CutMap" />

            {status && (
                <div className="mb-4 text-xs font-mono font-medium text-forest bg-forest-light border border-forest/20 p-2.5 rounded-lg">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <InputLabel htmlFor="email" value="Email Akun" className="text-xs font-medium text-charcoal" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full rounded-lg border-surface-border text-sm focus:border-forest focus:ring-forest"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-1 text-xs" />
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <InputLabel htmlFor="password" value="Kata Sandi" className="text-xs font-medium text-charcoal" />
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-xs text-forest hover:underline"
                            >
                                Lupa sandi?
                            </Link>
                        )}
                    </div>
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full rounded-lg border-surface-border text-sm focus:border-forest focus:ring-forest"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-1 text-xs" />
                </div>

                <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            className="rounded border-surface-border text-forest focus:ring-forest"
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="text-xs text-charcoal-muted">Ingat saya</span>
                    </label>
                </div>

                <div className="pt-2">
                    <PrimaryButton className="w-full justify-center text-sm font-semibold tracking-normal" disabled={processing}>
                        Masuk ke Workspace
                    </PrimaryButton>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs text-charcoal-muted">
                    <span>Belum punya akun CutMap?</span>
                    <Link
                        href={route('register')}
                        className="font-medium text-forest hover:underline"
                    >
                        Daftar sekarang →
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
