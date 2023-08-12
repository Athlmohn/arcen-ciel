import React, { useState, useEffect } from 'react';
function ColorThemes({ rgb, hexColor, index, weight }) {

  const bgc = rgb.join(",");
  const hexValue = `#${hexColor}`;
  const [alert, setAlert] = useState(false);

  useEffect(() => {
  const timeout = setTimeout(() => {
    setAlert(false);
  },1000);
  return () => {
    clearTimeout(timeout);
  };
  }, [alert])
  
  return (
    <article
      className={`color ${index >10 && 'color-light'}`}
      style={{ background: `rgb(${bgc})` }}
      onClick={()=>{
      setAlert(true);
      navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className='alert'>Copied to clipboard</p>}
    </article>
  );
}

export default ColorThemes;
