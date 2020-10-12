import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from 'next/link'

export default function AppLink(props) {

  function handleClick(){
    // This method is passed as prop
    if (props.action){
      props.action()
    }
  }
  

  if (props.content.type == 'anchor') {
    // if Scrollable anchor link
    return (
      <ScrollLink to={props.content.to} smooth={true} duration={500} offset={-70}>
        <li onClick={()=> handleClick() }> {props.content.text} </li>
      </ScrollLink>
    )

  }else if (props.content.type == 'link'){
    // if page navigation link
    return (
      <Link href={props.content.to} passHref={true} >
        <a style={{ textDecoration: "none" }}>
          <li onClick={()=> handleClick() }> {props.content.text} </li>
        </a>
      </Link>
    )
    
  }
}

<style jsx>{`

.blog{
  background-color: #9D18CC;
  border-radius: 24px;
  height: 40px;
  text-decoration: none;
}

@media(max-width: 768px){

  .blog{
    width: 48%;
    text-align: center;
  }
}

li {
  color: #f5f5f5;
}
  
`}</style>
