$sass = Get-ChildItem -Path packages/textfield -Filter "*.scss" -Depth 3
foreach ($sassFile in $sass) {
  $name = $sassFile.Name
  if ($name.StartsWith("_") ) {
  continue
   }
   $ts = $sassFile.ToString().Replace(".scss", "-css.js")
   $ts2 = $sassFile.ToString().Replace(".scss", "-built.css")
   Write-Host "Generating $ts"
   node scripts/sass-render/bin/sass-render.js -t sass-template.tmpl -s $sassFile -o $ts
   node scripts/sass-render/bin/sass-render.js -t sass-template2.tmpl -s $sassFile -o $ts2
}

