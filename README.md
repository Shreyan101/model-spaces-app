# Model Space

**Model Space** is an innovative platform designed to provide users with a seamless way to interact with generative AI models. This web application offers a user-friendly interface where various data types—including text, numbers, images, and audio—can be input. The AI models then process these inputs and generate outputs in diverse formats such as text, images, numbers, booleans, and audio.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Features

- **Model Overview**: Upon landing on the platform, users are presented with a series of cards, each representing a different AI model. These cards are dynamically generated using data fetched from an API.

- **Detailed Model Interaction**: By clicking on any specific card, users are redirected to a new page that showcases detailed information about the selected model. The page URL includes the model's unique ID, which is used to instantly fetch the model's details via an API call.


- **Dynamic Form Generation**: The detailed model page features a custom form that is dynamically generated based on the input fields provided by the model's detail API. This form leverages Ant Design components to ensure a polished user experience, setting default values and enforcing required fields.

- **Prediction and Output**: Users can fill out the form and click on the 'Predict' button, which triggers a backend API call. The response from this call is then displayed below the form, offering the generated output—be it text, images, or other formats.

- **Responsive Design**: The entire application is built to be fully responsive, ensuring that users have a smooth experience across all devices.

## Technologies Used

- **React + TypeScript**: For building a robust and scalable frontend.

- **Ant Design (antd)**: To create a consistent and intuitive user interface.

- **CSS**: For custom styling and responsive design.

- **React Router DOM**: For efficient routing and navigation within the application.


