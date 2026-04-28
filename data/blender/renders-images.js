// data/renders-images.js
// Bild-URLs für alle Renderings – optimiert für Lazy Loading
// Thumbnails werden sofort angezeigt, Fullsize-Bilder bei Bedarf geladen

const CLOUD = 'dglahdmrm';

// Cloudinary-Transformationen für optimale Performance
const TRANSFORMS = {
  thumb: 'w_1280,h_720,c_fill,q_80,f_auto',   // Galerie, Thumbnails, Scroll‑Strip
  full:  'w_1920,h_1080,c_fit,q_90,f_auto'    // Lightbox, Detailansicht
};

function cloudinaryUrl(publicId, mode = 'thumb') {
  const t = TRANSFORMS[mode] || TRANSFORMS.thumb;
  return `https://res.cloudinary.com/${CLOUD}/image/upload/${t}/${publicId}`;
}

function img(versionedId, caption = '') {
  return {
    thumb: cloudinaryUrl(versionedId, 'thumb'),
    full:  cloudinaryUrl(versionedId, 'full'),
    caption
  };
}

// Bild-Datenbank nach ID
export const RENDERS_IMAGES = {
  1: [
    img('v1772824983/banana_protocol_003_wqdfzs.png', 'Variante I'),
    img('v1772824983/banana_protocol_002_ugso1o.png', 'Variante II'),
    img('v1772824983/banana_protocol_001_hkf2kb.png', 'Variante III'),
  ],
  2: [
    img('v1773175865/mask_aherogirl_001_lyknsv.png', 'Vorderansicht'),
    img('v1773175865/mask_aherogirl_002_doz5ec.png', 'Detailshot'),
  ],
  3: [
    img('v1773175867/damiur_002_ip9p5f.jpg',  'Hauptrender'),
    img('v1773175867/damiur_003_iin9kv.jpg',  'Profil'),
    img('v1773175867/damiur_004_ik8s0l.jpg',  'Detail'),
    img('v1773175865/damiur_001_mmyeoh.jpg',  'Gesamtansicht'),
  ],
  4: [
    img('v1773175866/vanir_mask_003_ktwdjr.png', 'Hauptrender'),
    img('v1773175866/vanir_mask_002_fjjq4d.png', 'Seitenansicht'),
    img('v1773175866/vanir_mask_004_qqzmrk.png', 'Detail'),
    img('v1773175867/vanir_mask_001_vrowjo.png', 'Gesamtansicht'),
  ],
  5: [
    img('v1773175904/lesion_trap_001_mojbxt.png', 'Hauptrender'),
    img('v1773175904/lesion_trap_002_v0aism.png', 'Detailshot'),
  ],
  6: [
    img('v1773175903/valkyrie_cam_002_wwtvmz.png', 'Hauptrender'),
    img('v1773175903/valkyrie_cam_001_nskpet.png', 'Perspektive'),
  ],
  7: [
    img('v1773175741/ch_girl_001_agajis.png', 'Hauptrender'),
    img('v1773175741/4-Test_001_pn2pnf.jpg',  'Farbvariante II'),
    img('v1773175741/3-Test_002_kygbev.jpg',  'Farbvariante III'),
    img('v1773175740/2-Test_004_ztmtef.jpg',  'Farbvariante IV'),
  ],
  8: [
    img('v1773175769/chair_001_003_gvdweg.png', 'Hauptrender'),
    img('v1773175767/chair_001_001_mpidcf.png', 'Seitenansicht'),
    img('v1773175768/chair_001_004_rsnfil.png', 'Perspektive'),
    img('v1773175768/chair_001_002_k898ho.png', 'Detail'),
  ],
  9: [
    img('v1773175781/chair_002_001_sn3dog.png', 'Hauptrender'),
    img('v1773175782/chair_002_004_qhsvt6.png', 'Perspektive'),
    img('v1773175781/chair_002_003_sjkjmp.png', 'Detail'),
    img('v1773175782/chair_002_002_abpxu2.png', 'Seitenansicht'),
  ],
  10: [
    img('v1773175785/chair_003_003_bq2hjj.png', 'Hauptrender'),
    img('v1773175786/chair_003_001_fz3vso.png', 'Seitenansicht'),
    img('v1773175787/chair_003_002_enx7mt.png', 'Detail'),
  ],
  11: [
    img('v1773175789/chair_004_002_abvxpi.png', 'Hauptrender'),
    img('v1773175790/chair_004_001_uvgisg.png', 'Perspektive'),
    img('v1773175788/chair_004_003_vcriq8.png', 'Detail'),
  ],
  12: [
    img('v1773491472/chair_005_002_ivha0m.png', 'Hauptrender'),
    img('v1773491475/chair_005_001_sspg6i.png', 'Seitenansicht'),
    img('v1773491473/chair_005_003_pbjhcp.png', 'Detail'),
  ],
  13: [
    img('v1773491477/chair_006_002_f13cer.png', 'Hauptrender'),
    img('v1773491472/chair_006_001_ow2pj0.png', 'Perspektive'),
  ],
  14: [
    img('v1773491474/chair_007_001_hiccpv.png', 'Hauptrender'),
    img('v1773491473/chair_007_002_fuyb3q.png', 'Perspektive'),
    img('v1773491476/chair_007_003_cnzbcy.png', 'Detail'),
  ],
  15: [
    img('v1773491476/chair_008_001_fjsyur.png', 'Hauptrender'),
    img('v1773491477/chair_008_002_ahxewr.png', 'Seitenansicht'),
    img('v1773491478/chair_008_003_bcu8yc.png', 'Detail'),
  ],
  16: [
    img('v1773491478/chair_009_003_mqnxww.png', 'Hauptrender'),
    img('v1773491477/chair_009_002_pahezp.png', 'Perspektive'),
    img('v1773491477/chair_009_001_pvl8zb.png', 'Seitenansicht'),
  ],
  17: [
    img('v1773491480/chair_010_002_zygbn4.png', 'Hauptrender'),
    img('v1773491474/chair_010_001_apv3cb.png', 'Seitenansicht'),
    img('v1773491474/chair_010_003_wogga1.png', 'Detail'),
  ],
  18: [
    img('v1773491479/chair_011_001_smfnml.png', 'Hauptrender'),
    img('v1773491479/chair_011_002_xfazmr.png', 'Detailansicht'),
  ],
  19: [
    img('v1773491479/chair_012_002_e4musg.png', 'Hauptrender'),
    img('v1773491479/chair_012_001_tqz8u2.png', 'Seitenansicht'),
  ],
  20: [
    img('v1773491481/chair_013_001_tbxvtf.png', 'Hauptrender'),
    img('v1773491475/chair_013_002_qvzwyj.png', 'Detailansicht'),
  ],
  21: [
    img('v1773491482/chair_014_003_zn417k.png', 'Hauptrender'),
    img('v1773491481/chair_014_001_jtyu45.png', 'Seitenansicht'),
    img('v1773491481/chair_014_002_zetaas.png', 'Detail'),
  ],
  22: [
    img('v1773491486/chair_015_002_emhkw0.png', 'Hauptrender'),
    img('v1773491481/chair_015_001_fjqph2.png', 'Seitenansicht'),
    img('v1773491483/chair_015_003_fervp2.png', 'Detail'),
  ],
  23: [
    img('v1773491483/chair_016_001_zhqa1t.png', 'Hauptrender'),
    img('v1773491484/chair_016_002_iwxpqm.png', 'Seitenansicht'),
    img('v1773491484/chair_016_003_dkngc9.png', 'Detail'),
  ],
  24: [
    img('v1773491483/chair_017_001_z6kket.png', 'Hauptrender'),
    img('v1773491484/chair_017_002_o2lerq.png', 'Detailansicht'),
  ],
  25: [
    img('v1773491485/chair_018_001_biaaxf.png', 'Hauptrender'),
    img('v1773491486/chair_018_002_xauhdm.png', 'Seitenansicht'),
    img('v1773491486/chair_018_003_rtdiox.png', 'Detail'),
  ],
  26: [
    img('v1773960067/vase_001_001_qrvb2m.png', 'Hauptrender'),
    img('v1773960057/vase_001_002_z4rkez.png', 'Detailansicht'),
  ],
  27: [
    img('v1773960052/vase_002_001_ilul1u.png', 'Hauptrender'),
    img('v1773960055/vase_002_003_v3xpyu.png', 'Perspektive'),
    img('v1773960059/vase_002_002_wiqqab.png', 'Detail'),
  ],
  28: [
    img('v1773960063/vase_003_001_lpiqit.png', 'Hauptrender'),
    img('v1773960065/vase_003_003_nds4u1.png', 'Gegenlicht'),
    img('v1773960061/vase_003_002_pruufz.png', 'Seitenansicht'),
    img('v1773960054/vase_003_004_xwst8m.png', 'Detail'),
  ],
  29: [img('v1773957346/kitchen_001_iywva1.png', 'Hauptrender')],
  30: [
    img('v1773957350/trunk_001_hp9jom.png', 'Hauptrender'),
    img('v1773957350/trunk_002_cdcp81.png', 'Seitenansicht'),
    img('v1773957353/trunk_003_fbq8nm.png', 'Detail'),
  ],
  31: [
    img('v1773957352/casino_001_m0vljn.png', 'Hauptrender'),
    img('v1773957353/casino_003_r4n3qf.png', 'Detailshot'),
    img('v1773957352/casino_002_mhzpfk.png', 'Weitwinkel'),
  ],
  32: [
    img('v1773957342/outside_001_004_bnsixj.png', 'Hauptrender'),
    img('v1773957347/outside_001_003_qviqws.png', 'Weitwinkel'),
    img('v1773957347/outside_001_001_pvs5k5.png', 'Perspektive I'),
    img('v1773957348/outside_001_002_kipxhu.png', 'Perspektive II'),
    img('v1773957342/outside_001_005_chygik.png', 'Detailshot'),
  ],
  33: [
    img('v1773957343/outside_002_004_pif2mr.png', 'Hauptrender'),
    img('v1773957349/outside_002_001_hchckn.png', 'Weitwinkel'),
    img('v1773957342/outside_002_005_vhumhs.png', 'Gegenlicht'),
    img('v1773957348/outside_002_002_yjwkin.png', 'Perspektive I'),
    img('v1773957350/outside_002_003_p7zcog.png', 'Perspektive II'),
  ],
  34: [
    img('v1773957349/mushroom_003_001_d6kk3b.png', 'Hauptrender'),
    img('v1773957350/mushroom_003_002_a781cq.png', 'Detailshot'),
    img('v1773957343/mushroom_003_003_vibskx.png', 'Weitwinkel'),
  ],
  35: [img('v1773960847/outside_004_001_wzlcpc.png', 'Hauptrender')],
  36: [
    img('v1773957344/christmas_tree_003_mzkr0b.png', 'Hauptrender'),
    img('v1773957344/christmas_tree_002_zvk95t.png', 'Detailshot'),
    img('v1773957346/christmas_tree_004_mt8sy3.png', 'Weitwinkel'),
    img('v1773957349/christmas_tree_001_qubkfe.png', 'Atmosphäre'),
  ],
  37: [
    img('v1773957346/kuno_koi_001_mc8lno.png', 'Hauptrender'),
    img('v1773957346/kuno_koi_002_bcugab.png', 'Detailansicht'),
  ],
  38: [
    img('v1773957357/hat_001_dew0xl.png', 'Hauptrender'),
    img('v1773957359/hat_004_jnpvd3.png', 'Perspektive'),
    img('v1773957356/hat_002_yplg3a.png', 'Seitenansicht'),
    img('v1773957353/hat_005_ck9s8b.png', 'Detailshot'),
    img('v1773957356/hat_003_sru4cr.png', 'Weitwinkel'),
  ],
  39: [
    img('v1773957351/blade_001_001_gx26uz.png', 'Hauptrender'),
    img('v1773957355/blade_001_002_ousgfu.png', 'Detailansicht'),
  ],
  40: [
    img('v1773957355/blade_002_003_nykruc.png', 'Hauptrender'),
    img('v1773957354/blade_002_004_y4blr4.png', 'Detailshot'),
    img('v1773957354/blade_002_001_abbpe9.png', 'Gesamtansicht'),
    img('v1773957355/blade_002_002_mgusgn.png', 'Seitenansicht'),
  ],
  41: [
    img('v1773960860/ks_logo_001_lt83le.png', 'Still Frame I'),
    img('v1773960865/ks_logo_002_spy0o4.png', 'Still Frame II'),
    img('v1773960863/ks_logo_003_zpkaep.png', 'Still Frame III'),
  ],
  42: [
    img('v1776951333/004_sce9l8.png', 'Variante I'),
    img('v1776951333/001_rzxdl1.png', 'Variante II'),
    img('v1776951339/003_ktivzu.png', 'Variante III'),
    img('v1776951333/002_xzebjq.png', 'Variante III'),
  ],
  43: [img('v1776951368/001_yptpgu.png', 'Variante I'),],
};

// Schneller Zugriff auf Thumbnails (für Galerie-Übersicht)
export const RENDERS_THUMBS = {};
for (const [id, images] of Object.entries(RENDERS_IMAGES)) {
  RENDERS_THUMBS[id] = images[0]?.thumb || 'assets/images/placeholder.png';
}

export function getRenderImages(id) {
  return RENDERS_IMAGES[id] || [];
}

// Thumbnail sofort verfügbar (synchron)
export function getThumbnail(id) {
  return RENDERS_THUMBS[id];
}