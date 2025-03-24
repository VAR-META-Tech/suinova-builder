"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  ContentStackCredentialsProvider: () => ContentStackCredentialsProvider,
  ContentStackCredentialsProviderMeta: () => ContentStackCredentialsProviderMeta,
  ContentStackFetcher: () => ContentStackFetcher,
  ContentStackFetcherMeta: () => ContentStackFetcherMeta,
  ContentStackField: () => ContentStackField,
  ContentStackFieldMeta: () => ContentStackFieldMeta,
  ensure: () => ensure,
  registerAll: () => registerAll
});
module.exports = __toCommonJS(src_exports);
var import_registerComponent = __toESM(require("@plasmicapp/host/registerComponent"));
var import_registerGlobalContext = __toESM(require("@plasmicapp/host/registerGlobalContext"));

// src/contentstack.tsx
var import_host = require("@plasmicapp/host");
var import_query = require("@plasmicapp/query");
var import_change_case = require("change-case");
var import_dlv = __toESM(require("dlv"));
var import_react = __toESM(require("react"));

// src/utils.ts
var queryOperators = [
  {
    value: "",
    label: "Is"
  },
  {
    value: "$ne",
    label: "Is not"
  },
  {
    value: "$lt",
    label: "Less than"
  },
  {
    value: "$lte",
    label: "Less than or equal"
  },
  {
    value: "$gt",
    label: "Greater than"
  },
  {
    value: "$gte",
    label: "Greater than or equal "
  }
];

