export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center rounded-lg border border-transparent bg-brand px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition duration-150 ease-in-out hover:bg-brand-hover focus:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 active:bg-brand-dark shadow-sm shadow-brand/20 ${
                    disabled && 'opacity-30 cursor-not-allowed'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
