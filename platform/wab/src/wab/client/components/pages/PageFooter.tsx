import * as React from "react";

export function PageFooter() {
  return (
    <div className={"LoginForm__Footer"}>
      <div className={"LoginForm__FooterCopy"}>
        Copyright © {new Date().getFullYear()} SuiNova Team.
      </div>
    </div>
  );
}
