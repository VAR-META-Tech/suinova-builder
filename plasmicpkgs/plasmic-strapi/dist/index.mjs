// src/index.tsx
import registerComponent from "@plasmicapp/host/registerComponent";
import registerGlobalContext from "@plasmicapp/host/registerGlobalContext";

// src/StrapiCollection.tsx
import { DataProvider, repeatedElement } from "@plasmicapp/host";
import { usePlasmicQueryData } from "@plasmicapp/query";
import { pascalCase } from "change-case";
import get from "dlv";
import * as qs from "qs";
import React2 from "react";

// src/StrapiCredentialsProvider.tsx
import React, { useContext } from "react";

// src/utils.ts
var modulePath = "@plasmicpkgs/plasmic-strapi";
var queryParameters = [
  {
    value: "$eq",
    label: "Equal"
  },
  {
    value: "$ne",
    label: "Not equal"
  },
  {
    value: "$lt",
    label: "Less than"
  },
  {
    value: "$lte",
    label: "Less than or equal to"
  },
  {
    value: "$gt",
    label: "Greater than"
  },
  {
    value: "$gte",
    label: "Greater than or equal to"
  },
  {
    value: "$in",
    label: "Included in an array"
  },
  {
    value: "$notIn",
    label: "Not included in an array"
  },
  {
    value: "$contains",
    label: "Contains"
  },
  {
    value: "$notContains",
    label: "Does not contain"
  }
];
var uniq = (xs) => Array.from(new Set(xs));
var getAttributes = (item) => {
  if (!item) {
    return void 0;
  }
  if (item.attributes) {
    return item.attributes;
  }
  const { documentId: _documentId, locale: _locale, ...rest } = item;
  return rest;
};

// src/StrapiCredentialsProvider.tsx
var StrapiCredentialsContext = React.createContext(void 0);
function useStrapiCredentials() {
  const creds = useContext(StrapiCredentialsContext);
  if (!creds) {
    throw new Error("Missing StrapiCredentials");
  }
  return creds;
}
var strapiCredentialsProviderMeta = {
  name: "StrapiCredentialsProvider",
  displayName: "Strapi Credentials Provider",
  description: `[See tutorial video](https://www.youtube.com/watch?v=1SLoVY3hkQ4).

API token is needed only if data is not publicly readable.

Learn how to [get your API token](https://docs.strapi.io/user-docs/latest/settings/managing-global-settings.html#managing-api-tokens).`,
  importName: "StrapiCredentialsProvider",
  importPath: modulePath,
  props: {
    host: {
      type: "string",
      displayName: "Host",
      defaultValueHint: "https://strapi-app.plasmic.app",
      defaultValue: "https://strapi-app.plasmic.app",
      description: "Server where you application is hosted."
    },
    token: {
      type: "string",
      displayName: "API Token",
      description: "API Token (generated in http://yourhost/admin/settings/api-tokens) (or leave blank for unauthenticated usage)."
    }
  }
};
function StrapiCredentialsProvider({
  host,
  token,
  children
}) {
  host = host == null ? void 0 : host.replace(/\/+$/, "");
  return /* @__PURE__ */ React.createElement(StrapiCredentialsContext.Provider, { value: { host, token } }, children);
}

