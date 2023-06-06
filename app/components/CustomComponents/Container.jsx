import React from 'react'

const Container = ({children,container,sectoinName,pt}) => {
  return (
    <section className={`${sectoinName} pt-[${pt}px] ${container && 'container px-3 mx-auto'}`}>{children}</section>
  )
}

export default Container