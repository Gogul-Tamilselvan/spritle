Flask and React DataDog Integration

This project integrates DataDog with Flask (backend) and React (frontend) applications. Flask provides an API to interact with DataDog, while React consumes the API for data visualization.
Prerequisites

    Python 3.x
    Flask
    Datadog API Client
    Node.js
    React
    Vite (for React development)

Installation

    Clone the repository:

    bash

git clone https://github.com/Gogul-Tamilselvan/Spritle-dashboard.git

Install dependencies for Flask and React applications:

bash

    # Install Flask dependencies
    cd Spritle-dashboard/flask_app
    pip install -r requirements.txt

    # Install React dependencies
    cd ../react_app
    npm install

    Set up Datadog API keys in flask_app/app.py.

Usage
Flask Application

    Run the Flask application:

    bash

    cd Spritle-dashboard/flask_app
    python app.py

    Access Flask API endpoints for data retrieval and webhook handling.

React Application

    Run the React application with Vite:

    bash

    cd Spritle-dashboard/react_app
    npm start

    Access the React application in your browser at http://localhost:3000 to visualize data and manage monitors.

DataDog Metrics and Monitors
Metrics

DataDog provides a wide range of metrics for monitoring various aspects of your application, including performance, resource usage, and user interactions. These metrics can be fetched using the DataDog API and displayed within your application for real-time monitoring.

To fetch metrics from DataDog using the API:

    Fetch Metrics Endpoint: Utilize the DataDog API's /api/v2/metrics endpoint to retrieve available metrics.

    Authentication: Provide your DataDog API key and application key in the request headers for authentication.

    Example Request:

    http

    GET https://api.datadoghq.com/api/v2/metrics
    DD-API-KEY: <Your-API-Key>
    DD-APPLICATION-KEY: <Your-Application-Key>

    Response: Receive a JSON response containing the available metrics, which can then be parsed and displayed within your application.

Monitors

Monitors in DataDog allow you to set up alerts based on specific conditions in your metrics data. You can create monitors to notify you when certain thresholds are met or when anomalies occur.

To create monitors in DataDog:

    Configure Monitor: Define the conditions for the monitor, including the metric, threshold, and notification settings.

    API Endpoint: Use the DataDog API's /api/v1/monitor endpoint to create a new monitor.

    Authentication: Provide your DataDog API key and application key in the request headers for authentication.

    Example Request:

    http

    POST https://api.datadoghq.com/api/v1/monitor
    DD-API-KEY: <Your-API-Key>
    DD-APPLICATION-KEY: <Your-Application-Key>
    Content-Type: application/json

    {
        "name": "My Monitor",
        "type": "metric alert",
        "query": "sum(last_1h):sum:system.cpu.user{host:host0} > 90",
        "message": "CPU usage is above 90% for host0"
    }

    Response: Receive a response confirming the creation of the monitor.

Submitting Custom Metrics

In addition to fetching predefined metrics, you can also submit custom metrics to DataDog to track specific aspects of your application's performance or behavior.

To submit custom metrics to DataDog:

    Define Metric Payload: Create a payload containing the custom metric data, including the metric name, value, and any additional metadata.

    API Endpoint: Use the DataDog API's /api/v2/metrics endpoint to submit the custom metric data.

    Authentication: Provide your DataDog API key and application key in the request headers for authentication.

    Example Request:

    http

    POST https://api.datadoghq.com/api/v2/metrics
    DD-API-KEY: <Your-API-Key>
    DD-APPLICATION-KEY: <Your-Application-Key>
    Content-Type: application/json

    {
        "series": [
            {
                "metric": "custom.metric.name",
                "points": [
                    [1617798000, 10],
                    [1617798060, 15]
                ],
                "type": "gauge",
                "tags": ["environment:production"]
            }
        ]
    }

    Response: Receive a response confirming the submission of the custom metric data.

Development Notes

    Vite is used for fast React development.
    Flask simplifies backend development for easy integration with DataDog.
    Customize components and functionality in both Flask and React applications as needed.