// src/contentstack.tsx
function ensure(x) {
  if (x === null || x === void 0) {
    debugger;
    throw new Error(`Value must not be undefined or null`);
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-content-stack";
var makeDataProviderName = (contentType) => `currentContentstack${(0, import_change_case.pascalCase)(contentType)}Item`;
var CredentialsContext = import_react.default.createContext(void 0);
var ContentStackCredentialsProviderMeta = {
  name: "ContentStackCredentialsProvider",
  displayName: "ContentStack Credentials Provider",
  description: "The API key is a unique key assigned to each stack. Learn how to [get your API key](https://www.contentstack.com/docs/developers/apis/content-management-api/#how-to-get-stack-api-key).",
  importName: "ContentStackCredentialsProvider",
  importPath: modulePath,
  props: {
    apiKey: {
      type: "string",
      displayName: "API Key",
      description: "API Key of your Stack ",
      defaultValue: "blt02f7b45378b008ee"
    },
    accessToken: {
      type: "string",
      displayName: "Access Token ",
      description: "Access Token",
      defaultValue: "cs5b69faf35efdebd91d08bcf4"
    },
    environment: {
      type: "string",
      displayName: "Environment",
      defaultValue: "production"
    }
  }
};
function ContentStackCredentialsProvider({
  apiKey,
  accessToken,
  environment,
  children
}) {
  return /* @__PURE__ */ import_react.default.createElement(CredentialsContext.Provider, { value: { apiKey, accessToken, environment } }, children);
}
var ContentStackFetcherMeta = {
  name: "ContentStackFetcher",
  displayName: "ContentStack Fetcher",
  importName: "ContentStackFetcher",
  importPath: modulePath,
  providesData: true,
  description: "Fetches ContentStack data and repeats content of children once for every row fetched. ",
  defaultStyles: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridRowGap: "8px",
    gridColumnGap: "8px",
    padding: "8px",
    maxWidth: "100%"
  },
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "vbox",
        styles: {
          padding: "8px"
        },
        children: {
          type: "component",
          name: "ContentStackField"
        }
      }
    },
    contentType: {
      type: "choice",
      options: (props, ctx) => {
        var _a, _b;
        return (_b = (_a = ctx == null ? void 0 : ctx.types) == null ? void 0 : _a.map((type) => ({
          label: type == null ? void 0 : type.title,
          value: type == null ? void 0 : type.uid
        }))) != null ? _b : [];
      },
      displayName: "Content type",
      description: "Content type to be queried."
    },
    filterField: {
      type: "choice",
      displayName: "Filter field",
      description: "Field (from Collection) to filter by",
      options: (props, ctx) => {
        var _a;
        return (_a = ctx == null ? void 0 : ctx.filterFields) != null ? _a : [];
      },
      hidden: (props, ctx) => !props.contentType
    },
    queryOperator: {
      type: "choice",
      displayName: "Query Operator",
      description: "Query Operator filter by",
      options: (props, ctx) => {
        var _a;
        return (_a = ctx == null ? void 0 : ctx.queryOptions) != null ? _a : [];
      },
      hidden: (props, ctx) => !props.filterField
    },
    filterValue: {
      type: "string",
      displayName: "Filter value",
      description: "Value to filter by, should be of filter field type"
    },
    limit: {
      type: "number",
      displayName: "Limit",
      description: "Limit"
    },
    noAutoRepeat: {
      type: "boolean",
      displayName: "No auto-repeat",
      description: "Do not automatically repeat children for every entries.",
      defaultValue: false
    },
    noLayout: {
      type: "boolean",
      displayName: "No layout",
      description: "When set, ContentStack Fetcher will not layout its children; instead, the layout set on its parent element will be used. Useful if you want to set flex gap or control container tag type.",
      defaultValue: false
    }
  }
};
function ContentStackFetcher({
  contentType,
  filterField,
  filterValue,
  queryOperator,
  limit,
  noAutoRepeat,
  children,
  className,
  noLayout,
  setControlContextData
}) {
  var _a, _b;
  const creds = ensure((0, import_react.useContext)(CredentialsContext));
  const cacheKey = JSON.stringify({
    limit,
    contentType,
    filterField,
    filterValue,
    queryOperator,
    creds
  });
  const allContentTypes = (0, import_query.usePlasmicQueryData)(
    `${cacheKey}/contentTypes`,
    async () => {
      const resp = await fetch(
        "https://cdn.contentstack.io/v3/content_types?include_count=true&include_global_field_schema=true",
        {
          headers: {
            api_key: creds.apiKey,
            access_token: creds.accessToken
          }
        }
      );
      return resp.json();
    }
  );
  const contentTypes = (_a = allContentTypes.data) != null ? _a : [];
  const { data: entriesData } = (0, import_query.usePlasmicQueryData)(
    contentType ? `${cacheKey}/${contentType}/entries` : null,
    async () => {
      const url = `https://cdn.contentstack.io/v3/content_types/${contentType}/entries?environment=${creds.environment}`;
      let query;
      if (limit) {
        query = `${url}&limit=${limit}`;
      } else {
        query = url;
      }
      const resp = await fetch(query, {
        headers: {
          api_key: creds.apiKey,
          access_token: creds.accessToken
        }
      });
      return await resp.json();
    }
  );
  const { data: filteredData } = (0, import_query.usePlasmicQueryData)(
    contentType && filterField && filterValue && entriesData ? `${cacheKey}/${contentType}/filtered` : null,
    async () => {
      if (!contentType && !filterField && !filterValue && !entriesData && !contentTypes) {
        return null;
      }
      const matched = Object.values(entriesData).flatMap((model) => Array.isArray(model) ? model : [model]).map((item) => {
        const fields = Object.entries(item).find(
          (el) => el[0] === filterField
        );
        return fields;
      });
      let url;
      if (!queryOperator) {
        Object.values(matched).map((model) => Array.isArray(model) ? model : [model]).map((item) => {
          if (typeof item[1] === "number" && typeof item[1] !== "object") {
            url = `https://cdn.contentstack.io/v3/content_types/${contentType}/entries?environment=${creds.environment}&query={"${filterField}" : ${filterValue}}`;
          } else if (typeof item[1] !== "number" && typeof item[1] !== "object" && typeof item[1] === "string") {
            url = `https://cdn.contentstack.io/v3/content_types/${contentType}/entries?environment=${creds.environment}&query=${JSON.stringify({
              [filterField]: filterValue
            })}`;
          } else {
            url = "";
          }
        });
      } else if (queryOperator === "$ne" || queryOperator === "$regex") {
        Object.values(matched).map((model) => Array.isArray(model) ? model : [model]).map((item) => {
          if (typeof item[1] === "number" && typeof item[1] !== "object") {
            url = `https://cdn.contentstack.io/v3/content_types/${contentType}/entries?environment=${creds.environment}&query={"${filterField}":{"${queryOperator}":${filterValue}}}`;
          } else if (typeof item[1] !== "number" && typeof item[1] !== "object" && typeof item[1] === "string") {
            url = `https://cdn.contentstack.io/v3/content_types/${contentType}/entries?environment=${creds.environment}&query=${JSON.stringify({
              [filterField]: { [queryOperator]: filterValue }
            })}`;
          } else {
            url = "";
          }
        });
      } else {
        url = `https://cdn.contentstack.io/v3/content_types/${contentType}/entries?environment=${creds.environment}&query={"${filterField}":{"${queryOperator}" :${filterValue}}}`;
      }
      const resp = await fetch(url, {
        headers: {
          api_key: creds.apiKey,
          access_token: creds.accessToken
        }
      });
      return await resp.json();
    }
  );
  if (!contentTypes) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please configure the ContentStack credentials");
  }
  const types = Object.values(contentTypes).flatMap((model) => {
    return model;
  });
  setControlContextData == null ? void 0 : setControlContextData({
    types
  });
  if (!creds.apiKey || !creds.accessToken || !creds.environment) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a valid API Credentials: API Key, Access Token and Environment");
  }
  if (!entriesData) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify content type ");
  }
  const fieldsForFilter = Object.values(entriesData).flatMap((model) => Array.isArray(model) ? model : [model]).map((item) => {
    const fields = Object.keys(item).filter((field) => {
      const value = (0, import_dlv.default)(item, field);
      return typeof value !== "object" && field !== "images" && typeof value === "number" || typeof value === "string" && !value.match(
        /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?Z?/gm
      ) && !value.match(/^blt.*/);
    });
    return fields;
  });
  let operators;
  const matchedFields = Object.values(entriesData).flatMap((model) => Array.isArray(model) ? model : [model]).map((item) => {
    const fields = Object.entries(item).find((el) => el[0] === filterField);
    return fields;
  });
  Object.values(matchedFields).map((model) => Array.isArray(model) ? model : [model]).map((item) => {
    if (typeof item[1] === "number" && typeof item[1] !== "object") {
      operators = queryOperators;
    } else if (typeof item[1] !== "number" && typeof item[1] !== "object" && typeof item[1] === "string") {
      operators = [
        {
          value: "",
          label: "Is"
        },
        {
          value: "$ne",
          label: "Is not"
        },
        {
          value: "$regex",
          label: "Matches regex"
        }
      ];
    }
  });
  setControlContextData == null ? void 0 : setControlContextData({
    queryOptions: operators,
    types,
    filterFields: fieldsForFilter[0]
  });
  if (queryOperator && !filterValue && !filterField) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a Filter Field and a Filter Value");
  }
  if (!queryOperator && filterValue && !filterField) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a Query Operator and a Filter Field");
  }
  if (!queryOperator && !filterValue && filterField) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a Query Operator and a Filter Value");
  }
  if (queryOperator && filterValue && !filterField) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a Filter Field");
  }
  if (queryOperator && !filterValue && filterField) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a Filter Value");
  }
  const entries = Object.values(entriesData).flatMap(
    (item) => Array.isArray(item) ? item : [item]
  );
  let renderedData;
  if (filteredData) {
    const filtered = Object.values(filteredData).flatMap((model) => model).length;
    if (filtered === 0) {
      return /* @__PURE__ */ import_react.default.createElement("div", null, "No published entry found ");
    }
    const entries2 = Object.values(filteredData).flatMap(
      (model) => Array.isArray(model) ? model : [model]
    );
    renderedData = entries2 == null ? void 0 : entries2.map((item, index) => /* @__PURE__ */ import_react.default.createElement(
      import_host.DataProvider,
      {
        key: item._id,
        name: "contentstackItem",
        data: item,
        hidden: true
      },
      /* @__PURE__ */ import_react.default.createElement(import_host.DataProvider, { name: makeDataProviderName(contentType), data: item }, (0, import_host.repeatedElement)(index, children))
    ));
  } else {
    const entries2 = Object.values(entriesData).flatMap(
      (model) => Array.isArray(model) ? model : [model]
    );
    renderedData = entries2 == null ? void 0 : entries2.map((item, index) => /* @__PURE__ */ import_react.default.createElement(
      import_host.DataProvider,
      {
        key: item._id,
        name: "contentstackItem",
        data: item,
        hidden: true
      },
      /* @__PURE__ */ import_react.default.createElement(import_host.DataProvider, { name: makeDataProviderName(contentType), data: item }, (0, import_host.repeatedElement)(index, children))
    ));
  }
  return /* @__PURE__ */ import_react.default.createElement(import_host.DataProvider, { data: entries, name: "contentStackItems" }, noAutoRepeat ? children : /* @__PURE__ */ import_react.default.createElement(
    import_host.DataProvider,
    {
      name: "contentstackSchema",
      data: (_b = types == null ? void 0 : types.find((type) => type.uid === contentType)) == null ? void 0 : _b.schema,
      hidden: true
    },
    noLayout ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, " ", renderedData, " ") : /* @__PURE__ */ import_react.default.createElement("div", { className }, " ", renderedData, " ")
  ));
}
var ContentStackFieldMeta = {
  name: "ContentStackField",
  displayName: "ContentStack Field",
  importName: "ContentStackField",
  importPath: modulePath,
  props: {
    objectPath: {
      type: "dataSelector",
      data: (props, ctx) => {
        var _a;
        return (_a = ctx == null ? void 0 : ctx.data) != null ? _a : {};
      },
      displayName: "Field",
      description: "Field to be displayed."
    }
  }
};
function ContentStackField({
  objectPath,
  setControlContextData,
  ...rest
}) {
  var _a;
  const item = (0, import_host.useSelector)("contentstackItem");
  if (!item) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "ContentStackField must be used within a ContentStackFetcher ");
  }
  const schema = (0, import_host.useSelector)("contentstackSchema");
  setControlContextData == null ? void 0 : setControlContextData({
    data: item
  });
  if (!objectPath) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a valid path or select a field.");
  }
  const isRichText = () => {
    var _a2, _b;
    return (_b = (_a2 = schema == null ? void 0 : schema.find((field) => field.uid === (0, import_dlv.default)(objectPath, [0]))) == null ? void 0 : _a2.field_metadata) == null ? void 0 : _b.allow_rich_text;
  };
  const data = (0, import_dlv.default)(item, objectPath);
  if (typeof data === "object" && ((_a = data == null ? void 0 : data.content_type) == null ? void 0 : _a.startsWith("image"))) {
    return /* @__PURE__ */ import_react.default.createElement("img", { ...rest, src: data.url });
  } else if (!data || typeof data === "object") {
    return /* @__PURE__ */ import_react.default.createElement("div", { ...rest }, " Please specify a valid field.");
  } else if (isRichText()) {
    return /* @__PURE__ */ import_react.default.createElement("div", { ...rest, dangerouslySetInnerHTML: { __html: data } });
  } else {
    return /* @__PURE__ */ import_react.default.createElement("div", { ...rest }, " ", data, " ");
  }
}

// src/index.tsx
function registerAll(loader) {
  const _registerComponent = (Component, defaultMeta) => {
    if (loader) {
      loader.registerComponent(Component, defaultMeta);
    } else {
      (0, import_registerComponent.default)(Component, defaultMeta);
    }
  };
  if (loader) {
    loader.registerGlobalContext(
      ContentStackCredentialsProvider,
      ContentStackCredentialsProviderMeta
    );
  } else {
    (0, import_registerGlobalContext.default)(
      ContentStackCredentialsProvider,
      ContentStackCredentialsProviderMeta
    );
  }
  _registerComponent(ContentStackFetcher, ContentStackFetcherMeta);
  _registerComponent(ContentStackField, ContentStackFieldMeta);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ContentStackCredentialsProvider,
  ContentStackCredentialsProviderMeta,
  ContentStackFetcher,
  ContentStackFetcherMeta,
  ContentStackField,
  ContentStackFieldMeta,
  ensure,
  registerAll
});
