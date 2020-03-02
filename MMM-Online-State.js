Module.register("MMM-Online-State", {
    defaults: {},
    start: function () {
        window.addEventListener('online', () => this.updateDom());
        window.addEventListener('offline', () => this.updateDom());
    },
    getDom: function () {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.translate(navigator.onLine ? "online" : "offline");
        return wrapper;
    }
});
