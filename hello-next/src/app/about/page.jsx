import React from 'react'
import Title from '../components/Title'
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <Title>This is about page.</Title>
      <div className='space-x-5'>
        <Link href={"/about/contact"}>Contact</Link>
        <Link href={"/about/teams"}>Teams</Link>
      </div>
    </div>
  )
}

export default About
