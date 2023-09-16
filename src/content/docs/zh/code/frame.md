---
title: Frame
---
## Id

- Frame's unique id.

## Parent Id

- Parent frame id if this one is nested in another one.

## Execution Id

- Execution context id which is used by JS, each frame has it's own context in which JS evaluates.

## Name

- If frame was given a name it should be here.

## State

One of the states frame's in

- started_loading
- navigated
- stopped_loading

## Url

- Returns current frame's top window location href.

```java
   Browser browser = new Browser(option);
   browser.goTo("https://google.com/");
   Frame frame = browser.frames(0);
   String currentUrl = frame.url();
   System.out.println(currentUrl);
```

## Current Title

- Returns current frame's top window title.

```java
    Browser browser = new Browser(option);
    browser.goTo("https://google.com/");
    Frame frame = browser.frames(0);
    String currenttitle = frame.title();
    System.out.println(currenttitle);
```

## Main

- If current frame is the main frame of the page (top of the tree).

```java
   Browser browser = new Browser(option);
   browser.goTo("https://google.com/");
   Frame frame = browser.frameBy(browser.mainFrame());
   boolean parentId=frame.main();
   System.out.println(parentId);

```
