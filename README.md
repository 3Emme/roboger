# __Roboger__

#### __An application which will return a fun Mr.Rogers themed response to number inserted, August 21, 2020__

#### By _**Emme Buentiempo**_

## Description

This application was created as an Epicodus assignment, with the intent to have it serve as a demonstration of knowledge after the program's third week. For the time being this README will serve as a checklist to demonstrate the satisfaction of all project requirements and objectives. 

[Link to live website](http://3emme.github.io/roboger/)

## Project requirements:

  * Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

    * Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
    * Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
    * Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

  * These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

    * The number 13 should be replaced with "Won't you be my neighbor?"
    * The number 21 should be replaced with "Boop".
    * The number 32 should be replaced with "Won't you be my neighbor?"
  * A user should be able to enter a new number and see new results over and over again.

    _Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5_

# Specs
  * Break the program down into simple, individual behaviors with input/output examples. Begin with the simplest possible behavior. List these behaviors (also known as "specs" or "specifications") in the project's README.md file. To get you started, this should be one of your first specs:

    * Spec: The program returns a range of numbers from 0 to the users inputted number
      * Input: "4"
      * Output: "0, 1, 2, 3, 4"
  * Include similar specifications in your README for all behaviors your program demonstrates.

## Project Objectives:

  * JavaScript business logic and user interface logic are separate. **[Incomplete]**
  * Tests are included for each behavior and code is committed after each test passes. **[Incomplete]**
  * Application implements a loop and works as expected. **[Incomplete]**
  * The user can use the application repeatedly and see new results. **[Incomplete]**
  * All previous objectives have been met. **[Incomplete]**
  * Required functionality is in place by the Friday deadline. **[Incomplete]**
  * Project demonstrates understanding of concepts covered this week. If prompted, you are able to discuss your code with an instructor using correct terminology. **[Incomplete]**

  # _Previous Objectives:_

For reference, here are last week's objectives:

  * Project is in a presentable, portfolio-quality state. **[Incomplete]**
  * Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools. **[Incomplete]**
  * Variable names are descriptive and use lower camel case (e.g. myVariableExample). **[Incomplete]**
  * Commits are made regularly with clear messages that finish the phrase "It will…". **[Incomplete]**
  * Project README that includes, bare minimum:
    * author name **[Incomplete]**
    * program name **[Incomplete]**
    * detailed setup instructions **[Incomplete]**
    * description **[Incomplete]**
    * copyright and license information **[Incomplete]**

## Specs
* [X] The program accepts only numbers from the user input
  * Input: 5
  * Output: 5

* [X] The program returns a range of numbers from 0 to the users inputted number
  * Input: 10
  * Output: "0,1,2,3,4,5,6,7,8,9,10"

* [] The program looks at each number within the range returned and detects whether any of the individual digits within the number match one of the trigger digits (1, 2, 3), noticing only the highest value of the trigger digit detected.
  * Input: 
  * Output:

* [] The program replaces any number within the range that contains a trigger digit with a string. The string's value is dependent on the value of the trigger digit detected:
  * If the trigger digit's value is 3, replace the number with the string "Won't you be my neighbor?".
    * Input: 
    * Output:
  * If the trigger digit's value is 2, replace the number with the string "Boop!".
    * Input: 
    * Output:
  * If the trigger digit's value is 1, replace the number with the string "Won't you be my neighbor?.
    * Input: 
    * Output:

* [] The program displays the new list of values to the user
  * Input: 
  * Output:

## Setup/Installation Requirements

There are many ways to setup/install this; here's one thats relatively accessible and free:
* _Fork this repository on Github, then clone it_
* _Create a new branch called gh-pages_
  * _you can do so with the following terminal command while in the project directory:_
  >$ git branch gh-pages
* _Push the new branch to Github_
  * _you can do so with the following terminal command while in the project directory:_
  >$ git checkout gh-pages
  >
  >$ git push origin gh-pages
* _Now the site should be available for viewing at your-github-username.github.io/portfolio._
  * _(your-github-username is just a placeholder, please replace it with your github username)_

## Support and contact details

_Please do not hesitate to contact me at emmettbuentiempo@gmail.com should you have any questions regarding this project_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_

### License

Copyright (c) 2020 **_Emme Buentiempo_**
This software is licensed under the MIT license.