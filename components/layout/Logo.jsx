import Image from "next/image";

const Logo = () => {
    return (
        <div className="flex shrink-0 items-center gap-2">
            <Image
                src="/images/logo.png"
                alt="FitLog Logo"
                width={22}
                height={22}
                className="object-contain"
            />

            <span className="text-[clamp(0.75rem,1.1vw,1rem)] font-bold tracking-tight text-white">
                FITLOG
            </span>
        </div>
    );
};

export default Logo;