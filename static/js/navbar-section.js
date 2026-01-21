(() => {
  const getLabel = (path) => {
    if (path.startsWith("/docs/validators")) return "Validators";
    if (path.startsWith("/docs/api/builder")) return "Builders";
    if (path.startsWith("/docs/builders")) return "Builders";
    if (path.startsWith("/docs/api")) return "Traders";
    if (path.startsWith("/docs/websocket")) return "Traders";
    if (path.startsWith("/docs/developers")) return "Traders";
    if (path.startsWith("/docs/getting-started")) return "Overview";
    return "Overview";
  };

  const update = () => {
    const el = document.querySelector(".navbar-section-label");
    if (!el) return;
    el.textContent = getLabel(window.location.pathname || "");
  };

  const hookHistory = () => {
    const wrap = (method) => {
      const original = history[method];
      history[method] = function () {
        const result = original.apply(this, arguments);
        update();
        return result;
      };
    };
    wrap("pushState");
    wrap("replaceState");
    window.addEventListener("popstate", update);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      update();
      hookHistory();
    });
  } else {
    update();
    hookHistory();
  }
})();
