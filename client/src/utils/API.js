export const searchRecipes = (query) => {
    return fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&includeIngredients&addRecipeInformation&apiKey=fc4f60d3201641da841c267cc0cf409e`);
  };

  export const searchDining = (query) => {
   return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.7658,-72.6734&radius=500&type=restaurant&keyword=${query}&key=AIzaSyBDhheGyZ1A_-E4vfpS3saQRGebunq5krE&libraries=places`);
    


    //     "html_attributions" : [],
    //     "results" : [
    //        {
    //           "business_status" : "OPERATIONAL",
    //           "geometry" : {
    //              "location" : {
    //                 "lat" : 41.7667002,
    //                 "lng" : -72.67428389999999
    //              },
    //              "viewport" : {
    //                 "northeast" : {
    //                    "lat" : 41.76808842989273,
    //                    "lng" : -72.67290507010728
    //                 },
    //                 "southwest" : {
    //                    "lat" : 41.76538877010729,
    //                    "lng" : -72.67560472989273
    //                 }
    //              }
    //           },
    //           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    //           "icon_background_color" : "#FF9E67",
    //           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    //           "name" : "Dhaba Wala Indian Kitchen",
    //           "opening_hours" : {
    //              "open_now" : true
    //           },
    //           "photos" : [
    //              {
    //                 "height" : 640,
    //                 "html_attributions" : [
    //                    "\u003ca href=\"https://maps.google.com/maps/contrib/114235944028249682649\"\u003eDhaba Wala Indian Kitchen\u003c/a\u003e"
    //                 ],
    //                 "photo_reference" : "Aap_uEBF6SU8Hhxh7oYbx70Ng5abeZu_HNmE2s1bU_ZX3ODswA4uPxQ9Qjjq3sLBRSC1mhsih23YxP1Ui_BCDVDOHUVh81Y7dMzfxHwyttUR4qB2QaFuiO8vZZmmNNU1IURTIPWNC8Fmjkyh2lk9xUZRTHOP5I1tnJYK-CS733FueJFuS_-3",
    //                 "width" : 960
    //              }
    //           ],
    //           "place_id" : "ChIJ6QqutGRT5okRHuUam6Yjnuo",
    //           "plus_code" : {
    //              "compound_code" : "Q88G+M7 Hartford, Connecticut",
    //              "global_code" : "87H9Q88G+M7"
    //           },
    //           "price_level" : 2,
    //           "rating" : 4.3,
    //           "reference" : "ChIJ6QqutGRT5okRHuUam6Yjnuo",
    //           "scope" : "GOOGLE",
    //           "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
    //           "user_ratings_total" : 856,
    //           "vicinity" : "49 Asylum St, Hartford"
    //        },
    //        {
    //           "business_status" : "OPERATIONAL",
    //           "geometry" : {
    //              "location" : {
    //                 "lat" : 41.7666206,
    //                 "lng" : -72.67276199999999
    //              },
    //              "viewport" : {
    //                 "northeast" : {
    //                    "lat" : 41.76791702989272,
    //                    "lng" : -72.6705505
    //                 },
    //                 "southwest" : {
    //                    "lat" : 41.76521737010728,
    //                    "lng" : -72.67362409999998
    //                 }
    //              }
    //           },
    //           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    //           "icon_background_color" : "#FF9E67",
    //           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    //           "name" : "Ajamo",
    //           "opening_hours" : {
    //              "open_now" : false
    //           },
    //           "photos" : [
    //              {
    //                 "height" : 600,
    //                 "html_attributions" : [
    //                    "\u003ca href=\"https://maps.google.com/maps/contrib/107498426158893778869\"\u003eA Google User\u003c/a\u003e"
    //                 ],
    //                 "photo_reference" : "Aap_uECTDcaVdNDmxFEKOmWxFXdM67t-6ImVsujjIv4O_yP7-XEYWKb7uZQcGjwzKyXIEUyQ2-edglD-B71EbkIddY1uBWpizHTRXWU_kX1BbBsgNkRPyWjN3bUQqId-NhbQjOWzv8-7lH248Bk6sqQe5l8s6P6uA1uIz8__GgvzUzeXA35H",
    //                 "width" : 800
    //              }
    //           ],
    //           "place_id" : "ChIJvfQfaHtT5okRu7eeQsd3SWw",
    //           "plus_code" : {
    //              "compound_code" : "Q88G+JV Hartford, Connecticut",
    //              "global_code" : "87H9Q88G+JV"
    //           },
    //           "rating" : 4.4,
    //           "reference" : "ChIJvfQfaHtT5okRu7eeQsd3SWw",
    //           "scope" : "GOOGLE",
    //           "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
    //           "user_ratings_total" : 33,
    //           "vicinity" : "30 State House Square, Hartford"
    //        },
    //        {
    //           "business_status" : "OPERATIONAL",
    //           "geometry" : {
    //              "location" : {
    //                 "lat" : 41.7628292,
    //                 "lng" : -72.67221380000001
    //              },
    //              "viewport" : {
    //                 "northeast" : {
    //                    "lat" : 41.76424007989272,
    //                    "lng" : -72.67084662010727
    //                 },
    //                 "southwest" : {
    //                    "lat" : 41.76154042010728,
    //                    "lng" : -72.67354627989272
    //                 }
    //              }
    //           },
    //           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    //           "icon_background_color" : "#FF9E67",
    //           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    //           "name" : "Rush Bowls",
    //           "opening_hours" : {
    //              "open_now" : false
    //           },
    //           "photos" : [
    //              {
    //                 "height" : 3288,
    //                 "html_attributions" : [
    //                    "\u003ca href=\"https://maps.google.com/maps/contrib/110084364674028737640\"\u003eJonathan Rosenfeld\u003c/a\u003e"
    //                 ],
    //                 "photo_reference" : "Aap_uEB1QL8oJwnJL_BdpgQpWz3Gm79wwlOKC79SavQQucM98jUrMKfxw1Wrgx2tglEdhNczqPEmTM-w-37KlnjyUNDOXkes1ocasilUCzxfjN1bL1Xg71bSOGczSeu-v9smz_zfMnM6wJ21IfKJT5f0qIgrSh78A2s-lq9y27Ly4ElifkCG",
    //                 "width" : 3024
    //              }
    //           ],
    //           "place_id" : "ChIJnbbKWLRT5okRkimr_DoueNs",
    //           "plus_code" : {
    //              "compound_code" : "Q87H+44 Hartford, Connecticut",
    //              "global_code" : "87H9Q87H+44"
    //           },
    //           "price_level" : 2,
    //           "rating" : 4.4,
    //           "reference" : "ChIJnbbKWLRT5okRkimr_DoueNs",
    //           "scope" : "GOOGLE",
    //           "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
    //           "user_ratings_total" : 109,
    //           "vicinity" : "15 Front St, Hartford"
    //        },
    //        {
    //           "business_status" : "OPERATIONAL",
    //           "geometry" : {
    //              "location" : {
    //                 "lat" : 41.76712149999999,
    //                 "lng" : -72.6779423
    //              },
    //              "viewport" : {
    //                 "northeast" : {
    //                    "lat" : 41.76851087989272,
    //                    "lng" : -72.67663047010727
    //                 },
    //                 "southwest" : {
    //                    "lat" : 41.76581122010727,
    //                    "lng" : -72.67933012989272
    //                 }
    //              }
    //           },
    //           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    //           "icon_background_color" : "#FF9E67",
    //           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    //           "name" : "Banh Meee",
    //           "opening_hours" : {
    //              "open_now" : false
    //           },
    //           "photos" : [
    //              {
    //                 "height" : 4032,
    //                 "html_attributions" : [
    //                    "\u003ca href=\"https://maps.google.com/maps/contrib/117250752689339886562\"\u003eMichael Sisko\u003c/a\u003e"
    //                 ],
    //                 "photo_reference" : "Aap_uEAkIjU5sPxZsXYNutdYghuRuA5UjJlxjTkQQXofcb4-NlqpxvSi-H783SMv1BaCk-FQtHh74T6rVEvxt6tQjmB8J4X5SPC8MrMK52QOCcR2vKVQoscXs-7hFPesXpokgEVUmekwEWzegP26RmKG_Jf7Fn1OYhhSdfCPvPrLYdvtQifv",
    //                 "width" : 3024
    //              }
    //           ],
    //           "place_id" : "ChIJj47MRrOy54kRqncy-SvRhtY",
    //           "plus_code" : {
    //              "compound_code" : "Q88C+RR Hartford, Connecticut",
    //              "global_code" : "87H9Q88C+RR"
    //           },
    //           "price_level" : 1,
    //           "rating" : 4.8,
    //           "reference" : "ChIJj47MRrOy54kRqncy-SvRhtY",
    //           "scope" : "GOOGLE",
    //           "types" : [ "cafe", "restaurant", "food", "point_of_interest", "establishment" ],
    //           "user_ratings_total" : 335,
    //           "vicinity" : "126 Ann Uccello St, Hartford"
    //        },
    //        {
    //           "business_status" : "OPERATIONAL",
    //           "geometry" : {
    //              "location" : {
    //                 "lat" : 41.768444,
    //                 "lng" : -72.677984
    //              },
    //              "viewport" : {
    //                 "northeast" : {
    //                    "lat" : 41.76976177989272,
    //                    "lng" : -72.67663122010728
    //                 },
    //                 "southwest" : {
    //                    "lat" : 41.76706212010728,
    //                    "lng" : -72.67933087989272
    //                 }
    //              }
    //           },
    //           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    //           "icon_background_color" : "#FF9E67",
    //           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    //           "name" : "Agave Grill",
    //           "opening_hours" : {
    //              "open_now" : true
    //           },
    //           "photos" : [
    //              {
    //                 "height" : 3024,
    //                 "html_attributions" : [
    //                    "\u003ca href=\"https://maps.google.com/maps/contrib/101357228873366628716\"\u003eCinvestav-IPN Ibarra\u003c/a\u003e"
    //                 ],
    //                 "photo_reference" : "Aap_uEBxWt-RNVaWvuWPOR1g0CxwhYHS14p5S7g-VKGvRhGymNtoKTdanJf5_4I52jSs9gXTVb3bsJz8a2SpflSKo-fT7XOeSWzNnC9S-7u0nFp6CJK_m3fBnkRTsSyhLwE4Ua86LuUNKLC4lMPYJGVM6vjplt77jqs1EFEkPfeJzErt69nG",
    //                 "width" : 4032
    //              }
    //           ],
    //           "place_id" : "ChIJublEiWNT5okRCAQtQmd-IoM",
    //           "plus_code" : {
    //              "compound_code" : "Q89C+9R Hartford, Connecticut",
    //              "global_code" : "87H9Q89C+9R"
    //           },
    //           "price_level" : 2,
    //           "rating" : 4.3,
    //           "reference" : "ChIJublEiWNT5okRCAQtQmd-IoM",
    //           "scope" : "GOOGLE",
    //           "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
    //           "user_ratings_total" : 850,
    //           "vicinity" : "100 Allyn St #1418, Hartford"
    //        },
    //        {
    //           "business_status" : "OPERATIONAL",
    //           "geometry" : {
    //              "location" : {
    //                 "lat" : 41.7600988,
    //                 "lng" : -72.6778032
    //              },
    //              "viewport" : {
    //                 "northeast" : {
    //                    "lat" : 41.76145797989273,
    //                    "lng" : -72.67648472010727
    //                 },
    //                 "southwest" : {
    //                    "lat" : 41.75875832010728,
    //                    "lng" : -72.67918437989272
    //                 }
    //              }
    //           },
    //           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    //           "icon_background_color" : "#FF9E67",
    //           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    //           "name" : "NALA's Kitchen - Grab-n-go",
    //           "opening_hours" : {
    //              "open_now" : true
    //           },
    //           "photos" : [
    //              {
    //                 "height" : 3024,
    //                 "html_attributions" : [
    //                    "\u003ca href=\"https://maps.google.com/maps/contrib/113358464237678847110\"\u003eA Google User\u003c/a\u003e"
    //                 ],
    //                 "photo_reference" : "Aap_uEBEVNMZ3vb6I-DCGX54TfR1LDJqC1Frb-CqV5zpu-E-c0xFPXOey1GlIgd46Xarc918apAmRuSevAKGGROxJ_jpH3TBQOuiLyw7Wmna3k-2J5QHP6KAsi0D1DutYh3vBhtSg_-bC7d-pbIJqjBHQobS_GFX2UYnJoGvAyKUZ38XBU7o",
    //                 "width" : 4032
    //              }
    //           ],
    //           "place_id" : "ChIJi-KX2EBT5okRqE1YVErRveM",
    //           "plus_code" : {
    //              "compound_code" : "Q86C+2V Hartford, Connecticut",
    //              "global_code" : "87H9Q86C+2V"
    //           },
    //           "rating" : 3.7,
    //           "reference" : "ChIJi-KX2EBT5okRqE1YVErRveM",
    //           "scope" : "GOOGLE",
    //           "types" : [
    //              "meal_takeaway",
    //              "restaurant",
    //              "food",
    //              "point_of_interest",
    //              "establishment"
    //           ],
    //           "user_ratings_total" : 3,
    //           "vicinity" : "131 Buckingham St, Hartford"
    //        },
    //        {
    //           "business_status" : "OPERATIONAL",
    //           "geometry" : {
    //              "location" : {
    //                 "lat" : 41.768501,
    //                 "lng" : -72.67824899999999
    //              },
    //              "viewport" : {
    //                 "northeast" : {
    //                    "lat" : 41.76979722989272,
    //                    "lng" : -72.67692767010728
    //                 },
    //                 "southwest" : {
    //                    "lat" : 41.76709757010727,
    //                    "lng" : -72.67962732989271
    //                 }
    //              }
    //           },
    //           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    //           "icon_background_color" : "#FF9E67",
    //           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    //           "name" : "Aladdin Halal",
    //           "opening_hours" : {
    //              "open_now" : true
    //           },
    //           "photos" : [
    //              {
    //                 "height" : 1960,
    //                 "html_attributions" : [
    //                    "\u003ca href=\"https://maps.google.com/maps/contrib/114519390658648640541\"\u003eDayana Sanchez\u003c/a\u003e"
    //                 ],
    //                 "photo_reference" : "Aap_uEAdQyvHVEwsAFqlpkaOXFGPl4u3FqCwdE6yRGmT190R1evATUDTNDioOH46mc_NjPCQIal3uvUyVVsbSXv0yVZJXoIdBcPB6XhH0wWDyWw_7FGLCZyTxSsk0Fdt0vfBlYSFlaQmB6iYyL7W9N2l8N5kgN35AmY6A-6uDT5tWigdJJbT",
    //                 "width" : 4032
    //              }
    //           ],
    //           "place_id" : "ChIJtw-m-WNT5okRkewTpir1lAQ",
    //           "plus_code" : {
    //              "compound_code" : "Q89C+CP Hartford, Connecticut",
    //              "global_code" : "87H9Q89C+CP"
    //           },
    //           "price_level" : 1,
    //           "rating" : 4,
    //           "reference" : "ChIJtw-m-WNT5okRkewTpir1lAQ",
    //           "scope" : "GOOGLE",
    //           "types" : [
    //              "meal_delivery",
    //              "meal_takeaway",
    //              "restaurant",
    //              "food",
    //              "point_of_interest",
    //              "establishment"
    //           ],
    //           "user_ratings_total" : 757,
    //           "vicinity" : "100 Allyn St, Hartford"
    //        },
    //        {
    //           "business_status" : "OPERATIONAL",
    //           "geometry" : {
    //              "location" : {
    //                 "lat" : 41.7638893,
    //                 "lng" : -72.66956279999999
    //              },
    //              "viewport" : {
    //                 "northeast" : {
    //                    "lat" : 41.76523492989271,
    //                    "lng" : -72.66785127010726
    //                 },
    //                 "southwest" : {
    //                    "lat" : 41.76253527010727,
    //                    "lng" : -72.67055092989271
    //                 }
    //              }
    //           },
    //           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    //           "icon_background_color" : "#FF9E67",
    //           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    //           "name" : "Vivo Seasonal Trattoria",
    //           "opening_hours" : {
    //              "open_now" : true
    //           },
    //           "photos" : [
    //              {
    //                 "height" : 4608,
    //                 "html_attributions" : [
    //                    "\u003ca href=\"https://maps.google.com/maps/contrib/110401246007573928151\"\u003eDeep Dand\u003c/a\u003e"
    //                 ],
    //                 "photo_reference" : "Aap_uECb7lb_0nkjLIB-8fmLvWyZRGEM2ANeecsj0zX7EQ4PcbrljWtPU8zHd4_Ay0oZzejkhlqRHOOOsY_t01mkOYvJN5oMFvaCQylHVHZKxUuBrvmsu0EAALp7hMu-GEw__AIdB_Z0nh3DVh8b5OXaiDKrSdaycKVYZIfKz7s8xshsJncN",
    //                 "width" : 3456
    //              }
    //           ],
    //           "place_id" : "ChIJdUh3N3pT5okRP1-O5EiOzCw",
    //           "plus_code" : {
    //              "compound_code" : "Q87J+H5 Hartford, Connecticut",
    //              "global_code" : "87H9Q87J+H5"
    //           },
    //           "price_level" : 3,
    //           "rating" : 4.2,
    //           "reference" : "ChIJdUh3N3pT5okRP1-O5EiOzCw",
    //           "scope" : "GOOGLE",
    //           "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
    //           "user_ratings_total" : 91,
    //           "vicinity" : "200 Columbus Blvd, Hartford"
    //        },
    //        {
    //           "business_status" : "OPERATIONAL",
    //           "geometry" : {
    //              "location" : {
    //                 "lat" : 41.76544519999999,
    //                 "lng" : -72.6761025
    //              },
    //              "viewport" : {
    //                 "northeast" : {
    //                    "lat" : 41.76680307989272,
    //                    "lng" : -72.67481162010728
    //                 },
    //                 "southwest" : {
    //                    "lat" : 41.76410342010728,
    //                    "lng" : -72.67751127989271
    //                 }
    //              }
    //           },
    //           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    //           "icon_background_color" : "#FF9E67",
    //           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    //           "name" : "Salute",
    //           "opening_hours" : {
    //              "open_now" : true
    //           },
    //           "photos" : [
    //              {
    //                 "height" : 1536,
    //                 "html_attributions" : [
    //                    "\u003ca href=\"https://maps.google.com/maps/contrib/110138466085086947383\"\u003ePaul Meijer\u003c/a\u003e"
    //                 ],
    //                 "photo_reference" : "Aap_uEA79umrYom54ueXTgTKTK4fEgMfLaonVnk0axD5JbirmAxQ2VN2IKvkuRDF4MXBUy9YRLMx6PaW9yHU2OnCjWn2zbKnZ6Kj5O4XaFAL6iT9c2u3V-KTswtLYaqaWWitLGpUUWPNHfiNJ5sufh5i_UPtlvX4qU2WPs9qFBpPV_oEnkCo",
    //                 "width" : 2048
    //              }
    //           ],
    //           "place_id" : "ChIJtVyy42RT5okRU1lFa7ZzYk0",
    //           "plus_code" : {
    //              "compound_code" : "Q88F+5H Hartford, Connecticut",
    //              "global_code" : "87H9Q88F+5H"
    //           },
    //           "price_level" : 2,
    //           "rating" : 4.7,
    //           "reference" : "ChIJtVyy42RT5okRU1lFa7ZzYk0",
    //           "scope" : "GOOGLE",
    //           "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
    //           "user_ratings_total" : 1663,
    //           "vicinity" : "100 Trumbull St, Hartford"
    //        },
    //        {
    //           "business_status" : "OPERATIONAL",
    //           "geometry" : {
    //              "location" : {
    //                 "lat" : 41.7675885,
    //                 "lng" : -72.6744539
    //              },
    //              "viewport" : {
    //                 "northeast" : {
    //                    "lat" : 41.76879177989272,
    //                    "lng" : -72.67322392010728
    //                 },
    //                 "southwest" : {
    //                    "lat" : 41.76609212010728,
    //                    "lng" : -72.67592357989273
    //                 }
    //              }
    //           },
    //           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    //           "icon_background_color" : "#FF9E67",
    //           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    //           "name" : "Sunberry Cafe & Catering",
    //           "opening_hours" : {
    //              "open_now" : false
    //           },
    //           "photos" : [
    //              {
    //                 "height" : 4032,
    //                 "html_attributions" : [
    //                    "\u003ca href=\"https://maps.google.com/maps/contrib/101443884178866823947\"\u003eA Google User\u003c/a\u003e"
    //                 ],
    //                 "photo_reference" : "Aap_uEBy_jir9B4M3V129jYN6EnQqeg14baRTY4epBXCXoCFvOq-tjfRf92Yx5L2A6tXtM99Tgze2-rjVSNQ8kSTLsQTtPysog9JAMjirW6x6vbNaqUKhey76B3DwgU-lP2wRz14_Hw6YkokwSPifB-NcJOjhMdiFW5dwurwKPd1W-Np9Vv8",
    //                 "width" : 3024
    //              }
    //           ],
    //           "place_id" : "ChIJQd-dVWNT5okRi-nvV2LoQys",
    //           "plus_code" : {
    //              "compound_code" : "Q89G+26 Hartford, Connecticut",
    //              "global_code" : "87H9Q89G+26"
    //           },
    //           "price_level" : 2,
    //           "rating" : 4.5,
    //           "reference" : "ChIJQd-dVWNT5okRi-nvV2LoQys",
    //           "scope" : "GOOGLE",
    //           "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
    //           "user_ratings_total" : 228,
    //           "vicinity" : "65 Pratt St, Hartford"
    //        },
    //        {
    //           "business_status" : "OPERATIONAL",
    //           "geometry" : {
    //              "location" : {
    //                 "lat" : 41.7667208,
    //                 "lng" : -72.6754406
    //              },
    //              "viewport" : {
    //                 "northeast" : {
    //                    "lat" : 41.76804697989272,
    //                    "lng" : -72.67422782010728
    //                 },
    //                 "southwest" : {
    //                    "lat" : 41.76534732010727,
    //                    "lng" : -72.67692747989273
    //                 }
    //              }
    //           },
    //           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    //           "icon_background_color" : "#FF9E67",
    //           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    //           "name" : "Trumbull Kitchen",
    //           "opening_hours" : {
    //              "open_now" : false
    //           },
    //           "photos" : [
    //              {
    //                 "height" : 3963,
    //                 "html_attributions" : [
    //                    "\u003ca href=\"https://maps.google.com/maps/contrib/100230472711691894709\"\u003eDatFitFiLiPiNa AubreY\u003c/a\u003e"
    //                 ],
    //                 "photo_reference" : "Aap_uEAHJ-ozk1KYDKHW66RpROwkgFS5FUfpzrBkwO1KKa64bH4dp4wVUu998nq9N459LLQ1wWlGCpNmlfRyO_BEXUNzbajoIFFdz-3WYVHk3WLopgQ5-CHROEwZJ5vChvoHrPfRka7I7hzMO_6nNAPpz1qmm2b1t0y5dS8uH7qSAATd5ppK",
    //                 "width" : 3024
    //              }
    //           ],
    //           "place_id" : "ChIJiW5avmRT5okRsNYQAVx5xXI",
    //           "plus_code" : {
    //              "compound_code" : "Q88F+MR Hartford, Connecticut",
    //              "global_code" : "87H9Q88F+MR"
    //           },
    //           "price_level" : 2,
    //           "rating" : 4.4,
    //           "reference" : "ChIJiW5avmRT5okRsNYQAVx5xXI",
    //           "scope" : "GOOGLE",
    //           "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
    //           "user_ratings_total" : 880,
    //           "vicinity" : "150 Trumbull St, Hartford"
    //        },
    //        {
    //           "business_status" : "OPERATIONAL",
    //           "geometry" : {
    //              "location" : {
    //                 "lat" : 41.7680092,
    //                 "lng" : -72.6732598
    //              },
    //              "viewport" : {
    //                 "northeast" : {
    //                    "lat" : 41.76936712989271,
    //                    "lng" : -72.6718225701073
    //                 },
    //                 "southwest" : {
    //                    "lat" : 41.76666747010727,
    //                    "lng" : -72.67452222989273
    //                 }
    //              }
    //           },
    //           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    //           "icon_background_color" : "#FF9E67",
    //           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    //           "name" : "Juices + Acai Bowls",
    //           "opening_hours" : {
    //              "open_now" : false
    //           },
    //           "photos" : [
    //              {
    //                 "height" : 780,
    //                 "html_attributions" : [
    //                    "\u003ca href=\"https://maps.google.com/maps/contrib/110084364674028737640\"\u003eJonathan Rosenfeld\u003c/a\u003e"
    //                 ],
    //                 "photo_reference" : "Aap_uEAFnccH6cYl_kIo5Fr8opdWoQKds8m3Ap87lcFQ8xfB7POZ1-EnKXxcHS0JeM-I5DednyKnSs26tr67GSVT0CcI2d6lBNotreJKBdYNhx09RzjdGELJexUC3tVWCAhOqCaSVy7aKnoGwBs9VgR7IUHZwhKB5ShsmPCWS8h5mA6RpS1r",
    //                 "width" : 1006
    //              }
    //           ],
    //           "place_id" : "ChIJvYW-J2hT5okRrpJ3zgy7W8s",
    //           "plus_code" : {
    //              "compound_code" : "Q89G+6M Hartford, Connecticut",
    //              "global_code" : "87H9Q89G+6M"
    //           },
    //           "rating" : 4.4,
    //           "reference" : "ChIJvYW-J2hT5okRrpJ3zgy7W8s",
    //           "scope" : "GOOGLE",
    //           "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
    //           "user_ratings_total" : 92,
    //           "vicinity" : "915 Main St, Hartford"
    //        }
    //     ],
    //     "status" : "OK"
    //  }
    // return fetch(`https://cors.bridged.cc/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.7658,-72.6734&radius=500&type=restaurant&keyword=${query}&key=AIzaSyBDhheGyZ1A_-E4vfpS3saQRGebunq5krE`);
  };

  // yelpApiKey="1w6Jlu9SwNHeYjADhK3mR4sAYx1Ol9h8mrfH1WZLx1mwgd8tnehX56aihPDc1IgxZYAqnsHyvoYA_QgrfPm8Mpei4RYNT5llk_Jpz9fdl3asSYoPEOC3P4SNZRC6YnYx"