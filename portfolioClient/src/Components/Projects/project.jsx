import './project.scss';

const Projects=()=>{
    return (
           <>
                <div className='Projects_main'>
                    <div className='Latest'>
                        <h3>Latest Project</h3>
                        <span>Global Food Management</span>
                         <p>
                            This project consist of building a Mobile Application Where a User will be
                            able find the restaurants near him/her nor matter where he/she find him/herself. 
                            The nearest restaurants are displayed on <strong>Google map</strong> and the user
                            will be able to place orders online or still, Visit the restaurant in person
                         </p>
                         

                    </div>
                    <div className='completed'>
                        <h1>Completed Projects</h1>
                        <div className='head'>
                            <div>
                                Attendance Management System
                             </div>
                             <div>
                                Insurance Management <br /> System
                             </div>
                             <div>
                                 Student Selection Process Automation
                             </div>
                             
                             <div>
                                E-learning Management <br /> system
                             </div>
                        </div>
                        <div className='foot'>
                            <div>
                                16 bit computer/Micriprocessor
                             </div>
                             <div>
                                Banking Management system
                             </div>
                             
                             <div>
                                To do App with Flutter
                             </div>
                             <div>
                                Library Management System
                             </div>
                        </div>
                    </div>
                </div>          
           </>

    );
}

export default Projects