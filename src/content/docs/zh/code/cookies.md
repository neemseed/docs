---
title: Cookies
---
## All

- Returns cookies hash

```java
browser.goTo("https://google.com/");
browser.cookies.all();
```

## GetCookies

- Returns cookie
- value `String`

```java
browser.goTo("https://google.com/");
browser.cookies.getCookies("JSESSIONID");
```

## Set

- Sets a cookie

- value `Hash`
- name `String`
- value `String`
- domain `String`
- expires `Integerreset`
- sameParty `String`
- httponly `Boolean`

```java
browser.cookies.set(name: "stealth", value: "omg", domain: "google.com");
```

## Value

```java
 browser.goTo("https://google.com/");
 JsonNode node = browser.cookies.getCookies("JSESSIONID");
 browser.cookies.set(node);
```

## Remove

- Removes given cookie

- options `Hash`
- name `String`
- domain `String`
- url `String`

```java
browser.goTo("https://google.com/");
Map<String, Object> params = new HashMap<>();
params.put("domain", "localhost");
params.put("url", "url");
browser.cookies.remove("JSESSIONID", params);
```

## Clear

- Removes all cookies for current page

```java
 browser.goTo("https://google.com/");
 browser.cookies.clear();
```
