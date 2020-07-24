import React from 'react';
import './DashboardAddEventPage.css';
const DashboardAddEventPage =()=>{
        return (  
            <section className='form_bg dashboard-addevent'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-offset-12 col-md-12 col-sm-offset-6 col-sm-12'>
                   <form className='form_horizontal'>
                     <label className='dashboard-addevent__title'>New Event</label>
                        <input type='text' placeholder='Event Name'/>
                        <input type='date'/>
                        <input type='Time'/>
                        <input type='location' placeholder='location'/>
                        <input type='text' placeholder='Event Description' id='addevent__discription'/>
                        <div className='dashboard-castuminput col-md-offset-12 col-md-12 col-sm-offset-3 col-sm-6 '>
                            <input placeholder='Event Cover' id='dashboard-cover'/>
                            <input type='file' accept='image/*' placeholder='Event Cover' />
                        </div>
                        <input type='submit' value='add event'/>
                    </form>
                    </div>
                </div>      
            </div>
            </section>
        );
    }

 
export default DashboardAddEventPage;