import css from './style.module.scss'

export default function Hero({content}) {
  return (
    <div className={css.hero} id={content.id}>
      <div className={css.banner}>
        <h2 className={css.title}> {content.title} </h2>
        <p className={css.subtitle}> {content.subtitle} </p>
        <a href="https://forms.gle/ohrr742kPA4Zis5n6" className={css.button} target="_blank" rel="noopener"> Faça já o download do App </a>
      </div>
    </div>
  )
}
