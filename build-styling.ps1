$sass = Get-ChildItem -Path packages -Filter "*.scss" -Depth 3
foreach ($sassFile in $sass) {
  $name = $sassFile.Name
  if ($name.StartsWith("_") ) {
  continue
   }
   $ts = $sassFile.ToString().Replace(".scss", "-css.ts")
   Write-Host "Generating $ts"
   node scripts/sass-render/bin/sass-render.js -t sass-template.tmpl -s $sassFile -o $ts
}

