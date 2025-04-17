import { useEffect, useState } from "react";
import { GET_CURRENT_TAB_ID } from "./variables/actions";


export function useGetCurrentTab() {
    const [tabId, setTabId] = useState<chrome.tabs.Tab>();
    const getCurrentTabId = () => {
      chrome.runtime.sendMessage({ actionName: GET_CURRENT_TAB_ID }, setTabId);
    };
  
    useEffect(() => {
      getCurrentTabId();
    }, []);
  
    return tabId;
  }
  