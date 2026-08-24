$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$widget = Join-Path $root "profilecard-widget"

Push-Location $widget
try {
  Write-Host "Installing ProfileCard widget dependencies..." -ForegroundColor Yellow
  npm install

  Write-Host "Building ProfileCard widget..." -ForegroundColor Yellow
  npm run build
}
finally {
  Pop-Location
}

Write-Host ""
Write-Host "ProfileCard build complete." -ForegroundColor Green
Write-Host "Now run: quarto render"
Write-Host "Then:    quarto preview"
