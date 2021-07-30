import styled from '@emotion/styled'
import { Fade, Modal as MaterialModal } from '@material-ui/core'
import { FC } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

import { upFromBreakpoint } from '../../utils/mixins'
import { ButtonPlain } from '../Button'
import { h3Styles } from '../Typography'

const StyledModal = styled(MaterialModal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Close = styled(ButtonPlain)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  margin: 0 !important;
  font-size: 2rem;
  line-height: 1;
  color: var(--Modal-closeColor, inherit);

  > svg {
    display: block;
  }
`

const ModalContainer = styled.div<{ maxWidth: string }>`
  ${(p) => p.maxWidth && `--maxWidth: ${p.maxWidth};`}

  position: relative;
  max-width: var(--maxWidth, calc(100vw - 2rem));
  max-height: calc(100vh - 1rem);
  padding: 1rem;
  color: var(--Modal-color, var(--Theme-textColor, #000));
  background-color: var(--Modal-background, var(--Theme-background, #fff));
  border-radius: calc(var(--Modal-borderRadius, 8) * 1px);
  outline: 0;
  overflow-y: auto;

  > * + *:not(${Close}) {
    margin-top: 1rem;
  }

  ${upFromBreakpoint('medium')} {
    padding: 1rem 2rem 2rem;
  }
`

const Title = styled.div`
  ${h3Styles}
  margin-right: 2rem;
  text-align: center;
`

const Description = styled.p``

export const Modal: FC<{
  open: boolean
  handleClose: () => void
  title?: string
  description?: string
  hideClose?: boolean
  maxWidth?: string
}> = ({
  children,
  open,
  title,
  description,
  handleClose,
  hideClose = false,
  maxWidth,
}) => {
  return (
    <StyledModal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropProps={{
        timeout: 300,
      }}
    >
      <Fade in={open}>
        <ModalContainer maxWidth={maxWidth}>
          {title && <Title id="modal-title">{title}</Title>}
          {description && (
            <Description id="modal-description">{description}</Description>
          )}
          <div>{children}</div>
          {!hideClose && (
            <Close onClick={handleClose}>
              <IoCloseOutline />
            </Close>
          )}
        </ModalContainer>
      </Fade>
    </StyledModal>
  )
}
