const locations = [
  // Parks
  {id:1, name:"Magazine Beach", lat:42.3558, lng:-71.1154, cat:"parks", seasonal:true,
   desc:"668 Memorial Dr. Restrooms at park pavilion. Bath house (719 Memorial Dr) in summer.", hours:"Seasonal: mid-Apr to mid-Oct"},
  {id:2, name:"MIT Sailing Pavilion", lat:42.3592, lng:-71.0876, cat:"recreation_centers", seasonal:true,
   desc:"135 Memorial Dr. Porta-potties near dock area.", hours:"Seasonal: spring-fall"},
  {id:3, name:"Cambridge Boat Club / Eliot Bridge", lat:42.3717, lng:-71.1329, cat:"recreation_centers", seasonal:true,
   desc:"Portable restrooms + water cooler near kayak/boat rental, west of Eliot Bridge.", hours:"Seasonal: spring-fall"},
  {id:4, name:"Weeks Footbridge area", lat:42.3685, lng:-71.1178, cat:"parks", seasonal:true,
   desc:"Portable restrooms on Cambridge side, adjacent to recreation fields.", hours:"Seasonal"},
  {id:5, name:"Charles River Canoe & Kayak", lat:42.3690, lng:-71.1312, cat:"recreation_centers", seasonal:true,
   desc:"1071 Soldiers Field Rd. Porta-potties when open.", hours:"Seasonal: spring-fall"},
  {id:6, name:"Shannon Beach", lat:42.3648, lng:-71.1365, cat:"parks", seasonal:true,
   desc:"Near Soldiers Field Rd. Portable toilets in summer.", hours:"Seasonal: summer"},

  // Parks & Recreation
  {id:7, name:"DCR Hatch Shell", lat:42.3573, lng:-71.0737, cat:"parks", seasonal:true,
   desc:"Behind the shell, near Fielder Footbridge. Public restrooms + accessible portables.", hours:"Seasonal: mid-Apr to mid-Oct, dawn-dusk"},
  {id:8, name:"Dartmouth St. Facility", lat:42.3551, lng:-71.0779, cat:"parks", seasonal:true,
   desc:"Next to Dartmouth St. Footbridge. Public restrooms.", hours:"Seasonal: dawn-dusk"},
  {id:9, name:"Teddy Ebersol Red Sox Fields", lat:42.3637, lng:-71.0719, cat:"sports_fields", seasonal:true,
   desc:"Portable restrooms adjacent to the fields.", hours:"Seasonal"},
  {id:10, name:"Alfond Memorial Spray Deck", lat:42.3651, lng:-71.0700, cat:"parks", seasonal:true,
   desc:"Portable restrooms nearby.", hours:"Seasonal"},
  {id:11, name:"Charlesbank / Smith Pavilion", lat:42.3637, lng:-71.0712, cat:"parks", seasonal:false,
   desc:"Near Science Museum / Longfellow Bridge. New year-round restrooms coming. Check esplanade.org.", hours:"Coming soon - year-round"},
  {id:12, name:"Community Boating", lat:42.3598, lng:-71.0731, cat:"recreation_centers", seasonal:true,
   desc:"21 David G. Mugar Way. Restrooms when boathouse is open.", hours:"Seasonal"},
  {id:13, name:"Artesani Park", lat:42.3643, lng:-71.1378, cat:"parks", seasonal:true,
   desc:"1255 Soldiers Field Rd, Brighton. Porta-potties + water/bathrooms in summer.", hours:"Seasonal: summer"},
  {id:14, name:"BU Bridge area", lat:42.3530, lng:-71.1080, cat:"parks", seasonal:true,
   desc:"Near Storrow Dr path. Portable restrooms near recreation fields.", hours:"Seasonal"},

  // Parks & Nature
  {id:15, name:"Fresh Pond Ranger Station", lat:42.3846, lng:-71.1495, cat:"parks", seasonal:false,
   desc:"250 Fresh Pond Pkwy. Restrooms under clock tower.", hours:"Year-round: 7am-5pm daily"},
  {id:16, name:"Maynard Ecology Center", lat:42.3897, lng:-71.1486, cat:"recreation_centers", seasonal:false,
   desc:"Fresh Pond Reservation. Restrooms during building hours.", hours:"Year-round: building hours"},

  // Parks & Recreation
  {id:17, name:"Jamaica Pond Boathouse", lat:42.3159, lng:-71.1175, cat:"recreation_centers", seasonal:false,
   desc:"507 Jamaicaway. Wheelchair accessible restrooms.", hours:"Year-round: dawn-dusk"},
  {id:18, name:"Arnold Arboretum - Hunnewell", lat:42.3074, lng:-71.1208, cat:"parks", seasonal:false,
   desc:"125 Arborway. Restrooms in the Hunnewell Building.", hours:"Year-round: 10am-4pm daily"},
  {id:19, name:"Arnold Arboretum - Arborway Gate portables", lat:42.2985, lng:-71.1230, cat:"parks", seasonal:false,
   desc:"Accessible porta-potties near Arborway Gate, Hemlock Hill Rd, and Peters Hill.", hours:"Year-round"},
  {id:20, name:"Olmsted Park / Leverett Pond", lat:42.3270, lng:-71.1160, cat:"parks", seasonal:true,
   desc:"Portable restrooms in summer. Limited options.", hours:"Seasonal: summer"},
  {id:21, name:"Franklin Park Golf Club House", lat:42.3011, lng:-71.0885, cat:"sports_fields", seasonal:true,
   desc:"William J. Devine Golf Course. Restrooms during golf season.", hours:"Seasonal"},
  {id:22, name:"Franklin Park Zoo", lat:42.3028, lng:-71.0876, cat:"attractions", seasonal:false,
   desc:"1 Franklin Park Rd. Restrooms inside (requires admission).", hours:"Year-round (admission req)"},

  // Harvard
  {id:23, name:"Harvard Sq Portland Loo", lat:42.3735, lng:-71.1189, cat:"university", seasonal:false, is24hr:true,
   desc:"Small park between Cambridge Common and Harvard Sq. Standalone outdoor unit.", hours:"24/7/365"},
  {id:24, name:"Harvard Smith Campus Center", lat:42.3723, lng:-71.1187, cat:"university", seasonal:false,
   desc:"1350 Mass Ave. Public restrooms 1st floor + single-use 2nd floor. Walk right in.", hours:"Year-round: business hours"},
  {id:25, name:"Harvard Yard / Widener Library", lat:42.3738, lng:-71.1165, cat:"university", seasonal:false,
   desc:"Most libraries need Harvard ID. Use Smith Campus Center instead.", hours:"Harvard ID required"},
  {id:26, name:"Cambridge Common Portland Loo", lat:42.3767, lng:-71.1210, cat:"university", seasonal:false, is24hr:true,
   desc:"1500 Mass Ave. Portland Loo public toilet.", hours:"24/7/365"},

  // MIT
  {id:27, name:"MIT Stata Center (Bldg 32)", lat:42.3616, lng:-71.0911, cat:"university", seasonal:false,
   desc:"32 Vassar St. Lobby/2nd floor open to public. Ground floor restrooms.", hours:"Year-round: M-F 6am-7pm"},
  {id:28, name:"MIT Student Center (W20)", lat:42.3590, lng:-71.0948, cat:"university", seasonal:false,
   desc:"84 Mass Ave. Open to public daytime. Restrooms on multiple floors.", hours:"Year-round: daytime"},
  {id:29, name:"MIT Building 7 (Infinite Corridor)", lat:42.3593, lng:-71.0934, cat:"university", seasonal:false,
   desc:"77 Mass Ave. Main entrance open weekdays. Restrooms off main corridor.", hours:"Year-round: M-F 6am-7pm"},

  // Public Buildings
  {id:30, name:"Cambridge City Hall", lat:42.3671, lng:-71.1056, cat:"public_bldg", seasonal:false,
   desc:"795 Mass Ave (Central Square). Public restrooms.", hours:"Year-round: weekday business hrs"},
  {id:31, name:"Cambridge City Hall Annex", lat:42.3704, lng:-71.1032, cat:"public_bldg", seasonal:false,
   desc:"345 Broadway. Public restrooms.", hours:"Year-round: business hours"},
  {id:32, name:"Cambridge Public Library (Main)", lat:42.3740, lng:-71.1105, cat:"public_bldg", seasonal:false,
   desc:"449 Broadway. Restrooms on multiple floors.", hours:"M-Th 9am-9pm, F-Sa 9-5, Su 1-5"},
  {id:33, name:"Boudreau Branch Library", lat:42.3834, lng:-71.1326, cat:"public_bldg", seasonal:false,
   desc:"245 Concord Ave. Near Fresh Pond.", hours:"Year-round: library hours"},
  {id:34, name:"War Memorial Rec Center", lat:42.3738, lng:-71.1105, cat:"public_bldg", seasonal:false,
   desc:"459 Broadway (Cambridge Rindge & Latin). Public restrooms.", hours:"Year-round: open hours"},

  // Hospitals
  {id:35, name:"CHA Cambridge Hospital", lat:42.3752, lng:-71.1048, cat:"hospital", seasonal:false, is24hr:true,
   desc:"1493 Cambridge St. Reception 6am-8pm. ER 24 hours.", hours:"Reception 6am-8pm / ER 24hr"},
  {id:36, name:"CHA Windsor St Health Center", lat:42.3647, lng:-71.0968, cat:"hospital", seasonal:false,
   desc:"119 Windsor St (near Central Sq).", hours:"M-F 7am-9pm, Sat 9am-3pm"},
  {id:37, name:"CHA Cambridge Family Health", lat:42.3740, lng:-71.1009, cat:"hospital", seasonal:false,
   desc:"237 Hampshire St (Inman/Central).", hours:"Mon 8:30am-8pm, Tu-F 8:30-5"},
  {id:38, name:"CHA East Cambridge Health Ctr", lat:42.3731, lng:-71.0854, cat:"hospital", seasonal:false,
   desc:"163 Gore St.", hours:"Weekday afternoons/evenings"},
  {id:39, name:"CHA Family Health North", lat:42.3916, lng:-71.1233, cat:"hospital", seasonal:false,
   desc:"2067 Mass Ave (Porter Sq).", hours:"Weekday business hours"},
  {id:40, name:"Mount Auburn Hospital", lat:42.3741, lng:-71.1342, cat:"hospital", seasonal:false, is24hr:true,
   desc:"330 Mount Auburn St. Main lobby restrooms.", hours:"24 hours"},
  {id:41, name:"Beth Israel Deaconess", lat:42.3398, lng:-71.1049, cat:"hospital", seasonal:false,
   desc:"330 Brookline Ave. Near Emerald Necklace.", hours:"Year-round: lobby hours"},
  {id:42, name:"Boston Children's Hospital", lat:42.3381, lng:-71.1060, cat:"hospital", seasonal:false,
   desc:"300 Longwood Ave. Near Emerald Necklace/Riverway.", hours:"Year-round: lobby hours"},
  {id:43, name:"Brigham and Women's Hospital", lat:42.3362, lng:-71.1070, cat:"hospital", seasonal:false,
   desc:"75 Francis St. Near Emerald Necklace/Riverway.", hours:"Year-round: lobby hours"},

  // MBTA
  {id:44, name:"Harvard Station (Red Line)", lat:42.3733, lng:-71.1206, cat:"transit", seasonal:false,
   desc:"Restroom outside fare gates.", hours:"During service hours"},
  {id:45, name:"Kendall/MIT Station (Red Line)", lat:42.3627, lng:-71.0862, cat:"transit", seasonal:false,
   desc:"Restroom available.", hours:"During service hours"},

  // Central Square & Parks
  {id:47, name:"Central Sq Portland Loo", lat:42.3653, lng:-71.1036, cat:"public_bldg", seasonal:false, is24hr:true,
   desc:"Near Central Square T stop. Standalone outdoor unit.", hours:"24/7"},
  {id:48, name:"Starlight Square / Carl Barron Plaza", lat:42.3648, lng:-71.1038, cat:"parks", seasonal:true,
   desc:"Mass Ave at Central Sq. Portable restrooms during programming.", hours:"Seasonal"},
  {id:49, name:"Sennott Park", lat:42.3685, lng:-71.1000, cat:"parks", seasonal:true,
   desc:"305 Broadway (at Norfolk St). Portable restrooms. Near Central Square.", hours:"Seasonal"},

  // Attractions & Other
  {id:50, name:"New England Aquarium", lat:42.3554, lng:-71.0504, cat:"attractions", seasonal:false,
   desc:"1 Central Wharf. Lobby restrooms (admission may be required).", hours:"Year-round"},
  {id:51, name:"Boston Common / Public Garden", lat:42.3550, lng:-71.0661, cat:"parks", seasonal:true,
   desc:"Portable restrooms in park. Visitor center may be year-round.", hours:"Mostly seasonal"},
  {id:52, name:"CambridgeSide", lat:42.3688, lng:-71.0760, cat:"other", seasonal:false,
   desc:"100 CambridgeSide Pl. Mall restrooms. Easy from Charles River path.", hours:"Year-round: mall hours"},
  {id:53, name:"Museum of Science", lat:42.3674, lng:-71.0711, cat:"attractions", seasonal:false,
   desc:"1 Museum of Science Dr. Lobby restrooms. On Charles River Dam.", hours:"Year-round: museum hours"},
  {id:54, name:"Whole Foods (River St)", lat:42.3610, lng:-71.1140, cat:"other", seasonal:false,
   desc:"Customer restrooms, generally accessible. Near Central Sq.", hours:"Year-round: store hours"},
  {id:55, name:"Charles Hotel", lat:42.3723, lng:-71.1222, cat:"hotel", seasonal:false,
   desc:"1 Bennett St, Harvard Sq. Walk in and use lobby restrooms.", hours:"Year-round: 24hr lobby"},

  // Boston Public Restrooms (from boston.gov)
  {id:56, name:"Boston Public Library - Central", lat:42.3494, lng:-71.0784, cat:"public_bldg", seasonal:false,
   desc:"700 Boylston St (Back Bay). Major branch with multiple restrooms.", hours:"M-Th 9am-9pm, F-Sa 9am-5pm, Su 1-5pm"},
  {id:57, name:"Faneuil Hall", lat:42.3636, lng:-71.0550, cat:"attractions", seasonal:false,
   desc:"4 S. Market St (Downtown). Historic marketplace with public restrooms.", hours:"Year-round: marketplace hours"},
  {id:58, name:"Boston City Hall", lat:42.3588, lng:-71.0576, cat:"public_bldg", seasonal:false,
   desc:"1 City Hall Square (Downtown). Government building with public restrooms.", hours:"Year-round: weekday business hours"},
  {id:59, name:"Boston Harbor Hotel", lat:42.3562, lng:-71.0504, cat:"hotel", seasonal:false,
   desc:"70 Rowes Wharf (Waterfront). Upscale hotel — walk in and use lobby restrooms.", hours:"Year-round: 24hr lobby"},
  {id:60, name:"Boston Public Library - Charlestown", lat:42.3783, lng:-71.0594, cat:"public_bldg", seasonal:false,
   desc:"179 Main St (Charlestown). Branch library near Bunker Hill.", hours:"Library hours"},
  {id:61, name:"Boston Public Library - East Boston", lat:42.3840, lng:-71.0298, cat:"public_bldg", seasonal:false,
   desc:"365 Bremen St (East Boston). Neighborhood library branch.", hours:"Library hours"},
  {id:62, name:"Constitution Beach", lat:42.3844, lng:-71.0098, cat:"parks", seasonal:true,
   desc:"East Boston waterfront beach with seasonal facilities.", hours:"Seasonal: summer months"},
  {id:63, name:"BCYF Curley Recreation Center", lat:42.3315, lng:-71.0524, cat:"recreation_centers", seasonal:false,
   desc:"1663 Columbia Rd (South Boston). City recreation facility.", hours:"Year-round: facility hours"},
  {id:64, name:"Boston Public Library - South Boston", lat:42.3354, lng:-71.0511, cat:"public_bldg", seasonal:false,
   desc:"646 East Broadway (South Boston). Neighborhood branch.", hours:"Library hours"},
  {id:65, name:"Carson Beach", lat:42.3298, lng:-71.0487, cat:"parks", seasonal:true,
   desc:"165 William J. Day Blvd (South Boston). Summer beach facility.", hours:"Seasonal: summer months"},
  {id:66, name:"Boston Fire Dept District 4", lat:42.3403, lng:-71.0748, cat:"public_bldg", seasonal:false,
   desc:"200 Columbus Ave (Back Bay). Fire station with public access.", hours:"Year-round: daytime hours"},

  // Additional Boston Locations - North End & Downtown
  {id:67, name:"DCR Steriti Memorial Rink", lat:42.3743, lng:-71.0536, cat:"recreation_centers", seasonal:false,
   desc:"561 Commercial St (North End). Ice skating rink with public restrooms.", hours:"Year-round: facility hours"},
  {id:68, name:"BCYF Nazzaro Pool", lat:42.3728, lng:-71.0546, cat:"recreation_centers", seasonal:false,
   desc:"30 North Bennet St (North End). Recreation pool facility.", hours:"Year-round: pool hours"},
  {id:69, name:"Boston Public Library - North End", lat:42.3667, lng:-71.0530, cat:"public_bldg", seasonal:false,
   desc:"25 Parmenter St (North End). Library branch.", hours:"Library hours"},
  {id:70, name:"City Toilet - City Hall Plaza", lat:42.3593, lng:-71.0580, cat:"public_bldg", seasonal:false, is24hr:true,
   desc:"1 City Hall Square (Downtown). Standalone public toilet unit.", hours:"24/7"},
  {id:71, name:"City Toilet - Atlantic Ave", lat:42.3580, lng:-71.0510, cat:"public_bldg", seasonal:false, is24hr:true,
   desc:"206 Atlantic Ave (Downtown). Standalone public toilet unit.", hours:"24/7"},
  {id:72, name:"City Toilet - Long Wharf", lat:42.3595, lng:-71.0495, cat:"public_bldg", seasonal:false, is24hr:true,
   desc:"2 Long Wharf (Waterfront). Standalone public toilet unit.", hours:"24/7"},
  {id:73, name:"Boston Public Library - Chinatown", lat:42.3528, lng:-71.0629, cat:"public_bldg", seasonal:false,
   desc:"2 Boylston St (Chinatown). Library branch.", hours:"Library hours"},
  {id:74, name:"Boston Public Library - South End", lat:42.3451, lng:-71.0743, cat:"public_bldg", seasonal:false,
   desc:"685 Tremont St (South End). Library branch.", hours:"Library hours"},
  {id:75, name:"Boston Public Library - West End", lat:42.3660, lng:-71.0644, cat:"public_bldg", seasonal:false,
   desc:"151 Cambridge St (West End). Library branch.", hours:"Library hours"},
  {id:76, name:"Boston Fire Dept District 4 Engine 33", lat:42.3481, lng:-71.0857, cat:"public_bldg", seasonal:false,
   desc:"941 Boylston St (Back Bay). Fire station with public access.", hours:"Year-round: daytime hours"},

  // Charlestown Additions
  {id:77, name:"BCYF Clougherty Pool", lat:42.3808, lng:-71.0610, cat:"recreation_centers", seasonal:false,
   desc:"331 Bunker Hill St (Charlestown). Community pool facility.", hours:"Year-round: pool hours"},
  {id:78, name:"BCYF Golden Age Center", lat:42.3778, lng:-71.0596, cat:"recreation_centers", seasonal:false,
   desc:"382 Main St (Charlestown). Recreation center.", hours:"Year-round: facility hours"},
  {id:79, name:"City Toilet - Charlestown", lat:42.3834, lng:-71.0614, cat:"public_bldg", seasonal:false, is24hr:true,
   desc:"197 Eighth St (Charlestown). Standalone public toilet unit.", hours:"24/7"},
  {id:80, name:"Spaulding Rehab Hospital Boston", lat:42.3789, lng:-71.0492, cat:"hospital", seasonal:false,
   desc:"300 1st Ave (Charlestown). Hospital with public restroom access.", hours:"Year-round: lobby hours"},
  {id:81, name:"Charlestown Marina", lat:42.3745, lng:-71.0494, cat:"recreation_centers", seasonal:false,
   desc:"1 Pier 8 (Charlestown). Marina facility with restrooms.", hours:"Year-round: facility hours"},

  // East Boston
  {id:82, name:"BCYF Paris Street", lat:42.3839, lng:-71.0304, cat:"recreation_centers", seasonal:false,
   desc:"112 Paris St (East Boston). Recreation center.", hours:"Year-round: facility hours"},
  {id:83, name:"Piers Park", lat:42.3815, lng:-71.0237, cat:"parks", seasonal:false,
   desc:"211-255 Marginal St (East Boston). Waterfront park with restrooms.", hours:"Year-round: dawn-dusk"},

  // Fort Point Channel
  {id:84, name:"Boston Children's Museum", lat:42.3510, lng:-71.0432, cat:"attractions", seasonal:false,
   desc:"308 Congress St (Fort Point). Museum with restrooms.", hours:"Year-round: museum hours"},
  {id:85, name:"Institute of Contemporary Art", lat:42.3529, lng:-71.0430, cat:"attractions", seasonal:false,
   desc:"25 Harbor Shore Dr (Seaport). Art museum with public restrooms.", hours:"Year-round: museum hours"},

  // Dorchester & Adjacent
  {id:86, name:"BCYF Grove Hall", lat:42.3253, lng:-71.0847, cat:"recreation_centers", seasonal:false,
   desc:"51 Geneva Ave (Dorchester). Recreation center.", hours:"Year-round: facility hours"},
  {id:87, name:"Boston Public Library - Grove Hall", lat:42.3244, lng:-71.0854, cat:"public_bldg", seasonal:false,
   desc:"41 Geneva Ave (Dorchester). Library branch.", hours:"Library hours"},

  // South Boston Additional
  {id:88, name:"BCYF South Boston Senior Center", lat:42.3305, lng:-71.0525, cat:"recreation_centers", seasonal:false,
   desc:"1663 Columbia Rd (South Boston). Community facility.", hours:"Year-round: facility hours"},
  {id:89, name:"City Toilet - Drydock Ave", lat:42.3494, lng:-71.0467, cat:"public_bldg", seasonal:false, is24hr:true,
   desc:"12 Drydock Ave (South Boston). Standalone public toilet unit.", hours:"24/7"},
  {id:90, name:"Castle Island", lat:42.3388, lng:-71.0111, cat:"parks", seasonal:false,
   desc:"2010 William J Day Blvd (South Boston). Historic park with restrooms.", hours:"Year-round: dawn-dusk"},

  // Brookline
  {id:91, name:"Brookline Public Library (Main)", lat:42.3344, lng:-71.1217, cat:"public_bldg", seasonal:false,
   desc:"361 Washington St (Brookline Village). Main library with public restrooms on multiple floors.", hours:"M-Th 9am-9pm, F-Sa 9am-5pm, Su 1-5pm"},
  {id:92, name:"Brookline Public Library (Coolidge Corner)", lat:42.3421, lng:-71.1213, cat:"public_bldg", seasonal:false,
   desc:"31 Pleasant St (Coolidge Corner). Branch library with public restrooms.", hours:"Library hours"},
  {id:93, name:"Brookline Town Hall", lat:42.3339, lng:-71.1206, cat:"public_bldg", seasonal:false,
   desc:"333 Washington St (Brookline Village). Public restrooms during business hours.", hours:"M-Th 8am-5pm, F 8am-12:30pm"},
  {id:94, name:"Brookline Public Safety Building", lat:42.3340, lng:-71.1204, cat:"public_bldg", seasonal:false, is24hr:true,
   desc:"350 Washington St (Brookline Village). Police headquarters with 24-hour accessible restrooms.", hours:"24 hours"},
  {id:95, name:"Brookline High School (Tappan Gym)", lat:42.3320, lng:-71.1287, cat:"recreation_centers", seasonal:false,
   desc:"66 Tappan St. Recreation facility with restrooms. Check for public hours.", hours:"Facility hours"},
  {id:96, name:"Larz Anderson Park", lat:42.3125, lng:-71.1355, cat:"parks", seasonal:true,
   desc:"Goddard Ave & Newton St. Park with restrooms available seasonally (spring-fall).", hours:"Seasonal: dawn-dusk"},
  {id:97, name:"Harry Downes Field", lat:42.3246, lng:-71.1182, cat:"sports_fields", seasonal:true,
   desc:"67 Highland Rd. Sports field with seasonal restroom facilities.", hours:"Seasonal: daytime hours"},
  {id:98, name:"Amory Playground", lat:42.3460, lng:-71.1132, cat:"parks", seasonal:true,
   desc:"45 Amory St. Playground with seasonal portable restrooms (spring-fall).", hours:"Seasonal: daytime hours"},

  // Watertown / Brighton (west of Charles River)
  {id:99, name:"Watertown Free Public Library", lat:42.3675, lng:-71.1868, cat:"public_bldg", seasonal:false,
   desc:"123 Main St (Watertown). Public library with restrooms. Close to Charles River path.", hours:"M-Th 9am-9pm, F 9am-7pm, Sa 9am-5pm, Su 1-5pm"},
  {id:100, name:"Saltonstall Park (Watertown)", lat:42.3687, lng:-71.1877, cat:"parks", seasonal:false,
   desc:"149 Main St (Watertown). Park with restrooms in adjacent City Hall building. Event venue.", hours:"Year-round: City Hall hours M-Th 8am-5pm, F 8am-12:30pm"},
  {id:101, name:"Oak Square YMCA", lat:42.3460, lng:-71.1395, cat:"recreation_centers", seasonal:false,
   desc:"615 Washington St (Brighton). Full-service YMCA with pool and restrooms. Charles River nearby.", hours:"M-Th 6am-10pm, F 6am-7pm, Sa 7am-5pm, Su 8am-4pm"},
  {id:102, name:"BILH Care Center - Watertown (Mt Auburn)", lat:42.3661, lng:-71.2070, cat:"hospital", seasonal:false,
   desc:"480 Pleasant St (Watertown). Medical facility with urgent care and primary care. Restrooms available.", hours:"Primary Care M 8am-7pm Tu-F 8am-5pm, Urgent Care M-F 9am-7pm Sa-Su 9am-5pm"},
  {id:103, name:"Brighton Branch Library", lat:42.3476, lng:-71.1525, cat:"public_bldg", seasonal:false,
   desc:"40 Academy Hill Rd (Brighton). Boston Public Library branch with restrooms.", hours:"M 12-8pm, Tu-W 10-6, Th 12-8, F-Sa 9-5, Su Closed"},

  // Somerville
  {id:104, name:"Somerville Public Library - Central", lat:42.3852, lng:-71.0942, cat:"public_bldg", seasonal:false,
   desc:"79 Highland Ave (Central Somerville). Main library branch with public restrooms on multiple floors.", hours:"M-Th 9am-9pm, F-Sa 9am-5pm, Su 1-5pm"},
  {id:105, name:"Somerville Public Library - East Branch", lat:42.3879, lng:-71.0839, cat:"public_bldg", seasonal:false,
   desc:"115 Broadway (East Somerville). Library branch with public restrooms.", hours:"Library hours: call (617) 623-5000"},
  {id:106, name:"CHA Somerville Campus", lat:42.3896, lng:-71.1094, cat:"hospital", seasonal:false, is24hr:true,
   desc:"33 Tower St (Davis Square area). Medical center and psychiatric hospital with 24-hour lobby access.", hours:"24 hours"},
  {id:107, name:"Somerville YMCA", lat:42.3871, lng:-71.0992, cat:"recreation_centers", seasonal:false,
   desc:"101 Highland Ave (Somerville). Full-service YMCA with pool, locker rooms, and restrooms.", hours:"M-F 5:30am-9pm, Sa-Su 7am-8pm"},

  // Medford / Tufts
  {id:108, name:"Medford Public Library", lat:42.4198, lng:-71.1142, cat:"public_bldg", seasonal:false,
   desc:"111 High St (Medford). Main library with public restrooms. No ID required.", hours:"M-Th 9am-9pm, F 9am-6pm, Sa 9am-5pm"},
  {id:109, name:"Medford City Hall", lat:42.4186, lng:-71.1057, cat:"public_bldg", seasonal:false,
   desc:"85 George P Hassett Dr (Medford). Public restrooms during business hours.", hours:"M,Tu,Th 8:30am-4:30pm, W 8:30am-7:30pm, F 8:30am-12:30pm"},
  {id:110, name:"Tufts University - Mayer Campus Center", lat:42.4060, lng:-71.1201, cat:"university", seasonal:false,
   desc:"44 Professors Row (Medford/Somerville). Open to public. Restrooms inside, no student ID required.", hours:"M-Th 8am-12am, F 8am-1am, Sa 10am-1am, Su 10am-12am"},
  {id:111, name:"Tufts University - Tisch Library", lat:42.4064, lng:-71.1209, cat:"university", seasonal:false,
   desc:"35 Professors Row (Medford/Somerville). Open to public visitors. Restrooms available.", hours:"M-Th 8am-1am, F 8am-9pm, Su 10am-1am"},
  {id:112, name:"Medford/Tufts Green Line Station", lat:42.4104, lng:-71.1198, cat:"transit", seasonal:false,
   desc:"460 Boston Ave (Medford). Green Line Extension station with two accessible restrooms. May sometimes be locked.", hours:"During MBTA service hours (~5am-1am)"},
  {id:113, name:"Lawrence Memorial Hospital", lat:42.4263, lng:-71.1111, cat:"hospital", seasonal:false,
   desc:"170 Governors Ave (Medford). Part of Tufts Medicine. Lobby restrooms during operating hours.", hours:"Year-round: daytime hours"},
  {id:114, name:"Medford Recreation Center", lat:42.4193, lng:-71.1091, cat:"recreation_centers", seasonal:false,
   desc:"30 Forest St (Medford). City recreation facility with public restrooms.", hours:"Year-round: facility hours"},
  {id:115, name:"Wright's Pond Beach", lat:42.4384, lng:-71.0989, cat:"parks", seasonal:true,
   desc:"140 Elm St (Medford). Bathhouse with restrooms and concessions. Summer only.", hours:"Seasonal: mid-Jun to Labor Day"},
  {id:116, name:"Medford Senior Center", lat:42.4168, lng:-71.1055, cat:"public_bldg", seasonal:false,
   desc:"101 Riverside Ave (Medford). Barrier-free facility, publicly accessible during hours.", hours:"M-F 9am-4pm"},

  // Chestnut Hill / Newton
  {id:117, name:"Newton Free Library", lat:42.3365, lng:-71.2083, cat:"public_bldg", seasonal:false,
   desc:"330 Homer St (Newton Centre). Main library with public restrooms on multiple floors. No ID required.", hours:"M-Th 9am-9pm, F 9am-6pm, Sa 9am-5pm, Su 1-5pm"},
  {id:118, name:"Brookline Public Library - Putterham", lat:42.3020, lng:-71.1499, cat:"public_bldg", seasonal:false,
   desc:"959 W Roxbury Pkwy (Chestnut Hill). Branch library with public restrooms.", hours:"M 1-9pm, Tu 10am-6pm, W 1-9pm, Th 10am-6pm, F-Sa 10am-5pm"},
  {id:119, name:"Newton City Hall", lat:42.3382, lng:-71.2082, cat:"public_bldg", seasonal:false,
   desc:"1000 Commonwealth Ave (Newton Centre). Public restrooms during business hours. Wheelchair accessible.", hours:"M-F 8:30am-5pm"},
  {id:120, name:"Skyline Park", lat:42.3082, lng:-71.1680, cat:"parks", seasonal:true,
   desc:"815 Newton St (Chestnut Hill). Park with playground, walking paths, and restroom facility.", hours:"Seasonal: spring-fall, daytime hours"},
  {id:121, name:"Soule Recreation Center", lat:42.3254, lng:-71.1651, cat:"recreation_centers", seasonal:true,
   desc:"652 Hammond St (Chestnut Hill). Environmental center with restrooms. Splash pad in summer.", hours:"Seasonal: mid-Apr to mid-Nov, 7am-8pm"},
  {id:122, name:"The Shops at Chestnut Hill", lat:42.3204, lng:-71.1758, cat:"other", seasonal:false,
   desc:"199 Boylston St/Rte 9 (Chestnut Hill). Public restrooms on Level 1. Family restrooms available.", hours:"M-Sa 10am-9pm, Su 11am-6pm"},
  {id:123, name:"DCR Reilly Memorial Pool & Rink", lat:42.3356, lng:-71.1506, cat:"recreation_centers", seasonal:true,
   desc:"355 Chestnut Hill Ave (Cleveland Circle). Free outdoor pool in summer, ice rink in winter. Restrooms, showers, lockers.", hours:"Seasonal: pool summer ~11am-7pm, rink winter hours"},
  {id:124, name:"Newton Centre Playground (The Hut)", lat:42.3322, lng:-71.1977, cat:"recreation_centers", seasonal:false,
   desc:"81 Tyler Terrace (Newton Centre). Recreation building with gym and restrooms. Entrances from Centre St and Homer St.", hours:"Year-round: facility hours"},

  // Hotel Lobbies
  {id:125, name:"Boston Marriott Long Wharf", lat:42.3602, lng:-71.0510, cat:"hotel", seasonal:false,
   desc:"296 State St (Waterfront). Upscale hotel — walk in and use lobby restrooms.", hours:"Year-round: 24hr lobby"},
  {id:126, name:"Sheraton Boston Hotel", lat:42.3464, lng:-71.0836, cat:"hotel", seasonal:false,
   desc:"39 Dalton St (Back Bay/Prudential). Upscale hotel — walk in and use lobby restrooms.", hours:"Year-round: 24hr lobby"},
  {id:127, name:"Hyatt Regency Boston/Cambridge", lat:42.3540, lng:-71.1053, cat:"hotel", seasonal:false,
   desc:"575 Memorial Dr (Cambridge). Upscale hotel on Charles River — walk in and use lobby restrooms.", hours:"Year-round: 24hr lobby"},
  {id:128, name:"Boston Park Plaza", lat:42.3521, lng:-71.0633, cat:"hotel", seasonal:false,
   desc:"50 Park Plaza (Back Bay). Upscale hotel — walk in and use lobby restrooms.", hours:"Year-round: 24hr lobby"},
  {id:129, name:"Omni Parker House", lat:42.3578, lng:-71.0602, cat:"hotel", seasonal:false,
   desc:"60 School St (Downtown). Historic hotel — walk in and use lobby restrooms.", hours:"Year-round: 24hr lobby"},
  {id:130, name:"W Boston", lat:42.3509, lng:-71.0655, cat:"hotel", seasonal:false,
   desc:"100 Stuart St (Theater District). Upscale hotel — walk in and use lobby restrooms.", hours:"Year-round: 24hr lobby"},

  // Coffee Shops (Starbucks near running routes — addresses verified Feb 2026)
  {id:131, name:"Starbucks - Harvard Square", lat:42.3738, lng:-71.1131, cat:"coffee", seasonal:false,
   desc:"468 Broadway, Cambridge (Broadway Marketplace). Near Weeks Bridge/Charles River. Customer restroom — purchase may be expected.", hours:"Daily 5am-9pm"},
  {id:132, name:"Starbucks - Kendall Square", lat:42.3639, lng:-71.0881, cat:"coffee", seasonal:false,
   desc:"120 Broadway, Cambridge (in Marriott Cambridge). Near Charles River path. Customer restroom — purchase may be expected.", hours:"M-F 4:30am-9pm, Sa-Su 5am-9pm"},
  {id:133, name:"Starbucks - Davis Square", lat:42.3956, lng:-71.1226, cat:"coffee", seasonal:false,
   desc:"260 Elm St, Somerville. Near Community Path/Minuteman Bikeway. Customer restroom — purchase may be expected.", hours:"M-Th 5am-9:30pm, F-Sa 5am-10pm, Su 5:30am-9:30pm"},
  {id:134, name:"Starbucks - Back Bay (Boylston)", lat:42.3494, lng:-71.0810, cat:"coffee", seasonal:false,
   desc:"755 Boylston St, Boston. Near Charles River Esplanade. Customer restroom — purchase may be expected.", hours:"M-F 5am-7pm, Sa 5:30am-7pm, Su 6am-7pm"},
  {id:135, name:"Starbucks - Copley Square", lat:42.3516, lng:-71.0730, cat:"coffee", seasonal:false,
   desc:"443 Boylston St, Boston. Near BPL and Arlington St Esplanade access. Customer restroom — purchase may be expected.", hours:"M-F 5am-7:30pm, Sa 5:30am-7:30pm, Su 6am-7:30pm"},
  {id:136, name:"Starbucks - Boston Common", lat:42.3564, lng:-71.0693, cat:"coffee", seasonal:false,
   desc:"65-66 Beacon St, Boston. Right at Boston Common. Customer restroom — purchase may be expected.", hours:"Daily 5am-9pm"},
  {id:137, name:"Starbucks - Fenway", lat:42.3442, lng:-71.1014, cat:"coffee", seasonal:false,
   desc:"142-148 Brookline Ave, Boston. Near Emerald Necklace/Muddy River path. Customer restroom — purchase may be expected.", hours:"M-F 4:30am-8pm, Sa-Su 5am-8pm"},
  {id:138, name:"Starbucks - Central Square", lat:42.3656, lng:-71.1038, cat:"coffee", seasonal:false,
   desc:"655 Massachusetts Ave, Cambridge. Near River St bridge to Charles River. Customer restroom — purchase may be expected.", hours:"M-F 5am-9pm, Sa-Su 5:30am-9pm"},
  {id:139, name:"Starbucks - Cambridge St / MGH", lat:42.3610, lng:-71.0665, cat:"coffee", seasonal:false,
   desc:"222 Cambridge St, Boston. Near Science Museum end of Esplanade. Customer restroom — purchase may be expected.", hours:"Daily 5am-9pm"},
  {id:140, name:"Starbucks - Brookline Village", lat:42.3337, lng:-71.1187, cat:"coffee", seasonal:false,
   desc:"15 Harvard St, Brookline. Near Emerald Necklace path to Jamaica Pond. Customer restroom — purchase may be expected.", hours:"Daily 5am-7:30pm"},

  // Missing BPL Library Branches
  {id:141, name:"BPL - Roslindale Branch", lat:42.2856, lng:-71.1286, cat:"public_bldg", seasonal:false,
   desc:"4246 Washington St (Roslindale). Boston Public Library branch with public restrooms.", hours:"M-W 10am-6pm, Th 12-8pm, F-Sa 9am-5pm"},
  {id:142, name:"BPL - Connolly Branch (Jamaica Plain)", lat:42.3207, lng:-71.1111, cat:"public_bldg", seasonal:false,
   desc:"433 Centre St (Jamaica Plain). Boston Public Library branch with public restrooms.", hours:"M 12-8pm, Tu-Th 10am-6pm, F 9am-5pm, Sa 9am-2pm"},
  {id:143, name:"BPL - Adams Street Branch", lat:42.2863, lng:-71.0545, cat:"public_bldg", seasonal:false,
   desc:"690 Adams St (Dorchester). Boston Public Library branch with public restrooms.", hours:"M 12-8pm, Tu 10am-6pm, W 12-8pm, Th 10am-6pm, F-Sa 9am-5pm"},
  {id:144, name:"BPL - Fields Corner Branch", lat:42.2984, lng:-71.0603, cat:"public_bldg", seasonal:false,
   desc:"1520 Dorchester Ave (Dorchester). Boston Public Library branch with public restrooms. Note: closed for construction until summer 2026.", hours:"M 10am-6pm, Tu 12-8pm, W-Th 10am-6pm, F 9am-5pm, Sa 9am-2pm"},
  {id:145, name:"BPL - Lower Mills Branch", lat:42.2735, lng:-71.0684, cat:"public_bldg", seasonal:false,
   desc:"27 Richmond St (Dorchester). Boston Public Library branch with public restrooms.", hours:"M 12-8pm, Tu-W 10am-6pm, Th 12-8pm, F 9am-5pm, Sa 9am-2pm"},
  {id:146, name:"BPL - Shaw-Roxbury Branch", lat:42.3281, lng:-71.0836, cat:"public_bldg", seasonal:false,
   desc:"149 Dudley St (Roxbury/Nubian Sq). Boston Public Library branch with public restrooms.", hours:"M 12-8pm, Tu-Th 10am-6pm, F 9am-5pm, Sa 9am-2pm"},
  {id:147, name:"BPL - Parker Hill Branch", lat:42.3324, lng:-71.0991, cat:"public_bldg", seasonal:false,
   desc:"1497 Tremont St (Mission Hill). Boston Public Library branch with public restrooms.", hours:"M 10am-6pm, Tu 12-8pm, W 10am-6pm, Th 12-8pm, F-Sa 9am-5pm"},
  {id:148, name:"BPL - Mattapan Branch", lat:42.2775, lng:-71.0933, cat:"public_bldg", seasonal:false,
   desc:"1350 Blue Hill Ave (Mattapan). Boston Public Library branch with public restrooms.", hours:"M 10am-6pm, Tu 12-8pm, W 10am-6pm, Th 12-8pm, F-Sa 9am-5pm"},

  // Northeastern Campus / Southwest Corridor (Pierre Lallement Bike Path)
  {id:149, name:"Northeastern - Curry Student Center", lat:42.3390, lng:-71.0876, cat:"university", seasonal:false,
   desc:"346 Huntington Ave. Open to public. Restrooms on multiple floors. Starbucks inside. Other campus buildings require Husky Card.", hours:"M-F 7am-11pm, Sa-Su reduced hours"},
  {id:150, name:"Museum of Fine Arts (MFA)", lat:42.3394, lng:-71.0941, cat:"attractions", seasonal:false,
   desc:"465 Huntington Ave. Multiple restrooms throughout. Lobby/shop accessible without ticket. Free admission Wed after 4pm.", hours:"M-Tu 10am-5pm, W-F 10am-10pm, Sa-Su 10am-5pm"},
  {id:151, name:"Ruggles Station (Orange Line)", lat:42.3364, lng:-71.0890, cat:"transit", seasonal:false,
   desc:"1150 Tremont St (Roxbury). Restroom inside fare gates — ask MBTA staff. ADA-compliant. On SW Corridor bike path at Northeastern campus.", hours:"During MBTA service (~5am-1am)"},
  {id:152, name:"Reggie Lewis Track & Athletic Center", lat:42.3321, lng:-71.0928, cat:"recreation_centers", seasonal:false,
   desc:"1350 Tremont St (Roxbury Crossing). Public athletic facility. Restrooms and locker rooms during open hours/events. Adjacent to SW Corridor path.", hours:"Varies by event/open-track schedule"},
  {id:153, name:"BCYF Tobin Community Center", lat:42.3323, lng:-71.0983, cat:"recreation_centers", seasonal:false,
   desc:"1481 Tremont St (Mission Hill). Boston Centers for Youth & Families. Public restrooms, gym. Near SW Corridor path.", hours:"M-F 8am-9pm, Sa 9am-5pm"},
  {id:154, name:"BPL - Egleston Square Branch", lat:42.3142, lng:-71.0956, cat:"public_bldg", seasonal:false,
   desc:"2044 Columbus Ave (Roxbury). Boston Public Library branch with public restrooms. Near Stony Brook station on SW Corridor path.", hours:"M-Tu 10am-6pm, W 12-8pm, Th 10am-6pm, F 9am-5pm, Sa 9am-2pm"},
  {id:155, name:"Forest Hills Station (Orange Line)", lat:42.3007, lng:-71.1139, cat:"transit", seasonal:false,
   desc:"3699 Washington St (Jamaica Plain). Major transit hub at south end of SW Corridor bike path. Restrooms inside fare gates. Near Arnold Arboretum.", hours:"During MBTA service (~5am-1am)"},

  // Ball Square / Magoun Square (Somerville)
  {id:156, name:"Somerville Public Library - West Branch", lat:42.3981, lng:-71.1217, cat:"public_bldg", seasonal:false,
   desc:"40 College Ave (Ball Square). Renovated Carnegie library with accessible public restrooms. Near Community Path.", hours:"M,W 9am-9pm, Tu,Th,F 9am-6pm, Sa 9am-1pm"},
  {id:157, name:"Trum Field", lat:42.3969, lng:-71.1074, cat:"sports_fields", seasonal:true,
   desc:"1 Franey Rd (between Ball Sq & Magoun Sq). Sloane Field House with ADA-accessible restrooms, open during games/events. Seasonal porta-potties.", hours:"Seasonal: restrooms during games/events"},

  // Winter Hill (Somerville)
  {id:158, name:"Somerville Fire Dept Headquarters", lat:42.3909, lng:-71.0912, cat:"public_bldg", seasonal:false, is24hr:true,
   desc:"266 Broadway (Winter Hill). Fire station with 24-hour public restroom access.", hours:"24/7"},
  {id:159, name:"Foss Park", lat:42.3927, lng:-71.0865, cat:"parks", seasonal:true,
   desc:"49 Fellsway W (Winter Hill). DCR park with seasonal porta-potties and locker room restrooms.", hours:"Seasonal"},

  // Allston / Brighton
  {id:160, name:"BPL - Honan-Allston Branch", lat:42.3601, lng:-71.1277, cat:"public_bldg", seasonal:false,
   desc:"300 N Harvard St (Allston). Boston Public Library branch with wheelchair-accessible restrooms and changing tables.", hours:"M,W 12-8pm, Tu,Th 10am-6pm, F-Sa 9am-5pm"},
  {id:161, name:"BPL - Faneuil Branch", lat:42.3513, lng:-71.1679, cat:"public_bldg", seasonal:false,
   desc:"419 Faneuil St (Brighton). Boston Public Library branch with restrooms. Stairs required.", hours:"M,W-Th 10am-6pm, Tu 12-8pm, F 9am-5pm, Sa 9am-2pm"},
  {id:162, name:"BCYF Jackson/Mann Community Center", lat:42.3527, lng:-71.1376, cat:"recreation_centers", seasonal:false,
   desc:"500 Cambridge St (Allston). Community center with public restrooms. Programs for all ages.", hours:"M-F 7:30am-9pm"},
  {id:163, name:"Boston Fire Dept Engine 29 / Ladder 11", lat:42.3427, lng:-71.1535, cat:"public_bldg", seasonal:false, is24hr:true,
   desc:"138 Chestnut Hill Ave (Brighton). Wheelchair-accessible unisex restroom open 24/7.", hours:"24/7"},
  {id:164, name:"Boston Fire Dept Engine 51", lat:42.3513, lng:-71.1682, cat:"public_bldg", seasonal:false, is24hr:true,
   desc:"425 Faneuil St (Brighton). Wheelchair-accessible unisex restroom open 24/7.", hours:"24/7"},
  {id:165, name:"Boston Police District D-14", lat:42.3494, lng:-71.1505, cat:"public_bldg", seasonal:false, is24hr:true,
   desc:"301 Washington St (Brighton). Wheelchair-accessible unisex restroom open 24/7.", hours:"24/7"},

  // North Brookline
  {id:166, name:"Waldstein Playground (Dean Park)", lat:42.3365, lng:-71.1431, cat:"parks", seasonal:true,
   desc:"Dean Rd (Brookline). Park with restroom building, open daytime hours spring through fall.", hours:"Seasonal: spring-fall daytime"},
  {id:167, name:"Brookline Senior Center", lat:42.3436, lng:-71.1278, cat:"public_bldg", seasonal:false,
   desc:"93 Winchester St (Brookline). Public restrooms during business hours.", hours:"M-F 8:30am-5pm"}
];

