import styled from '@emotion/styled'
import { MenuItem, OutlinedTextFieldProps, TextField } from '@material-ui/core'
import { FC, forwardRef } from 'react'

import { materialUiInputStyles } from '../materialUiInputStyles'

const StyledTextField = styled(TextField)<{ secondary: boolean }>`
  ${(p) => materialUiInputStyles(p.secondary)}
`

export const Select: FC<
  Omit<OutlinedTextFieldProps, 'variant'> & {
    id: string
    options: { label: string; value: string }[]
    showNone?: boolean
    secondary?: boolean
  }
> = forwardRef(
  (
    {
      id,
      label,
      value,
      options,
      size = 'small',
      showNone = true,
      secondary = false,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledTextField
        ref={ref}
        id={id}
        select
        label={label}
        size={size}
        value={value}
        fullWidth
        secondary={secondary || undefined}
        {...props}
      >
        {showNone && (
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        )}
        {options.map((i) => (
          <MenuItem value={i.value} selected={i.value === value} key={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </StyledTextField>
    )
  },
)

Select.displayName = 'Select'
