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
  ContentfulCredentialsProvider: () => ContentfulCredentialsProvider,
  ContentfulCredentialsProviderMeta: () => ContentfulCredentialsProviderMeta,
  ContentfulFetcher: () => ContentfulFetcher,
  ContentfulFetcherMeta: () => ContentfulFetcherMeta,
  ContentfulField: () => ContentfulField,
  ContentfulFieldMeta: () => ContentfulFieldMeta,
  ensure: () => ensure,
  registerAll: () => registerAll
});
module.exports = __toCommonJS(src_exports);
var import_registerComponent = __toESM(require("@plasmicapp/host/registerComponent"));
var import_registerGlobalContext = __toESM(require("@plasmicapp/host/registerGlobalContext"));

// src/contentful.tsx
var import_rich_text_html_renderer = require("@contentful/rich-text-html-renderer");
var import_host = require("@plasmicapp/host");
var import_query = require("@plasmicapp/query");
var import_change_case = require("change-case");
var import_dlv = __toESM(require("dlv"));
var import_react = __toESM(require("react"));

// src/utils.ts
var searchParameters = [
  {
    value: "[lt]",
    label: "Less than"
  },
  {
    value: "[lte]",
    label: "Less than or equal"
  },
  {
    value: "[gt]",
    label: "Greater than"
  },
  {
    value: "[gte]",
    label: "Greater than or equal "
  }
];
var uniq = (xs) => Array.from(new Set(xs));

