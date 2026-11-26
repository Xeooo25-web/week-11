(function (window) {
  const CART_KEY = "rm_cart_v1";
  const ORDERS_KEY = "rm_orders_v1";
  const CHANNEL_NAME = "rajutmanis_sync";
  const IMAGE_DIR = "boneka/";

  const catalogProducts = [
    {
      code: "RM-01",
      name: "Kaktus Pot Mini",
      category: "Tanaman",
      description: "Amigurumi kaktus hijau dalam pot terakota lengkap dengan bunga rajut coral di atasnya.",
      height: "15 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 65.000",
      priceNum: 65000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Handcrafted_knitted_cactus_produ_56197130.jpg"
    },
    {
      code: "RM-02",
      name: "Dino Hijau Chubby",
      category: "Hewan & Fantasi",
      description: "Dinosaurus rajut hijau sage dengan deretan duri kuning empuk di punggung.",
      height: "19 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 92.000",
      priceNum: 92000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Handcrafted_knitted_dinosaur_doll_beafb39e.jpg"
    },
    {
      code: "RM-03",
      name: "Idia Shroud (Twisted Wonderland)",
      category: "Twisted Wonderland",
      description: "Boneka rajut Idia Shroud dengan rambut api biru gradasi dan jaket hoodie hitam-biru.",
      height: "22 cm",
      material: "Milk Cotton & Wool",
      price: "Rp 165.000",
      priceNum: 165000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Handcrafted_knitted_doll_with_bl_904564e5.jpg"
    },
    {
      code: "RM-04",
      name: "Malleus Draconia (Twisted Wonderland)",
      category: "Twisted Wonderland",
      description: "Boneka rajut Malleus Draconia lengkap dengan tanduk hitam, telinga peri, dan seragam Diasomnia.",
      height: "24 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 175.000",
      priceNum: 175000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Handcrafted_knitted_doll_with_horns_33dfea25.jpg"
    },
    {
      code: "RM-05",
      name: "Peri Jamur Hijau",
      category: "Hewan & Fantasi",
      description: "Boneka rajut bertopi jamur hijau bertotol putih dengan baju overall cokelat berkancing kayu.",
      height: "18 cm",
      material: "Soft Cotton",
      price: "Rp 95.000",
      priceNum: 95000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Handcrafted_knitted_mushroom_boy_e31b91d0.jpg"
    },
    {
      code: "RM-06",
      name: "Panda Rajut Klasik",
      category: "Hewan",
      description: "Boneka panda rajut hitam-putih dalam posisi duduk yang empuk dan ramah anak.",
      height: "20 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 88.000",
      priceNum: 88000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Handcrafted_knitted_panda_doll_aa638323.jpg"
    },
    {
      code: "RM-07",
      name: "Robot Rajut Retro",
      category: "Fantasi",
      description: "Amigurumi robot biru-kuning dengan antena rajut dan detail hati merah di dada.",
      height: "18 cm",
      material: "Soft Cotton",
      price: "Rp 90.000",
      priceNum: 90000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Handcrafted_knitted_robot_doll_78fd7aa7.jpg"
    },
    {
      code: "RM-08",
      name: "Beruang Syal Hijau",
      category: "Hewan",
      description: "Boneka beruang madu cokelat karamel klasik lengkap dengan syal rajut hijau.",
      height: "22 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 95.000",
      priceNum: 95000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Handcrafted_knitted_yarn_bear_doll_3213095b.jpg"
    },
    {
      code: "RM-09",
      name: "Ada Wong (Resident Evil)",
      category: "Resident Evil",
      description: "Boneka rajut Ada Wong dengan rambut bob hitam, gaun cheongsam merah, dan holster paha.",
      height: "23 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 155.000",
      priceNum: 155000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Handcrafted_knitted_yarn_doll_0c252d4a.jpg"
    },
    {
      code: "RM-10",
      name: "Leon S. Kennedy (Resident Evil 4)",
      category: "Resident Evil",
      description: "Boneka rajut Leon S. Kennedy dengan jaket bomber cokelat berkerah bulu dan holster.",
      height: "24 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 165.000",
      priceNum: 165000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Handcrafted_knitted_yarn_doll_47eee258.jpg"
    },
    {
      code: "RM-11",
      name: "Zombie Umbrella (Resident Evil)",
      category: "Resident Evil",
      description: "Amigurumi zombie imut bermata kancing hitam dengan baju biru sobek berlogo Umbrella Corp.",
      height: "19 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 125.000",
      priceNum: 125000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Handcrafted_knitted_yarn_doll_5f183713.jpg"
    },
    {
      code: "RM-12",
      name: "Kucing Oranye Lonceng",
      category: "Hewan",
      description: "Kucing rajut oranye-krem mungil lengkap dengan kalung merah dan lonceng mini.",
      height: "17 cm",
      material: "Soft Cotton",
      price: "Rp 78.000",
      priceNum: 78000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Handcrafted_knitted_yarn_kitten_142d9e79.jpg"
    },
    {
      code: "RM-13",
      name: "Kirby (Kirby Series)",
      category: "Nintendo",
      description: "Boneka rajut Kirby bulat berwarna merah muda pastel dengan sepatu merah khasnya.",
      height: "15 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 85.000",
      priceNum: 85000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Handcrafted_pink_yarn_puffball_d0ab47d3.jpg"
    },
    {
      code: "RM-14",
      name: "Paimon (Genshin Impact)",
      category: "Genshin Impact",
      description: "Boneka rajut Paimon lengkap dengan mahkota, halo bintang di kepala, dan jubah galaksi.",
      height: "23 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 160.000",
      priceNum: 160000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Handcrafted_yarn_amigurumi_doll_0b58e3be.jpg"
    },
    {
      code: "RM-15",
      name: "Totoro Biru Mini (Studio Ghibli)",
      category: "Anime & Ghibli",
      description: "Boneka rajut Chu-Totoro biru muda dengan perut krem bundar dan tunas daun di kepala.",
      height: "16 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 85.000",
      priceNum: 85000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Handcrafted_yarn_forest_spirit_dc316792.jpg"
    },
    {
      code: "RM-16",
      name: "Anak Anjing Cokelat",
      category: "Hewan",
      description: "Boneka rajut anak anjing cokelat bertelinga panjang dengan kalung pita merah.",
      height: "20 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 92.000",
      priceNum: 92000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Handmade_knitted_puppy_doll_1abb6b26.jpg"
    },
    {
      code: "RM-17",
      name: "Alpukat Rajut Ceria",
      category: "Makanan & Buah",
      description: "Amigurumi buah alpukat tersenyum lengkap dengan biji cokelat bulat di bagian tengah.",
      height: "16 cm",
      material: "Soft Cotton",
      price: "Rp 68.000",
      priceNum: 68000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Knitted_avocado_product_photo_20441a8a.jpg"
    },
    {
      code: "RM-18",
      name: "Boba Milk Tea Rajut",
      category: "Makanan & Buah",
      description: "Boneka rajut minuman boba milk tea lengkap dengan sedotan ungu dan butiran boba.",
      height: "15 cm",
      material: "Soft Cotton",
      price: "Rp 65.000",
      priceNum: 65000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Knitted_boba_milk_tea_cup_bc0c9869.jpg"
    },
    {
      code: "RM-19",
      name: "Zhongli (Genshin Impact)",
      category: "Genshin Impact",
      description: "Boneka rajut Zhongli dengan rambut cokelat berujung amber dan setelan jas Geo Archon.",
      height: "24 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 175.000",
      priceNum: 175000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_doll_in_brown_suit_354a8f68.jpg"
    },
    {
      code: "RM-20",
      name: "Azul Ashengrotto (Twisted Wonderland)",
      category: "Twisted Wonderland",
      description: "Boneka rajut Azul lengkap dengan kacamata bulat, topi fedora, syal ungu, dan jas Octavinelle.",
      height: "23 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 165.000",
      priceNum: 165000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_doll_in_uniform_292b708c.jpg"
    },
    {
      code: "RM-21",
      name: "Chris Redfield (Resident Evil)",
      category: "Resident Evil",
      description: "Boneka rajut Chris Redfield dengan rompi taktis BSAA dan sarung tangan tanpa jari.",
      height: "24 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 160.000",
      priceNum: 160000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_doll_of_video_game_110f6a73.jpg"
    },
    {
      code: "RM-22",
      name: "Aerith Gainsborough (Final Fantasy VII)",
      category: "Final Fantasy VII",
      description: "Boneka rajut Aerith dengan rambut kepang berpita pink, gaun pink, dan jaket bolero merah.",
      height: "23 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 165.000",
      priceNum: 165000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_doll_wearing_dress_and_a6685a3d.jpg"
    },
    {
      code: "RM-23",
      name: "Jill Valentine (Resident Evil)",
      category: "Resident Evil",
      description: "Boneka rajut Jill Valentine dengan topi baret biru S.T.A.R.S. dan rompi taktis hijau.",
      height: "23 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 160.000",
      priceNum: 160000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_doll_wearing_uniform_05fe4aa2.jpg"
    },
    {
      code: "RM-24",
      name: "Leona Kingscholar (Twisted Wonderland)",
      category: "Twisted Wonderland",
      description: "Boneka rajut Leona dengan telinga singa, rambut kepang manik-manik, dan pakaian Savanaclaw.",
      height: "23 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 170.000",
      priceNum: 170000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_doll_wearing_uniform_83fd96eb.jpg"
    },
    {
      code: "RM-25",
      name: "Venti (Genshin Impact)",
      category: "Genshin Impact",
      description: "Boneka rajut Venti dengan baret hijau berhias bunga Cecilia, jubah hijau, dan harpa mini.",
      height: "23 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 165.000",
      priceNum: 165000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_doll_with_green_hat_23269c76.jpg"
    },
    {
      code: "RM-26",
      name: "Cloud Strife (Final Fantasy VII)",
      category: "Final Fantasy VII",
      description: "Boneka rajut Cloud Strife dengan rambut pirang runcing dan pedang rajut Buster Sword.",
      height: "24 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 175.000",
      priceNum: 175000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_doll_with_sword_859d3f02.jpg"
    },
    {
      code: "RM-27",
      name: "Naruto Uzumaki (Naruto)",
      category: "Anime & Game",
      description: "Boneka rajut Naruto dengan ikat kepala shinobi, setelan ninja oranye, dan pedang di punggung.",
      height: "22 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 150.000",
      priceNum: 150000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Knitted_ninja_toy_standing_3ceeca71.jpg"
    },
    {
      code: "RM-28",
      name: "Unicorn Pelangi",
      category: "Hewan & Fantasi",
      description: "Boneka unicorn putih krem dengan tanduk emas dan surai keriting warna-warni pelangi.",
      height: "24 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 120.000",
      priceNum: 120000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Knitted_unicorn_doll_product_photo_70ef1d03.jpg"
    },
    {
      code: "RM-29",
      name: "Madoka Kaname (Madoka Magica)",
      category: "Anime & Game",
      description: "Boneka rajut Madoka dengan kuncir dua pink berpita merah, gaun putih-merah, dan tongkat bintang.",
      height: "22 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 155.000",
      priceNum: 155000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_yarn_anime_character_a2384aaf.jpg"
    },
    {
      code: "RM-30",
      name: "Kelinci Telinga Panjang",
      category: "Hewan",
      description: "Kelinci rajut krem lembut dengan telinga panjang beraksen pink pastel dan tag nama.",
      height: "25 cm",
      material: "Katun Halus",
      price: "Rp 110.000",
      priceNum: 110000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Knitted_yarn_bunny_doll_fdf1fb61.jpg"
    },
    {
      code: "RM-31",
      name: "Klee (Genshin Impact)",
      category: "Genshin Impact",
      description: "Boneka rajut Klee dengan topi merah berbulu putih, gaun merah-emas, dan tas ransel Dodoco.",
      height: "22 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 165.000",
      priceNum: 165000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_yarn_doll_in_red_cd0008d8.jpg"
    },
    {
      code: "RM-32",
      name: "Riddle Rosehearts (Twisted Wonderland)",
      category: "Twisted Wonderland",
      description: "Boneka rajut Riddle dengan rambut merah berbentuk hati, mahkota kecil, dan jubah Heartslabyul.",
      height: "23 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 165.000",
      priceNum: 165000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_yarn_doll_product_photo_1202cd46.jpg"
    },
    {
      code: "RM-33",
      name: "Sephiroth (Final Fantasy VII)",
      category: "Final Fantasy VII",
      description: "Boneka rajut Sephiroth dengan rambut panjang perak, satu sayap hitam, dan pedang Masamune.",
      height: "24 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 180.000",
      priceNum: 180000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_yarn_doll_product_photo_17434d7b.jpg"
    },
    {
      code: "RM-34",
      name: "Tifa Lockhart (Final Fantasy VII)",
      category: "Final Fantasy VII",
      description: "Boneka rajut Tifa Lockhart dengan rambut panjang hitam, tanktop putih, rok suspender, dan sarung tangan merah.",
      height: "23 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 165.000",
      priceNum: 165000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_yarn_doll_product_photo_80ecdfa4.jpg"
    },
    {
      code: "RM-35",
      name: "Raiden Shogun (Genshin Impact)",
      category: "Genshin Impact",
      description: "Boneka rajut Raiden Shogun dengan rambut kepang ungu panjang, jepit bunga, dan kimono Inazuma.",
      height: "23 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 175.000",
      priceNum: 175000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_yarn_doll_product_photo_b9b293f2.jpg"
    },
    {
      code: "RM-36",
      name: "Red XIII / Nanaki (Final Fantasy VII)",
      category: "Final Fantasy VII",
      description: "Boneka rajut Red XIII dengan surai cokelat, tanda XIII di tubuh, dan ujung ekor berapi.",
      height: "20 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 155.000",
      priceNum: 155000,
      status: "Edisi Terbatas",
      isLimited: true,
      image: IMAGE_DIR + "Knitted_yarn_doll_product_photo_d19ada3f.jpg"
    },
    {
      code: "RM-37",
      name: "Rubah Ekor Lebat",
      category: "Hewan",
      description: "Boneka rubah oranye terakota dengan perpaduan warna putih bersih di pipi dan ujung ekor.",
      height: "21 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 105.000",
      priceNum: 105000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Knitted_yarn_fox_doll_d3fa255a.jpg"
    },
    {
      code: "RM-38",
      name: "Katak Hijau Chubby",
      category: "Hewan",
      description: "Katak hijau sage bulat menggemaskan dengan perut krem dan pipi merona.",
      height: "17 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 85.000",
      priceNum: 85000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Knitted_yarn_frog_plush_de8757dc.jpg"
    },
    {
      code: "RM-39",
      name: "Jamur Merah Klasik",
      category: "Tanaman",
      description: "Amigurumi jamur bertopi merah polkadot putih dengan wajah imut tersenyum.",
      height: "15 cm",
      material: "Soft Cotton",
      price: "Rp 62.000",
      priceNum: 62000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Knitted_yarn_mushroom_product_photo_6e45c554.jpg"
    },
    {
      code: "RM-40",
      name: "Burung Hantu Rajut",
      category: "Hewan",
      description: "Boneka burung hantu cokelat dengan mata besar bundar dan sayap rajut bertekstur.",
      height: "18 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 88.000",
      priceNum: 88000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Knitted_yarn_owl_doll_1aa78923.jpg"
    },
    {
      code: "RM-41",
      name: "Penguin Syal Musim Dingin",
      category: "Hewan",
      description: "Penguin rajut biru dongker dengan perut putih oval dan syal rajut motif garis merah-putih.",
      height: "20 cm",
      material: "Soft Cotton",
      price: "Rp 89.000",
      priceNum: 89000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Knitted_yarn_penguin_doll_3be5a103.jpg"
    },
    {
      code: "RM-42",
      name: "Stroberi Rajut Manis",
      category: "Makanan & Buah",
      description: "Amigurumi buah stroberi merah cerah lengkap dengan bintik kuning dan kelopak daun hijau.",
      height: "14 cm",
      material: "Soft Cotton",
      price: "Rp 58.000",
      priceNum: 58000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Knitted_yarn_strawberry_product_ad12cae4.jpg"
    },
    {
      code: "RM-43",
      name: "Mario (Super Mario)",
      category: "Nintendo",
      description: "Boneka rajut Mario lengkap dengan topi merah, kumis hitam, dan baju overall biru.",
      height: "22 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 145.000",
      priceNum: 145000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Red_plumber_amigurumi_knitted_yarn_30e71996.jpg"
    },
    {
      code: "RM-44",
      name: "Pikachu (Pokémon)",
      category: "Nintendo",
      description: "Boneka rajut Pikachu kuning cerah dengan ujung telinga hitam, pipi merah, dan ekor petir.",
      height: "20 cm",
      material: "Milk Cotton 5 Ply",
      price: "Rp 135.000",
      priceNum: 135000,
      status: "Tersedia",
      isLimited: false,
      image: IMAGE_DIR + "Yellow_knitted_mouse_toy_bbb5f152.jpg"
    }
  ];

  let bc = null;
  try {
    if ("BroadcastChannel" in window) {
      bc = new BroadcastChannel(CHANNEL_NAME);
    }
  } catch (e) {}

  function notifySync(type) {
    if (bc) {
      bc.postMessage({ type: type || "sync", ts: Date.now() });
    }
  }

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatRupiah(num) {
    return "Rp " + Number(num || 0).toLocaleString("id-ID");
  }

  function formatWaktu(iso) {
    if (!iso) return "-";
    try {
      return new Date(iso).toLocaleString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch (e) {
      return iso;
    }
  }

  // --- Cart Management ---
  function getCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateTopbarBadge();
    notifySync("cart");
  }

  function addToCart(code, qty) {
    const product = catalogProducts.find(function (p) { return p.code === code; });
    if (!product) return;

    const cart = getCart();
    const existing = cart.find(function (c) { return c.code === code; });
    if (existing) {
      existing.qty = Math.min(99, existing.qty + (qty || 1));
    } else {
      cart.push({
        code: product.code,
        name: product.name,
        category: product.category,
        height: product.height,
        material: product.material,
        priceNum: product.priceNum,
        image: product.image,
        qty: qty || 1
      });
    }
    saveCart(cart);
  }

  function updateCartQty(code, qty) {
    const cart = getCart();
    const item = cart.find(function (c) { return c.code === code; });
    if (!item) return;
    item.qty = Math.max(1, Math.min(99, qty));
    saveCart(cart);
  }

  function removeFromCart(code) {
    const cart = getCart().filter(function (c) { return c.code !== code; });
    saveCart(cart);
  }

  function clearCart() {
    saveCart([]);
  }

  function getCartCount() {
    return getCart().reduce(function (sum, item) { return sum + item.qty; }, 0);
  }

  function getCartTotals(ongkir) {
    const subtotal = getCart().reduce(function (sum, item) {
      return sum + item.priceNum * item.qty;
    }, 0);
    const ship = typeof ongkir === "number" ? ongkir : 20000;
    return {
      subtotal: subtotal,
      ongkir: ship,
      grandTotal: subtotal + ship
    };
  }

  // --- Orders Management ---
  function getOrders() {
    try {
      const raw = localStorage.getItem(ORDERS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveOrders(orders) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    notifySync("orders");
  }

  function getOrderById(id) {
    return getOrders().find(function (o) { return o.id === id; }) || null;
  }

  function createOrder(customer, shippingMethod) {
    const cart = getCart();
    if (cart.length === 0) return null;

    const ongkir = shippingMethod === "pickup" ? 0 : 20000;
    const totals = getCartTotals(ongkir);
    const now = new Date();
    const rand = Math.floor(100 + Math.random() * 900);
    const orderId =
      "RM-" +
      now.getFullYear().toString().slice(-2) +
      String(now.getMonth() + 1).padStart(2, "0") +
      String(now.getDate()).padStart(2, "0") +
      "-" +
      rand;

    const order = {
      id: orderId,
      createdAt: now.toISOString(),
      status: "PENDING",
      paymentMethod: "QRIS",
      qrisRef: "QR" + Date.now().toString().slice(-8),
      shippingMethod: shippingMethod === "pickup" ? "Ambil di Studio Bandung" : "Kurir Reguler Aman (Box)",
      ongkir: totals.ongkir,
      subtotal: totals.subtotal,
      grandTotal: totals.grandTotal,
      customer: customer,
      items: cart.map(function (c) {
        return {
          code: c.code,
          name: c.name,
          priceNum: c.priceNum,
          qty: c.qty,
          subtotal: c.priceNum * c.qty
        };
      }),
      paidAt: null,
      rejectedAt: null,
      approvalRef: null
    };

    const orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);
    clearCart();
    return order;
  }

  // --- UI Helpers ---
  function renderTopbar(activeKey) {
    const host = document.getElementById("site-topbar");
    if (!host) return;

    const count = getCartCount();
    host.className = "topbar";
    host.innerHTML =
      '<div class="topbar-inner">' +
      '  <a href="index.html" class="topbar-brand">' +
      '    <span>RajutManis</span>' +
      '    <span class="topbar-brand-sub">Amigurumi Studio</span>' +
      '  </a>' +
      '  <nav class="topbar-nav">' +
      '    <a href="index.html" class="nav-link ' + (activeKey === "katalog" ? "active" : "") + '">Katalog</a>' +
      '    <a href="cart.html" class="nav-link ' + (activeKey === "cart" ? "active" : "") + '">Keranjang <span class="cart-badge" id="topbar-cart-badge">' + count + '</span></a>' +
      '    <a href="history.html" class="nav-link ' + (activeKey === "history" ? "active" : "") + '">Riwayat</a>' +
      '    <a href="qris-approve.html" target="_blank" rel="noopener" class="nav-link sim-link">Simulator QRIS &#8599;</a>' +
      '  </nav>' +
      '</div>';
  }

  function updateTopbarBadge() {
    const badge = document.getElementById("topbar-cart-badge");
    if (badge) badge.textContent = String(getCartCount());
  }

  function renderStatusBadge(status) {
    if (status === "PAID") {
      return '<span class="status-badge status-paid">&#10003; PAID</span>';
    }
    if (status === "REJECTED") {
      return '<span class="status-badge status-rejected">&#10005; DITOLAK</span>';
    }
    return '<span class="status-badge status-pending"><span class="pulse-dot"></span> MENUNGGU</span>';
  }

  function generateDummyQrisSvg(seedStr) {
    let hash = 2166136261;
    for (let i = 0; i < seedStr.length; i++) {
      hash ^= seedStr.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }

    const size = 21;
    const cell = 8;
    const pad = 12;
    const total = size * cell + pad * 2;
    let rects = "";

    function inFinder(r, c) {
      return (
        (r < 7 && c < 7) ||
        (r < 7 && c >= size - 7) ||
        (r >= size - 7 && c < 7)
      );
    }

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (inFinder(r, c)) continue;
        hash ^= (r * 31 + c * 17);
        hash = Math.imul(hash, 16777619);
        if ((hash >>> 0) % 2 === 0) {
          rects += '<rect x="' + (pad + c * cell) + '" y="' + (pad + r * cell) + '" width="' + cell + '" height="' + cell + '" fill="#3b2d26"/>';
        }
      }
    }

    function finder(x, y) {
      return (
        '<rect x="' + x + '" y="' + y + '" width="' + (7 * cell) + '" height="' + (7 * cell) + '" fill="#3b2d26"/>' +
        '<rect x="' + (x + cell) + '" y="' + (y + cell) + '" width="' + (5 * cell) + '" height="' + (5 * cell) + '" fill="#ffffff"/>' +
        '<rect x="' + (x + 2 * cell) + '" y="' + (y + 2 * cell) + '" width="' + (3 * cell) + '" height="' + (3 * cell) + '" fill="#c96f50"/>'
      );
    }

    return (
      '<svg width="' + total + '" height="' + total + '" viewBox="0 0 ' + total + ' ' + total + '" xmlns="http://www.w3.org/2000/svg">' +
      '  <rect width="' + total + '" height="' + total + '" fill="#ffffff"/>' +
      finder(pad, pad) +
      finder(pad + (size - 7) * cell, pad) +
      finder(pad, pad + (size - 7) * cell) +
      rects +
      '</svg>'
    );
  }

  let toastTimer = null;
  function showToast(msg) {
    let el = document.getElementById("rm-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "rm-toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove("show");
    }, 2400);
  }

  function onRealtimeUpdate(cb) {
    window.addEventListener("storage", function (e) {
      if (e.key === CART_KEY || e.key === ORDERS_KEY) {
        updateTopbarBadge();
        cb();
      }
    });
    if (bc) {
      bc.addEventListener("message", function () {
        updateTopbarBadge();
        cb();
      });
    }
  }

  window.RMStore = {
    catalogProducts: catalogProducts,
    escapeHtml: escapeHtml,
    formatRupiah: formatRupiah,
    formatWaktu: formatWaktu,
    getCart: getCart,
    addToCart: addToCart,
    updateCartQty: updateCartQty,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
    getCartCount: getCartCount,
    getCartTotals: getCartTotals,
    getOrders: getOrders,
    getOrderById: getOrderById,
    createOrder: createOrder,
    renderTopbar: renderTopbar,
    renderStatusBadge: renderStatusBadge,
    generateDummyQrisSvg: generateDummyQrisSvg,
    showToast: showToast,
    onRealtimeUpdate: onRealtimeUpdate
  };
})(window);