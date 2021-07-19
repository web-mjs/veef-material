$p = Get-Location
New-Item -ItemType SymbolicLink -Path "node_modules/vrender" -Target "$p/vrender" 
