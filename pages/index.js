import Head from 'next/head'
import Navbar from '../partials/Home/Navbar'
import Hero from '../partials/Home/Hero'
import About from '../partials/Home/About'
import Tutorial from '../partials/Home/Tutorial'
import Contact from '../partials/Home/Contact'
import Footer from '../partials/Home/Footer'

import content from '../mockdata/home'

import css from './style.module.scss'

export function getStaticProps() {
  return {
    props: {
      content,
    },
  }
}

export default function Home({content}) {

  return (
    <div className={css.container}>
      <Head>
        <title> {content.head.title} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main>
        <Navbar content={content.body.navbar} />
        <Hero id={"hero"} content={content.body.hero} />
        <About content={content.body.about} />
        <Tutorial content={content.body.tutorial} />
        <Contact content={content.body.contact} />
        <Footer id={"footer"} content={content.body.footer} />
      </main>
    </div>
  )
}
