// ============================================================
// FASHION DATA — YOUR REAL VOGUE ARCHIVE DATA
// ============================================================
const fashionData = [
  ["Acne Studios","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68de2c71745926abcfd85a97/master/w_1600%2Cc_limit/00004-acne-studios-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Acne Studios","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68de2c709a0dcf1d5a5e1a22/master/w_1600%2Cc_limit/00003-acne-studios-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Acne Studios","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68de2c6ebd2cfae7cc7e7dff/master/w_1600%2Cc_limit/00002-acne-studios-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Acne Studios","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68de2c6e96b183d5d17d8ef8/master/w_1600%2Cc_limit/00001-acne-studios-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Adeam","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c8974b121158e87be730ee/master/w_1600%2Cc_limit/00027-adeam-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Adeam","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c8974a077565072451218a/master/w_1600%2Cc_limit/00026-adeam-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Adeam","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c8974af96c4760e906173a/master/w_1600%2Cc_limit/00025-adeam-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Adeam","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c897486c0ca4439a0faee7/master/w_1600%2Cc_limit/00024-adeam-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Ahluwalia","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cebef1b8a6bd603920a619/master/w_1600%2Cc_limit/00019-ahluwalia-spring-2026-ready-to-wear-details-credit-gorunway.jpg"],
  ["Ahluwalia","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cebef0e8f7e94cad62b901/master/w_1600%2Cc_limit/00018-ahluwalia-spring-2026-ready-to-wear-details-credit-gorunway.jpg"],
  ["Ahluwalia","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cebeef0567e2552c7effd5/master/w_1600%2Cc_limit/00017-ahluwalia-spring-2026-ready-to-wear-details-credit-gorunway.jpg"],
  ["Ahluwalia","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cebeed65c0f92c6d7f9399/master/w_1600%2Cc_limit/00016-ahluwalia-spring-2026-ready-to-wear-details-credit-gorunway.jpg"],
  ["Alainpaul","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd0b4cc6f0f3245f7a908f/master/w_1600%2Cc_limit/00019-alainpaul-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Alainpaul","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd0b4a9355c7f879019dcf/master/w_1600%2Cc_limit/00018-alainpaul-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Alberta Ferretti","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d2dd43ee5fa9833d60c470/master/w_1600%2Cc_limit/00049-alberta-ferretti-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Alberta Ferretti","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d2dd42edb5b809bc7a4862/master/w_1600%2Cc_limit/00048-alberta-ferretti-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Aletta","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cc364d2b73630373f22599/master/w_1600%2Cc_limit/00021-aletta-2026-ready-to-wear-credit-brand.jpg"],
  ["Aletta","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cc364c7dba1befa44af7d6/master/w_1600%2Cc_limit/00019-aletta-2026-ready-to-wear-credit-brand.jpg"],
  ["Alexander Wang","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c5179797d17487ff53bef3/master/w_1600%2Cc_limit/00037-alexander-wang-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Alexander Wang","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c51795d8f10b525d2915bb/master/w_1600%2Cc_limit/00036-alexander-wang-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Alice + Olivia","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c5ef4e998775dbcc544510/master/w_1600%2Cc_limit/00030-alice-and-olivia-spring-2026-ready-to-wear-credit-amanda-pratt-brand.jpg"],
  ["Alice + Olivia","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c5ef4d566178fdcde604d1/master/w_1600%2Cc_limit/00029-alice-and-olivia-spring-2026-ready-to-wear-credit-amanda-pratt-brand.jpg"],
  ["Altuzarra","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c5d37b8b51e5d21e082967/master/w_1600%2Cc_limit/00033-altuzarra-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Altuzarra","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c5d3793d9db88df97d973d/master/w_1600%2Cc_limit/00032-altuzarra-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Antonio Marras","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d4070eca96f39fe9b67062/master/w_1600%2Cc_limit/00012-antonio-marras-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Antonio Marras","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d4070efac80c2cdf187fcc/master/w_1600%2Cc_limit/00011-antonio-marras-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Armarium","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d55907348b7dbc78554803/master/w_1600%2Cc_limit/00003-armarium-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Arthur Arbesser","Fall 2025 Ready-to-Wear","https://assets.vogue.com/photos/68d5017301aaeadeb88add2b/master/w_1600%2Cc_limit/00016-arthur-arbesser-fall-2025-ready-to-wear-credit-henrik-blomqvist.jpg"],
  ["Arthur Arbesser","Fall 2025 Ready-to-Wear","https://assets.vogue.com/photos/68d50170b5b242af43397aed/master/w_1600%2Cc_limit/00015-arthur-arbesser-fall-2025-ready-to-wear-credit-henrik-blomqvist.jpg"],
  ["Ashlyn","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c48f76dad1e17d1bb5a0f1/master/w_1600%2Cc_limit/00022-ashlyn-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Bach Mai","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c771a1defbfcb5da77ae1d/master/w_1600%2Cc_limit/00013-bach-mai-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Bach Mai","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c771a1a50a4df2e7cd561a/master/w_1600%2Cc_limit/00011-bach-mai-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Balmain","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd8cbf19421425e217e067/master/w_1600%2Cc_limit/00048-balmain-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Balmain","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd8cc01bda0d3e80cbd5c9/master/w_1600%2Cc_limit/00047-balmain-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Baro Lucas","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cdaba9552445d2bc4abbcb/master/w_1600%2Cc_limit/00008-baro-lucas-spring-2026-ready-to-wear-credit-brand.JPG"],
  ["Baro Lucas","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cdaba832da360e0afb17c6/master/w_1600%2Cc_limit/00007-baro-lucas-spring-2026-ready-to-wear-credit-brand.JPG"],
  ["Boss","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d538ef4a1d3cd775f25255/master/w_1600%2Cc_limit/00041-boss-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Boss","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d538ed2049c8e36482a781/master/w_1600%2Cc_limit/00040-boss-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Bottega Veneta","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d9599fcf172c708919c14b/master/w_1600%2Cc_limit/00073-bottega-veneta-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Bottega Veneta","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d9599e410414f7ae2610ef/master/w_1600%2Cc_limit/00072-bottega-veneta-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Brunello Cucinelli","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d3cbd73691cc2b1efd500d/master/w_1600%2Cc_limit/00046-brunello-cucinelli-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Brunello Cucinelli","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d3cbd664b70c10d0d10ba5/master/w_1600%2Cc_limit/00045-brunello-cucinelli-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Burberry","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d554c72eaa48cfb554f0e5/master/w_1600%2Cc_limit/00056-burberry-spring-2026-ready-to-wear-credit-gorunway-brand.jpg"],
  ["Burberry","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d554c2d6f7ad917fa88296/master/w_1600%2Cc_limit/00055-burberry-spring-2026-ready-to-wear-credit-gorunway-brand.jpg"],
  ["Calvin Klein Collection","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c49570493d708761ece415/master/w_1600%2Cc_limit/00039-calvin-klein-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Calvin Klein Collection","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c4956ec28c11510039eaf4/master/w_1600%2Cc_limit/00037-calvin-klein-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Carolina Herrera","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cc6cf069de9660db38e52f/master/w_1600%2Cc_limit/00042-carolina-herrera-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Carolina Herrera","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cc6cf0d6170a1965ffe14d/master/w_1600%2Cc_limit/00041-carolina-herrera-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Cecilie Bahnsen","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd2e30364c355be2d3c44a/master/w_1600%2Cc_limit/00022-cecilie-bahnsen-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Cecilie Bahnsen","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd2e2dfce22dc8ce098cc0/master/w_1600%2Cc_limit/00021-cecilie-bahnsen-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Charlie Constantinou","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d162944790ba81243948a9/master/w_1600%2Cc_limit/00020-charlie-constantinou-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Charlie Constantinou","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d1629441e8d89d5d491e37/master/w_1600%2Cc_limit/00019-charlie-constantinou-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Chopova Lowena","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cdb247ef009418f67b1cb0/master/w_1600%2Cc_limit/00001-chopova-lowena-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Christian Cowan","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c61d36cdfe1255e454ef9e/master/w_1600%2Cc_limit/00011-christian-cowan-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Christian Cowan","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c61d33f43aa2f864220d01/master/w_1600%2Cc_limit/00010-christian-cowan-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Christian Dior","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd515d2747196f1e9f466b/master/w_1600%2Cc_limit/00068-christian-dior-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Christian Dior","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd515b3d863daf4581eac5/master/w_1600%2Cc_limit/00067-christian-dior-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Christian Siriano","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c4acdaef8737415b9bf3b1/master/w_1600%2Cc_limit/00002-christian-siriano-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Christian Siriano","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c4acf2cb4733672a00ebb0/master/w_1600%2Cc_limit/00029-christian-siriano-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Christopher John Rogers","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d6dbe0c790ea9dd8cd2076/master/w_1600%2Cc_limit/00029-christopher-john-rogers-spring-2026-ready-to-wear-credit-cesar-buitrago.jpg"],
  ["Christopher John Rogers","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d6dbd8bec9b4e3e14543f3/master/w_1600%2Cc_limit/00024-christopher-john-rogers-spring-2026-ready-to-wear-credit-cesar-buitrago.jpg"],
  ["Claro Couture","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cd6444a379e2ce22d8bd9e/master/w_1600%2Cc_limit/00039-claro-couture-spring-2026-ready-to-wear-spain-credit-brand.JPG"],
  ["Claro Couture","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cd6443857714f1405f023b/master/w_1600%2Cc_limit/00037-claro-couture-spring-2026-ready-to-wear-spain-credit-brand.JPG"],
  ["Coach","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c880901281076c2c23b02c/master/w_1600%2Cc_limit/00004-coach-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Coach","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c8808e1f5fb87166bce0e0/master/w_1600%2Cc_limit/00003-coach-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Courrèges","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd0478251fd54131991b71/master/w_1600%2Cc_limit/00009-courreges-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Courrèges","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd049f7cbda3db43af7f57/master/w_1600%2Cc_limit/00034-courreges-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["David Koma","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dab4787dd1945464964496/master/w_1600%2Cc_limit/00020-david-koma-spring-2026-ready-to-wear-credit-zoe-natale-mannella-brand.jpg"],
  ["David Koma","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dab477f58409e8a3cae797/master/w_1600%2Cc_limit/00019-david-koma-spring-2026-ready-to-wear-credit-zoe-natale-mannella-brand.jpg"],
  ["Di Petsa","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cd75edade71b7df83a8442/master/w_1600%2Cc_limit/00022-di-petsa-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Di Petsa","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cd75ecf1029496cff58bac/master/w_1600%2Cc_limit/00021-di-petsa-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Diesel","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d430ca69c26e27ba162c7e/master/w_1600%2Cc_limit/00043-diesel-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Diesel","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d430c92f441bdb3668e9d7/master/w_1600%2Cc_limit/00042-diesel-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Dolce & Gabbana","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d81b87ee31a1f8395923bf/master/w_1600%2Cc_limit/00040-dolce-and-gabbana-spring-2026-ready-to-wear-credit-gorunway.JPG"],
  ["Dolce & Gabbana","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d81b879357a0d3cf336293/master/w_1600%2Cc_limit/00039-dolce-and-gabbana-spring-2026-ready-to-wear-credit-gorunway.JPG"],
  ["Dries Van Noten","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dc1b6646376e77a781350e/master/w_1600%2Cc_limit/00057-dries-van-noten-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Dries Van Noten","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dc1b638488f4a83d3d1d0f/master/w_1600%2Cc_limit/00056-dries-van-noten-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Elisabetta Franchi","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d6c48a017e74b7a5d8329b/master/w_1600%2Cc_limit/00050-elisabetta-franchi-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Elisabetta Franchi","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d6c48a6d232558fc81e993/master/w_1600%2Cc_limit/00049-elisabetta-franchi-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Emporio Armani","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d56da02049c8e36482a7d3/master/w_1600%2Cc_limit/00079-emporio-armani-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Emporio Armani","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d56d9d0e3eafebbd0c5c7a/master/w_1600%2Cc_limit/00077-emporio-armani-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Erdem","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d04ee8f9ef0e02e6365035/master/w_1600%2Cc_limit/00024-erdem-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Erdem","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d04ee59378bbf43e2597e4/master/w_1600%2Cc_limit/00023-erdem-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Ermanno Scervino","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d7c3ff63933c5166c98c5e/master/w_1600%2Cc_limit/_UMB0298.jpg"],
  ["Ermanno Scervino","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d7c3ff1f6989f00d95d5c8/master/w_1600%2Cc_limit/_UMB0264.jpg"],
  ["Etro","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d45686f1cb80bc407a6c97/master/w_1600%2Cc_limit/00045-etro-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Etro","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d456867c96cc37c24143a5/master/w_1600%2Cc_limit/00044-etro-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Eudon Choi","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c96cea6860da187f5aca65/master/w_1600%2Cc_limit/00019-eudon-choi-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Eudon Choi","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c96ce75fa85852a2b8bd2c/master/w_1600%2Cc_limit/00018-eudon-choi-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Fashion East","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cd876550ddf51f8c46373b/master/w_1600%2Cc_limit/00022-fashion-east-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Fashion East","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cd8763a7d7b27686387c11/master/w_1600%2Cc_limit/00021-fashion-east-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Fear of God","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d19df6700b6693eb32f158/master/w_1600%2Cc_limit/00017-fear-of-god-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Fear of God","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d19de780a6d19a2f7e0f9d/master/w_1600%2Cc_limit/00014-fear-of-god-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Fendi","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d405c6f1cb80bc407a6b47/master/w_1600%2Cc_limit/00062-fendi-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Fendi","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d40567f6b05761e055b749/master/w_1600%2Cc_limit/00007-fendi-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Ferragamo","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d99a9cca38f362062d43b7/master/w_1600%2Cc_limit/00062-ferragamo-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Ferragamo","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d99a9b76b253d174fb5970/master/w_1600%2Cc_limit/00060-ferragamo-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Ganni","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dc0d7e23f002be6902b4ec/master/w_1600%2Cc_limit/00027-ganni-spring-2026-ready-to-wear-credit-esther-theaker.jpg"],
  ["Ganni","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dc0d7eb81c8c91513b82c8/master/w_1600%2Cc_limit/00026-ganni-spring-2026-ready-to-wear-credit-esther-theaker.jpg"],
  ["Giorgio Armani","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd24589013673f4f6135dd/master/w_1600%2Cc_limit/00036-giorgio-armani-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Giorgio Armani","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd2455b1320044ee6bea6a/master/w_1600%2Cc_limit/00035-giorgio-armani-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Head of State","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c74dbb0c9eeb9af8906de0/master/w_1600%2Cc_limit/00014-head-of-state-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Head of State","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c74db761ab11b1db613ecf/master/w_1600%2Cc_limit/00011-head-of-state-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Hodakova","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dab6892d80f12439193560/master/w_1600%2Cc_limit/00038-hodakova-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Hodakova","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dab688b6928d6e4c84858a/master/w_1600%2Cc_limit/00037-hodakova-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["HUI","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d944a662c59a141c29f520/master/w_1600%2Cc_limit/00029-hui-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["HUI","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d944a36455f6338d05e502/master/w_1600%2Cc_limit/00027-hui-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Institution By Galib Gassanoff","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d68bdc2a1de3b8166daf1d/master/w_1600%2Cc_limit/00018-institution-by-galib-gassanoff-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Isabel Marant","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68deff6bab7870442c402b1c/master/w_1600%2Cc_limit/00054-isabel-marant-spring-2026-ready-to-wear-credit-gorunway.JPG"],
  ["Isabel Marant","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68deff362508286c2e7e222c/master/w_1600%2Cc_limit/00051-isabel-marant-spring-2026-ready-to-wear-credit-gorunway.JPG"],
  ["Jane Wade","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c802f3c617539f416e8e8a/master/w_1600%2Cc_limit/00033-jane-wade-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Jane Wade","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c802f217e1c07ad89d8821/master/w_1600%2Cc_limit/00032-jane-wade-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Jil Sander","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d4355c6774c5a85d5dc878/master/w_1600%2Cc_limit/00030-jil-sander-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Jil Sander","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d4355afb7387d5654c97c9/master/w_1600%2Cc_limit/00029-jil-sander-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Kallmeyer","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c9f5a3b278d8c09d0a20cf/master/w_1600%2Cc_limit/00030-kallmeyer-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Kallmeyer","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c9f5a23693a062a884af2e/master/w_1600%2Cc_limit/00029-kallmeyer-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Kent & Curwen","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cff97d6e24575ad78478e7/master/w_1600%2Cc_limit/00019-kent-and-curwen-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Kent & Curwen","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cff97c8f150876feca0c15/master/w_1600%2Cc_limit/00018-kent-and-curwen-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Knwls","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d45838fb7387d5654c9872/master/w_1600%2Cc_limit/00030-knwls-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Knwls","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d458362f441bdb3668ea08/master/w_1600%2Cc_limit/00029-knwls-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Lii","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c9df82e31329c37b6854ed/master/w_1600%2Cc_limit/00008-lii-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Lii","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c9df807f4bfbb47ed7c57e/master/w_1600%2Cc_limit/00007-lii-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Loro Piana","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d3e11d01881b2a8a92635b/master/w_1600%2Cc_limit/00024-loro-piana-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Loro Piana","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d3e11ba99903e01d10443d/master/w_1600%2Cc_limit/00023-loro-piana-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Luar","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c92cde2bb2bbd9b528b6f6/master/w_1600%2Cc_limit/00021-luar-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Luar","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c92cdd8808bb0f537c650a/master/w_1600%2Cc_limit/00020-luar-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Luisa Spagnoli","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d81a00d8606f91718fe7bf/master/w_1600%2Cc_limit/00031-luisa-spagnoli-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Luisa Spagnoli","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d819fbd31c5ab685032203/master/w_1600%2Cc_limit/00029-luisa-spagnoli-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Mains","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cf1c86af914131a5eb3b37/master/w_1600%2Cc_limit/00031-mains-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Mains","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cf1c841efe9b5a949bdb7c/master/w_1600%2Cc_limit/00030-mains-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Marco Rambaldi","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d66f7727106ddcb9c04dbe/master/w_1600%2Cc_limit/00012-marco-rambaldi-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Marco Rambaldi","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d66f761ff68a00813b5729/master/w_1600%2Cc_limit/00011-marco-rambaldi-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Marie Adam-Leenaerdt","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd10d52cd9e1712b46eca5/master/w_1600%2Cc_limit/00006-marie-adam-leenaerdt-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Marie Adam-Leenaerdt","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dd10d5408786d70a1909be/master/w_1600%2Cc_limit/00005-marie-adam-leenaerdt-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Marina Moscone","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c51e50cb52ce5643bf00b1/master/w_1600%2Cc_limit/00025-marina-moscone-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Marina Moscone","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c51e4f956b8eb63f397349/master/w_1600%2Cc_limit/00024-marina-moscone-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Markarian","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c83549b171e21d2c49888e/master/w_1600%2Cc_limit/00018-markarian-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Markarian","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c83548d220c06fda45e89c/master/w_1600%2Cc_limit/00019-markarian-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Max Mara","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d52c404d7308e084939d2b/master/w_1600%2Cc_limit/00031-max-mara-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Mithridate","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cd3e5154ed7279c22f6ade/master/w_1600%2Cc_limit/00036-mithridate-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Mithridate","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cd3e4c772b171d06ef1d1b/master/w_1600%2Cc_limit/00037-mithridate-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Monse","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c763740d52bede4149f5b2/master/w_1600%2Cc_limit/00002-monse-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Moschino","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d5a174db6ad27039eab552/master/w_1600%2Cc_limit/00019-moschino-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Moschino","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d5a172db6ad27039eab550/master/w_1600%2Cc_limit/00018-moschino-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["MSGM","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d862ff0127718d47403db8/master/w_1600%2Cc_limit/_UMB0962.jpg"],
  ["MSGM","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d862feee31a1f8395923e8/master/w_1600%2Cc_limit/_UMB0846.jpg"],
  ["Mugler","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68de9eff6518319bdd8e8a9a/master/w_1600%2Cc_limit/00021-mugler-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Natasha Zinko","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cdbab7857714f1405f02a8/master/w_1600%2Cc_limit/00008-natasha-zinko-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Natasha Zinko","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cdbab3a379e2ce22d8c491/master/w_1600%2Cc_limit/00007-natasha-zinko-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Off-White","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c585ff94f1a021ac3a2c8e/master/w_1600%2Cc_limit/00019-off-white-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Onitsuka Tiger","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d41738af21ea8a000db9a4/master/w_1600%2Cc_limit/_UMB1056.jpg"],
  ["Palomo Spain","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cac2fbfce75ec9f1ea41c2/master/w_1600%2Cc_limit/00012-palomo-spain-spring-2026-ready-to-wear-credit-brand.JPG"],
  ["Palomo Spain","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cac2fb2a88b050aaed0a4f/master/w_1600%2Cc_limit/00011-palomo-spain-spring-2026-ready-to-wear-credit-brand.JPG"],
  ["Parsons MFA","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c73701627c7d40ac52a988/master/w_1600%2Cc_limit/00056-parsons-mfa-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Parsons MFA","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c73701d48ae8601f1a40d6/master/w_1600%2Cc_limit/00055-parsons-mfa-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Patrick McDowell","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68ce8d0913308921857387b4/master/w_1600%2Cc_limit/00015-patrick-mcdowell-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Patrick McDowell","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68ce8d0935a8aedc3bee4f8e/master/w_1600%2Cc_limit/00014-patrick-mcdowell-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Petar Petrov","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d7dd793d15fc37342781fd/master/w_1600%2Cc_limit/00012-petar-petrov-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Petar Petrov","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d7dd78cf8e39ca6504fd1a/master/w_1600%2Cc_limit/00010-petar-petrov-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Prada","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d555422049c8e36482a7bb/master/w_1600%2Cc_limit/00039-prada-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Prada","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d5553f9075a673cd0f5592/master/w_1600%2Cc_limit/00038-prada-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Rabanne","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68de8c567a06c23197a3365d/master/w_1600%2Cc_limit/00013-rabanne-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Rabanne","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68de8c4e96b183d5d17d9011/master/w_1600%2Cc_limit/00012-rabanne-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Roberto Cavalli","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d63722a56f1f6129e84648/master/w_1600%2Cc_limit/00041-roberto-cavalli-spring-2026-ready-to-wear-credit-gorunway.JPG"],
  ["Roberto Cavalli","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d6371f6d232558fc81e953/master/w_1600%2Cc_limit/00040-roberto-cavalli-spring-2026-ready-to-wear-credit-gorunway.JPG"],
  ["Rodarte","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68de16db71fc6c04f9b7d09a/master/w_1600%2Cc_limit/00038-rodarte-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Rory William Docherty","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d13836a7acc3e40fa3dbf6/master/w_1600%2Cc_limit/00030-rory-william-docherty-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Rory William Docherty","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d1383380a6d19a2f7e0d89/master/w_1600%2Cc_limit/00029-rory-william-docherty-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Saint Laurent","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68daef13caab05de5242ff0c/master/w_1600%2Cc_limit/_ALE0467.jpg"],
  ["Saint Laurent","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68daef1206aaaad911940b9e/master/w_1600%2Cc_limit/_ALE0436.jpg"],
  ["Sandy Liang","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c72e7181b1cc6ed32da5c3/master/w_1600%2Cc_limit/00001-sandy-liang-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Sandy Liang","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c72ea4b3abfb81056084ac/master/w_1600%2Cc_limit/00037-sandy-liang-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Simone Rocha","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d037cce0d9934172321579/master/w_1600%2Cc_limit/00017-simone-rocha-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Simone Rocha","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d037cb5984f8da1f05cd86/master/w_1600%2Cc_limit/00016-simone-rocha-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Simorra","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cd5fd6aabf0faf5e03b1b3/master/w_1600%2Cc_limit/00027-simorra-spring-2026-ready-to-wear-spain-credit-brand.jpg"],
  ["Simorra","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cd5fd6aabf0faf5e03b1b1/master/w_1600%2Cc_limit/00025-simorra-spring-2026-ready-to-wear-spain-credit-brand.jpg"],
  ["Staud","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cad6a2304f8ac6a6b23ae4/master/w_1600%2Cc_limit/00033-staud-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Staud","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cad69f5dfaf44434785037/master/w_1600%2Cc_limit/00031-staud-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Stella McCartney","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dc441766c59c4084e4ffc1/master/w_1600%2Cc_limit/00035-stella-mccartney-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Stella McCartney","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dc440d4c10b24fc443c64f/master/w_1600%2Cc_limit/00034-stella-mccartney-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Susan Fang","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d155e680a6d19a2f7e0dd3/master/w_1600%2Cc_limit/00002-susan-fang-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Talia Byre","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cfea036e24575ad78478d0/master/w_1600%2Cc_limit/00009-talia-byre-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Talia Byre","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68cfea03f9ef0e02e6364fc8/master/w_1600%2Cc_limit/00010-talia-byre-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Tanner Fletcher","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c8834e408b5a6d510020bf/master/w_1600%2Cc_limit/00039-tanner-fletcher-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Tanner Fletcher","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c8834d78ca5552122b8d64/master/w_1600%2Cc_limit/00038-tanner-fletcher-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["The Attico","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d6fc89b55f2fe906a1c15f/master/w_1600%2Cc_limit/00054-the-attico-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["The Attico","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d6fc87228ff43a17c92cd2/master/w_1600%2Cc_limit/00053-the-attico-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Tibi","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c5a14ccdfe1255e454ef42/master/w_1600%2Cc_limit/00002-tibi-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Tod's","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d6a160438242018bda554f/master/w_1600%2Cc_limit/00001-tods-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Tolu Coker","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d0340a025090ae63c55f95/master/w_1600%2Cc_limit/00012-tolu-coker-spring-2026-ready-to-wear-credit-rashidi-noah.jpg"],
  ["Tolu Coker","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d034090ae225e45b46ca6b/master/w_1600%2Cc_limit/00011-tolu-coker-spring-2026-ready-to-wear-credit-rashidi-noah.jpg"],
  ["Tom Ford","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68de433a729187d2a54ea0df/master/w_1600%2Cc_limit/00051-tom-ford-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Tom Ford","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68de432849af54b22f7ca5cb/master/w_1600%2Cc_limit/00032-tom-ford-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Toteme","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c85b27659d7ca2ecfdeb04/master/w_1600%2Cc_limit/00014-toteme-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Toteme","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c85b26408b5a6d51002098/master/w_1600%2Cc_limit/00011-toteme-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Tove","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d00e19025090ae63c55f4e/master/w_1600%2Cc_limit/00031-tove-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Tove","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d00e18265201cbd41b73ac/master/w_1600%2Cc_limit/00029-tove-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["TWP","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c85d79e94c43cba0d541e0/master/w_1600%2Cc_limit/00006-twp-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["TWP","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c85d78dc9dbe2fe8d0f570/master/w_1600%2Cc_limit/00005-twp-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Ulla Johnson","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c731925c789299ad4668f7/master/w_1600%2Cc_limit/00056-ulla-johnson-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Ulla Johnson","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c73190f5a7f1e001d4d388/master/w_1600%2Cc_limit/00055-ulla-johnson-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Uma Wang","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68de54c6b49fc7a529eb22a8/master/w_1600%2Cc_limit/00034-uma-wang-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Uma Wang","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68de54c557eefa69c46b3cdc/master/w_1600%2Cc_limit/00033-uma-wang-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Versace","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d74941228ff43a17c92ce8/master/w_1600%2Cc_limit/00048-versace-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Versace","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68d7494039e6905a024e663e/master/w_1600%2Cc_limit/00046-versace-spring-2026-ready-to-wear-credit-brand.jpg"],
  ["Who Decides War","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c6b4177cdeba9d55004a25/master/w_1600%2Cc_limit/00035-who-decides-war-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Who Decides War","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c6b416a0b220e769763ee9/master/w_1600%2Cc_limit/00034-who-decides-war-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Zankov","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68c8537b0d52bede4149f681/master/w_1600%2Cc_limit/00033-zankov-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Zomer","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dbb647d6c4c7f8f558bfd0/master/w_1600%2Cc_limit/00014-zomer-spring-2026-ready-to-wear-credit-gorunway.jpg"],
  ["Zomer","Spring 2026 Ready-to-Wear","https://assets.vogue.com/photos/68dbb64509991603ebea29e1/master/w_1600%2Cc_limit/00011-zomer-spring-2026-ready-to-wear-credit-gorunway.jpg"]
];

// ============================================================
// GAME STATE
// ============================================================
let playerName = "";
let score = 0;
let currentQuestionIndex = 0;
let gameQuestions = [];
let answered = false;

// Get all unique designer names for wrong answers
const allDesigners = [...new Set(fashionData.map(item => item[0]))];

// ============================================================
// PAGE NAVIGATION
// ============================================================
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// ============================================================
// SHUFFLE HELPER
// ============================================================
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ============================================================
// BUILD GAME QUESTIONS
// ============================================================
function buildQuestions() {
  const shuffled = shuffle(fashionData);
  gameQuestions = shuffled.map(item => {
    const correct = item[0];
    const image = item[2];
    const season = item[1];

    // Get 3 unique wrong answers
    const wrongPool = allDesigners.filter(d => d !== correct);
    const wrongs = shuffle(wrongPool).slice(0, 3);

    // Combine and shuffle choices
    const choices = shuffle([correct, ...wrongs]);

    return { correct, image, season, choices };
  });
}

// ============================================================
// LOAD QUESTION
// ============================================================
function loadQuestion() {
  if (currentQuestionIndex >= gameQuestions.length) {
    showScorePage();
    return;
  }

  answered = false;
  const q = gameQuestions[currentQuestionIndex];

  // Update counter
  document.getElementById('question-counter').textContent =
    `QUESTION ${currentQuestionIndex + 1} OF ${gameQuestions.length}`;

  // Update image
  const img = document.getElementById('runway-image');
  img.src = q.image;
  img.alt = `${q.correct} ${q.season}`;

  // Update choices
  const container = document.getElementById('choices-container');
  container.innerHTML = '';
  q.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice.toUpperCase();
    btn.addEventListener('click', () => handleAnswer(choice, q.correct));
    container.appendChild(btn);
  });

  // Hide feedback and next button
  document.getElementById('feedback').classList.add('hidden');
  document.getElementById('next-btn').classList.add('hidden');
}

// ============================================================
// HANDLE ANSWER
// ============================================================
function handleAnswer(selected, correct) {
  if (answered) return;
  answered = true;

  const buttons = document.querySelectorAll('.choice-btn');
  const feedback = document.getElementById('feedback');

  buttons.forEach(btn => {
    btn.disabled = true;
    const btnText = btn.textContent.toUpperCase();
    const correctUpper = correct.toUpperCase();
    if (btnText === correctUpper) {
      btn.classList.add('correct');
    } else if (btnText === selected.toUpperCase() && selected !== correct) {
      btn.classList.add('incorrect');
    }
  });

  if (selected === correct) {
    score++;
    document.getElementById('score-display').textContent = `SCORE: ${score}`;
    feedback.textContent = 'CORRECT';
  } else {
    feedback.textContent = `INCORRECT — ${correct.toUpperCase()}`;
  }

  feedback.classList.remove('hidden');
  document.getElementById('next-btn').classList.remove('
