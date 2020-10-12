const head = {
  title: 'Fareja Fatos'
}

const navbar = {
  id: '',
  logo: 'Fareja Fatos',
  links: [
    {
      text: 'Download',
      type: 'anchor',
      to: 'hero'
    },
    {
      text: 'Especificações',
      type: 'anchor',
      to: 'about'
    },
    {
      text: 'Passo a passo',
      type: 'anchor',
      to: 'tutorial_input'
    },
    {
      text: 'Contato',
      type: 'anchor',
      to: 'contact'
    },
    /* {
      text: 'Blog',
      type: 'link',
      to: '/blog'
    } */
  ]
}

const hero = {
  id : 'hero',
  title: 'Fareja Fatos',
  subtitle: 'O seu farejador de noticias falsas'
}

const about = {
  id: 'about',
  card: [
    {
      image: '/home/news.svg',
      description: 'Identificar notícias falsas (fake news) e combater a propagação das mesmas por meio da conscientização dos usuários.'
    },
    {
      image:  '/home/60+.svg',
      description: 'Oferecer uma plataforma gratuita e com foco em acessíbilidade, de fácil utilização, principalmente para o público idoso.'
    },
    {
      image:  '/home/ia.svg',
      description: 'Entregar resultados cada vez mais precisos, utilizando Inteligência Arificial para aprimorar nosso algoritmo.'
    }
  ]
}

const tutorial = {
  id: 'tutorial_input',
  list: [
    {
      title: 'Foco em usabilidade',
      description: 'Basta copiar a notícia que deseja verificar, abrir o aplicativo, colar no local indicado e pressionar o botão',
      img: '/screens/screen-1.png'
    },
    {
      title: 'Rápido e assertivo',
      description: 'Aguarde enquanto o aplicativo se comunica com nossos servidores, aonde nossa mágica acontece',
      img: '/screens/screen-2.png'
    },
    {
      title: 'Ainda mais informações!',
      description: 'Obtenha o resultado em alguns instantes e se mantenha informado com as notícias relacionadas',
      img: '/screens/screen-3.png'
    }
  ]
}

const contact = {
  id: 'contact',
  title: 'Para críticas e sugestões entre em contato'
}

const footer = {
  social: [
    {
      icon: '/icons/facebook.png',
      link: ''
    },
    {
      icon: '/icons/twitter.png',
      link: ''
    },
    {
      icon: '/icons/instagram.png',
      link: 'https://www.instagram.com/farejafatos/?hl=pt-br'
    },
    {
      icon: '/icons/youtube.png',
      link: 'https://www.youtube.com/channel/UC04fr7OqnnFgUTDmSG0Ulag'
    },
    {
      icon: '/icons/linkedin.png',
      link: ''
    }
  ],
  menu: [
    ...navbar.links,
  ],
  copy: '© Todos os direitos reservados'
}

const content = {
  head, 
  body: {
    navbar,
    hero,
    about,
    tutorial,
    contact,
    footer
  }
}

export default content
