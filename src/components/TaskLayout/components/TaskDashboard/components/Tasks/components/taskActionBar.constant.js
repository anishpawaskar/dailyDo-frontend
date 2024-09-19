import { GoSun } from "react-icons/go";
import { FiSunrise } from "react-icons/fi";
import { IoCalendarClearOutline, IoCalendarOutline } from "react-icons/io5";
import { TbFlag3Filled } from "react-icons/tb";
import { LuListTree } from "react-icons/lu";

export const DATE_ACTIONS = [
  {
    id: 1,
    name: "Today",
    icon: GoSun,
  },
  {
    id: 2,
    name: "Tomorrow",
    icon: FiSunrise,
  },
  {
    id: 3,
    name: "Next Week",
    icon: IoCalendarClearOutline,
  },
  {
    id: 4,
    name: "Custom",
    icon: IoCalendarOutline,
  },
];

export const PRIORITY_ACTIONS = [
  {
    id: 1,
    level: "HIGH",
    icon: TbFlag3Filled,
    color: "#D52B24",
  },
  {
    id: 2,
    level: "MEDIUM",
    icon: TbFlag3Filled,
    color: "#FAA80C",
  },
  {
    id: 3,
    level: "LOW",
    icon: TbFlag3Filled,
    color: "#4772fa",
  },
  {
    id: 4,
    level: "NONE",
    icon: TbFlag3Filled,
    color: "#191919",
  },
];
