# Konstantin Lemko

---

## Contacts

* Phone: [+7 (913) 554-63-53](tel:+79135546353)
* E-mail: [lemko99@bk.ru](mailto:lemko99@bk.ru)
* Telegram [@kolem1212](https://t.me/kolem1212)

## About Me

I am 22 years old and have just graduated from the Oil and Gas Institute. But already at the end of the 3rd year, I realized that I would not work in this specialty, since I did not like it. It was then that I got involved in web programming and continue to this day. This is really very interesting and I want to develop in the direction of front-end development.

## Skills

* HTML5
* CSS3 (SCSS)
* BEM
* JavaScript
* PHP
* Git/GitHub
* Gulp
* Figma
* Photoshop

## Code Example

**Roman Numerals Encoder Kata from Codewars:**

Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

**Solution:**

```javascript
function solution(num) {
  let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
    result = '';
  for (let i in lookup ) {
    while ( num >= lookup[i] ) {
      result += i;
      num -= lookup[i];
    }
  }
  return result;
}
```


