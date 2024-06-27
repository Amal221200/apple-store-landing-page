import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { heroVideo, smallHeroVideo } from "../utils"
import { useCallback, useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 760 ? heroVideo : smallHeroVideo);

  const handleVideoSrcSet = useCallback(() => {
    if (window.innerWidth > 640) {
      setVideoSrc(heroVideo)
    } else {
      setVideoSrc(smallHeroVideo)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [handleVideoSrcSet])

  useGSAP(() => {
    gsap.to('.hero-title', {
      opacity: 1,
      delay: 2,
    })

    gsap.to('#cta', {
      opacity: 1,
      translateY: -50,
      delay: 2
    })
  }, [])
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video autoPlay muted playsInline key={videoSrc} className="pointer-events-none">
            <source src={videoSrc} />
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero