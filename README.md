# Definition

EduAirBox (Formerly KwiiziBox ) is the concept name to offer a better education via digital with or without internet. Our work focuses on the design of portable and open media libraries in the form of Boxes giving access to millions of educational content and offering an integrated communication system where learners can collaborate and make video calls within the local network deployed by the Box.

# Requirement
Although the first version of EduAir in this repository (https://github.com/EduAir/EduAir) was running on a Raspberry, this version which is more complete with a system of communication and collaboration using other open source software such as EtherPad requires at least 4 GB of RAM and a disk with a storage space of 120 GB minimum for a good start in production.

The Wikipedia database used for this version of EduAir is the zim and indexed version of 2013 (https://archive.org/download/kiwix_zimsets_201403/wikipedia_en_all_11_2013.zim). You can choose a more recent zim file here (https://download.kiwix.org/zim/wikipedia/) and index it yourself. Then use the `bin` kiwix-server file to launch Kiwix as in this official tutorial: https://wiki.kiwix.org/wiki/Kiwix-serve

Depending on your version of zim file and the directory of your server, change the following line in the server.js file located at the root of the project by doing the search on the term `Run Kiwix on start` in the file to modify them.

The Linux distribution used for this release is Ubuntu 14.04 and 16.04. Any higher version should not cause any worries.

As a server we use Intel NUC Core i3 to install EduAir. You can decide if you want to choose another type of higher hardware in terms of computing power. We do not guarantee the operation with equipment below those recommended but it would be good news to let us know if it works.

# Installation

Here is the list of packages to install on the linux server to run EduAirForSchool

-	Nodejs 
EduAir run on a NodeJs server.
-	Ffmpeg
-	Elasticsearch (https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-elasticsearch-on-ubuntu-14-04)
-	MongoDb (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
-	A hostpot (http://techapple.net/2014/07/procedure-create-wifi-hotspot-linux-creating-wireless-access-point-linux-ubuntulinuxmintfedoraopensuse/)
-	ImageMagik

```
    sudo apt-get update
    sudo apt-get install imagemagick ghostscript poppler-utils
```
-	LibreOffice
To convert any type of lite text (Doc,Docx,Excel,ptt,pttx) to PDF. (Will add ODT and OTT files)

```
sudo apt-get install libreoffice --no-install-recommends
```
-	Convertor to text

For PDF File

 ```
    sudo apt-get install poppler-utils
 ```

-   For Pictures:

 ```
    sudo apt-get install tesseract-ocr
    sudo apt-get install ghostscript
```
-	File preview (thumbnail)

```
    sudo apt-get install unoconv
```

-	Convert PDF file to image

```
sudo apt-get install python-software-properties
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:rwky/graphicsmagick
sudo apt-get update
sudo apt-get install graphicsmagick
```
- 

```	
    sudo npm install --unsafe-perm
```

Put the clone of this repository in directory of your choice and make a
```
    sudo node server.js
``` 

to launch it
Warning! it listens on the port 80 so make sure this port is free on your server.
Then type the IP address of your server on your browser to open the application
To add new files to your server, just add "/upload" in front of your IP address on the browser.

Any question concerning the installation is welcome.