// Locations that also have drinking water fountains / bubblers
const waterFountainIds = new Set([
  // Charles River / Esplanade (seasonal outdoor fountains, mid-Apr to mid-Oct)
  1, 2, 3, 7, 8, 9, 12, 13, 14,
  // Parks with confirmed outdoor drinking fountains
  15, 17, 18, 22, 49, 51, 62, 65, 90, 96, 97, 98, 157, 159,
  // Universities (indoor fountains in publicly accessible buildings)
  24, 27, 28, 29, 110, 111,
  // Libraries (indoor fountains / bottle refill stations)
  32, 33, 56, 60, 61, 64, 69, 73, 74, 75, 87, 91, 92, 103, 104, 105, 108, 117, 118,
  141, 142, 143, 144, 145, 146, 147, 148, 156, 160, 161,
  // City/Town Halls & Public Buildings
  30, 31, 34, 58, 93, 94, 99, 100, 109, 116, 119, 158, 163, 164, 165, 167,
  // Hospitals & Health Centers (indoor fountains)
  35, 36, 37, 38, 39, 40, 41, 42, 43, 80, 102, 106, 113,
  // Recreation Centers / YMCAs / Pools
  16, 63, 67, 68, 77, 78, 81, 82, 86, 88, 95, 101, 107, 114, 121, 123, 124, 162,
  // Attractions & Museums
  50, 53, 57, 84, 85,
  // Hotel Lobbies (indoor fountains / water stations)
  55, 59, 125, 126, 127, 128, 129, 130,
  // Retail / Malls
  52, 122
]);

