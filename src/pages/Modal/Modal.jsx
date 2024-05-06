import { useState } from 'react'
import './Modal.scss'
import { useNavigate } from 'react-router-dom';

const ModalWindow = ({open, setOpen, children}) => (
  <div className={`overlay animated ${open ? 'show' : ''}`}>
    <div className='modal'>
      <svg onClick={() => setOpen(false)} height='200' viewBox='0 0 200 200' width={200}>
        <title />
        <path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
      </svg>
      {children}
    </div>  
  </div>
);

export const Modal = () => {
  const [open, setOpen] = useState(false);
  const [openAnimated, setOpenAnimated] = useState(false);
  const navigate = useNavigate();

  const onClickOpenModal = () => {
    setOpen(true);
  };

  return (
    <div className="Modal">
      <div>
        <button onClick={onClickOpenModal} className="open-modal-btn">✨ Открыть окно без анимации</button>
          {
            open && (
              <div className={`overlay animated ${open ? 'show' : ''}`}>
              <div className='modal'>
                  <svg onClick={() => setOpen(false)} height='200' viewBox='0 0 200 200' width={200}>
                    <title />
                    <path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
                  </svg>
                  <img src="https://media1.tenor.com/m/115gItWj6Q4AAAAC/animation-russian-animation.gif" />
                </div>  
              </div>
            )
          }
        <br/> <br/>
        <button onClick={() => setOpenAnimated(true)} className="open-modal-btn">✨ Открыть окно с анимацией</button>
          <ModalWindow open={openAnimated} setOpen={setOpenAnimated}>
            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
            <h3>Это модальное окно</h3>
          </ModalWindow>
        <br/> <br/>
        <button onClick={() => navigate('/')} className='open-modal-btn'>Назад</button>
        
      </div>
    </div>
  )
}