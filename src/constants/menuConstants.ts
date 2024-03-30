import { menuItemsType } from "@/types/menuTypes";

export const HOME_NAME: string = "Home";
export const HOME_LINK: string = "/";

export const POSTS_NAME: string = "Posts";
export const POSTS_LINK: string = "posts";

export const EVENTS_NAME: string = "Events";
export const EVENTS_LINK: string = "events";

export const menuItems: menuItemsType[] = [
  {
    name: HOME_NAME,
    href: HOME_LINK,
  },
  {
    name: POSTS_NAME,
    href: POSTS_LINK,
  },
  {
    name: EVENTS_NAME,
    href: EVENTS_LINK,
  },
];
