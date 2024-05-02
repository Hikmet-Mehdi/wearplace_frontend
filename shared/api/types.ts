/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreatePropertyTypeDto {
  /** Наименование */
  name: string;
  /** Описание */
  description: string;
  /** Уникальный ключ на латинице */
  slug: string;
  /**
   * Используется для создания sku
   * @default false
   */
  isSku: boolean;
}

export interface PropertyTypeEntity {
  /** Уникальный идентификатор */
  id: string;
  /** Статус активности */
  isActive: boolean;
  /**
   * Дата и время создания
   * @format date-time
   */
  createdAt: string;
  /**
   * Дата и время последнего обновления
   * @format date-time
   */
  updatedAt: string;
  /** Наименование */
  name: string;
  /** Описание */
  description: string;
  /** Уникальный ключ на латинице */
  slug: string;
  /**
   * Используется для создания sku
   * @default false
   */
  isSku: boolean;
}

export interface PropertyTypeFilterDto {
  id?: string[];
  isActive?: boolean;
  slugs?: string[];
}

export interface PropertyTypeCollectionResult {
  /** Общее количество */
  total: number;
  /** Номер страницы */
  page: number;
  /** Кол-во объектов на одной странице */
  pageSize: number;
  data: PropertyTypeEntity[];
}

export interface UpdatePropertyTypeDto {
  /** Наименование */
  name?: string;
  /** Описание */
  description?: string;
  /** Уникальный ключ на латинице */
  slug?: string;
  /**
   * Используется для создания sku
   * @default false
   */
  isSku?: boolean;
}

export interface DeleteResult {
  /** Уникальный идентификатор */
  id: string;
  /** Сообщение об удалении */
  message?: string | null;
}

export interface CreatePropertyDto {
  /** Наименование */
  name: string;
  /** Описание */
  description: string;
  /** Уникальный ключ на латинице */
  slug: string;
  propertyTypeSlug: string;
}

export interface PropertyEntity {
  /** Уникальный идентификатор */
  id: string;
  /** Статус активности */
  isActive: boolean;
  /**
   * Дата и время создания
   * @format date-time
   */
  createdAt: string;
  /**
   * Дата и время последнего обновления
   * @format date-time
   */
  updatedAt: string;
  /** Наименование */
  name: string;
  /** Описание */
  description: string;
  /** Уникальный ключ на латинице */
  slug: string;
  /** Тип свойства */
  propertyTypeId: string;
}

export interface PropertyFilterDto {
  id?: string[];
  isActive?: boolean;
  slugs?: string[];
  propertyTypeSlugs?: string[];
}

export interface PropertyCollectionResult {
  /** Общее количество */
  total: number;
  /** Номер страницы */
  page: number;
  /** Кол-во объектов на одной странице */
  pageSize: number;
  data: PropertyEntity[];
}

export interface UpdatePropertyDto {
  /** Наименование */
  name?: string;
  /** Описание */
  description?: string;
  /** Уникальный ключ на латинице */
  slug?: string;
  propertyTypeSlug?: string;
}

export type String = object;

export interface ProductCollectionResult {
  /** Общее количество */
  total: number;
  /** Номер страницы */
  page: number;
  /** Кол-во объектов на одной странице */
  pageSize: number;
  data: PropertyEntity[];
}

export interface CreateProductDto {
  /** Статус активности */
  isActive: boolean;
  /**
   * name
   * Наименование товара
   */
  title: string;
  description: string;
  slug: string;
}

export interface ProductStockKeepingUnit {
  /** Уникальный идентификатор */
  id: string;
  /** Статус активности */
  isActive: boolean;
  /**
   * Дата и время создания
   * @format date-time
   */
  createdAt: string;
  /**
   * Дата и время последнего обновления
   * @format date-time
   */
  updatedAt: string;
  /** Идентификатор товара */
  productId: string;
  /**
   * Количество sku
   * @default 0
   */
  count: number;
}

export interface ProductEntity {
  /** Уникальный идентификатор */
  id: string;
  /** Статус активности */
  isActive: boolean;
  /**
   * Дата и время создания
   * @format date-time
   */
  createdAt: string;
  /**
   * Дата и время последнего обновления
   * @format date-time
   */
  updatedAt: string;
  /**
   * name
   * Наименование товара
   */
  title: string;
  description: string;
  slug: string;
  /** Торговые предложения (sku) */
  sku: ProductStockKeepingUnit[];
}

export interface UpdateProductDto {
  /** Статус активности */
  isActive?: boolean;
  /**
   * name
   * Наименование товара
   */
  title?: string;
  description?: string;
  slug?: string;
}

export interface PropertyWhereUniqueDto {
  /** Уникальный идентификатор */
  id: string;
}

export interface CreateProductStockKeepingUnitDto {
  /** Идентификатор товара */
  productId: string;
  /**
   * Количество sku
   * @default 0
   */
  count: number;
  properties: PropertyWhereUniqueDto;
}

export interface UpdateProductStockKeepingUnitDto {
  /** Идентификатор товара */
  productId?: string;
  /**
   * Количество sku
   * @default 0
   */
  count?: number;
  properties?: PropertyWhereUniqueDto;
}
