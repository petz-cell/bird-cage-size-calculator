import { useState } from 'react'
import './Calculator.css'

interface BirdSize {
  name: string
  baseArea: number
  additionalBirdArea: number
  minWidth: number
  minDepth: number
  minHeight: number
}

const birdSizes: BirdSize[] = [
  { name: 'Under 16 cm (Finches, Canaries)', baseArea: 0.31, additionalBirdArea: 0.03, minWidth: 60, minDepth: 40, minHeight: 50 },
  { name: '16-20 cm (Budgies, Lovebirds)', baseArea: 0.45, additionalBirdArea: 0.05, minWidth: 70, minDepth: 50, minHeight: 60 },
  { name: '21-30 cm (Cockatiels, Conures)', baseArea: 0.90, additionalBirdArea: 0.09, minWidth: 90, minDepth: 60, minHeight: 90 },
  { name: '31-40 cm (Small Parrots, Ringnecks)', baseArea: 1.35, additionalBirdArea: 0.14, minWidth: 100, minDepth: 80, minHeight: 120 },
  { name: '41-50 cm (African Greys, Amazons)', baseArea: 2.00, additionalBirdArea: 0.20, minWidth: 120, minDepth: 100, minHeight: 150 },
  { name: '51-60 cm (Large Parrots)', baseArea: 2.70, additionalBirdArea: 0.27, minWidth: 150, minDepth: 120, minHeight: 180 },
  { name: '61-75 cm (Cockatoos, Large Macaws)', baseArea: 3.60, additionalBirdArea: 0.36, minWidth: 180, minDepth: 150, minHeight: 200 },
  { name: 'Over 75 cm (Very Large Macaws)', baseArea: 5.00, additionalBirdArea: 0.50, minWidth: 200, minDepth: 180, minHeight: 220 },
]

