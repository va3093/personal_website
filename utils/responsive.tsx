import React, { ReactNode, ReactElement } from "react";
import { useMediaQuery } from "react-responsive";

export type DeviceType =
  | "mobile"
  | "tablet"
  | "mobile-or-tablet"
  | "desktop"
  | "desktop-wide"
  | "desktop-or-desktop-wide"
  | "not-mobile";

export const useIsDesktop = (): boolean => {
  return useMediaQuery({ minWidth: 992, maxWidth: 1824 });
};
export const useIsDesktopWide = (): boolean => {
  return useMediaQuery({ minWidth: 1824 });
};
export const useIsDesktopOrDesktopWide = (): boolean => {
  return useMediaQuery({ minWidth: 992 });
};
export const useIsTablet = (): boolean => {
  return useMediaQuery({ minWidth: 768, maxWidth: 991 });
};
export const useIsMobile = (): boolean => {
  return useMediaQuery({ maxWidth: 767 });
};
export const useIsMobileOrTablet = (): boolean => {
  return useMediaQuery({ maxWidth: 991 });
};
export const useIsNotMobile = (): boolean => {
  return useMediaQuery({ minWidth: 768 });
};

export const useDeviceTypes = (): DeviceType[] => {
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const isMobileOrTablet = useIsMobileOrTablet();
  const isMobile = useIsMobile();
  const isNotMobile = useIsNotMobile();
  const isDesktopWide = useIsDesktopWide();
  const isDesktopOrDesktopWide = useIsDesktopOrDesktopWide();
  const deviceTypes: DeviceType[] = [];
  if (isMobile) {
    deviceTypes.push("mobile");
  }
  if (isMobileOrTablet) {
    deviceTypes.push("mobile-or-tablet");
  }
  if (isTablet) {
    deviceTypes.push("tablet");
  }
  if (isDesktop) {
    deviceTypes.push("desktop");
  }
  if (isDesktopWide) {
    deviceTypes.push("desktop-wide");
  }
  if (isDesktopOrDesktopWide) {
    deviceTypes.push("desktop-or-desktop-wide");
  }
  if (isNotMobile) {
    deviceTypes.push("not-mobile");
  }
  return deviceTypes;
};

export const Desktop = ({
  children,
}: {
  children: ReactElement;
}): ReactElement | null => {
  const isDesktop = useIsDesktop();
  return isDesktop ? children : null;
};

export const AtLeastDesktop = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  return useDeviceTypes().includes("desktop-or-desktop-wide") ? (
    children
  ) : (
    <></>
  );
};

export const Tablet = ({
  children,
}: {
  children: ReactElement;
}): ReactElement | null => {
  const isTablet = useIsTablet();
  return isTablet ? children : null;
};
export const MobileOrTablet = ({
  children,
}: {
  children: ReactElement;
}): ReactElement | null => {
  const isMobileOrTablet = useIsMobileOrTablet();
  return isMobileOrTablet ? children : null;
};
export const Mobile = ({
  children,
}: {
  children: ReactElement;
}): ReactElement | null => {
  const isMobile = useIsMobile();
  return isMobile ? children : null;
};
export const Default = ({
  children,
}: {
  children: ReactElement;
}): ReactElement | null => {
  const isNotMobile = useIsNotMobile();
  return isNotMobile ? children : null;
};

export const ResponsiveContext = React.createContext<DeviceType[]>(["desktop"]);

export const ResponsiveProvider = ResponsiveContext.Provider;
export const ResponsiveConsumer = ResponsiveContext.Consumer;
