import { LineSvg } from "./styles";

const Line = ({ color = "#F3C832" }) => {
  return (
    <LineSvg>
      <svg
        width="2129px"
        height="257px"
        viewBox="0 0 2129 257"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-848.000000, -1091.000000)">
            <g transform="translate(848.000000, 1091.000000)">
              <rect
                fillOpacity="0"
                fill="#FFFFFF"
                x="0"
                y="0"
                width="2129"
                height="257"
              ></rect>
              <path
                d="M2071.67,0.166088806 L2071.67,10.91 L2004,10.91 C1961.17,10.91 1847.78,91.56 1749,79.41 C1682.13,71.19 1624.67,42.6 1532,41.41 C1397.64,39.71 1267.63,169.75 1134.72,168.96 C1008.72,168.21 936.06,89.29 812.29,65.5 C698.59,43.65 551,90.75 431,91.85 C315.2,92.92 256.67,10.91 123.72,10.91 L57,10.91 L57,0.166088806 L2071.67,0.166088806 Z"
                fill={color}
                fillRule="nonzero"
              ></path>
              <path
                d="M57,10.91 L123.72,10.91 C256.72,10.91 315.2,92.91 431.01,91.85 C551.01,90.75 698.59,43.65 812.31,65.52 C936.08,89.31 1008.72,168.23 1134.74,168.98 C1267.65,169.77 1397.66,39.73 1532.02,41.43 C1624.67,42.6 1682.13,71.19 1749.02,79.43 C1847.8,91.58 1961.19,10.93 2004.02,10.93 L2071.69,10.93"
                stroke="#000000"
                strokeWidth="9"
                strokeLinecap="round"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </LineSvg>
  );
};

export default Line;
