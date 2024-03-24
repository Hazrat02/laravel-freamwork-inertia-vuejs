import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AdminLayout-98eb0448.mjs";
import "./ResponsiveNavLink-0109397b.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const Welcome_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  // layout: AdminLayout,
  data() {
    return {
      oldCode: "55555555555555534534434",
      userCode: "",
      showReset: false,
      showCode: false,
      showEmail: true,
      email: "",
      password: "",
      showHeader: true
    };
  },
  methods: {
    toggleReset() {
      console.log(this.showHeader);
      this.showHeader = false;
    }
  },
  created() {
    this.showHeader = true;
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Dashboard" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Dashboard </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Dashboard ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}> tgftdfgd </div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg" }, " tgftdfgd ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
