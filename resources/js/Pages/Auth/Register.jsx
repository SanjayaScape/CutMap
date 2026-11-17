import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        try {
            post(route('register'), {
                onFinish: () => reset('password', 'password_confirmation'),
            });
        } catch (err) {
            window.location.href = '/dashboard';
        }
    };

    return (
        <GuestLayout title="Daftar Akun CutMap" subtitle="Mulai potong kain lebih efisien dengan bantuan AI.">
            <Head title="Daftar Akun - CutMap" />

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <InputLabel htmlFor="name" value="Nama Lengkap / Studio" className="text-xs font-medium text-charcoal" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        placeholder="Contoh: Atelier Garmen Studio"
                        className="mt-1 block w-full rounded-lg border-surface-border text-sm focus:border-forest focus:ring-forest"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-1 text-xs" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Alamat Email" className="text-xs font-medium text-charcoal" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="nama@studio.com"
                        className="mt-1 block w-full rounded-lg border-surface-border text-sm focus:border-forest focus:ring-forest"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-1 text-xs" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Kata Sandi" className="text-xs font-medium text-charcoal" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full rounded-lg border-surface-border text-sm focus:border-forest focus:ring-forest"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-1 text-xs" />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Konfirmasi Kata Sandi"
                        className="text-xs font-medium text-charcoal"
                    />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full rounded-lg border-surface-border text-sm focus:border-forest focus:ring-forest"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-1 text-xs"
                    />
                </div>

                <div className="pt-2">
                    <PrimaryButton className="w-full justify-center text-sm font-semibold tracking-normal" disabled={processing}>
                        Buat Akun & Masuk
                    </PrimaryButton>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs text-charcoal-muted">
                    <span>Sudah punya akun?</span>
                    <Link
                        href={route('login')}
                        className="font-medium text-forest hover:underline"
                    >
                        Sign In →
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
