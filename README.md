# Calculator
Calculator stylized on Microsoft Windows Calculator, created with JavaScript.

## Table of Contents

* [Introduction](#introduction)
* [Technologies](#technologies)
* [Launch](#launch)
* [Features](#features)

## Introduction
Idea was to create a slightly simplified version of Microsoft Windows Calculator, with its behavior and way of working (it's surprising how differently calculators can be done).

It's also the first project that made it into my portfolio. By creating it, I took care, so that there were no common bugs - like this one for example: 

       0.1 + 0.2 === 0.3   //false 
       0.1 + 0.2           //0.30000000000000004 

...but also that there are no other bugs. I put a special effort into this, so breaking this calculator should be actually impossible ;) Give it a try!



## Technologies

- Vanilla JavaScript (ES11)
- CSS3
- HTML5

## Launch

You can open the project in your browser by clicking [here.](https://prmk01.github.io/Calculator)

## Features

I implemented basic keyboard operation so that using this Calculator is much quicker and convenient. In most cases, the key implementation is pretty self-explanatory, but there is a few, that I put under a special place on the keyboard:

- **C** is placed under **Esc**
- **CE** is placed under **`**
- and **±** is placed under **m**

Other than this, it is a classic calculator with memory storage, that looks and behaves in a very similar way to its Microsoft prototype.