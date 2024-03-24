import "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AdminLayout-98eb0448.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./ResponsiveNavLink-0109397b.mjs";
const Dashboard_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  layout: _sfc_main$1,
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AdminLayout = resolveComponent("AdminLayout");
  _push(ssrRenderComponent(_component_AdminLayout, mergeProps({ title: "Dashboard" }, _attrs), {
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
        _push2(`<div class="container-fluid pt-4 px-4"${_scopeId}><div class="row g-4"${_scopeId}><div class="col-sm-6 col-xl-3"${_scopeId}><div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"${_scopeId}><i class="fa fa-chart-line fa-3x text-primary"${_scopeId}></i><div class="ms-3"${_scopeId}><p class="mb-2"${_scopeId}>Total User</p><h4 class="mb-0"${_scopeId}> 3242 </h4></div></div></div><div class="col-sm-6 col-xl-3"${_scopeId}><div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"${_scopeId}><i class="fa fa-chart-bar fa-3x text-primary"${_scopeId}></i><div class="ms-3"${_scopeId}><p class="mb-2"${_scopeId}>Total Deposits</p><h4 class="mb-0"${_scopeId}>3242</h4></div></div></div><div class="col-sm-6 col-xl-3"${_scopeId}><div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"${_scopeId}><i class="fa fa-chart-area fa-3x text-primary"${_scopeId}></i><div class="ms-3"${_scopeId}><p class="mb-2"${_scopeId}>Total Withdrawals</p><h4 class="mb-0"${_scopeId}>23423</h4></div></div></div><div class="col-sm-6 col-xl-3"${_scopeId}><div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"${_scopeId}><i class="fa fa-chart-pie fa-3x text-primary"${_scopeId}></i><div class="ms-3"${_scopeId}><p class="mb-2"${_scopeId}>Total SMS</p><h4 class="mb-0"${_scopeId}>34</h4></div></div></div></div></div><div class="container"${_scopeId}><div class="container row justify-content-between"${_scopeId}><div class="bg-secondary text-center rounded p-4 mt-4 col-lg-6"${_scopeId}><h3 class="p-2 ms-3 text-start"${_scopeId}>Recent Registrations</h3><div class="table-responsive"${_scopeId}><table class="table text-start align-middle table-bordered table-hover mb-0"${_scopeId}><thead${_scopeId}><tr class="text-white"${_scopeId}><th${_scopeId}>SL. Number</th><th${_scopeId}>User Name</th><th${_scopeId}>Email</th><th${_scopeId}>Action</th></tr></thead><tbody${_scopeId}></tbody></table></div></div><div class="bg-secondary text-center rounded p-4 mt-4 col-lg-6"${_scopeId}><h3 class="p-2 ms-3 text-start"${_scopeId}>Recent Transactions</h3><div class="table-responsive"${_scopeId}><table class="table text-start align-middle table-bordered table-hover mb-0"${_scopeId}><thead${_scopeId}><tr class="text-white"${_scopeId}><th${_scopeId}>SL. Number</th><th${_scopeId}>User Id</th><th${_scopeId}>Type</th><th${_scopeId}>Amount</th></tr></thead><tbody${_scopeId}></tbody></table></div></div><div class="bg-secondary text-center rounded p-4 mt-4 mb-5"${_scopeId}><h3 class="p-2 ms-3 text-start"${_scopeId}>Recent Message Details</h3><div class="table-responsive"${_scopeId}><table class="table text-start align-middle table-bordered table-hover mb-0"${_scopeId}><thead${_scopeId}><tr class="text-white"${_scopeId}><th${_scopeId}>SL. Number</th><th${_scopeId}>User Name</th><th${_scopeId}>Email</th><th${_scopeId}>Message</th></tr></thead><tbody${_scopeId}></tbody></table></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "container-fluid pt-4 px-4" }, [
            createVNode("div", { class: "row g-4" }, [
              createVNode("div", { class: "col-sm-6 col-xl-3" }, [
                createVNode("div", { class: "bg-secondary rounded d-flex align-items-center justify-content-between p-4" }, [
                  createVNode("i", { class: "fa fa-chart-line fa-3x text-primary" }),
                  createVNode("div", { class: "ms-3" }, [
                    createVNode("p", { class: "mb-2" }, "Total User"),
                    createVNode("h4", { class: "mb-0" }, " 3242 ")
                  ])
                ])
              ]),
              createVNode("div", { class: "col-sm-6 col-xl-3" }, [
                createVNode("div", { class: "bg-secondary rounded d-flex align-items-center justify-content-between p-4" }, [
                  createVNode("i", { class: "fa fa-chart-bar fa-3x text-primary" }),
                  createVNode("div", { class: "ms-3" }, [
                    createVNode("p", { class: "mb-2" }, "Total Deposits"),
                    createVNode("h4", { class: "mb-0" }, "3242")
                  ])
                ])
              ]),
              createVNode("div", { class: "col-sm-6 col-xl-3" }, [
                createVNode("div", { class: "bg-secondary rounded d-flex align-items-center justify-content-between p-4" }, [
                  createVNode("i", { class: "fa fa-chart-area fa-3x text-primary" }),
                  createVNode("div", { class: "ms-3" }, [
                    createVNode("p", { class: "mb-2" }, "Total Withdrawals"),
                    createVNode("h4", { class: "mb-0" }, "23423")
                  ])
                ])
              ]),
              createVNode("div", { class: "col-sm-6 col-xl-3" }, [
                createVNode("div", { class: "bg-secondary rounded d-flex align-items-center justify-content-between p-4" }, [
                  createVNode("i", { class: "fa fa-chart-pie fa-3x text-primary" }),
                  createVNode("div", { class: "ms-3" }, [
                    createVNode("p", { class: "mb-2" }, "Total SMS"),
                    createVNode("h4", { class: "mb-0" }, "34")
                  ])
                ])
              ])
            ])
          ]),
          createVNode("div", { class: "container" }, [
            createVNode("div", { class: "container row justify-content-between" }, [
              createVNode("div", { class: "bg-secondary text-center rounded p-4 mt-4 col-lg-6" }, [
                createVNode("h3", { class: "p-2 ms-3 text-start" }, "Recent Registrations"),
                createVNode("div", { class: "table-responsive" }, [
                  createVNode("table", { class: "table text-start align-middle table-bordered table-hover mb-0" }, [
                    createVNode("thead", null, [
                      createVNode("tr", { class: "text-white" }, [
                        createVNode("th", null, "SL. Number"),
                        createVNode("th", null, "User Name"),
                        createVNode("th", null, "Email"),
                        createVNode("th", null, "Action")
                      ])
                    ]),
                    createVNode("tbody")
                  ])
                ])
              ]),
              createVNode("div", { class: "bg-secondary text-center rounded p-4 mt-4 col-lg-6" }, [
                createVNode("h3", { class: "p-2 ms-3 text-start" }, "Recent Transactions"),
                createVNode("div", { class: "table-responsive" }, [
                  createVNode("table", { class: "table text-start align-middle table-bordered table-hover mb-0" }, [
                    createVNode("thead", null, [
                      createVNode("tr", { class: "text-white" }, [
                        createVNode("th", null, "SL. Number"),
                        createVNode("th", null, "User Id"),
                        createVNode("th", null, "Type"),
                        createVNode("th", null, "Amount")
                      ])
                    ]),
                    createVNode("tbody")
                  ])
                ])
              ]),
              createVNode("div", { class: "bg-secondary text-center rounded p-4 mt-4 mb-5" }, [
                createVNode("h3", { class: "p-2 ms-3 text-start" }, "Recent Message Details"),
                createVNode("div", { class: "table-responsive" }, [
                  createVNode("table", { class: "table text-start align-middle table-bordered table-hover mb-0" }, [
                    createVNode("thead", null, [
                      createVNode("tr", { class: "text-white" }, [
                        createVNode("th", null, "SL. Number"),
                        createVNode("th", null, "User Name"),
                        createVNode("th", null, "Email"),
                        createVNode("th", null, "Message")
                      ])
                    ]),
                    createVNode("tbody")
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Dashboard as default
};
