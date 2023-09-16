---
title: Keyboard
---

## Down

- Dispatches a keydown event.
- key `String` | `Symbol` Name of key such as "a", "tab"
- for string

  ```java
  Browser browser = new Browser(option);
  browser.keyboard.down("a");
  ``
  ```

## Up

- Dispatches a keyup event.
- key `String` | `Symbol` Name of key such as "a", "tab"
- for string

```java
Browser browser = new Browser(option);
browser.keyboard.up("a");
```

## Text

- Sends a keydown and keyup event for each character in the text.
- text `String` .A text to type into a focused

```java
 Browser browser = new Browser(option);
 browser.keyboard.type("xyz@gmail.com");
```
