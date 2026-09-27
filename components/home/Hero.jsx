import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="mx-auto flex w-full max-w-[1350px] flex-col overflow-hidden rounded-xl border border-[#24272e] bg-[#15171c] px-6 py-10 sm:px-8 sm:py-12 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-10 lg:py-12">

                {/* Hero Content */}
                <div className="w-full md:w-[58%]">

                    <p className="text-xs font-semibold tracking-[0.18em] text-[#ccff00] sm:text-sm">
                        WORKOUT LIBRARY
                    </p>

                    <div className="mt-4 text-[clamp(2.5rem,3.5vw,4rem)] font-bold uppercase leading-[1] tracking-[-0.07em] text-white">
                        <h1>Train with intent. Log</h1>
                        <h1>every set.</h1>
                    </div>

                    <p className="mt-6 max-w-[620px] text-sm leading-6 text-[#a1a1aa] sm:text-base sm:leading-7">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today&apos;s plan, and watch the week&apos;s
                        work add up.
                    </p>

                    <Link
                        href="library"
                        className="mt-7 inline-flex items-center gap-3 rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition-transform duration-200 hover:scale-105 sm:px-6 sm:py-3.5"
                    >
                        <span>Browse Workouts</span>

                        <span className="text-lg leading-none">
                            →
                        </span>
                    </Link>
                </div>

                {/* Hero Image */}
                <div className="mt-8 flex w-full justify-center md:mt-0 md:w-[42%] md:justify-end">
                    <div className="relative h-[260px] w-full sm:h-[300px] md:h-[300px] lg:h-[330px]">
                        <Image
                            src="/images/hero.png"
                            alt="FitLog workout"
                            fill
                            priority
                            sizes="(max-width: 767px) 90vw, 40vw"
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;