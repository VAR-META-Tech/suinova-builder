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
  SanityCredentialsProvider: () => SanityCredentialsProvider,
  SanityFetcher: () => SanityFetcher,
  SanityField: () => SanityField,
  ensure: () => ensure,
  registerAll: () => registerAll,
  sanityCredentialsProviderMeta: () => sanityCredentialsProviderMeta,
  sanityFetcherMeta: () => sanityFetcherMeta,
  sanityFieldMeta: () => sanityFieldMeta
});
module.exports = __toCommonJS(src_exports);
var import_registerComponent = __toESM(require("@plasmicapp/host/registerComponent"));
var import_registerGlobalContext = __toESM(require("@plasmicapp/host/registerGlobalContext"));

// src/sanity.tsx
var import_host = require("@plasmicapp/host");
var import_query = require("@plasmicapp/query");
var import_client = require("@sanity/client");
var import_image_url = __toESM(require("@sanity/image-url"));
var import_change_case = require("change-case");
var import_dlv = __toESM(require("dlv"));
var import_react = __toESM(require("react"));

// src/utils.ts
var filterParameters = [
  {
    value: "==",
    label: "Is"
  },
  {
    value: "!=",
    label: "Is not"
  },
  {
    value: ">",
    label: "Greater than"
  },
  {
    value: "<",
    label: "Less than"
  },
  {
    value: "<=",
    label: "Less than or equal"
  },
  {
    value: ">=",
    label: "Greater than or equal "
  }
];

