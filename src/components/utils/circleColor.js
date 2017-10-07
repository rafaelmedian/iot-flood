const colors = {
  red: '#f00',
  blue: '#0708ff',
  green: 'rgb(38, 197, 9)',
  orange: '#ff6500'
};

export const circleColor = (depth => {
  let color = colors.green;
  if (depth >= 1) color = colors.green;
  if (depth >= 2) color = colors.blue;
  if (depth >= 3) color = colors.orange;
  if (depth >= 4) color = colors.red;

  return color;
});
