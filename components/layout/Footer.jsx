import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full border-t border-[#24272e] bg-[#0b0c0e]">
            <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-8 sm:px-8 lg:px-10">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/images/logo.png"
                        alt="FitLog Logo"
                        width={22}
                        height={22}
                        className="object-contain"
                    />

                    <span className="text-sm font-bold uppercase tracking-wide text-white">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-xs text-[#777b85] sm:text-sm">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;