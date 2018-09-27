// !!! LOAD THIS SCRIPT BEFORE THE MAIN SCRIPT.JS

// START jQUERY FUNCTION
// ==============================
$(document).ready(function () {

    // =========================================================
    // Array of geoNames feature CODES and feature Names to populate dropdown
    // =========================================================

    var featureArray = [{
            name: "SELECT FEATURE",
            value: "",
        },
        // =====================================================
        // =====================================================
        // H. STREAM, LAKE, ...
        // =====================================================
        // =====================================================
        {
            name: "",
            value: "",
        },
        {
            name: "&dHar; STREAMS + LAKES",
            value: "",
        },
        {
            name: "",
            value: "",
        },
        // // H.AIRS	seaplane landing area	a place on a waterbody where floatplanes land and take off
        // {
        //     name: "seaplane landing area",
        //     value: "AIRS",
        // },
        // H.ANCH	anchorage	an area where vessels may anchor
        {
            name: "anchorage",
            value: "ANCH",
        },
        // H.BAY	bay	a coastal indentation between two capes or headlands, larger than a cove but smaller than a gulf
        {
            name: "bay",
            value: "BAY",
        },
        // // H.BAYS	bays	coastal indentations between two capes or headlands, larger than a cove but smaller than a gulf
        // {
        //     name: "bays",
        //     value: "BAYS",
        // },
        // // H.BGHT	bight(s)	an open body of water forming a slight recession in a coastline
        // {
        //     name: "bight",
        //     value: "BGHT",
        // },
        // // H.BNK	bank(s)	an elevation, typically located on a shelf, over which the depth of water is relatively shallow but sufficient for most surface navigation
        // {
        //     name: "bank",
        //     value: "BNK",
        // },
        // // H.BNKR	stream bank	a sloping margin of a stream channel which normally confines the stream to its channel on land
        // {
        //     name: "stream bank",
        //     value: "BNKR",
        // },
        // // H.BNKX	section of bank	
        // {
        //     name: "section of bank",
        //     value: "BNKX",
        // },
        // H.BOG	bog(s)	a wetland characterized by peat forming sphagnum moss, sedge, and other acid-water plants
        {
            name: "bog",
            value: "BOG",
        },
        // H.CAPG	icecap	a dome-shaped mass of glacial ice covering an area of mountain summits or other high lands; smaller than an ice sheet
        {
            name: "icecap",
            value: "CAPG",
        },
        // // H.CHN	channel	the deepest part of a stream, bay, lagoon, or strait, through which the main current flows
        // {
        //     name: "channel",
        //     value: "CHN",
        // },
        // // H.CHNL	lake channel(s)	that part of a lake having water deep enough for navigation between islands, shoals, etc.
        // {
        //     name: "lake channel",
        //     value: "CHNL",
        // },
        // // H.CHNM	marine channel	that part of a body of water deep enough for navigation through an area otherwise not suitable
        // {
        //     name: "marine channel",
        //     value: "CHNM",
        // },
        // // H.CHNN	navigation channel	a buoyed channel of sufficient depth for the safe navigation of vessels
        // {
        //     name: "navigation channel",
        //     value: "CHNN",
        // },
        // H.CNFL	confluence	a place where two or more streams or intermittent streams flow together
        {
            name: "confluence",
            value: "CNFL",
        },
        // H.CNL	canal	an artificial watercourse
        {
            name: "canal",
            value: "CNL",
        },
        // H.CNLA	aqueduct	a conduit used to carry water
        {
            name: "aqueduct",
            value: "CNLA",
        },
        // // H.CNLB	canal bend	a conspicuously curved or bent section of a canal
        // {
        //     name: "canal bend",
        //     value: "CNLB",
        // },
        // // H.CNLD	drainage canal	an artificial waterway carrying water away from a wetland or from drainage ditches
        // {
        //     name: "drainage canal",
        //     value: "CNLD",
        // },
        // // H.CNLI	irrigation canal	a canal which serves as a main conduit for irrigation water
        // {
        //     name: "irrigation canal",
        //     value: "CNLI",
        // },
        // // H.CNLN	navigation canal(s)	a watercourse constructed for navigation of vessels
        // {
        //     name: "navigation canals",
        //     value: "CNLN",
        // },
        // // H.CNLQ	abandoned canal	
        // {
        //     name: "abandoned canal",
        //     value: "CNLQ",
        // },
        // // H.CNLSB	underground irrigation canal(s)	a gently inclined underground tunnel bringing water for irrigation from aquifers
        // {
        //     name: "underground irrigation canal",
        //     value: "CNLSB",
        // },
        // // H.CNLX	section of canal	
        // {
        //     name: "section of canal",
        //     value: "CNLX",
        // },
        // H.COVE	cove(s)	a small coastal indentation, smaller than a bay
        {
            name: "coves",
            value: "COVE",
        },
        // // H.CRKT	tidal creek(s)	a meandering channel in a coastal wetland subject to bi-directional tidal currents
        // {
        //     name: "tidal creeks",
        //     value: "CRKT",
        // },
        // // H.CRNT	current	a horizontal flow of water in a given direction with uniform velocity
        // {
        //     name: "current",
        //     value: "CRNT",
        // },
        // // H.CUTF	cutoff	a channel formed as a result of a stream cutting through a meander neck
        // {
        //     name: "cutoff",
        //     value: "CUTF",
        // },
        // H.DCK	dock(s)	a waterway between two piers, or cut into the land for the berthing of ships
        {
            name: "docks",
            value: "DCK",
        },
        // // H.DCKB	docking basin	a part of a harbor where ships dock
        // {
        //     name: "docking basin",
        //     value: "DCKB",
        // },
        // // H.DOMG	icecap dome	a comparatively elevated area on an icecap
        // {
        //     name: "icecap dome",
        //     value: "DOMG",
        // },
        // // H.DPRG	icecap depression	a comparatively depressed area on an icecap
        // {
        //     name: "icecap depression",
        //     value: "DPRG",
        // },
        // // H.DTCH	ditch	a small artificial watercourse dug for draining or irrigating the land
        // {
        //     name: "ditch",
        //     value: "DTCH",
        // },
        // // H.DTCHD	drainage ditch	a ditch which serves to drain the land
        // {
        //     name: "drainage ditch",
        //     value: "DTCHD",
        // },
        // // H.DTCHI	irrigation ditch	a ditch which serves to distribute irrigation water
        // {
        //     name: "irrigation ditch",
        //     value: "DTCHI",
        // },
        // // H.DTCHM	ditch mouth(s)	an area where a drainage ditch enters a lagoon, lake or bay
        // {
        //     name: "ditch mouth",
        //     value: "DTCHM",
        // },
        // H.ESTY	estuary	a funnel-shaped stream mouth or embayment where fresh water mixes with sea water under tidal influences
        {
            name: "estuary",
            value: "ESTY",
        },
        // H.FISH	fishing area	a fishing ground, bank or area where fishermen go to catch fish
        {
            name: "fishing area",
            value: "FISH",
        },
        // H.FJD	fjord	a long, narrow, steep-walled, deep-water arm of the sea at high latitudes, usually along mountainous coasts
        {
            name: "fjord",
            value: "FJD",
        },
        // H.FJDS	fjords	long, narrow, steep-walled, deep-water arms of the sea at high latitudes, usually along mountainous coasts
        {
            name: "fjords",
            value: "FJDS",
        },
        // H.FLLS	waterfall(s)	a perpendicular or very steep descent of the water of a stream
        {
            name: "waterfalls",
            value: "FLLS",
        },
        // // H.FLLSX	section of waterfall(s)	
        // {
        //     name: "section of waterfall",
        //     value: "FLLSX",
        // },
        // H.FLTM	mud flat(s)	a relatively level area of mud either between high and low tide lines, or subject to flooding
        {
            name: "mud flats",
            value: "FLTM",
        },
        // H.FLTT	tidal flat(s)	a large flat area of mud or sand attached to the shore and alternately covered and uncovered by the tide
        {
            name: "tidal flats",
            value: "FLTT",
        },
        // H.GLCR	glacier(s)	a mass of ice, usually at high latitudes or high elevations, with sufficient thickness to flow away from the source area in lobes, tongues, or masses
        {
            name: "glaciers",
            value: "GLCR",
        },
        // H.GULF	gulf	a large recess in the coastline, larger than a bay
        {
            name: "gulf",
            value: "GULF",
        },
        // H.GYSR	geyser	a type of hot spring with intermittent eruptions of jets of hot water and steam
        {
            name: "geyser",
            value: "GYSR",
        },
        // H.HBR	harbor(s)	a haven or space of deep water so sheltered by the adjacent land as to afford a safe anchorage for ships
        {
            name: "harbor",
            value: "HBR",
        },
        // // H.HBRX	section of harbor	
        // {
        //     name: "section of harbor",
        //     value: "HBRX",
        // },
        // H.INLT	inlet	a narrow waterway extending into the land, or connecting a bay or lagoon with a larger body of water
        {
            name: "inlet",
            value: "INLT",
        },
        // // H.INLTQ	former inlet	an inlet which has been filled in, or blocked by deposits
        // {
        //     name: "former inlet",
        //     value: "INLTQ",
        // },
        // H.LBED	lake bed(s)	a dried up or drained area of a former lake
        {
            name: "lake bed",
            value: "LBED",
        },
        // H.LGN	lagoon	a shallow coastal waterbody, completely or partly separated from a larger body of water by a barrier island, coral reef or other depositional feature
        {
            name: "lagoon",
            value: "LGN",
        },
        // H.LGNS	lagoons	shallow coastal waterbodies, completely or partly separated from a larger body of water by a barrier island, coral reef or other depositional feature
        {
            name: "lagoons",
            value: "LGNS",
        },
        // // H.LGNX	section of lagoon	
        // {
        //     name: "section of lagoon",
        //     value: "LGNX",
        // },
        // H.LK	lake	a large inland body of standing water
        {
            name: "lake",
            value: "LK",
        },
        // H.LKC	crater lake	a lake in a crater or caldera
        {
            name: "crater lake",
            value: "LKC",
        },
        // // H.LKI	intermittent lake	
        // {
        //     name: "intermittent lake",
        //     value: "LKI",
        // },
        // H.LKN	salt lake	an inland body of salt water with no outlet
        {
            name: "salt lake",
            value: "LKN",
        },
        // // H.LKNI	intermittent salt lake	
        // {
        //     name: "intermittent salt lake",
        //     value: "LKNI",
        // },
        // // H.LKO	oxbow lake	a crescent-shaped lake commonly found adjacent to meandering streams
        // {
        //     name: "oxbow lake",
        //     value: "LKO",
        // },
        // // H.LKOI	intermittent oxbow lake	
        // {
        //     name: "intermittent oxbow lake",
        //     value: "LKOI",
        // },
        // H.LKS	lakes	large inland bodies of standing water
        {
            name: "lakes",
            value: "LKS",
        },
        // H.LKSB	underground lake	a standing body of water in a cave
        {
            name: "underground lake",
            value: "LKSB",
        },
        // H.LKSC	crater lakes	lakes in a crater or caldera
        {
            name: "crater lakes",
            value: "LKSC",
        },
        // // H.LKSI	intermittent lakes	
        // {
        //     name: "intermittent lakes",
        //     value: "LKSI",
        // },
        // H.LKSN	salt lakes	inland bodies of salt water with no outlet
        {
            name: "salt lakes",
            value: "LKSN",
        },
        // // H.LKSNI	intermittent salt lakes	
        // {
        //     name: "intermittent salt lakes",
        //     value: "LKSNI",
        // },
        // // H.LKX	section of lake	
        // {
        //     name: "lakes",
        //     value: "LKS",
        // },
        // H.MFGN	salt evaporation ponds	diked salt ponds used in the production of solar evaporated salt
        {
            name: "salt evaporation ponds",
            value: "MFGN",
        },
        // H.MGV	mangrove swamp	a tropical tidal mud flat characterized by mangrove vegetation
        {
            name: "mangrove swamp",
            value: "MGV",
        },
        // H.MOOR	moor(s)	an area of open ground overlaid with wet peaty soils
        {
            name: "moor",
            value: "MOOR",
        },
        // H.MRSH	marsh(es)	a wetland dominated by grass-like vegetation
        {
            name: "marsh",
            value: "MRSH",
        },
        // H.MRSHN	salt marsh	a flat area, subject to periodic salt water inundation, dominated by grassy salt-tolerant plants
        {
            name: "salt marsh",
            value: "MRSHN",
        },
        // // H.NRWS	narrows	a navigable narrow part of a bay, strait, river, etc.
        // {
        //     name: "narrows",
        //     value: "NRWS",
        // },
        // // H.OCN	ocean	one of the major divisions of the vast expanse of salt water covering part of the earth
        // {
        //     name: "ocean",
        //     value: "OCN",
        // },
        // // H.OVF	overfalls	an area of breaking waves caused by the meeting of currents or by waves moving against the current
        // {
        //     name: "overfalls",
        //     value: "OVF",
        // },
        // // H.PND	pond	a small standing waterbody
        // {
        //     name: "pond",
        //     value: "PND",
        // },
        // // H.PNDI	intermittent pond	
        // {
        //     name: "intermittent pond",
        //     value: "PNDI",
        // },
        // // H.PNDN	salt pond	a small standing body of salt water often in a marsh or swamp, usually along a seacoast
        // {
        //     name: "salt pond",
        //     value: "PNDN",
        // },
        // // H.PNDNI	intermittent salt pond(s)	
        // {
        //     name: "intermittent salt ponds",
        //     value: "PNDNI",
        // },
        // // H.PNDS	ponds	small standing waterbodies
        // {
        //     name: "ponds",
        //     value: "PNDS",
        // },
        // // H.PNDSF	fishponds	ponds or enclosures in which fish are kept or raised
        // {
        //     name: "fishponds",
        //     value: "PNDSF",
        // },
        // // H.PNDSI	intermittent ponds	
        // {
        //     name: "intermittent ponds",
        //     value: "PNDSI",
        // },
        // // H.PNDSN	salt ponds	small standing bodies of salt water often in a marsh or swamp, usually along a seacoast
        // {
        //     name: "salt ponds",
        //     value: "PNDSN",
        // },
        // // H.POOL	pool(s)	a small and comparatively still, deep part of a larger body of water such as a stream or harbor; or a small body of standing water
        // {
        //     name: "pool",
        //     value: "POOL",
        // },
        // // H.POOLI	intermittent pool	
        // {
        //     name: "intermittent pool",
        //     value: "POOLI",
        // },
        // // H.RCH	reach	a straight section of a navigable stream or channel between two bends
        // {
        //     name: "reach",
        //     value: "RCH",
        // },
        // // H.RDGG	icecap ridge	a linear elevation on an icecap
        // {
        //     name: "icecap ridge",
        //     value: "RDGG",
        // },
        // H.RDST	roadstead	an open anchorage affording less protection than a harbor
        {
            name: "roadstead",
            value: "RDST",
        },
        // H.RF	reef(s)	a surface-navigation hazard composed of consolidated material
        {
            name: "reef",
            value: "RF",
        },
        // H.RFC	coral reef(s)	a surface-navigation hazard composed of coral
        {
            name: "coral reef",
            value: "RFC",
        },
        // // H.RFX	section of reef	
        // {
        //     name: "section of reef",
        //     value: "RFX",
        // },
        // H.RPDS	rapids	a turbulent section of a stream associated with a steep, irregular stream bed
        {
            name: "rapids",
            value: "RPDS",
        },
        // H.RSV	reservoir(s)	an artificial pond or lake
        {
            name: "reservoir",
            value: "RSV",
        },
        // // H.RSVI	intermittent reservoir	
        // {
        //     name: "intermittent reservoir",
        //     value: "RSVI",
        // },
        // // H.RSVT	water tank	a contained pool or tank of water at, below, or above ground level
        // {
        //     name: "water tank",
        //     value: "RSVT",
        // },
        // H.RVN	ravine(s)	a small, narrow, deep, steep-sided stream channel, smaller than a gorge
        {
            name: "ravine",
            value: "RVN",
        },
        // H.SBKH	sabkha(s)	a salt flat or salt encrusted plain subject to periodic inundation from flooding or high tides
        {
            name: "sabkha",
            value: "SBKH",
        },
        // H.SD	sound	a long arm of the sea forming a channel between the mainland and an island or islands; or connecting two larger bodies of water
        {
            name: "sound",
            value: "SD",
        },
        // H.SEA	sea	a large body of salt water more or less confined by continuous land or chains of islands forming a subdivision of an ocean
        {
            name: "sea",
            value: "SEA",
        },
        // H.SHOL	shoal(s)	a surface-navigation hazard composed of unconsolidated material
        {
            name: "shoal",
            value: "SHOL",
        },
        // // H.SILL	sill	the low part of an underwater gap or saddle separating basins, including a similar feature at the mouth of a fjord
        // {
        //     name: "sill",
        //     value: "SILL",
        // },
        // H.SPNG	spring(s)	a place where ground water flows naturally out of the ground
        {
            name: "spring",
            value: "SPNG",
        },
        // H.SPNS	sulphur spring(s)	a place where sulphur ground water flows naturally out of the ground
        {
            name: "sulphur spring",
            value: "SPNS",
        },
        // H.SPNT	hot spring(s)	a place where hot ground water flows naturally out of the ground
        {
            name: "hot springs",
            value: "SPNT",
        },
        // // H.STM	stream	a body of running water moving to a lower level in a channel on land
        // {
        //     name: "stream",
        //     value: "STM",
        // },
        // // H.STMA	anabranch	a diverging branch flowing out of a main stream and rejoining it downstream
        // {
        //     name: "anabranch",
        //     value: "STMA",
        // },
        // // H.STMB	stream bend	a conspicuously curved or bent segment of a stream
        // {
        //     name: "stream bend",
        //     value: "STMB",
        // },
        // // H.STMC	canalized stream	a stream that has been substantially ditched, diked, or straightened
        // {
        //     name: "canalized stream",
        //     value: "STMC",
        // },
        // // H.STMD	distributary(-ies)	a branch which flows away from the main stream, as in a delta or irrigation canal
        // {
        //     name: "distributary",
        //     value: "STMD",
        // },
        // H.STMH	headwaters	the source and upper part of a stream, including the upper drainage basin
        {
            name: "headwaters",
            value: "STMH",
        },
        // // H.STMI	intermittent stream	
        // {
        //     name: "intermittent stream",
        //     value: "STMI",
        // },
        // // H.STMIX	section of intermittent stream	
        // {
        //     name: "section of intermittent stream",
        //     value: "STMIX",
        // },
        // // H.STMM	stream mouth(s)	a place where a stream discharges into a lagoon, lake, or the sea
        // {
        //     name: "stream mouth",
        //     value: "STMM",
        // },
        // // H.STMQ	abandoned watercourse	a former stream or distributary no longer carrying flowing water, but still evident due to lakes, wetland, topographic or vegetation patterns
        // {
        //     name: "abondoned watercourse",
        //     value: "STMQ",
        // },
        // // H.STMS	streams	bodies of running water moving to a lower level in a channel on land
        // {
        //     name: "streams",
        //     value: "STMS",
        // },
        // H.STMSB	lost river	a surface stream that disappears into an underground channel, or dries up in an arid area
        {
            name: "lost river",
            value: "STMSB",
        },
        // // H.STMX	section of stream	
        // {
        //     name: "section of stream",
        //     value: "STMX",
        // },
        // // H.STRT	strait	a relatively narrow waterway, usually narrower and less extensive than a sound, connecting two larger bodies of water
        // {
        //     name: "strait",
        //     value: "STRT",
        // },
        // H.SWMP	swamp	a wetland dominated by tree vegetation
        {
            name: "swamp",
            value: "SWMP",
        },
        // // H.SYSI	irrigation system	a network of ditches and one or more of the following elements: water supply, reservoir, canal, pump, well, drain, etc.
        // {
        //     name: "irrigation system",
        //     value: "SYSI",
        // },
        // H.TNLC	canal tunnel	a tunnel through which a canal passes
        {
            name: "canal tunnel",
            value: "TNLC",
        },
        // H.WAD	wadi	a valley or ravine, bounded by relatively steep banks, which in the rainy season becomes a watercourse; found primarily in North Africa and the Middle East
        {
            name: "wadi",
            value: "WAD",
        },
        // // H.WADB	wadi bend	a conspicuously curved or bent segment of a wadi
        // {
        //     name: "wadi bend",
        //     value: "WADB",
        // },
        // // H.WADJ	wadi junction	a place where two or more wadies join
        // {
        //     name: "wadi junction",
        //     value: "WADJ",
        // },
        // // H.WADM	wadi mouth	the lower terminus of a wadi where it widens into an adjoining floodplain, depression, or waterbody
        // {
        //     name: "wadi mouth",
        //     value: "WADM",
        // },
        // // H.WADS	wadies	valleys or ravines, bounded by relatively steep banks, which in the rainy season become watercourses; found primarily in North Africa and the Middle East
        // {
        //     name: "wadies",
        //     value: "WADS",
        // },
        // // H.WADX	section of wadi	
        // {
        //     name: "section of wadi",
        //     value: "WADX",
        // },
        // H.WHRL	whirlpool	a turbulent, rotating movement of water in a stream
        {
            name: "whirlpool",
            value: "WHRL",
        },
        // // H.WLL	well	a cylindrical hole, pit, or tunnel drilled or dug down to a depth from which water, oil, or gas can be pumped or brought to the surface
        // {
        //     name: "well",
        //     value: "WLL",
        // },
        // // H.WLLQ	abandoned well	
        // {
        //     name: "abandoned well",
        //     value: "WLLQ",
        // },
        // // H.WLLS	wells	cylindrical holes, pits, or tunnels drilled or dug down to a depth from which water, oil, or gas can be pumped or brought to the surface
        // {
        //     name: "wells",
        //     value: "WLLS",
        // },
        // H.WTLD	wetland	an area subject to inundation, usually characterized by bog, marsh, or swamp vegetation
        {
            name: "wetland",
            value: "WTLD",
        },
        // // H.WTLDI	intermittent wetland
        // {
        //     name: "intermittent wetland",
        //     value: "WTLDI",
        // },
        // // H.WTRC	watercourse	a natural, well-defined channel produced by flowing water, or an artificial channel designed to carry flowing water
        // {
        //     name: "watercourse",
        //     value: "WTRC",
        // },
        // H.WTRH	waterhole(s)	a natural hole, hollow, or small depression that contains water, used by man and animals, especially in arid areas
        {
            name: "waterhole",
            value: "WTRH",
        },
        // =====================================================
        // =====================================================
        // L. PARKS, AREA, ...
        // =====================================================
        // =====================================================
        {
            name: "",
            value: "",
        },
        {
            name: "&dHar; PARKS + AREAS",
            value: "",
        },
        {
            name: "",
            value: "",
        },
        // L.AGRC	agricultural colony	a tract of land set aside for agricultural settlement
        {
            name: "agricultural colony",
            value: "AGRC",
        },
        // L.AMUS	amusement park	Amusement Park are theme parks, adventure parks offering entertainment, similar to funfairs but with a fix location
        {
            name: "amusement park",
            value: "AMUS",
        },
        // // L.AREA	area	a tract of land without homogeneous character or boundaries
        // {
        //     name: "area",
        //     value: "AREA",
        // },
        // // L.BSND	drainage basin	an area drained by a stream
        // {
        //     name: "drainage basin",
        //     value: "BSND",
        // },
        // // L.BSNP	petroleum basin	an area underlain by an oil-rich structural basin
        // {
        //     name: "petroleum basin",
        //     value: "BSNP",
        // },
        // L.BTL	battlefield	a site of a land battle of historical importance
        {
            name: "battlefield",
            value: "BTL",
        },
        // L.CLG	clearing	an area in a forest with trees removed
        {
            name: "clearing",
            value: "CLG",
        },
        // L.CMN	common	a park or pasture for community use
        {
            name: "commons",
            value: "CMN",
        },
        // // L.CNS	concession area	a lease of land by a government for economic development, e.g., mining, forestry
        // {
        //     name: "concession area",
        //     value: "CNS",
        // },
        // // L.COLF	coalfield	a region in which coal deposits of possible economic value occur
        // {
        //     name: "coalfield",
        //     value: "COLF",
        // },
        // // L.CONT	continent	continent: Europe, Africa, Asia, North America, South America, Oceania, Antarctica
        // {
        //     name: "continent",
        //     value: "CONT",
        // },
        // L.CST	coast	a zone of variable width straddling the shoreline
        {
            name: "coast",
            value: "CST",
        },
        // L.CTRB	business center	a place where a number of businesses are located
        {
            name: "business center",
            value: "CTRB",
        },
        // // L.DEVH	housing development	a tract of land on which many houses of similar design are built according to a development plan
        // {
        //     name: "housing development",
        //     value: "DEVH",
        // },
        // L.FLD	field(s)	an open as opposed to wooded area
        {
            name: "fields",
            value: "FLD",
        },
        // // L.FLDI	irrigated field(s)	a tract of level or terraced land which is irrigated
        // {
        //     name: "irrigated fields",
        //     value: "FLDI",
        // },
        // // L.GASF	gasfield	an area containing a subterranean store of natural gas of economic value
        // {
        //     name: "gasfield",
        //     value: "GASF",
        // },
        // L.GRAZ	grazing area	an area of grasses and shrubs used for grazing
        {
            name: "grazing area",
            value: "GRAZ",
        },
        // L.GVL	gravel area	an area covered with gravel
        {
            name: "gravel area",
            value: "GVL",
        },
        // // L.INDS	industrial area	an area characterized by industrial activity
        // {
        //     name: "industrial area",
        //     value: "INDS",
        // },
        // L.LAND	arctic land	a tract of land in the Arctic
        {
            name: "arctic land",
            value: "LAND",
        },
        // // L.LCTY	locality	a minor area or place of unspecified or mixed character and indefinite boundaries
        // {
        //     name: "locality",
        //     value: "LCTY",
        // },
        // // L.MILB	military base	a place used by an army or other armed service for storing arms and supplies, and for accommodating and training troops, a base from which operations can be initiated
        // {
        //     name: "military base",
        //     value: "MILB",
        // },
        // // L.MNA	mining area	an area of mine sites where minerals and ores are extracted
        // {
        //     name: "mining area",
        //     value: "MNA",
        // },
        // // L.MVA	maneuver area	a tract of land where military field exercises are carried out
        // {
        //     name: "maneuver area",
        //     value: "MVA",
        // },
        // // L.NVB	naval base	an area used to store supplies, provide barracks for troops and naval personnel, a port for naval vessels, and from which operations are initiated
        // {
        //     name: "naval base",
        //     value: "NVB",
        // },
        // L.OAS	oasis(-es)	an area in a desert made productive by the availability of water
        {
            name: "oasis",
            value: "OAS",
        },
        // // L.OILF	oilfield	an area containing a subterranean store of petroleum of economic value
        // {
        //     name: "oilfield",
        //     value: "OILF",
        // },
        // L.PEAT	peat cutting area	an area where peat is harvested
        {
            name: "peat cutting area",
            value: "PEAT",
        },
        // L.PRK	park	an area, often of forested land, maintained as a place of beauty, or for recreation
        {
            name: "park",
            value: "PRK",
        },
        // L.PRT	port	a place provided with terminal and transfer facilities for loading and discharging waterborne cargo or passengers, usually located in a harbor
        {
            name: "port",
            value: "PRT",
        },
        // // L.QCKS	quicksand	an area where loose sand with water moving through it may become unstable when heavy objects are placed at the surface, causing them to sink
        // {
        //     name: "quicksand",
        //     value: "QCKS",
        // },
        // L.RES	reserve	a tract of public land reserved for future use or restricted as to use
        {
            name: "reserve",
            value: "RES",
        },
        // // L.RESA	agricultural reserve	a tract of land reserved for agricultural reclamation and/or development
        // {
        //     name: "agricultural reserve",
        //     value: "RESA",
        // },
        // L.RESF	forest reserve	a forested area set aside for preservation or controlled use
        {
            name: "forest reserve",
            value: "RESF",
        },
        // L.RESH	hunting reserve	a tract of land used primarily for hunting
        {
            name: "hunting reserve",
            value: "RESH",
        },
        // L.RESN	nature reserve	an area reserved for the maintenance of a natural habitat
        {
            name: "nature reserve",
            value: "RESN",
        },
        // // L.RESP	palm tree reserve	an area of palm trees where use is controlled
        // {
        //     name: "palm tree reserve",
        //     value: "RESP",
        // },
        // L.RESV	reservation	a tract of land set aside for aboriginal, tribal, or native populations
        {
            name: "reservation",
            value: "RESV",
        },
        // L.RESW	wildlife reserve	a tract of public land reserved for the preservation of wildlife
        {
            name: "wildlife reserve",
            value: "RESW",
        },
        // // L.RGN	region	an area distinguished by one or more observable physical or cultural characteristics
        // {
        //     name: "region",
        //     value: "RGN",
        // },
        // // L.RGNE	economic region	a region of a country established for economic development or for statistical purposes
        // {
        //     name: "economic region",
        //     value: "RGNE",
        // },
        // // L.RGNH	historical region	a former historic area distinguished by one or more observable physical or cultural characteristics
        // {
        //     name: "historical region",
        //     value: "RGNH",
        // },
        // L.RGNL	lake region	a tract of land distinguished by numerous lakes
        {
            name: "lake region",
            value: "RGNL",
        },
        // // L.RNGA	artillery range	a tract of land used for artillery firing practice
        // {
        //     name: "artillery range",
        //     value: "RNGA",
        // },
        // L.SALT	salt area	a shallow basin or flat where salt accumulates after periodic inundation
        {
            name: "salt area",
            value: "SALT",
        },
        // L.SNOW	snowfield	an area of permanent snow and ice forming the accumulation area of a glacier
        {
            name: "snowfield",
            value: "SNOW",
        },
        // L.TRB	tribal area	a tract of land used by nomadic or other tribes
        {
            name: "tribal area",
            value: "TRB",
        },
        // =====================================================
        // =====================================================
        // P. CITY, VILLAGE, ...
        // =====================================================
        // =====================================================
        {
            name: "",
            value: "",
        },
        {
            name: "&dHar; CITIES + VILLAGES",
            value: "",
        },
        {
            name: "",
            value: "",
        },
        // // P.PPL	populated place	a city, town, village, or other agglomeration of buildings where people live and work
        // {
        //     name: "populated place",
        //     value: "PPL",
        // },
        // // P.PPLA	seat of a first-order administrative division	seat of a first-order administrative division (PPLC takes precedence over PPLA)
        // {
        //     name: "1st-order district seat",
        //     value: "PPLA",
        // },
        // // P.PPLA2	seat of a second-order administrative division	
        // {
        //     name: "2nd-order district seat",
        //     value: "PPLA2",
        // },
        // // P.PPLA3	seat of a third-order administrative division	
        // {
        //     name: "3rd-order district seat",
        //     value: "PPLA3",
        // },
        // // P.PPLA4	seat of a fourth-order administrative division	
        // {
        //     name: "4th-order district seat",
        //     value: "PPLA4",
        // },
        // // P.PPLA5	seat of a fifth-order administrative division	
        // {
        //     name: "5th-order district seat",
        //     value: "PPLA5",
        // },
        // P.PPLC	capital of a political entity	
        {
            name: "capital",
            value: "PPLC",
        },
        // P.PPLCH	historical capital of a political entity	a former capital of a political entity
        {
            name: "historical capital",
            value: "PPLCH",
        },
        // P.PPLF	farm village	a populated place where the population is largely engaged in agricultural activities
        {
            name: "farm village",
            value: "PPLF",
        },
        // P.PPLG	seat of government of a political entity	
        {
            name: "government seat",
            value: "PPLG",
        },
        // P.PPLH	historical populated place	a populated place that no longer exists
        {
            name: "historical area",
            value: "PPLH",
        },
        // // P.PPLL	populated locality	an area similar to a locality but with a small group of dwellings or other buildings
        // {
        //     name: "populated area",
        //     value: "PPLL",
        // },
        // P.PPLQ	abandoned populated place	
        {
            name: "abandoned area",
            value: "PPLQ",
        },
        // P.PPLR	religious populated place	a populated place whose population is largely engaged in religious occupations
        {
            name: "religious area",
            value: "PPLR",
        },
        // // P.PPLS	populated places	cities, towns, villages, or other agglomerations of buildings where people live and work
        // {
        //     name: "populated place",
        //     value: "PPLS",
        // },
        // P.PPLW	destroyed populated place	a village, town or city destroyed by a natural disaster, or by war
        {
            name: "destroyed place",
            value: "PPLW",
        },
        // // P.PPLX	section of populated place	
        // {
        //     name: "section of populated place",
        //     value: "PPLX",
        // },
        // // P.STLMT	israeli settlement	
        // {
        //     name: "israeli settlement",
        //     value: "STLMT",
        // },
        // =====================================================
        // =====================================================
        // R. ROAD, RAILROAD
        // =====================================================
        // =====================================================
        {
            name: "",
            value: "",
        },
        {
            name: "&dHar; ROADS + RAILROADS",
            value: "",
        },
        {
            name: "",
            value: "",
        },
        // // R.CSWY	causeway	a raised roadway across wet ground or shallow water
        // {
        //     name: "causeway",
        //     value: "CSWY",
        // },
        // // R.OILP	oil pipeline	a pipeline used for transporting oil
        // {
        //     name: "oil pipeline",
        //     value: "OILP",
        // },
        // R.PRMN	promenade	a place for public walking, usually along a beach front
        {
            name: "promenade",
            value: "PRMN",
        },
        // R.PTGE	portage	a place where boats, goods, etc., are carried overland between navigable waters
        {
            name: "portage",
            value: "PTGE",
        },
        // // R.RD	road	an open way with improved surface for transportation of animals, people and vehicles
        // {
        //     name: "road",
        //     value: "RD",
        // },
        // R.RDA	ancient road	the remains of a road used by ancient cultures
        {
            name: "ancient road",
            value: "RDA",
        },
        // // R.RDB	road bend	a conspicuously curved or bent section of a road
        // {
        //     name: "road bend",
        //     value: "RDB",
        // },
        // // R.RDCUT	road cut	an excavation cut through a hill or ridge for a road
        // {
        //     name: "road cut",
        //     value: "RDCUT",
        // },
        // // R.RDJCT	road junction	a place where two or more roads join
        // {
        //     name: "road junction",
        //     value: "RDJCT",
        // },
        // // R.RJCT	railroad junction	a place where two or more railroad tracks join
        // {
        //     name: "railroad junction",
        //     value: "RJCT",
        // },
        // // R.RR	railroad	a permanent twin steel-rail track on which freight and passenger cars move long distances
        // {
        //     name: "railroad",
        //     value: "RR",
        // },
        // // R.RRQ	abandoned railroad	
        // {
        //     name: "abandoned railroad",
        //     value: "RRQ",
        // },
        // R.RTE	caravan route	the route taken by caravans
        {
            name: "caravan route",
            value: "RTE",
        },
        // // R.RYD	railroad yard	a system of tracks used for the making up of trains, and switching and storing freight cars
        // {
        //     name: "railroad yard",
        //     value: "RYD",
        // },
        // // R.ST	street	a paved urban thoroughfare
        // {
        //     name: "street",
        //     value: "ST",
        // },
        // // R.STKR	stock route	a route taken by livestock herds
        // {
        //     name: "stock route",
        //     value: "STKR",
        // },
        // // R.TNL	tunnel	a subterranean passageway for transportation
        // {
        //     name: "tunnel",
        //     value: "TNL",
        // },
        // R.TNLN	natural tunnel	a cave that is open at both ends
        {
            name: "natural tunnel",
            value: "TNLN",
        },
        // // R.TNLRD	road tunnel	a tunnel through which a road passes
        // {
        //     name: "road tunnel",
        //     value: "TNLRD",
        // },
        // // R.TNLRR	railroad tunnel	a tunnel through which a railroad passes
        // {
        //     name: "railroad tunnel",
        //     value: "TNLRR",
        // },
        // // R.TNLS	tunnels	subterranean passageways for transportation
        // {
        //     name: "tunnels",
        //     value: "TNLS",
        // },
        // R.TRL	trail	a path, track, or route used by pedestrians, animals, or off-road vehicles
        {
            name: "trail",
            value: "TRL",
        },
        // =====================================================
        // =====================================================
        // S. SPOT, BUILDING, FARM, ...
        // =====================================================
        // =====================================================
        {
            name: "",
            value: "",
        },
        {
            name: "&dHar; SPOTS, BUILDINGS + FARMS",
            value: "",
        },
        {
            name: "",
            value: "",
        },
        // // S.ADMF	administrative facility	a government building
        // {
        //     name: "administrative facility",
        //     value: "ADMF",
        // },
        // // S.AGRF	agricultural facility	a building and/or tract of land used for improving agriculture
        // {
        //     name: "agricultural facility",
        //     value: "AGRF",
        // },
        // // S.AIRB	airbase	an area used to store supplies, provide barracks for air force personnel, hangars and runways for aircraft, and from which operations are initiated
        // {
        //     name: "airbase",
        //     value: "AIRB",
        // },
        // // S.AIRF	airfield	a place on land where aircraft land and take off; no facilities provided for the commercial handling of passengers and cargo
        // {
        //     name: "airfield",
        //     value: "AIRF",
        // },
        // S.AIRH	heliport	a place where helicopters land and take off
        {
            name: "heliport",
            value: "AIRH",
        },
        // S.AIRP	airport	a place where aircraft regularly land and take off, with runways, navigational aids, and major facilities for the commercial handling of passengers and cargo
        {
            name: "airport",
            value: "AIRP",
        },
        // S.AIRQ	abandoned airfield	
        {
            name: "abandoned airfield",
            value: "AIRQ",
        },
        // S.AIRT	terminal	airport facilities for the handling of freight and passengers
        {
            name: "air terminal",
            value: "AIRT",
        },
        // S.AMTH	amphitheater	an oval or circular structure with rising tiers of seats about a stage or open space
        {
            name: "amphitheater",
            value: "AMTH",
        },
        // S.ANS	archaeological/prehistoric site	a place where archeological remains, old structures, or cultural artifacts are located
        {
            name: "archaeological site",
            value: "ANS",
        },
        // S.AQC	aquaculture facility	facility or area for the cultivation of aquatic animals and plants, especially fish, shellfish, and seaweed, in natural or controlled marine or freshwater environments; underwater agriculture
        {
            name: "aquaculture",
            value: "AQC",
        },
        // S.ARCH	arch	a natural or man-made structure in the form of an arch
        {
            name: "arch",
            value: "ARCH",
        },
        // S.ARCHV	archive	a place or institution where documents are preserved
        {
            name: "archive",
            value: "ARCHV",
        },
        // S.ART	piece of art	a piece of art, like a sculpture, painting. In contrast to monument (MNMT) it is not commemorative.
        {
            name: "piece of art",
            value: "ART",
        },
        // // S.ASTR	astronomical station	a point on the earth whose position has been determined by observations of celestial bodies
        // {
        //     name: "astronomical station",
        //     value: "ASTR",
        // },
        // // S.ASYL	asylum	a facility where the insane are cared for and protected
        // {
        //     name: "asylum",
        //     value: "ASYL",
        // },
        // S.ATHF	athletic field	a tract of land used for playing team sports, and athletic track and field events
        {
            name: "athletic field",
            value: "ATHF",
        },
        // S.ATM	automatic teller machine	An unattended electronic machine in a public place, connected to a data system and related equipment and activated by a bank customer to obtain cash withdrawals and other banking services. 
        {
            name: "automatic teller machine",
            value: "ATM",
        },
        // S.BANK	bank	A business establishment in which money is kept for saving or commercial purposes or is invested, supplied for loans, or exchanged. 
        {
            name: "bank",
            value: "BANK",
        },
        // // S.BCN	beacon	a fixed artificial navigation mark
        // {
        //     name: "beacon",
        //     value: "BCN",
        // },
        // S.BDG	bridge	a structure erected across an obstacle such as a stream, road, etc., in order to carry roads, railroads, and pedestrians across
        {
            name: "bridge",
            value: "BDG",
        },
        // S.BDGQ	ruined bridge	a destroyed or decayed bridge which is no longer functional
        {
            name: "ruined bridge",
            value: "BDGQ",
        },
        // // S.BLDA	apartment building	a building containing several individual apartments
        // {
        //     name: "apartment building",
        //     value: "BLDA",
        // },
        // // S.BLDG	building(s)	a structure built for permanent use, as a house, factory, etc.
        // {
        //     name: "building",
        //     value: "BLDG",
        // },
        // // S.BLDO	office building	commercial building where business and/or services are conducted
        // {
        //     name: "office building",
        //     value: "BLDO",
        // },
        // // S.BP	boundary marker	a fixture marking a point along a boundary
        // {
        //     name: "boundary marker",
        //     value: "BP",
        // },
        // // S.BRKS	barracks	a building for lodging military personnel
        // {
        //     name: "barracks",
        //     value: "BRKS",
        // },
        // S.BRKW	breakwater	a structure erected to break the force of waves at the entrance to a harbor or port
        {
            name: "breakwater",
            value: "BRKW",
        },
        // // S.BSTN	baling station	a facility for baling agricultural products
        // {
        //     name: "baling station",
        //     value: "BSTN",
        // },
        // S.BTYD	boatyard	a waterside facility for servicing, repairing, and building small vessels
        {
            name: "boatyard",
            value: "BTYD",
        },
        // S.BUR	burial cave(s)	a cave used for human burials
        {
            name: "burial cave",
            value: "BUR",
        },
        // S.BUSTN	bus station	a facility comprising ticket office, platforms, etc. for loading and unloading passengers 
        {
            name: "bus station",
            value: "BUSTN",
        },
        // S.BUSTP	bus stop	a place lacking station facilities
        {
            name: "bus stop",
            value: "BUSTP",
        },
        // S.CARN	cairn	a heap of stones erected as a landmark or for other purposes
        {
            name: "cairn",
            value: "CARN",
        },
        // S.CAVE	cave(s)	an underground passageway or chamber, or cavity on the side of a cliff
        {
            name: "cave",
            value: "CAVE",
        },
        // // S.CH	church	a building for public Christian worship
        // {
        //     name: "church",
        //     value: "CH",
        // },
        // // S.CMP	camp(s)	a site occupied by tents, huts, or other shelters for temporary use
        // {
        //     name: "camp",
        //     value: "CMP",
        // },
        // // S.CMPL	logging camp	a camp used by loggers
        // {
        //     name: "logging camp",
        //     value: "CMPL",
        // },
        // // S.CMPLA	labor camp	a camp used by migrant or temporary laborers
        // {
        //     name: "labor camp",
        //     value: "CMPLA",
        // },
        // // S.CMPMN	mining camp	a camp used by miners
        // {
        //     name: "mining camp",
        //     value: "CMPMN",
        // },
        // // S.CMPO	oil camp	a camp used by oilfield workers
        // {
        //     name: "oil camp",
        //     value: "CMPO",
        // },
        // // S.CMPQ	abandoned camp	
        // {
        //     name: "abandoned camp",
        //     value: "CMPQ",
        // },
        // // S.CMPRF	refugee camp	a camp used by refugees
        // {
        //     name: "refugee camp",
        //     value: "CMPRF",
        // },
        // S.CMTY	cemetery	a burial place or ground
        {
            name: "cemetery",
            value: "CMTY",
        },
        // // S.COMC	communication center	a facility, including buildings, antennae, towers and electronic equipment for receiving and transmitting information
        // {
        //     name: "communication center",
        //     value: "COMC",
        // },
        // // S.CRRL	corral(s)	a pen or enclosure for confining or capturing animals
        // {
        //     name: "corral",
        //     value: "CRRL",
        // },
        // S.CSNO	casino	a building used for entertainment, especially gambling
        {
            name: "casino",
            value: "CSNO",
        },
        // S.CSTL	castle	a large fortified building or set of buildings
        {
            name: "castle",
            value: "CSTL",
        },
        // // S.CSTM	customs house	a building in a port where customs and duties are paid, and where vessels are entered and cleared
        // {
        //     name: "customs house",
        //     value: "CSTM",
        // },
        // // S.CTHSE	courthouse	a building in which courts of law are held
        // {
        //     name: "courthouse",
        //     value: "CTHSE",
        // },
        // // S.CTRA	atomic center	a facility where atomic research is carried out
        // {
        //     name: "atomic center",
        //     value: "CTRA",
        // },
        // S.CTRCM	community center	a facility for community recreation and other activities
        {
            name: "community center",
            value: "CTRCM",
        },
        // // S.CTRF	facility center	a place where more than one facility is situated
        // {
        //     name: "facility center",
        //     value: "CTRF",
        // },
        // S.CTRM	medical center	a complex of health care buildings including two or more of the following: hospital, medical school, clinic, pharmacy, doctor's offices, etc.
        {
            name: "medical center",
            value: "CTRM",
        },
        // S.CTRR	religious center	a facility where more than one religious activity is carried out, e.g., retreat, school, monastery, worship
        {
            name: "religious center",
            value: "CTRR",
        },
        // S.CTRS	space center	a facility for launching, tracking, or controlling satellites and space vehicles
        {
            name: "space center",
            value: "CTRS",
        },
        // S.CVNT	convent	a building where a community of nuns lives in seclusion
        {
            name: "convent",
            value: "CVNT",
        },
        // S.DAM	dam	a barrier constructed across a stream to impound water
        {
            name: "dam",
            value: "DAM",
        },
        // S.DAMQ	ruined dam	a destroyed or decayed dam which is no longer functional
        {
            name: "ruined dam",
            value: "DAMQ",
        },
        // // S.DAMSB	sub-surface dam	a dam put down to bedrock in a sand river
        // {
        //     name: "sub-surface dam",
        //     value: "DAMSB",
        // },
        // S.DARY	dairy	a facility for the processing, sale and distribution of milk or milk products
        {
            name: "dairy",
            value: "DARY",
        },
        // S.DCKD	dry dock	a dock providing support for a vessel, and means for removing the water so that the bottom of the vessel can be exposed
        {
            name: "dry dock",
            value: "DCKD",
        },
        // S.DCKY	dockyard	a facility for servicing, building, or repairing ships
        {
            name: "dockyard",
            value: "DCKY",
        },
        // // S.DIKE	dike	an earth or stone embankment usually constructed for flood or stream control
        // {
        //     name: "dike",
        //     value: "DIKE",
        // },
        // S.DIP	diplomatic facility	office, residence, or facility of a foreign government, which may include an embassy, consulate, chancery, office of charge d'affaires, or other diplomatic, economic, military, or cultural mission
        {
            name: "diplomatic facility",
            value: "DIP",
        },
        // // S.DPOF	fuel depot	an area where fuel is stored
        // {
        //     name: "fuel depot",
        //     value: "DPOF",
        // },
        // // S.EST	estate(s)	a large commercialized agricultural landholding with associated buildings and other facilities
        // {
        //     name: "estate",
        //     value: "EST",
        // },
        // // S.ESTO	oil palm plantation	an estate specializing in the cultivation of oil palm trees
        // {
        //     name: "oil palm plantation",
        //     value: "ESTO",
        // },
        // // S.ESTR	rubber plantation	an estate which specializes in growing and tapping rubber trees
        // {
        //     name: "rubber plantation",
        //     value: "ESTR",
        // },
        // // S.ESTSG	sugar plantation	an estate that specializes in growing sugar cane
        // {
        //     name: "sugar plantation",
        //     value: "ESTSG",
        // },
        // // S.ESTT	tea plantation	an estate which specializes in growing tea bushes
        // {
        //     name: "tea plantation",
        //     value: "ESTT",
        // },
        // // S.ESTX	section of estate	
        // {
        //     name: "section of estate",
        //     value: "ESTX",
        // },
        // // S.FCL	facility	a building or buildings housing a center, institute, foundation, hospital, prison, mission, courthouse, etc.
        // {
        //     name: "facility",
        //     value: "FCL",
        // },
        // // S.FNDY	foundry	a building or works where metal casting is carried out
        // {
        //     name: "foundry",
        //     value: "FNDY",
        // },
        // // S.FRM	farm	a tract of land with associated buildings devoted to agriculture
        // {
        //     name: "farm",
        //     value: "FRM",
        // },
        // // S.FRMQ	abandoned farm	
        // {
        //     name: "abandoned farm",
        //     value: "FRMQ",
        // },
        // // S.FRMS	farms	tracts of land with associated buildings devoted to agriculture
        // {
        //     name: "farms",
        //     value: "FRMS",
        // },
        // // S.FRMT	farmstead	the buildings and adjacent service areas of a farm
        // {
        //     name: "farmstead",
        //     value: "FRMT",
        // },
        // S.FT	fort	a defensive structure or earthworks
        {
            name: "fort",
            value: "FT",
        },
        // S.FY	ferry	a boat or other floating conveyance and terminal facilities regularly used to transport people and vehicles across a waterbody
        {
            name: "ferry",
            value: "FY",
        },
        // S.FYT	ferry terminal	a place where ferries pick-up and discharge passengers, vehicles and or cargo
        {
            name: "ferry terminal",
            value: "FYT",
        },
        // // S.GATE	gate	a controlled access entrance or exit
        // {
        //     name: "gate",
        //     value: "GATE",
        // },
        // S.GDN	garden(s)	an enclosure for displaying selected plant or animal life
        {
            name: "garden",
            value: "GDN",
        },
        // S.GHAT	ghat	a set of steps leading to a river, which are of religious significance, and at their base is usually a platform for bathing
        {
            name: "ghat",
            value: "GHAT",
        },
        // S.GHSE	guest house	a house used to provide lodging for paying guests
        {
            name: "guest house",
            value: "GHSE",
        },
        // // S.GOSP	gas-oil separator plant	a facility for separating gas from oil
        // {
        //     name: "gas-oil separator",
        //     value: "GOSP",
        // },
        // S.GOVL	local government office	a facility housing local governmental offices, usually a city, town, or village hall
        {
            name: "local government office",
            value: "GOVL",
        },
        // S.GRVE	grave	a burial site
        {
            name: "grave",
            value: "GRVE",
        },
        // S.HERM	hermitage	a secluded residence, usually for religious sects
        {
            name: "hermitage",
            value: "HERM",
        },
        // S.HLT	halting place	a place where caravans stop for rest
        {
            name: "halting place",
            value: "HLT",
        },
        // S.HMSD	homestead	a residence, owner's or manager's, on a sheep or cattle station, woolshed, outcamp, or Aboriginal outstation, specific to Australia and New Zealand 
        {
            name: "homestead",
            value: "HMSD",
        },
        // // S.HSE	house(s)	a building used as a human habitation
        // {
        //     name: "house",
        //     value: "HSE",
        // },
        // S.HSEC	country house	a large house, mansion, or chateau, on a large estate
        {
            name: "country house",
            value: "HSEC",
        },
        // S.HSP	hospital	a building in which sick or injured, especially those confined to bed, are medically treated
        {
            name: "hospital",
            value: "HSP",
        },
        // S.HSPC	clinic	a medical facility associated with a hospital for outpatients
        {
            name: "clinic",
            value: "HSPC",
        },
        // S.HSPD	dispensary	a building where medical or dental aid is dispensed
        {
            name: "dispensary",
            value: "HSPD",
        },
        // // S.HSPL	leprosarium	an asylum or hospital for lepers
        // {
        //     name: "leprosarium",
        //     value: "HSPL",
        // },
        // S.HSTS	historical site	a place of historical importance
        {
            name: "historical site",
            value: "HSTS",
        },
        // S.HTL	hotel	a building providing lodging and/or meals for the public
        {
            name: "hotel",
            value: "HTL",
        },
        // S.HUT	hut	a small primitive house
        {
            name: "hut",
            value: "HUT",
        },
        // S.HUTS	huts	small primitive houses
        {
            name: "huts",
            value: "HUTS",
        },
        // // S.INSM	military installation	a facility for use of and control by armed forces
        // {
        //     name: "military installation",
        //     value: "INSM",
        // },
        // // S.ITTR	research institute	a facility where research is carried out
        // {
        //     name: "research institute",
        //     value: "ITTR",
        // },
        // S.JTY	jetty	a structure built out into the water at a river mouth or harbor entrance to regulate currents and silting
        {
            name: "jetty",
            value: "JTY",
        },
        // S.LDNG	landing	a place where boats receive or discharge passengers and freight, but lacking most port facilities
        {
            name: "landing",
            value: "LDNG",
        },
        // // S.LEPC	leper colony	a settled area inhabited by lepers in relative isolation
        // {
        //     name: "leper colony",
        //     value: "LEPC",
        // },
        // S.LIBR	library	A place in which information resources such as books are kept for reading, reference, or lending.
        {
            name: "library",
            value: "LIBR",
        },
        // // S.LNDF	landfill	a place for trash and garbage disposal in which the waste is buried between layers of earth to build up low-lying land
        // {
        //     name: "landfill",
        //     value: "LNDF",
        // },
        // S.LOCK	lock(s)	a basin in a waterway with gates at each end by means of which vessels are passed from one water level to another
        {
            name: "locks",
            value: "LOCK",
        },
        // S.LTHSE	lighthouse	a distinctive structure exhibiting a major navigation light
        {
            name: "lighthouse",
            value: "LTHSE",
        },
        // S.MALL	mall	A large, often enclosed shopping complex containing various stores, businesses, and restaurants usually accessible by common passageways.
        {
            name: "mall",
            value: "MALL",
        },
        // S.MAR	marina	a harbor facility for small boats, yachts, etc.
        {
            name: "marina",
            value: "MAR",
        },
        // // S.MFG	factory	one or more buildings where goods are manufactured, processed or fabricated
        // {
        //     name: "factory",
        //     value: "MFG",
        // },
        // S.MFGB	brewery	one or more buildings where beer is brewed
        {
            name: "brewery",
            value: "MFGB",
        },
        // // S.MFGC	cannery	a building where food items are canned
        // {
        //     name: "cannery",
        //     value: "MFGC",
        // },
        // // S.MFGCU	copper works	a facility for processing copper ore
        // {
        //     name: "copper works",
        //     value: "MFGCU",
        // },
        // // S.MFGLM	limekiln	a furnace in which limestone is reduced to lime
        // {
        //     name: "limekiln",
        //     value: "MFGLM",
        // },
        // // S.MFGM	munitions plant	a factory where ammunition is made
        // {
        //     name: "munitions plant",
        //     value: "MFGM",
        // },
        // // S.MFGPH	phosphate works	a facility for producing fertilizer
        // {
        //     name: "phosphate works",
        //     value: "MFGPH",
        // },
        // S.MFGQ	abandoned factory	
        {
            name: "abandoned factory",
            value: "MFGQ",
        },
        // // S.MFGSG	sugar refinery	a facility for converting raw sugar into refined sugar
        // {
        //     name: "sugar refinery",
        //     value: "MFGSG",
        // },
        // S.MKT	market	a place where goods are bought and sold at regular intervals
        {
            name: "market",
            value: "MKT",
        },
        // // S.ML	mill(s)	a building housing machines for transforming, shaping, finishing, grinding, or extracting products
        // {
        //     name: "mill",
        //     value: "ML",
        // },
        // // S.MLM	ore treatment plant	a facility for improving the metal content of ore by concentration
        // {
        //     name: "ore treatment plant",
        //     value: "MLM",
        // },
        // // S.MLO	olive oil mill	a mill where oil is extracted from olives
        // {
        //     name: "olive oil mill",
        //     value: "MLO",
        // },
        // // S.MLSG	sugar mill	a facility where sugar cane is processed into raw sugar
        // {
        //     name: "sugar mill",
        //     value: "MLSG",
        // },
        // // S.MLSGQ	former sugar mill	a sugar mill no longer used as a sugar mill
        // {
        //     name: "former sugar mill",
        //     value: "MLSGQ",
        // },
        // // S.MLSW	sawmill	a mill where logs or lumber are sawn to specified shapes and sizes
        // {
        //     name: "sawmill",
        //     value: "MLSW",
        // },
        // S.MLWND	windmill	a mill or water pump powered by wind
        {
            name: "windmill",
            value: "MLWND",
        },
        // S.MLWTR	water mill	a mill powered by running water
        {
            name: "water mill",
            value: "MLWTR",
        },
        // // S.MN	mine(s)	a site where mineral ores are extracted from the ground by excavating surface pits and subterranean passages
        // {
        //     name: "mine",
        //     value: "MN",
        // },
        // // S.MNAU	gold mine(s)	a mine where gold ore, or alluvial gold is extracted
        // {
        //     name: "gold mine",
        //     value: "MNAU",
        // },
        // // S.MNC	coal mine(s)	a mine where coal is extracted
        // {
        //     name: "coal mine",
        //     value: "MNC",
        // },
        // // S.MNCR	chrome mine(s)	a mine where chrome ore is extracted
        // {
        //     name: "chrome mine",
        //     value: "MNCR",
        // },
        // // S.MNCU	copper mine(s)	a mine where copper ore is extracted
        // {
        //     name: "copper mine",
        //     value: "MNCU",
        // },
        // // S.MNFE	iron mine(s)	a mine where iron ore is extracted
        // {
        //     name: "iron mine",
        //     value: "MNFE",
        // },
        // S.MNMT	monument	a commemorative structure or statue
        {
            name: "monument",
            value: "MNMT",
        },
        // // S.MNN	salt mine(s)	a mine from which salt is extracted
        // {
        //     name: "salt mine",
        //     value: "MNN",
        // },
        // // S.MNQ	abandoned mine	
        // {
        //     name: "abandoned mine",
        //     value: "MNQ",
        // },
        // // S.MNQR	quarry(-ies)	a surface mine where building stone or gravel and sand, etc. are extracted
        // {
        //     name: "quarry",
        //     value: "MNQR",
        // },
        // S.MOLE	mole	a massive structure of masonry or large stones serving as a pier or breakwater
        {
            name: "mole",
            value: "MOLE",
        },
        // // S.MSQE	mosque	a building for public Islamic worship
        // {
        //     name: "mosque",
        //     value: "MSQE",
        // },
        // // S.MSSN	mission	a place characterized by dwellings, school, church, hospital and other facilities operated by a religious group for the purpose of providing charitable services and to propagate religion
        // {
        //     name: "mission",
        //     value: "MSSN",
        // },
        // // S.MSSNQ	abandoned mission	
        // {
        //     name: "abandoned mission",
        //     value: "MSSNQ",
        // },
        // S.MSTY	monastery	a building and grounds where a community of monks lives in seclusion
        {
            name: "monastery",
            value: "MSTY",
        },
        // S.MTRO	metro station	metro station (Underground, Tube, or Metro) 
        {
            name: "metro station",
            value: "MTRO",
        },
        // S.MUS	museum	a building where objects of permanent interest in one or more of the arts and sciences are preserved and exhibited
        {
            name: "museum",
            value: "MUS",
        },
        // // S.NOV	novitiate	a religious house or school where novices are trained
        // {
        //     name: "novitiate",
        //     value: "NOV",
        // },
        // S.NSY	nursery(-ies)	a place where plants are propagated for transplanting or grafting
        {
            name: "nursery",
            value: "NSY",
        },
        // S.OBPT	observation point	a wildlife or scenic observation point
        {
            name: "observation point",
            value: "OBPT",
        },
        // S.OBS	observatory	a facility equipped for observation of atmospheric or space phenomena
        {
            name: "observatory",
            value: "OBS",
        },
        // S.OBSR	radio observatory	a facility equipped with an array of antennae for receiving radio waves from space
        {
            name: "radio observatory",
            value: "OBSR",
        },
        // // S.OILJ	oil pipeline junction	a section of an oil pipeline where two or more pipes join together
        // {
        //     name: "oil pipeline junction",
        //     value: "OILJ",
        // },
        // // S.OILQ	abandoned oil well	
        // {
        //     name: "abandoned oil well",
        //     value: "OILQ",
        // },
        // // S.OILR	oil refinery	a facility for converting crude oil into refined petroleum products
        // {
        //     name: "oil refinery",
        //     value: "OILR",
        // },
        // // S.OILT	tank farm	a tract of land occupied by large, cylindrical, metal tanks in which oil or liquid petrochemicals are stored
        // {
        //     name: "tank farm",
        //     value: "OILT",
        // },
        // // S.OILW	oil well	a well from which oil may be pumped
        // {
        //     name: "oil well",
        //     value: "OILW",
        // },
        // S.OPRA	opera house	A theater designed chiefly for the performance of operas.
        {
            name: "opera house",
            value: "OPRA",
        },
        // S.PAL	palace	a large stately house, often a royal or presidential residence
        {
            name: "palace",
            value: "PAL",
        },
        // S.PGDA	pagoda	a tower-like storied structure, usually a Buddhist shrine
        {
            name: "pagoda",
            value: "PGDA",
        },
        // S.PIER	pier	a structure built out into navigable water on piles providing berthing for ships and recreation
        {
            name: "pier",
            value: "PIER",
        },
        // // S.PKLT	parking lot	an area used for parking vehicles
        // {
        //     name: "parking lot",
        //     value: "PKLT",
        // },
        // // S.PMPO	oil pumping station	a facility for pumping oil through a pipeline
        // {
        //     name: "oil pumping station",
        //     value: "PMPO",
        // },
        // // S.PMPW	water pumping station	a facility for pumping water from a major well or through a pipeline
        // {
        //     name: "water pumping station",
        //     value: "PMPW",
        // },
        // S.PO	post office	a public building in which mail is received, sorted and distributed
        {
            name: "post office",
            value: "PO",
        },
        // S.PP	police post	a building in which police are stationed
        {
            name: "police post",
            value: "PP",
        },
        // // S.PPQ	abandoned police post	
        // {
        //     name: "abandoned police post",
        //     value: "PPQ",
        // },
        // S.PRKGT	park gate	a controlled access to a park
        {
            name: "park gate",
            value: "PRKGT",
        },
        // S.PRKHQ	park headquarters	a park administrative facility
        {
            name: "park headquarters",
            value: "PRKHQ",
        },
        // // S.PRN	prison	a facility for confining prisoners
        // {
        //     name: "prison",
        //     value: "PRN",
        // },
        // // S.PRNJ	reformatory	a facility for confining, training, and reforming young law offenders
        // {
        //     name: "reformatory",
        //     value: "PRNJ",
        // },
        // // S.PRNQ	abandoned prison	
        // {
        //     name: "abandoned prison",
        //     value: "PRNQ",
        // },
        // // S.PS	power station	a facility for generating electric power
        // {
        //     name: "power station",
        //     value: "PS",
        // },
        // // S.PSH	hydroelectric power station	a building where electricity is generated from water power
        // {
        //     name: "hydroelectric power station",
        //     value: "PSH",
        // },
        // // S.PSN	nuclear power station	nuclear power station
        // {
        //     name: "nuclear power station",
        //     value: "PSN",
        // },
        // // S.PSTB	border post	a post or station at an international boundary for the regulation of movement of people and goods
        // {
        //     name: "border post",
        //     value: "PSTB",
        // },
        // // S.PSTC	customs post	a building at an international boundary where customs and duties are paid on goods
        // {
        //     name: "customs post",
        //     value: "PSTC",
        // },
        // // S.PSTP	patrol post	a post from which patrols are sent out
        // {
        //     name: "patrol post",
        //     value: "PSTP",
        // },
        // S.PYR	pyramid	an ancient massive structure of square ground plan with four triangular faces meeting at a point and used for enclosing tombs
        {
            name: "pyramid",
            value: "PYR",
        },
        // S.PYRS	pyramids	ancient massive structures of square ground plan with four triangular faces meeting at a point and used for enclosing tombs
        {
            name: "pyramids",
            value: "PYRS",
        },
        // // S.QUAY	quay	a structure of solid construction along a shore or bank which provides berthing for ships and which generally provides cargo handling facilities
        // {
        //     name: "quay",
        //     value: "QUAY",
        // },
        // // S.RDCR	traffic circle	a road junction formed around a central circle about which traffic moves in one direction only
        // {
        //     name: "traffic circle",
        //     value: "RDCR",
        // },
        // // S.RDIN	intersection	a junction of two or more highways by a system of separate levels that permit traffic to pass from one to another without the crossing of traffic streams
        // {
        //     name: "intersection",
        //     value: "RDIN",
        // },
        // S.RECG	golf course	a recreation field where golf is played
        {
            name: "golf course",
            value: "RECG",
        },
        // S.RECR	racetrack	a track where races are held
        {
            name: "racetrack",
            value: "RECR",
        },
        // S.REST	restaurant	A place where meals are served to the public
        {
            name: "restaurant",
            value: "REST",
        },
        // S.RET	store	a building where goods and/or services are offered for sale
        {
            name: "store",
            value: "RET",
        },
        // S.RHSE	resthouse	a structure maintained for the rest and shelter of travelers
        {
            name: "resthouse",
            value: "RHSE",
        },
        // // S.RKRY	rookery	a breeding place of a colony of birds or seals
        // {
        //     name: "rookery",
        //     value: "RKRY",
        // },
        // S.RLG	religious site	an ancient site of significant religious importance
        {
            name: "religious site",
            value: "RLG",
        },
        // S.RLGR	retreat	a place of temporary seclusion, especially for religious groups
        {
            name: "retreat",
            value: "RLGR",
        },
        // // S.RNCH	ranch(es)	a large farm specializing in extensive grazing of livestock
        // {
        //     name: "ranch",
        //     value: "RNCH",
        // },
        // // S.RSD	railroad siding	a short track parallel to and joining the main track
        // {
        //     name: "railroad siding",
        //     value: "RSD",
        // },
        // // S.RSGNL	railroad signal	a signal at the entrance of a particular section of track governing the movement of trains
        // {
        //     name: "railroad signal",
        //     value: "RSGNL",
        // },
        // S.RSRT	resort	a specialized facility for vacation, health, or participation sports activities
        {
            name: "resort",
            value: "RSRT",
        },
        // S.RSTN	railroad station	a facility comprising ticket office, platforms, etc. for loading and unloading train passengers and freight
        {
            name: "railroad station",
            value: "RSTN",
        },
        // S.RSTNQ	abandoned railroad station	
        {
            name: "abandoned railroad station",
            value: "RSTNQ",
        },
        // S.RSTP	railroad stop	a place lacking station facilities where trains stop to pick up and unload passengers and freight
        {
            name: "railroad stop",
            value: "RSTP",
        },
        // S.RSTPQ	abandoned railroad stop	
        {
            name: "abandoned railroad stop",
            value: "RSTPQ",
        },
        // S.RUIN	ruin(s)	a destroyed or decayed structure which is no longer functional
        {
            name: "ruins",
            value: "RUIN",
        },
        // // S.SCH	school	building(s) where instruction in one or more branches of knowledge takes place
        // {
        //     name: "school",
        //     value: "SCH",
        // },
        // // S.SCHA	agricultural school	a school with a curriculum focused on agriculture
        // {
        //     name: "agricultural school",
        //     value: "SCHA",
        // },
        // S.SCHC	college	the grounds and buildings of an institution of higher learning
        {
            name: "college",
            value: "SCHC",
        },
        // S.SCHL	language school	Language Schools & Institutions
        {
            name: "language school",
            value: "SCHL",
        },
        // // S.SCHM	military school	a school at which military science forms the core of the curriculum
        // {
        //     name: "military school",
        //     value: "SCHM",
        // },
        // S.SCHN	maritime school	a school at which maritime sciences form the core of the curriculum
        {
            name: "maritime school",
            value: "SCHN",
        },
        // S.SCHT	technical school	post-secondary school with a specifically technical or vocational curriculum
        {
            name: "technical school",
            value: "SCHT",
        },
        // // S.SECP	State Exam Prep Centre	state exam preparation centres
        // {
        //     name: "State Exam Prep Centre",
        //     value: "SECP",
        // },
        // // S.SHPF	sheepfold	a fence or wall enclosure for sheep and other small herd animals
        // {
        //     name: "sheepfold",
        //     value: "SHPF",
        // },
        // S.SHRN	shrine	a structure or place memorializing a person or religious concept
        {
            name: "shrine",
            value: "SHRN",
        },
        // // S.SHSE	storehouse	a building for storing goods, especially provisions
        // {
        //     name: "storehouse",
        //     value: "SHSE",
        // },
        // // S.SLCE	sluice	a conduit or passage for carrying off surplus water from a waterbody, usually regulated by means of a sluice gate
        // {
        //     name: "sluice",
        //     value: "SLCE",
        // },
        // // S.SNTR	sanatorium	a facility where victims of physical or mental disorders are treated
        // {
        //     name: "sanatorium",
        //     value: "SNTR",
        // },
        // S.SPA	spa	a resort area usually developed around a medicinal spring
        {
            name: "spa",
            value: "SPA",
        },
        // // S.SPLY	spillway	a passage or outlet through which surplus water flows over, around or through a dam
        // {
        //     name: "spillway",
        //     value: "SPLY",
        // },
        // S.SQR	square	a broad, open, public area near the center of a town or city
        {
            name: "square",
            value: "SQR",
        },
        // S.STBL	stable	a building for the shelter and feeding of farm animals, especially horses
        {
            name: "stable",
            value: "STBL",
        },
        // S.STDM	stadium	a structure with an enclosure for athletic games with tiers of seats for spectators
        {
            name: "stadium",
            value: "STDM",
        },
        // // S.STNB	scientific research base	a scientific facility used as a base from which research is carried out or monitored
        // {
        //     name: "scientific research base",
        //     value: "STNB",
        // },
        // // S.STNC	coast guard station	a facility from which the coast is guarded by armed vessels
        // {
        //     name: "coast guard station",
        //     value: "STNC",
        // },
        // // S.STNE	experiment station	a facility for carrying out experiments
        // {
        //     name: "experiment station",
        //     value: "STNE",
        // },
        // S.STNF	forest station	a collection of buildings and facilities for carrying out forest management
        {
            name: "forest station",
            value: "STNF",
        },
        // S.STNI	inspection station	a station at which vehicles, goods, and people are inspected
        {
            name: "inspection station",
            value: "STNI",
        },
        // S.STNM	meteorological station	a station at which weather elements are recorded
        {
            name: "meteorological station",
            value: "STNM",
        },
        // S.STNR	radio station	a facility for producing and transmitting information by radio waves
        {
            name: "radio station",
            value: "STNR",
        },
        // // S.STNS	satellite station	a facility for tracking and communicating with orbiting satellites
        // {
        //     name: "satellite station",
        //     value: "STNS",
        // },
        // // S.STNW	whaling station	a facility for butchering whales and processing train oil
        // {
        //     name: "whaling station",
        //     value: "STNW",
        // },
        // S.STPS	steps	stones or slabs placed for ease in ascending or descending a steep slope
        {
            name: "steps",
            value: "STPS",
        },
        // // S.SWT	sewage treatment plant	facility for the processing of sewage and/or wastewater
        // {
        //     name: "sewage treatment plant",
        //     value: "SWT",
        // },
        // // S.SYG	synagogue	a place for Jewish worship and religious instruction
        // {
        //     name: "synagogue",
        //     value: "SYG",
        // },
        // S.THTR	theater	A building, room, or outdoor structure for the presentation of plays, films, or other dramatic performances
        {
            name: "theater",
            value: "THTR",
        },
        // S.TMB	tomb(s)	a structure for interring bodies
        {
            name: "tomb(s)",
            value: "TMB",
        },
        // S.TMPL	temple(s)	an edifice dedicated to religious worship
        {
            name: "temple",
            value: "TMPL",
        },
        // // S.TNKD	cattle dipping tank	a small artificial pond used for immersing cattle in chemically treated water for disease control
        // {
        //     name: "cattle dipping tank",
        //     value: "TNKD",
        // },
        // S.TOLL	toll gate/barrier	highway toll collection station
        {
            name: "toll gate",
            value: "TOLL",
        },
        // S.TOWR	tower	a high conspicuous structure, typically much higher than its diameter
        {
            name: "tower",
            value: "TOWR",
        },
        // S.TRAM	tram	rail vehicle along urban streets (also known as streetcar or trolley)
        {
            name: "tram",
            value: "TRAM",
        },
        // S.TRANT	transit terminal	facilities for the handling of vehicular freight and passengers
        {
            name: "transit terminal",
            value: "TRANT",
        },
        // // S.TRIG	triangulation station	a point on the earth whose position has been determined by triangulation
        // {
        //     name: "triangulation station",
        //     value: "TRIG",
        // },
        // // S.TRMO	oil pipeline terminal	a tank farm or loading facility at the end of an oil pipeline
        // {
        //     name: "oil pipeline terminal",
        //     value: "TRMO",
        // },
        // S.TWO	temp work office	Temporary Work Offices
        {
            name: "temp work office",
            value: "TWO",
        },
        // // S.UNIP	university prep school	University Preparation Schools & Institutions
        // {
        //     name: "university prep school",
        //     value: "UNIP",
        // },
        // S.UNIV	university	An institution for higher learning with teaching and research facilities constituting a graduate school and professional schools that award master's degrees and doctorates and an undergraduate division that awards bachelor's degrees.
        {
            name: "university",
            value: "UNIV",
        },
        // // S.USGE	united states government establishment	a facility operated by the United States Government in Panama
        // {
        //     name: "united states government establishment",
        //     value: "USGE",
        // },
        // S.VETF	veterinary facility	a building or camp at which veterinary services are available
        {
            name: "veterinarian",
            value: "VETF",
        },
        // S.WALL	wall	a thick masonry structure, usually enclosing a field or building, or forming the side of a structure
        {
            name: "wall",
            value: "WALL",
        },
        // S.WALLA	ancient wall	the remains of a linear defensive stone structure
        {
            name: "ancient wall",
            value: "WALLA",
        },
        // // S.WEIR	weir(s)	a small dam in a stream, designed to raise the water level or to divert stream flow through a desired channel
        // {
        //     name: "weir",
        //     value: "WEIR",
        // },
        // S.WHRF	wharf(-ves)	a structure of open rather than solid construction along a shore or a bank which provides berthing for ships and cargo-handling facilities
        {
            name: "wharf",
            value: "WHRF",
        },
        // S.WRCK	wreck	the site of the remains of a wrecked vessel
        {
            name: "wreck",
            value: "WRCK",
        },
        // // S.WTRW	waterworks	a facility for supplying potable water through a water source and a system of pumps and filtration beds
        // {
        //     name: "waterworks",
        //     value: "WTRW",
        // },
        // S.ZNF	free trade zone	an area, usually a section of a port, where goods may be received and shipped free of customs duty and of most customs regulations
        {
            name: "free trade zone",
            value: "ZNF",
        },
        // S.ZOO	zoo	a zoological garden or park where wild animals are kept for exhibition
        {
            name: "zoo",
            value: "ZOO",
        },
        // =====================================================
        // =====================================================
        // T. MOUNTAIN, HILL, ROCK, ...
        // =====================================================
        // =====================================================
        {
            name: "",
            value: "",
        },
        {
            name: "&dHar; MOUNTAINS, HILLS + ROCKS",
            value: "",
        },
        {
            name: "",
            value: "",
        },
        // T.ASPH	asphalt lake	a small basin containing naturally occurring asphalt
        {
            name: "asphalt lake",
            value: "ASPH",
        },
        // T.ATOL	atoll(s)	a ring-shaped coral reef which has closely spaced islands on it encircling a lagoon
        {
            name: "atoll",
            value: "ATOL",
        },
        // // T.BAR	bar	a shallow ridge or mound of coarse unconsolidated material in a stream channel, at the mouth of a stream, estuary, or lagoon and in the wave-break zone along coasts
        // {
        //     name: "bar",
        //     value: "BAR",
        // },
        // T.BCH	beach	a shore zone of coarse unconsolidated sediment that extends from the low-water line to the highest reach of storm waves
        {
            name: "beach",
            value: "BCH",
        },
        // T.BCHS	beaches	a shore zone of coarse unconsolidated sediment that extends from the low-water line to the highest reach of storm waves
        {
            name: "beaches",
            value: "BCHS",
        },
        // T.BDLD	badlands	an area characterized by a maze of very closely spaced, deep, narrow, steep-sided ravines, and sharp crests and pinnacles
        {
            name: "badlands",
            value: "BDLD",
        },
        // T.BLDR	boulder field	a high altitude or high latitude bare, flat area covered with large angular rocks
        {
            name: "boulder field",
            value: "BLDR",
        },
        // T.BLHL	blowhole(s)	a hole in coastal rock through which sea water is forced by a rising tide or waves and spurted through an outlet into the air
        {
            name: "blowhole",
            value: "BLHL",
        },
        // T.BLOW	blowout(s)	a small depression in sandy terrain, caused by wind erosion
        {
            name: "blowout",
            value: "BLOW",
        },
        // T.BNCH	bench	a long, narrow bedrock platform bounded by steeper slopes above and below, usually overlooking a waterbody
        {
            name: "bench",
            value: "BNCH",
        },
        // T.BUTE	butte(s)	a small, isolated, usually flat-topped hill with steep sides
        {
            name: "butte",
            value: "BUTE",
        },
        // T.CAPE	cape	a land area, more prominent than a point, projecting into the sea and marking a notable change in coastal direction
        {
            name: "cape",
            value: "CAPE",
        },
        // T.CFT	cleft(s)	a deep narrow slot, notch, or groove in a coastal cliff
        {
            name: "cleft",
            value: "CFT",
        },
        // T.CLDA	caldera	a depression measuring kilometers across formed by the collapse of a volcanic mountain
        {
            name: "caldera",
            value: "CLDA",
        },
        // T.CLF	cliff(s)	a high, steep to perpendicular slope overlooking a waterbody or lower area
        {
            name: "cliff",
            value: "CLF",
        },
        // T.CNYN	canyon	a deep, narrow valley with steep sides cutting into a plateau or mountainous area
        {
            name: "canyon",
            value: "CNYN",
        },
        // T.CONE	cone(s)	a conical landform composed of mud or volcanic material
        {
            name: "mud/volcanic cone",
            value: "CONE",
        },
        // // T.CRDR	corridor	a strip or area of land having significance as an access way
        // {
        //     name: "corridor",
        //     value: "CRDR",
        // },
        // T.CRQ	cirque	a bowl-like hollow partially surrounded by cliffs or steep slopes at the head of a glaciated valley
        {
            name: "cirque",
            value: "CRQ",
        },
        // T.CRQS	cirques	bowl-like hollows partially surrounded by cliffs or steep slopes at the head of a glaciated valley
        {
            name: "cirques",
            value: "CRQS",
        },
        // T.CRTR	crater(s)	a generally circular saucer or bowl-shaped depression caused by volcanic or meteorite explosive action
        {
            name: "crater",
            value: "CRTR",
        },
        // T.CUET	cuesta(s)	an asymmetric ridge formed on tilted strata
        {
            name: "cuesta",
            value: "CUET",
        },
        // T.DLTA	delta	a flat plain formed by alluvial deposits at the mouth of a stream
        {
            name: "delta",
            value: "DLTA",
        },
        // T.DPR	depression(s)	a low area surrounded by higher land and usually characterized by interior drainage
        {
            name: "depression",
            value: "DPR",
        },
        // T.DSRT	desert	a large area with little or no vegetation due to extreme environmental conditions
        {
            name: "desert",
            value: "DSRT",
        },
        // T.DUNE	dune(s)	a wave form, ridge or star shape feature composed of sand
        {
            name: "dunes",
            value: "DUNE",
        },
        // T.DVD	divide	a line separating adjacent drainage basins
        {
            name: "divide",
            value: "DVD",
        },
        // T.ERG	sandy desert	an extensive tract of shifting sand and sand dunes
        {
            name: "sandy desert (erg)",
            value: "ERG",
        },
        // T.FAN	fan(s)	a fan-shaped wedge of coarse alluvium with apex merging with a mountain stream bed and the fan spreading out at a low angle slope onto an adjacent plain
        {
            name: "alluvial fan",
            value: "FAN",
        },
        // T.FORD	ford	a shallow part of a stream which can be crossed on foot or by land vehicle
        {
            name: "ford",
            value: "FORD",
        },
        // T.FSR	fissure	a crack associated with volcanism
        {
            name: "fissure",
            value: "FSR",
        },
        // T.GAP	gap	a low place in a ridge, not used for transportation
        {
            name: "gap",
            value: "GAP",
        },
        // T.GRGE	gorge(s)	a short, narrow, steep-sided section of a stream valley
        {
            name: "gorge",
            value: "GRGE",
        },
        // T.HDLD	headland	a high projection of land extending into a large body of water beyond the line of the coast
        {
            name: "headland",
            value: "HDLD",
        },
        // T.HLL	hill	a rounded elevation of limited extent rising above the surrounding land with local relief of less than 300m
        {
            name: "hill",
            value: "HLL",
        },
        // T.HLLS	hills	rounded elevations of limited extent rising above the surrounding land with local relief of less than 300m
        {
            name: "hills",
            value: "HLLS",
        },
        // T.HMCK	hammock(s)	a patch of ground, distinct from and slightly above the surrounding plain or wetland. Often occurs in groups
        {
            name: "hammock",
            value: "HMCK",
        },
        // T.HMDA	rock desert	a relatively sand-free, high bedrock plateau in a hot desert, with or without a gravel veneer
        {
            name: "rock desert",
            value: "HMDA",
        },
        // T.INTF	interfluve	a relatively undissected upland between adjacent stream valleys
        {
            name: "interfluve",
            value: "INTF",
        },
        // T.ISL	island	a tract of land, smaller than a continent, surrounded by water at high water
        {
            name: "island",
            value: "ISL",
        },
        // T.ISLET	islet	small island, bigger than rock, smaller than island.
        {
            name: "islet",
            value: "ISLET",
        },
        // T.ISLF	artificial island	an island created by landfill or diking and filling in a wetland, bay, or lagoon
        {
            name: "artificial island",
            value: "ISLF",
        },
        // T.ISLM	mangrove island	a mangrove swamp surrounded by a waterbody
        {
            name: "mangrove island",
            value: "ISLM",
        },
        // T.ISLS	islands	tracts of land, smaller than a continent, surrounded by water at high water
        {
            name: "islands",
            value: "ISLS",
        },
        // T.ISLT	land-tied island	a coastal island connected to the mainland by barrier beaches, levees or dikes
        {
            name: "land-tied island",
            value: "ISLT",
        },
        // // T.ISLX	section of island	
        // {
        //     name: "section of island",
        //     value: "ISLX",
        // },
        // T.ISTH	isthmus	a narrow strip of land connecting two larger land masses and bordered by water
        {
            name: "isthmus",
            value: "ISTH",
        },
        // T.KRST	karst area	a distinctive landscape developed on soluble rock such as limestone characterized by sinkholes, caves, disappearing streams, and underground drainage
        {
            name: "karst",
            value: "KRST",
        },
        // T.LAVA	lava area	an area of solidified lava
        {
            name: "lava",
            value: "LAVA",
        },
        // // T.LEV	levee	a natural low embankment bordering a distributary or meandering stream; often built up artificially to control floods
        // {
        //     name: "levee",
        //     value: "LEV",
        // },
        // T.MESA	mesa(s)	a flat-topped, isolated elevation with steep slopes on all sides, less extensive than a plateau
        {
            name: "mesa",
            value: "MESA",
        },
        // T.MND	mound(s)	a low, isolated, rounded hill
        {
            name: "mound",
            value: "MND",
        },
        // T.MRN	moraine	a mound, ridge, or other accumulation of glacial till
        {
            name: "moraine",
            value: "MRN",
        },
        // T.MT	mountain	an elevation standing high above the surrounding area with small summit area, steep slopes and local relief of 300m or more
        {
            name: "mountain",
            value: "MT",
        },
        // T.MTS	mountains	a mountain range or a group of mountains or high ridges
        {
            name: "mountains",
            value: "MTS",
        },
        // // T.NKM	meander neck	a narrow strip of land between the two limbs of a meander loop at its narrowest point
        // {
        //     name: "meander neck",
        //     value: "NKM",
        // },
        // T.NTK	nunatak	a rock or mountain peak protruding through glacial ice
        {
            name: "nunatak",
            value: "NTK",
        },
        // T.NTKS	nunataks	rocks or mountain peaks protruding through glacial ice
        {
            name: "nunataks",
            value: "NTKS",
        },
        // T.PAN	pan	a near-level shallow, natural depression or basin, usually containing an intermittent lake, pond, or pool
        {
            name: "pan",
            value: "PAN",
        },
        // T.PANS	pans	a near-level shallow, natural depression or basin, usually containing an intermittent lake, pond, or pool
        {
            name: "pans",
            value: "PANS",
        },
        // T.PASS	pass	a break in a mountain range or other high obstruction, used for transportation from one side to the other [See also gap]
        {
            name: "pass",
            value: "PASS",
        },
        // T.PEN	peninsula	an elongate area of land projecting into a body of water and nearly surrounded by water
        {
            name: "peninsula",
            value: "PEN",
        },
        // // T.PENX	section of peninsula	
        // {
        //     name: "section of peninsula",
        //     value: "PENX",
        // },
        // T.PK	peak	a pointed elevation atop a mountain, ridge, or other hypsographic feature
        {
            name: "peak",
            value: "PK",
        },
        // T.PKS	peaks	pointed elevations atop a mountain, ridge, or other hypsographic features
        {
            name: "peaks",
            value: "PKS",
        },
        // T.PLAT	plateau	an elevated plain with steep slopes on one or more sides, and often with incised streams
        {
            name: "plateau",
            value: "PLAT",
        },
        // // T.PLATX	section of plateau	
        // {
        //     name: "section of plateau",
        //     value: "PLATX",
        // },
        // T.PLDR	polder	an area reclaimed from the sea by diking and draining
        {
            name: "polder",
            value: "PLDR",
        },
        // T.PLN	plain(s)	an extensive area of comparatively level to gently undulating land, lacking surface irregularities, and usually adjacent to a higher area
        {
            name: "plains",
            value: "PLN",
        },
        // // T.PLNX	section of plain	
        // {
        //     name: "section of plain",
        //     value: "PLNX",
        // },
        // T.PROM	promontory(-ies)	a bluff or prominent hill overlooking or projecting into a lowland
        {
            name: "promontory",
            value: "PROM",
        },
        // T.PT	point	a tapering piece of land projecting into a body of water, less prominent than a cape
        {
            name: "point",
            value: "PT",
        },
        // T.PTS	points	tapering pieces of land projecting into a body of water, less prominent than a cape
        {
            name: "points",
            value: "PTS",
        },
        // T.RDGB	beach ridge	a ridge of sand just inland and parallel to the beach, usually in series
        {
            name: "beach ridge",
            value: "RDGB",
        },
        // T.RDGE	ridge(s)	a long narrow elevation with steep sides, and a more or less continuous crest
        {
            name: "ridge",
            value: "RDGE",
        },
        // T.REG	stony desert	a desert plain characterized by a surface veneer of gravel and stones
        {
            name: "stony desert",
            value: "REG",
        },
        // T.RK	rock	a conspicuous, isolated rocky mass
        {
            name: "rock",
            value: "RK",
        },
        // T.RKFL	rockfall	an irregular mass of fallen rock at the base of a cliff or steep slope
        {
            name: "rockfall",
            value: "RKFL",
        },
        // T.RKS	rocks	conspicuous, isolated rocky masses
        {
            name: "rocks",
            value: "RKS",
        },
        // T.SAND	sand area	a tract of land covered with sand
        {
            name: "sand",
            value: "SAND",
        },
        // T.SBED	dry stream bed	a channel formerly containing the water of a stream
        {
            name: "dry stream bed",
            value: "SBED",
        },
        // T.SCRP	escarpment	a long line of cliffs or steep slopes separating level surfaces above and below
        {
            name: "escarpment",
            value: "SCRP",
        },
        // T.SDL	saddle	a broad, open pass crossing a ridge or between hills or mountains
        {
            name: "saddle",
            value: "SDL",
        },
        // T.SHOR	shore	a narrow zone bordering a waterbody which covers and uncovers at high and low water, respectively
        {
            name: "shore",
            value: "SHOR",
        },
        // T.SINK	sinkhole	a small crater-shape depression in a karst area
        {
            name: "sinkhole",
            value: "SINK",
        },
        // T.SLID	slide	a mound of earth material, at the base of a slope and the associated scoured area
        {
            name: "slide",
            value: "SLID",
        },
        // T.SLP	slope(s)	a surface with a relatively uniform slope angle
        {
            name: "slope",
            value: "SLP",
        },
        // T.SPIT	spit	a narrow, straight or curved continuation of a beach into a waterbody
        {
            name: "spit",
            value: "SPIT",
        },
        // T.SPUR	spur(s)	a subordinate ridge projecting outward from a hill, mountain or other elevation
        {
            name: "spur",
            value: "SPUR",
        },
        // T.TAL	talus slope	a steep concave slope formed by an accumulation of loose rock fragments at the base of a cliff or steep slope
        {
            name: "talus",
            value: "TAL",
        },
        // T.TRGD	interdune trough(s)	a long wind-swept trough between parallel longitudinal dunes
        {
            name: "interdune trough",
            value: "TRGD",
        },
        // T.TRR	terrace	a long, narrow alluvial platform bounded by steeper slopes above and below, usually overlooking a waterbody
        {
            name: "terrace",
            value: "TRR",
        },
        // T.UPLD	upland	an extensive interior region of high land with low to moderate surface relief
        {
            name: "upland",
            value: "UPLD",
        },
        // T.VAL	valley	an elongated depression usually traversed by a stream
        {
            name: "valley",
            value: "VAL",
        },
        // T.VALG	hanging valley	a valley the floor of which is notably higher than the valley or shore to which it leads; most common in areas that have been glaciated
        {
            name: "hanging valley",
            value: "VALG",
        },
        // T.VALS	valleys	elongated depressions usually traversed by a stream
        {
            name: "valleys",
            value: "VALS",
        },
        // // T.VALX	section of valley	
        // {
        //     name: "section of valley",
        //     value: "VALX",
        // },
        // T.VLC	volcano	a conical elevation composed of volcanic materials with a crater at the top
        {
            name: "volcano",
            value: "VLC",
        },
        // =====================================================
        // =====================================================
        // U. UNDERSEA
        // =====================================================
        // =====================================================
        {
            name: "",
            value: "",
        },
        {
            name: "&dHar; UNDERWATER",
            value: "",
        },
        {
            name: "",
            value: "",
        },
        // // U.APNU	apron	a gentle slope, with a generally smooth surface, particularly found around groups of islands and seamounts
        // {
        //     name: "apron",
        //     value: "APNU",
        // },
        // // U.ARCU	arch	a low bulge around the southeastern end of the island of Hawaii
        // {
        //     name: "arch",
        //     value: "ARCU",
        // },
        // // U.ARRU	arrugado	an area of subdued corrugations off Baja California
        // {
        //     name: "arrugado",
        //     value: "ARRU",
        // },
        // // U.BDLU	borderland	a region adjacent to a continent, normally occupied by or bordering a shelf, that is highly irregular with depths well in excess of those typical of a shelf
        // {
        //     name: "underwater borderland",
        //     value: "BDLU",
        // },
        // U.BKSU	banks	elevations, typically located on a shelf, over which the depth of water is relatively shallow but sufficient for safe surface navigation
        {
            name: "underwater banks",
            value: "BKSU",
        },
        // U.BNKU	bank	an elevation, typically located on a shelf, over which the depth of water is relatively shallow but sufficient for safe surface navigation
        {
            name: "underwater bank",
            value: "BNKU",
        },
        // // U.BSNU	basin	a depression more or less equidimensional in plan and of variable extent
        // {
        //     name: "underwater basin",
        //     value: "BSNU",
        // },
        // U.CDAU	cordillera	an entire mountain system including the subordinate ranges, interior plateaus, and basins
        {
            name: "underwater cordillera",
            value: "CDAU",
        },
        // // U.CNSU	canyons	relatively narrow, deep depressions with steep sides, the bottom of which generally has a continuous slope
        // {
        //     name: "underwater canyons",
        //     value: "CNSU",
        // },
        // // U.CNYU	canyon	a relatively narrow, deep depression with steep sides, the bottom of which generally has a continuous slope
        // {
        //     name: "underwater canyon",
        //     value: "CNYU",
        // },
        // // U.CRSU	continental rise	a gentle slope rising from oceanic depths towards the foot of a continental slope
        // {
        //     name: "continental rise",
        //     value: "CRSU",
        // },
        // U.DEPU	deep	a localized deep area within the confines of a larger feature, such as a trough, basin or trench
        {
            name: "deep",
            value: "DEPU",
        },
        // U.EDGU	shelf edge	a line along which there is a marked increase of slope at the outer margin of a continental shelf or island shelf
        {
            name: "underwater shelf",
            value: "EDGU",
        },
        // // U.ESCU	escarpment (or scarp)	an elongated and comparatively steep slope separating flat or gently sloping areas
        // {
        //     name: "underwater escarpment",
        //     value: "ESCU",
        // },
        // // U.FANU	fan	a relatively smooth feature normally sloping away from the lower termination of a canyon or canyon system
        // {
        //     name: "underwater fan",
        //     value: "FANU",
        // },
        // U.FLTU	flat	a small level or nearly level area
        {
            name: "underwater flat",
            value: "FLTU",
        },
        // U.FRZU	fracture zone	an extensive linear zone of irregular topography of the sea floor, characterized by steep-sided or asymmetrical ridges, troughs, or escarpments
        {
            name: "fracture zone",
            value: "FRZU",
        },
        // // U.FURU	furrow	a closed, linear, narrow, shallow depression
        // {
        //     name: "underwater furrow",
        //     value: "FURU",
        // },
        // U.GAPU	gap	a narrow break in a ridge or rise
        {
            name: "underwater gap",
            value: "GAPU",
        },
        // // U.GLYU	gully	a small valley-like feature
        // {
        //     name: "underwater gully",
        //     value: "GLYU",
        // },
        // U.HLLU	hill	an elevation rising generally less than 500 meters
        {
            name: "underwater hill",
            value: "HLLU",
        },
        // U.HLSU	hills	elevations rising generally less than 500 meters
        {
            name: "underwater hills",
            value: "HLSU",
        },
        // U.HOLU	hole	a small depression of the sea floor
        {
            name: "underwater hole",
            value: "HOLU",
        },
        // U.KNLU	knoll	an elevation rising generally more than 500 meters and less than 1,000 meters and of limited extent across the summit
        {
            name: "underwater knoll",
            value: "KNLU",
        },
        // U.KNSU	knolls	elevations rising generally more than 500 meters and less than 1,000 meters and of limited extent across the summits
        {
            name: "underwater knolls",
            value: "KNSU",
        },
        // U.LDGU	ledge	a rocky projection or outcrop, commonly linear and near shore
        {
            name: "underwater ledge",
            value: "LDGU",
        },
        // // U.LEVU	levee	an embankment bordering a canyon, valley, or seachannel
        // {
        //     name: "underwater levee",
        //     value: "LEVU",
        // },
        // U.MESU	mesa	an isolated, extensive, flat-topped elevation on the shelf, with relatively steep sides
        {
            name: "underwater mesa",
            value: "MESU",
        },
        // U.MNDU	mound	a low, isolated, rounded hill
        {
            name: "underwater mound",
            value: "MNDU",
        },
        // U.MOTU	moat	an annular depression that may not be continuous, located at the base of many seamounts, islands, and other isolated elevations
        {
            name: "underwater moat",
            value: "MOTU",
        },
        // U.MTU	mountain	a well-delineated subdivision of a large and complex positive feature
        {
            name: "underwater mountain",
            value: "MTU",
        },
        // U.PKSU	peaks	prominent elevations, part of a larger feature, either pointed or of very limited extent across the summit
        {
            name: "underwater peaks",
            value: "PKSU",
        },
        // U.PKU	peak	a prominent elevation, part of a larger feature, either pointed or of very limited extent across the summit
        {
            name: "underwater peak",
            value: "PKU",
        },
        // // U.PLNU	plain	a flat, gently sloping or nearly level region
        // {
        //     name: "underwater plain",
        //     value: "PLNU",
        // },
        // U.PLTU	plateau	a comparatively flat-topped feature of considerable extent, dropping off abruptly on one or more sides
        {
            name: "underwater plateau",
            value: "PLTU",
        },
        // U.PNLU	pinnacle	a high tower or spire-shaped pillar of rock or coral, alone or cresting a summit
        {
            name: "underwater pinncale",
            value: "PNLU",
        },
        // // U.PRVU	province	a region identifiable by a group of similar physiographic features whose characteristics are markedly in contrast with surrounding areas
        // {
        //     name: "underwater province",
        //     value: "PRVU",
        // },
        // U.RDGU	ridge	a long narrow elevation with steep sides
        {
            name: "underwater ridge",
            value: "RDGU",
        },
        // U.RDSU	ridges	long narrow elevations with steep sides
        {
            name: "underwater ridges",
            value: "RDSU",
        },
        // U.RFSU	reefs	surface-navigation hazards composed of consolidated material
        {
            name: "reefs",
            value: "RFSU",
        },
        // U.RFU	reef	a surface-navigation hazard composed of consolidated material
        {
            name: "reef",
            value: "RFU",
        },
        // // U.RISU	rise	a broad elevation that rises gently, and generally smoothly, from the sea floor
        // {
        //     name: "underwater rise",
        //     value: "RISE",
        // },
        // // U.SCNU	seachannel	a continuously sloping, elongated depression commonly found in fans or plains and customarily bordered by levees on one or two sides
        // {
        //     name: "seachannel",
        //     value: "SCNU",
        // },
        // // U.SCSU	seachannels	continuously sloping, elongated depressions commonly found in fans or plains and customarily bordered by levees on one or two sides
        // {
        //     name: "seachannels",
        //     value: "SCSU",
        // },
        // // U.SDLU	saddle	a low part, resembling in shape a saddle, in a ridge or between contiguous seamounts
        // {
        //     name: "underwater saddle",
        //     value: "SDLU",
        // }, 
        // U.SHFU	shelf	a zone adjacent to a continent (or around an island) that extends from the low water line to a depth at which there is usually a marked increase of slope towards oceanic depths
        {
            name: "underwater shelf",
            value: "SHFU",
        },
        // U.SHLU	shoal	a surface-navigation hazard composed of unconsolidated material
        {
            name: "shoal",
            value: "SHLU",
        },
        // U.SHSU	shoals	hazards to surface navigation composed of unconsolidated material
        {
            name: "shoals",
            value: "SHSU",
        },
        // U.SHVU	shelf valley	a valley on the shelf, generally the shoreward extension of a canyon
        {
            name: "underwater shelf valley",
            value: "SHVU",
        },
        // // U.SILU	sill	the low part of a gap or saddle separating basins
        // {
        //     name: "sill",
        //     value: "SILU",
        // },
        // // U.SLPU	slope	the slope seaward from the shelf edge to the beginning of a continental rise or the point where there is a general reduction in slope
        // {
        //     name: "underwater slope",
        //     value: "SLPU",
        // },
        // U.SMSU	seamounts	elevations rising generally more than 1,000 meters and of limited extent across the summit
        {
            name: "seamounts",
            value: "SMSU",
        }, // U.SMU	seamount	an elevation rising generally more than 1,000 meters and of limited extent across the summit
        {
            name: "seamount",
            value: "SMU",
        },
        // // U.SPRU	spur	a subordinate elevation, ridge, or rise projecting outward from a larger feature
        // {
        //     name: "underwater spur",
        //     value: "SPRU",
        // },
        // // U.TERU	terrace	a relatively flat horizontal or gently inclined surface, sometimes long and narrow, which is bounded by a steeper ascending slope on one side and by a steep descending slope on the opposite side
        // {
        //     name: "underwater terrace",
        //     value: "TERU",
        // },
        // U.TMSU	tablemounts (or guyots)	seamounts having a comparatively smooth, flat top
        {
            name: "tablemounts (guyots)",
            value: "TMSU",
        },
        // U.TMTU	tablemount (or guyot)	a seamount having a comparatively smooth, flat top
        {
            name: "tablemount (guyot)",
            value: "TMTU",
        }, 
        // U.TNGU	tongue	an elongate (tongue-like) extension of a flat sea floor into an adjacent higher feature
        // {
        //     name: "underwater tounge",
        //     value: "TNGU",
        // },
        // // U.TRGU	trough	a long depression of the sea floor characteristically flat bottomed and steep sided, and normally shallower than a trench
        // {
        //     name: "underwater trough",
        //     value: "TRGU",
        // }, 
        // U.TRNU	trench	a long, narrow, characteristically very deep and asymmetrical depression of the sea floor, with relatively steep sides
        {
            name: "underwater trench",
            value: "TRNU",
        },
        // U.VALU	valley	a relatively shallow, wide depression, the bottom of which usually has a continuous gradient
        {
            name: "underwater valley",
            value: "VALU",
        },
        // U.VLSU	valleys	a relatively shallow, wide depression, the bottom of which usually has a continuous gradient
        {
            name: "underwater valleys",
            value: "VLSU",
        },
        // =====================================================
        // =====================================================
        // V. FOREST, HEATH, ...
        // =====================================================
        // =====================================================
        {
            name: "",
            value: "",
        },
        {
            name: "&dHar; FOREST + HEATH",
            value: "",
        },
        {
            name: "",
            value: "",
        },
        // V.BUSH	bush(es)	a small clump of conspicuous bushes in an otherwise bare area
        {
            name: "bushes",
            value: "BUSH",
        },
        // V.CULT	cultivated area	an area under cultivation
        {
            name: "cultivated",
            value: "CULT",
        },
        // V.FRST	forest(s)	an area dominated by tree vegetation
        {
            name: "forests",
            value: "FRST",
        },
        // V.FRSTF	fossilized forest	a forest fossilized by geologic processes and now exposed at the earth's surface
        {
            name: "fossilized forest",
            value: "FRSTF",
        },
        // V.GROVE	grove	a small wooded area or collection of trees growing closely together, occurring naturally or deliberately planted
        {
            name: "grove",
            value: "GROVE",
        },
        // V.GRSLD	grassland	an area dominated by grass vegetation
        {
            name: "grassland",
            value: "GRSLD",
        },
        // V.GRVC	coconut grove	a planting of coconut trees
        {
            name: "coconut grove",
            value: "GRVC",
        },
        // V.GRVO	olive grove	a planting of olive trees
        {
            name: "olive grove",
            value: "GRVO",
        },
        // V.GRVP	palm grove	a planting of palm trees
        {
            name: "palm grove",
            value: "GRVP",
        },
        // V.GRVPN	pine grove	a planting of pine trees
        {
            name: "pine grove",
            value: "GRVPN",
        },
        // V.HTH	heath	an upland moor or sandy area dominated by low shrubby vegetation including heather
        {
            name: "heath",
            value: "HTH",
        },
        // V.MDW	meadow	a small, poorly drained area dominated by grassy vegetation
        {
            name: "meadow",
            value: "MDW",
        },
        // V.OCH	orchard(s)	a planting of fruit or nut trees
        {
            name: "orchards",
            value: "OCH",
        },
        // V.SCRB	scrubland	an area of low trees, bushes, and shrubs stunted by some environmental limitation
        {
            name: "scrubland",
            value: "SCRB",
        },
        // V.TREE	tree(s)	a conspicuous tree used as a landmark
        {
            name: "trees",
            value: "TREE",
        },
        // V.TUND	tundra	a marshy, treeless, high latitude plain, dominated by mosses, lichens, and low shrub vegetation under permafrost conditions
        {
            name: "tundra",
            value: "TUND",
        },
        // V.VIN	vineyard	a planting of grapevines
        {
            name: "vineyard",
            value: "VIN",
        },
        // V.VINS	vineyards	plantings of grapevines
        {
            name: "vineyards",
            value: "VINS",
        },
    ];


    // =========================================================
    // Code that auto-populates the dropdown from the above Array of feature names
    // =========================================================


    for (let s = 0; s < featureArray.length; s++) {

        var featureTypeValue = featureArray[s].value;
        var featureTypeName = featureArray[s].name;

        $("#feature_options").append("<option value='" + featureTypeValue + "'>" + featureTypeName + "</option>");

    }


    // END jQUERY FUNCTION
});
// ==============================