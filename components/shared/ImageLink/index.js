import Link from 'next/link'

export default function ImageLink({content}) {

  return (
    <Link href={content.link} passHref={true} key={content.index}>
      <a target="_blank">
        <img src={content.icon} />
      </a>
    </Link>
  )
}

<style jsx>{`

li{
  cursor: pointer;
}
  
`}</style>
