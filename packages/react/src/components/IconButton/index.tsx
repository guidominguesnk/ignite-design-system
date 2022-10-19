import React, { ComponentProps, forwardRef, ElementType } from 'react'
import {
  IconButton as StyledIconButton,
  Icon as StyledIcon,
  IconButtonLoading,
} from './styles'
import { Spinner } from 'components/Spinner'

export interface IconButtonProps
  extends ComponentProps<typeof StyledIconButton> {
  as?: ElementType
  icon: React.ReactElement
  loading?: boolean
}

export const IconButton = forwardRef<
  React.ElementRef<typeof StyledIconButton>,
  IconButtonProps
>(({ icon, loading, ...props }, forwardRef) => {
  return (
    <StyledIconButton loading={loading} ref={forwardRef} {...props}>
      <StyledIcon>{icon}</StyledIcon>

      {loading && (
        <IconButtonLoading>
          <Spinner />
        </IconButtonLoading>
      )}
    </StyledIconButton>
  )
})

IconButton.displayName = 'IconButton'