// Standalone water fountain locations (no bathrooms)
const fountainLocations = [
  {id:'F1', name:"Lotta Fountain (Esplanade)", lat:42.3547, lng:-71.0763,
   seasonal:true, desc:"Esplanade between Berkeley & Clarendon St. Historic 1939 drinking fountain with dog bowl. Near Esplanade Playspace.",
   hours:"Seasonal: mid-Apr to mid-Oct"},
  {id:'F2', name:"Esplanade Playground Fountain", lat:42.3565, lng:-71.0718,
   seasonal:true, desc:"Near Fiedler Footbridge playground, west of Hatch Shell. Green fountain by the playground.",
   hours:"Seasonal: mid-Apr to mid-Oct"},
  {id:'F3', name:"Lederman Park Fountain", lat:42.3640, lng:-71.0710,
   seasonal:true, desc:"Near the baseball field at Lederman Park, adjacent to Teddy Ebersol Fields.",
   hours:"Seasonal: mid-Apr to mid-Oct"},
  {id:'F4', name:"BU DeWolfe Boathouse Fountain", lat:42.3536, lng:-71.1095,
   seasonal:true, desc:"In front of BU DeWolfe Boathouse on the Cambridge side of the Charles River, near BU Bridge.",
   hours:"Seasonal: mid-Apr to mid-Oct"},
  {id:'F5', name:"Rose Kennedy Greenway Fountain", lat:42.3567, lng:-71.0515,
   seasonal:false, desc:"Near the Greenway Carousel and Harbor Islands Pavilion. Drinking fountain with dog bowl.",
   hours:"Year-round"},
  {id:'F6', name:"Copley Square Fountain", lat:42.3496, lng:-71.0775,
   seasonal:true, desc:"Copley Square park, recently renovated. Drinking fountain near playground area.",
   hours:"Seasonal: spring-fall"},
  {id:'F7', name:"Eliot Bridge Rest Area Fountain", lat:42.3710, lng:-71.1338,
   seasonal:true, desc:"DCR Memorial Drive Greenway rest area near Eliot Bridge underpass. Fountain with benches and bike racks.",
   hours:"Seasonal: mid-Apr to mid-Oct"},
  {id:'F8', name:"Fresh Pond 'The Squirt' Fountain", lat:42.3870, lng:-71.1480,
   seasonal:true, desc:"Sculptural drinking fountain by Laura Baring-Gould along the perimeter path around Fresh Pond Reservoir.",
   hours:"Seasonal: spring-fall"},
];

