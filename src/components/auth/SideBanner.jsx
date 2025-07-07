import Image from "next/image";

export default function SideBanner() {
    return (
        <section className="hidden lg:block lg:basis-[40%] lg:relative">
            <Image
                src="/image/side-banner.png"
                alt="Side banner"
                fill
                className="w-full h-auto object-cover"
            />
        </section>
    );
}