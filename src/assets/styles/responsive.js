export const BreakpointSize = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export const breakAt = (size) => `@media (max-width: ${size})`;
