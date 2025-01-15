import { useState } from 'react'
import './App.css'
import Popup from './Popup'

function App() {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    age: "",
    genre: "",
    salary: "" 
  })
  const [isFormValid, setIsFormValid] = useState(false);
  const validateForm = (dataForm) => {
    const { name, phone, age, genre, salary } = dataForm;

    const isNameValid = /^[a-zA-Z\s]{10,60}$/.test(name);
    const isPhoneValid = /^\d{9,13}$/.test(phone);
    const isAgeValid = /^\d{2}$/.test(age) && age <= 60 && age >= 18;
    const isGenreValid = genre !== "";
    const isSalaryValid = salary !== "";

    setIsFormValid(isNameValid && isPhoneValid && isAgeValid && isGenreValid && isSalaryValid);
  };

  const changeName = (e) => {
    setDataForm({...dataForm, name: e.target.value})
    if ((e.target.value.length >= 60 || e.target.value.length <= 10) && e.target.value != '') {
      e.target.style.borderColor = 'red';
    } else {
      e.target.style.borderColor = 'green';
    }
    validateForm({...dataForm, name: e.target.value});
  }
  const handleBlurName = (e) => {
    if (!(/^[a-zA-Z\s]+$/.test(e.target.value)) && e.target.value != '') {
      e.target.style.borderColor = 'red';
    } else {
      if ((e.target.value.length <= 60 && e.target.value.length >= 10) || e.target.value == '') {
        e.target.style.borderColor = '#555';
      } else {
        e.target.style.borderColor = 'red';
      }
    }
    validateForm({...dataForm, name: e.target.value});
  }
  const changePhone = (e) => {
    setDataForm({...dataForm, phone: e.target.value})
    if ((e.target.value.length > 13 || e.target.value.length < 9) && e.target.value != '') {
      e.target.style.borderColor = 'red';
    } else {
      e.target.style.borderColor = 'green';
    }
    validateForm({...dataForm, phone: e.target.value});
  }
  const handleBlurPhone = (e) => {
    if (!(/\d+/.test(e.target.value)) && e.target.value != '') {
      e.target.style.borderColor = 'red';
    } else {
      if ((e.target.value.length < 13 && e.target.value.length > 9) || e.target.value == '') {
        e.target.style.borderColor = '#555';
      } else {
        e.target.style.borderColor = 'red';
      }
    }
    validateForm({...dataForm, phone: e.target.value});
  }
  const changeAge = (e) => {
    setDataForm({...dataForm, age: e.target.value})
    if ((e.target.value <= 18 || e.target.value >= 60) && e.target.value != '') {
      e.target.style.borderColor = 'red';
    } else {
      e.target.style.borderColor = 'green';
    }
    validateForm({...dataForm, age: e.target.value});
  }
  const handleBlurAge = (e) => {
    if (!(/\d+/.test(e.target.value)) && e.target.value != '') {
      e.target.style.borderColor = 'red';
    } else {
      if ((e.target.value >= 18 && e.target.value <= 60) || e.target.value == '') {
        e.target.style.borderColor = '#555';
      } else {
        e.target.style.borderColor = 'red';
      }
    }
    validateForm({...dataForm, age: e.target.value});
  }
  const changeRadio = (e) => {
    setDataForm({...dataForm, genre: e.target.value})
    validateForm({...dataForm, genre: e.target.value});
  }
  const changeSalary = (e) => {
    setDataForm({...dataForm, salary: e.target.value})
    validateForm({...dataForm, salary: e.target.value});
  }

  function showPopup(e) {
    e.preventDefault()
    document.querySelector(".Popup").style.display = "flex"
  }

  return (
    <form className='form d-flex flex-column p-4 rounded'>
      <h2 className='text-center'>Requesting a loan</h2>
      <hr />

      <label className='pt-2 pb-1'>Username :</label>
      <input value={dataForm.name} onChange={changeName} onBlur={handleBlurName}/>

      <label className='pt-2 pb-1'>Phone :</label>
      <input value={dataForm.phone} onChange={changePhone} onBlur={handleBlurPhone}/>

      <label className='pt-2 pb-1'>Age :</label>
      <input value={dataForm.age} onChange={changeAge} onBlur={handleBlurAge}/>

      <div className='radio d-flex justify-content-evenly'>
        <div>
          <input type="radio" name="genre" id="emp" value="employee" onClick={changeRadio} />
          <label htmlFor='emp'>Are You Employee?</label>
        </div>
        <div>
          <input type="radio" name="genre" id="std" value="student" onClick={changeRadio} />
          <label htmlFor='std'>Are You Student?</label>
        </div>
      </div>
      
      <label className="pb-1" htmlFor="salary">Salary :</label>
      <select className="form-select" id="salary" aria-label="Floating label select example" value={dataForm.salary} onChange={changeSalary}>
        <option value="">Select your loan budget</option>
        <option value="less than 3000$">less than 3000$</option>
        <option value="in range 3000$ : 6000$">in range 3000$ : 6000$</option>
        <option value="in range 6000$ : 10000$">in range 6000$ : 10000$</option>
      </select>

      <div className='text-center pt-4'>
        <button className={`btn btn-success w-25 ${!isFormValid ? 'disabled' : ''}`} type="submit" onClick={showPopup} disabled={!isFormValid}>Submit</button>
      </div>

      <Popup />
    </form>
  )
}

export default App