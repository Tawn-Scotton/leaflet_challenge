# leaflet_challenge
A javascript project using leaflet, html, css
--------------------------------------------------
Introduction to the project: (parts of this readme are copied from code requirements and parts will be in my own words

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet

_____________________________________________________________________________________________________________
(part one:  in the beginning)
I created a new repository named leaflet-challenge.  It was made specifically for THIS challenge.

I cloned the repository to my computer
inside of the local git repositiory, I created two folders: Leaflet part 1 and Leaflet part 2

I will use both HTML (therefore CSS) and Javascript.  These files will be the mail files to the analysis.
Upon completion of writing my code locally, I will push to GitHub (versus uploading the files into the repositiory)

---------------------------------------------------------------------------
I downloaded source challenge files which are broken into 2 parts:

Part 1 creates an Earthquake visualization
Part 2 gathers and plots more data

 ![2-BasicMap](https://user-images.githubusercontent.com/119641369/231923651-ff93aa32-6c4d-44a8-bf58-a9b088b0f7ac.png)
The first task is to visual an earthquake dataset.

Your first task is to visualize an earthquake dataset. Complete the following steps:

Get your dataset. To do so, follow these steps:![3-Data](https://user-images.githubusercontent.com/119641369/231923746-12149f8c-3cb3-4dfe-8544-0657e642fc99.png)


The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:

When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:
4-JSON

Import and visualize the data by doing the following:

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

Hint: The depth of the earth can be found as the third coordinate for each earthquake.

Include popups that provide additional information about the earthquake when its associated marker is clicked.

Create a legend that will provide context for your map data.

Your visualization should look something like the preceding map.

Part 2: Gather and Plot More Data (Optional with no extra points earning)
Plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in this dataset and visualize it alongside your original data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplatesLinks to an external site..

This part is completely optional; you can complete this part as a way to challenge yourself and boost your new skills.

The following image is an example screenshot of what you should produce:

5-Advanced

Perform the following tasks:

Plot the tectonic plates dataset on the map in addition to the earthquakes.

Add other base maps to choose from.

Put each dataset into separate overlays that can be turned on and off independently.

Add layer controls to your map.

I followed the code that our instructor gave in a speedrun during my bootcamp