// Structured hours: locationId → day-of-week hours or shorthand
// Format: { mon:[open,close], tue:[open,close], ... } or [0,24] for 24hr or null for unknown
// Day keys: sun, mon, tue, wed, thu, fri, sat  |  Hours in 24hr format
const hoursData = {
  // Seasonal / unknown — null means "hours unknown"
  1:null, 2:null, 3:null, 4:null, 5:null, 6:null, 7:null, 8:null, 9:null, 10:null,
  11:null, 12:null, 13:null, 14:null, 20:null, 48:null, 49:null, 51:null,
  62:null, 65:null, 96:null, 97:null, 98:null, 120:null, 121:null,
  // 24/7 locations
  23:[0,24], 26:[0,24], 47:[0,24], 70:[0,24], 71:[0,24], 72:[0,24], 79:[0,24], 89:[0,24],
  94:[0,24],
  // Fresh Pond Ranger Station
  15:{mon:[7,17],tue:[7,17],wed:[7,17],thu:[7,17],fri:[7,17],sat:[7,17],sun:[7,17]},
  // Maynard Ecology Center
  16:null,
  // Jamaica Pond Boathouse (dawn-dusk ~6am-8pm)
  17:{mon:[6,20],tue:[6,20],wed:[6,20],thu:[6,20],fri:[6,20],sat:[6,20],sun:[6,20]},
  // Arnold Arboretum Hunnewell
  18:{mon:[10,16],tue:[10,16],wed:[10,16],thu:[10,16],fri:[10,16],sat:[10,16],sun:[10,16]},
  19:null, // Arborway portables - year-round but no set hours
  // Franklin Park
  21:null, 22:null,
  // Harvard
  24:{mon:[7,21],tue:[7,21],wed:[7,21],thu:[7,21],fri:[7,21],sat:[7,21],sun:[7,21]},
  25:null,
  // MIT
  27:{mon:[6,19],tue:[6,19],wed:[6,19],thu:[6,19],fri:[6,19],sat:null,sun:null},
  28:{mon:[7,21],tue:[7,21],wed:[7,21],thu:[7,21],fri:[7,21],sat:[9,18],sun:[9,18]},
  29:{mon:[6,19],tue:[6,19],wed:[6,19],thu:[6,19],fri:[6,19],sat:null,sun:null},
  // Cambridge public buildings
  30:{mon:[8,17],tue:[8,17],wed:[8,17],thu:[8,17],fri:[8,17],sat:null,sun:null},
  31:{mon:[8,17],tue:[8,17],wed:[8,17],thu:[8,17],fri:[8,17],sat:null,sun:null},
  // Cambridge Public Library Main
  32:{mon:[9,21],tue:[9,21],wed:[9,21],thu:[9,21],fri:[9,17],sat:[9,17],sun:[13,17]},
  33:null, // Boudreau - library hours
  34:null, // War Memorial
  // Hospitals
  35:{mon:[6,20],tue:[6,20],wed:[6,20],thu:[6,20],fri:[6,20],sat:[6,20],sun:[6,20]},
  36:{mon:[7,21],tue:[7,21],wed:[7,21],thu:[7,21],fri:[7,21],sat:[9,15],sun:null},
  37:{mon:[8,20],tue:[8,17],wed:[8,17],thu:[8,17],fri:[8,17],sat:null,sun:null},
  38:null, 39:null,
  40:[0,24], // Mount Auburn Hospital
  41:null, 42:null, 43:null,
  // MBTA
  44:{mon:[5,1],tue:[5,1],wed:[5,1],thu:[5,1],fri:[5,1],sat:[5,1],sun:[6,1]},
  45:{mon:[5,1],tue:[5,1],wed:[5,1],thu:[5,1],fri:[5,1],sat:[5,1],sun:[6,1]},
  // Central Sq
  50:null, 52:null, 53:null, 54:null,
  // Hotels (24hr lobbies)
  55:[0,24], 59:[0,24], 125:[0,24], 126:[0,24], 127:[0,24], 128:[0,24], 129:[0,24], 130:[0,24],
  // BPL Central
  56:{mon:[9,21],tue:[9,21],wed:[9,21],thu:[9,21],fri:[9,17],sat:[9,17],sun:[13,17]},
  57:null, // Faneuil Hall
  58:{mon:[9,17],tue:[9,17],wed:[9,17],thu:[9,17],fri:[9,17],sat:null,sun:null},
  // BPL branches
  60:null, 61:null, 63:null, 64:null, 66:null,
  67:null, 68:null, 69:null, 73:null, 74:null, 75:null, 76:null,
  77:null, 78:null, 80:null, 81:null, 82:null, 83:null, 84:null, 85:null,
  86:null, 87:null, 88:null, 90:null,
  // Brookline
  91:{mon:[9,21],tue:[9,21],wed:[9,21],thu:[9,21],fri:[9,17],sat:[9,17],sun:[13,17]},
  92:null,
  93:{mon:[8,17],tue:[8,17],wed:[8,17],thu:[8,17],fri:[8,12],sat:null,sun:null},
  95:null, 99:null, 100:null,
  // Oak Square YMCA
  101:{mon:[6,22],tue:[6,22],wed:[6,22],thu:[6,22],fri:[6,19],sat:[7,17],sun:[8,16]},
  102:null,
  // Brighton Library
  103:{mon:[12,20],tue:[10,18],wed:[10,18],thu:[12,20],fri:[9,17],sat:[9,17],sun:null},
  // Somerville
  104:{mon:[9,21],tue:[9,21],wed:[9,21],thu:[9,21],fri:[9,17],sat:[9,17],sun:[13,17]},
  105:null,
  106:[0,24], // CHA Somerville
  107:{mon:[5,21],tue:[5,21],wed:[5,21],thu:[5,21],fri:[5,21],sat:[7,20],sun:[7,20]},
  // Medford
  108:{mon:[9,21],tue:[9,21],wed:[9,21],thu:[9,21],fri:[9,18],sat:[9,17],sun:null},
  109:null,
  110:null, 111:null,
  112:{mon:[5,1],tue:[5,1],wed:[5,1],thu:[5,1],fri:[5,1],sat:[5,1],sun:[5,1]},
  113:null, 114:null, 115:null, 116:{mon:[9,16],tue:[9,16],wed:[9,16],thu:[9,16],fri:[9,16],sat:null,sun:null},
  // Newton / Chestnut Hill
  117:{mon:[9,21],tue:[9,21],wed:[9,21],thu:[9,21],fri:[9,18],sat:[9,17],sun:[13,17]},
  118:null,
  119:{mon:[8,17],tue:[8,17],wed:[8,17],thu:[8,17],fri:[8,17],sat:null,sun:null},
  122:{mon:[10,21],tue:[10,21],wed:[10,21],thu:[10,21],fri:[10,21],sat:[10,21],sun:[11,18]},
  123:null, 124:null,
  // Coffee shops (verified Feb 2026)
  131:{mon:[5,21],tue:[5,21],wed:[5,21],thu:[5,21],fri:[5,21],sat:[5,21],sun:[5,21]},
  132:{mon:[4,21],tue:[4,21],wed:[4,21],thu:[4,21],fri:[4,21],sat:[5,21],sun:[5,21]},
  133:{mon:[5,21],tue:[5,21],wed:[5,21],thu:[5,21],fri:[5,22],sat:[5,22],sun:[5,21]},
  134:{mon:[5,19],tue:[5,19],wed:[5,19],thu:[5,19],fri:[5,19],sat:[5,19],sun:[6,19]},
  135:{mon:[5,19],tue:[5,19],wed:[5,19],thu:[5,19],fri:[5,19],sat:[5,19],sun:[6,19]},
  136:{mon:[5,21],tue:[5,21],wed:[5,21],thu:[5,21],fri:[5,21],sat:[5,21],sun:[5,21]},
  137:{mon:[4,20],tue:[4,20],wed:[4,20],thu:[4,20],fri:[4,20],sat:[5,20],sun:[5,20]},
  138:{mon:[5,21],tue:[5,21],wed:[5,21],thu:[5,21],fri:[5,21],sat:[5,21],sun:[5,21]},
  139:{mon:[5,21],tue:[5,21],wed:[5,21],thu:[5,21],fri:[5,21],sat:[5,21],sun:[5,21]},
  140:{mon:[5,19],tue:[5,19],wed:[5,19],thu:[5,19],fri:[5,19],sat:[5,19],sun:[5,19]},
  // New BPL branches (hours from bpl.org)
  141:{mon:[10,18],tue:[10,18],wed:[10,18],thu:[12,20],fri:[9,17],sat:[9,17],sun:null},
  142:{mon:[12,20],tue:[10,18],wed:[10,18],thu:[10,18],fri:[9,17],sat:[9,14],sun:null},
  143:{mon:[12,20],tue:[10,18],wed:[12,20],thu:[10,18],fri:[9,17],sat:[9,17],sun:null},
  144:{mon:[10,18],tue:[12,20],wed:[10,18],thu:[10,18],fri:[9,17],sat:[9,14],sun:null},
  145:{mon:[12,20],tue:[10,18],wed:[10,18],thu:[12,20],fri:[9,17],sat:[9,14],sun:null},
  146:{mon:[12,20],tue:[10,18],wed:[10,18],thu:[10,18],fri:[9,17],sat:[9,14],sun:null},
  147:{mon:[10,18],tue:[10,18],wed:[10,18],thu:[12,20],fri:[9,17],sat:[9,14],sun:null},
  148:{mon:[10,18],tue:[12,20],wed:[10,18],thu:[12,20],fri:[9,17],sat:[9,17],sun:null},
  // Ball Square / Magoun Square
  156:{mon:[9,21],tue:[9,18],wed:[9,21],thu:[9,18],fri:[9,18],sat:[9,13],sun:null},
  157:null,
  // Winter Hill
  158:[0,24],
  159:null,
  // Allston / Brighton
  160:{mon:[12,20],tue:[10,18],wed:[12,20],thu:[10,18],fri:[9,17],sat:[9,17],sun:null},
  161:{mon:[10,18],tue:[12,20],wed:[10,18],thu:[10,18],fri:[9,17],sat:[9,14],sun:null},
  162:{mon:[7,21],tue:[7,21],wed:[7,21],thu:[7,21],fri:[7,21],sat:null,sun:null},
  163:[0,24],
  164:[0,24],
  165:[0,24],
  // North Brookline
  166:null,
  167:{mon:[8,17],tue:[8,17],wed:[8,17],thu:[8,17],fri:[8,17],sat:null,sun:null},
};
