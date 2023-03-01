import { fetchSectionsJs } from "./fetchSections";
import React, {useEffect, useRef, useState} from "react";

import type {SectionProps} from "../types/SectionTypes";

const useIsMounted = () => {
  const ref = useRef(false);
  useEffect(() => {
    ref.current = true;
    return () => {
      ref.current = false;
    };
  }, []);
  return () => ref.current;
};
export const SectionLoader: React.FunctionComponent<SectionProps> = props => {
  const baseUrl = "https://app-sections-test.azurewebsites.net";
  const [isSectionsLoaded, setIsSectionsLoaded] = useState(false);

  const isMounted = useIsMounted();
  useEffect(() => {
    fetchSectionsJs(`${baseUrl}/bundle.js`).then(() => {
      if (isMounted()) {
        setIsSectionsLoaded(true);
      }
    });
  }, []);

  if (!isSectionsLoaded || !window.Section) {
    return null;
  }
  // eslint-disable-next-line react/jsx-no-undef
  return <window.Section {...props} />;
};
