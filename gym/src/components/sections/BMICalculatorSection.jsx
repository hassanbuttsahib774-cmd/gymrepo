import { useState } from 'react';
import styles from '../../styles/BMICalculatorSection.module.css';

const BMICalculatorSection = () => {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    age: '',
    sex: ''
  });
  const [bmiResult, setBmiResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateBMI = (e) => {
    e.preventDefault();
    const height = parseFloat(formData.height) / 100; // Convert cm to meters
    const weight = parseFloat(formData.weight);

    if (height && weight) {
      const bmi = weight / (height * height);
      setBmiResult(bmi.toFixed(1));
    }
  };

  const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 25) return 'Healthy';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <section className={styles.bmiCalculatorSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={`${styles.sectionTitle} ${styles.chartTitle}`}>
              <span>check your body</span>
              <h2>BMI CALCULATOR CHART</h2>
            </div>
            <div className={styles.chartTable}>
              <table>
                <thead>
                  <tr>
                    <th>Bmi</th>
                    <th>WEIGHT STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.point}>Below 18.5</td>
                    <td>Underweight</td>
                  </tr>
                  <tr>
                    <td className={styles.point}>18.5 - 24.9</td>
                    <td>Healthy</td>
                  </tr>
                  <tr>
                    <td className={styles.point}>25.0 - 29.9</td>
                    <td>Overweight</td>
                  </tr>
                  <tr>
                    <td className={styles.point}>30.0 - and Above</td>
                    <td>Obese</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`${styles.sectionTitle} ${styles.chartCalculateTitle}`}>
              <span>check your body</span>
              <h2>CALCULATE YOUR BMI</h2>
            </div>
            <div className={styles.chartCalculateForm}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                viverra maecenas accumsan lacus vel facilisis.</p>
              <form onSubmit={calculateBMI}>
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="number"
                      name="height"
                      placeholder="Height / cm"
                      value={formData.height}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="number"
                      name="weight"
                      placeholder="Weight / kg"
                      value={formData.weight}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="number"
                      name="age"
                      placeholder="Age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="sex"
                      placeholder="Sex"
                      value={formData.sex}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-12">
                    <button type="submit">Calculate</button>
                  </div>
                </div>
              </form>
              {bmiResult && (
                <div className={styles.bmiResult}>
                  <h3>Your BMI: {bmiResult}</h3>
                  <p>Status: {getBMIStatus(parseFloat(bmiResult))}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculatorSection;

