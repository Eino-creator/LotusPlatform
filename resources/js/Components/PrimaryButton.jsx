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
                `w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md text-center transition duration-150 ease-in-out ${
                    disabled && 'opacity-50 cursor-not-allowed'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
