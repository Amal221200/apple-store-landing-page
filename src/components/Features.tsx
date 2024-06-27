import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"
import { animateWithGSAP } from "../utils/animate"
import { explore1Img, explore2Img, exploreVideo } from "../utils"
import { LegacyRef, useRef } from "react"
gsap.registerPlugin(ScrollTrigger)

const Features = () => {
    const videoRef = useRef<HTMLVideoElement>()
    useGSAP(() => {
        gsap.to("#explore-video", {
            scrollTrigger: {
                trigger: "#explore-video",
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
            },
            onComplete() {
                videoRef?.current?.play()
            }
        })
        
        animateWithGSAP({
            target: '#features-title',
            scrollTriggerProps: {
                trigger: '#features-title',
            },
            animationProps: {
                opacity: 1,
                y: 0
            }
        })

        animateWithGSAP({
            target: '.g_grow',
            animationProps: {
                scale: 1,
                opacity: 1,
                ease: 'power1'
            },
            scrollTriggerProps: {
                scrub: 5.5,
            }
        })

        animateWithGSAP({
            target: '.g_text',
            animationProps: {
                y: 0,
                opacity: 1,
                ease: 'power2.inOut',
                duration: 1
            }, scrollTriggerProps: {}
        })
    }, [])
    return (
        <section id="features" className="common-padding relative w-full overflow-hidden bg-zinc">
            <div className="screen-max-width">
                <div className="mb-12 w-full">
                    <h2 id="features-title" className="section-heading">Explore the full story</h2>
                </div>
                <div className="flex flex-col items-center justify-center overflow-hidden">
                    <div className="mb-24 mt-32 pl-24">
                        <h3 className="text-5xl font-semibold lg:text-7xl">iPhone</h3>
                        <h3 className="text-5xl font-semibold lg:text-7xl">Forged in Titanium</h3>
                    </div>
                    <div className="flex-center flex-col sm:px-10">
                        <div className="relative flex h-[50vh] w-full items-center">
                            <video ref={videoRef as LegacyRef<HTMLVideoElement>} playsInline id="explore-video" className="h-full w-full object-cover"
                                preload="none" muted autoPlay >
                                <source src={exploreVideo} type="video/mp4" />
                            </video>
                        </div>

                        <div className="relative flex w-full flex-col">
                            <div className="feature-video-container">
                                <div className="h-[50vh] flex-1 overflow-hidden">
                                    <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                                </div>
                                <div className="h-[50vh] flex-1 overflow-hidden">
                                    <img src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
                                </div>
                            </div>

                            <div className="feature-text-container">
                                <div className="flex-center flex-1">
                                    <p className="feature-text g_text">iPhone 15 Pro is {' '}
                                        <span className="text-white">the first iPhone to feature aerospace-grade titanium design</span>, using the same alloy that spacecrafts use the mission to Mars.
                                    </p>
                                </div>
                                <div className="flex-center flex-1">
                                    <p className="feature-text g_text">Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                                        <span className="text-white">lightest Pro models ever.</span> You'll notice the difference the moment you pick one up.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features