import React, {useState } from "react";
import DatePicker from 'react-datepicker';
import "./index.css";
import 'react-datepicker/dist/react-datepicker.css';
// import { Transition, animate } from 'react-spring';

const MainComponent = () => {

    const [selectedDate, setSelectedDate] = useState(null);
  
    const [formGender, changeFormGender] = useState();

    const [visibleContent, setVisibleContent] = useState(false);

    const [userInput, setUserInput] = useState({
        name: '',
        dateOfBirth: '',
        customerId:'',
        email:'',
        mobile:''
    })


    const clearEventHandler = (event) => {
        console.log(userInput);
        setUserInput({
            name: '',
            dateOfBirth: '',
            customerId:'',
            email:'',
            mobile:''
        })
         setSelectedDate('');
         changeFormGender();

    }

    const leftArrowClickHandler = () => {
        console.log("left");
        setVisibleContent(false);

    }

    const rightArrowClickHandler = () => {
        console.log("right");
        setVisibleContent(true);

    }
  
    const formHandlerGender = event => {
      changeFormGender(event.target.value)
    console.log(event.target.value);
    }

    const submitFormHandler = event => {
        event.preventDefault();
    }

    const dateHandler = event => {
    }

    const emailEventHandler = event => {
        setUserInput({
            ...userInput,  
            email: event.target.email,
        })   
    }

    const mobileEventHandler = event => {
        setUserInput({
            ...userInput,  
            mobile: event.target.mobile,
        })   
    }

    const customerIdEventHandler = event => {
        setUserInput({
            ...userInput,  
            customerId: event.target.customerId,
        })   
    }


    const nameEventHandler = event => {
      console.log(event.target.value);
      setUserInput({
        ...userInput,  
        name: event.target.value,
    })
    }


    return (
    <div className ="home-container">
    <div className="image-container">
    <div className = "face-control">
    <img src = "./face.svg" alt=""/>
    </div>
  <h2>Front-end Challenge!</h2>
  <p>This is a design I am Working on it for platform45</p>
  <div className = {!visibleContent ? "arrow-control" : "arrowTurn-control"}>
  {visibleContent && <img src = "./arrow.svg" alt="" onClick={leftArrowClickHandler} />}
  {!visibleContent && <img src = "./arrow.svg" alt="" onClick={rightArrowClickHandler} />}
  </div>
      </div>

       <div className={!visibleContent ? "form-container" : "para-container"}>
       {!visibleContent && <div className={!visibleContent ? "form-container" : "para-container"}>
        <form className="register-form" onSubmit={submitFormHandler}>
    
         <div className="name-entity">
          <label>Name</label>
          <input
            id="first-name"
            className="form-field"
            type="text"
            name="name"
            onChange={nameEventHandler}
            value={userInput.name}
          />
          </div> 

          <div className="form-field-datepick">
          <label>Date of Birth</label>
          <DatePicker 
          placeholder="Date Picker"
           selected={selectedDate}
           onChange={dateHandler}
            // dateFormat = 'dd/MM/yyyy'
            showYearDropdown
            scrollableMonthYearDropdown
            />
            <img src = "./calendar.svg" alt=""/>
            </div>
  
            <div className="form-field-radio">
            <label>Gender</label>
            <div className="form-field-select">        
            <label>Male</label>
            <input
            id="male"
            type="radio"
            name= "radioValues"
            onChange={formHandlerGender}
            value={formGender}
          />
  
          <label>Female</label>
          <input
          id="female"
          type="radio"
          name="radioValues"
          onChange={formHandlerGender}
          value={formGender}
        />
        </div>
        </div>
  
          
        <div>
        <label>Email</label>
          <input
            id="email"
            className="form-field"
            type="text"
            name="email"
            onChange={emailEventHandler}
            value={userInput.email}
          />
          </div>

  
          <div>
          <label>Mobile</label>
          <input
            id="mobile"
            className="form-field"
            type="text"
            name="mobile"
            onChange={mobileEventHandler}
            value={userInput.mobile}
          />
          </div> 
  
          <div className="customer-entity">
          <label>Customer ID</label>
          <input
            id="customer-name"
            className="form-field"
            type="text"
            name="customerId"
            onChange={customerIdEventHandler}
            value={userInput.customerId}
          />
          </div> 
  
          <div className="form-field-memberShip">
          <label>MemberShip</label>
  
          <div className="form-membership-input">
          <img src = "./card.svg" alt=""/>
          <label>Classic</label>
          <img src = "./card.svg" alt=""/>
          <label>Silver</label>
          <img src = "./card.svg" alt=""/>
          <label>Gold</label>        
          </div> 
  
          </div>
  <div className="form-field-button">
          <button type="submit" className="btn btn-info" onClick={clearEventHandler}>
            CANCEL
          </button>
  
          <button className="form-field-save" type="submit">
          SAVE
        </button>
  
          </div>
        </form>
      </div>}
  
      <div className="dummy-content">
      {visibleContent && <div>
        <h2>My World Today</h2>
        <p>This is a Dummy Content for the Assessment purpose.
        This is a Dummy Content for the Assessment purpose.</p>
        </div>}
        </div>
        </div>
        

        </div>


)
}

export default MainComponent;
