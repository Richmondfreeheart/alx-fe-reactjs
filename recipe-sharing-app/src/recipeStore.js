// src/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Add recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // Update recipe
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((fid) => fid !== id), // cleanup favorites too
    })),

  // Add to favorites
  addFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites
        : [...state.favorites, id],
    })),

  // Remove from favorites
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((fid) => fid !== id),
    })),

  // Generate recommendations (mock logic)
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (r) => state.favorites.includes(r.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
