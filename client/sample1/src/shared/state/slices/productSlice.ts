import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
	id: string;
	name: string;
	price: number;
	stock?: number;
	availability?: boolean;
	featured?: boolean;
	rating?: number;
	category?: string; // category プロパティを追加
}

export interface ProductState {
	// ProductState の定義
	products: Product[];
}

const initialState: ProductState = {
	products: [],
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProduct(state, action: PayloadAction<Product>) {
			state.products.push(action.payload);
		},
		removeProduct(state, action: PayloadAction<string>) {
			state.products = state.products.filter((prod) => prod.id !== action.payload);
		},
		updateProductStock(state, action: PayloadAction<{ productId: string; stock: number }>) {
			const product = state.products.find((p) => p.id === action.payload.productId);
			if (product) {
				product.stock = action.payload.stock;
			}
		},
		updateProductPrice(state, action: PayloadAction<{ productId: string; price: number }>) {
			const product = state.products.find((p) => p.id === action.payload.productId);
			if (product) {
				product.price = action.payload.price;
			}
		},
		applyDiscountToProduct(state, action: PayloadAction<{ productId: string; discountRate: number }>) {
			const product = state.products.find((p) => p.id === action.payload.productId);
			if (product) {
				product.price = parseFloat((product.price * (1 - action.payload.discountRate / 100)).toFixed(2));
			}
		},
		updateProductAvailability(state, action: PayloadAction<{ productId: string; availability: boolean }>) {
			const product = state.products.find((p) => p.id === action.payload.productId);
			if (product) {
				product.availability = action.payload.availability;
			}
		},
		setProductFeatured(state, action: PayloadAction<{ productId: string; featured: boolean }>) {
			const product = state.products.find((p) => p.id === action.payload.productId);
			if (product) {
				product.featured = action.payload.featured;
			}
		},
		updateProductRating(state, action: PayloadAction<{ productId: string; rating: number }>) {
			const product = state.products.find((p) => p.id === action.payload.productId);
			if (product) {
				product.rating = action.payload.rating;
			}
		},
		bulkDiscountUpdate(state, action: PayloadAction<{ productId: string; discountPercent: number }[]>) {
			action.payload.forEach(({ productId, discountPercent }) => {
				const product = state.products.find((p) => p.id === productId);
				if (product) {
					product.price = parseFloat((product.price * (1 - discountPercent / 100)).toFixed(2));
				}
			});
		},
		searchProduct(state, action: PayloadAction<string>) {
			state.products = state.products.filter((product) =>
				product.name.toLowerCase().includes(action.payload.toLowerCase())
			);
		},
		filterProductsByCategory(state, action: PayloadAction<string>) {
			state.products = state.products.filter((product) => product.category === action.payload);
		},
		bulkUpdateProducts(state, action: PayloadAction<Partial<Product>[]>) {
			action.payload.forEach((update) => {
				const product = state.products.find((p) => p.id === update.id);
				if (product) {
					Object.assign(product, update);
				}
			});
		},
		bulkUpdateProductPrices(state, action: PayloadAction<{ productId: string; price: number }[]>) {
			action.payload.forEach(({ productId, price }) => {
				const product = state.products.find((p) => p.id === productId);
				if (product) {
					product.price = price;
				}
			});
		},
	},
});

export const {
	addProduct,
	removeProduct,
	updateProductStock,
	updateProductPrice,
	applyDiscountToProduct,
	updateProductAvailability,
	setProductFeatured,
	updateProductRating,
	bulkDiscountUpdate,
	searchProduct,
	filterProductsByCategory,
	bulkUpdateProducts,
	bulkUpdateProductPrices,
} = productSlice.actions;
export default productSlice.reducer;
