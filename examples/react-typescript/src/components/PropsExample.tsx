import React from 'react'

/*type TProps = {
  text: string;
  onClick?: () => void;
}*/

interface IProps {
  text: string;
  onClick?: () => void;
}


const PropsExample = (props: IProps) => {
  return (
    <div>
      <p>{props.text}</p>
      {props.onClick ? <button onClick={props.onClick}>En knapp</button> : null}
    </div>
  )
}

export default PropsExample