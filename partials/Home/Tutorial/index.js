import React from 'react';
import Flickity from 'react-flickity-component'

import css from './style.module.scss'

export default class Tutorial extends React.Component {
/* 
  This component need be a class because the flkty methods in a bitch
*/


  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      flickityOptions: {
        initialIndex: 0,
        autoPlay: 5000
      },
      disclaimer: {
        title: '',
        description: ''
      }
    };
  }

  componentDidMount = () => {

    this.flkty.on('change', () => {
      this.setState({ 
        currentIndex: this.flkty.selectedIndex
      })
    })
  }

  render() {
    return (
      <div className={`${css.tutorial}`} id={this.props.content.id}>
  
        <div className={css.content}>
          <div className={css.description}>
            <h2> {this.props.content.list[ this.state.currentIndex ].title} </h2>
            <p> {this.props.content.list[ this.state.currentIndex ].description} </p>
          </div>
          
          <div className={css.illustration}>
            <div className={css.frame}>
              <Flickity
                className={'carousel'}
                elementType={'div'}
                options={this.state.flickityOptions}
                flickityRef={c => this.flkty = c}
              >
                {
                  this.props.content.list.map((item, index) => {
                    return (
                      <img src={item.img} key={index} />
                    )
                  })
                }
              </Flickity>
            </div>
            <img className={css.border} src='/smartphone-border.png' />
          </div>

          <div className={css.description_mobile}>
            <h2> {this.props.content.list[ this.state.currentIndex ].title} </h2>
            <p> {this.props.content.list[ this.state.currentIndex ].description} </p>
          </div>
        </div>
  
      </div>
    )
  }
}
