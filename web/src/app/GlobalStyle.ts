import { createGlobalStyle } from "styled-components";
import { minDevices, maxDevices } from "@/shared/styles/device";

const GlobalStyleComponent = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

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
	line-height: 1;
	 font-family: 'Pretendard', sans-serif;

.container{
	height:100vh;
	margin:auto;
	background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
	display:flex;
	justify-content: center;
	@media only screen and ${minDevices.tablet} and ${maxDevices.laptop}{
  width:768px;
	height:100vh;
  }
}
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyleComponent;
