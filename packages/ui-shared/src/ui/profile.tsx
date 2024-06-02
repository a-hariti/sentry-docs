import Image from 'next/image'
import React from 'react'

interface Props {
  src: string
}
const Profile = ({ src }: Props) => {
  return (
    <div>
      <Image
        src={src} loading='lazy'
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  )
}

export default Profile