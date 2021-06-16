$CW = (Get-Item $PSScriptRoot/.)
Set-Location -Path $CW

$binPath = (npm bin)
$env:PATH = "$binPath;$env:PATH"

lerna bootstrap
lerna clean --yes

$packages=@(find packages -name "package.json" -maxdepth 2)
$packages = Get-ChildItem -Path packages -Filter "package.json" -Depth 2

$CW = "C:/Users/Filip/Desktop/material-components-web-components"
for ($i=0; $i -lt $packages.length; $i += 1) {
$pkg = $packages[$i].ToString().Replace("\", "/")
$npmname=(node -e "console.log(require('$pkg').name)")
# Get-ChildItem -Path "node_modules/$npmname"
$pkgname = $pkg.replace("package.json", "")
$link = New-Item -Path "node_modules/$npmname" -ItemType SymbolicLink -Value $pkgname
Write-Host $link
}

