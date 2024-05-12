/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';




function Webhook() {
  // const eventData = UseMonitor();

  // if (!eventData) {
  //   return <p>Waiting for monitor event update...</p>;
  // }

  // return (
  //   <div>
  //     <h2>Monitor Event Update</h2>
  //     <p>Monitor Name: {eventData.monitor.name}</p>
  //     <p>Status: {eventData.status}</p>
  //     <p>Message: {eventData.message}</p>
  //   </div>
  // );
    const [webhookResponse, setWebhookResponse] = useState('');

    const fetchWebhookResponse = async () => {
        try {
            const response = await fetch('https://flask-9wp6.onrender.com/webhook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                  "id": "",
                  "last_updated": "",
                  "event_type": "",
                  "title": "",
                  "date": "",
                  "org": {
                      "id": "",
                      "name": ""
                  },
                  "body": ""
              })  // Add any payload data you want to send
            });
            const data = await response.json();
            setWebhookResponse(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error('Error fetching webhook response:', error);
        }
    };

    return (

        <div className="App ">
        <div className='text-center'>
        <h1>Datadog Webhook Response</h1>
            <button className='btn btn-success' onClick={fetchWebhookResponse}>Fetch Webhook Response</button>
            <pre>{webhookResponse}</pre>
        </div>            
        </div>
    );



}
export default Webhook;