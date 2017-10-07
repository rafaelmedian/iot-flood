const colors = {
  red: '#f00',
  blue: '#0708ff',
  green: 'rgb(38, 197, 9)',
  orange: '#ff6500'
};

export const circleColor = (depth => {
  let color = colors.green;
  // if (depth >= 1) color = colors.green;
  // if (depth >= 2) color = colors.blue;
  // if (depth >= 3) color = colors.orange;
  // if (depth >= 4) color = colors.red;

  if (depth > 1 & depth < 100) color = colors.red;
  if (depth > 100 & depth < 200) color = colors.orange;
  if (depth > 200 & depth < 500) color = colors.blue;
  if (depth > 500 & depth < 1000) color = colors.green;

  return color;
});
