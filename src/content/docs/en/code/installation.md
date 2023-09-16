---
title: Navigation
---

## GoTo

- TO Navigate page .

```java
Browser browser = new Browser(option);
browser.goTo("https://google.com/");
```

## Back

- Navigate to the previous page in history.

```java
Browser browser = new Browser(option);
browser.goTo("https://google.com/");
browser.back();
```

## Forward

- Navigate to the next page in history.

```java
Browser browser = new Browser(option);
browser.goTo("https://google.com/");
browser.back();
browser.forward();
```

## Quit

- It will close the browser and kill the browser process

```java
Browser browser = new Browser(option);
browser.goTo("https://google.com/");
browser.quit();

```

## Refresh

- Reload current page.

```java
Browser browser = new Browser(option);
browser.goTo("https://google.com/");
browser.refresh();
```

## Stop

- stop all navigations and loading pending resources on the page

```java
Browser browser = new Browser(option);
browser.goTo("https://google.com/");
browser.stop();
```

## Getposition

- Get the position for the browser window

```java
 Browser browser = new Browser(option);
 browser.goTo("https://google.com/");
 int value[] = browser.position();
 System.out.println(Arrays.toString(value));
```

## SetPosition

- Set the position for the browser window

- params
- left--> Integer
- top---> Integer
- width---> Integer
- heidht--> Integer

```java
 Browser browser = new Browser(option);
 browser.goTo("https://google.com/");
 browser.setPosition(left,top, width, height);
```
