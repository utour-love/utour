import type { Component } from "vue";
import type { FunctionalComponent } from "vue";

export default interface DropDownPropItem {
  index: number;
  name: string;
  href?: string;
  func?: Function;
  icon?: FunctionalComponent | Component;
  linkName?: string;
  count?: number;
}
