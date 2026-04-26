import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "car-showroom": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        companytoken: string;
      };
    }
  }
}

export {};
