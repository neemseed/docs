---
title: Mouse
---

## Scroll To

- Scroll page to a given x, y

- x `Integer` the pixel along the horizontal axis of the document that you
  want displayed in the upper left
- y `Integer` the pixel along the vertical axis of the document that you want
  displayed in the upper left

```java
Browser browser = new Browser(option);
browser.goTo("https://google.com/");
browser.mouse.scrollTo(0, 400);
```

## Click

- Click given coordinates, fires mouse move, down and up events.

- Parameters for click funtion

- x `Integer`
- y `Integer`
- button `Symbol` :left | :right, defaults to :left
- count `Integer` defaults to 1

```java
Browser browser = new Browser(option);
browser.click("left");
```

## Down

- Mouse down for given coordinates.

Parameters for click funtion

- x `Integer`
- y `Integer`
- button `Symbol` :left | :right, defaults to :left
- count `Integer` defaults to 1

```java
Browser browser = new Browser(option);
browser.mouse.down("right", 2, 0, 0);
```

## Up

- Mouse up for given coordinates.

- Parameters for click funtion

- x `Integer`
- y `Integer`
- button `Symbol` :left | :right, defaults to :left
- count `Integer` defaults to 1

```java
  Browser browser = new Browser(option);
  browser.mouse.up("right",2,0,1);
```

## Move

- Mouse move to given x and y.
- Parameters for click funtion

- x `Integer`
- y `Integer`

```java
Browser browser = new Browser(option);
browser.mouse.move(0,400);
```
