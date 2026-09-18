import os
from PIL import Image

# Warna tema Toko Putri (Dark Slate Navy & Gold)
BG_COLOR = (15, 23, 42, 255)       # #0f172a (Toko Putri Dark Slate Navy)
BG_HEX = "#0f172a"
LOGO_PATH = "official_logo.png"

if not os.path.exists(LOGO_PATH):
    raise FileNotFoundError(f"Logo file {LOGO_PATH} not found!")

logo = Image.open(LOGO_PATH).convert("RGBA")
print(f"Loaded logo: {logo.size}, mode: {logo.mode}")

# 1. Generate splash_icon.png for Android 12+ (Theme.SplashScreen)
# 512x512 transparent PNG, logo centered in 66% diameter (340px)
def make_splash_icon():
    size = 512
    icon_size = 340
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    resized_logo = logo.resize((icon_size, icon_size), Image.Resampling.LANCZOS)
    offset = ((size - icon_size) // 2, (size - icon_size) // 2)
    img.paste(resized_logo, offset, resized_logo)
    
    out_dir = "android/app/src/main/res/drawable"
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "splash_icon.png")
    img.save(out_path, "PNG", optimize=True)
    print(f"Saved: {out_path} ({size}x{size})")

# 2. Generate splash screens (Portrait & Landscape across all densities)
SPLASH_SPECS = {
    "drawable/splash.png": (1080, 1920, 480),
    "drawable-port-mdpi/splash.png": (320, 480, 150),
    "drawable-port-hdpi/splash.png": (480, 800, 220),
    "drawable-port-xhdpi/splash.png": (720, 1280, 340),
    "drawable-port-xxhdpi/splash.png": (960, 1600, 450),
    "drawable-port-xxxhdpi/splash.png": (1280, 1920, 580),
    "drawable-land-mdpi/splash.png": (480, 320, 150),
    "drawable-land-hdpi/splash.png": (800, 480, 220),
    "drawable-land-xhdpi/splash.png": (1280, 720, 340),
    "drawable-land-xxhdpi/splash.png": (1600, 960, 450),
    "drawable-land-xxxhdpi/splash.png": (1920, 1280, 580),
}

def make_splash_screens():
    base_res = "android/app/src/main/res"
    for rel_path, (w, h, logo_dim) in SPLASH_SPECS.items():
        canvas = Image.new("RGBA", (w, h), BG_COLOR)
        resized_logo = logo.resize((logo_dim, logo_dim), Image.Resampling.LANCZOS)
        offset = ((w - logo_dim) // 2, (h - logo_dim) // 2)
        canvas.paste(resized_logo, offset, resized_logo)
        
        full_path = os.path.join(base_res, rel_path)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        canvas.convert("RGB").save(full_path, "PNG", optimize=True)
        print(f"Saved splash: {full_path} ({w}x{h}, logo {logo_dim}x{logo_dim})")

# 3. Generate adaptive launcher icons (ic_launcher_foreground.png)
# Android adaptive icon size is 108dp. Safe zone is 72dp (inner 66%).
ADAPTIVE_SPECS = {
    "mipmap-mdpi/ic_launcher_foreground.png": (108, 72),
    "mipmap-hdpi/ic_launcher_foreground.png": (162, 108),
    "mipmap-xhdpi/ic_launcher_foreground.png": (216, 144),
    "mipmap-xxhdpi/ic_launcher_foreground.png": (324, 216),
    "mipmap-xxxhdpi/ic_launcher_foreground.png": (432, 288),
}

def make_adaptive_icons():
    base_res = "android/app/src/main/res"
    for rel_path, (canvas_sz, logo_sz) in ADAPTIVE_SPECS.items():
        canvas = Image.new("RGBA", (canvas_sz, canvas_sz), (0, 0, 0, 0))
        resized_logo = logo.resize((logo_sz, logo_sz), Image.Resampling.LANCZOS)
        offset = ((canvas_sz - logo_sz) // 2, (canvas_sz - logo_sz) // 2)
        canvas.paste(resized_logo, offset, resized_logo)
        
        full_path = os.path.join(base_res, rel_path)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        canvas.save(full_path, "PNG", optimize=True)
        print(f"Saved adaptive icon: {full_path} ({canvas_sz}x{canvas_sz}, logo {logo_sz}x{logo_sz})")

# 4. Generate legacy launcher icons (ic_launcher.png & ic_launcher_round.png)
LAUNCHER_SPECS = {
    "mipmap-mdpi": 48,
    "mipmap-hdpi": 72,
    "mipmap-xhdpi": 96,
    "mipmap-xxhdpi": 144,
    "mipmap-xxxhdpi": 192,
}

def make_launcher_icons():
    base_res = "android/app/src/main/res"
    for folder, sz in LAUNCHER_SPECS.items():
        # ic_launcher.png (square with rounded corners or transparent)
        resized_logo = logo.resize((sz, sz), Image.Resampling.LANCZOS)
        
        path_std = os.path.join(base_res, folder, "ic_launcher.png")
        path_round = os.path.join(base_res, folder, "ic_launcher_round.png")
        
        os.makedirs(os.path.join(base_res, folder), exist_ok=True)
        resized_logo.save(path_std, "PNG", optimize=True)
        resized_logo.save(path_round, "PNG", optimize=True)
        print(f"Saved launcher icons: {folder} ({sz}x{sz})")

if __name__ == "__main__":
    make_splash_icon()
    make_splash_screens()
    make_adaptive_icons()
    make_launcher_icons()
    print("All assets generated successfully!")
