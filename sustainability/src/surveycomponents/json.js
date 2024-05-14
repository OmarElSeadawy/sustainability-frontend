export const json = {
    "title": "Carbon-Emission Data Collection",
    "description": "Survey to collect data on carbon footprint on campuses",
    "logoPosition": "right",
    "focusFirstQuestionAutomatic": true,
    "pages": [
     {
      "name": "Introduction",
      "elements": [
       {
        "type": "html",
        "name": "Intro1"
       },
       {
        "type": "multipletext",
        "name": "Generic Info",
        "title": "Personal Information",
        "validators": [
         {
          "type": "expression"
         }
        ],
        "items": [
         {
          "name": "Firstname",
          "title": "First Name"
         },
         {
          "name": "Lastname",
          "title": "Last Name"
         },
         {
          "name": "Email",
          "inputType": "email",
          "title": "Email"
         }
        ]
       },
       {
        "type": "multipletext",
        "name": "Location",
        "startWithNewLine": false,
        "title": "Location",
        "items": [
         {
          "name": "Institution",
          "title": "Institution"
         },
         {
          "name": "City",
          "title": "City"
         },
         {
          "name": "Country",
          "title": "Country"
         }
        ]
       },
       {
        "type": "text",
        "name": "ayfy",
        "title": "Please Specify Reporting Year (AY/FY)",
        "description": "Explain what is AY/FY",
        "inputType": "number",
        "min": 2015,
        "max": 2099
       },
       {
        "type": "boolean",
        "name": "consent",
        "title": "Do you consent to the information provided?",
        "isRequired": true,
        "validators": [
         {
          "type": "expression",
          "text": "Must Consent",
          "expression": "{consent} = true"
         }
        ]
       }
      ],
      "title": "Introduction",
      "description": "Introduction to Survey and Consent",
      "navigationTitle": "Introduction"
     },
     {
      "name": "Campus Information",
      "elements": [
       {
        "type": "html",
        "name": "titlez",
        "html": "<h4>Location, Scope and Boundaries</h4>"
       },
       {
        "type": "text",
        "name": "campusname",
        "title": "Please Specify Campus Name"
       },
       {
        "type": "dropdown",
        "name": "Ownership",
        "title": "Please specify the ownership of the campus",
        "choices": [
         "Owned",
         "Leased"
        ]
       },
       {
        "type": "text",
        "name": "campuslocation",
        "title": "Where is the campus located ?",
        "description": "Please provide Google Maps Link"
       },
       {
        "type": "text",
        "name": "campusarea",
        "title": "What is the campus area ?",
        "description": "Please provide Built-Up Area in squared meters",
        "inputType": "number",
        "min": 0,
        "max": 9999999999
       },
       {
        "type": "text",
        "name": "BuildingNumber",
        "title": "What is the number of Buildings/Faculties ?",
        "description": "Please Specify the number of buildings for this campus.",
        "inputType": "number",
        "size": 2,
        "min": 0,
        "max": 50,
        "step": 0
       },
       {
        "type": "paneldynamic",
        "name": "BuildingInfo",
        "title": "Buildings Information",
        "description": "Please provide information for each building about its type and area.",
        "templateElements": [
         {
          "type": "text",
          "name": "question1",
          "title": "Building Type"
         },
         {
          "type": "text",
          "name": "buildname",
          "title": "Building Name\n"
         },
         {
          "type": "text",
          "name": "question8",
          "title": "Building Built-up Area"
         }
        ],
        "panelCount": 1,
        "confirmDelete": true
       },
       {
        "type": "multipletext",
        "name": "Population",
        "title": "What is the campus population?",
        "description": "Full Time Equivalent (FTE) is the equivalent number of population commuting to campus daily during the academic year. ",
        "items": [
         {
          "name": "Students",
          "isRequired": true,
          "inputType": "number",
          "title": "Students"
         },
         {
          "name": "Faculty",
          "inputType": "number",
          "title": "Faculty"
         },
         {
          "name": "Staff",
          "inputType": "number"
         },
         {
          "name": "Campus FTE",
          "inputType": "number",
          "title": "Campus FTE*"
         }
        ]
       },
       {
        "type": "html",
        "name": "titlex",
        "html": "<h4>Information Access</h4>"
       },
       {
        "type": "boolean",
        "name": "campussus",
        "title": "Does the campus have a dedicated sustainability office?"
       },
       {
        "type": "comment",
        "name": "campussuspractices",
        "visibleIf": "{campussus} = true",
        "title": "Please specify briefly the practices they have adopted towards decreasing energy consumption.",
        "autoGrow": true
       },
       {
        "type": "boolean",
        "name": "campusrating",
        "title": "Does the campus achieve any sustainability rating system recognition ?"
       },
       {
        "type": "comment",
        "name": "campusratingsys",
        "visibleIf": "{campusrating} = true",
        "title": "Please provide links to rating systems.",
        "autoGrow": true
       },
       {
        "type": "multipletext",
        "name": "campusbenchmark",
        "visibleIf": "{campusrating} = true",
        "title": "Please provide your consumption according to this benchmark?",
        "description": "Please specify the reporting year.",
        "items": [
         {
          "name": "Reporting Year",
          "isRequired": true,
          "placeholder": "Year",
          "inputType": "number",
          "title": "Reporting Year"
         },
         {
          "name": "Rating System 1",
          "isRequired": true
         },
         {
          "name": "Rating System 2"
         },
         {
          "name": "Rating System 3"
         }
        ]
       },
       {
        "type": "html",
        "name": "titley",
        "html": "<h4>Validation</h4>"
       },
       {
        "type": "boolean",
        "name": "campusannual",
        "title": "Does the campus calculate and report its carbon footprint on an annual basis?"
       },
       {
        "type": "multipletext",
        "name": "lastreportedcarbonemissionreport",
        "visibleIf": "{campusannual} = true",
        "title": "Please specify the amount of carbon emissions (Last Reported by Sustainability Office)",
        "items": [
         {
          "name": "2024",
          "title": "2024"
         },
         {
          "name": "2023",
          "title": "2023"
         },
         {
          "name": "2022"
         },
         {
          "name": "2021"
         }
        ]
       },
       {
        "type": "paneldynamic",
        "name": "campusenergyactivities",
        "visibleIf": "{campusannual} = true",
        "title": "Could you specify what activities consume energy and resources?",
        "templateElements": [
         {
          "type": "text",
          "name": "activityname",
          "title": "What is the Activity?"
         },
         {
          "type": "text",
          "name": "activityconsumption",
          "title": "Please provide energy consumption for this activity.",
          "inputType": "number"
         }
        ],
        "templateTabTitle": "Activity {panelIndex}",
        "confirmDelete": true,
        "renderMode": "tab"
       }
      ],
      "title": "Campus Information",
      "description": "Location. Scope and Boundaries",
      "navigationTitle": "Campus Information"
     },
     {
      "name": "Energy",
      "elements": [
       {
        "type": "boolean",
        "name": "energyannual",
        "title": "Do you know the Annual Energy Consumption for this campus?"
       },
       {
        "type": "text",
        "name": "annualenergyconsumption",
        "visibleIf": "{energyannual} = true",
        "title": "Campus Annual Energy Consumption (kWh)",
        "inputType": "number"
       },
       {
        "type": "multipletext",
        "name": "energyconsumptionpercent",
        "visibleIf": "{energyannual} = true",
        "title": "Percentage of Energy Consumption",
        "description": "In case you don't have meters, closing off HVAC to know the actual electricity consumption",
        "items": [
         {
          "name": "HVAC",
          "placeholder": "%",
          "inputType": "number",
          "title": "HVAC %"
         },
         {
          "name": "Non-HVAC",
          "placeholder": "%",
          "inputType": "number",
          "title": "Non-HVAC %"
         },
         {
          "name": "Other",
          "placeholder": "%",
          "inputType": "number",
          "title": "Other %"
         }
        ]
       },
       {
        "type": "html",
        "name": "Technical Questions",
        "html": "<h4> Technical Questions </h4>"
       },
       {
        "type": "boolean",
        "name": "energyconsumptionbuilding",
        "title": "Do you know the annual energy consumption for each building?"
       },
       {
        "type": "dropdown",
        "name": "periodelectricitybill",
        "title": "How much do you pay for the electricity bill of the whole university campus and facilities?",
        "choices": [
         "Daily",
         "Monthly",
         "Annually"
        ]
       },
       {
        "type": "text",
        "name": "BillValue",
        "visibleIf": "{periodelectricitybill} notempty",
        "title": "Please provide the bill value (EGP)",
        "inputType": "number"
       },
       {
        "type": "dropdown",
        "name": "maintenancelevel",
        "title": "What maintenance levels are adopted in your organization?",
        "choices": [
         "Preventative",
         "Reactive",
         "Corrective"
        ],
        "showNoneItem": true
       },
       {
        "type": "multipletext",
        "name": "question2",
        "visibleIf": "{maintenancelevel} <> 'none'",
        "title": "Please specify the efforts done or planned for each.",
        "items": [
         {
          "name": "Option1",
          "title": "Option1"
         },
         {
          "name": "Option2",
          "title": "Option2"
         },
         {
          "name": "Option3"
         }
        ]
       },
       {
        "type": "html",
        "name": "Energy Sources",
        "html": "<h4> Energy Sources </h4>"
       },
       {
        "type": "multipletext",
        "name": "energysourcespercent",
        "title": "What are the energy sources used by the university (e.g., electricity, natural gas, etc.)?",
        "description": "Electricity provided Egyptian Electrical Authority",
        "items": [
         {
          "name": "Electricity",
          "title": "Electricity %"
         },
         {
          "name": "Natural Gas",
          "title": "Natural Gas %"
         },
         {
          "name": "Renewable Energy",
          "title": "Renewable Energy %"
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "question9",
        "title": "What efforts are in place to improve energy efficiency in campus buildings? (Select all that apply)",
        "choices": [
         "Energy Audits",
         "Smart Building Systems",
         "Energy-Efficient Lighting",
         "HVAC System Updates",
         "Building Insulation",
         "Renewable Energy Sources",
         "Energy-Efficient Windows and Doors",
         "Occupancy Sensors",
         "EE Appliances and Equipment",
         "Energy Management Systems",
         "Waste-to-Energy Programs",
         "Green Roofs"
        ],
        "showOtherItem": true
       },
       {
        "type": "checkbox",
        "name": "carbonemissionschoices",
        "title": "What problems lead to carbon emissions?",
        "choices": [
         "Energy-Inefficient Buildings",
         "Traditional Energy Sources ",
         "Wasteful Energy Practices ",
         "Ineffective HVAC Systems",
         "Lack of Renewable Energy Integration",
         "Inefficient Water Heating ",
         "Unoptimized Campus Lighting ",
         "High-Energy Events and Facilities "
        ],
        "showOtherItem": true
       }
      ],
      "title": "Energy",
      "description": "Details about Energy Consumption",
      "navigationTitle": "Energy"
     },
     {
      "name": "Transportation",
      "elements": [
       {
        "type": "text",
        "name": "studentnumber",
        "title": "Number of Students: ",
        "defaultValueExpression": "{Campuses.Population.Students}",
        "readOnly": true,
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "facultynumber",
        "title": "Number of Faculty: ",
        "defaultValueExpression": "{Campuses.Population.Faculty}",
        "readOnly": true,
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "staffnumber",
        "title": "Number of Staff: ",
        "defaultValueExpression": "{Campuses.Population.Staff}",
        "readOnly": true,
        "inputType": "number"
       },
       {
        "type": "multipletext",
        "name": "avgattendance",
        "title": "Average Number of Attendance days per week",
        "items": [
         {
          "name": "Students"
         },
         {
          "name": "Faculty"
         },
         {
          "name": "Staff"
         }
        ]
       },
       {
        "type": "text",
        "name": "avgdistancetravelpop",
        "title": "Average Travel Distance for Campus Population (in Km)\n"
       },
       {
        "type": "checkbox",
        "name": "areasofres",
        "visible": false,
        "title": "Areas of Residence (Check all that applies)",
        "description": "Which areas do students/ staff live\t\n",
        "choices": [
         "New Cairo",
         "6 October",
         "Nasr City",
         "Masr ElGedida",
         "Maadi",
         "Zayed"
        ],
        "showOtherItem": true
       },
       {
        "type": "boolean",
        "name": "transportationpercentageboolean",
        "title": "Do you know the exact percentages of transportations usages by students and faculty?"
       },
       {
        "type": "matrixdropdown",
        "name": "percentagematrix",
        "visibleIf": "{transportationpercentageboolean} = true",
        "title": "Percentage of usage of each mode of transportation",
        "validators": [
         {
          "type": "expression",
          "text": "Student percentage must be less than 100%",
          "expression": "sum({transportationpanel[0].percentagematrix.Metro.Students},{transportationpanel[0].percentagematrix.Car.Students},{transportationpanel[0].percentagematrix.Bus.Students},{transportationpanel[0].percentagematrix.Carpooling.Students},{transportationpanel[0].percentagematrix.PublicTransport.Students},{transportationpanel[0].percentagematrix.Motorcycle.Students},{transportationpanel[0].percentagematrix.Bike.Students}) <> 100"
         }
        ],
        "columns": [
         {
          "name": "Students",
          "title": "Students"
         },
         {
          "name": "Faculty",
          "title": "Faculty"
         },
         {
          "name": "Staff",
          "title": "Staff"
         }
        ],
        "choices": [
         1
        ],
        "placeholder": "%",
        "cellType": "text",
        "rows": [
         "Car",
         "Bus",
         "Metro",
         "Carpooling",
         {
          "value": "PublicTransport",
          "text": "Public Transport"
         },
         "Motorcycle",
         "Bike"
        ]
       },
       {
        "type": "matrixdropdown",
        "name": "percentageaveragedistance",
        "visible": false,
        "title": "Percentage of Average distance traveled for each distance category",
        "description": "Please specify percentage per distance for each category",
        "validators": [
         {
          "type": "expression",
          "text": "Percentage Not Equal 100",
          "expression": "{transportationpanel[0].percentageaveragedistance.le5.Students} + {transportationpanel[0].percentageaveragedistance.5t10.Students} + {transportationpanel[0].percentageaveragedistance.10t15.Students} + {transportationpanel[0].percentageaveragedistance.15t20.Students} + {transportationpanel[0].percentageaveragedistance.ge20.Students} <> 100"
         }
        ],
        "columns": [
         {
          "name": "Students",
          "title": "Students",
          "totalType": "sum",
          "totalDisplayStyle": "percent"
         },
         {
          "name": "Faculty",
          "title": "Faculty"
         },
         {
          "name": "Staff",
          "title": "Staff"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rows": [
         {
          "value": "le5",
          "text": "< 5KM"
         },
         {
          "value": "5t10",
          "text": "5-10KM"
         },
         {
          "value": "10t15",
          "text": "10-15KM"
         },
         {
          "value": "15t20",
          "text": "15-20KM"
         },
         {
          "value": "ge20",
          "text": ">20KM"
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "prefermodetransport",
        "visibleIf": "{transportationpercentageboolean} = false",
        "title": "Preferable mode of transportation",
        "choices": [
         "Car",
         "Bus",
         "Metro",
         "Mini-bus",
         "Monorail",
         "item3"
        ],
        "showOtherItem": true
       },
       {
        "type": "boolean",
        "name": "carpoolquestion",
        "visibleIf": "{transportationpercentageboolean} = false",
        "title": "If you come by car, Do you Carpool?"
       },
       {
        "type": "html",
        "name": "businesstrips",
        "html": "<h4> Business Trips </h4>"
       },
       {
        "type": "boolean",
        "name": "unibusinesstrips",
        "title": "Is the university responsible for students or staff business trips?"
       },
       {
        "type": "text",
        "name": "Totalnumbflights",
        "title": "Total Number of Flights",
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "avgpeopleflighting",
        "title": "Average Number of People (per flight)",
        "inputType": "number"
       },
       {
        "type": "multipletext",
        "name": "percentageflightdist",
        "title": "Percentage of Flight Distances",
        "items": [
         {
          "name": "Long Haul",
          "placeholder": ">4000Km",
          "inputType": "number",
          "title": "Long Haul"
         },
         {
          "name": "Medium Haul",
          "placeholder": "1500<Km<4000",
          "inputType": "number",
          "title": "Medium Haul"
         },
         {
          "name": "Short Haul",
          "placeholder": "<1500Km",
          "inputType": "number"
         }
        ]
       },
       {
        "type": "multipletext",
        "name": "percenttravelclass",
        "title": "Percentage of Traveling Class",
        "items": [
         {
          "name": "First Class",
          "inputType": "number"
         },
         {
          "name": "Business Class",
          "inputType": "number",
          "title": "Business Class"
         },
         {
          "name": "Economy",
          "inputType": "number"
         }
        ]
       },
       {
        "type": "html",
        "name": "University Fleet",
        "html": "<h4> University Fleet </h4>"
       },
       {
        "type": "boolean",
        "name": "question3",
        "title": "Is there any transportation owned by the university within the campus?"
       },
       {
        "type": "matrixdynamic",
        "name": "modeoftransport",
        "title": "Modes of Transport (Add all that applies)",
        "columns": [
         {
          "name": "vehictype",
          "title": "Vehicle Type",
          "cellType": "text"
         },
         {
          "name": "numberovehic",
          "title": "Number of Vehicles Owned",
          "cellType": "text",
          "inputType": "number"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rowCount": 1,
        "minRowCount": 1,
        "confirmDelete": true
       },
       {
        "type": "text",
        "name": "fuelmoneyamount",
        "title": "Amount of money spent on fuel (Annually)",
        "inputType": "number"
       },
       {
        "type": "paneldynamic",
        "name": "sponsoredtripspanel",
        "title": "Sponsored Field Trips",
        "description": "Please add information on all sponsored field trips done by the university.",
        "templateElements": [
         {
          "type": "text",
          "name": "numbofsponstrips",
          "title": "Total Number of Trips",
          "inputType": "number"
         },
         {
          "type": "text",
          "name": "avgdistsponsored",
          "title": "Average Distance Traveled (in Km)",
          "inputType": "number"
         },
         {
          "type": "text",
          "name": "AvgNumberofPeoplesponstrip",
          "title": "Average Number of People (per Trip)",
          "inputType": "number"
         }
        ]
       }
      ],
      "title": "Transportation",
      "description": "Details about Campus Transportations and commuting",
      "navigationTitle": "Transportation"
     },
     {
      "name": "Water Consumption",
      "elements": [
       {
        "type": "text",
        "name": "annualwaterconsumption",
        "title": "What is the annual water consumption of the university?",
        "inputType": "number"
       },
       {
        "type": "matrixdropdown",
        "name": "Sources of Water",
        "title": "Sources of Water Information",
        "columns": [
         {
          "name": "percentwater",
          "title": "Percentage of Water Source"
         },
         {
          "name": "sourceswaterusage",
          "title": "Sources Used For",
          "cellType": "checkbox",
          "colCount": 0,
          "choices": [
           {
            "value": "Source 1",
            "text": "Drinking Water"
           },
           {
            "value": "Source 2",
            "text": "Bathroom"
           },
           {
            "value": "Source 3",
            "text": "Kitchen"
           },
           {
            "value": "Source 4",
            "text": "Irrigation and Landscape"
           },
           {
            "value": "Source 5",
            "text": "Heating/Cooling"
           }
          ],
          "showOtherItem": true,
          "storeOthersAsComment": true
         }
        ],
        "choices": [
         {
          "value": "Domestic",
          "text": "Domestic (Potable Water)"
         },
         "Treated"
        ],
        "cellType": "text",
        "rows": [
         "Domestic (Potable Water)",
         "Treated"
        ]
       },
       {
        "type": "boolean",
        "name": "waterconservationmeasures",
        "title": "Are there any water conservation measures or practices in place ?"
       },
       {
        "type": "matrixdynamic",
        "name": "waterconservetechniques",
        "visibleIf": "{waterconservationmeasures} = true",
        "title": "Water Conservation Techniques",
        "columns": [
         {
          "name": "waterconscolumn",
          "title": "Please add all conservation practices"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rowCount": 1,
        "confirmDelete": true
       }
      ],
      "title": "Water Consumption",
      "description": "Details about Water Consumption",
      "navigationTitle": "Water Consumption"
     },
     {
      "name": "Solid Waste Disposal",
      "elements": [
       {
        "type": "text",
        "name": "annualwastegeneration",
        "title": "What is the annual solid waste generation on Campus?",
        "description": "*Please provide data on the total weight or volume of waste produced."
       },
       {
        "type": "matrixdropdown",
        "name": "waterdisposablematrix",
        "title": "Waste Disposable Strategy",
        "columns": [
         {
          "name": "Percentage",
          "totalType": "sum",
          "totalDisplayStyle": "percent"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rows": [
         {
          "value": "Row 1",
          "text": "Landfill"
         },
         {
          "value": "Row 2",
          "text": "Recycling Plant"
         },
         {
          "value": "Row 3",
          "text": "Composting"
         }
        ]
       },
       {
        "type": "matrixdropdown",
        "name": "Insnightscomposwaste",
        "title": "Provide insights into the composition of the waste generated on campus (e.g., the percentage of organic waste, plastics, paper, etc.)?",
        "columns": [
         {
          "name": "Percentage",
          "totalType": "sum",
          "totalDisplayStyle": "percent"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rows": [
         "Organic Waste",
         "Paper",
         "Plastic",
         "Metal and E-Waste",
         "Glass",
         "Hazardous Waste",
         "C&D",
         "Other"
        ]
       },
       {
        "type": "boolean",
        "name": "waterstreamsemission",
        "title": "Are there specific waste streams that generate significant emissions (e.g., food waste, hazardous waste)?"
       },
       {
        "type": "checkbox",
        "name": "streamsapplywaste",
        "visibleIf": "{waterstreamsemission} = true",
        "title": "Check all streams that apply:",
        "choices": [
         "Organic Waste",
         "Paper",
         "Plastic",
         "Metal and E-Waste",
         "Glass",
         "Hazardous Waste",
         "C&D"
        ],
        "showOtherItem": true
       },
       {
        "type": "boolean",
        "name": "campusbins",
        "title": "Are there waste collection bins for recycling and composting across the campus?"
       },
       {
        "type": "boolean",
        "name": "reductioninitiatives",
        "title": "Are there waste reduction initiatives or campaigns on campus, such as reducing single-use plastics?"
       }
      ],
      "title": "Solid Waste Disposal",
      "description": "Details about Solid Waste Disposal",
      "navigationTitle": "Solid Waste Disposal"
     },
     {
      "name": "Paper Use",
      "elements": [
       {
        "type": "text",
        "name": "annualpaperusage",
        "title": "How much paper does the university procure ?"
       },
       {
        "type": "radiogroup",
        "name": "durationofannualusage",
        "title": "Duration of paper procurement",
        "choices": [
         {
          "value": "Item 1",
          "text": "Monthly"
         },
         {
          "value": "Item 2",
          "text": "Annually"
         }
        ]
       },
       {
        "type": "boolean",
        "name": "paperrecycling",
        "title": "Is there any paper recycling program on Campus?"
       },
       {
        "type": "text",
        "name": "percentrecycled",
        "visibleIf": "{paperrecycling} = true",
        "title": "How effective is the recycling program?",
        "description": "Percentage Recycled ",
        "inputType": "number",
        "placeholder": "% Recycled"
       },
       {
        "type": "boolean",
        "name": "effortstoreducepaper",
        "title": "Are there efforts to reduce paper consumption, such as promoting double-sided printing or digital document sharing?"
       },
       {
        "type": "text",
        "name": "guidelinesforpaper",
        "title": "Are there specific guidelines for responsible paper procurement?"
       },
       {
        "type": "text",
        "name": "annualcostofpaper",
        "title": "Annual Cost of Paper",
        "description": "Add Budget (Average)"
       }
      ],
      "title": "Paper Use",
      "description": "Details about Campus paper use",
      "navigationTitle": "Paper Use"
     },
     {
      "name": "Refrigerants",
      "elements": [
       {
        "type": "matrixdynamic",
        "name": "Refrigerantsamatrix",
        "title": "Refrigerants Matrix",
        "columns": [
         {
          "name": "Type of Refrigerants",
          "cellType": "dropdown",
          "choices": [
           "ChloroFluoroCarbons (CFC), Methane Based",
           "HydroChloroFluoroCarbons (HCFC)",
           "HydroCarbons (HC)",
           "HydroFluoroCarbon (HFC)",
           "HydroFluoroOlefin (HFO)"
          ],
          "showOtherItem": true
         },
         {
          "name": "How many do you use?",
          "cellType": "dropdown",
          "choices": [
           "More Than 5",
           "10-25",
           "35-50",
           "50+"
          ]
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "rowCount": 1
       },
       {
        "type": "text",
        "name": "areaofrefr",
        "title": "What is the area of refrigerants used in a space?"
       }
      ],
      "title": "Refrigerants",
      "navigationTitle": "Refrigerants"
     },
     {
      "name": "Landscaping",
      "elements": [
       {
        "type": "multipletext",
        "name": "greentypes",
        "title": "What is the green / landscaped area on your campus grounds?",
        "items": [
         {
          "name": "text1",
          "title": "Number of Trees"
         },
         {
          "name": "text2",
          "title": "Number of Loans"
         },
         {
          "name": "text3",
          "title": "Number of Shrubs"
         }
        ]
       },
       {
        "type": "matrixdynamic",
        "name": "question6",
        "title": "What is the type of fertilizers used on your campus?",
        "columns": [
         {
          "name": "Type of Fertilizer",
          "title": "Type of Fertilizer",
          "cellType": "dropdown",
          "choices": [
           "Synthetic (Emissions)",
           "Compost",
           "Organic"
          ],
          "showOtherItem": true
         },
         {
          "name": "Column 2",
          "title": "Percentage",
          "cellType": "text",
          "totalType": "sum",
          "totalDisplayStyle": "percent",
          "inputType": "number"
         }
        ],
        "choices": [
         {
          "value": "Item 1",
          "text": "Synthetic (Emissions)"
         },
         {
          "value": "Item 2",
          "text": "Compost"
         },
         {
          "value": "Item 3",
          "text": "Organic"
         }
        ],
        "rowCount": 1,
        "confirmDelete": true
       },
       {
        "type": "text",
        "name": "avgfertilizers",
        "title": "What is the average cost of the fertilizers used? (estimate in Tonnes)",
        "inputType": "number"
       }
      ],
      "title": "Landscaping"
     }
    ],
    "showProgressBar": "top",
    "progressBarType": "buttons",
    "progressBarShowPageTitles": true,
    "showTOC": true,
    "autoGrowComment": true,
    "allowResizeComment": false,
    "completeText": "Submit Answers",
    "previewText": "Preview Answers",
    "questionStartIndex": "1 -",
    "firstPageIsStarted": true,
    "showPreviewBeforeComplete": "showAllQuestions",
    "widthMode": "responsive"
   }