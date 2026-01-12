/*
  data taken from https://www.architects.uga.edu/sites/default/files/documents/field/maps/current/unisex-bathrooms.pdf
  fixed (presumed):
    MLC building number (0672 -> 0081)
    Family Science Center 1 quanity (0 -> 1)
    Lustrat House quanity (2 -> 1)
	Tate Expansion URR# (0747A -> 0474A)
		There's only 4 floors and all other 474 are URR
	Moore-Rooker Hall (003B -> 001)
		003B is an Elevator Machine Room (EMR) but there's a single stall RR at 001 so maybe typo?
	Russell Hall F1 (0153&0144 -> 0127&0140)
		went under renovation in circa 2020
  added:
	new poultry science building
	Russell Hall (based on map)
  removed:
	Physics building URR# 0111 (lol 0111 is just the hall to the URR)
		maybe 0112A is single stall marked as mens?
	Hudson Hall URR# 0122 (it just looks like a hall on the map)

  idk if I can trust this data or not, but it seems to be mostly true
*/

let data =
[
	{
		"number": 2029,
		"name": "529 Baxter St",
		"rooms": {
			"1": "0121, 0140A"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1060,
		"name": "Aderhold",
		"rooms": {
			"1": "0130"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2218,
		"name": "Alpha Chi Omega Sorority",
		"rooms": {
			"1": "0113"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1077,
		"name": "Animal Health Research Center",
		"rooms": {
			"0": "G002"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0050",
		"name": "Baldwin Hall",
		"rooms": {
			"0": "00G8",
			"1": "0105P, 0153",
			"2": "0273, 0275",
			"3": "0373, 0375",
			"4": "0410A, 0410B"
		},
		"quanity": 9,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1000,
		"name": "Biological Sciences Building",
		"rooms": {
			"1": "0108, 0160",
			"6": "0634D"
		},
		"quanity": 3,
		"type": "Unisex"
	},
	{
		"number": "0032",
		"name": "Bishop House",
		"rooms": {
			"0": "0004A",
			"1": "0012A"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 2264,
		"name": "Black-Diallo-Miller Hall",
		"rooms": {
			"1": "0100, 0102, 0125, 0126, 0156",
			"2": "0226, 0256",
			"3": "0326, 0356",
			"4": "0426, 0456",
			"5": "0526, 0556",
			"6": "0626"
		},
		"quanity": 14,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2461,
		"name": "Bot. Garden Head House",
		"rooms": {
			"1": "0106"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2335,
		"name": "Botanical Garden Visitors Center",
		"rooms": {
			"1": "0107"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1023,
		"name": "Boyd Rsrch and Edu Ctr",
		"rooms": {
			"3": "0312",
			"4": "0424, 0430",
			"5": "0554, 0555",
			"6": "0611, 0615",
			"8": "0811A, 0811B"
		},
		"quanity": 9,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0055",
		"name": "Brooks Hall",
		"rooms": {
			"0": "0G18, 0G19"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1907,
		"name": "Brown Hall",
		"rooms": {
			"2": "0223a"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2213,
		"name": "Brumby Hall",
		"rooms": {
			"1": "0127, 0140",
			"2": "0265, 0277, 0282, 0286",
			"3": "0365, 0377, 0382, 0386",
			"4": "0465, 0477, 0482, 0486",
			"5": "0565, 0577, 0582, 0586",
			"6": "0665, 0677, 0682, 0686",
			"7": "0765, 0777, 0782, 0786",
			"8": "0865, 0877, 0882, 0886",
			"9": "0965, 0977, 0982, 0986"
		},
		"quanity": 34,
		"type": "Unisex"
	},
	{
		"number": 2130,
		"name": "Building 2130",
		"rooms": {
			"1": "0131, 0133"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0110",
		"name": "Business Services",
		"rooms": {
			"0": "000B6, 00B24",
			"2": "0208C"
		},
		"quanity": 3,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2328,
		"name": "Callaway Building",
		"rooms": {
			"1": "0112, 0114"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0031",
		"name": "Candler Hall",
		"rooms": {
			"0": "0B08, 0B09",
			"2": "0210, 0211",
			"3": "0314, 0315"
		},
		"quanity": 6,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2005,
		"name": "Carl Vinson Hall",
		"rooms": {
			"1": "0102, 0103",
			"2": "0210, 0211"
		},
		"quanity": 4,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1904,
		"name": "Carnegie Library Learning Center",
		"rooms": {
			"0": "00B4, 00B6",
			"1": "0101, 0102"
		},
		"quanity": 4,
		"type": "Unisex"
	},
	{
		"number": 1913,
		"name": "Central Heating Plant",
		"rooms": {
			"1": "0102"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2431,
		"name": "Central Research Stores Warehouse",
		"rooms": {
			"1": "0103"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0022",
		"name": "Chapel",
		"rooms": {
			"1": "0101A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1247,
		"name": "Charles Schwab Financial Planning Center",
		"rooms": {
			"0": "0003, 0005",
			"1": "0104"
		},
		"quanity": 3,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1001,
		"name": "Chemistry",
		"rooms": {
			"3": "0300B"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0101",
		"name": "Chicopee No. 1",
		"rooms": {
			"2": "0223, 2037",
			"3": "0322"
		},
		"quanity": 3,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1652,
		"name": "Child Development Laboratory",
		"rooms": {
			"1": "0106A, 0134, 0135",
			"2": "0202, 0220, 0223, 0240"
		},
		"quanity": 7,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0290",
		"name": "Clark Howell Hall",
		"rooms": {
			"1": "0118B, 0118C"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1920,
		"name": "Clinical & Translational Research",
		"rooms": {
			"1": "0105, 0117"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1070,
		"name": "College of Veterinary Medicine 1",
		"rooms": {
			"1": "1705"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1130,
		"name": "Computing Services",
		"rooms": {
			"1": "0192A"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1011,
		"name": "Conner Hall",
		"rooms": {
			"1": "0101D"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0739",
		"name": "Correll Hall",
		"rooms": {
			"1": "0130, 0132",
			"2": "0212, 0228",
			"4": "0411"
		},
		"quanity": 5,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2211,
		"name": "Creswell Hall",
		"rooms": {
			"1": "0105B"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0212",
		"name": "Delta Innovation Hub",
		"rooms": {
			"1": "0116E"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0021",
		"name": "Demosthenian Hall",
		"rooms": {
			"1": "0105"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0044",
		"name": "Denmark Hall",
		"rooms": {
			"0": "0023M, 0023W",
			"1": "0104R",
			"2": "0211"
		},
		"quanity": 4,
		"type": "Unisex"
	},
	{
		"number": 1090,
		"name": "Driftmier Engineering Center",
		"rooms": {
			"1": "1356, 1358, 1568"
		},
		"quanity": 3,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1698,
		"name": "East Campus Deck",
		"rooms": {
			"1": 105
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1033,
		"name": "Ecology",
		"rooms": {
			"1": "0189B"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1632,
		"name": "Ecology Centers",
		"rooms": {
			"1": "0102C, 0104E, 0104F, 0111C, 0111D"
		},
		"quanity": 5,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2425,
		"name": "Entomology Greenhouse/Headhouse",
		"rooms": {
			"1": "0005"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1050,
		"name": "Environmental Health Sciences",
		"rooms": {
			"1": "0105A, 0106C",
			"2": "0220, 0221",
			"3": "0320, 0321"
		},
		"quanity": 6,
		"type": "Unisex, Handicap"
	},
	{
		"number": 3188,
		"name": "FMD Construction Shop",
		"rooms": {
			"1": "0104, 0107"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1924,
		"name": "Facilities Management HSC Annex",
		"rooms": {
			"1": "0104A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1246,
		"name": "Family Science Center 1",
		"rooms": {
			"0": "0002"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0060",
		"name": "Fine Arts Building",
		"rooms": {
			"1": "0120"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1020,
		"name": "Food Science Building",
		"rooms": {
			"2": "0214"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1140,
		"name": "Forestry Resources 2",
		"rooms": {
			"2": "0206B"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0650",
		"name": "Founders Garden House",
		"rooms": {
			"1": "0103"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1002,
		"name": "Geography and Geology",
		"rooms": {
			"1": "0156",
			"2": "0228"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0090",
		"name": "Geology Hydrothermal Lab",
		"rooms": {
			"1": "0002A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1640,
		"name": "Georgia Center for Cont Ed",
		"rooms": {
			"2": "0257A, 0257B"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1693,
		"name": "Georgia Museum of Art",
		"rooms": {
			"1": "0134",
			"2": "0229"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0640",
		"name": "Gilbert Hall",
		"rooms": {
			"1": "0106",
			"2": "0219A, 0228, 0228A, 0234, 0248A",
			"3": "0370A, 0370B",
			"4": "0402A, 0409A"
		},
		"quanity": 10,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2651,
		"name": "Golf Cart Maintenance",
		"rooms": {
			"1": "0101A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2652,
		"name": "Golf Maintenance 0105",
		"rooms": {
			"1": "0105"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2695,
		"name": "Golf Maintenance Facility",
		"rooms": {
			"1": "0108"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2658,
		"name": "Golf Rest Room 2 (#7 Tee)",
		"rooms": {
			"1": "0102"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2678,
		"name": "Golf Restroom 1",
		"rooms": {
			"1": "0103"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0756",
		"name": "Government Relations",
		"rooms": {
			"1": "105, 107"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 2415,
		"name": "Greenhouse Botany",
		"rooms": {
			"1": "0200B"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1909,
		"name": "HSC Russell Hall",
		"rooms": {
			"1": "0112, 0113",
			"2": "0221, 0223"
		},
		"quanity": 4,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1031,
		"name": "Hardman Hall",
		"rooms": {
			"2": "0205"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0019",
		"name": "Hodgson Oil Building",
		"rooms": {
			"1": "0186"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1042,
		"name": "Hoke Smith Annex",
		"rooms": {
			"1": "0112"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1340,
		"name": "Horticulture Greenhouse",
		"rooms": {
			"1": "0104"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1911,
		"name": "Hudson Hall",
		"rooms": {
			"1": "0124"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1691,
		"name": "Hugh Hodgson School of Music",
		"rooms": {
			"2": "0257, 0259"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0082",
		"name": "Hull Street Deck",
		"rooms": {
			"3": "0309A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0620",
		"name": "Human Resources",
		"rooms": {
			"1": "0118"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0066",
		"name": "Instructional Plaza",
		"rooms": {
			"1": "N012, N013, S213, S215"
		},
		"quanity": 4,
		"type": "Unisex"
	},
	{
		"number": "0734",
		"name": "Ivester Hall",
		"rooms": {
			"2": "E220, E222, E245, E247",
			"3": "E324, E326, E347, E349"
		},
		"quanity": 8,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2680,
		"name": "Jewelry & Metalwork Art Studios",
		"rooms": {
			"1": "0102A, 0102B"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": "0250",
		"name": "Joseph E. Brown Hall",
		"rooms": {
			"0": "0012",
			"1": "0112"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2003,
		"name": "L.C. Carriage House",
		"rooms": {
			"1": "0102"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2440,
		"name": "Lake Herrick Pavilion",
		"rooms": {
			"1": "0106A, 0106B"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1694,
		"name": "Lamar Dodd School of Art",
		"rooms": {
			"3": "0C346"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0043",
		"name": "Law School/Hirsch Hall",
		"rooms": {
			"2": "0214H, 0218, 0222, 0227",
			"3": "A310"
		},
		"quanity": 5,
		"type": "Unisex"
	},
	{
		"number": "0053",
		"name": "LeConte Hall",
		"rooms": {
			"1": "0105"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1064,
		"name": "Locomotive Diag. Center",
		"rooms": {
			"1": "0100A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0632",
		"name": "Lustrat House",
		"rooms": {
			"0": "00B2"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0054",
		"name": "Main Library",
		"rooms": {
			"0": "00B6A, 0B11A, 0B13, 0B45, 0B60",
			"2": "0203, 0207, 0208, 0209",
			"3": "0304, 0351",
			"4": "0416",
			"-1": "SB10, SB12, SB21"
		},
		"quanity": 15,
		"type": "Unisex"
	},
	{
		"number": 2462,
		"name": "Maintenance Bldg.",
		"rooms": {
			"1": "0102"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1030,
		"name": "Marine Science / Dance",
		"rooms": {
			"1": "0150E, 0150F",
			"2": "0223, 0266"
		},
		"quanity": 4,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0670",
		"name": "Memorial Hall",
		"rooms": {
			"2": "0242A, 0242B",
			"3": "0340A, 0340B",
			"4": "0401"
		},
		"quanity": 5,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0271",
		"name": "Milledge Hall",
		"rooms": {
			"1": "0112, 0132F"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1061,
		"name": "Miller Plant Science",
		"rooms": {
			"5": "0503"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2324,
		"name": "Mimsie Lanier Ctr for Native Plant Studies",
		"rooms": {
			"1": "0116"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0738",
		"name": "Moore-Rooker Hall",
		"rooms": {
			"0": "00B3"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0030",
		"name": "New College",
		"rooms": {
			"1": "0122, 0123",
			"2": "0229, 0230",
			"3": "0325, 0326"
		},
		"quanity": 6,
		"type": "Unisex, Handicap"
	},
	{
		"number": "1025",
		"name": "New Poultry Science Building",
		"rooms": {
			"0": "0006B",
			"1": "0120"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": "0122",
		"name": "North Campus Deck",
		"rooms": {
			"3": "0304D"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2219,
		"name": "Office of Global Engagement",
		"rooms": {
			"1": "0103"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0130",
		"name": "Old College",
		"rooms": {
			"1": "0117B, 0117C",
			"2": "0217B, 0217C",
			"3": "0317B, 0317C"
		},
		"quanity": 6,
		"type": "Unisex"
	},
	{
		"number": 1699,
		"name": "PAC Deck",
		"rooms": {
			"0": "0G05"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1111,
		"name": "Paul D. Coverdell Center",
		"rooms": {
			"1": "0117A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0270",
		"name": "Payne Hall",
		"rooms": {
			"0": "0004, 0005"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": "0042",
		"name": "Peabody Hall",
		"rooms": {
			"1": "0109A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1692,
		"name": "Performing Arts",
		"rooms": {
			"1": "0117, 0119"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": "0020",
		"name": "Phi Kappa Hall",
		"rooms": {
			"1": "0103A, 0103B"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1003,
		"name": "Physics Building",
		"rooms": {
			"1": "0111A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1906,
		"name": "Pound Hall",
		"rooms": {
			"2": "0218"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": "0064",
		"name": "Psychology Building",
		"rooms": {
			"4": "0415D, 0421C"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1041,
		"name": "R. C. Wilson Pharmacy",
		"rooms": {
			"4": "0416"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1690,
		"name": "Ramsey Center",
		"rooms": {
			"1": "0113A, 0119B, 0119C, 0134C, 0151A",
			"2": "0232F, 0233C, 0233I, 0245D"
		},
		"quanity": 9,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2639,
		"name": "River's Crossing",
		"rooms": {
			"0": "0061A",
			"1": "0127A",
			"2": "0228",
			"4": "0425"
		},
		"quanity": 4,
		"type": "Unisex"
	},
	{
		"number": 2630,
		"name": "River's Crossing #2",
		"rooms": {
			"1": "0106"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2400,
		"name": "Riverbend Farm Research Building 1",
		"rooms": {
			"1": "0103"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2212,
		"name": "Russell Hall",
		"rooms": {
			"1": "0107A, 0107B",
			"3": "0365A",
			"4": "0443A, 0465A, 0475A, 0483A",
			"5": "0565A, 0575A, 0583A",
			"6": "0602A, 0665A, 0675A, 0683A",
			"7": "0765A",
			"10": "1002A, 1065A, 1057A, 1083A"
		},
		"quanity": 19,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0740",
		"name": "Russell Special",
		"rooms": {
			"2": "0232"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1131,
		"name": "STEM Research Building I",
		"rooms": {
			"1": "1022A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1132,
		"name": "STEM Research Building II",
		"rooms": {
			"1": 1215
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0033",
		"name": "School of Social Work Building",
		"rooms": {
			"1": "0141, 0143"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1035,
		"name": "Science Learning Center",
		"rooms": {
			"1": "0152"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1621,
		"name": "Science Library",
		"rooms": {
			"1": "0184A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 2617,
		"name": "Seney-Stovall Chapel",
		"rooms": {
			"1": "0015, 0016"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1220,
		"name": "Soule Hall",
		"rooms": {
			"0": "001B"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1010,
		"name": "Speirs/Dawson Hall",
		"rooms": {
			"1": "0153A",
			"2": "0279B",
			"3": "0351A, 0355A"
		},
		"quanity": 4,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0688",
		"name": "Stadium West Stands",
		"rooms": {
			"0": "W002A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1654,
		"name": "Stegeman Coliseum",
		"rooms": {
			"2": "0230A, 0246A, 256A"
		},
		"quanity": 3,
		"type": "Unisex"
	},
	{
		"number": "0123",
		"name": "Tanner Building",
		"rooms": {
			"3": "0304D"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0668",
		"name": "Tate Expansion '09",
		"rooms": {
			"4": "0474A, 0474B, 0474C, 0474D"
		},
		"quanity": 4,
		"type": "Unisex"
	},
	{
		"number": "0672",
		"name": "Tate Student Center",
		"rooms": {
			"2": "0204",
			"3": "0304, 0305, 0313B, 0354, 0355"
		},
		"quanity": 6,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0023",
		"name": "Terrell Hall",
		"rooms": {
			"3": "0309"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0768",
		"name": "The Athenaeum",
		"rooms": {
			"1": "0130, 0132"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 2691,
		"name": "Thomas Street Sculpture",
		"rooms": {
			"1": "0125, 0126"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2600,
		"name": "Thomas Street South",
		"rooms": {
			"1": "0114, 0115",
			"2": "0216, 0218"
		},
		"quanity": 4,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1250,
		"name": "Tucker Hall",
		"rooms": {
			"1": "0112C, 0114C, 0121",
			"3": "0322"
		},
		"quanity": 4,
		"type": "Unisex"
	},
	{
		"number": 2126,
		"name": "UGAPD & OEP Training Facility",
		"rooms": {
			"1": "0106"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1921,
		"name": "University Childcare Center",
		"rooms": {
			"1": "0103, 0105"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 2238,
		"name": "University Village Community Office",
		"rooms": {
			"1": "0115, 0116"
		},
		"quanity": 2,
		"type": "Unisex"
	},
	{
		"number": 1066,
		"name": "Vet. Medicine 10",
		"rooms": {
			"1": "0106"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1072,
		"name": "Vet. Medicine 2",
		"rooms": {
			"1": "0005A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1683,
		"name": "Vet. Medicine 5",
		"rooms": {
			"1": "0105A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 3080,
		"name": "Veterinary Teaching Hospital",
		"rooms": {
			"1": "1000L, 1018A, 1018B"
		},
		"quanity": 3,
		"type": "Unisex"
	},
	{
		"number": "0041",
		"name": "Waddel Hall",
		"rooms": {
			"1": "0105",
			"2": "0208"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": 1082,
		"name": "Wildlife Health",
		"rooms": {
			"0": "0G25A"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1903,
		"name": "Winnie Davis",
		"rooms": {
			"1": "0113, 0115"
		},
		"quanity": 2,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0751",
		"name": "Wray-Nicholson House",
		"rooms": {
			"2": "0208"
		},
		"quanity": 1,
		"type": "Unisex"
	},
	{
		"number": 1912,
		"name": "Wright Hall",
		"rooms": {
			"3": "0354"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	},
	{
		"number": "0081",
		"name": "Zell B. Miller Learning Center",
		"rooms": {
			"2": "262A"
		},
		"quanity": 1,
		"type": "Unisex, Handicap"
	}
];