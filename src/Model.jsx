import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import SplitType from 'split-type'

export default function Model(props) {


  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();
  

  useLayoutEffect(() => {

    const cont = document.querySelector(".carousel");
    const splitTypes = document.querySelectorAll('.reveal-type')

    splitTypes.forEach((char,i) => {

      const bg = char.dataset.bgColor
      const fg = char.dataset.fgColor

      const text = new SplitType(char, { types: 'chars'})

      gsap.from(text.chars, {
              scrollTrigger: {
                  trigger: char,
                  start: 'top 70%',
                  end: 'bottom 30%',
                  scrub: true,
              },
              opacity: 0.2,
              stagger: 0.1,
      })
  })

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      //FIRST TO SECOND

    tl

    .to(".carousel-content", {
      ease: "none",
      x: () => -(cont.scrollWidth - window.innerWidth),
      scrollTrigger: {
        trigger: cont,
        pin: cont,
        start: "center center",
        end: () => "+=" + (cont.scrollWidth - window.innerWidth),
        scrub: true,
        invalidateOnRefresh: true,
      }
    })

    .to(".project-one", {
      width: isMobile ? "90%" : "70%",
      height: isMobile ? "300px" : "600px",
      opacity: 1,
        scrollTrigger: {
          trigger: ".project-one",
          start: "top bottom+=200", // Start when the bottom of the viewport touches the bottom of .project-one
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(".p-one-text", {
        fontSize: "2rem",
        opacity: 1,
          scrollTrigger: {
            trigger: ".project-one",
            start: "top bottom+=200", // Start when the bottom of the viewport touches the bottom of .project-one
            end: "bottom top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".p-one-main", {
          fontSize: "4rem",
          opacity: 1,
            scrollTrigger: {
              trigger: ".project-one",
              start: "top bottom+=200", // Start when the bottom of the viewport touches the bottom of .project-one
              end: "bottom top",
              scrub: true,
              immediateRender: false,
            },
          })


      .to(".project-two", {
        width: isMobile ? "90%" : "70%",
        height: isMobile ? "300px" : "600px",
        opacity: 1,
          scrollTrigger: {
            trigger: ".project-two",
            start: isMobile ? "top bottom-=50" : "top bottom-=100",
            end: "bottom top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".p-two-text", {
          fontSize: "2rem",
          opacity: 1,
          scrollTrigger: {
            trigger: ".project-two",
            start: isMobile ? "top bottom-=50" : "top bottom-=100",
            end: "bottom top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".p-two-main", {
          fontSize: "4rem",
          opacity: 1,
          scrollTrigger: {
            trigger: ".project-two",
            start: isMobile ? "top bottom-=50" : "top bottom-=100",
            end: "bottom top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".project-three", {
          width: isMobile ? "90%" : "70%",
          height: isMobile ? "300px" : "600px",
          opacity: 1,
            scrollTrigger: {
              trigger: ".project-three",
              start: isMobile ? "top bottom" : "top bottom-=200",
              end: "bottom top",
              scrub: true,
              immediateRender: false,
            },
          })

          .to(".p-three-text", {
            fontSize: "2rem",
            opacity: 1,
            scrollTrigger: {
              trigger: ".project-three",
              start: isMobile ? "top bottom" : "top bottom-=200",
              end: "bottom top",
              scrub: true,
              immediateRender: false,
            },
          })

          .to(".p-three-main", {
            fontSize: "4rem",
            opacity: 1,
            scrollTrigger: {
              trigger: ".project-three",
              start: isMobile ? "top bottom" : "top bottom-=200",
              end: "bottom top",
              scrub: true,
              immediateRender: false,
            },
          })

          .to(".project-four", {
            width: isMobile ? "90%" : "70%",
            height: isMobile ? "300px" : "600px",
            opacity: 1,
              scrollTrigger: {
                trigger: ".project-four",
                start: isMobile ? "top bottom" : "top bottom-=300",
                end: "bottom top",
                scrub: true,
                immediateRender: false,
              },
            })

            .to(".p-four-text", {
              fontSize: "2rem",
              opacity: 1,
              scrollTrigger: {
                trigger: ".project-four",
                start: isMobile ? "top bottom" : "top bottom-=300",
                end: "bottom top",
                scrub: true,
                immediateRender: false,
              },
            })

            .to(".p-four-main", {
              fontSize: "4rem",
              opacity: 1,
              scrollTrigger: {
                trigger: ".project-four",
                start: isMobile ? "top bottom" : "top bottom-=300",
                end: "bottom top",
                scrub: true,
                immediateRender: false,
              },
            })

            .to(".four-expanding", {
              width: "130%",
              height: "100vh",
              borderRadius: "75px",
              left: "-15%",
                scrollTrigger: {
                  trigger: ".four-one",
                  start: "top center",
                  end: "25% top",
                  scrub: true,
                  immediateRender: false,
                },
              })
        
              .to(".four-expanding", {
                position: "fixed",
                  scrollTrigger: {
                    trigger: ".four-two",
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    immediateRender: false,
                  },
                })

                .to(".dash-two, .four-desc-two", {
                  opacity: 1,
                    scrollTrigger: {
                      trigger: ".four-two",
                      start: "top bottom",
                      end: "top top",
                      scrub: true,
                      immediateRender: false,
                    },
                  })

                  .to(".dash-three, .four-desc-three", {
                    opacity: 1,
                      scrollTrigger: {
                        trigger: ".four-three",
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                        immediateRender: false,
                      },
                    })

                    .to(".dash-four, .four-desc-four", {
                      opacity: 1,
                        scrollTrigger: {
                          trigger: ".four-four",
                          start: "top bottom",
                          end: "top top",
                          scrub: true,
                          immediateRender: false,
                        },
                      })
        
                .to(".four-expanding", {
                  width: "70vw",
                  left: "15vw",
                  borderRadius: "75px",
                    scrollTrigger: {
                      trigger: ".four-four",
                      start: "top center",
                      end: "bottom top",
                      scrub: true,
                      immediateRender: false,
                    },
                  })
        
                  
              .to(".four-expanding", {
                position: "relative",
                  scrollTrigger: {
                    trigger: ".five",
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    immediateRender: false,
                  },
                })



    })
  }, [])


  return (
    <group {...props} dispose={null}>
    </group>
  );
}