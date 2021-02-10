# vertical_scroll_animation

vertical scrolling of boxes

- used pseudo selectors to target even boxes
- used transform property to translate the boxes to 400% on either side on x-axis
- transition the transform by 0.4s ease
- when show class added to box class, the transform translates to 0 so boxes come back to original position
- JS Code was added to
  - add event listener on scroll and add function checkBox
  - function check box checks trigger - points from the bottom using window innerheight property where we can start the transition of boxes; it is not a static number as that can change based on the window size
  - each box is then looped through to the identify if the boxTop value is less than the triggerBottom, which is calculated using getBoundingRect 'top' value Client //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect to then add and remove the show class thus enabling the animation