// src/sanity.tsx
function ensure(x) {
  if (x === null || x === void 0) {
    throw new Error(`Value must not be undefined or null`);
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-sanity-io";
var makeDataProviderName = (docType) => `currentSanity${(0, import_change_case.pascalCase)(docType)}Item`;
function makeSanityClient(creds) {
  const sanity = (0, import_client.createClient)({
    projectId: creds.projectId,
    dataset: creds.dataset,
    apiVersion: creds.apiVersion ? creds.apiVersion : "v1",
    token: creds.token,
    useCdn: creds.useCdn
  });
  return sanity;
}
var CredentialsContext = import_react.default.createContext(void 0);
var sanityCredentialsProviderMeta = {
  name: "SanityCredentialsProvider",
  displayName: "Sanity Credentials Provider",
  description: `Get your project ID, dataset, and token [here](https://www.sanity.io/manage).

Add 'https://host.plasmicdev.com' (or your app host origin) as an authorized host in the CORS origins section of your Sanity project.

[See tutorial video](https://www.youtube.com/watch?v=dLeu7I4RsYg).`,
  importName: "SanityCredentialsProvider",
  importPath: modulePath,
  props: {
    projectId: {
      type: "string",
      displayName: "Project ID",
      defaultValueHint: "b2gfz67v",
      defaultValue: "b2gfz67v",
      description: "The ID of the project to use."
    },
    dataset: {
      type: "string",
      displayName: "Dataset",
      defaultValueHint: "production",
      defaultValue: "production",
      description: "The dataset to use."
    },
    apiVersion: {
      type: "string",
      displayName: "API Version",
      defaultValueHint: "v1",
      description: "The API version to use (if not set, 'v1' will be used) - see https://www.sanity.io/docs/js-client#specifying-api-version."
    },
    token: {
      type: "string",
      displayName: "Token",
      description: "The token to use (or leave blank for unauthenticated usage) - you can create tokens in the API section of your project (i.e. https://www.sanity.io/manage/personal/project/PROJECT_ID/api#tokens)."
    },
    useCdn: {
      type: "boolean",
      displayName: "Use CDN?",
      defaultValueHint: false,
      description: "Whether you want to use CDN ('false' if you want to ensure fresh data)."
    }
  }
};
function SanityCredentialsProvider({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn,
  children
}) {
  return /* @__PURE__ */ import_react.default.createElement(
    CredentialsContext.Provider,
    {
      value: { projectId, dataset, apiVersion, token, useCdn }
    },
    children
  );
}
var sanityFetcherMeta = {
  name: "SanityFetcher",
  displayName: "Sanity Fetcher",
  importName: "SanityFetcher",
  importPath: modulePath,
  providesData: true,
  description: `Fetches Sanity data of a given collection, and repeats \`children\` slot content for each row fetched.

[See tutorial video](https://www.youtube.com/watch?v=1SLoVY3hkQ4) and [GROQ cheat sheet](https://www.sanity.io/docs/query-cheat-sheet).`,
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
          name: "SanityField"
        }
      }
    },
    groq: {
      type: "string",
      displayName: "GROQ",
      description: "Query in GROQ.",
      defaultValueHint: "*[_type == 'movie']",
      // Hide this if there's no groq, AND there's docType, so we're in
      // "docType" mode
      hidden: (props) => !props.groq && !!props.docType
    },
    docType: {
      type: "choice",
      options: (props, ctx) => {
        var _a;
        return (_a = ctx == null ? void 0 : ctx.docTypes) != null ? _a : [];
      },
      displayName: "Document type",
      description: "Document type to be queried (*[_type == DOC_TYPE] shortcut).",
      // Hide this if groq is specified, as groq always takes precedence
      hidden: (props) => !!props.groq
    },
    filterField: {
      type: "choice",
      displayName: "Filter field",
      description: "Field (from Collection) to filter by",
      options: (props, ctx) => {
        var _a;
        return (_a = ctx == null ? void 0 : ctx.sanityFields) != null ? _a : [];
      },
      // Hide this if there's groq (so we're just using groq), or if there's
      // no docType selected yet
      hidden: (props) => !!props.groq || !props.docType
    },
    filterParameter: {
      type: "choice",
      displayName: "Filter Operation",
      description: "Filter Option to filter by. Read more (https://www.sanity.io/docs/groq-operators#3b7211e976f6)",
      options: (props, ctx) => {
        var _a;
        return (_a = ctx == null ? void 0 : ctx.queryOptions) != null ? _a : [];
      },
      // Hide if in groq mode, or if no filter field is selected yet
      hidden: (props) => !!props.groq || !props.filterField
    },
    filterValue: {
      type: "string",
      displayName: "Filter value",
      description: "Value to filter by, should be of filter field type",
      // Hide if in groq mode, or if no filter field is selected yet
      hidden: (props) => !!props.groq || !props.filterField
    },
    limit: {
      type: "string",
      displayName: "Limit",
      description: "Limit",
      // Hide if in groq mode
      hidden: (props) => !!props.groq || !props.docType
    },
    noAutoRepeat: {
      type: "boolean",
      displayName: "No auto-repeat",
      description: "Do not automatically repeat children for every category.",
      defaultValue: false
    },
    noLayout: {
      type: "boolean",
      displayName: "No layout",
      description: "When set, Sanity Fetcher will not layout its children; instead, the layout set on its parent element will be used. Useful if you want to set flex gap or control container tag type.",
      defaultValue: false
    }
  }
};
function SanityFetcher({
  groq,
  docType,
  filterField,
  filterValue,
  filterParameter,
  limit,
  noAutoRepeat,
  children,
  className,
  noLayout,
  setControlContextData
}) {
  var _a;
  const projectIdRegex = new RegExp(/^[-a-z0-9]+$/i);
  const datasetRegex = new RegExp(
    /^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/
  );
  const dateRegex = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
  const creds = ensure((0, import_react.useContext)(CredentialsContext));
  if (!creds.projectId || !projectIdRegex.test(creds.projectId)) {
    return /* @__PURE__ */ import_react.default.createElement("div", { className }, "Please specify a valid projectId, it can only contain only a-z, 0-9 and dashes.");
  } else if (!creds.dataset || !datasetRegex.test(creds.dataset)) {
    return /* @__PURE__ */ import_react.default.createElement("div", { className }, "Please specify a valid dataset, they can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters.");
  } else if (creds.apiVersion) {
    if (creds.apiVersion !== "v1" && creds.apiVersion !== "1" && creds.apiVersion !== "X") {
      const date = new Date(creds.apiVersion);
      if (!(dateRegex.test(creds.apiVersion) && date instanceof Date && date.getTime() > 0)) {
        return /* @__PURE__ */ import_react.default.createElement("div", { className }, "Please specify a valid API version, expected `v1`, `1` or date in format `YYYY-MM-DD`.");
      }
    }
  }
  const filterUniqueDocTypes = (records) => records.map((record) => record._type).reduce((acc, type) => {
    if (!acc.includes(type)) {
      acc.push(type);
    }
    return acc;
  }, []);
  const allDataTypes = (0, import_query.usePlasmicQueryData)(
    JSON.stringify(creds) + "/SANITY_DOCTYPES",
    async () => {
      const sanity2 = makeSanityClient(creds);
      const resp = await sanity2.fetch("*{_type}").then(filterUniqueDocTypes);
      return resp;
    }
  );
  const docTypes = (_a = allDataTypes.data) != null ? _a : false;
  const hasFilter = !!docType && !!filterField && !!filterParameter && !!filterValue;
  const generateUnfilteredGroq = () => {
    if (groq) {
      console.log("ORIG GROQ", groq);
      return groq;
    } else if (docType) {
      let query = `*[_type=='${docType}']`;
      if (hasFilter) {
        query += `[0...10]`;
      } else if (limit) {
        query += `[0...${limit}]`;
      }
      console.log("UNFILTERED GROQ", query);
      return query;
    } else {
      return null;
    }
  };
  const unfilteredQuery = generateUnfilteredGroq();
  const sanity = makeSanityClient(creds);
  const { data: unfilteredData } = (0, import_query.usePlasmicQueryData)(
    unfilteredQuery ? JSON.stringify({ fullQuery: unfilteredQuery, creds }) : null,
    async () => {
      return sanity.fetch(unfilteredQuery);
    }
  );
  const generateFilteredQuery = () => {
    if (!hasFilter || !unfilteredData) {
      return null;
    }
    const fieldValues = Object.values(unfilteredData).flatMap((model) => Array.isArray(model) ? model : [model]).map((item) => {
      const field = Object.entries(item).find((el) => el[0] === filterField);
      return field == null ? void 0 : field[1];
    });
    let query = `*[_type=='${docType}'`;
    if (fieldValues.some((v) => typeof v === "string")) {
      query = `${query} && ${filterField} ${filterParameter} "${filterValue}"`;
    } else {
      query = `${query} && ${filterField} ${filterParameter} ${filterValue}`;
    }
    if (limit) {
      query = `${query}][0...${limit}]`;
    } else {
      query = `${query}]`;
    }
    console.log("FILTERED GROQ", query);
    return query;
  };
  const filteredQuery = generateFilteredQuery();
  const { data: filteredData } = (0, import_query.usePlasmicQueryData)(
    filteredQuery ? JSON.stringify({ filteredQuery, creds }) : null,
    async () => {
      const resp = await sanity.fetch(filteredQuery);
      return resp;
    }
  );
  if (!docTypes) {
    return /* @__PURE__ */ import_react.default.createElement("div", { className }, "Please configure the Sanity provider with a valid projectId, dataset, and token (if necessary). Don't forget to add 'https://host.plasmicdev.com' as an authorized host on the CORS origins section of your project.");
  }
  setControlContextData == null ? void 0 : setControlContextData({
    docTypes
  });
  if (!groq && !docType) {
    return /* @__PURE__ */ import_react.default.createElement("div", { className }, "Please specify a valid GROQ query or select a Document type.");
  }
  if (!unfilteredData) {
    return /* @__PURE__ */ import_react.default.createElement("div", { className }, "Loading...");
  }
  let sanityFields = unfilteredData.map((item) => {
    const fields = Object.keys(item).filter((field) => {
      const value = (0, import_dlv.default)(item, field);
      return typeof value !== "object" && value._type !== "image" && typeof value === "number" || typeof value === "string" && !value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/);
    });
    return fields;
  });
  let operators;
  const matchedFields = Object.values(unfilteredData).flatMap((model) => Array.isArray(model) ? model : [model]).map((item) => {
    const fields = Object.entries(item).find((el) => el[0] === filterField);
    return fields;
  });
  Object.values(matchedFields).map((model) => Array.isArray(model) ? model : [model]).map((item) => {
    if (typeof item[1] === "number" && typeof item[1] !== "object") {
      operators = filterParameters;
    } else if (typeof item[1] !== "number" && typeof item[1] !== "object" && typeof item[1] === "string") {
      operators = [
        {
          value: "==",
          label: "Equals"
        },
        {
          value: "!=",
          label: "Not equals"
        }
      ];
    }
  });
  setControlContextData == null ? void 0 : setControlContextData({
    queryOptions: operators,
    docTypes,
    sanityFields: sanityFields[0]
  });
  if (hasFilter) {
    if (!filterParameter) {
      return /* @__PURE__ */ import_react.default.createElement("div", { className }, "Please specify a filter operation");
    }
    if (!filterValue) {
      return /* @__PURE__ */ import_react.default.createElement("div", { className }, "Please specify a filter value");
    }
  }
  if (hasFilter && !filteredData) {
    return /* @__PURE__ */ import_react.default.createElement("div", { className }, "Loading...");
  }
  const resultData = hasFilter ? filteredData : unfilteredData;
  const imageBuilder = (0, import_image_url.default)(sanity);
  const repElements = noAutoRepeat ? children : resultData.map((item, index) => {
    Object.keys(item).forEach((field) => {
      if (item[field] != null && item[field]._type === "image") {
        item[field].imgUrl = imageBuilder.image(item[field]).ignoreImageParams().toString();
      }
    });
    return docType ? /* @__PURE__ */ import_react.default.createElement(
      import_host.DataProvider,
      {
        key: item._id,
        name: "sanityItem",
        data: item,
        hidden: true
      },
      /* @__PURE__ */ import_react.default.createElement(import_host.DataProvider, { name: makeDataProviderName(docType), data: item }, (0, import_host.repeatedElement)(index, children))
    ) : /* @__PURE__ */ import_react.default.createElement(import_host.DataProvider, { key: item._id, name: "sanityItem", data: item }, (0, import_host.repeatedElement)(index, children));
  });
  return /* @__PURE__ */ import_react.default.createElement(import_host.DataProvider, { name: "sanityItems", data: resultData }, noLayout ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, " ", repElements, " ") : /* @__PURE__ */ import_react.default.createElement("div", { className }, " ", repElements, " "));
}
var sanityFieldMeta = {
  name: "SanityField",
  displayName: "Sanity Field",
  importName: "SanityField",
  importPath: modulePath,
  props: {
    path: {
      type: "string",
      displayName: "Path",
      description: "Field path - see https://www.sanity.io/docs/ids.",
      defaultValueHint: "castMembers.0._key"
    },
    field: {
      type: "choice",
      options: (props, ctx) => {
        var _a;
        return (_a = ctx == null ? void 0 : ctx.fields) != null ? _a : [];
      },
      displayName: "Field",
      description: "Field to be displayed."
    }
  }
};
function SanityField({
  className,
  path,
  field,
  setControlContextData
}) {
  const item = (0, import_host.useSelector)("sanityItem");
  if (!item) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "SanityField must be used within a SanityFetcher");
  }
  const displayableFields = Object.keys(item).filter((f) => {
    const value = (0, import_dlv.default)(item, f);
    return typeof value !== "object" || value._type === "image";
  });
  setControlContextData == null ? void 0 : setControlContextData({
    fields: displayableFields,
    isImage: false
  });
  if (!path && !field) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a valid path or select a field.");
  }
  if (!path) {
    path = field;
  }
  const data = (0, import_dlv.default)(item, path);
  setControlContextData == null ? void 0 : setControlContextData({
    fields: displayableFields,
    isImage: (data == null ? void 0 : data._type) == "image"
  });
  if (!data) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify a valid path.");
  } else if ((data == null ? void 0 : data._type) === "image") {
    return /* @__PURE__ */ import_react.default.createElement("img", { className, src: data.imgUrl });
  } else {
    return /* @__PURE__ */ import_react.default.createElement("div", { className }, data);
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
    loader.registerGlobalContext(SanityCredentialsProvider, sanityCredentialsProviderMeta);
  } else {
    (0, import_registerGlobalContext.default)(SanityCredentialsProvider, sanityCredentialsProviderMeta);
  }
  _registerComponent(SanityFetcher, sanityFetcherMeta);
  _registerComponent(SanityField, sanityFieldMeta);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SanityCredentialsProvider,
  SanityFetcher,
  SanityField,
  ensure,
  registerAll,
  sanityCredentialsProviderMeta,
  sanityFetcherMeta,
  sanityFieldMeta
});