// src/StrapiCollection.tsx
var makeDataProviderName = (collection) => `currentStrapi${pascalCase(collection)}Item`;
var strapiCollectionMeta = {
  name: "StrapiCollection",
  displayName: "Strapi Collection",
  importName: "StrapiCollection",
  importPath: modulePath,
  providesData: true,
  description: "Fetches Strapi data of a given collection, and repeats `children` slot content for each row fetched. [See tutorial video](https://www.youtube.com/watch?v=1SLoVY3hkQ4).",
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
        children: {
          type: "component",
          name: "StrapiField"
        }
      }
    },
    name: {
      type: "string",
      displayName: "Name",
      description: "Name of the collection to be fetched.",
      defaultValueHint: "restaurants"
    },
    filterField: {
      type: "choice",
      displayName: "Filter field",
      description: "Field (from Collection) to filter by",
      options: (props, ctx) => {
        var _a;
        return (_a = ctx == null ? void 0 : ctx.strapiFields) != null ? _a : [];
      },
      hidden: (props, ctx) => !props.name
    },
    filterParameter: {
      type: "choice",
      displayName: "Filter Parameter",
      description: "Field Parameter filter by",
      options: (props, ctx) => {
        return queryParameters.map((item) => ({
          label: item == null ? void 0 : item.label,
          value: item == null ? void 0 : item.value
        }));
      },
      hidden: (props, ctx) => !props.filterField
    },
    filterValue: {
      type: "string",
      displayName: "Filter value",
      description: "Value to filter by, should be of filter field type",
      hidden: (props, ctx) => !props.filterParameter
    },
    limit: {
      type: "number",
      displayName: "Limit",
      description: "Maximum n umber of collections to fetch (0 for unlimited)."
    },
    noLayout: {
      type: "boolean",
      displayName: "No layout",
      description: "When set, Strapi Collection will not layout its children; instead, the layout set on its parent element will be used. Useful if you want to set flex gap or control container tag type.",
      defaultValue: false
    },
    noAutoRepeat: {
      type: "boolean",
      displayName: "No auto-repeat",
      description: "Do not automatically repeat children for every category.",
      defaultValue: false
    }
  }
};
function StrapiCollection({
  name,
  filterParameter,
  filterValue,
  filterField,
  limit,
  children,
  className,
  noLayout,
  noAutoRepeat,
  setControlContextData
}) {
  const creds = useStrapiCredentials();
  if (!creds.host) {
    return /* @__PURE__ */ React2.createElement("div", null, "Please specify a host.");
  }
  const query = creds.host + "/api/" + name;
  const cacheKey = JSON.stringify({
    creds,
    name,
    filterField,
    filterValue,
    filterParameter
  });
  const data = usePlasmicQueryData(cacheKey, async () => {
    if (!query) {
      return null;
    }
    const requestInit = { method: "GET" };
    if (creds.token) {
      requestInit.headers = { Authorization: "Bearer " + creds.token };
    }
    const queryParams = qs.stringify({
      ...filterField && filterParameter && filterValue ? {
        filters: {
          [filterField]: {
            [filterParameter]: filterValue
          }
        }
      } : {},
      populate: "*"
    });
    const resp = await fetch(`${query}?${queryParams}`, requestInit);
    return resp.json();
  });
  if (!(data == null ? void 0 : data.data)) {
    return /* @__PURE__ */ React2.createElement("div", null, "Please configure the Strapi provider with a valid host and token.");
  }
  if (!get(data.data, ["data"])) {
    return /* @__PURE__ */ React2.createElement("div", null, "Please specify a valid collection.");
  }
  const collectionData = get(data.data, ["data"]);
  const filterFields = collectionData.flatMap((item) => {
    const attributes = getAttributes(item);
    const displayableFields = Object.keys(attributes).filter((field) => {
      var _a;
      const value = attributes[field];
      const maybeMime = (_a = getAttributes(value == null ? void 0 : value.data)) == null ? void 0 : _a.mime;
      return typeof value !== "object" || typeof maybeMime === "string" && maybeMime.startsWith("image");
    });
    return displayableFields;
  });
  setControlContextData == null ? void 0 : setControlContextData({
    strapiFields: uniq(filterFields != null ? filterFields : [])
  });
  if (filterParameter && !filterValue && !filterField) {
    return /* @__PURE__ */ React2.createElement("div", null, "Please specify a Filter Field and a Filter Value");
  }
  if (!filterParameter && filterValue && !filterField) {
    return /* @__PURE__ */ React2.createElement("div", null, "Please specify a Filter Parameter and a Filter Field");
  }
  if (!filterParameter && !filterValue && filterField) {
    return /* @__PURE__ */ React2.createElement("div", null, "Please specify a Filter Parameter and a Filter Value");
  }
  if (filterParameter && filterValue && !filterField) {
    return /* @__PURE__ */ React2.createElement("div", null, "Please specify a Filter Field");
  }
  if (!filterParameter && filterValue && filterField) {
    return /* @__PURE__ */ React2.createElement("div", null, "Please specify a Filter Parameter");
  }
  if (filterParameter && !filterValue && filterField) {
    return /* @__PURE__ */ React2.createElement("div", null, "Please specify a Filter Value");
  }
  const collection = limit > 0 ? collectionData.slice(0, limit) : collectionData;
  if (collection.length === 0) {
    return /* @__PURE__ */ React2.createElement("div", null, "No collection found ");
  }
  const repElements = noAutoRepeat ? children : collection.map((item, index) => {
    var _a;
    return /* @__PURE__ */ React2.createElement(
      DataProvider,
      {
        key: (_a = item.documentId) != null ? _a : item.id,
        name: "strapiItem",
        data: item,
        hidden: true
      },
      /* @__PURE__ */ React2.createElement(DataProvider, { name: makeDataProviderName(name), data: item }, repeatedElement(index, children))
    );
  });
  return /* @__PURE__ */ React2.createElement(DataProvider, { name: "strapiItems", data: collection }, noLayout ? /* @__PURE__ */ React2.createElement(React2.Fragment, null, " ", repElements, " ") : /* @__PURE__ */ React2.createElement("div", { className }, " ", repElements, " "));
}

