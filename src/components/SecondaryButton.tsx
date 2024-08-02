import Link from "next/link"

export const SecondaryButton = () => {
    return (
        <Link href="/" className="flex items-center bg-primary 2xl:rounded-lg text-white 2xl:w-fit w-full px-4 py-2.5 uppercase font-black text-[1.25rem] 2xl:hover:scale-90">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 10L15 20L25 30" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Back to home</span>
        </Link>
    )
}
