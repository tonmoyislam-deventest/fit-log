import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="mx-auto flex w-full max-w-[1350px] min-h-[calc(100svh-120px)] flex-col overflow-hidden rounded-xl border border-[#24272e] bg-[#15171c] px-6 py-10 sm:px-8 sm:py-12 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-12 lg:py-14">

                {/* Hero Content */}
                <div className="w-full md:w-[55%] lg:w-[58%]">

                    <p className="text-xs font-semibold tracking-[0.18em] text-[#ccff00] sm:text-sm">
                        WORKOUT LIBRARY
                    </p>

                    <div className="mt-5 text-[clamp(2.8rem,4vw,4.5rem)] font-bold uppercase leading-[1] tracking-[-0.07em] [word-spacing:10px]">
                        <h1>Train with intent. Log</h1>
                        <h1>every set.</h1>
                    </div>

                    <p className="mt-7 max-w-[600px] text-sm leading-6 text-[#a1a1aa] sm:text-base sm:leading-7">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today&apos;s plan, and watch the week&apos;s
                        work add up.
                    </p>

                    <Link
                        href="/library"
                        className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition-transform duration-200 hover:scale-105 sm:px-6 sm:py-3.5"
                    >
                        <span>Browse Workouts</span>

                        <span className="text-lg leading-none">
                            →
                        </span>
                    </Link>
                </div>

                {/* Hero Image */}
                <div className="mt-8 flex w-full justify-center md:mt-0 md:w-[45%] md:justify-end lg:w-[42%]">
                    <div className="relative h-[280px] w-full sm:h-[330px] md:h-[360px] lg:h-[420px]">
                        <Image
                            src="/images/hero.png"
                            alt="FitLog workout"
                            fill
                            priority
                            sizes="(max-width: 767px) 90vw, 42vw"
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;