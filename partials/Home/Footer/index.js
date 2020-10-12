import AppLink from '../../../components/shared/AppLink'
import ImageLink from '../../../components/shared/ImageLink'

import css from './style.module.scss'

export default function Footer({content}) {
  return (
    <div className={css.footer}>
      {/* <ul className={css.navbar}>
        {content.menu.map((link, index) => (
          <AppLink content={link} key={index} onClick={ ()=> openMenuMobile() } />
        ))}
      </ul> */}
      <div className={css.copyright}>
        <p> {content.copy} </p>
      </div>
    </div>
  )
}

/* <link rel="preload"> */