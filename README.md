# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![desktop solution](./design/desktop-solution.png)
![mobile solution](./design/mobile-solution.png)


### Links

- Solution URL: [GitHub](https://github.com/uvdevelop26/Interactive-pricing-component)
- Live Site URL: [GitHub Pages](https://uvdevelop26.github.io/Interactive-pricing-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

```css
 /* *********** styling input range in webkit ******* */
.range-control {
    -webkit-appearance: none; 
    appearance: none;
    /* other styles here */
}

.range-control::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    /* other styles here */
}
.range-control::-webkit-slider-thumb {
    appearance: none;
   /* other styles here */
    margin-top: -12.5px; /* (track hight / 2) - (thumb hight * 2) */
}

/* ***** styling input range in mozilla ********** */
/* styling the track */
.range-control::-moz-range-track {
   /* styles here */
}

/* stilyng the progress bar */
.range-control::-moz-range-progress {
    /* styles here */
}

/* stilyng the thumb */
.range-control::-moz-range-thumb {
    appearance: none;
   /* other styles here */
}

```

### Continued development

I will continue focusing on improving javascript especially on abstraction to create more readable code

### Useful resources

- [Alyssa Hollan's Article](https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/) - She helped me understand how input ranges are structured so i can style it.


## Author

- Frontend Mentor - [@uvdevelop26](https://www.frontendmentor.io/profile/uvdevelop26)
- LinkedIn - [Ubaldo Villalba](https://www.linkedin.com/in/ubaldo-villalba-6727a021a/)



