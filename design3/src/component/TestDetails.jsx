import React, { useState } from 'react';

const TestDetails = () => {
  
  const Accordian = [
    {
      AccordianTitle: 'Count of RBC',
      No_of_parameter: '12',
      content: 'Lorem ipsum content for Count of RBC.'
    },
    {
      AccordianTitle: 'Liver Diagnostic',
      No_of_parameter: '21',
      content: 'Lorem ipsum content for Liver Diagnostic.'
    },
    {
      AccordianTitle: 'Kidney Function Test',
      No_of_parameter: '4',
      content: 'Lorem ipsum content for Kidney Function Test.'
    },
    {
      AccordianTitle: 'Complete Blood Count',
      No_of_parameter: '24',
      content: 'Lorem ipsum content for Complete Blood Count.'
    },
    {
      AccordianTitle: 'Blood Glucose Fasting',
      No_of_parameter: '1',
      content: 'Lorem ipsum content for Blood Glucose Fasting.'
    }
  ];

 
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
 
  return (
    <div className="TestDetails-container">
      <div className="Test-text" style={{ fontSize: '24px', marginTop: '15px', marginLeft: '15px', marginBottom: '15px' }}>
        Test Details (Parameters included : 71)
      </div>
      
      <div className="testHeading" style={{ backgroundColor: '#00cccc', color: 'white', height: '40px', display: 'flex', alignItems: 'center' }}>
        <div style={{ fontSize: '20px', fontWeight: '500', width: '40%', paddingLeft: '20px' }}>profile/parameter</div>
        <div style={{ fontSize: '20px', fontWeight: '500', width: '60%' }}>No. of Parameter</div>

      </div>

      <div className="details" style={{ marginTop: '10px', display: 'flex', flexDirection: 'column' }}>
        {Accordian.map((ele, index) => (
          <div key={index}>
            <div
              className="accordian-item"
              onClick={() => toggleAccordion(index)}  
              style={{
                border: '2px solid #d1e0e0',
                width: '90%',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '5px',
                margin: '10px auto',
                cursor: 'pointer',
                justifyContent:'space-around',
                backgroundColor: activeAccordion === index ? '#f0f8ff' : 'transparent' 
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: '500', width: '40%', paddingLeft: '15px' }}>
                {ele.AccordianTitle}
              </div>
              <div className="parameter-1" style={{ fontSize: '20px', fontWeight: '500', width: '40%', paddingLeft: '35px' }}>
                {ele.No_of_parameter}
              </div>
              <div className="sign"   style={{fontSize:'30px',fontWeight:'500',width:'20%',paddingLeft:'20px' }}>
                {index === activeAccordion ? '-' : '+'}
              </div>
            </div>

           
            {activeAccordion === index && (
              <div className="accordion-content" style={{ padding: '10px', backgroundColor: '#f7f7f7', borderRadius: '5px' }}>
                {ele.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestDetails;
