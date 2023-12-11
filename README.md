# Week 3 Weekly Challenge

This week's weekly challenge is to create a password generator.
I feel as though I have met or exceeded the requirements for this project.

## User Story

> AS AN employee with access to sensitive data
>
> I WANT to randomly generate a password that meets certain criteria
>
> SO THAT I can create a strong password that provides greater security

## Requirements

>GIVEN I need a new, secure password
>
>WHEN I click the button to generate a password
>
>THEN I am presented with a series of prompts for password criteria
>
>WHEN prompted for password criteria
>
>THEN I select which criteria to include in the password
>
>WHEN prompted for the length of the password
>
>THEN I choose a length of at least 8 characters and no more than 128 characters
>
>WHEN asked for character types to include in the password
>
>THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
>
>WHEN I answer each prompt
>
>THEN my input should be validated and at least one character type should be selected
>
>WHEN all prompts are answered
>
>THEN a password is generated that matches the selected criteria
>
>WHEN the password is generated
>
>THEN the password is either displayed in an alert or written to the page

### Description

When given a prompt for selecting between lower case, uppercase, numeric, or special characters, and given a length of between 8 and 128 characters, a password is randomly generated that matches the selected criteria. This is accomplished using strings and arrays to build a list of characters then selecting from random the number of characters requested to build the final password that gets checked one character at a time to ensure requirements are met.

### Screenshots

This is it with a functional example of everything but special characters

![This is it with a functional example of everything but special characters](<assets/images/Screenshot (872).png>)

### Credits

This was a project with source code provided. Source code is from https://github.com/coding-boot-camp/friendly-parakeet. 