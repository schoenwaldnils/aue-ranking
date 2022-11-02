import type { TextFieldProps } from '@contentful/forma-36-react-components'
import { TextField as ContentfulTextField } from '@contentful/forma-36-react-components'
import { FC, forwardRef, RefObject } from 'react'

export const TextField: FC<TextFieldProps> = forwardRef(
  (props, ref: RefObject<HTMLInputElement>) => {
    return (
      <ContentfulTextField
        {...props}
        textInputProps={{ ...props.textInputProps, inputRef: ref }}
      />
    )
  },
)

TextField.displayName = 'TextField'
