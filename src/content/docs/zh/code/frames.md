---
title: Frames
---
## Frames

- Returns all the frames current page have.

```java
    Browser browser = new Browser(option);
    browser.goTo("https://google.com/");
    List<Frame> frame=browser.frames();
    System.out.println(frame);
```

## MainFrame

- Returns page's main frame, the top of the tree and the parent of all frames.

```java
    Browser browser = new Browser(option);
    browser.goTo("https://google.com//");
    String mainframe = browser.mainFrame();
    System.out.println(mainframe);
```

## FrameBy

- Find frame by given frameId.

```java
    Browser browser = new Browser(option);
    browser.goTo("https://google.com//");
    String mainframe = browser.mainFrame();
    Frame frame = browser.frameBy(mainframe);
    System.out.println(frame);
```
