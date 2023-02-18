import React from 'react'

const MinusButton = ({ onClick }) => {
  return <button onClick={onClick}>-</button>
}

const PlusButton = ({ onClick }) => {
  return <button onClick={onClick}>+</button> 
}

const Viewer = ({ children }) => {
  return <span>{children}</span>
}

const Counter = () => {
  const [value, setState] = React.useState(0)
  const minus = () => setState(value - 1)
  const plus = () => setState(value + 1)

  return (
    <>
      <MinusButton onClick={minus} />
      <Viewer>{value}</Viewer>
      <PlusButton onClick={plus} />
    </>
  )
}

const Home = () => {
  return <Counter />
}

export default Home