// src/contentful.tsx
function ensure(x, msg) {
  if (x === null || x === void 0) {
    throw new Error(msg != null ? msg : `Value must not be undefined or null`);
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-contentful";
var makeDataProviderName = (contentType) => `currentContentful${(0, import_change_case.pascalCase)(contentType)}Item`;
var CredentialsContext = import_react.default.createContext(void 0);
var ContentfulCredentialsProviderMeta = {
  name: "Contentful CredentialsProvider",
  displayName: "Contentful Credentials Provider",
  description: "Any client requesting content from the CDA needs to provide an access token that has access to the environment you're requesting content from. Learn how to [get your API key](https://www.contentful.com/developers/docs/references/authentication/).",
  importName: "ContentfulCredentialsProvider",
  importPath: modulePath,
  props: {
    space: {
      type: "string",
      displayName: "Space",
      description: "Name of your space",
      defaultValue: "lmfbwqzbh93n"
    },
    accessToken: {
      type: "string",
      displayName: "Access Token ",
      description: "Access Token",
      defaultValue: "aWvf6oSLTuqxKCxSUpokajdQr84hGQFE6zoJG7DVVLg"
    },
    environment: {
      type: "string",
      displayName: "Environment",
      defaultValue: "master"
    }
  }
};
function ContentfulCredentialsProvider({
  accessToken,
  space,
  environment,
  children
}) {
  return /* @__PURE__ */ import_react.default.createElement(CredentialsContext.Provider, { value: { space, accessToken, environment } }, children);
}
var ContentfulFetcherMeta = {
  name: "ContentfulFetcher",
  displayName: "Contentful Fetcher",
  importName: "ContentfulFetcher",
  importPath: modulePath,
  providesData: true,
  description: "Fetches Contentful data and repeats content of children once for every row fetched. ",
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
          name: "ContentfulField"
        }
      }
    },
    contentType: {
      type: "choice",
      options: (props, ctx) => {
        var _a, _b;
        return (_b = (_a = ctx == null ? void 0 : ctx.types) == null ? void 0 : _a.map((type) => {
          var _a2;
          return {
            label: type == null ? void 0 : type.name,
            value: (_a2 = type == null ? void 0 : type.sys) == null ? void 0 : _a2.id
          };
        })) != null ? _b : [];
      },
      displayName: "Content type",
      description: "Content type to be queried."
    },
    filterField: {
      type: "choice",
      displayName: "Filter field",
      description: "Field (from Collection) to filter by.",
      options: (props, ctx) => {
        var _a;
        return (_a = ctx == null ? void 0 : ctx.fields) != null ? _a : [];
      },
      hidden: (props) => !props.contentType
    },
    searchParameter: {
      type: "choice",
      displayName: "Search Parameter",
      description: "Search Parameter to filter by (see Contentful Content Delivery API documentation for details).",
      options: (props, ctx) => {
        var _a;
        return (_a = ctx == null ? void 0 : ctx.queryOptions) != null ? _a : [];
      },
      hidden: (props) => !props.filterField
    },
    filterValue: {
      type: "string",
      displayName: "Filter value",
      description: "Value to filter by, should be of filter field type.",
      hidden: (props) => !props.searchParameter
    },
    order: {
      type: "choice",
      displayName: "Order",
      description: "Field that the entries should be ordered by.",
      options: (props, ctx) => {
        var _a;
        return [
          ...(_a = ctx == null ? void 0 : ctx.fields) != null ? _a : [],
          "sys.createdAt",
          "sys.updatedAt"
        ];
      },
      hidden: (props) => !props.contentType
    },
    reverseOrder: {
      type: "boolean",
      displayName: "Reverse order",
      description: "Reverse the order of the entries.",
      defaultValue: false,
      hidden: (props) => !props.order
    },
    limit: {
      type: "number",
      displayName: "Limit",
      description: "Limit the number of entries that are returned."
    },
    include: {
      type: "number",
      displayName: "Linked items depth",
      defaultValueHint: 1,
      description: "When you have related content (e.g. entries with links to image assets) it's possible to include both search results and related data in a single request. Using the include parameter, you can specify the number of levels to resolve.",
      max: 10,
      min: 0
    },
    noAutoRepeat: {
      type: "boolean",
      displayName: "No auto-repeat",
      description: "Do not automatically repeat children for every entry.",
      defaultValue: false
    },
    noLayout: {
      type: "boolean",
      displayName: "No layout",
      description: "When set, Contentful Fetcher will not layout its children; instead, the layout set on its parent element will be used. Useful if you want to set flex gap or control container tag type.",
      defaultValue: false
    }
  }
};
function ContentfulFetcher({
  filterField,
  filterValue,
  searchParameter,
  noAutoRepeat,
  contentType,
  children,
  className,
  order,
  reverseOrder,
  limit,
  include,
  noLayout,
  setControlContextData
}) {
  var _a, _b, _c, _d, _e, _f, _g;
  const creds = ensure(
    (0, import_react.useContext)(CredentialsContext),
    "Could not find context with current credentials"
  );
  const cacheKey = JSON.stringify({
    include,
    order,
    reverseOrder,
    limit,
    filterField,
    filterValue,
    searchParameter,
    creds
  });
  const baseUrl = "https://cdn.contentful.com";
  const { data: contentTypes } = (0, import_query.usePlasmicQueryData)(
    `${cacheKey}/contentTypes`,
    async () => {
      const resp = await fetch(
        `${baseUrl}/spaces/${creds.space}/environments/${creds.environment}/content_types?access_token=${creds.accessToken}`
      );
      return resp.json();
    }
  );
  setControlContextData == null ? void 0 : setControlContextData({
    types: (_a = contentTypes == null ? void 0 : contentTypes.items) != null ? _a : []
  });
  function setOrderField(searchParams) {
    if (order) {
      searchParams.set(
        "order",
        `${reverseOrder ? "-" : ""}${order.startsWith("sys.") ? order : `fields.${order}`}`
      );
    }
  }
  const { data: entriesData } = (0, import_query.usePlasmicQueryData)(
    contentType ? `${cacheKey}/${contentType}/entriesData` : null,
    async () => {
      const path = `/spaces/${creds.space}/environments/${creds.environment}/entries`;
      const searchParams = new URLSearchParams();
      searchParams.set("access_token", creds.accessToken);
      searchParams.set("content_type", contentType);
      if (limit) {
        searchParams.set("limit", limit.toString());
      }
      setOrderField(searchParams);
      if (include) {
        searchParams.set("include", include.toString());
      }
      const resp = await fetch(`${baseUrl}${path}?${searchParams.toString()}`);
      return resp.json();
    }
  );
  const { data: filteredData } = (0, import_query.usePlasmicQueryData)(
    contentType && filterField && filterValue ? `${cacheKey}/${contentType}/filteredData` : null,
    async () => {
      const path = `/spaces/${creds.space}/environments/${creds.environment}/entries`;
      const searchParams = new URLSearchParams();
      searchParams.set("access_token", creds.accessToken);
      searchParams.set("content_type", contentType);
      if (limit) {
        searchParams.set("limit", limit.toString());
      }
      setOrderField(searchParams);
      if (include) {
        searchParams.set("include", include.toString());
      }
      if (filterField && searchParameter && filterValue) {
        searchParams.set(
          `fields.${filterField}${searchParameter}`,
          filterValue.toString()
        );
      }
      const resp = await fetch(`${baseUrl}${path}?${searchParams.toString()}`);
      return resp.json();
    }
  );
  if (!creds.space || !creds.accessToken) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a valid API Credentials: Space, Access Token and Environment");
  }
  if (!contentTypes) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please configure the Contentful credentials");
  }
  if (!entriesData) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please select a content type");
  }
  const filterFields = entriesData == null ? void 0 : entriesData.items.flatMap((item) => {
    const fields = Object.keys(item.fields).filter((field) => {
      const value = (0, import_dlv.default)(item, field);
      return typeof value !== "object" && field !== "photos";
    });
    return fields;
  });
  let operators;
  const matchedFields = Object.values(entriesData.items).map((item) => {
    const fields = Object.entries(item.fields).find(
      (el) => el[0] === filterField
    );
    return fields;
  });
  Object.values(matchedFields).map((model) => Array.isArray(model) ? model : [model]).map((item) => {
    if (typeof item[1] === "number" && typeof item[1] !== "object") {
      operators = searchParameters;
    } else if (typeof item[1] !== "number" && typeof item[1] !== "object" && typeof item[1] === "string") {
      operators = [
        {
          value: "[match]",
          label: "Full text search"
        }
      ];
    }
  });
  setControlContextData == null ? void 0 : setControlContextData({
    queryOptions: operators != null ? operators : [],
    types: (_b = contentTypes == null ? void 0 : contentTypes.items) != null ? _b : [],
    fields: uniq(filterFields != null ? filterFields : [])
  });
  if (filterField) {
    if (!searchParameter) {
      return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a Search Parameter");
    }
    if (!filterValue) {
      return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a Filter value");
    }
  }
  function denormalizeData(data) {
    if (!(data == null ? void 0 : data.items) || !(data == null ? void 0 : data.includes)) {
      return data;
    }
    const entryMap = {};
    if (data.includes.Entry) {
      data.includes.Entry.forEach((entry) => {
        entryMap[entry.sys.id] = entry;
      });
    }
    const denormalizeField = (fieldValue) => {
      var _a2, _b2;
      if (Array.isArray(fieldValue)) {
        const updatedArray = fieldValue.map((arrayItem) => {
          return denormalizeField(arrayItem);
        });
        return updatedArray;
      } else if (fieldValue && typeof fieldValue === "object") {
        if (data.includes.Asset && "sys" in fieldValue && fieldValue.sys.linkType === "Asset") {
          const fieldId = fieldValue.sys.id;
          const asset = data.includes.Asset.find(
            (a) => a.sys.id === fieldId
          );
          if (asset) {
            fieldValue = {
              ...fieldValue,
              url: "https:" + ((_b2 = (_a2 = asset.fields) == null ? void 0 : _a2.file) == null ? void 0 : _b2.url)
            };
          } else {
            console.log(`Asset URL not found for ID: ${fieldId}`);
          }
        } else if (data.includes.Entry && "sys" in fieldValue && fieldValue.sys.linkType === "Entry") {
          const fieldId = fieldValue.sys.id;
          if (entryMap[fieldId]) {
            fieldValue = {
              ...fieldValue,
              fields: denormalizeItem(entryMap[fieldId]).fields
            };
          } else {
            console.log(`Entry not found for ID: ${fieldId}`);
          }
        }
        fieldValue = Object.entries(fieldValue).reduce((obj, [key, value]) => {
          if (key === "sys" || key === "fields") {
            obj[key] = value;
          } else {
            obj[key] = denormalizeField(value);
          }
          return obj;
        }, {});
      }
      return fieldValue;
    };
    const denormalizeItem = (item) => {
      const updatedFields = {};
      for (const fieldName in item.fields) {
        updatedFields[fieldName] = denormalizeField(item.fields[fieldName]);
      }
      return {
        ...item,
        fields: updatedFields != null ? updatedFields : void 0
      };
    };
    const itemsWithDenormalizedFields = data.items.map((item) => {
      return denormalizeItem(item);
    });
    return {
      ...data,
      items: itemsWithDenormalizedFields
    };
  }
  let renderedData;
  const fixedData = entriesData ? denormalizeData(entriesData) : void 0;
  if (filteredData) {
    if (((_c = filteredData == null ? void 0 : filteredData.items) == null ? void 0 : _c.length) === 0) {
      return /* @__PURE__ */ import_react.default.createElement("div", { className }, "No published entry found");
    }
    renderedData = noAutoRepeat ? children : (_e = (_d = denormalizeData(filteredData)) == null ? void 0 : _d.items) == null ? void 0 : _e.map(
      (item, index) => {
        var _a2;
        return /* @__PURE__ */ import_react.default.createElement(
          import_host.DataProvider,
          {
            key: (_a2 = item == null ? void 0 : item.sys) == null ? void 0 : _a2.id,
            name: "contentfulItem",
            data: item,
            hidden: true
          },
          /* @__PURE__ */ import_react.default.createElement(
            import_host.DataProvider,
            {
              name: makeDataProviderName(contentType),
              data: item
            },
            (0, import_host.repeatedElement)(index, children)
          )
        );
      }
    );
  } else {
    if (((_f = fixedData == null ? void 0 : fixedData.items) == null ? void 0 : _f.length) === 0) {
      return /* @__PURE__ */ import_react.default.createElement("div", { className }, contentType, " is empty");
    }
    renderedData = noAutoRepeat ? children : (_g = fixedData == null ? void 0 : fixedData.items) == null ? void 0 : _g.map((item, index) => {
      var _a2;
      return /* @__PURE__ */ import_react.default.createElement(
        import_host.DataProvider,
        {
          key: (_a2 = item == null ? void 0 : item.sys) == null ? void 0 : _a2.id,
          name: "contentfulItem",
          data: item,
          hidden: true
        },
        /* @__PURE__ */ import_react.default.createElement(import_host.DataProvider, { name: makeDataProviderName(contentType), data: item }, (0, import_host.repeatedElement)(index, children))
      );
    });
  }
  return /* @__PURE__ */ import_react.default.createElement(import_host.DataProvider, { name: "contentfulItems", data: fixedData == null ? void 0 : fixedData.items }, noLayout ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, " ", renderedData, " ") : /* @__PURE__ */ import_react.default.createElement("div", { className }, " ", renderedData, " "));
}
var ContentfulFieldMeta = {
  name: "ContentfulField",
  displayName: "Contentful Field",
  importName: "ContentfulField",
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
function ContentfulField({
  className,
  objectPath,
  setControlContextData
}) {
  var _a, _b;
  const item = (_a = (0, import_host.useSelector)("contentfulItem")) == null ? void 0 : _a.fields;
  if (!item) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "ContentfulField must be used within a ContentfulFetcher ");
  }
  setControlContextData == null ? void 0 : setControlContextData({
    data: item
  });
  if (!objectPath) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a valid path or select a field.");
  }
  const data = (0, import_dlv.default)(item, objectPath);
  if (typeof data === "object" && "nodeType" in data && data.nodeType === "document") {
    return /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className,
        dangerouslySetInnerHTML: { __html: (0, import_rich_text_html_renderer.documentToHtmlString)(data) }
      }
    );
  } else if (typeof data === "object" && ((_b = data.sys) == null ? void 0 : _b.linkType) === "Asset" && data.url) {
    return /* @__PURE__ */ import_react.default.createElement("img", { className, src: data.url });
  } else if (!data) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a valid field.");
  } else if (typeof data !== "object") {
    return /* @__PURE__ */ import_react.default.createElement("div", { className }, data);
  } else {
    return /* @__PURE__ */ import_react.default.createElement("div", { className }, data.toString());
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
      ContentfulCredentialsProvider,
      ContentfulCredentialsProviderMeta
    );
  } else {
    (0, import_registerGlobalContext.default)(
      ContentfulCredentialsProvider,
      ContentfulCredentialsProviderMeta
    );
  }
  _registerComponent(ContentfulFetcher, ContentfulFetcherMeta);
  _registerComponent(ContentfulField, ContentfulFieldMeta);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ContentfulCredentialsProvider,
  ContentfulCredentialsProviderMeta,
  ContentfulFetcher,
  ContentfulFetcherMeta,
  ContentfulField,
  ContentfulFieldMeta,
  ensure,
  registerAll
});
