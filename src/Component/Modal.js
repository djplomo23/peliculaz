

export const Modal = ({modal, setModal, children}) => {
  return (modal && <>
    
    <div className='containerModal'  >{children}</div></>
  )
}
