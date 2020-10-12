import css from './style.module.scss'

export default function Hero({content}) {
  return (
    <div className={css.hero} id={content.id}>
      <div className={css.banner}>
        <h2 className={css.title}> {content.title} </h2>
        <p className={css.subtitle}> {content.subtitle} </p>
        <a href="#" className={css.button}> Faça já o download do App </a>
      </div>
    </div>
  )
}
