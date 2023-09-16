---
title: Network
---

## Traffic

- Returns all information about network traffic as Network.Exchange instance which in general is a wrapper around request, response and error.

```java
  Browser browser = new Browser(option);
  browser.goTo("https://google.com/");
  List<Exchange> a =browser.network.traffic;
```

## Request

- Page request of the main frame.

```java
   Browser browser = new Browser(option);
   browser.goTo("https://google.com/");
   browser.network.request();
```

## Response

- Page response of the main frame.

```java
  Browser browser = new Browser(option);
  browser.goTo("https://google.com/");
  browser.network.response();
```

## Status

- Contains the status code of the main page response (e.g., 200 for a success). This is just a shortcut for response.status

```java
   Browser browser = new Browser(option);
   browser.goTo("https://google.com/");
   browser.network.status();
```

## Clear

- Clear browser's cache or collected traffic.
- type `Symbol` it is either `:traffic` or `:cache`

```java
   Browser browser = new Browser(option);
   browser.goTo("https://google.com/");
   browser.network.traffic.size(); ===>41
   browser.network.clear("traffic");
   browser.network.traffic.size(); ===>0
```

## Intercept

- Set request interception for given options. This method is only sets request
interception, you should use `on` callback to catch requests and abort or
continue them.
- given HashMap value
- "pattern" `String` \* by default
- "resourceType" `Symbol` one of the [resource types](https://chromedevtools.github.io/devtools-protocol/tot/Network#type-ResourceType)
- for handleAuthRequests set boolean value (If true, authRequired events will be issued and requests will be paused expecting a call to continueWithAuth)

```java
  Browser browser = new Browser(option);
  browser.on(request -> {
                  if (request.match("bla-bla"))
                        request.abort();
                  if (request.match("lorem"))
                        request.respond("bla bla ");
                  else {
                        request.continues();
                  }
            });
  browser.network.intercept(true,"Document");
  browser.goTo("https://google.com/");
```

## Authorize

- If site or proxy uses authorization you can provide credentials using this method.
- options Hash
- `type` Symbol :server | :proxy site or proxy authorization
- `user` String
- `password` String

```java
 Browser browser = new Browser(option);
 browser.on(request -> {request.continues();});
 browser.network.intercept(true,"Docment");
 browser.network.authorize("user", "password", "type");
```

## Emulate Network Conditions

- Activates emulation of network conditions.

- options Hash
- "offline" Boolean emulate internet disconnection, false by default
- "latency" Integer minimum latency from request sent to response headers received (ms), 0 by default
- "download_throughput" Integer maximal aggregated download throughput (bytes/sec), -1 by default, disables download throttling
- "upload_throughput" Integer maximal aggregated upload throughput (bytes/sec), -1 by default, disables download throttling
  parameter for the method
- "connection_type" String connection type if known, one of: none, cellular2g, cellular3g, cellular4g, bluetooth, ethernet, wifi, wimax, other. nil by default

```java
    Browser browser = new Browser(option);
    browser.network.emulateNetworkConnection("cellular2g");
    browser.goTo("https://google.com/");
```

## Offline Mode

- Activates offline mode for a page.

```java
    Browser browser = new Browser(option);
    browser.network.offlineMood();
    browser.goTo("https://google.com/");
```
