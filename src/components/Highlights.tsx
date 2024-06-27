import { useGSAP } from "@gsap/react"
import { watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"
import { animateWithGSAP } from "../utils/animate"


const Highlights = () => {

  useGSAP(() => {
    animateWithGSAP({
      target: '#title', scrollTriggerProps: {
        trigger: '#title',
        toggleActions: 'restart reverse restart reverse',
      }, animationProps: { opacity: 1, y: 0 }
    })

    animateWithGSAP({
      target: '.link', scrollTriggerProps: {
        trigger: '#links',
        toggleActions: 'restart reverse restart reverse',
      }, animationProps: {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25
      }
    })

  }, [])
  return (
    <section id="highlights" className="common-padding h-full w-screen overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">Get the highlights.</h1>

          <div id="links" className="flex flex-wrap items-baseline justify-end gap-5">
            <p className="link">Watch the film <img src={watchImg} alt="watch" className="ml-2" /></p>
            <p className="link">Watch the event <img src={watchImg} alt="watch" className="ml-2" /></p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights