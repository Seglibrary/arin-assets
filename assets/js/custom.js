/* === Arin Nature Custom JS — Quka Build === */
/**
 * Arın Nature — Ürün Veritabanı
 */
const PRODUCTS = [
  {
    "id": 1,
    "slug": "saf-defne",
    "name": "%100 Defne Sabunu",
    "category": [
      "yuz",
      "vucut",
      "sac"
    ],
    "price": 400,
    "badge": "Geleneksel",
    "shortDesc": "Saf defne yağı ile hazırlanan geleneksel sabun.",
    "description": "Yüzyıllardır Akdeniz kültürünün vazgeçilmezi olan defne sabunu, saf defne yağının antiseptik ve nemlendirici özellikleriyle cildinizi korur. Egzama ve sedef hastalığı gibi cilt problemlerine destek olur. Tüm cilt tipleri için uygundur.",
    "ingredients": "Defne yağı, Defne yaprakları, Defne suyu, Sodyum Hidroksit (Kostik), Su, Hindistan Cevizi Yağı, Shea Butter Yağı, Doğal Gliserin, Tuz",
    "usage": "Islak cilde köpürterek uygulayın. Yüz, vücut ve saç yıkama için kullanılabilir.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/saf-defne/shop-main.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/saf-defne/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/saf-defne/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/saf-defne/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/saf-defne/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/saf-defne/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/saf-defne/shop-gallery-5.jpeg"
    ]
  },
  {
    "slug": "acibadem",
    "name": "Acı Badem Sabunu",
    "category": [
      "yuz",
      "vucut"
    ],
    "badge": "Nemlendirici",
    "shortDesc": "Yoğun nemlendirici özellikli acı badem sabunu.",
    "description": "Özellikle kuru ciltleri derinlemesine nemlendirir ve cildi yumuşatır.",
    "ingredients": "Acı badem yağı, Zeytinyağı, Hindistan Cevizi Yağı",
    "usage": "Günlük kullanım için uygundur.",
    "price": 230,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/acibadem/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/acibadem/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/acibadem/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/acibadem/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/acibadem/shop-gallery-4.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/acibadem/shop-gallery-3.jpeg",
    "id": 2
  },
  {
    "id": 3,
    "slug": "aktif-karbon",
    "name": "Aktif Karbon Sabunu",
    "category": [
      "yuz"
    ],
    "price": 230,
    "badge": "Popüler",
    "shortDesc": "Derin gözenek temizliği için aktif karbonlu sabun.",
    "description": "Aktif karbon, ciltteki toksinleri ve fazla yağı adsorbe ederek gözeneklerin derinlemesine temizlenmesini sağlar. Yağlı ve karma ciltler için ideal olan bu sabun, sivilce ve siyah nokta oluşumunu azaltmaya yardımcı olur.",
    "ingredients": "Kömür, Su, Shea Butter Yağ, Hindistan Cevizi Yağı, Zeytinyağı, Sodyum Hidroksit (Kostik), Doğal Gliserin, Tuz",
    "usage": "Islak yüze nazikçe masaj yaparak köpürterek uygulayın. Günde 1-2 kez kullanabilirsiniz.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/aktif-karbon/shop-gallery-2.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/aktif-karbon/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/aktif-karbon/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/aktif-karbon/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/aktif-karbon/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/aktif-karbon/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/aktif-karbon/shop-gallery-5.jpeg"
    ]
  },
  {
    "id": 4,
    "slug": "katran",
    "name": "Ardıç Katranı Sabunu",
    "category": [
      "sac",
      "vucut"
    ],
    "price": 250,
    "badge": "",
    "shortDesc": "Ardıç katranlı, kepek ve egzama karşıtı sabun.",
    "description": "Geleneksel yöntemlerle elde edilen ardıç katranı içeren bu sabun, saç derisindeki kepek, kaşıntı ve pullanma sorunlarına karşı son derece etkilidir. Sorunlu cilt tipleri için yatıştırıcıdır.",
    "ingredients": "Zeytinyağı, Hindistan Cevizi Yağı, Ardıç katranı, Ardıç yağı, Ardıç özü, Sodyum Hidroksit (Kostik), Su, Shea Butter Yağı, Doğal Gliserin, Tuz",
    "usage": "Saç derisine köpürterek uygulayın ve birkaç dakika bekletip durulayın.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/katran/shop-gallery-1.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/katran/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/katran/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/katran/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/katran/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/katran/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/katran/shop-gallery-5.jpeg"
    ]
  },
  {
    "id": 5,
    "slug": "argan",
    "name": "Argan Sabunu",
    "category": [
      "sac",
      "yuz"
    ],
    "price": 250,
    "badge": "Premium",
    "shortDesc": "Fas argan yağlı, yoğun onarıcı bakım sabunu.",
    "description": "Sıvı altın olarak bilinen argan yağı ile zenginleştirilmiş formülü sayesinde saçları kökten uca onarır, cilde elastikiyet kazandırır. Yıpranmış saçlar ve kuru ciltler için mükemmeldir.",
    "ingredients": "Argan yağı, Arıtılmış su, Sodyum Hidroksit (Kostik), Zeytinyağı, Hindistan Cevizi Yağı, Shea Butter Yağı, Doğal Gliserin, Tuz",
    "usage": "Saç veya vücut üzerinde köpürterek uygulayın. Özellikle saç uçlarındaki kırıklar için besleyicidir.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/argan/shop-gallery-3.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/argan/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/argan/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/argan/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/argan/shop-gallery-2.jpeg"
    ]
  },
  {
    "id": 6,
    "slug": "bal",
    "name": "Bal Sabunu",
    "category": [
      "yuz",
      "vucut"
    ],
    "price": 300,
    "badge": "",
    "shortDesc": "Nemlendirici bal özlü, cildi besleyen doğal sabun.",
    "description": "Doğal balın eşsiz nemlendirici ve antibakteriyel özellikleriyle zenginleştirilmiş bu sabun, cildinizi yumuşacık ve pürüzsüz hale getirir. Kuru ve hassas ciltler için özellikle önerilen, besleyici formülüyle kışın bile cildinizin kurumasını önler.",
    "ingredients": "Bal, Arıtılmış su, Sodyum Hidroksit (Kostik), Shea Butter Yağ, Hindistan Cevizi Yağı, Zeytinyağı, Doğal Gliserin, Tuz",
    "usage": "Islak cilde uygulayın. Yüz ve vücut için uygundur. Hassas ciltler için günlük kullanıma uygundur.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/bal/shop-gallery-3.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/bal/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/bal/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/bal/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/bal/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/bal/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/bal/shop-gallery-5.jpeg"
    ]
  },
  {
    "slug": "bittim",
    "name": "Bıttım Sabunu",
    "category": [
      "sac"
    ],
    "badge": "",
    "shortDesc": "Doğal bıttım yağından elde edilen saç dökülmesine karşı sabun.",
    "description": "Bıttım yağı saçları güçlendirir ve dökülmeyi önemli ölçüde yavaşlatır.",
    "ingredients": "Bıttım yağı, Zeytinyağı",
    "usage": "Saça köpürterek uygulayın.",
    "price": 150,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/bittim/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/bittim/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/bittim/shop-gallery-2.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/bittim/shop-main.jpeg",
    "id": 7
  },
  {
    "id": 8,
    "slug": "biberiye",
    "name": "Biberiye Sabunu",
    "category": [
      "sac"
    ],
    "price": 230,
    "badge": "",
    "shortDesc": "Saç dökülmesine karşı biberiye özlü sabun.",
    "description": "Biberiye bitkisinin saç köklerini güçlendirici ve saç derisini canlandırıcı etkileriyle formüle edilen bu sabun, saç bakım rutininize doğal bir çözüm sunar. Saç dökülmesini azaltır, saçlarınıza hacim ve parlaklık katar.",
    "ingredients": "Zeytinyağı, Hindistan Cevizi Yağı, Biberiye yağı, Biberiye yaprakları, Biberiye suyu, Sodyum Hidroksit (Kostik), Su, Doğal Gliserin, Tuz, Shea Butter Yağı",
    "usage": "Islak saça köpürterek uygulayın. Saç derisine masaj yaparak 2-3 dakika bekletin. Durulayin.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/biberiye/shop-gallery-3.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/biberiye/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/biberiye/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/biberiye/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/biberiye/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/biberiye/shop-gallery-4.jpeg"
    ]
  },
  {
    "id": 9,
    "slug": "cayagaci",
    "name": "Çay Ağacı Sabunu",
    "category": [
      "yuz",
      "vucut"
    ],
    "price": 250,
    "badge": "Yeni",
    "shortDesc": "Çay ağacı yağlı, anti-bakteriyel doğal sabun.",
    "description": "Avustralya'nın Çay Ağacı (Tea Tree) yağının güçlü anti-bakteriyel ve anti-fungal özellikleriyle formüle edilen bu sabun, akneli ve problemli ciltler için en doğal çözümdür. Cildi arındırır, gözenekleri temizler.",
    "ingredients": "Çay ağacı yağı, Çay ağacı yaprakları, Arıtılmış su, Sodyum Hidroksit (Kostik), Zeytinyağı, Hindistan Cevizi Yağı, Shea Butter Yağı, Doğal Gliserin, Tuz",
    "usage": "Islak yüze nazikçe masaj yaparak uygulayın. Sivilce bölgelerinde 1 dakika bekletip durulayın.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/cayagaci/shop-main.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/cayagaci/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/cayagaci/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/cayagaci/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/cayagaci/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/cayagaci/shop-gallery-4.jpeg"
    ]
  },
  {
    "id": 10,
    "slug": "corek-otu",
    "name": "Çörek Otu Sabunu",
    "category": [
      "sac",
      "vucut"
    ],
    "price": 250,
    "badge": "",
    "shortDesc": "Çörek otu yağlı, saç ve cilt bakım sabunu.",
    "description": "Çörek otunun binlerce yıldır bilinen şifalı özelliklerini cildinize taşıyan bu sabun, anti-bakteriyel ve anti-inflamatuar etkileri ile cilt sağlığını destekler. Saç bakımında da dökülmeye karşı etkili bir çözüm sunar.",
    "ingredients": "Zeytinyağı, Hindistan Cevizi Yağı, Çörek otu yağı, Çörek otu taneleri, Sodyum Hidroksit (Kostik), Su, Doğal Gliserin, Tuz",
    "usage": "Islak cilde veya saça köpürterek uygulayın. Saç bakımı için haftada 2-3 kez kullanım önerilir.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/corek-otu/shop-gallery-4.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/corek-otu/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/corek-otu/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/corek-otu/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/corek-otu/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/corek-otu/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/corek-otu/shop-gallery-5.jpeg"
    ]
  },
  {
    "slug": "defne",
    "name": "Defne Sabunu",
    "category": [
      "yuz",
      "vucut",
      "sac"
    ],
    "badge": "",
    "shortDesc": "Gerçek defne yağı ile antiseptik ve temizleyici sabun.",
    "description": "Cildi arındırır, ferahlatır ve gözenekleri derinlemesine temizler.",
    "ingredients": "Defne yağı, Zeytinyağı",
    "usage": "Tüm vücutta günlük olarak kullanılabilir.",
    "price": 150,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/defne/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/defne/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/defne/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/defne/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/defne/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/defne/shop-gallery-5.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/defne/shop-gallery-2.jpeg",
    "id": 11
  },
  {
    "id": 12,
    "slug": "kabak-lifi",
    "name": "Doğal Kabak Lifi",
    "category": [
      "vucut"
    ],
    "price": 130,
    "badge": "Aksesuar",
    "shortDesc": "Ölü derileri arındıran, kan dolaşımını hızlandıran doğal banyo lifi.",
    "description": "Tamamen doğal yollarla kurutulmuş kabak lifi, harika bir peeling (soyucu) etkisi yaratır. Sabunlarımızla birlikte kullanıldığında batıkları engeller, kan dolaşımını hızlandırır ve düzenli kullanımda selülit oluşumunu azaltmaya yardımcı olur. Sentetik süngerlerin aksine doğada çözünebilir ve cilde zarar vermez.",
    "ingredients": "%100 Doğal Kurutulmuş Kabak Lifi",
    "usage": "Sıcak suda birkaç dakika bekleterek yumuşatın. Üzerine doğal sabununuzu sürün ve dairesel hareketlerle cildinize masaj yaparak uygulayın.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kabak-lifi/shop-main.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kabak-lifi/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kabak-lifi/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kabak-lifi/shop-gallery-2.jpeg"
    ]
  },
  {
    "slug": "esek-sutu",
    "name": "Eşek Sütü Sabunu",
    "category": [
      "yuz",
      "vucut"
    ],
    "badge": "Premium",
    "shortDesc": "Cilt lekelerine karşı etkili eşek sütü sabunu.",
    "description": "Zengin vitamin içeriğiyle hücre yenilenmesini destekler ve pürüzsüz bir cilt sağlar.",
    "ingredients": "Doğal Eşek Sütü, Zeytinyağı, Gliserin",
    "usage": "Sabah ve akşam yüze uygulanabilir.",
    "price": 250,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/esek-sutu/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/esek-sutu/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/esek-sutu/shop-gallery-1.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/esek-sutu/shop-gallery-2.jpeg",
    "id": 13
  },
  {
    "id": 14,
    "slug": "gul",
    "name": "Gül Sabunu",
    "category": [
      "yuz",
      "vucut"
    ],
    "price": 250,
    "badge": "Yeni",
    "shortDesc": "Gül özleriyle zenginleştirilmiş, cildi besleyen sabun.",
    "description": "Gerçek gül suyu ve gül yağı içeren bu zarif sabun, cildi derinlemesine nemlendirirken pürüzsüz bir dokunuş sağlar. Hoş kokusuyla rahatlatır ve yorgun cildi canlandırır.",
    "ingredients": "Zeytinyağı, Hindistan Cevizi Yağı, Shea Butter Yağ, Gül yağı, Gül suyu, Gül yaprakları, Sodyum Hidroksit (Kostik), Su, Doğal Gliserin, Tuz",
    "usage": "Islak yüze köpürterek uygulayın. Günlük yüz bakımı için idealdir.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/gul/shop-main.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/gul/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/gul/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/gul/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/gul/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/gul/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/gul/shop-gallery-5.jpeg"
    ]
  },
  {
    "id": 15,
    "slug": "halep",
    "name": "Halep Sabunu",
    "category": [
      "vucut",
      "sac",
      "yuz"
    ],
    "price": 150,
    "badge": "Premium",
    "shortDesc": "Geleneksel Halep usulü defne ve zeytinyağlı sabun.",
    "description": "Binlerce yıllık Halep sabun geleneğinin en saf hali. Zeytinyağı ve defne yağının mükemmel uyumundan doğan bu sabun, cildi derinlemesine temizlerken doğal nemini korur. Hassas ve problemli ciltler için idealdir.",
    "ingredients": "Zeytinyağı, Defne yağı, Arıtılmış su, Sodyum Hidroksit (Kostik), Hindistan Cevizi Yağı, Shea Butter Yağı, Doğal Gliserin, Tuz",
    "usage": "Islak cilde uygulayın. Tüm cilt tipleri ve saç yıkama için uygundur. Minimum 6 ay dinlendirilmiştir.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/halep/shop-gallery-1.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/halep/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/halep/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/halep/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/halep/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/halep/shop-gallery-4.jpeg"
    ]
  },
  {
    "slug": "hashasli-peeling",
    "name": "Haşhaşlı Peeling Sabunu",
    "category": [
      "vucut"
    ],
    "badge": "Peeling",
    "shortDesc": "Ölü derileri arındıran haşhaş tanecikli sabun.",
    "description": "Gerçek haşhaş tohumları sayesinde cildinizde nazik bir peeling etkisi yaratır.",
    "ingredients": "Haşhaş tohumları, Zeytinyağı, Hindistan Cevizi Yağı",
    "usage": "Cilde dairesel hareketlerle masaj yaparak uygulayın.",
    "price": 230,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hashasli-peeling/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hashasli-peeling/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hashasli-peeling/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hashasli-peeling/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hashasli-peeling/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hashasli-peeling/shop-gallery-5.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hashasli-peeling/shop-gallery-6.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hashasli-peeling/shop-gallery-7.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hashasli-peeling/shop-gallery-1.jpeg",
    "id": 16
  },
  {
    "slug": "isirgan",
    "name": "Isırgan Sabunu",
    "category": [
      "sac",
      "vucut"
    ],
    "badge": "",
    "shortDesc": "Saç dökülmesine karşı etkili, doğal ısırgan özlü sabun.",
    "description": "Doğal ısırgan otu özleriyle hazırlanan bu sabun, saç derisini canlandırır ve saç dökülmesini önlemeye yardımcı olur.",
    "ingredients": "Isırgan özü, Zeytinyağı, Hindistan Cevizi Yağı, Doğal Gliserin",
    "usage": "Islak saça köpürterek uygulayın, durulayın.",
    "price": 230,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/isirgan/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/isirgan/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/isirgan/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/isirgan/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/isirgan/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/isirgan/shop-gallery-5.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/isirgan/shop-gallery-6.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/isirgan/shop-gallery-7.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/isirgan/shop-gallery-8.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/isirgan/shop-gallery-9.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/isirgan/shop-main.jpeg",
    "id": 17
  },
  {
    "id": 18,
    "slug": "kayisi",
    "name": "Kayısı Sabunu",
    "category": [
      "vucut",
      "yuz"
    ],
    "price": 230,
    "badge": "",
    "shortDesc": "Kayısı çekirdeği yağlı, besleyici doğal sabun.",
    "description": "Malatya kayısısının çekirdeğinden elde edilen yağın A ve E vitaminleri açısından zengin içeriğiyle cildinizi besler ve yumuşatır. Kuru ve hassas ciltler için özel olarak formüle edilmiştir.",
    "ingredients": "Kayısı yağı, Kayısı çekirdeği tozu, Sodyum Hidroksit (Kostik), Su, Zeytinyağı, Hindistan Cevizi Yağı, Shea Butter Yağı, Doğal Gliserin, Tuz",
    "usage": "Islak cilde köpürterek uygulayın. Yüz ve vücut temizliği için uygundur.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kayisi/shop-gallery-3.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kayisi/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kayisi/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kayisi/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kayisi/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kayisi/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kayisi/shop-gallery-5.jpeg"
    ]
  },
  {
    "slug": "keci-sutu",
    "name": "Keçi Sütü Sabunu",
    "category": [
      "yuz",
      "vucut"
    ],
    "badge": "",
    "shortDesc": "Hassas ciltler için nemlendirici keçi sütü sabunu.",
    "description": "Ciltteki kuruluk ve kaşıntıyı yatıştırır, doğal bir nem kalkanı oluşturur.",
    "ingredients": "Doğal Keçi Sütü, Zeytinyağı, Hindistan Cevizi Yağı",
    "usage": "Bebekler ve hassas ciltler için uygundur.",
    "price": 230,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/keci-sutu/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/keci-sutu/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/keci-sutu/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/keci-sutu/shop-gallery-2.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/keci-sutu/shop-gallery-3.jpeg",
    "id": 19
  },
  {
    "slug": "kekik",
    "name": "Kekik Sabunu",
    "category": [
      "yuz",
      "vucut",
      "sac"
    ],
    "badge": "Arındırıcı",
    "shortDesc": "Güçlü antibakteriyel özellikli doğal kekik sabunu.",
    "description": "Kekik bitkisinin arındırıcı etkisi ile problemli ciltlere doğal çözüm sunar.",
    "ingredients": "Kekik yağı ve yaprakları, Zeytinyağı",
    "usage": "İhtiyaç duyulan bölgelere köpürterek uygulayın.",
    "price": 230,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kekik/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kekik/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kekik/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kekik/shop-gallery-2.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kekik/shop-gallery-3.jpeg",
    "id": 20
  },
  {
    "id": 21,
    "slug": "kil",
    "name": "Kil Sabunu",
    "category": [
      "yuz"
    ],
    "price": 120,
    "badge": "",
    "shortDesc": "Doğal kil ile gözenek arındırıcı yüz sabunu.",
    "description": "İçeriğindeki mineral zengini doğal kil ile cildi derinlemesine temizler, yağ dengesini sağlar. Genişlemiş gözenekleri sıkılaştırmaya ve siyah noktaları gidermeye yardımcı olur.",
    "ingredients": "Kil, Arıtılmış su, Sodyum Hidroksit (Kostik), Shea Butter Yağ, Hindistan Cevizi Yağı, Zeytinyağı, Doğal Gliserin, Tuz",
    "usage": "Islak yüze uygulayıp bir dakika kadar maske gibi bekletin, ardından durulayın.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kil/shop-main.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kil/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kil/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kil/shop-gallery-2.jpeg"
    ]
  },
  {
    "id": 22,
    "slug": "kukurt-katran",
    "name": "Kükürt Sabunu",
    "category": [
      "yuz",
      "vucut"
    ],
    "price": 230,
    "badge": "Popüler",
    "shortDesc": "Sivilce ve akneye eğilimli ciltler için özel formül.",
    "description": "Kükürtün bilinen arındırıcı etkisiyle, özellikle yağlı, akne ve sivilceye meyilli ciltlerin günlük temizliği için formüle edilmiştir. Cildin fazla yağını alarak mat bir görünüm sağlar.",
    "ingredients": "Kükürt tozu, Ardıç katranı, Arıtılmış su, Sodyum Hidroksit (Kostik), Shea Butter Yağ, Hindistan Cevizi Yağı, Zeytinyağı, Doğal Gliserin, Tuz",
    "usage": "Sadece problemli bölgelere veya tüm yüze uygulayın. Kuru ciltler için sonrasında nemlendirici önerilir.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kukurt-katran/shop-gallery-2.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kukurt-katran/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kukurt-katran/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kukurt-katran/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kukurt-katran/shop-gallery-3.jpeg"
    ]
  },
  {
    "id": 23,
    "slug": "lavanta",
    "name": "Lavanta Sabunu",
    "category": [
      "yuz",
      "vucut"
    ],
    "price": 230,
    "badge": "Çok Satan",
    "shortDesc": "Rahatlatıcı lavanta özlü, el yapımı doğal sabun.",
    "description": "Tarlalardan özenle toplanan lavanta çiçeklerinin sakinleştirici etkisiyle hazırlanan bu sabun, cildinizi nazikçe temizlerken gün boyu ferahlatıcı bir koku bırakır. Stresli bir günün ardından banyo ritüelinizin vazgeçilmezi olacak.",
    "ingredients": "Zeytinyağı, Shea Butter Yağ, Hindistan Cevizi Yağı, Lavanta yağı, Lavanta çiçekleri, Sodyum Hidroksit (Kostik), Su, Doğal Gliserin, Tuz",
    "usage": "Islak cilde köpürterek uygulayın. Yüz ve vücut temizliği için uygundur. Göz çevresinden kaçının.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/lavanta/shop-gallery-2.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/lavanta/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/lavanta/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/lavanta/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/lavanta/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/lavanta/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/lavanta/shop-gallery-5.jpeg"
    ]
  },
  {
    "id": 24,
    "slug": "limon",
    "name": "Limon Sabunu",
    "category": [
      "vucut",
      "yuz"
    ],
    "price": 240,
    "badge": "Ferah",
    "shortDesc": "Tazeleyici limon özlü, enerji veren sabun.",
    "description": "Gerçek limon kabukları ve limon yağıyla hazırlanan bu sabun, içerdiği C vitaminiyle cilde canlılık verir. Tazeleyici narenciye kokusuyla güne enerjik başlamanızı sağlar.",
    "ingredients": "Limon yağı, Limon kabuğu rendesi, Limon suyu, Sodyum Hidroksit (Kostik), Su, Shea Butter Yağ, Hindistan Cevizi Yağı, Zeytinyağı, Doğal Gliserin, Tuz",
    "usage": "Yüz ve vücut için uygundur. Yağlı cilt tipleri için özellikle tavsiye edilir.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/limon/shop-gallery-3.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/limon/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/limon/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/limon/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/limon/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/limon/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/limon/shop-gallery-5.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/limon/shop-gallery-6.jpeg"
    ]
  },
  {
    "id": 25,
    "slug": "mardin-bittim",
    "name": "Mardin Bıttım Sabunu",
    "category": [
      "sac",
      "vucut"
    ],
    "price": 250,
    "badge": "Yöresel",
    "shortDesc": "Mardin'in hakiki menengiç yağıyla üretilmiş sabun.",
    "description": "Güneydoğu Anadolu'nun yabani fıstığı olan bıttım (menengiç) yağından elde edilir. Saç dökülmesini durdurmaya yardımcı olur ve ince telli saçları güçlendirerek hacim kazandırır.",
    "ingredients": "Bıttım yağı (Menengiç), Arıtılmış su, Sodyum Hidroksit (Kostik), Zeytinyağı, Hindistan Cevizi Yağı, Shea Butter Yağı, Doğal Gliserin, Tuz",
    "usage": "Saçlarınızı köpürtüp saç derisine masaj yapın. İki günde bir kullanımı idealdir.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/mardin-bittim/shop-main.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/mardin-bittim/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/mardin-bittim/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/mardin-bittim/shop-gallery-2.jpeg"
    ]
  },
  {
    "slug": "nar",
    "name": "Nar Sabunu",
    "category": [
      "yuz",
      "vucut"
    ],
    "badge": "",
    "shortDesc": "Cildi besleyen anti-aging etkili nar özlü sabun.",
    "description": "Nar çekirdeği yağı sayesinde cildi besler ve kırışıklık oluşumunu geciktirir.",
    "ingredients": "Nar çekirdeği yağı, Zeytinyağı, Doğal Gliserin",
    "usage": "Islak cilde uygulayın.",
    "price": 230,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/nar/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/nar/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/nar/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/nar/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/nar/shop-gallery-4.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/nar/shop-gallery-3.jpeg",
    "id": 26
  },
  {
    "slug": "okaliptus",
    "name": "Okaliptus Sabunu",
    "category": [
      "vucut"
    ],
    "badge": "Ferahlatıcı",
    "shortDesc": "Okaliptusun canlandırıcı etkisiyle banyo sabunu.",
    "description": "Okaliptus yağının tazeleyici kokusu nefes açar ve vücudu rahatlatır.",
    "ingredients": "Okaliptus yağı, Zeytinyağı",
    "usage": "Banyo yaparken vücuda masaj yaparak uygulayın.",
    "price": 150,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/okaliptus/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/okaliptus/shop-main.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/okaliptus/shop-gallery-1.jpeg",
    "id": 27
  },
  {
    "slug": "okyanus",
    "name": "Okyanus Sabunu",
    "category": [
      "vucut"
    ],
    "badge": "Ferahlık",
    "shortDesc": "Okyanus esintisiyle ferahlatıcı banyo sabunu.",
    "description": "Ferahlatıcı okyanus kokusu ve arındırıcı etkisiyle cildinize tazelik katar.",
    "ingredients": "Deniz mineralleri, Zeytinyağı, Saf Su",
    "usage": "Banyoda tüm vücut için kullanabilirsiniz.",
    "price": 230,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/okyanus/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/okyanus/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/okyanus/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/okyanus/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/okyanus/shop-gallery-4.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/okyanus/shop-gallery-2.jpeg",
    "id": 28
  },
  {
    "id": 29,
    "slug": "papatya",
    "name": "Papatya Sabunu",
    "category": [
      "yuz",
      "vucut"
    ],
    "price": 230,
    "badge": "Hassas",
    "shortDesc": "Hassas ciltler için yatıştırıcı papatya özlü sabun.",
    "description": "Papatyanın bilinen yatıştırıcı ve sakinleştirici etkisiyle, hassas ve kızarıklığa eğilimli ciltleri yormadan temizler. Cildin doğal nem bariyerini korumasına destek olur.",
    "ingredients": "Zeytinyağı, Hindistan Cevizi Yağı, Papatya Yağı, Papatya Özü, Sodyum Hidroksit (Kostik), Su, Doğal Gliserin, Tuz",
    "usage": "Islak yüze ve vücuda nazikçe uygulayın. Bebekler ve çocuklar için de kullanılabilir.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/papatya/shop-gallery-3.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/papatya/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/papatya/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/papatya/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/papatya/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/papatya/shop-gallery-4.jpeg"
    ]
  },
  {
    "id": 30,
    "slug": "pirinc",
    "name": "Pirinç Sabunu",
    "category": [
      "yuz"
    ],
    "price": 230,
    "badge": "Yeni",
    "shortDesc": "Pirinç özlü, cilt aydınlatıcı ve nemlendirici sabun.",
    "description": "Uzak Doğu güzellik sırlarından ilham alan pirinç sabunu, pirinç sütünün cilt aydınlatıcı ve nemlendirici etkilerini bir arada sunar. Gözenekleri sıkılaştırır, cilt tonunu eşitler ve doğal bir parlaklık kazandırır.",
    "ingredients": "Shea Butter Yağ, Zeytinyağı, Hindistan Cevizi Yağı, Pirinç unu, Pirinç taneleri, Pirinç suyu, Arıtılmış su, Sodyum Hidroksit (Kostik), Doğal Gliserin, Tuz",
    "usage": "Islak yüze köpürterek uygulayın. Günlük kullanıma uygundur.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/pirinc/shop-gallery-3.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/pirinc/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/pirinc/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/pirinc/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/pirinc/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/pirinc/shop-gallery-4.jpeg"
    ]
  },
  {
    "id": 31,
    "slug": "safran",
    "name": "Safran Sabunu",
    "category": [
      "yuz"
    ],
    "price": 250,
    "badge": "Premium",
    "shortDesc": "Değerli safran özlü, cilt aydınlatıcı sabun.",
    "description": "Dünyanın en değerli baharatlarından safranın cilt aydınlatıcı ve anti-aging özelliklerinden faydalanan lüks bir sabun. Cilt tonunu eşitler, leke görünümünü azaltır ve doğal bir parlaklık kazandırır.",
    "ingredients": "Zeytinyağı, Shea Butter Yağ, Hindistan Cevizi Yağı, Safran yağı, Safran tanecikleri, Su, Sodyum Hidroksit (Kostik), Doğal Gliserin, Tuz",
    "usage": "Islak yüze köpürterek uygulayın. Günde 1-2 kez kullanın. Güneş koruyucu ile birlikte kullanımı önerilir.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/safran/shop-gallery-3.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/safran/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/safran/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/safran/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/safran/shop-gallery-2.jpeg"
    ]
  },
  {
    "id": 32,
    "slug": "salyangoz",
    "name": "Salyangoz Sabunu",
    "category": [
      "yuz"
    ],
    "price": 230,
    "badge": "",
    "shortDesc": "Salyangoz özlü, cilt yenileyici anti-aging sabun.",
    "description": "Salyangoz müküsünün doğal kollajen ve allantoin içeriği sayesinde cildi yeniler, kırışıklık görünümünü azaltır ve cilt elastikiyetini artırır. Olgun ve yıpranmış ciltler için ideal bir bakım sabunudur.",
    "ingredients": "Zeytinyağı, Hindistan Cevizi Yağı, Salyangoz Özütü, Hyalüronik Asit, Kolajen, Sodyum Hidroksit, Saf Su",
    "usage": "Islak yüze nazikçe masaj yaparak uygulayın. Sabah ve akşam kullanıma uygundur.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/salyangoz/shop-gallery-4.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/salyangoz/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/salyangoz/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/salyangoz/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/salyangoz/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/salyangoz/shop-gallery-3.jpeg"
    ]
  },
  {
    "id": 33,
    "slug": "sarimsak",
    "name": "Sarımsak Sabunu",
    "category": [
      "sac"
    ],
    "price": 300,
    "badge": "Güçlendirici",
    "shortDesc": "Saç köklerini güçlendiren sarımsak özlü sabun.",
    "description": "Sarımsağın saç üzerindeki kanıtlanmış etkilerini doğal sabun formunda sunar. Kokusuz formülü sayesinde rahatsızlık vermezken, zayıf saç köklerini uyarır ve yeni saç oluşumunu destekler.",
    "ingredients": "Sarımsak yağı, Sarımsak suyu, Sarımsak tanecikleri, Sodyum Hidroksit (Kostik), Su, Zeytinyağı, Hindistan Cevizi Yağı, Shea Butter Yağı, Doğal Gliserin, Tuz",
    "usage": "Saç derisine uygulayıp 3-4 dakika bekleterek durulayın.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/sarimsak/shop-gallery-3.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/sarimsak/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/sarimsak/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/sarimsak/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/sarimsak/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/sarimsak/shop-gallery-4.jpeg"
    ]
  },
  {
    "id": 34,
    "slug": "sidr",
    "name": "Sidr Sabunu",
    "category": [
      "sac",
      "vucut"
    ],
    "price": 250,
    "badge": "Özel",
    "shortDesc": "Geleneksel sidr yapraklarıyla hazırlanan doğal bakım.",
    "description": "Tarihi çok eskilere dayanan sidr (arabistan kirazı) ağacının yapraklarıyla formüle edilmiştir. Saç ve cilt için doğal bir temizleyici ve arındırıcıdır, cilde ipeksi bir yumuşaklık verir.",
    "ingredients": "Sidre yağı, Zeytinyağı, Hindistan Cevizi Yağı, Sidre yaprakları, Sodyum Hidroksit (Kostik), Su, Doğal Gliserin, Tuz, Shea Butter Yağ",
    "usage": "Saç ve tüm vücut temizliğinde güvenle kullanabilirsiniz.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/sidr/shop-main.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/sidr/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/sidr/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/sidr/shop-gallery-2.jpeg"
    ]
  },
  {
    "id": 35,
    "slug": "siir-bittim",
    "name": "Siirt Bıttım Sabunu",
    "category": [
      "sac",
      "vucut"
    ],
    "price": 230,
    "badge": "Yöresel",
    "shortDesc": "Meşhur Siirt bıttım yağından elde edilen bakım sabunu.",
    "description": "Siirt yöresinin en kaliteli menengiç yağlarından geleneksel kazanlarda kaynatılarak üretilir. Beyazlamayı geciktirici etkisi olduğu bilinir ve saça doğal bir parlaklık katar.",
    "ingredients": "Bıttım yağı (Menengiç), Arıtılmış su, Sodyum Hidroksit (Kostik), Shea Butter Yağ, Hindistan Cevizi Yağı, Zeytinyağı, Doğal Gliserin, Tuz",
    "usage": "Saç temizliğinde kullanın. Başka bir şampuan ile birlikte kullanılması önerilmez.",
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/siir-bittim/shop-main.jpeg",
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/siir-bittim/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/siir-bittim/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/siir-bittim/shop-gallery-2.jpeg"
    ]
  },
  {
    "slug": "yasemin",
    "name": "Yasemin Sabunu",
    "category": [
      "yuz",
      "vucut"
    ],
    "badge": "",
    "shortDesc": "Rahatlatıcı yasemin kokulu, narin cilt bakım sabunu.",
    "description": "Büyüleyici yasemin çiçeği özleri cildinize ipeksi bir dokunuş sağlar.",
    "ingredients": "Yasemin özü, Zeytinyağı, Shea Yağı",
    "usage": "Islak cilde köpürterek uygulayın.",
    "price": 230,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/yasemin/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/yasemin/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/yasemin/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/yasemin/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/yasemin/shop-gallery-4.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/yasemin/shop-gallery-1.jpeg",
    "id": 36
  },
  {
    "slug": "zerdecal",
    "name": "Zerdeçal Sabunu",
    "category": [
      "yuz"
    ],
    "badge": "Parlatıcı",
    "shortDesc": "Cilt tonunu eşitleyen antioksidan zerdeçal sabunu.",
    "description": "Zerdeçalın güçlü antioksidan etkisiyle cildin doğal bir parlaklık kazanmasını sağlar ve cilt tonu eşitsizliklerini giderir.",
    "ingredients": "Zerdeçal tozu, Zeytinyağı, Hindistan Cevizi Yağı",
    "usage": "Yüze köpürterek masaj yapın.",
    "price": 230,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/zerdecal/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/zerdecal/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/zerdecal/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/zerdecal/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/zerdecal/shop-gallery-4.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/zerdecal/shop-gallery-1.jpeg",
    "id": 37
  },
  {
    "slug": "zeytinyagli-bebek",
    "name": "Zeytinyağlı Bebek Sabunu",
    "category": [
      "vucut",
      "sac"
    ],
    "badge": "Bebeklere Özel",
    "shortDesc": "Bebek cildi için ekstra hassas ve saf zeytinyağlı formül.",
    "description": "Bebeklerin narin cildine uygun, hiçbir sentetik koku içermeyen doğal ve göz yakmayan formül.",
    "ingredients": "Saf Soğuk Sıkım Zeytinyağı",
    "usage": "Bebeğin saç ve vücudunda güvenle kullanılabilir.",
    "price": 150,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/zeytinyagli-bebek/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/zeytinyagli-bebek/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/zeytinyagli-bebek/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/zeytinyagli-bebek/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/zeytinyagli-bebek/shop-gallery-4.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/zeytinyagli-bebek/shop-gallery-3.jpeg",
    "id": 38
  },
  {
    "slug": "turk-hamami-sabunu",
    "name": "Zeytinyağlı Türk Hamamı Sabunu",
    "category": [
      "vucut"
    ],
    "badge": "Otantik",
    "shortDesc": "Geleneksel Türk hamamlarının ferahlık veren zeytinyağlı sabunu.",
    "description": "Bol köpüren yapısı ve kalıcı temizlik hissi ile klasik hamam kültürünü yaşatır.",
    "ingredients": "Saf Zeytinyağı, Doğal Gliserin",
    "usage": "Kese ile birlikte tüm vücutta kullanılabilir.",
    "price": 250,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-sabunu/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-sabunu/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-sabunu/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-sabunu/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-sabunu/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-sabunu/shop-gallery-5.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-sabunu/shop-gallery-6.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-sabunu/shop-gallery-7.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-sabunu/shop-main.jpeg",
    "id": 39
  },
  {
    "slug": "at-kili",
    "name": "At Kılı Fırçası",
    "category": [
      "aksesuar"
    ],
    "badge": "Selülit Karşıtı",
    "shortDesc": "Tüm vücut için selülit karşıtı doğal at kılı fırçası.",
    "description": "Düzenli kuru fırçalama ile selülit görünümünü azaltır ve lenf drenajını destekler.",
    "ingredients": "%100 Doğal At Kılı",
    "usage": "Banyo öncesi kuru cilde, ayak bileklerinden kalbe doğru fırçalayın.",
    "price": 500,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili/shop-gallery-4.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili/shop-main.jpeg",
    "id": 40
  },
  {
    "slug": "at-kili-sirt",
    "name": "At Kılı Sırt Fırçası",
    "category": [
      "aksesuar"
    ],
    "badge": "Pratik",
    "shortDesc": "Uzun saplı, sırta kolay erişim sağlayan at kılı fırça.",
    "description": "Sırt bölgesindeki batık ve sivilceleri önlemek, kan dolaşımını artırmak için tasarlanmıştır.",
    "ingredients": "%100 Doğal At Kılı, Ahşap Sap",
    "usage": "Banyo öncesi kuru fırçalama veya banyoda sabunla uygulanabilir.",
    "price": 500,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili-sirt/shop-main.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili-sirt/shop-main.jpeg",
    "id": 41
  },
  {
    "slug": "at-kili-yuz",
    "name": "At Kılı Yüz Fırçası",
    "category": [
      "aksesuar"
    ],
    "badge": "Peeling",
    "shortDesc": "Yüz için özel tasarlanmış yumuşak at kılı fırçası.",
    "description": "Kan dolaşımını hızlandırır ve ince çizgilerin görünümünü azaltmaya yardımcı olur.",
    "ingredients": "%100 Doğal At Kılı",
    "usage": "Kuru cilde nazikçe, aşağıdan yukarıya doğru fırçalayarak uygulayın.",
    "price": 300,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili-yuz/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili-yuz/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili-yuz/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili-yuz/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili-yuz/shop-gallery-4.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/at-kili-yuz/shop-main.jpeg",
    "id": 42
  },
  {
    "slug": "erkek-hamam",
    "name": "Erkek Hamam Takımı",
    "category": [
      "setler"
    ],
    "badge": "Lüks Set",
    "shortDesc": "Erkeklere özel tasarlanmış tam donanımlı hamam takımı.",
    "description": "Erkek bakımına uygun, geleneksel motiflerle bezenmiş premium hamam seti.",
    "ingredients": "Peştemal, Sert Kese, Doğal Sabun, Hamam Tası",
    "usage": "Hamam ve sauna kullanımı içindir.",
    "price": 900,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/erkek-hamam/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/erkek-hamam/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/erkek-hamam/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/erkek-hamam/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/erkek-hamam/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/erkek-hamam/shop-gallery-5.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/erkek-hamam/shop-main.jpeg",
    "id": 43
  },
  {
    "slug": "hamam-tasi",
    "name": "Hamam Tası",
    "category": [
      "aksesuar"
    ],
    "badge": "Otantik",
    "shortDesc": "Geleneksel motifli, kaliteli hamam tası.",
    "description": "Hamam keyfini evinize taşıyan, kararmaya karşı dayanıklı özel tasarım hamam tası.",
    "ingredients": "Bakır / Metal Alaşım",
    "usage": "Banyo ve hamamda su dökmek için kullanılır.",
    "price": 270,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hamam-tasi/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hamam-tasi/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hamam-tasi/shop-gallery-2.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hamam-tasi/shop-main.jpeg",
    "id": 44
  },
  {
    "slug": "hediyelik-kutu",
    "name": "Hediyelik Kutulu Sabun",
    "category": [
      "setler"
    ],
    "badge": "Hediye",
    "shortDesc": "Özel tasarımlı ahşap/kraft kutusunda seçmeli doğal sabun.",
    "description": "Sevdiklerinize doğal bir dokunuş hediye edin. Şık kutu tasarımıyla göz doldurur.",
    "ingredients": "Kutu ve Seçmeli Doğal Sabun",
    "usage": "Hediyelik kullanım içindir.",
    "price": 120,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hediyelik-kutu/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hediyelik-kutu/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hediyelik-kutu/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hediyelik-kutu/shop-gallery-3.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/hediyelik-kutu/shop-main.jpeg",
    "id": 45
  },
  {
    "slug": "kadin-hamam",
    "name": "Kadın Hamam Takımı",
    "category": [
      "setler"
    ],
    "badge": "Lüks Set",
    "shortDesc": "Kadınlara özel, eksiksiz geleneksel hamam seti.",
    "description": "Peştemal, kese, sabun ve hamam tasından oluşan lüks hamam deneyimi.",
    "ingredients": "Peştemal, Kese, Doğal Sabun, Hamam Tası",
    "usage": "Kişisel bakım ritüelleri ve çeyizlik olarak idealdir.",
    "price": 900,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kadin-hamam/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kadin-hamam/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kadin-hamam/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kadin-hamam/shop-gallery-3.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/kadin-hamam/shop-main.jpeg",
    "id": 46
  },
  {
    "slug": "rusur-tasi",
    "name": "Ruşur Taşı",
    "category": [
      "aksesuar"
    ],
    "badge": "Aksesuar",
    "shortDesc": "İran kültüründen gelen doğal cilt beyazlatıcı ve peeling taşı.",
    "description": "Cildi ölü hücrelerden arındırır, renk tonunu dengeler ve pürüzsüz bir görünüm kazandırır.",
    "ingredients": "Doğal Ruşur (Sefidab)",
    "usage": "Nemli cilde nazikçe sürterek peeling uygulayın ve ılık suyla durulayın.",
    "price": 25,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/rusur-tasi/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/rusur-tasi/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/rusur-tasi/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/rusur-tasi/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/rusur-tasi/shop-gallery-4.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/rusur-tasi/shop-gallery-5.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/rusur-tasi/shop-main.jpeg",
    "id": 47
  },
  {
    "slug": "turk-hamami-pestemal",
    "name": "Türk Hamamı Klasik Peştemal",
    "category": [
      "aksesuar"
    ],
    "badge": "Geleneksel",
    "shortDesc": "Yüksek emiciliğe sahip, pamuklu klasik Türk hamamı peştemali.",
    "description": "Hafif, hızlı kuruyan ve pamuklu yapısıyla plajda, banyoda ve hamamda rahat kullanım sağlar.",
    "ingredients": "%100 Pamuk",
    "usage": "Kurulanmak veya sarınmak için kullanılır.",
    "price": 400,
    "gallery": [
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-pestemal/shop-main.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-pestemal/shop-gallery-1.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-pestemal/shop-gallery-2.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-pestemal/shop-gallery-3.jpeg",
      "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-pestemal/shop-gallery-4.jpeg"
    ],
    "mainImage": "https://raw.githubusercontent.com/Seglibrary/arin-assets/main/assets/images/products/turk-hamami-pestemal/shop-main.jpeg",
    "id": 48
  }
];

