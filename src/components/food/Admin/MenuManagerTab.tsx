"use client";

import React, { useState } from "react";
import { MenuItem, MenuCategory, MenuItemModifierGroup, MenuItemOption } from "@/lib/food/foodData";
import { uploadImageWithFallback } from "@/lib/food/uploadHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit, faUpload, faUtensils, faFire, faBolt, faSpinner, faTimes, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
  categories: MenuCategory[];
  items: MenuItem[];
  onSaveCategories: (updated: MenuCategory[]) => void;
  onSaveItems: (updated: MenuItem[]) => void;
  onSaveAll: () => void;
  isSaving: boolean;
}

export const MenuManagerTab: React.FC<Props> = ({
  categories,
  items,
  onSaveCategories,
  onSaveItems,
  onSaveAll,
  isSaving
}) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("all");
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCatName, setNewCatName] = useState("");

  // Dish Editing state
  const [editingDish, setEditingDish] = useState<Partial<MenuItem> | null>(null);
  const [uploadingDishPhoto, setUploadingDishPhoto] = useState(false);

  // Category Handlers
  const handleAddCategory = () => {
    if (!newCatName.trim()) return;
    const newCat: MenuCategory = {
      id: `cat-${Date.now()}`,
      venueId: "venue-slug",
      name: newCatName.trim(),
      sortOrder: categories.length + 1
    };
    onSaveCategories([...categories, newCat]);
    setNewCatName("");
    setShowCategoryModal(false);
  };

  const handleDeleteCategory = (catId: string) => {
    if (confirm("Удалить категорию? Все блюда в ней останутся.")) {
      onSaveCategories(categories.filter((c) => c.id !== catId));
    }
  };

  // Dish Handlers
  const handleOpenNewDish = () => {
    setEditingDish({
      id: `dish-${Date.now()}`,
      venueId: "venue-slug",
      categoryId: categories[0]?.id || "",
      name: "",
      description: "",
      price: 500,
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
      isBundle: false,
      isHit: false,
      modifiers: []
    });
  };

  const handleDishPhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingDish) return;
    setUploadingDishPhoto(true);
    try {
      const url = await uploadImageWithFallback(file, "dishes");
      setEditingDish({ ...editingDish, imageUrl: url });
    } catch (err) {
      alert("Ошибка при загрузке фото блюда");
    } finally {
      setUploadingDishPhoto(false);
    }
  };

  const handleSaveDish = () => {
    if (!editingDish || !editingDish.name || !editingDish.price) {
      alert("Заполните название и цену блюда");
      return;
    }

    const existingIdx = items.findIndex((i) => i.id === editingDish.id);
    if (existingIdx > -1) {
      const updated = [...items];
      updated[existingIdx] = editingDish as MenuItem;
      onSaveItems(updated);
    } else {
      onSaveItems([...items, editingDish as MenuItem]);
    }
    setEditingDish(null);
  };

  const handleDeleteDish = (dishId: string) => {
    if (confirm("Удалить это блюдо из меню?")) {
      onSaveItems(items.filter((i) => i.id !== dishId));
    }
  };

  const filteredItems = activeCategoryFilter === "all"
    ? items
    : items.filter((i) => i.categoryId === activeCategoryFilter);

  return (
    <div className="space-y-8 text-white">
      {/* 📁 Категории меню */}
      <div className="bg-[#1E2024] p-6 rounded-2xl border border-white/10 space-y-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h3 className="text-xl font-bold text-[#00FF66] flex items-center gap-2">
            <FontAwesomeIcon icon={faUtensils} /> Категории Меню ({categories.length})
          </h3>
          <button
            onClick={() => setShowCategoryModal(true)}
            className="bg-[#00FF66]/20 hover:bg-[#00FF66] text-[#00FF66] hover:text-black font-bold text-xs px-4 py-2 rounded-xl border border-[#00FF66]/40 transition-all flex items-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faPlus} /> Добавить категорию
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveCategoryFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategoryFilter === "all"
                ? "bg-[#00FF66] text-black"
                : "bg-black/50 text-white/70 hover:text-white border border-white/10"
            }`}
          >
            Все ({items.length})
          </button>
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center gap-1">
              <button
                onClick={() => setActiveCategoryFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategoryFilter === cat.id
                    ? "bg-[#00FF66] text-black"
                    : "bg-black/50 text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {cat.name}
              </button>
              <button
                onClick={() => handleDeleteCategory(cat.id)}
                className="text-white/40 hover:text-[#EA4335] text-xs px-1"
                title="Удалить категорию"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 🍔 Блюда меню */}
      <div className="bg-[#1E2024] p-6 rounded-2xl border border-white/10 space-y-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h3 className="text-xl font-bold text-[#00FF66] flex items-center gap-2">
            🍕 Позиции меню ({filteredItems.length})
          </h3>
          <button
            onClick={handleOpenNewDish}
            className="bg-[#00FF66] hover:bg-[#10B981] text-black font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faPlus} /> Добавить блюдо
          </button>
        </div>

        {/* Сетка блюд */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((dish) => {
            const catName = categories.find((c) => c.id === dish.categoryId)?.name || "Категория";
            return (
              <div
                key={dish.id}
                className="bg-black/60 rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between p-4 relative group"
              >
                <div className="space-y-3">
                  <div className="w-full h-40 rounded-xl bg-black overflow-hidden relative border border-white/10">
                    <img src={dish.imageUrl} alt={dish.name} className="w-full h-full object-cover" />
                    {dish.isBundle && (
                      <span className="absolute top-2 left-2 bg-[#FF385C] text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded-md flex items-center gap-1 shadow">
                        <FontAwesomeIcon icon={faBolt} /> Бандл
                      </span>
                    )}
                    {dish.isHit && (
                      <span className="absolute top-2 right-2 bg-[#F59E0B] text-black font-bold text-[10px] uppercase px-2 py-0.5 rounded-md flex items-center gap-1 shadow">
                        <FontAwesomeIcon icon={faFire} /> Хит
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-[#00FF66] bg-[#00FF66]/10 px-2 py-0.5 rounded border border-[#00FF66]/30 uppercase">
                      {catName}
                    </span>
                    <h4 className="font-bold text-white text-base mt-1 line-clamp-1">{dish.name}</h4>
                    <p className="text-xs text-white/60 line-clamp-2 mt-1">{dish.description}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-3">
                  <span className="text-lg font-black text-[#00FF66] font-mono">{dish.price} ₽</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingDish(dish)}
                      className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-xl text-xs transition-all"
                      title="Редактировать"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      onClick={() => handleDeleteDish(dish.id)}
                      className="bg-[#EA4335]/20 hover:bg-[#EA4335] text-[#EA4335] hover:text-white p-2 rounded-xl text-xs transition-all"
                      title="Удалить"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🟢 Кнопка глобального сохранения */}
      <div className="flex justify-end pt-4">
        <button
          onClick={onSaveAll}
          disabled={isSaving}
          className="bg-[#00FF66] hover:bg-[#10B981] text-black font-black text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-[0_0_25px_rgba(0,255,102,0.4)] transition-all flex items-center gap-2 cursor-pointer"
        >
          {isSaving ? <FontAwesomeIcon icon={faSpinner} spin /> : "Сохранить изменения меню"}
        </button>
      </div>

      {/* 🟢 Модальное окно добавления категории */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1E2024] border border-white/20 p-6 rounded-2xl max-w-md w-full space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-white text-lg">Новая категория</h4>
              <button onClick={() => setShowCategoryModal(false)} className="text-white/60 hover:text-white">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Например: Стейки, Авторские коктели"
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00FF66]"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowCategoryModal(false)}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold"
              >
                Отмена
              </button>
              <button
                onClick={handleAddCategory}
                className="bg-[#00FF66] text-black px-5 py-2 rounded-xl text-xs font-black uppercase"
              >
                Создать
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🟢 Модальное окно редактирования/добавления блюда */}
      {editingDish && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#1E2024] border border-white/20 p-6 rounded-3xl max-w-xl w-full space-y-5 my-8">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-white text-xl">
                {editingDish.id ? "Редактирование блюда" : "Новое блюдо"}
              </h4>
              <button onClick={() => setEditingDish(null)} className="text-white/60 hover:text-white text-xl">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="space-y-4">
              {/* Photo Upload Area */}
              <div>
                <label className="text-xs text-white/70 block mb-1">Фотография блюда</label>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-2xl bg-black border border-white/20 overflow-hidden relative flex-shrink-0">
                    <img src={editingDish.imageUrl} alt="Dish" className="w-full h-full object-cover" />
                  </div>
                  <label className="cursor-pointer inline-flex items-center gap-2 bg-[#00FF66]/20 border border-[#00FF66]/50 text-[#00FF66] hover:bg-[#00FF66] hover:text-black font-bold text-xs px-4 py-3 rounded-xl transition-all">
                    {uploadingDishPhoto ? (
                      <>
                        <FontAwesomeIcon icon={faSpinner} spin /> Загрузка...
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faUpload} /> Загрузить фото блюда
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleDishPhotoUpload}
                      disabled={uploadingDishPhoto}
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="text-xs text-white/70 block mb-1">Название блюда</label>
                <input
                  type="text"
                  value={editingDish.name || ""}
                  onChange={(e) => setEditingDish({ ...editingDish, name: e.target.value })}
                  placeholder="Например: Двойной Чизбургер"
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00FF66]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/70 block mb-1">Категория</label>
                  <select
                    value={editingDish.categoryId || ""}
                    onChange={(e) => setEditingDish({ ...editingDish, categoryId: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00FF66]"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-white/70 block mb-1">Цена (₽)</label>
                  <input
                    type="number"
                    value={editingDish.price || 0}
                    onChange={(e) => setEditingDish({ ...editingDish, price: Number(e.target.value) })}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00FF66]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-white/70 block mb-1">Состав / Описание</label>
                <textarea
                  rows={3}
                  value={editingDish.description || ""}
                  onChange={(e) => setEditingDish({ ...editingDish, description: e.target.value })}
                  placeholder="Ингредиенты, аллергены, порция..."
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00FF66]"
                />
              </div>

              {/* Checkboxes for Badges */}
              <div className="flex gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-white">
                  <input
                    type="checkbox"
                    checked={!!editingDish.isBundle}
                    onChange={(e) => setEditingDish({ ...editingDish, isBundle: e.target.checked })}
                    className="accent-[#00FF66] w-4 h-4"
                  />
                  ⚡ Промо Бандл Revo
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-white">
                  <input
                    type="checkbox"
                    checked={!!editingDish.isHit}
                    onChange={(e) => setEditingDish({ ...editingDish, isHit: e.target.checked })}
                    className="accent-[#F59E0B] w-4 h-4"
                  />
                  🔥 Хит продаж
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setEditingDish(null)}
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-xs font-bold"
              >
                Отмена
              </button>
              <button
                onClick={handleSaveDish}
                className="bg-[#00FF66] hover:bg-[#10B981] text-black font-black text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl transition-all"
              >
                Сохранить блюдо
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
