Module.register("MMM-Online-State", {
    defaults: {
        displayText: false,
        displaySymbol: true,
        symbolOnline: "wifi",
        symbolOffline: "wifi",
        colorOnline: "#fff",
        colorOffline: "red"
    },
    start: function () {
        window.addEventListener('online', () => this.updateDom());
        window.addEventListener('offline', () => this.updateDom());
    },
    getStyles: function () {
        return ["font-awesome.css"];
    },
    getDom: function () {
        const state = window.navigator.onLine;
        let wrapper = document.createElement("div");
        if (this.config.displaySymbol) {
            let symbolWrapper = document.createElement("div");
            if (this.config.colored) {
                symbolWrapper.style.cssText = "color:" + this.colorForState(state);
            }
            const symbolClass = this.symbolClassForState(state);
            const symbol = document.createElement("span");
            symbol.className = "fa fa-fw fa-" + symbol;
            symbolWrapper.appendChild(symbol);
            wrapper.appendChild(symbolWrapper);
        }
        if (this.config.displayText) {
            wrapper.innerHTML = this.translate(state ? "online" : "offline");
        }
        return wrapper;
    },
    colorForState: function (state) {
        return state ? this.config.colorOnline : this.config.colorOffline;
    },
    symbolClassForState: function (state) {
        return state ? this.config.symbolOnline : this.config.symbolOffline;
    }
});
