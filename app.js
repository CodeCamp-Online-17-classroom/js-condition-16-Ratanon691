const designTokens = {
  'color-primary': '#3498db',
  'color-secondary': '#2ecc71',
  'text-color': '#333333',
  'text-base': '16px',
  'text-weight-light': '300',
  'text-weight-regular': '400',
  'text-weight-bold': '700',
  'space-small': '8px',
  'space-medium': '16px',
  'space-large': '24px',
  'border-radius-small': '4px',
  'border-radius-medium': '8px',
  'border-radius-large': '12px'
}
function getDesignToken(tokenName) {
  if (designTokens[tokenName] !== undefined) {
    alert(designTokens[tokenName])
  } else {
    alert(`Design token ${tokenName} not found.`)
  }
}
let tokenName = prompt(`Please enter the design token name`);
getDesignToken(tokenName);

