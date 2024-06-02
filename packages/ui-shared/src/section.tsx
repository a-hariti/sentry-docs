import React from 'react'

interface Porps {
  children?: React.ReactNode
}

const Section = ({ children }: Porps) => {
  return (
    <div>{children}</div>
  )
}

export default Section