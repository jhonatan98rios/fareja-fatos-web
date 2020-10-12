import React, { useRef, useEffect, useState } from 'react';
import Flickity from 'react-flickity-component'

import css from './style.module.scss'

export default function About({content}) {

  const [isVisible, setVisible] = React.useState(true);
  const domRef = useRef();

  const flickityOptions = {
    initialIndex: 0,
    pageDots: true,
    prevNextButtons: true
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className={css.about} id={content.id}>

      <div className={`fade-in-section content ${isVisible ? 'is-visible' : ''}`} ref={domRef}>

        {/* Desktop */}

        <div className={`${css.features}  is-hidden-mobile`}>
          {
            content.card.map((card, index) => {
              return (
                <div className={css.card} key={index}>
                  <img src={card.image} />
                  <p> {card.description} </p>
                </div>
              )
            })
          }
        </div>

        {/* Mobile */}
        <div className={'is-hidden-desktop'}>
          <Flickity
            className={'carousel'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            {
              content.card.map((card, index) => {
                return (
                  <div className={css.card} key={index}>
                    <img src={card.image} />
                    <p> {card.description} </p>
                  </div>
                )
              })
            }
          </Flickity>
        </div>

      </div>

      <style jsx>{`

        .fade-in-section {
          opacity: 0;
          transform: translateY(20vh);
          visibility: hidden;
          transition: opacity 1200ms ease-out, transform 600ms ease-out,
            visibility 1500ms ease-out;
          will-change: opacity, transform, visibility;
        }
        
        .fade-in-section.is-visible {
          opacity: 1;
          transform: none;
          visibility: visible;
        }

        .content{
          width: 80%;
          color: #fff;
        }

        
        @media(min-width: 769px){
          .is-hidden-desktop{
            display: none !important;
          }
        }

        @media(max-width: 768px){
          .is-hidden-mobile{
            display: none !important;
          }
        }

      `}</style>

    </div>
  )
}
