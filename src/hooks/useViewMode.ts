import { useState } from "react";

type ViewMode = "card" | "table";

export const useViewMode = (initialMode: ViewMode = "card") => {
  const [viewMode, setViewMode] = useState<ViewMode>(initialMode);

  return {
    viewMode,
    setViewMode,
  };
};
