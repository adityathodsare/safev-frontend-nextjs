"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "@/components/ui/PageLoader";

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const timeoutRef = useRef(null);

  const showLoader = () => {
    setIsLoading(true);

    // Safety timeout - hide loader after 5 seconds if it gets stuck
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  const hideLoader = () => {
    setIsLoading(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const navigateWithLoader = (router, path) => {
    showLoader();
    router.push(path);
  };

  // Hide loader when route changes
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      // Hide loader after a short delay to ensure page is loaded
      setTimeout(() => {
        hideLoader();
      }, 100);
    }
  }, [pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <NavigationContext.Provider
      value={{ isLoading, showLoader, hideLoader, navigateWithLoader }}
    >
      {isLoading && <PageLoader />}
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
