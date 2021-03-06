import { State } from './state';
import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from './reducer';
import { Product } from 'shared-models/products/product.model';
import { AdminFeatureNames } from 'shared-models/ngrx-store/feature-names';

const getIsLoading = (state: State): boolean => state.isLoading;
const getIsSaving = (state: State): boolean => state.isSaving;
const getIsDeleting = (state: State): boolean => state.isDeleting;
const getIsTogglingActive = (state: State): boolean => state.isTogglingActive;
const getIsCloningProduct = (state: State): boolean => state.isCloningProduct;
const getLoadError = (state: State): any => state.loadError;
const getSaveError = (state: State): boolean => state.saveError;
const getDeleteError = (state: State): boolean => state.deleteError;
const getAltEnvOpError = (state: State): boolean => state.altEnvOpError;
const getProductsLoaded = (state: State): boolean => state.productsLoaded;

export const selectProductState: MemoizedSelector<object, State>
= createFeatureSelector<State>(AdminFeatureNames.PRODUCTS);

export const selectAllProducts: (state: object) => Product[] = createSelector(
  selectProductState,
  fromProducts.selectAll
);

export const selectProductById: (productId: string) => MemoizedSelector<object, Product>
= (productId: string) => createSelector(
  selectProductState,
  productState => productState.entities[productId]
);

export const selectLoadError: MemoizedSelector<object, any> = createSelector(
  selectProductState,
  getLoadError
);

export const selectSaveError: MemoizedSelector<object, any> = createSelector(
  selectProductState,
  getSaveError
);

export const selectDeleteError: MemoizedSelector<object, any> = createSelector(
  selectProductState,
  getDeleteError
);

export const selectAltEnvOpError: MemoizedSelector<object, any> = createSelector(
  selectProductState,
  getAltEnvOpError
);

export const selectIsLoading: MemoizedSelector<object, boolean>
= createSelector(selectProductState, getIsLoading);

export const selectIsSaving: MemoizedSelector<object, boolean>
= createSelector(selectProductState, getIsSaving);

export const selectIsDeleting: MemoizedSelector<object, boolean>
= createSelector(selectProductState, getIsDeleting);

export const selectIsTogglingActive: MemoizedSelector<object, boolean>
= createSelector(selectProductState, getIsTogglingActive);

export const selectIsCloningProduct: MemoizedSelector<object, boolean>
= createSelector(selectProductState, getIsCloningProduct);

export const selectProductsLoaded: MemoizedSelector<object, boolean>
= createSelector(selectProductState, getProductsLoaded);
