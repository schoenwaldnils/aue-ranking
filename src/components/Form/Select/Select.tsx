import {
  Option,
  SelectField,
  SelectFieldProps,
} from '@contentful/forma-36-react-components'
import { FC } from 'react'

export const Select: FC<
  Omit<SelectFieldProps, 'children'> & {
    options: { label: string; value: string }[]
  }
> = ({ id, name = id, value, options, ...props }) => {
  return (
    <SelectField id={id} name={name} value={value} {...props}>
      {options.map((i) => (
        <Option value={i.value} selected={i.value === value} key={i.value}>
          {i.label}
        </Option>
      ))}
    </SelectField>
  )
}
