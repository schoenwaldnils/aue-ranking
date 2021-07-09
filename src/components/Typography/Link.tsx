import styled from '@emotion/styled'
import NextLink, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, FC } from 'react'

const StyledA = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  &,
  &:visited {
    color: var(--Typography-linkColor);
  }

  :hover {
    color: var(--Typography-linkHover);
  }

  :active {
    color: var(--Typography-linkActive);
  }
`

export const Link: FC<AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps> = ({
  href,
  children,
  className,
  ...p
}) => {
  const isExternal = href.includes('http')
  const isHash = href.startsWith('#')

  if (isHash || isExternal) {
    return (
      <StyledA
        href={href}
        className={className}
        target={isExternal ? '_blank' : '_self'}
        {...(isExternal ? { rel: 'noopener' } : {})}
      >
        {children}
        {/* {isExternal && <ExternalIcon />} */}
      </StyledA>
    )
  }

  return (
    <NextLink {...p} href={href} passHref={isExternal}>
      <StyledA href={href} className={className}>
        {children}
      </StyledA>
    </NextLink>
  )
}
