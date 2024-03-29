/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  RouterLinkPropsTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    'root': RouteRecordInfo<'root', '/', Record<never, never>, Record<never, never>>,
    '$error': RouteRecordInfo<'$error', '/:error(.*)', { error: ParamValue<true> }, { error: ParamValue<false> }>,
    'dashboard': RouteRecordInfo<'dashboard', '/dashboard', Record<never, never>, Record<never, never>>,
    'finance-category-create': RouteRecordInfo<'finance-category-create', '/finance/category/Create', Record<never, never>, Record<never, never>>,
    'finance-category-edit': RouteRecordInfo<'finance-category-edit', '/finance/category/Edit', Record<never, never>, Record<never, never>>,
    'finance-category-list': RouteRecordInfo<'finance-category-list', '/finance/category/List', Record<never, never>, Record<never, never>>,
    'finance-category-view': RouteRecordInfo<'finance-category-view', '/finance/category/View', Record<never, never>, Record<never, never>>,
    'finance-category': RouteRecordInfo<'finance-category', '/finance/Category', Record<never, never>, Record<never, never>>,
    'finance-expense': RouteRecordInfo<'finance-expense', '/finance/expense', Record<never, never>, Record<never, never>>,
    'finance-expense-create': RouteRecordInfo<'finance-expense-create', '/finance/expense/Create', Record<never, never>, Record<never, never>>,
    'finance-expense-edit': RouteRecordInfo<'finance-expense-edit', '/finance/expense/Edit', Record<never, never>, Record<never, never>>,
    'finance-expense-list': RouteRecordInfo<'finance-expense-list', '/finance/expense/List', Record<never, never>, Record<never, never>>,
    'finance-expense-view': RouteRecordInfo<'finance-expense-view', '/finance/expense/View', Record<never, never>, Record<never, never>>,
    'inventory-add-product': RouteRecordInfo<'inventory-add-product', '/inventory/AddProduct', Record<never, never>, Record<never, never>>,
    'inventory-all-products': RouteRecordInfo<'inventory-all-products', '/inventory/AllProducts', Record<never, never>, Record<never, never>>,
    'inventory-category-list': RouteRecordInfo<'inventory-category-list', '/inventory/category/List', Record<never, never>, Record<never, never>>,
    'inventory-category': RouteRecordInfo<'inventory-category', '/inventory/Category', Record<never, never>, Record<never, never>>,
    'inventory-dropdown': RouteRecordInfo<'inventory-dropdown', '/inventory/Dropdown', Record<never, never>, Record<never, never>>,
    'inventory-product-list': RouteRecordInfo<'inventory-product-list', '/inventory/product/List', Record<never, never>, Record<never, never>>,
    'inventory-unit-list': RouteRecordInfo<'inventory-unit-list', '/inventory/unit/List', Record<never, never>, Record<never, never>>,
    'login': RouteRecordInfo<'login', '/login', Record<never, never>, Record<never, never>>,
    'purchase-order-create': RouteRecordInfo<'purchase-order-create', '/purchase/order/Create', Record<never, never>, Record<never, never>>,
    'purchase-order-edit': RouteRecordInfo<'purchase-order-edit', '/purchase/order/Edit', Record<never, never>, Record<never, never>>,
    'purchase-order-list': RouteRecordInfo<'purchase-order-list', '/purchase/order/List', Record<never, never>, Record<never, never>>,
    'purchase-order-view': RouteRecordInfo<'purchase-order-view', '/purchase/order/View', Record<never, never>, Record<never, never>>,
    'purchase-order': RouteRecordInfo<'purchase-order', '/purchase/Order', Record<never, never>, Record<never, never>>,
    'purchase-order-detail-id': RouteRecordInfo<'purchase-order-detail-id', '/purchase/OrderDetail:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'purchase-return-create': RouteRecordInfo<'purchase-return-create', '/purchase/return/Create', Record<never, never>, Record<never, never>>,
    'purchase-return-edit': RouteRecordInfo<'purchase-return-edit', '/purchase/return/Edit', Record<never, never>, Record<never, never>>,
    'purchase-return-list': RouteRecordInfo<'purchase-return-list', '/purchase/return/List', Record<never, never>, Record<never, never>>,
    'purchase-return-view': RouteRecordInfo<'purchase-return-view', '/purchase/return/View', Record<never, never>, Record<never, never>>,
    'purchase-return': RouteRecordInfo<'purchase-return', '/purchase/Return', Record<never, never>, Record<never, never>>,
    'purchase-return-detail-id': RouteRecordInfo<'purchase-return-detail-id', '/purchase/ReturnDetail:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'purchase-supplier': RouteRecordInfo<'purchase-supplier', '/purchase/Supplier', Record<never, never>, Record<never, never>>,
    'purchase-supplier-detail-id': RouteRecordInfo<'purchase-supplier-detail-id', '/purchase/SupplierDetail:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'purchase-unit-create': RouteRecordInfo<'purchase-unit-create', '/purchase/unit/Create', Record<never, never>, Record<never, never>>,
    'purchase-unit-edit': RouteRecordInfo<'purchase-unit-edit', '/purchase/unit/Edit', Record<never, never>, Record<never, never>>,
    'purchase-unit-list': RouteRecordInfo<'purchase-unit-list', '/purchase/unit/List', Record<never, never>, Record<never, never>>,
    'purchase-unit-view': RouteRecordInfo<'purchase-unit-view', '/purchase/unit/View', Record<never, never>, Record<never, never>>,
    'reports-expense': RouteRecordInfo<'reports-expense', '/reports/Expense', Record<never, never>, Record<never, never>>,
    'reports-purchase': RouteRecordInfo<'reports-purchase', '/reports/Purchase', Record<never, never>, Record<never, never>>,
    'reports-purchase-return': RouteRecordInfo<'reports-purchase-return', '/reports/PurchaseReturn', Record<never, never>, Record<never, never>>,
    'reports-sale': RouteRecordInfo<'reports-sale', '/reports/Sale', Record<never, never>, Record<never, never>>,
    'reports-sale-return': RouteRecordInfo<'reports-sale-return', '/reports/SaleReturn', Record<never, never>, Record<never, never>>,
    'sale-customer': RouteRecordInfo<'sale-customer', '/sale/Customer', Record<never, never>, Record<never, never>>,
    'sale-customer-detail-id': RouteRecordInfo<'sale-customer-detail-id', '/sale/CustomerDetail:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'sale-order-create': RouteRecordInfo<'sale-order-create', '/sale/order/Create', Record<never, never>, Record<never, never>>,
    'sale-order-edit': RouteRecordInfo<'sale-order-edit', '/sale/order/Edit', Record<never, never>, Record<never, never>>,
    'sale-order-list': RouteRecordInfo<'sale-order-list', '/sale/order/List', Record<never, never>, Record<never, never>>,
    'sale-order-view': RouteRecordInfo<'sale-order-view', '/sale/order/View', Record<never, never>, Record<never, never>>,
    'sale-order': RouteRecordInfo<'sale-order', '/sale/Order', Record<never, never>, Record<never, never>>,
    'sale-order-detail-id': RouteRecordInfo<'sale-order-detail-id', '/sale/OrderDetail:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'sale-return-create': RouteRecordInfo<'sale-return-create', '/sale/return/Create', Record<never, never>, Record<never, never>>,
    'sale-return-edit': RouteRecordInfo<'sale-return-edit', '/sale/return/Edit', Record<never, never>, Record<never, never>>,
    'sale-return-list': RouteRecordInfo<'sale-return-list', '/sale/return/List', Record<never, never>, Record<never, never>>,
    'sale-return-view': RouteRecordInfo<'sale-return-view', '/sale/return/View', Record<never, never>, Record<never, never>>,
    'sale-return': RouteRecordInfo<'sale-return', '/sale/Return', Record<never, never>, Record<never, never>>,
    'sale-return-detail-id': RouteRecordInfo<'sale-return-detail-id', '/sale/ReturnDetail:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'sale-unit-create': RouteRecordInfo<'sale-unit-create', '/sale/unit/Create', Record<never, never>, Record<never, never>>,
    'sale-unit-edit': RouteRecordInfo<'sale-unit-edit', '/sale/unit/Edit', Record<never, never>, Record<never, never>>,
    'sale-unit-list': RouteRecordInfo<'sale-unit-list', '/sale/unit/List', Record<never, never>, Record<never, never>>,
    'sale-unit-view': RouteRecordInfo<'sale-unit-view', '/sale/unit/View', Record<never, never>, Record<never, never>>,
    'setting-profile': RouteRecordInfo<'setting-profile', '/setting/Profile', Record<never, never>, Record<never, never>>,
    'user-role': RouteRecordInfo<'user-role', '/user/Role', Record<never, never>, Record<never, never>>,
    'user-user': RouteRecordInfo<'user-user', '/user/User', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>
  export const RouterLinkProps: RouterLinkPropsTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
