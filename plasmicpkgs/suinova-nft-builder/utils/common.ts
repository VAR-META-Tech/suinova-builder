export function minifyCss(input: string) {
    return input
      .replace(/\s{2,}|\n/g, "") //  Remove spaces
      .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/g, ""); // Remove comments.
  }