// src/StrapiField.tsx
import { useSelector } from "@plasmicapp/host";
import get2 from "dlv";
import React3 from "react";
var strapiFieldMeta = {
  name: "StrapiField",
  displayName: "Strapi Field",
  importName: "StrapiField",
  importPath: modulePath,
  props: {
    path: {
      type: "choice",
      options: (props, ctx) => {
        var _a;
        return (_a = ctx == null ? void 0 : ctx.fields) != null ? _a : [];
      },
      displayName: "Field",
      description: "Field name"
    }
  }
};
function StrapiField({
  className,
  path,
  setControlContextData
}) {
  var _a;
  const item = useSelector("strapiItem");
  if (!item) {
    return /* @__PURE__ */ React3.createElement("div", null, "StrapiField must be used within a StrapiCollection");
  }
  const attributes = getAttributes(item);
  const displayableFields = Object.keys(attributes).filter((field) => {
    var _a2;
    const value = attributes[field];
    const maybeMime2 = (_a2 = getAttributes(value == null ? void 0 : value.data)) == null ? void 0 : _a2.mime;
    return typeof value !== "object" || typeof maybeMime2 === "string" && maybeMime2.startsWith("image");
  });
  setControlContextData == null ? void 0 : setControlContextData({
    fields: displayableFields,
    isImage: false
  });
  if (!path) {
    return /* @__PURE__ */ React3.createElement("div", null, "StrapiField must specify a field name.");
  }
  const data = get2(attributes, [path]);
  const maybeMime = (_a = getAttributes(data == null ? void 0 : data.data)) == null ? void 0 : _a.mime;
  setControlContextData == null ? void 0 : setControlContextData({
    fields: displayableFields,
    isImage: typeof maybeMime === "string" && maybeMime.startsWith("image")
  });
  if (!data) {
    return /* @__PURE__ */ React3.createElement("div", null, "Please specify a valid field name.");
  } else if (typeof maybeMime === "string" && maybeMime.startsWith("image")) {
    const creds = useStrapiCredentials();
    const attrs = getAttributes(data.data);
    const img_url = attrs.url.startsWith("http") ? attrs.url : creds.host + attrs.url;
    const img_width = attrs.width;
    const img_height = attrs.height;
    return /* @__PURE__ */ React3.createElement(
      "img",
      {
        className,
        src: img_url,
        width: 300,
        height: 300 * img_height / img_width
      }
    );
  } else {
    return /* @__PURE__ */ React3.createElement("div", { className }, data);
  }
}

// src/index.tsx
function registerAll(loader) {
  const _registerComponent = (Component, defaultMeta) => {
    if (loader) {
      loader.registerComponent(Component, defaultMeta);
    } else {
      registerComponent(Component, defaultMeta);
    }
  };
  if (loader) {
    loader.registerGlobalContext(
      StrapiCredentialsProvider,
      strapiCredentialsProviderMeta
    );
  } else {
    registerGlobalContext(
      StrapiCredentialsProvider,
      strapiCredentialsProviderMeta
    );
  }
  _registerComponent(StrapiCollection, strapiCollectionMeta);
  _registerComponent(StrapiField, strapiFieldMeta);
}
export {
  StrapiCollection,
  StrapiCredentialsProvider,
  StrapiField,
  registerAll,
  strapiCollectionMeta,
  strapiCredentialsProviderMeta,
  strapiFieldMeta
};
