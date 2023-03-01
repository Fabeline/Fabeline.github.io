import React from "react";
import ReactDOM from "react-dom";
import type {SectionProps} from "../types/SectionTypes";

const SECTIONS_SCRIPT_ID = "sections-script";

const SECTIONS_LOADED_EVENT = "gyldendal-sections-loaded";

declare global {
  interface Window {
    Section?: React.FunctionComponent<SectionProps>;
    React: any;
    ReactDOM: any;
  }
}

export function fetchSectionsJs(bundleUrl: string) {
  return new Promise<void>(resolve => {
    // Need to assign React and ReactDOM to window, as sections are loaded as UMD modules.
    if (!window.React) {
      window.React = React;
    }
    if (!window.ReactDOM) {
      window.ReactDOM = ReactDOM;
    }
    if (!document.getElementById(SECTIONS_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.src = bundleUrl;
      script.id = SECTIONS_SCRIPT_ID;
      document.body.appendChild(script);
    }
    if (window.Section) {
      resolve();
    } else {
      const sectionsLoadedEventHandler = () => {
        if (window.Section) {
          resolve();
        }
        window.removeEventListener(SECTIONS_LOADED_EVENT, sectionsLoadedEventHandler);
      };
      window.addEventListener(SECTIONS_LOADED_EVENT, sectionsLoadedEventHandler);
    }
  });
}
