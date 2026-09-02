Write-Host "=== 1. Sync Hasil Build (dist) ==="
Copy-Item -Path "dist\*" -Destination "1. HASIL_BUILD_SIAP_PAKE\" -Recurse -Force
Copy-Item -Path "dist\*" -Destination "PAKET_FLASHDISK\1. FILE_SIAP_PAKAI\" -Recurse -Force

Write-Host "=== 2. Sync Source Code Lengkap ==="
$items = Get-ChildItem -Path .
foreach ($item in $items) {
    if ($item.Name -notin @('node_modules', '.git', 'dist', 'PAKET_FLASHDISK', '1. HASIL_BUILD_SIAP_PAKE', '.gemini')) {
        if ($item.PSIsContainer) {
            Copy-Item -Path $item.FullName -Destination "PAKET_FLASHDISK\2. SOURCE_CODE_LENGKAP\" -Recurse -Force
        } else {
            Copy-Item -Path $item.FullName -Destination "PAKET_FLASHDISK\2. SOURCE_CODE_LENGKAP\" -Force
        }
    }
}

Write-Host "=== 3. Git Status & Check ==="
git add -A
$statusOutput = git status --porcelain
if ($statusOutput) {
    Write-Host "Perubahan terdeteksi, melakukan commit..."
    git commit -m "chore: complete sync of all updates across distribution folders"
    git push origin main
} else {
    Write-Host "Semua perubahan sudah tersimpan dan up-to-date di Git!"
}
