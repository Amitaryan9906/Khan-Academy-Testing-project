# Khan Academy Android Mobile App Testing Project

## Overview

This repository contains the code and resources for automating the testing of the Khan Academy Android mobile app. The app is an educational tool created by Khan Academy, a non-profit organization that aims to provide accessible and quality education to students worldwide. The focus of this project is on UI/UX testing to ensure a smooth and user-friendly experience for app users.

## Tech Stack

- Webdriver IO
- JavaScript
- VS Code IDE

## Installation

To run the test automation scripts, follow these steps:

1. Clone this repository to your local machine.
2. Make sure you have Node.js installed. If not, download it from the official website and install it.
3. Open a terminal or command prompt and navigate to the project's root directory.
4. Install the project dependencies by running the following command:

   ```bash
   npm install
   ```

5. Ensure you have the Khan Academy Android mobile app installed on the device or emulator where you plan to run the tests.

## Running Tests

Before executing the test scripts, make sure you have a connected Android device or emulator set up and running.

To run the UI/UX tests, use the following command:

```bash
npm test
```

This command will trigger the test execution using Webdriver IO, which will launch the Khan Academy app and perform various UI/UX tests to verify its functionality and user interface.

## Project Structure

The project follows a standard structure for test automation projects. Here is an overview of the directory structure:

```
├── node_modules
├── reports
├── test
│   ├── specs
│   │   ├──example.e2e.js
│   │   └── ...
│   └──pageobjects
│       ├── test.js
│       └── ...
├── package-lock.json   
├── wdio.config.js     
├── package.json
└── README.md
```

- `test/specs`: Contains test scripts written using Webdriver IO, each focusing on a specific functionality or feature of the app.
- `test/pageobjects`: Contains page object classes that encapsulate the locators and interactions with different pages of the app.
- the `configuration file `wdio.config.js`, where you can set up capabilities, specify test environments, and define other settings for Webdriver IO.

## Contribution Guidelines

If you wish to contribute to this project, please follow these guidelines:

1. Fork the repository and create a new branch for your changes.
2. Make your changes and write clear, concise commit messages.
3. Test your changes thoroughly to ensure they do not break existing functionality.
4. Submit a pull request, describing the changes you made and the problem they solve.

## Contact

If you have any questions or need further assistance, feel free to contact the project maintainers:

- Name: [Amit Kumar Das]
- Email: [damit5221@gmail.com]

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for educational and non-commercial purposes.