---
title: Browser Header
---
## Get

- Get all headers

## Set

- Set given headers. Eventually clear all headers and set given ones.`this.clear();`

```java
  browser.goTo("https://google.com/");
  browser.page.header.set("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36");
```

- headers `HashMap` key-value pairs for example `User-Agent" => "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"

## add

- Adds given headers to already set ones.

```java
  browser.goTo("https://google.com/");
  browser.page.header.add("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36");
```

- headers `HashMap` key-value pairs for example

  ```java
    Map<String, Object> add = new HashMap<>();
    add.put("userAgent", userAgent);
    add.put("acceptLanguage", "en;q=0.8");
  ```

## clear

- Clear all headers.

```java
  browser.goTo("https://google.com/");
  browser.page.header.clear();
```
