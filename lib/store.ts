import { create, StateCreator } from "zustand";
import Product from "./types/productType";
import { persist } from 'zustand/middleware'

type CartItem = {
  size: string;
  quantity: number;
  cartItemId: string;
} & Product;

type State = {
  cart: CartItem[];
  isHydrated: boolean;
};

type Actions = {
  addItem: (product: Product, size: string, quantity: number) => void;
  removeItem: (cartItemId: string) => void;
  handleAddQuantity: (id: string) => void;
  handleSubQuantity: (id: string) => void;
};

const createCartStore: StateCreator<State & Actions> = (set) => ({
  cart: [],
  isHydrated: false,
  addItem: (product, size, quantity) => {
    const cartItemId = `${product.id}-${size}`;
    set((state) => {
      const existingItem = state.cart.find((item) => item.cartItemId === cartItemId);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.cartItemId === cartItemId
              ? {
                  ...item,
                  quantity:
                    item.quantity < 9
                      ? item.quantity + quantity > 9
                        ? 9
                        : item.quantity + quantity
                      : 9,
                }
              : item
          ),
        };
      }
      return {
        cart: [
          ...state.cart,
          { ...product, size, quantity, cartItemId },
        ],
      };
    });
  },

  removeItem: (cartItemId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.cartItemId !== cartItemId),
    }));
  },

  handleAddQuantity: (id) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.cartItemId === id
          ? { ...item, quantity: item.quantity + (item.quantity < 9 ? 1 : 0) }
          : item
      ),
    }));
  },

  handleSubQuantity: (id) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.cartItemId === id
          ? { ...item, quantity: item.quantity - (item.quantity === 1 ? 0 : 1) }
          : item
      ),
    }));
  },
});

export const useCartStore = create<State & Actions, [["zustand/persist", State & Actions]]>(
  persist(createCartStore, {
    name: "ascendcart",
    onRehydrateStorage() {
      return (state) => {
        if (state) {
          state.isHydrated = true;
        }
      };
    },
  })
);

