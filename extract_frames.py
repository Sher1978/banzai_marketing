import cv2
import os
import glob

# Настройка путей
folder_path = r'C:\Sher_AI_Studio\projects\banzai-marketing\public\assets\cybermask_sequence'
video_path = os.path.join(folder_path, 'Heromask_V2.mp4')
output_folder = folder_path

# Очистка старых кадров перед началом
print("Очистка старых кадров...")
for f in glob.glob(os.path.join(output_folder, "frame_*.png")):
    try: os.remove(f)
    except: pass

# Открываем видео
cap = cv2.VideoCapture(video_path)
if not cap.isOpened():
    print("Ошибка: Видео не найдено по указанному пути.")
    exit(1)

total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
# Рассчитываем шаг, чтобы получить ровно 40 кадров
step = max(1, total_frames // 40)

print(f"Извлечение 40 кадров из {total_frames} существующих с шагом {step}...")

frame_idx = 0
count = 0

while cap.isOpened() and frame_idx < 40:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Сохраняем каждый N-й кадр
    if count % step == 0:
        file_name = f"frame_{frame_idx}.png"
        cv2.imwrite(os.path.join(output_folder, file_name), frame)
        print(f"Готово: {file_name}")
        frame_idx += 1
    
    count += 1

cap.release()
print("Протокол 'Экран Терминала' завершен. 40 чистых кадров готовы.")
