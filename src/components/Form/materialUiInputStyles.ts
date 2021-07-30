import { css, SerializedStyles } from '@emotion/react'

export const materialUiInputStyles = (
  secondary?: boolean,
): SerializedStyles => {
  const borderColor = secondary
    ? 'var(--Input-secondaryBorder, currentcolor)'
    : 'var(--Input-primaryBorder, currentcolor)'
  const focusColor = secondary
    ? 'var(--Input-secondaryFocus, var(--Theme-themeColorSecondary, cyan))'
    : 'var(--Input-primaryFocus, var(--Theme-themeColor, green))'
  const iconColor = secondary
    ? 'var(--Input-secondaryIconColor, inherit)'
    : 'var(--Input-primaryIconColor, inherit)'
  const errorColor = 'var(--Input-error, red)'

  return css`
    label.focused {
      color: ${focusColor};
    }

    .MuiInput-underline:after {
      border-bottom-color: ${focusColor};
    }

    .MuiInput-underline:before {
      border-bottom-color: currentColor;
    }

    .MuiInput-underline:hover:not(.Mui-disabled):before {
      border-bottom-color: currentColor;
    }

    .MuiSelect-root {
      min-width: 10ch;
    }

    .MuiSelect-icon {
      color: ${iconColor};
    }

    .MuiFormLabel-root {
      color: inherit;

      &.Mui-focused {
        color: inherit;
      }

      &.Mui-disabled {
        color: var(--Input-disabled, #aaa);
      }
    }

    .MuiInputBase-root {
      color: inherit;

      &.Mui-disabled {
        color: var(--Input-disabled, #aaa);
        cursor: default;
      }
    }

    .MuiInput-root {
      fieldset {
        border-color: ${borderColor};
      }

      &:hover fieldset {
        border-color: ${focusColor};
      }

      &.Mui-focused fieldset {
        border-color: ${focusColor};
      }

      &.Mui-disabled fieldset {
        border-color: var(--Input-disabled);
      }

      &.Mui-error fieldset {
        border-color: ${errorColor};
      }
    }

    .MuiFormHelperText-root {
      color: inherit;
      align-self: flex-start;
    }
  `
}
