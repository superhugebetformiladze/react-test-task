import React, { useEffect, useState } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import styled from 'styled-components'
import Flex from '@components-common/Styled/Flex'
import Button from '@components-common/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { theme } from '@/index'

interface ModalFormProps {
  isOpen: boolean
  onClose: () => void
}

interface StylesProps {
  margin?: string
  padding?: string
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: none;
  z-index: 999;
`

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 24px;
  width: 90vw;
  max-width: 500px;
  opacity: 0;
  transform: translateY(-20px);
  transition:
    opacity 0.3s,
    transform 0.3s;
  overflow-y: auto;

  &.open {
    opacity: 1;
    transform: translateY(0);
  }
`

const StyledInput = styled.input<StylesProps>`
  width: 100%;
  padding: 10px 20px;
  margin: ${(props) => props.margin || '0'};
  border-radius: 24px;
  background-color: #f3f3f3;
  outline: none;
`

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
  const { control, handleSubmit, reset } = useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen])

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data)
    onClose()
    reset()
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).id === 'modal-overlay') {
      onClose()
    }
  }

  return (
    <>
      {isOpen && (
        <ModalOverlay id="modal-overlay" onClick={handleOverlayClick}>
          <ModalContent className={isModalOpen ? 'open' : ''}>
            <Flex flexdirection="column">
              <FontAwesomeIcon
                icon={faTimes}
                size="2x"
                onClick={onClose}
                style={{ cursor: 'pointer', alignSelf: 'flex-end' }}
              />
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex flexdirection="column" alignitems="center">
                  <Controller
                    name="Имя"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <StyledInput
                        margin="1rem 0 1rem 0"
                        {...field}
                        placeholder="Имя"
                        className={fieldState.invalid ? 'error' : ''}
                      />
                    )}
                  />
                  <Controller
                    name="Почта"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <StyledInput margin="0 0 1rem 0" {...field} placeholder="Почта" />
                    )}
                  />
                  <Button
                    type="submit"
                    width="fit-content"
                    padding="10px 20px"
                    borderradius="24px"
                    color={theme.colors.white}
                    backgroundcolor={theme.colors.button}
                    backgroundcolorhover={theme.colors.buttonHover}
                  >
                    Отправить
                  </Button>
                </Flex>
              </form>
            </Flex>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
}

export default ModalForm
