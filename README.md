# MMM-Online-State
Displays the network connection availability of the browser.
This MagicMirror Module uses the `Navigator.onLine` [Browser API](https://whatwebcando.today/online-state.html) to check if there is a network connection.

## Installation
Run these commands at the root of your magic mirror install.

```sh
cd modules
git clone https://github.com/Legion2/MMM-Online-State.git
```
## Configuration Options
| **Option**      | **Default** | **Description**                                                                            |
|-----------------|-------------|--------------------------------------------------------------------------------------------|
| `displaySymbol` | `true`      | Display the state as symbol                                                                |
| `displayText`   | `false`     | Display the state as text                                                                  |
| `symbolOnline`  | `wifi`      | The symbol for the online state. See [Font Awsome](http://fontawesome.io/icons/) website.  |
| `symbolOffline` | `wifi`      | The symbol for the offline state. See [Font Awsome](http://fontawesome.io/icons/) website. |
| `colorOnline`   | `#fff`      | The color for the online state.                                                            |
| `colorOffline`  | `red`       | The color for the offline state.                                                           |
