---
title: Thread Safety
---
## Thread

- launching the multiple browser via thread.

```java
            Thread thread1 = new Thread(() -> {
                  Browser browser;
                  try {
                        browser = new Browser(option);
                        browser.goTo("https://google.com/");
                  } catch (Exception e) {
                        e.printStackTrace();
                  }

            });
            Thread thread2 = new Thread(() -> {
                  Browser browser;
                  try {
                        browser = new Browser(option);
                        browser.goTo("https://google.com/");
                  } catch (Exception e) {
                        e.printStackTrace();
                  }

            });

            thread1.start();
            thread2.start();
```
