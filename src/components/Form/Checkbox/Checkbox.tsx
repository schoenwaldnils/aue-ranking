import styled from '@emotion/styled'
import { ChangeEvent, FC, InputHTMLAttributes } from 'react'

const Wrapper = styled.label`
  display: flex;
  align-items: center;
`

const Label = styled.div`
  margin-left: 0.5em;
`

const Input = styled.input`
  position: relative;
  display: flex;
  width: 2rem;
  height: 2rem;
  color: var(--Checkbox-color, inherit);
  border: 1px solid var(--Checkbox-borderColor, currentcolor);
  border-radius: 0.125rem;
  appearance: none;
  cursor: pointer;

  ::after {
    content: '';
    display: block;
    width: 0.875rem;
    height: 0.875rem;
    margin: auto;
    background-color: var(--Checkbox-colorActive, var(--Theme-themeColor, red));
    opacity: 0;
    transition: opacity 150ms;
    cursor: pointer;
  }

  :checked::after {
    opacity: 1;
  }

  :disabled {
    cursor: default;
    border: 1px solid var(--Checkbox-colorDisabled, #888);
  }

  :disabled::after {
    background-color: var(--Checkbox-colorDisabled, #aaa);
    cursor: default;
  }

  :disabled + ${Label} {
    color: var(--Checkbox-colorDisabled, #888);
    cursor: default;
  }
`

export const Checkbox: FC<
  InputHTMLAttributes<HTMLInputElement> & {
    id: string
    label: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
  }
> = ({ id, label, onChange, ...props }) => {
  return (
    <Wrapper htmlFor={id}>
      <Input {...props} id={id} type="checkbox" onChange={onChange} />
      <Label>{label}</Label>
    </Wrapper>
  )
}