export default function Calculator() {
  const [calculationMode, setCalculationMode] = useState<'measurements' | 'birds'>('measurements')

  const [width, setWidth] = useState<string>('')
  const [length, setLength] = useState<string>('')
  const [height, setHeight] = useState<string>('')

  const [birdSizeIndex, setBirdSizeIndex] = useState<number>(0)
  const [numberOfBirds, setNumberOfBirds] = useState<string>('1')

  const [results, setResults] = useState<{
    areaM2: number
    areaFt2: number
    volumeM3?: number
    volumeFt3?: number
    requiredAreaM2?: number
    requiredAreaFt2?: number
    adequateSize: boolean
    meetsMinDimensions: boolean
  } | null>(null)

  const calculateByMeasurements = () => {
    const w = parseFloat(width)
    const l = parseFloat(length)
    const h = parseFloat(height)

    if (isNaN(w) || isNaN(l) || isNaN(h) || w <= 0 || l <= 0 || h <= 0) {
      alert('Please enter valid positive numbers for all dimensions')
      return
    }

    const areaM2 = (w * l) / 10000
    const areaFt2 = areaM2 * 10.764
    const volumeM3 = (w * l * h) / 1000000
    const volumeFt3 = volumeM3 * 35.315

    setResults({
      areaM2,
      areaFt2,
      volumeM3,
      volumeFt3,
      adequateSize: true,
      meetsMinDimensions: true
    })
  }

  const calculateByBirds = () => {
    const birds = parseInt(numberOfBirds)

    if (isNaN(birds) || birds <= 0) {
      alert('Please enter a valid number of birds')
      return
    }

    const birdSize = birdSizes[birdSizeIndex]
    const requiredAreaM2 = birdSize.baseArea + ((birds - 1) * birdSize.additionalBirdArea)
    const requiredAreaFt2 = requiredAreaM2 * 10.764

    const w = parseFloat(width) || 0
    const l = parseFloat(length) || 0
    const h = parseFloat(height) || 0

    let areaM2 = 0
    let areaFt2 = 0
    let adequateSize = false
    let meetsMinDimensions = false

    if (w > 0 && l > 0) {
      areaM2 = (w * l) / 10000
      areaFt2 = areaM2 * 10.764
      adequateSize = areaM2 >= requiredAreaM2
      meetsMinDimensions = w >= birdSize.minWidth && l >= birdSize.minDepth && h >= birdSize.minHeight
    }

    setResults({
      areaM2,
      areaFt2,
      requiredAreaM2,
      requiredAreaFt2,
      adequateSize,
      meetsMinDimensions
    })
  }

  const handleCalculate = () => {
    if (calculationMode === 'measurements') {
      calculateByMeasurements()
    } else {
      calculateByBirds()
    }
  }

  const handleReset = () => {
    setWidth('')
    setLength('')
    setHeight('')
    setNumberOfBirds('1')
    setBirdSizeIndex(0)
    setResults(null)
  }

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <div className="mode-selector">
          <button
            className={`mode-btn ${calculationMode === 'measurements' ? 'active' : ''}`}
            onClick={() => setCalculationMode('measurements')}
          >
            By Measurements
          </button>
          <button
            className={`mode-btn ${calculationMode === 'birds' ? 'active' : ''}`}
            onClick={() => setCalculationMode('birds')}
          >
            By Bird Species
          </button>
        </div>

        <div className="calculator-form">
          {calculationMode === 'measurements' ? (
            <div className="form-section">
              <h3>Enter Cage Dimensions</h3>
              <div className="input-group">
                <label htmlFor="width">Width (cm)</label>
                <input
                  id="width"
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="Enter width"
                  min="0"
                  step="0.1"
                />
              </div>
              <div className="input-group">
                <label htmlFor="length">Length (cm)</label>
                <input
                  id="length"
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="Enter length"
                  min="0"
                  step="0.1"
                />
              </div>
              <div className="input-group">
                <label htmlFor="height">Height (cm)</label>
                <input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter height"
                  min="0"
                  step="0.1"
                />
              </div>
            </div>
          ) : (
            <div className="form-section">
              <h3>Select Bird Details</h3>
              <div className="input-group">
                <label htmlFor="birdSize">Bird Size</label>
                <select
                  id="birdSize"
                  value={birdSizeIndex}
                  onChange={(e) => setBirdSizeIndex(parseInt(e.target.value))}
                >
                  {birdSizes.map((size, index) => (
                    <option key={index} value={index}>
                      {size.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="numberOfBirds">Number of Birds</label>
                <input
                  id="numberOfBirds"
                  type="number"
                  value={numberOfBirds}
                  onChange={(e) => setNumberOfBirds(e.target.value)}
                  placeholder="Enter number"
                  min="1"
                  step="1"
                />
              </div>
              <div className="input-group">
                <label htmlFor="width-birds">Cage Width (cm) - Optional</label>
                <input
                  id="width-birds"
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="Enter width to compare"
                  min="0"
                  step="0.1"
                />
              </div>
              <div className="input-group">
                <label htmlFor="length-birds">Cage Length (cm) - Optional</label>
                <input
                  id="length-birds"
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="Enter length to compare"
                  min="0"
                  step="0.1"
                />
              </div>
              <div className="input-group">
                <label htmlFor="height-birds">Cage Height (cm) - Optional</label>
                <input
                  id="height-birds"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter height to compare"
                  min="0"
                  step="0.1"
                />
              </div>
            </div>
          )}

          <div className="button-group">
            <button className="calculate-btn" onClick={handleCalculate}>
              Calculate
            </button>
            <button className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

        {results && (
          <div className="results-container">
            <h3>Results</h3>
            {calculationMode === 'birds' && results.requiredAreaM2 && (
              <div className="result-section required">
                <h4>Required Minimum Space</h4>
                <div className="result-row">
                  <span className="result-label">Floor Area:</span>
                  <span className="result-value">
                    {results.requiredAreaM2.toFixed(2)} m² ({results.requiredAreaFt2!.toFixed(2)} ft²)
                  </span>
                </div>
                <div className="result-row">
                  <span className="result-label">Minimum Dimensions:</span>
                  <span className="result-value">
                    {birdSizes[birdSizeIndex].minWidth}×{birdSizes[birdSizeIndex].minDepth}×{birdSizes[birdSizeIndex].minHeight} cm
                  </span>
                </div>
              </div>
            )}

            {results.areaM2 > 0 && (
              <div className={`result-section ${results.adequateSize ? 'adequate' : 'inadequate'}`}>
                <h4>Your Cage Specifications</h4>
                <div className="result-row">
                  <span className="result-label">Floor Area:</span>
                  <span className="result-value">
                    {results.areaM2.toFixed(2)} m² ({results.areaFt2.toFixed(2)} ft²)
                  </span>
                </div>
                {results.volumeM3 !== undefined && (
                  <div className="result-row">
                    <span className="result-label">Volume:</span>
                    <span className="result-value">
                      {results.volumeM3.toFixed(2)} m³ ({results.volumeFt3!.toFixed(2)} ft³)
                    </span>
                  </div>
                )}
                {calculationMode === 'birds' && (
                  <div className="status-indicator">
                    {results.adequateSize && results.meetsMinDimensions ? (
                      <div className="status-good">✓ Adequate cage size for your birds</div>
                    ) : !results.adequateSize ? (
                      <div className="status-bad">✗ Floor area is insufficient</div>
                    ) : (
                      <div className="status-bad">✗ Does not meet minimum dimension requirements</div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="reference-table">
        <h3>Quick Reference Guide</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Bird Size</th>
                <th>Min. Width (cm)</th>
                <th>Min. Depth (cm)</th>
                <th>Min. Height (cm)</th>
                <th>Min. Floor Area (m²)</th>
              </tr>
            </thead>
            <tbody>
              {birdSizes.map((size, index) => (
                <tr key={index} className={birdSizeIndex === index ? 'highlighted' : ''}>
                  <td>{size.name}</td>
                  <td>{size.minWidth}</td>
                  <td>{size.minDepth}</td>
                  <td>{size.minHeight}</td>
                  <td>{size.baseArea.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
