import { ComponentProps } from "react";

import { AvatarImage } from "@/components/ui/Avatar";

interface ThemeAwareAvatarImageProps
  extends Omit<ComponentProps<typeof AvatarImage>, "src"> {
  lightSrc: string;
  darkSrc: string;
}

export function ThemeAwareAvatarImage({
  darkSrc,
  lightSrc,
  alt,
  ...rest
}: ThemeAwareAvatarImageProps) {
  // Always use dark theme avatar
  return <AvatarImage {...rest} alt={alt} src={darkSrc} />;
}
