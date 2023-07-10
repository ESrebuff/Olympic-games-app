# OlympicGamesStarter

OlympicGamesStarter is an application that provide users with a dashboard to visualize information from previous Olympic Games, such as the number of medals per country and more.

#Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

To install this project, please make sure you have [Node.js](https://nodejs.org/en) and [Angular CLI](https://angular.io/cli) installed on your device.

Clone this repository to your local machine using the following command: `git clone <repository-url>`

Run the command `npm install` to install all the required packages. This will create a node_modules folder.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Architecture 

The project's predefined architecture includes the following components:

- `components` folder: This folder contains reusable components.
- `pages` folder: This folder contains components used for routing.
- `core` folder: This folder contains the business logic, including the `services` and `models` folders where the instances are stored.
Within the `services` folder, you will find the `olympic.service.ts` file, which provides the data for the application. Additionally, the `error.service.ts` file handles any errors that may occur from other services.

note : the compoenents `pie-chart` and `line-chart` are using the librarye [ngx-charts](https://swimlane.gitbook.io/ngx-charts/)

## Usage 
For navigation within the application, we utilize the [Angular Router](https://angular.io/guide/router).

Each page in the application establishes connections to the required services by subscribing to the necessary data. The page then processes this data before passing it to the corresponding components responsible for displaying the information.

By following this approach, we ensure that the components on each page have access to the required data and can display it appropriately.

Feel free to explore the codebase to understand how the navigation and data flow are implemented in the application
