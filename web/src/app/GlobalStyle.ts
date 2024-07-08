import { createGlobalStyle } from "styled-components";
import { Devices } from "@/shared/styles";

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
body {
	line-height: 1;

.container{
	// @media ${Devices.mobileM} {
	// 	width:390px;
	// }
	// 원래는 이렇게 해야되나, 웹 온보딩이 아직 세팅안되서 모바일 사이즈로 먼저 세팅 추후 주석 걷어 내야됨
	// 추후 테블릿일경우도 조건 추가 해야됨
	width:1194px;
	height:100vh;
	margin:auto;
	background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
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
