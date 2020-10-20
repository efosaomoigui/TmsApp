
Lafarge documentation for the Truck management system (TMS)

This system is build as client -server architecture as you requested. 

To solve fulfil the following requirements:

----------------------------------------------- 

Users must be able view the list of all Trucks and Drivers information -- done
Users must be able to view the current location of all Trucks and Drivers -- done

Users must be able to retrieve the 
location (
Address, 
Longitude, 
Latitude and
Timestamp) of a truck using TruckID (also called Asset Id) 
and Driver Id -- done

Users should be able to view the distance in Km of a truck from a particular static
coordinate (the coordinate is expected to be locations of interest, but use can hardcode
a static location) --donw

The following project was developed in asp.net core using c# and efcore, and reactjs for frontend-client.

The project characteristics:

Because the time frame and my current work engagement, there was not really much time to implement my favourite architectures: abstract repository pattern and CORS/MediatR. So I implemented the simplest sOLID archticture i could quickly come up with.

The documentation was mainly done from the naming scheme perspective and few comments here and there.

FrontEnd:
IS a typical react project: https://github.com/efosaomoigui/TmsApp and also available as a zipfolder sent your email. The admin for agent does not require login to use. Just run reackjs and let the dependency install and do npm start.

Backend
https://github.com/efosaomoigui/TmsId
SOA Project:
Is a simple asp.net core service webapplication with simple mixtue of repository patternb and SOLId principle architecture. Please note: i implemented the use authorization and authentication but decide not to use it for request quest from the ui to save the time copying the token here and ther.


SQL.
Using efcore to connect and use SOL. Some Sql scripts are also included with with the backend project: drivers.sql, trucks.sql, postions.sql

Please I am open any question regarding the project. 

Call me on: 07063965528
Email me: efe.omoigui@gmail.com




