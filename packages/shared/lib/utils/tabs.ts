export const initializeTabs = async (): Promise<chrome.tabs.Tab[]> => {
  return chrome.tabs.query({ url: '<all_urls>' });
};
