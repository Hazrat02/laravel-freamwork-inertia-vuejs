import { useSSRContext, ref, resolveComponent, unref, withCtx, createVNode } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import "./ResponsiveNavLink-0109397b.mjs";
const admin = "";
const __default__ = {
  data() {
    return {
      sidebarOpen: false,
      sidebar: false,
      authUser: "",
      isAuthenticated: false
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    isActive(routePath) {
      return route().current() === routePath;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "AdminLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(`<div class="container-fluid position-relative d-flex p-0"><div class="${ssrRenderClass([{ "sidebar": true, "open": _ctx.sidebarOpen }, "pe-4 pb-3"])}"><nav class="navbar bg-secondary navbar-dark">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/",
        class: "navbar-brand mx-4 mb-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-primary"${_scopeId}><img style="${ssrRenderStyle({ "width": "50px" })}" src="deshboard/img/logo4.png" alt=""${_scopeId}></h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-primary" }, [
                createVNode("img", {
                  style: { "width": "50px" },
                  src: "deshboard/img/logo4.png",
                  alt: ""
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="d-flex align-items-center ms-4 mb-4"><div class="position-relative">`);
      if (_ctx.authUser.profile) {
        _push(`<img class="rounded-circle"${ssrRenderAttr("src", _ctx.authUser.profile)} alt="" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}">`);
      } else {
        _push(`<img class="rounded-circle" src="data:image/png;base64,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" alt="" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}">`);
      }
      _push(`<div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div></div><div class="ms-3"><h6 class="mb-0">Admin</h6><span>gfdgfdgdgfd</span></div></div><div class="navbar-nav w-100"><a href="/admin/dashboard" class="${ssrRenderClass([{ active: _ctx.isActive("dashboard") }, "nav-item nav-link"])}"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a></div></nav></div><div class="${ssrRenderClass({ "content": true, "open": _ctx.sidebarOpen })}"><nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0"><a class="sidebar-toggler flex-shrink-0"><i class="fa fa-bars"></i></a><div class="navbar-nav align-items-center ms-auto"><div class="nav-item dropdown"><a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><img class="rounded-circle me-lg-2" src="authUser.profile" alt="" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}"><span class="d-none d-lg-inline-flex">ddddddddddd</span></a><div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0"><a style="${ssrRenderStyle({ "cursor": "pointer" })}" class="dropdown-item">Log Out</a></div></div></div></nav>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AdminLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
