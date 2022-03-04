

export const Modal = ({modal, setModal, children}) => {

  return ( <>
    
    <div className={modal ? 'containerModalAnimate' : 'containerModal'}  >{children}</div></>
  )
}
