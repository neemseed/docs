---
title: Screenshot
---

## ScreenShots

Saves screenshot on a disk.

options `HashMap`

- path `String` to save a screenshot on the disk. `encoding` will be set to
    `binary` automatically
- encoding `Symbol` `base64` | `binary` you can set it to return image as
    Base64
- format `String` "jpeg" | "png"
- quality `Integer` 0-100 works for jpeg only

```java
  browser.goTo("https://google.com/");
  Map<String, Object> params = new HashMap<>();
  params.put("quality", "100");
  params.put("path", "google.png");
  browser.screenshot(params);
```

## Pdf

Saves PDF on a disk

options `Hash`

- path `String` to save a pdf on the disk. `encoding` will be set to
  `binary` automatically
- encoding `Symbol` `base64` | `binary` you can set it to return pdf as
  Base64
- landscape `Boolean` paper orientation. Defaults to false.
- scale `Float` zoom in/out
- format `symbol` standard paper sizes
- paper_width `Flresetoat` set paper width
- paper_height `Float` set paper height

```java
 browser.goTo("https://google.com/");
 Map<String, Object> params = new HashMap<>();
 params.put("path", "give path of location");
 params.put("quality", "100");
 params.put("paperWidth", 1.0);
 params.put("paperHeight", 1.0);
 browser.pdf(params);
```

## Mhtml

Saves MHTML on a disk or returns it as a string.

options `Hash`

- path String to save a file on the disk.

```java
 Browser browser = new Browser(option);
 browser.goTo("https://google.com/");
 browser.mhtml("google.mhtml");
```
