(Get-ChildItem -Name *-css.js -Depth 3 -Path .\packages) | % { Get-Item packages/$_ } | Select Length, Name, Directory | Sort-Object -Descending Length
