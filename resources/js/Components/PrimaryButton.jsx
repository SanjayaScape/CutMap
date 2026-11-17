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
                `inline-flex items-center justify-center rounded-lg border border-transparent bg-forest px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition duration-150 ease-in-out hover:bg-forest-hover focus:bg-forest-hover focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 active:bg-forest-dark shadow-sm ${
                    disabled && 'opacity-30 cursor-not-allowed'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
