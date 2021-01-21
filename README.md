# Empower 2.0

[Prototype](https://empower20.netlify.app/)

A Project for the Empower 2.0 initiative, empowering authorities to help them see the whole picture and give them clarity about where they should direct their efforts regarding sustainable energy projects. 

# Concept

Our proposed concept is a gamification platform in where the top 3 provinces and municipalities are ranked on a scoreboard to make authorities aware of regions that are doing well. This scoreboard serves as an effort to inspire authorities and learn from regions that are doing well in sustainable energy. Authorities can read up information about regions that are doing well with the purpose of them copying the efforts to help their own region.

# Tech used

* React
* D3.js
* SVGR

# Datasets used 

* [GeoJSON for the borders of provinces](https://cartomap.github.io/nl/wgs84/provincie_2020.geojson) 
* [GeoJSON for the borders of municipalities](https://cartomap.github.io/nl/rd/gemeente_2016.topojson)
* [Hernieuwbare Elektriciteit (in TJ) 2018 - Gemeente](https://icthva.sharepoint.com/:x:/r/sites/FDMCI_EDU__CMD20_21__Informat_y5bss93d-Empower2.0GreenEnergy/_layouts/15/Doc.aspx?sourcedoc=%7B9990D162-317F-4F89-BCE1-15B16E2F7A6F%7D&file=Hernieuwbare%20Elektriciteit%20(in%20TJ)%202018%20-%20Gemeente.xlsx&wdOrigin=OFFICECOM-WEB.MAIN.REC&ct=1611213697782&action=default&mobileredirect=true)
* [Hernieuwbare Elektriciteit (in TJ) 2018 - Provincie](https://icthva.sharepoint.com/:x:/r/sites/FDMCI_EDU__CMD20_21__Informat_y5bss93d-Empower2.0GreenEnergy/_layouts/15/Doc.aspx?sourcedoc=%7B2774A70C-277C-4053-A9DF-A1EE57DECE08%7D&file=Hernieuwbare%20Elektriciteit%20(in%20TJ)%202018%20-%20Provinci%20(1).xlsx&wdOrigin=OFFICECOM-WEB.MAIN.REC&ct=1611213712208&action=default&mobileredirect=true)

# Which data am I using?

In the GeoJSON dataset I will be using the following variables:

* coordinates
* id

In the electricity dataset I will be using the following variables:

* solar production
* wind production
* biogas production
* id

# Installation guide

Navigate to desired directory

`cd desktop`

Clone the repo to directory

`git clone https://github.com/benl95/empower.git`

Install modules

`npm i`

Run application

`npm start`

The application can now be viewed on https://localhost:3000


