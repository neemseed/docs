---
title: Finders
---

## AtCss

Find node by selector. Runs `document.querySelector` within the document or
provided node.

- selector `String`

```java
browser.goTo("https://google.com/");
browser.atCss("a[aria-label='Issues you created']");
```

## Css

Find nodes by selector. The method runs `document.querySelectorAll` within the
document or provided node.

- selector `String`
- options `Hash`
- within `Node` | `nil`

```java
  browser.goTo("https://google.com/");
  browser.css("a[aria-label='Issues you created']");
```

## Xpath

Find nodes by xpath.

- selector `String`
- options `Hash`
- within `Node` | `nil`

```java
 browser.goTo("https://google.com/");
 browser.xpath("a[aria-label='Issues you created']");
```

## AtXpath(selector)

Find node by xpath.

- selector String

```java
  browser.goTo("https://google.com/");
  browser.atXPath("/html/body/form/input[1]");
```

## Body

Returns current page's html.

```java
Browser browser = new Browser(option);
browser.goTo("https://google.com/");
browser.body();
```

## Doctype

Returns current frame's doctype.

```java
browser.goTO("https://google.com/");
browser.docType();
```

return `<!DOCTYPE html>`

## Current_title

Returns current top window title

```java
Browser browser = new Browser(option);
browser.goTo("https://google.com/");
browser.currentTitle();

```

return `google`

## Current_url

Returns current top window location href.

```java
Browser browser = new Browser(option);
browser.goTo("https://google.com/");
browser.currentUrl();
```

return `https://google.com/`
