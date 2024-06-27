import gsap from "gsap";
import * as THREE from "three"
import { MutableRefObject } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

export function animateWithGSAP({ target, scrollTriggerProps, animationProps }: { target: gsap.TweenTarget | gsap.DOMTarget, scrollTriggerProps?: ScrollTrigger.Vars, animationProps: gsap.TweenVars }) {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target as gsap.DOMTarget,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%',
            ...scrollTriggerProps,
        }
    })
}

export function animateWithGSAPTimeline(timeline: gsap.core.Timeline, rotationRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>, rotationState: number, firstTarget: gsap.TweenTarget, secondTarget: gsap.TweenTarget, animationProps: gsap.TweenVars) {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })
    timeline.to(firstTarget, {
        ...animationProps,
        ease: 'power2.inOut'
    }, '<')

    timeline.to(secondTarget, {
        ...animationProps,
        ease: 'power2.inOut'
    }, '<')

}