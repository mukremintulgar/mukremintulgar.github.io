$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$widget = Join-Path $root "lanyard-widget"
$card = Join-Path $widget "src\card.glb"

Write-Host ""
Write-Host "React Bits Lanyard setup" -ForegroundColor Cyan
Write-Host "------------------------"

if (-not (Test-Path $card)) {
  Write-Host "Downloading official card.glb from React Bits..." -ForegroundColor Yellow

  $cardUrl = "https://github.com/DavidHDev/react-bits/raw/refs/heads/main/src/content/Components/Lanyard/card.glb"
  Invoke-WebRequest -Uri $cardUrl -OutFile $card

  if ((Get-Item $card).Length -lt 2000000) {
    throw "card.glb looks incomplete. Delete it and run this setup script again."
  }
}

Push-Location $widget
try {
  Write-Host "Installing React/Three dependencies..." -ForegroundColor Yellow
  npm install

  Write-Host "Building the Lanyard widget..." -ForegroundColor Yellow
  npm run build
}
finally {
  Pop-Location
}

Write-Host ""
Write-Host "Done." -ForegroundColor Green
Write-Host "Now run: quarto render"
Write-Host "Then:    quarto preview"
