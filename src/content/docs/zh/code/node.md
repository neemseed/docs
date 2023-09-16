---
title: Node
---
## Focus

- Focuses the given element.

```java
 browser.goTo("https://google.com/");
 browser.atCss("#email");
 browser.focus();
```

## Focusable

- It will check the focus() method .if given element is focused it will give `true` else it will return the exception.

```java
 browser.page.dom.runtime.nodeobject.focusable();
```

## Type

- params
- value as string

```java
browser.page.dom.runtime.nodeobject.type(value);
```

## ScrollIntoView

- Scrolls the specified rect of the given node into view if not already visible.

```java
 browser.page.dom.runtime.nodeobject.scrollIntoView();
```

## Click

- Click given coordinates, fires mouse move, down and up events.

params

- :button `Symbol` :left | :right, defaults to :left

```java
 browser.page.dom.runtime.nodeobject.click("right");
```

## Get Text

Take the text of the focused element

params

- selector of focused element.

```java
 browser.getText(selector);
```
