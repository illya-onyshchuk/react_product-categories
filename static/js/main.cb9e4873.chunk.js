(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{11:function(e,a,c){},13:function(e,a,c){"use strict";c.r(a);c(1);var s=c(3),t=c.n(s),r=(c(9),c(10),c(11),c(4)),i=c.n(r),n=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],d=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],l=c(0);const o=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((e=>{const a=d.find((a=>a.id===e.categoryId)),c=a?n.find((e=>e.id===a.ownerId)):null;return{...e,FindCategory:a,FindUser:c}})),j=()=>Object(l.jsx)("div",{className:"section",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"title",children:"Product Categories"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("nav",{className:"panel",children:[Object(l.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(l.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(l.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",children:"All"}),Object(l.jsx)("a",{"data-cy":"FilterUser",href:"#/",children:"User 1"}),Object(l.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:"is-active",children:"User 2"}),Object(l.jsx)("a",{"data-cy":"FilterUser",href:"#/",children:"User 3"})]}),Object(l.jsx)("div",{className:"panel-block",children:Object(l.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:"qwe"}),Object(l.jsx)("span",{className:"icon is-left",children:Object(l.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(l.jsx)("span",{className:"icon is-right",children:Object(l.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(l.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(l.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(l.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(l.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(l.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(l.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(l.jsx)("div",{className:"panel-block",children:Object(l.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(l.jsxs)("div",{className:"box table-container",children:[Object(l.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(l.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:Object(l.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(l.jsx)("a",{href:"#/",children:Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(l.jsx)("th",{children:Object(l.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(l.jsx)("a",{href:"#/",children:Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(l.jsx)("th",{children:Object(l.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(l.jsx)("a",{href:"#/",children:Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(l.jsx)("th",{children:Object(l.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(l.jsx)("a",{href:"#/",children:Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),o.map((e=>Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{"data-cy":"Product",children:[Object(l.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(l.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(l.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.FindCategory.icon," - ").concat(e.FindCategory.title)}),Object(l.jsx)("td",{"data-cy":"ProductUser",className:i()({"has-text-link":"m"===e.FindUser.sex,"has-text-danger":"f"===e.FindUser.sex}),children:e.FindUser.name})]})})))]})]})]})});t.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.cb9e4873.chunk.js.map