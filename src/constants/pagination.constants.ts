export const PAGINATION_CONSTANTS = {
  DEFAULT_PAGE_LIMIT: 10,
  MAX_PAGE_LIMIT: 100,
  PER_PAGE_OPTIONS: [10, 50, 100],
};

export const SORTING_PARAMS = {
  DIRECTION: 'sort_dir',
  FIELD: 'sort',
} as const;

export const SORT_DIRECTION = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

export const PARAMS_CONSTANT = {
  PAGE: 'page',
  PER_PAGE: 'per_page',
  SEARCH: 'q',
  STATUS: 'status',
  LOCATION: 'location_ids',
  ORDER_INVOICE_LOCATION: 'location_names',
  CATEGORY: 'category_slugs',
  AVAILABILITY: 'availability',
  SORT: 'sort',
  SORT_DIR: 'sort_dir',
  MIN_PRICE: 'min_price',
  MAX_PRICE: 'max_price',
  FEATURED: 'is_featured',
  CREATED_AT: 'created_at',
  PRICE: 'price',
  TITLE: 'title',
  QUERY: 'q',
  ORDER_BY: 'order_by',
  ORDER_BY_USER_NAMES: 'order_by_user_names',
  LETTER: 'letter',
  IS_LARGE: 'is_large',
  TOP_SELLING: 'top_selling',
  CART_ID: 'cartId',
};

export const PARAMS_CONSTANT_FILTER = {
  CATEGORY: PARAMS_CONSTANT.CATEGORY + '[]',
};