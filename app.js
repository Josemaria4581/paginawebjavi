// ============================
// DATA - Pre-loaded Animals
// ============================

const INITIAL_VACAS = [
    // Blonde aquitani - Hembras
    { crotalCompleto: "ES081009960180", crotal: "180", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-01-21" },
    { crotalCompleto: "ES091009960181", crotal: "181", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-01-22" },
    { crotalCompleto: "ES021009960184", crotal: "184", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-01-26" },
    { crotalCompleto: "ES001009960193", crotal: "193", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-02-24" },
    { crotalCompleto: "ES041009960197", crotal: "197", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-03-07" },
    { crotalCompleto: "ES061009960199", crotal: "199", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-03-06" },
    { crotalCompleto: "ES091009960205", crotal: "205", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-03-07" },
    { crotalCompleto: "ES001009960206", crotal: "206", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-03-16" },
    { crotalCompleto: "ES011009960207", crotal: "207", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-03-16" },
    { crotalCompleto: "ES051009960212", crotal: "212", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-03-21" },
    { crotalCompleto: "ES041010393442", crotal: "3442", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-04-06" },
    { crotalCompleto: "ES021010393451", crotal: "3451", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-05-04" },
    { crotalCompleto: "ES061010393466", crotal: "3466", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-05-25" },
    { crotalCompleto: "ES021010393484", crotal: "3484", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-10-01" },
    { crotalCompleto: "ES041010393522", crotal: "3522", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2022-01-20" },
    { crotalCompleto: "ES071010393525", crotal: "3525", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2022-01-31" },
    { crotalCompleto: "ES021010393531", crotal: "3531", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2022-01-31" },
    { crotalCompleto: "ES001010393551", crotal: "3551", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2021-05-03" },
    { crotalCompleto: "ES051011364951", crotal: "4951", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2024-08-14" },
    { crotalCompleto: "ES061011364952", crotal: "4952", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2024-08-14" },
    { crotalCompleto: "ES071011364953", crotal: "4953", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2024-08-14" },
    { crotalCompleto: "ES091011364955", crotal: "4955", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2024-08-26" },
    { crotalCompleto: "ES021011364958", crotal: "4958", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2024-08-26" },
    { crotalCompleto: "ES031011364959", crotal: "4959", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2024-08-26" },
    { crotalCompleto: "ES081011364965", crotal: "4965", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2024-08-26" },
    { crotalCompleto: "ES091011364966", crotal: "4966", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2024-08-26" },
    { crotalCompleto: "ES011011364968", crotal: "4968", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2024-09-16" },
    { crotalCompleto: "ES061011364974", crotal: "4974", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2025-02-17" },
    { crotalCompleto: "ES001011364990", crotal: "4990", raza: "Blonde aquitani", sexo: "Hembra", fechaNacimiento: "2025-02-19" },
    // Blonde aquitani - Macho
    { crotalCompleto: "ES061011340269", crotal: "269", raza: "Blonde aquitani", sexo: "Macho", fechaNacimiento: "2023-10-23" },
    // Cruzada
    { crotalCompleto: "ES001011365108", crotal: "5108", raza: "Cruzada", sexo: "Hembra", fechaNacimiento: "2025-04-01" },
    { crotalCompleto: "ES011011365109", crotal: "5109", raza: "Cruzada", sexo: "Hembra", fechaNacimiento: "2025-05-16" },
    // Limousine - Hembras
    { crotalCompleto: "ES041009960142", crotal: "142", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2020-12-01" },
    { crotalCompleto: "ES071009960189", crotal: "189", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2021-02-20" },
    { crotalCompleto: "ES091008542387", crotal: "2387", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2016-11-17" },
    { crotalCompleto: "ES041008542439", crotal: "2439", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-04-17" },
    { crotalCompleto: "ES021008542482", crotal: "2482", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-10-03" },
    { crotalCompleto: "ES081008542499", crotal: "2499", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-10-31" },
    { crotalCompleto: "ES021008962560", crotal: "2560", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-11-25" },
    { crotalCompleto: "ES041008962562", crotal: "2562", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-12-06" },
    { crotalCompleto: "ES031008962572", crotal: "2572", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-12-29" },
    { crotalCompleto: "ES081008962588", crotal: "2588", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2018-09-02" },
    { crotalCompleto: "ES091008962590", crotal: "2590", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2018-09-01" },
    { crotalCompleto: "ES071010393445", crotal: "3445", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2021-04-20" },
    { crotalCompleto: "ES031010393452", crotal: "3452", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2021-05-04" },
    { crotalCompleto: "ES081010393468", crotal: "3468", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2021-05-25" },
    { crotalCompleto: "ES081010393491", crotal: "3491", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2021-11-24" },
    { crotalCompleto: "ES061009474576", crotal: "4576", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2019-12-18" },
    { crotalCompleto: "ES081009474590", crotal: "4590", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2020-01-18" },
    { crotalCompleto: "ES001009474592", crotal: "4592", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2020-01-20" },
    { crotalCompleto: "ES031009474595", crotal: "4595", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2020-01-22" },
    { crotalCompleto: "ES091009474615", crotal: "4615", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2020-03-03" },
    { crotalCompleto: "ES081009474625", crotal: "4625", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2020-04-15" },
    { crotalCompleto: "ES001009474627", crotal: "4627", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2020-05-05" },
    { crotalCompleto: "ES011009474720", crotal: "4720", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2019-03-18" },
    { crotalCompleto: "ES011010804725", crotal: "4725", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2023-02-18" },
    { crotalCompleto: "ES041010804728", crotal: "4728", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2023-02-24" },
    { crotalCompleto: "ES031009474733", crotal: "4733", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2019-03-24", notas: "Crotal antiguo" },
    { crotalCompleto: "ES081010804733", crotal: "4733-B", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2023-03-08", notas: "Segundo animal con crotal 4733" },
    { crotalCompleto: "ES081009474738", crotal: "4738", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2019-03-30" },
    { crotalCompleto: "ES091009474740", crotal: "4740", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2019-03-25" },
    { crotalCompleto: "ES081011364910", crotal: "4910", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2023-12-12" },
    { crotalCompleto: "ES011011364913", crotal: "4913", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2023-12-13" },
    { crotalCompleto: "ES061011364918", crotal: "4918", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-01-23" },
    { crotalCompleto: "ES071011364920", crotal: "4920", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-01-23" },
    { crotalCompleto: "ES081011364921", crotal: "4921", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-01-23" },
    { crotalCompleto: "ES091011364933", crotal: "4933", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-03-05" },
    { crotalCompleto: "ES031011364937", crotal: "4937", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-08-12" },
    { crotalCompleto: "ES041011364938", crotal: "4938", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-08-12" },
    { crotalCompleto: "ES051011364940", crotal: "4940", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-08-12" },
    { crotalCompleto: "ES081011364943", crotal: "4943", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-08-13" },
    { crotalCompleto: "ES011011364946", crotal: "4946", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-08-13" },
    { crotalCompleto: "ES021011364947", crotal: "4947", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-08-14" },
    { crotalCompleto: "ES041011364950", crotal: "4950", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-08-14" },
    { crotalCompleto: "ES031011364960", crotal: "4960", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-08-26" },
    { crotalCompleto: "ES051011364962", crotal: "4962", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-08-26" },
    { crotalCompleto: "ES061011364963", crotal: "4963", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-08-26" },
    { crotalCompleto: "ES001011364967", crotal: "4967", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-09-16" },
    { crotalCompleto: "ES041011364972", crotal: "4972", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-10-07" },
    { crotalCompleto: "ES051011364973", crotal: "4973", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-10-07" },
    { crotalCompleto: "ES011011364979", crotal: "4979", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-02-17" },
    { crotalCompleto: "ES051011364984", crotal: "4984", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-02-18" },
    { crotalCompleto: "ES001011364989", crotal: "4989", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-02-19" },
    { crotalCompleto: "ES081011364998", crotal: "4998", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-02-19" },
    { crotalCompleto: "ES041011365000", crotal: "5000", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-02-20" },
    { crotalCompleto: "ES051011365001", crotal: "5001", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-02-20" },
    { crotalCompleto: "ES001011365006", crotal: "5006", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-03-04" },
    { crotalCompleto: "ES061008356119", crotal: "6119", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2016-10-16" },
    { crotalCompleto: "ES001008356124", crotal: "6124", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2016-10-28" },
    { crotalCompleto: "ES021010546427", crotal: "6427", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2023-07-20" },
    { crotalCompleto: "ES061010546432", crotal: "6432", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2023-08-02" },
    { crotalCompleto: "ES081010546434", crotal: "6434", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2023-08-06" },
    { crotalCompleto: "ES001010546436", crotal: "6436", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2023-08-10" },
    { crotalCompleto: "ES051010546453", crotal: "6453", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2023-11-11" },
    { crotalCompleto: "ES001010546458", crotal: "6458", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2023-11-12" },
    { crotalCompleto: "ES091010546468", crotal: "6468", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2023-12-01" },
    { crotalCompleto: "ES091009786789", crotal: "6789", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2020-03-07" },
    { crotalCompleto: "ES081009786813", crotal: "6813", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2020-03-15", estado: "baja", notas: "BAJA" },
    { crotalCompleto: "FR2424567018", crotal: "7018", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-01-05" },
    { crotalCompleto: "FR2424567026", crotal: "7026", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-01-15" },
    { crotalCompleto: "FR2424567067", crotal: "7067", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-09-21" },
    { crotalCompleto: "FR2424567069", crotal: "7069", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-09-23" },
    { crotalCompleto: "FR2424567100", crotal: "7100", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-10-21" },
    { crotalCompleto: "FR2424567109", crotal: "7109", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-11-09" },
    { crotalCompleto: "FR2424677353", crotal: "7353", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-11-16" },
    { crotalCompleto: "FR2424677357", crotal: "7357", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-12-01" },
    { crotalCompleto: "ES071011767372", crotal: "7372", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-12-21" },
    { crotalCompleto: "ES081011767373", crotal: "7373", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-12-22" },
    { crotalCompleto: "ES041011767379", crotal: "7379", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2024-12-24" },
    { crotalCompleto: "ES061011767382", crotal: "7382", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-01-04" },
    { crotalCompleto: "ES031011767389", crotal: "7389", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-01-10" },
    { crotalCompleto: "ES041011767391", crotal: "7391", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-01-24" },
    { crotalCompleto: "ES051011767392", crotal: "7392", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-01-25" },
    { crotalCompleto: "ES091011767396", crotal: "7396", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-02-12" },
    { crotalCompleto: "ES041011767404", crotal: "7404", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-03-14" },
    { crotalCompleto: "ES061011767406", crotal: "7406", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-03-14" },
    { crotalCompleto: "ES081011767408", crotal: "7408", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-03-15" },
    { crotalCompleto: "ES001011767411", crotal: "7411", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2025-03-16" },
    { crotalCompleto: "ES021008578302", crotal: "8302", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-01-31" },
    { crotalCompleto: "ES011008578312", crotal: "8312", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-09-03" },
    { crotalCompleto: "ES071008578352", crotal: "8352", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-10-04" },
    { crotalCompleto: "ES041008578360", crotal: "8360", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2017-10-03" },
    { crotalCompleto: "ES081009118640", crotal: "8640", raza: "Limousine", sexo: "Hembra", fechaNacimiento: "2018-11-18" },
    // Limousine - Machos
    { crotalCompleto: "ES071009960203", crotal: "203", raza: "Limousine", sexo: "Macho", fechaNacimiento: "2021-03-07" },
    { crotalCompleto: "ES030605483999", crotal: "3999", raza: "Limousine", sexo: "Macho", fechaNacimiento: "2023-02-19" },
    { crotalCompleto: "ES080605685127", crotal: "5127", raza: "Limousine", sexo: "Macho", fechaNacimiento: "2024-09-20" },
    { crotalCompleto: "ES021010585646", crotal: "5646", raza: "Limousine", sexo: "Macho", fechaNacimiento: "2022-11-24" },
    { crotalCompleto: "ES051010585649", crotal: "5649", raza: "Limousine", sexo: "Macho", fechaNacimiento: "2022-11-25" },
    { crotalCompleto: "ES021011767377", crotal: "7377", raza: "Limousine", sexo: "Macho", fechaNacimiento: "2024-12-23" },
];

const INITIAL_BECERROS = [
    { crotal: "2896", fechaNacimiento: "2025-08-24", sexo: "Hembra", madreCrotal: "8312" },
    { crotal: "2897", fechaNacimiento: "2025-08-18", sexo: "Macho", madreCrotal: "6119" },
    { crotal: "2898", fechaNacimiento: "2025-08-24", sexo: "Hembra", madreCrotal: "206" },
    { crotal: "2899", fechaNacimiento: "2025-08-25", sexo: "Hembra", madreCrotal: "2439" },
    { crotal: "2900", fechaNacimiento: "2025-08-26", sexo: "Macho", madreCrotal: "3445" },
    { crotal: "2901", fechaNacimiento: "2025-08-27", sexo: "Hembra", madreCrotal: "199" },
    { crotal: "2902", fechaNacimiento: "2025-08-27", sexo: "Hembra", madreCrotal: "189" },
    { crotal: "2903", fechaNacimiento: "2025-08-29", sexo: "Macho", madreCrotal: "197" },
    { crotal: "2904", fechaNacimiento: "2025-08-29", sexo: "Macho", madreCrotal: "3452" },
    { crotal: "2906", fechaNacimiento: "2025-08-29", sexo: "Macho", madreCrotal: "2590" },
    { crotal: "2907", fechaNacimiento: "2025-08-31", sexo: "Hembra", madreCrotal: "3551" },
    { crotal: "2908", fechaNacimiento: "2025-09-02", sexo: "Macho", madreCrotal: "184" },
    { crotal: "2909", fechaNacimiento: "2025-09-05", sexo: "Macho", madreCrotal: "3491" },
    { crotal: "2910", fechaNacimiento: "2025-09-10", sexo: "Hembra", madreCrotal: "3531" },
    { crotal: "2911", fechaNacimiento: "2025-09-17", sexo: "Macho", madreCrotal: "3451" },
    { crotal: "2912", fechaNacimiento: "2025-09-23", sexo: "Hembra", madreCrotal: "3484" },
    { crotal: "2913", fechaNacimiento: "2025-09-24", sexo: "Macho", madreCrotal: "212" },
    { crotal: "2914", fechaNacimiento: "2025-09-25", sexo: "Hembra", madreCrotal: "4733" },
    { crotal: "2915", fechaNacimiento: "2025-09-26", sexo: "Hembra", madreCrotal: "205" },
    { crotal: "2917", fechaNacimiento: "2025-10-05", sexo: "Hembra", madreCrotal: "142" },
    { crotal: "2919", fechaNacimiento: "2025-10-16", sexo: "Hembra", madreCrotal: "2499" },
    { crotal: "2920", fechaNacimiento: "2025-10-17", sexo: "Macho", madreCrotal: "3522" },
    { crotal: "2922", fechaNacimiento: "2025-11-04", sexo: "Hembra", madreCrotal: "3466" },
    { crotal: "7026", fechaNacimiento: "2025-11-24", sexo: "Macho", madreCrotal: "7026", notas: "Mismo crotal que madre" },
    { crotal: "2925", fechaNacimiento: "2026-01-07", sexo: "Macho", madreCrotal: "4592", notas: "L" },
    { crotal: "2927", fechaNacimiento: "2026-01-18", sexo: "Hembra", madreCrotal: "4615" },
    { crotal: "2931", fechaNacimiento: "2026-01-21", sexo: "Hembra", madreCrotal: "7357", notas: "L" },
    { crotal: "2932", fechaNacimiento: "2026-01-27", sexo: "Macho", madreCrotal: "8626", notas: "Vaca muerta 8626, adopta la 7067. L" },
    { crotal: "2933", fechaNacimiento: "2026-01-29", sexo: "Hembra", madreCrotal: "6789", notas: "L" },
    { crotal: "2934", fechaNacimiento: "2026-02-03", sexo: "Hembra", madreCrotal: "207", notas: "B" },
    { crotal: "2935", fechaNacimiento: "2026-02-03", sexo: "Macho", madreCrotal: "7069", notas: "L" },
    { crotal: "2936", fechaNacimiento: "2026-02-06", sexo: "Macho", madreCrotal: "8360", notas: "L" },
    { crotal: "2937", fechaNacimiento: "2026-02-08", sexo: "Hembra", madreCrotal: "4720", notas: "L" },
    { crotal: "2938", fechaNacimiento: "2026-02-10", sexo: "Hembra", madreCrotal: "8640", notas: "L" },
    { crotal: "2939", fechaNacimiento: "2026-02-18", sexo: "Hembra", madreCrotal: "2560", notas: "L" },
    { crotal: "2940", fechaNacimiento: "2026-02-19", sexo: "Macho", madreCrotal: "8352", notas: "Sin padre (sp). L" },
    { crotal: "2941", fechaNacimiento: "2026-02-19", sexo: "Macho", madreCrotal: "4576", notas: "Sin padre (sp). L" },
    { crotal: "2943", fechaNacimiento: "2026-02-22", sexo: "Hembra", madreCrotal: "4738", notas: "L" },
    { crotal: "2944", fechaNacimiento: "2026-02-28", sexo: "Hembra", madreCrotal: "180", notas: "B" },
];


// ============================
// SUPABASE CONFIGURATION
// ============================
const SUPABASE_URL = 'https://sodwczwkikeggnzovrip.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvZHdjendraWtlZ2duem92cmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1MzQxMDYsImV4cCI6MjA4ODExMDEwNn0.r63qMCBX2RdbJETPanmClDVQi2wr0GC1zO3_BBShIlU';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function toDbRow(a) {
    return {
        crotal_completo: a.crotalCompleto || '', crotal: a.crotal,
        raza: a.raza || '', sexo: a.sexo, fecha_nacimiento: a.fechaNacimiento,
        tipo: a.tipo, madre_crotal: a.madreCrotal || '',
        notas: a.notas || '', estado: a.estado || 'activa'
    };
}

function fromDbRow(r) {
    return {
        id: r.id, crotalCompleto: r.crotal_completo || '', crotal: r.crotal,
        raza: r.raza || '', sexo: r.sexo, fechaNacimiento: r.fecha_nacimiento,
        tipo: r.tipo, madreCrotal: r.madre_crotal || '',
        notas: r.notas || '', estado: r.estado || 'activa'
    };
}

// ============================
// APP STATE
// ============================
let animals = [];
let currentTab = 'vacas';
let sortBy = 'crotal';
let sortDir = 'asc';
let selectedAnimalId = null;
let searchActive = false;

// ============================
// INITIALIZATION
// ============================
document.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    // Hide splash after animation
    setTimeout(() => {
        document.getElementById('splash').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
        renderList();
    }, 2100);
});

async function loadData() {
    try {
        const { data, error } = await supabaseClient.from('animals').select('*');
        if (error) throw error;
        if (data && data.length > 0) {
            animals = data.map(fromDbRow);
        } else {
            await seedInitialData();
        }
    } catch (err) {
        console.error('Error loading data:', err);
        showToast('Error al cargar datos', 'error');
    }
}

async function seedInitialData() {
    const rows = [];
    INITIAL_VACAS.forEach(v => {
        rows.push(toDbRow({
            crotalCompleto: v.crotalCompleto || '', crotal: v.crotal,
            raza: v.raza || '', sexo: v.sexo, fechaNacimiento: v.fechaNacimiento,
            tipo: v.sexo === 'Macho' ? 'toro' : 'vaca',
            madreCrotal: '', notas: v.notas || '', estado: v.estado || 'activa'
        }));
    });
    INITIAL_BECERROS.forEach(b => {
        rows.push(toDbRow({
            crotalCompleto: b.crotalCompleto || '', crotal: b.crotal,
            raza: b.raza || '', sexo: b.sexo, fechaNacimiento: b.fechaNacimiento,
            tipo: 'becerro', madreCrotal: b.madreCrotal || '',
            notas: b.notas || '', estado: b.estado || 'activa'
        }));
    });
    const { data, error } = await supabaseClient.from('animals').insert(rows).select();
    if (error) { console.error('Error seeding:', error); return; }
    animals = data.map(fromDbRow);
}

// ============================
// TAB NAVIGATION
// ============================
function switchTab(tab) {
    currentTab = tab;

    // Update nav active state
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    const mainContent = document.getElementById('mainContent');
    const formContainer = document.getElementById('formContainer');
    const statsPanel = document.getElementById('statsPanel');

    // Close stats if open
    statsPanel.classList.add('hidden');

    if (tab === 'add') {
        mainContent.classList.add('hidden');
        formContainer.classList.remove('hidden');
        resetForm();
        document.getElementById('formTitle').textContent = 'Añadir Animal';
        document.getElementById('submitBtn').textContent = 'Guardar';
    } else {
        mainContent.classList.remove('hidden');
        formContainer.classList.add('hidden');
        renderList();
    }
}

// ============================
// RENDERING
// ============================
function getFilteredAnimals() {
    let filtered = [...animals];

    // Filter by type/tab
    if (currentTab === 'vacas') {
        filtered = filtered.filter(a => a.tipo === 'vaca');
    } else if (currentTab === 'becerros') {
        filtered = filtered.filter(a => a.tipo === 'becerro');
    } else if (currentTab === 'toros') {
        filtered = filtered.filter(a => a.tipo === 'toro');
    }

    // Search filter
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (query) {
        filtered = filtered.filter(a =>
            a.crotal.toLowerCase().includes(query) ||
            (a.crotalCompleto && a.crotalCompleto.toLowerCase().includes(query)) ||
            (a.madreCrotal && a.madreCrotal.toLowerCase().includes(query)) ||
            (a.notas && a.notas.toLowerCase().includes(query))
        );
    }

    // Sort
    const razaOrder = { 'Blonde aquitani': 0, 'Cruzada': 1, 'Limousine': 2 };
    filtered.sort((a, b) => {
        let cmp = 0;
        if (sortBy === 'crotal') {
            // First by breed, then by crotal number
            const ra = razaOrder[a.raza] !== undefined ? razaOrder[a.raza] : 3;
            const rb = razaOrder[b.raza] !== undefined ? razaOrder[b.raza] : 3;
            cmp = ra - rb;
            if (cmp === 0) {
                const na = parseInt(a.crotal) || 0;
                const nb = parseInt(b.crotal) || 0;
                cmp = na - nb;
            }
        } else {
            cmp = a.fechaNacimiento.localeCompare(b.fechaNacimiento);
        }
        return sortDir === 'asc' ? cmp : -cmp;
    });

    return filtered;
}

function renderList() {
    const list = document.getElementById('animalList');
    const count = document.getElementById('animalCount');
    const filtered = getFilteredAnimals();

    const tabNames = { vacas: 'Vacas', becerros: 'Becerros', toros: 'Toros', todos: 'Todos los animales' };
    count.textContent = `${filtered.length} ${tabNames[currentTab] || 'animales'}`;

    if (filtered.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <h3>No se encontraron animales</h3>
                <p>Prueba a cambiar los filtros o añade uno nuevo</p>
            </div>`;
        return;
    }

    list.innerHTML = filtered.map((animal, i) => {
        let icon = '🐄';
        if (animal.tipo === 'becerro') icon = '🐮';
        if (animal.tipo === 'toro') icon = '🐂';

        const sexClass = animal.sexo === 'Hembra' ? 'hembra' : 'macho';
        const sexLabel = animal.sexo === 'Hembra' ? '♀ Hembra' : '♂ Macho';
        const fecha = formatDate(animal.fechaNacimiento);

        let badge = 'Vaca';
        if (animal.tipo === 'becerro') badge = 'Becerro';
        if (animal.tipo === 'toro') badge = 'Toro';
        const bajaClass = animal.estado === 'baja' ? 'baja' : '';

        let details = `<span class="card-detail"><span class="material-icons-round">calendar_today</span>${fecha}</span>`;
        if (animal.raza) {
            details += `<span class="card-detail"><span class="material-icons-round">pets</span>${animal.raza}</span>`;
        }
        if (animal.tipo === 'becerro' && animal.madreCrotal) {
            details += `<span class="card-detail"><span class="material-icons-round">favorite</span>M: ${animal.madreCrotal}</span>`;
        }

        return `
        <div class="animal-card ${sexClass} ${bajaClass}" onclick="showDetail(${animal.id})" style="animation-delay: ${Math.min(i * 30, 500)}ms">
            <div class="card-icon ${animal.tipo}">${icon}</div>
            <div class="card-info">
                <div class="card-crotal">
                    #${animal.crotal}
                    <span class="card-sex ${sexClass}">${sexLabel}</span>
                </div>
                <div class="card-details">${details}</div>
            </div>
            ${currentTab === 'todos' ? `<span class="card-badge ${animal.tipo}">${badge}</span>` : ''}
            <span class="material-icons-round card-arrow">chevron_right</span>
        </div>`;
    }).join('');
}

function formatDate(iso) {
    if (!iso) return '—';
    const parts = iso.split('-');
    if (parts.length !== 3) return iso;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function parseInputDate(str) {
    // dd/mm/yyyy to yyyy-mm-dd
    const parts = str.split('/');
    if (parts.length === 3) return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
    return str;
}

// ============================
// SORTING
// ============================
function changeSortBy(by) {
    sortBy = by;
    document.querySelectorAll('.sort-btn[data-sort]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.sort === by);
    });
    renderList();
}

function toggleSortDir() {
    sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    document.getElementById('sortDirIcon').textContent = sortDir === 'asc' ? 'arrow_upward' : 'arrow_downward';
    renderList();
}

// ============================
// SEARCH
// ============================
function toggleSearch() {
    searchActive = !searchActive;
    const bar = document.getElementById('searchBar');
    const main = document.getElementById('mainContent');
    bar.classList.toggle('hidden', !searchActive);
    main.classList.toggle('search-active', searchActive);
    if (searchActive) {
        document.getElementById('searchInput').focus();
    } else {
        clearSearch();
    }
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    filterAnimals();
    const bar = document.getElementById('searchBar');
    const main = document.getElementById('mainContent');
    searchActive = false;
    bar.classList.add('hidden');
    main.classList.remove('search-active');
}

function filterAnimals() {
    renderList();
}

// ============================
// DROPDOWN MENU
// ============================
function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('hidden');
    if (!menu.classList.contains('hidden')) {
        setTimeout(() => {
            document.addEventListener('click', closeMenuOnOutside, { once: true });
        }, 10);
    }
}

function closeMenuOnOutside(e) {
    const menu = document.getElementById('dropdownMenu');
    if (!menu.contains(e.target) && e.target.id !== 'btnMenu') {
        menu.classList.add('hidden');
    }
}

// ============================
// DETAIL MODAL
// ============================
function showDetail(id) {
    selectedAnimalId = id;
    const animal = animals.find(a => a.id === id);
    if (!animal) return;

    const icon = animal.tipo === 'vaca' ? '🐄' : (animal.tipo === 'toro' ? '🐂' : '🐮');
    document.getElementById('modalTitle').textContent = `${icon} Crotal #${animal.crotal}`;

    const sexClass = animal.sexo === 'Hembra' ? 'hembra' : 'macho';
    let html = '';

    const rows = [
        ['Tipo', animal.tipo === 'vaca' ? 'Vaca Adulta' : (animal.tipo === 'toro' ? 'Toro Semental' : 'Becerro/a')],
        ['Crotal', animal.crotal],
    ];

    if (animal.crotalCompleto) rows.push(['Crotal Completo', animal.crotalCompleto]);
    rows.push(['Sexo', `<span class="${sexClass}">${animal.sexo === 'Hembra' ? '♀ Hembra' : '♂ Macho'}</span>`]);
    rows.push(['Fecha Nacimiento', formatDate(animal.fechaNacimiento)]);
    if (animal.raza) rows.push(['Raza', animal.raza]);
    if (animal.tipo === 'becerro' && animal.madreCrotal) rows.push(['Madre (Crotal)', animal.madreCrotal]);
    rows.push(['Estado', animal.estado === 'baja' ? '❌ Baja' : '✅ Activa']);
    if (animal.notas) rows.push(['Notas', animal.notas]);

    // Calculate age
    const birth = new Date(animal.fechaNacimiento);
    const now = new Date();
    let ageStr = '';
    const diffMs = now - birth;
    if (diffMs > 0) {
        const years = Math.floor(diffMs / (365.25 * 24 * 60 * 60 * 1000));
        const months = Math.floor((diffMs % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
        if (years > 0) ageStr = `${years} año${years > 1 ? 's' : ''} ${months} mes${months !== 1 ? 'es' : ''}`;
        else ageStr = `${months} mes${months !== 1 ? 'es' : ''}`;
    }
    if (ageStr) rows.push(['Edad', ageStr]);

    // If becerro, find mother info
    if (animal.tipo === 'becerro' && animal.madreCrotal) {
        const madre = animals.find(a => a.crotal === animal.madreCrotal && a.tipo === 'vaca');
        if (madre) {
            rows.push(['Raza Madre', madre.raza || '—']);
        }
    }

    // If vaca, find her calves
    if (animal.tipo === 'vaca') {
        const calves = animals.filter(a => a.tipo === 'becerro' && a.madreCrotal === animal.crotal);
        if (calves.length > 0) {
            rows.push(['Becerros', calves.map(c => `#${c.crotal}`).join(', ')]);
        }
    }

    html = rows.map(([label, value]) =>
        `<div class="detail-row">
            <span class="detail-label">${label}</span>
            <span class="detail-value">${value}</span>
        </div>`
    ).join('');

    document.getElementById('modalBody').innerHTML = html;
    document.getElementById('detailModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detailModal').classList.add('hidden');
    selectedAnimalId = null;
}

// ============================
// FORM - ADD / EDIT
// ============================
function onTipoChange() {
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    document.getElementById('madreGroup').classList.toggle('hidden', tipo !== 'becerro');
}

function resetForm() {
    document.getElementById('animalForm').reset();
    document.getElementById('editId').value = '';
    document.getElementById('madreGroup').classList.add('hidden');
    document.getElementById('formTitle').textContent = 'Añadir Animal';
    document.getElementById('submitBtn').textContent = 'Guardar';
}

async function saveAnimal(e) {
    e.preventDefault();
    const editId = document.getElementById('editId').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const crotal = document.getElementById('crotal').value.trim();
    const crotalCompleto = document.getElementById('crotalCompleto').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const raza = document.getElementById('raza').value;
    const madreCrotal = document.getElementById('madreCrotal').value.trim();
    const notas = document.getElementById('notas').value.trim();
    const estado = document.querySelector('input[name="estado"]:checked').value;

    if (!crotal || !fechaNacimiento) {
        showToast('Rellena los campos obligatorios', 'warning');
        return;
    }
    const animalData = {
        crotalCompleto, crotal, raza, sexo, fechaNacimiento, tipo,
        madreCrotal: tipo === 'becerro' ? madreCrotal : '', notas, estado
    };
    try {
        if (editId) {
            const { data, error } = await supabaseClient.from('animals')
                .update(toDbRow(animalData)).eq('id', parseInt(editId)).select();
            if (error) throw error;
            const idx = animals.findIndex(a => a.id === parseInt(editId));
            if (idx !== -1 && data && data.length > 0) animals[idx] = fromDbRow(data[0]);
            showToast('Animal actualizado correctamente');
        } else {
            const { data, error } = await supabaseClient.from('animals')
                .insert([toDbRow(animalData)]).select();
            if (error) throw error;
            if (data && data.length > 0) animals.push(fromDbRow(data[0]));
            showToast('Animal añadido correctamente');
        }
    } catch (err) {
        console.error('Error saving:', err);
        showToast('Error al guardar', 'error');
        return;
    }
    switchTab(tipo === 'becerro' ? 'becerros' : (tipo === 'toro' ? 'toros' : 'vacas'));
}

function cancelForm() {
    switchTab(currentTab === 'add' ? 'vacas' : currentTab);
}

function editAnimal() {
    const animal = animals.find(a => a.id === selectedAnimalId);
    if (!animal) return;
    closeModal();

    switchTab('add');

    // Pre-fill form
    document.getElementById('editId').value = animal.id;
    document.getElementById('formTitle').textContent = `Editar #${animal.crotal}`;
    document.getElementById('submitBtn').textContent = 'Actualizar';
    document.getElementById('crotal').value = animal.crotal;
    document.getElementById('crotalCompleto').value = animal.crotalCompleto || '';
    document.getElementById('fechaNacimiento').value = animal.fechaNacimiento;
    document.getElementById('raza').value = animal.raza || 'Limousine';
    document.getElementById('madreCrotal').value = animal.madreCrotal || '';
    document.getElementById('notas').value = animal.notas || '';

    // Set radio buttons
    document.querySelector(`input[name="tipo"][value="${animal.tipo}"]`).checked = true;
    document.querySelector(`input[name="sexo"][value="${animal.sexo}"]`).checked = true;
    document.querySelector(`input[name="estado"][value="${animal.estado || 'activa'}"]`).checked = true;

    onTipoChange();
}

// ============================
// DELETE
// ============================
function deleteAnimal() {
    document.getElementById('detailModal').classList.add('hidden');
    document.getElementById('confirmModal').classList.remove('hidden');
}

function closeConfirm() {
    document.getElementById('confirmModal').classList.add('hidden');
}

async function confirmDelete() {
    try {
        const { error } = await supabaseClient.from('animals').delete().eq('id', selectedAnimalId);
        if (error) throw error;
        animals = animals.filter(a => a.id !== selectedAnimalId);
        closeConfirm();
        selectedAnimalId = null;
        renderList();
        showToast('Animal eliminado');
    } catch (err) {
        console.error('Error deleting:', err);
        showToast('Error al eliminar', 'error');
        closeConfirm();
    }
}

// ============================
// STATS
// ============================
function showStats() {
    document.getElementById('dropdownMenu').classList.add('hidden');
    const panel = document.getElementById('statsPanel');
    panel.classList.remove('hidden');

    const totalVacas = animals.filter(a => a.tipo === 'vaca' && a.estado !== 'baja').length;
    const totalToros = animals.filter(a => a.tipo === 'toro' && a.estado !== 'baja').length;
    const totalBecerros = animals.filter(a => a.tipo === 'becerro' && a.estado !== 'baja').length;
    const hembras = animals.filter(a => a.sexo === 'Hembra' && a.estado !== 'baja').length;
    const machos = animals.filter(a => a.sexo === 'Macho' && a.estado !== 'baja').length;
    const bajas = animals.filter(a => a.estado === 'baja').length;
    const limousine = animals.filter(a => a.raza === 'Limousine' && a.estado !== 'baja').length;
    const blonde = animals.filter(a => a.raza === 'Blonde aquitani' && a.estado !== 'baja').length;
    const cruzada = animals.filter(a => a.raza === 'Cruzada' && a.estado !== 'baja').length;

    document.getElementById('statsGrid').innerHTML = `
        <div class="stat-card">
            <div class="stat-value">${totalVacas + totalToros + totalBecerros}</div>
            <div class="stat-label">Total Activos</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${bajas}</div>
            <div class="stat-label">Bajas</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${totalVacas}</div>
            <div class="stat-label">🐄 Vacas</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${totalToros}</div>
            <div class="stat-label">🐂 Toros</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${totalBecerros}</div>
            <div class="stat-label">🐮 Becerros</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${hembras}</div>
            <div class="stat-label">♀ Hembras</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${machos}</div>
            <div class="stat-label">♂ Machos</div>
        </div>
        <div class="stat-card full-width" style="text-align:left;padding:16px 20px">
            <div class="stat-label" style="margin-bottom:8px">Razas</div>
            <div style="display:flex;gap:16px;flex-wrap:wrap">
                <div><span style="font-weight:700;color:var(--accent)">${limousine}</span> <span style="font-size:0.78rem;color:var(--text-muted)">Limousine</span></div>
                <div><span style="font-weight:700;color:var(--accent)">${blonde}</span> <span style="font-size:0.78rem;color:var(--text-muted)">Blonde aquitani</span></div>
                <div><span style="font-weight:700;color:var(--accent)">${cruzada}</span> <span style="font-size:0.78rem;color:var(--text-muted)">Cruzada</span></div>
            </div>
        </div>
    `;
}

function hideStats() {
    document.getElementById('statsPanel').classList.add('hidden');
}

// ============================
// EXPORT / IMPORT
// ============================
function exportData() {
    document.getElementById('dropdownMenu').classList.add('hidden');
    const data = JSON.stringify(animals, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `finca_datos_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Datos exportados correctamente');
}

function importDataPrompt() {
    document.getElementById('dropdownMenu').classList.add('hidden');
    document.getElementById('importFile').click();
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            if (Array.isArray(imported)) {
                await supabaseClient.from('animals').delete().neq('id', 0);
                const rows = imported.map(a => toDbRow(a));
                const { data, error } = await supabaseClient.from('animals').insert(rows).select();
                if (error) throw error;
                animals = data.map(fromDbRow);
                renderList();
                showToast(`${imported.length} animales importados`);
            } else {
                showToast('Formato de archivo incorrecto', 'error');
            }
        } catch {
            showToast('Error al importar datos', 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// ============================
// TOAST NOTIFICATIONS
// ============================
function showToast(text, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = document.getElementById('toastIcon');
    const textEl = document.getElementById('toastText');

    textEl.textContent = text;
    icon.textContent = type === 'success' ? 'check_circle' : type === 'warning' ? 'warning' : 'error';
    icon.style.color = type === 'success' ? 'var(--accent)' : type === 'warning' ? 'var(--warning)' : 'var(--danger)';

    // Reset animation
    toast.classList.remove('hidden');
    toast.style.animation = 'none';
    toast.offsetHeight; // Trigger reflow
    toast.style.animation = '';

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// ============================
// Click outside to close modals
// ============================
document.addEventListener('click', (e) => {
    // Close detail modal on overlay click
    if (e.target.id === 'detailModal') closeModal();
    if (e.target.id === 'confirmModal') closeConfirm();
});

// ============================
// SERVICE WORKER REGISTRATION
// ============================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => { });
    });
}
