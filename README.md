# Team-Profile-Generator
A Node.js command-line application that generates an HTML webpage from the user input received

## Description
This is a Node.js application that takes in user information about employees on a softawre engineering team and then quickly and easily generates an HTML webpage that displays the summaries for each person using the inquirer package. 
The code provides a clean, polished and interactive CLI that prompts the user for information and uses these data to generate the data on the html webpage. 
Also, as part of making the code maintainable, the unit tests for the various functions of the code was generated and run and passed successfully.

## User Guide
This section provides detailed description on how to use the Node.js app:

The application is invoked at the root of the project using the command line when the user types the following command: ```node index.js```<br />
Press enter  to run the command entered above; then the user is  presented with question prompts for information about the members of the software engineering team. 

Answer each question presented as best as you can and press enter at every step to submit answers. Some of the questions require validation which means that if for example, the user enters a number or a wrong format for the email fields, the application will reject and request for valid data to be entered.

At the end of the question prompts when the user has answered all questions, and selects the option to finish creating their team, this automatically triggers the generation of the index.html webpage and a success message is displayed.
The newly generated index.html file is found in the Develop folder [here](Develop/dist/index.html).

On the newly generated webpage, when the user clicks on an email address, then the default email program opens and populates the  TO field of the email with the address. Also, when  the user clicks on the GitHub username, this profile opens in a new tab.

## Links to application
* URL of GitHub repository containing the code: https://github.com/e-giftz/Team-Profile-Generator

## Video of the User Flow through the App
The video walkthrough  of the app can be found [here](/Develop/assets/README-app-display.mp4)

![App Walkthrough ](/Develop/assets/README-app-walkthrough.gif)