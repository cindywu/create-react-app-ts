import React from 'react'

interface HeaderProps {
  buttonText: string;
  
}

export default function Header(props: HeaderProps) {
  return (
    <div>
      <h1>Header</h1>
      <button>{props.buttonText}</button>
    </div>
  )
}
