'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import GlobalStyleComponent from '@/app/GlobalStyle'

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement()
        styledComponentsStyleSheet.instance.clearTag()
        return <>{styles}</>
    })

    if (typeof window !== 'undefined') return <>{children}</>

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            <GlobalStyleComponent />
            {children}
        </StyleSheetManager>
    )
}

// next js는 모든 스타일을 수집하고 <head> </head>태그에 적용하는 전역 스타일 레지스트리 컴포넌트를 구현하는것을 권장함
// 이컴포넌트는 스타일을 수집하여 head태그에 추가하고, 컴포넌트가 언마운트 될때 해당 스타일을 제거한다.
