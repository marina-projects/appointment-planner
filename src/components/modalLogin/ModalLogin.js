import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import { LoginForm } from '../loginForm/LoginForm';
import '../modalLogin/modalLogin.css'

export default function ModalLogin ({handleLoginLogout}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='button-popup'>
      <TriggerButton type="button" onClick={handleOpen} >
        Login
      </TriggerButton>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 1000 }}>
          <h2 id="unstyled-modal-title" className="modal-title">
            Hello!          
          </h2>
          <p id="unstyled-modal-description" className="modal-description">
            Log in to continue 
          </p>
          <LoginForm handleLoginLogout={handleLoginLogout}/>
        </ModalContent>
      </Modal>
    </div>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
  ({ theme }) => css`
    font-weight: 400;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 30px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.3;
      margin-bottom: 10px;
      font-size: 28px;
      color: #53489C;

    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-size: 18px;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `,
);

const TriggerButton = styled('button')(
  ({ theme }) => css`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    padding: 10px 24px;
    border-radius: 10px;
    transition: all 150ms ease;
    cursor: pointer;
    border: 1px solid #53489C;
    background-color: white;
    color: #53489C;

    // &:hover {
    //   background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    //   border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }

    &:active {
        background-color: #53489C;
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  `,
);