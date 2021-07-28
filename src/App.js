import './App.css';
import React, { useState} from 'react';

function App() {

  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [density, setDensity] = useState('');
  const [length, setLength] = useState('');
  const [volume, setVolume] = useState('');
  const [quality,setQuality] = useState('');
  
  const handleRadiusChange = (event) => {
    setRadius(event.target.value);
    cal();
  }

  const handleHeightChange = (event) => {
     setHeight(event.target.value);
     cal();
  }

  const handleLengthChange = (event) => {
     setLength(event.target.value);
     cal();
  }

  const handleDensityChange = (event) => {
     setDensity(event.target.value);
  }

  const cal = () => {
    const r = parseFloat(radius,10)/2000;
    const h = parseFloat(height,10)/1000;
    const l = parseFloat(length,10)/1000;
    const d = parseFloat(density,10);
    if (!isNaN(r) && !isNaN(h) && !isNaN(l) && !isNaN(d) && r > 0 && h > 0 && l > 0 && d > 0) {
      const area = calArea(r,h);
      const total_v = area * l;
      const total_quality = total_v * d;
      setVolume(total_v);
      setQuality(total_quality);
    }
  }

  const calArea = (r, h) => {
    const degree = Math.acos((r-h)/r);
    const totalArea = r * r * degree;
    const l = Math.tan(degree) * (r - h);
    const triangleArea = l * (r - h);
    return totalArea - triangleArea;
  }


  return (
    <div className="App">
      <header className="App-header">
        <label>截面直径:<textarea value={radius} onChange={handleRadiusChange} />MM</label>
        <br></br>
        <label>油罐长度:<textarea value={length} onChange={handleLengthChange } />MM</label>
        <br></br>
        <label>油面高度:<textarea value={height} onChange={handleHeightChange } />MM</label>
        <br></br>
        <label>油密度:<textarea value={density} onChange={handleDensityChange} />吨/立方米</label>
        <br></br>
        <button onClick={cal}>计算</button>
        <br></br>
        <label>油体积:<textarea value={volume} />立方米</label>
        <br></br>
        <label> 油量:<textarea value={quality} />吨</label>
      </header>
    </div>
  );
}

export default App;
