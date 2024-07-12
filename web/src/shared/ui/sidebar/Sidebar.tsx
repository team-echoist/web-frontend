'use client'
import React, { FC } from 'react'
import * as Styled from './sidebar.styled'

interface ISidebar {
    readonly onClick?: () => void
}

export const Sidbar: FC<ISidebar> = (props) => {
    const { onClick } = props
    return <Styled.SidbarStyled onClick={onClick}></Styled.SidbarStyled>
}
