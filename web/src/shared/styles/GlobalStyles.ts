import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('/shared/assets/fonts/PretendardWoff2/Pretendard-Black.woff2') format('woff2'),
         url('/shared/assets/fonts/PretendardWoff/Pretendard-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/shared/assets/fonts/PretendardWoff2/Pretendard-ExtraBold.woff2') format('woff2'),
         url('/shared/assets/fonts/PretendardWoff/Pretendard-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/shared/assets/fonts/PretendardWoff2/Pretendard-Bold.woff2') format('woff2'),
         url('/shared/assets/fonts/PretendardWoff/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/shared/assets/fonts/PretendardWoff2/Pretendard-SemiBold.woff2') format('woff2'),
         url('/shared/assets/fonts/PretendardWoff/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/shared/assets/fonts/PretendardWoff2/Pretendard-Medium.woff2') format('woff2'),
         url('/shared/assets/fonts/PretendardWoff/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/shared/assets/fonts/PretendardWoff2/Pretendard-Regular.woff2') format('woff2'),
         url('/shared/assets/fonts/PretendardWoff/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/shared/assets/fonts/PretendardWoff2/Pretendard-Light.woff2') format('woff2'),
         url('/shared/assets/fonts/PretendardWoff/Pretendard-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/shared/assets/fonts/PretendardWoff2/Pretendard-ExtraLight.woff2') format('woff2'),
         url('/shared/assets/fonts/PretendardWoff/Pretendard-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/shared/assets/fonts/PretendardWoff2/Pretendard-Thin.woff2') format('woff2'),
         url('/shared/assets/fonts/PretendardWoff/Pretendard-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }



  @font-face {
    font-family: 'Pretendard';
    src: url('/shared/assets/fonts/PretendardWoff2/Pretendard-Light.woff2') format('woff2'),
         url('/shared/assets/fonts/PretendardWoff/Pretendard-Light.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }





  body {
    font-family: 'Pretendard', sans-serif;
  }
`

export default GlobalStyle
