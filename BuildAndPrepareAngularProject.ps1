$publishOnDist = $args[0]
#Gets current path folder name
$projectFolderName = Split-Path -Leaf (Get-Location) 
$configFolder = ""
$buildPath = ""
$buildPathDestination = ""

Write-Output "=========================================="
Write-Output "Welcome to the Angular project build tool!"
Write-Output "=========================================="

$projectFolderName = "\"+$projectFolderName+"\"

if ($publishOnDist -eq $true -Or -Not $publishOnDist) 
{
    Write-Output "Publishing on /dist folder"   
    Write-Output ""  
    #When we build on /dist, a folder with the project name is created.  
    $buildPath = ".\dist\"+$projectFolderName+"\browser" 
    $buildPathDestination =".\dist\"+$projectFolderName    
    ng build --configuration production --base-href $projectFolderName
}else
{
    Write-Output "Publishing on /docs folder"    
    Write-Output ""    
    $buildPath = ".\docs\browser"
    $buildPathDestination = ".\docs\"    
    ng build --configuration docs --base-href $projectFolderName
}

$validPath = Test-Path -Path $buildPath

#If the project is build on /browser folder (angular version 17 or higher), we need to move the files and folders inside this folder in order to publish it correctly
if($validPath -eq $true) 
{       
    Write-Output "The project was built on /browser, moving content to parent directory"    
    Write-Output ""

    #I copy the items (I could move them, but in case there's an error the files will be there until they were deleted, just in case)
    Copy-Item -Path $buildPath"\*" -Destination $buildPathDestination -Recurse
    
    Write-Output "Content moved successfully, removing browser folder since it's not necessary anymore."    
    Write-Output ""

    #Once the items were copied, It's time to delete the browsers folder
    Remove-Item $buildPathDestination"\browser" -Recurse

    $date = Get-Date

    $gitMessage = "Publishing changes on Github Pages at " + $date

    git add --all    
    git commit -m $gitMessage    
    git push    
}

Pause
Clear-Host