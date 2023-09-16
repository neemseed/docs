---
title: Javascript
---
## Evaluate

- Evaluate and return result for given JS expression
- expression String should be valid JavaScript

```java
 browser.goTo("https://google.com/");
 browser.evaluate("window.scrollTo(1000,1000)");
```

## EvaluateAsync

- Evaluate asynchronous expression and return result
- expression String should be valid JavaScript
- wait_time How long we should wait for Promise to resolve or reject

```java
 browser.goTo("https://google.com/");
 browser.evaluateAsync("window.scrollTo(1000,1000)", 5);
```

## Execute

- Execute expression. Doesn't return the result
- expression String should be valid JavaScript

```java
browser.goTo("https://google.com/");
browser.execute("(1 + 1)");
```
