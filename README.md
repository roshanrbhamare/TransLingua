# TransLingua

**TransLingua** is a powerful and user-friendly web application designed to provide fast and accurate translations across multiple languages. This tool utilizes the Free Google Translator API for seamless and real-time translation services. Whether you're a traveler, a student, or a professional, TransLingua simplifies language barriers by allowing you to translate text from one language to another effortlessly.

## Features

- **Multi-Language Translation**: Supports translation between various languages with just a click.
- **Fast and Accurate**: Powered by the Free Google Translator API for quick and reliable translations.
- **User-Friendly Interface**: Simple and intuitive UI for easy access to translation features.
- **Real-Time Results**: Translations are instantly displayed once the user submits the request.

## Installation

### Prerequisites

Before running this project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Clone the Repository

To get started, clone the repository to your local machine:

- **git clone https://github.com/roshanrbhamare/TransLingua.git**

- **cd TransLingua**

## Install Dependencies

Navigate to the project directory and run the following command to install the required dependencies:

- **npm install**

## Set Up Environment Variables

- **Create a .env file in the root directory.**

Add the following line, replacing your_api_key_here with your actual API key:

- **API_KEY=your_api_key_here**

You can obtain the API key by registering for the Free Google Translator API on RapidAPI.

## Usage
- **Running the Application**

Once all dependencies are installed and your environment variables are set up, run the following command to start the server:

- **npm start**

The application will be available at http://localhost:3000.

## Features
On the homepage (/), users can input text to be translated.

The translation result will be displayed on the solution page (/translator).

Users can specify the target language in the input form.

## Technologies Used
- **Node.js:** Backend runtime for handling API requests.

- **Express.js:** Web framework for building the application.

- **Axios:** For making HTTP requests to the external translation API.

- **EJS:** Templating engine for rendering dynamic pages.

- **dotenv:** For managing environment variables securely.

## Contributing
Contributions are welcome! If you'd like to contribute to TransLingua, follow these steps:

- **Fork the repository.**
- **Create a new branch (git checkout -b feature/your-feature-name).**

- **Make your changes and commit them (git commit -am 'Add new feature').**

- **Push to your branch (git push origin feature/your-feature-name).**

- **Open a pull request.**

## License
This project is licensed under the MIT License - see the LICENSE file for details.