// Kategori tanımları
const CATEGORIES = [
  {
    "id": "tumu",
    "label": "Tüm Ürünler",
    "icon": "grid"
  },
  {
    "id": "yuz",
    "label": "Yüz Bakımı",
    "icon": "smile"
  },
  {
    "id": "vucut",
    "label": "Vücut Bakımı",
    "icon": "heart"
  },
  {
    "id": "sac",
    "label": "Saç Bakımı",
    "icon": "scissors"
  },
  {
    "id": "aksesuar",
    "label": "Aksesuar & Spa",
    "icon": "package"
  },
  {
    "id": "setler",
    "label": "Hediye & Setler",
    "icon": "gift"
  }
];

// WhatsApp numarası (uluslararası format)
const WHATSAPP_NUMBER = "905305608238";

// Mağaza bilgileri
const STORE_INFO = {
  name: "Arın Nature",
  tagline: "Doğanın Gücü, Ellerimizin Emeği",
  email: "arinnature@gmail.com",
  phone: "+90 530 560 82 38",
  address: "Hobyar mah, Cağaloğlu Yokuşu Sok. Evren Çarşı Evren Han No:17 D:24, 34112 Fatih/İstanbul",
  instagram: "arinnaturelsabun",
  workingHours: {
    weekdays: "09:00 - 19:00",
    saturday: "09:00 - 17:00",
    sunday: "Kapalı"
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.3!2d28.9714!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzMwIk4gMjjCsDU4JzE3IkU!5e0!3m2!1str!2str!4v1600000000000!5m2!1str!2str"
};


/* ===== ARIN NATURE — Main JavaScript ===== */
document.addEventListener('DOMContentLoaded', () => {

  // ===== DARK MODE =====
  const savedTheme = localStorage.getItem('arin-theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

  // Inject dark mode toggle into nav-cta
  const navCtaEl = document.querySelector('.nav-cta');
  if (navCtaEl) {
    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.setAttribute('aria-label', 'Tema değiştir');
    toggle.innerHTML = `
      <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      if (next === 'light') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('arin-theme');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('arin-theme', 'dark');
      }
    });
    navCtaEl.insertBefore(toggle, navCtaEl.firstChild);
  }

  // ===== NAVBAR SCROLL =====
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ===== HAMBURGER MENU =====
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navCta = document.querySelector('.nav-cta');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      if (navCta) navCta.classList.toggle('open', isOpen);
      const spans = hamburger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // ===== SCROLL REVEAL =====
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(el => revealObserver.observe(el));

  // ===== SMOOTH SCROLL FOR ANCHORS =====
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#' || a.closest('.modal')) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks) navLinks.classList.remove('open');
        if (navCta) navCta.classList.remove('open');
      }
    });
  });

  // ===== PRODUCT FILTERING & SEARCH (Shop Page) =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  const searchInput = document.getElementById('searchInput');

  function updateProductVisibility() {
    const activeBtn = document.querySelector('.filter-btn.active');
    const activeCat = activeBtn ? activeBtn.dataset.category : 'tumu';
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

    productCards.forEach(card => {
      const catsString = card.dataset.category || "";
      const matchesCat = activeCat === 'tumu' || catsString.includes(activeCat);
      
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
      const matchesSearch = searchTerm === '' || title.includes(searchTerm) || desc.includes(searchTerm);

      if (matchesCat && matchesSearch) {
        card.style.display = '';
        setTimeout(() => card.style.opacity = '1', 50);
      } else {
        card.style.opacity = '0';
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateProductVisibility();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', updateProductVisibility);
  }

  // ===== PRODUCT MODAL =====
  const modalOverlay = document.getElementById('productModal');
  const modalClose = document.querySelector('.modal-close');

  if (modalOverlay) {
    productCards.forEach(card => {
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', card.querySelector('h3')?.textContent || 'Ürünü incele');

      const openCard = () => {
        const productId = parseInt(card.dataset.productId);
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) openModal(product);
      };
      card.addEventListener('click', openCard);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCard(); }
      });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  function openModal(product) {
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalPrice').textContent = product.price;
    document.getElementById('modalDesc').textContent = product.description;
    document.getElementById('modalIngredients').textContent = product.ingredients;
    document.getElementById('modalUsage').textContent = product.usage;

    const mainImg = document.getElementById('modalMainImg');
    mainImg.src = product.mainImage;
    mainImg.alt = product.name;
    mainImg.onerror = function() {
      this.style.display = 'none';
      this.parentElement.insertAdjacentHTML('afterbegin',
        '<div class="no-image-placeholder" style="aspect-ratio:4/3;border-radius:var(--radius-md);margin-bottom:12px;"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Fotoğraf yakında eklenecek</span></div>');
    };

    const thumbsContainer = document.getElementById('modalThumbs');
    thumbsContainer.innerHTML = '';
    product.gallery.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${product.name} - ${i + 1}`;
      img.loading = 'lazy';
      if (i === 0) img.classList.add('active');
      img.addEventListener('click', () => {
        mainImg.src = src;
        mainImg.style.display = '';
        const placeholder = mainImg.parentElement.querySelector('.no-image-placeholder');
        if (placeholder) placeholder.remove();
        thumbsContainer.querySelectorAll('img').forEach(t => t.classList.remove('active'));
        img.classList.add('active');
      });
      img.onerror = function() { this.style.display = 'none'; };
      thumbsContainer.appendChild(img);
    });

    // WhatsApp — ürün adıyla birlikte mesaj
    const waBtn = document.getElementById('modalWhatsapp');
    const productUrl = `https://arinnature.com/shop.html`;
    const waMsg = encodeURIComponent(`Merhaba, *${product.name}* (${product.price}₺) hakkında bilgi almak istiyorum.\n\nÜrün sayfası: ${productUrl}`);
    waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    // Clean up any placeholders
    const placeholder = document.querySelector('.modal .no-image-placeholder');
    if (placeholder) placeholder.remove();
    const mainImg = document.getElementById('modalMainImg');
    if (mainImg) mainImg.style.display = '';
  }

  // ===== ACTIVE NAV LINK =====
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ===== IMAGE FALLBACK FOR CARDS =====
  document.querySelectorAll('.product-card-image img').forEach(img => {
    img.onerror = function() {
      this.style.display = 'none';
      this.parentElement.innerHTML = '<div class="no-image-placeholder"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Yakında</span></div>';
    };
  });
});

