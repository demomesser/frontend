import { useEffect, useRef } from "react"
import type { Exhibitor } from "../../shared/types"

type Props = {
    exhibitors: Exhibitor[]
}

const ExhibitorSlider = ({ exhibitors }: Props) => {
    const trackRef = useRef<HTMLDivElement | null>(null)
    const rafRef = useRef<number | null>(null)
    const offsetRef = useRef(0)

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const speed = 0.3
        let contentWidth = 0

        const measure = () => {
            contentWidth = track.scrollWidth / 2
        }

        measure()
        window.addEventListener("resize", measure)

        const step = () => {
            offsetRef.current -= speed

            if (Math.abs(offsetRef.current) >= contentWidth) {
                offsetRef.current = 0
            }

            track.style.transform = `translateX(${offsetRef.current}px)`
            rafRef.current = requestAnimationFrame(step)
        }

        rafRef.current = requestAnimationFrame(step)

        const pause = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            rafRef.current = null
        }

        const resume = () => {
            if (!rafRef.current) rafRef.current = requestAnimationFrame(step)
        }

        track.addEventListener("mouseenter", pause)
        track.addEventListener("mouseleave", resume)

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            window.removeEventListener("resize", measure)
            track.removeEventListener("mouseenter", pause)
            track.removeEventListener("mouseleave", resume)
        }
    }, [])

    return (
        <section className="py-24 bg-[#1E425E] overflow-hidden">
            <div className="relative w-full">
                <div
                    ref={trackRef}
                    className="flex gap-6 px-6 will-change-transform"
                >
                    {[...exhibitors, ...exhibitors].map((exhibitor, index) => (
                        <a
                            key={`${exhibitor.id}-${index}`}
                            href={exhibitor.link}
                            target="_blank"
                            className="
                                min-w-[240px]
                                h-[140px]
                                bg-white
                                rounded-md
                                shadow-sm
                                hover:shadow-md
                                transition
                                flex
                                items-center
                                justify-center
                                p-3
                            "
                        >
                            <img
                                src={exhibitor.image}
                                alt={exhibitor.name}
                                className="max-h-20 object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExhibitorSlider
