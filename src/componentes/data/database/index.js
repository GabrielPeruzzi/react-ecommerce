import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, query, where, collection, setDoc, Timestamp} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyACZSI1K6AgmobhIpocmSn3F4iIuz0XHb8",
    authDomain: "desafiocoderhousereactdanielg.firebaseapp.com",
    projectId: "desafiocoderhousereactdanielg",
    storageBucket: "desafiocoderhousereactdanielg.appspot.com",
    messagingSenderId: "354147849886",
    appId: "1:354147849886:web:8be085fe662bbc7a8e8d8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems(){
    const miColec = collection(firestoreDB, 'items');
    /*getDocs(miColec).then(result => console.log(result))*/

    const itemsSnap = await getDocs(miColec);

    return itemsSnap.docs.map(doc =>{
        return{
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItemByCategory(categoryId){
    const miColec = collection(firestoreDB, 'items');
    //const queryiItems = query(miColec, where("categoria","==", categoryId));
    const queryiItems = query(miColec, where("categoria", "array-contains", categoryId));




    const itemsSnap = await getDocs(queryiItems);
    return itemsSnap.docs.map(doc=>{
        return{
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItem(id){
    const miColec = collection(firestoreDB, 'items');
    const itemRef =doc(miColec, id);
    const itemSnap = await getDoc(itemRef); 

    return { ...itemSnap.data(), id: itemSnap.id };
}

export async function dataToFirebase(){
    const items =[
        {
            tittle: "DISCO DURO HDD 1TB SEAGATE BARRACUDA SATA III",
            imgUrl: "https://www.venex.com.ar/products_images/1586464173_disc1.jpg",
            categoria: ["discosMecanicos"],
            portada: true,
            stock: 5,
            price: 5820,
        },
        {
            tittle: "DISCO DURO HDD 1 TB WESTERN DIGITAL WD BLUE",
            imgUrl: "https://www.venex.com.ar/products_images/1586464610_disc3.jpg",
            categoria: ["discosMecanicos"],
            portada: false,
            stock: 8,
            price: 6040,
        },
        {
            tittle: "DISCO DURO HDD 1 TB WESTERN DIGITAL WD SATA III 64MB/S PURPLE",
            imgUrl: "https://www.venex.com.ar/products_images/1586464823_disc5.jpg",
            categoria: ["discosMecanicos"],
            portada: false,
            stock: 10,
            price: 6790,
        },
        
    
    
        {
            tittle: "DISCO SOLIDO SSD 120GB ADATA SATA III SU650",
            imgUrl: "https://www.venex.com.ar/products_images/1576699630_asu650ss120gtr.jpg",
            categoria: ["discosSolidos"],
            portada: false,
            stock: 5,
            price: 3095,
        },
        {
            tittle: "DISCO SOLIDO SSD 120GB GIGABYTE SATA III GP-GSTF",
            imgUrl: "https://www.venex.com.ar/products_images/1537278903_2018070417395493_big.png",
            categoria: ["discosSolidos"],
            portada: true,
            stock: 8,
            price: 3199,
        },
        {
            tittle: "DISCO SOLIDO SSD 240GB ADATA M2 SATA ASU650",
            imgUrl: "https://www.venex.com.ar/products_images/1612471859_productgallery7028.jpg",
            categoria: ["discosSolidos"],
            portada: false,
            stock: 10,
            price: 4899,
        },
    
    
        {
            tittle: "FUENTE GIGABYTE 450W P450W 80+ BRONZE",
            imgUrl: "https://www.venex.com.ar/products_images/1613753649_concepto-4628218.png",
            categoria: ["fuentesDePoder"],
            portada: false,
            stock: 5,
            price: 7490,
        },
        {
            tittle: "FUENTE AEROCOOL DORADO 750W 80+ GOLD ARGB",
            imgUrl: "https://www.venex.com.ar/products_images/1638552320_fuente.png",
            categoria: ["fuentesDePoder"],
            portada: false,
            stock: 8,
            price: 15490,
        },
        {
            tittle: "FUENTE CORSAIR CX750F 750W FULL MODULAR RGB 80+ BRONZE",
            imgUrl: "https://www.venex.com.ar/products_images/1630702216_-base-cxf-rgb-blk-psu-2020-config-gallery-cx750pl,f-rgb-black-01.png",
            categoria: ["fuentesDePoder"],
            portada: true,
            stock: 10,
            price: 21990,
        },
        
    
    
        {
            tittle: "GABINETE CORSAIR ICUE 4000X RGB TG BLACK",
            imgUrl: "https://www.venex.com.ar/products_images/1640625716_1.png",
            categoria: ["gabinetes"],
            portada: false,
            stock: 5,
            price: 22490,
        },
        {
            tittle: "GABINETE CORSAIR 5000D TG WHITE",
            imgUrl: "https://www.venex.com.ar/products_images/1649182836_sdfgsdgfdfg.png",
            categoria: ["gabinetes"],
            portada: false,
            stock: 8,
            price: 27999,
        },
        {
            tittle: "GABINETE AEROCOOL ATOMIC",
            imgUrl: "https://www.venex.com.ar/products_images/1648655727_hfghfgh.png,",
            categoria: ["gabinetes"],
            portada: false,
            stock: 10,
            price: 6599,
        },
        {
            tittle: "GABINETE AEROCOOL BIONIC G BK V2",
            imgUrl: "https://www.venex.com.ar/products_images/1622142301_newproject-2021-01-17t200604-1697851.png",
            categoria: ["gabinetes"],
            portada: true,
            stock: 10,
            price: 8019,
        },
    
    
        {
            tittle: "MEMORIA RAM DDR4 16GB 3600MHZ PATRIOT VIPER 4 BLACKOUT CL18 2X8",
            imgUrl: "https://www.venex.com.ar/products_images/1607618144_viper_4_blackout_b_web.jpg",
            categoria: ["memoriasRam", "componentesPC"],
            portada: false,
            stock: 5,
            price: 12490,
        },
        {
            tittle: "MEMORIA RAM KINGSTON FURY BEAST DDR4 8GB 2666MHZ RGB",
            imgUrl: "https://www.venex.com.ar/products_images/1627495976_1626977867_1.jpg",
            categoria: ["memoriasRam", "componentesPC"],
            portada: false,
            stock: 8,
            price: 6990,
        },
        {
            tittle: "MEMORIA RAM DDR4 8GB 3600MHZ ADATA XPG SPECTRIX D50G RGB",
            imgUrl: "https://www.venex.com.ar/products_images/1613754208_ax4u360038g18a-st50-2.jpg",
            categoria: ["memoriasRam", "componentesPC"],
            portada: true,
            stock: 10,
            price: 7590,
        },
    
    
        {
            tittle: "MOTHERBOARD MSI B560M BAZOOKA S1200 11VA",
            imgUrl: "https://www.venex.com.ar/products_images/1647887819_product_16137221929d03ba04ccd3b5e76140a5533301abcd.png",
            categoria: ["motherBoard","componentesPC"],
            portada: false,
            stock: 5,
            price: 20499,
        },
        {
            tittle: "MOTHERBOARD MSI A320M PRO-VH AM4",
            imgUrl: "https://www.venex.com.ar/products_images/1647884239_product_8_20200915102556_5f6026344bdda.png",
            categoria: ["motherBoard","componentesPC"],
            portada: false,
            stock: 8,
            price: 6999,
        },
        {
            tittle: "MOTHERBOAD ASUS A320M-K AM4",
            imgUrl: "https://www.venex.com.ar/products_images/1585334513_asus_a320mk_am4.jpg",
            categoria: ["motherBoard","componentesPC"],
            portada: true,
            stock: 10,
            price: 8379,
        },
        {
            tittle: "MOTHERBOARD ASUS PRIME B550M-K AM4",
            imgUrl: "https://www.venex.com.ar/products_images/1602010489_p_setting_fff_1_90_end_600.jpg",
            categoria: ["motherBoard","componentesPC"],
            portada: false,
            stock: 10,
            price: 16499,
        },
    
    
        {
            tittle: "PLACA DE RED USB TP-LINK TL-WN725N NANO WIFI 150M",
            imgUrl: "https://www.venex.com.ar/products_images/a.jpg",
            categoria: ["placasDeRed", "conectividad","componentesPC"],
            portada: false,
            stock: 5,
            price: 1149,
        },
        {
            tittle: "PLACA DE RED TP-LINK WIRELESS USB WN821N 300MBPS",
            imgUrl: "https://www.venex.com.ar/products_images/placaderedtplinkwirelessusbwn821n300mbps.jpg",
            categoria: ["placasDeRed","conectividad","componentesPC"],
            portada: true,
            stock: 8,
            price: 1419,
        },
        {
            tittle: "PLACA DE RED PCI-E TP-LINK TL-WN881ND",
            imgUrl: "https://www.venex.com.ar/products_images/1623270974_tl-wn881nd_un_2.0_01_large_1507530821899a.jpg",
            categoria: ["placasDeRed","conectividad","componentesPC"],
            portada: false,
            stock: 10,
            price: 7290,
        },
        {
            tittle: "FAN COOLER CPU COOLER MASTER H410R RGB",
            imgUrl: "https://www.venex.com.ar/products_images/1607786561_rrh41020pcr1_2.jpg",
            categoria: ["placasDeRed","conectividad","componentesPC"],
            portada: false,
            stock: 10,
            price: 2199,
        },
        {
            tittle: "PLACA DE RED USB TP-LINK TL-WN822N",
            imgUrl: "https://www.venex.com.ar/products_images/1647627937_dklfgkdfg.png",
            categoria: ["placasDeRed","conectividad","componentesPC"],
            portada: true,
            stock: 10,
            price: 1859,
        },
    
    
        {
            tittle: "PLACA DE VIDEO PALIT NVIDIA GEFORCE RTX 2060 SUPER DUAL 8GB",
            imgUrl: "https://www.venex.com.ar/products_images/1621431412_placa-de-video-palit-nvidia-geforce-rtx-2060-super-dual-8gb.jpg",
            categoria: ["placasDeVideo","graficos","componentesPC"],
            portada: false,
            stock: 5,
            price: 114999,
        },
        {
            tittle: "PLACA DE VIDEO SAPPHIRE RADEON RX 6500 XT PULSE 4GB",
            imgUrl: "https://www.venex.com.ar/products_images/1645468575_rx6500_pulse_lite_box_card.jpg",
            categoria: ["placasDeVideo","graficos","componentesPC"],
            portada: false,
            stock: 8,
            price: 46999,
        },
        {
            tittle: "PLACA DE VIDEO ASUS TUF RADEON RX 6500 XT O4G",
            imgUrl: "https://www.venex.com.ar/products_images/1648655727_hfghfgh.png,",
            categoria: ["placasDeVideo","graficos","componentesPC"],
            portada: true,
            stock: 10,
            price: 58499,
        },
        {
            tittle: "PLACA DE VIDEO ASROCK RADEON RX 6900 XT PHANTOM GAMING D 16GB",
            imgUrl: "https://www.venex.com.ar/products_images/1645212338_1.png",
            categoria: ["placasDeVideo","graficos","componentesPC"],
            portada: false,
            stock: 10,
            price: 239999,
        },
    
    
        {
            tittle: "MICROPROCESADOR INTEL CORE I7 10700F COMETLAKE 4.8GHZ S/GRAFICOS",
            imgUrl: "https://www.venex.com.ar/products_images/1626718395_microprocesador-intel-core-i7-10700f-cometlake-4.8ghz-sgraficos.jpg",
            categoria: ["procesadores","componentesPC"],
            portada: false,
            stock: 5,
            price: 42999,
        },
        {
            tittle: "MICROPROCESADOR INTEL CORE I5 11400 ROCKET LAKE 6/12 4.4GHZ S1200",
            imgUrl: "https://www.venex.com.ar/products_images/1617039528_1010815-1139517-800.jpg",
            categoria: ["procesadores","componentesPC"],
            portada: false,
            stock: 8,
            price: 35490,
        },
        {
            tittle: "MICROPROCESADOR INTEL CORE I5 10400F COMETLAKE 6/12 4.3GHZ 12MB S1200",
            imgUrl: "https://www.venex.com.ar/products_images/1617202625_1019-producto-i5i5-system-linq-enumerabletakeiteratord-251system-char.png",
            categoria: ["procesadores","componentesPC"],
            portada: true,
            stock: 10,
            price: 29237,
        },
        {
            tittle: "MICROPROCESADOR AMD RYZEN 5 5600X 6/12 4.6GHZ S/G ZEN3",
            imgUrl: "https://www.venex.com.ar/products_images/1605015483_microprocesadoramdryzen55600x.jpg",
            categoria: ["procesadores","componentesPC"],
            portada: false,
            stock: 10,
            price: 30000,
        },
        {
            tittle: "MICROPROCESADOR AMD RYZEN 5600G 4.4 GHZ AM4",
            imgUrl: "https://www.venex.com.ar/products_images/1638466775_sdfdgfeshsd.jpg",
            categoria: ["procesadores","componentesPC"],
            portada: false,
            stock: 10,
            price: 34095,
        },
        {
            tittle: "MICROPROCESADOR AMD RYZEN 5 4650G PRO AM4 OEM BULK",
            imgUrl: "https://www.venex.com.ar/products_images/1630950844_d564fghd.jpg",
            categoria: ["procesadores","componentesPC"],
            portada: false,
            stock: 10,
            price: 30990,
        },
    
    
        {
            tittle: "FAN COOLER GABINETE GENERICO (VER COMPATIBILIDAD)",
            imgUrl: "https://www.venex.com.ar/products_images/1639072859_fan.png",
            categoria: ["refrigeracion","componentesPC"],
            portada: false,
            stock: 5,
            price: 929,
        },
        {
            tittle: "FAN COOLER COOLER MASTER SICKLEFLOW 120 RGB",
            imgUrl: "https://www.venex.com.ar/products_images/1611169953_sickleflow-120-rgb-gallery-1-zoom.png",
            categoria: ["refrigeracion","componentesPC"],
            portada: true,
            stock: 8,
            price: 4490,
        },
        {
            tittle: "FAN COOLER CPU AEROCOOL MIRAGE 5 ARGB 5P",
            imgUrl: "https://www.venex.com.ar/products_images/1614001079_mirage-5-infographic700x700-01-1.png",
            categoria: ["refrigeracion","componentesPC"],
            portada: false,
            stock: 10,
            price: 7290,
        },
        {
            tittle: "FAN COOLER CPU COOLER MASTER H410R RGB",
            imgUrl: "https://www.venex.com.ar/products_images/1607786561_rrh41020pcr1_2.jpg",
            categoria: ["refrigeracion","componentesPC"],
            portada: false,
            stock: 10,
            price: 8490,
        },
        {
            tittle: "FAN COOLER COOLER MASTER MA410M ARGB",
            imgUrl: "https://www.venex.com.ar/products_images/1647627937_dklfgkdfg.png",
            categoria: ["refrigeracion","componentesPC"],
            portada: false,
            stock: 10,
            price: 14499,
        },
    
    /*notebooks*/
        {
            tittle: "NOTEBOOK BANGHO MAX L4 I1 F CELERON 5205U 4GB SSD 120GB 14 FREE",
            imgUrl: "https://www.venex.com.ar/products_images/1647962114_noteook-bangho-max-l4-i1-f-celeron-5205u-4gb-ssd-120gb-14-free.jpg",
            categoria: ["notebooks"],
            portada: false,
            stock: 10,
            price: 40990,
        },
        {
            tittle: "NOTEBOOK HP 240 G8 I3 1115G4 8GB 1TB 14 W11",
            imgUrl: "https://www.venex.com.ar/products_images/1650997043_notebook-hp-240-g8-i3-1115g4-8gb-1tb-14-w11.jpg",
            categoria: ["notebooks"],
            portada: false,
            stock: 10,
            price: 71990,
        },
        {
            tittle: "NOTEBOOK LENOVO IDEAPAD S340-14 RYZEN 3 3200U 8GB 1TB 14 W10",
            imgUrl: "https://www.venex.com.ar/products_images/1631647754_notebook-lenovo-ideapad-s340-14-ryzen-3-3200u-8gb-1tb-14.jpg",
            categoria: ["notebooks"],
            portada: false,
            stock: 10,
            price: 89990,
        },
        {
            tittle: "NOTEBOOK BANGHO MAX L4 I1 F CELERON 5205U 4GB SSD 120GB 14 FREE",
            imgUrl: "https://www.venex.com.ar/products_images/1647962114_noteook-bangho-max-l4-i1-f-celeron-5205u-4gb-ssd-120gb-14-free.jpg",
            categoria: ["notebooks"],
            portada: false,
            stock: 10,
            price: 40990,
        },
        {
            tittle: "NOTEBOOK ASUS X515EA I5 1135G7 8GB SSD 256GB 15.6 FREE",
            imgUrl: "https://www.venex.com.ar/products_images/1630931164_ad5s6f14gs.jpg",
            categoria: ["notebooks"],
            portada: false,
            stock: 10,
            price: 104990,
        },
        {
            tittle: "NOTEBOOK LENOVO THINKPAD L15 G2 I3 1115G4 8GB SSD 256GB 15.6 FREE",
            imgUrl: "https://www.venex.com.ar/products_images/1642184574_notebook-lenovo-thinkpad-l15-g2-i3-1115g4-8gb-ssd-256gb-15.6-free.jpg",
            categoria: ["notebooks"],
            portada: false,
            stock: 10,
            price: 114990,
        },
        {
            tittle: "NOTEBOOK LENOVO V15 G2 I5 1135G7 8GB SSD 256GB 15.6 FREE",
            imgUrl: "https://www.venex.com.ar/products_images/1650999681_notebook-lenovo-v15-g2-i5-1135g7-8gb-ssd-256gb-15.6-free.jpg",
            categoria: ["notebooks"],
            portada: false,
            stock: 10,
            price: 115990,
        },
    
    /*perifericos*/
    {
        tittle: "TECLADO HYPERX ALLOY CORE RGB",
        imgUrl: "https://www.venex.com.ar/products_images/1562941402_170562_large.jpg",
        categoria: ["teclados"],
        portada: false,
        stock: 10,
        price: 4999,
    },
    {
        tittle: "TECLADO MSI VIGOR GK50 MECANICO RGB KAILH LOW PROFILE",
        imgUrl: "https://www.venex.com.ar/products_images/1639075392_gk50.png",
        categoria: ["teclados"],
        portada: false,
        stock: 10,
        price: 6599,
    },
    {
        tittle: "TECLADO HYPERX ALLOY ORIGINS CORE RED MECANICO",
        imgUrl: "https://www.venex.com.ar/products_images/1581968287_rtrt.jpg",
        categoria: ["teclados"],
        portada: false,
        stock: 10,
        price: 9990,
    },
    {
        tittle: "TECLADO PATRIOT VIPER V785 NEGRO CON SWITCH WHITE RGB",
        imgUrl: "https://www.venex.com.ar/products_images/1629476219_3464568468545678.jpg",
        categoria: ["teclados"],
        portada: false,
        stock: 10,
        price: 10990,
    },
    {
        tittle: "TECLADO LOGITECH G G815 CARBON ENG",
        imgUrl: "https://www.venex.com.ar/products_images/1591661283_1.jpg",
        categoria: ["teclados"],
        portada: false,
        stock: 10,
        price: 19999,
    },
    
    
    {
        tittle: "MOUSEPAD COOLER MASTER MP511 CORDURA L",
        imgUrl: "https://www.venex.com.ar/products_images/1641991864_mp511-l-gallery-2-zoom.png",
        categoria: ["mousepads"],
        portada: false,
        stock: 10,
        price: 2490,
    },
    {
        tittle: "MOUSEPAD REDRAGON KUNLUN L 880X420X4MM",
        imgUrl: "https://www.venex.com.ar/products_images/1534178547_hbj.png",
        categoria: ["mousepads"],
        portada: false,
        stock: 10,
        price: 3099,
    },
    {
        tittle: "MOUSE PAD LOGITECH G G840 KDA",
        imgUrl: "https://www.venex.com.ar/products_images/1624913021_g840-kda-gallery-1.png",
        categoria: ["mousepads"],
        portada: false,
        stock: 10,
        price: 5690,
    },
    {
        tittle: "MOUSE PAD GIGABYTE AORUS AMP 500",
        imgUrl: "https://www.venex.com.ar/products_images/1508420956_2017062318483083_big.png",
        categoria: ["mousepads"],
        portada: false,
        stock: 10,
        price: 5499,
    },
    
    
    {
        tittle: "MOUSE GAMER HYPERX PULSEFIRE CORE RGB",
        imgUrl: "https://www.venex.com.ar/products_images/1547144217_big_hxmc004b.jpg",
        categoria: ["mouse"],
        portada: false,
        stock: 10,
        price: 1690,
    },
    {
        tittle: "MOUSE LOGITECH G PRO HERO",
        imgUrl: "https://www.venex.com.ar/products_images/1570481221_644486_picture_1524050885.jpg",
        categoria: ["mouse"],
        portada: false,
        stock: 10,
        price: 4090,
    },
    {
        tittle: "MOUSE COOLER MASTER MM720 BLANCO MATTE",
        imgUrl: "https://www.venex.com.ar/products_images/1631127432_mm720-white-matte-2-zoom.png",
        categoria: ["mouse"],
        portada: false,
        stock: 10,
        price: 4690,
    },
    {
        tittle: "MOUSE COOLER MASTER MM711 BLANCO MATTE RGB",
        imgUrl: "https://www.venex.com.ar/products_images/1631126912_6789.png",
        categoria: ["mouse"],
        portada: false,
        stock: 10,
        price: 5499,
    },
    {
        tittle: "MOUSE LOGITECH WIRELESS MX VERTICAL ERGONOMIC",
        imgUrl: "https://www.venex.com.ar/products_images/1542826787_mxverticalpdp.png",
        categoria: ["mouse"],
        portada: false,
        stock: 10,
        price: 9290,
    },
    {
        tittle: "MOUSE HYPERX PULSEFIRE DART RGB",
        imgUrl: "https://www.venex.com.ar/products_images/1569616526_hyperx_pulsefire_dart_2_angled_back.jpg",
        categoria: ["mouse"],
        portada: false,
        stock: 10,
        price: 10490,
    },
    
    
    {
        tittle: "AURICULAR REDRAGON H220 THEMIS C/MIC",
        imgUrl: "https://www.venex.com.ar/products_images/1601137961_h2201_headset_450x450.png",
        categoria: ["auriculares"],
        portada: false,
        stock: 10,
        price: 2845,
    },
    {
        tittle: "AURICULARES XIAOMI EARBUDS 2S GAMING TRUE WIRELESS",
        imgUrl: "https://www.venex.com.ar/products_images/1623097548_auriculares-xiaomi-redmi-airdots-2s-gaming-tactil-bluetooth1-e211237a7ee169558416197898307773-1024-1024.jpg",
        categoria: ["auriculares"],
        portada: false,
        stock: 10,
        price: 4499,
    },
    {
        tittle: "AURICULAR REDRAGON H350 PANDORA 7.1",
        imgUrl: "https://www.venex.com.ar/products_images/1621444489_h350-pandora-pngweb-4.png",
        categoria: ["auriculares"],
        portada: false,
        stock: 10,
        price: 5545,
    },
    {
        tittle: "AURICULARES XIAOMI REDMI BUDS 3 WHITE",
        imgUrl: "https://www.venex.com.ar/products_images/1641241712_redmi_buds_3.png",
        categoria: ["auriculares"],
        portada: false,
        stock: 10,
        price: 6819,
    },
    {
        tittle: "AURICULAR LOGITECH ASTRO A10 GREY/BLUE PS4/PC",
        imgUrl: "https://www.venex.com.ar/products_images/1540049982_3ah10psx9y602_angled.jpg",
        categoria: ["auriculares"],
        portada: false,
        stock: 10,
        price: 9950,
    },
    
    
    {
        tittle: "PARLANTES GENIUS SP-Q160 GRIS",
        imgUrl: "https://www.venex.com.ar/products_images/1617629728_r65er.png",
        categoria: ["parlantes"],
        portada: false,
        stock: 10,
        price: 1429,
    },
    {
        tittle: "PARLANTE GENIUS USB SP-HF180 BLACK",
        imgUrl: "https://www.venex.com.ar/products_images/1579636120_rrtgtgfg.jpg",
        categoria: ["parlantes"],
        portada: false,
        stock: 10,
        price: 1639,
    },
    {
        tittle: "PARLANTE JBL GO 2 BLUETOOTH ROJO",
        imgUrl: "https://www.venex.com.ar/products_images/1574353209_ahjasjs.jpg",
        categoria: ["parlantes"],
        portada: false,
        stock: 10,
        price: 6929,
    },
    {
        tittle: "PARLANTE BLUETOOTH GENIUS SP-HF2800 BT",
        imgUrl: "https://www.venex.com.ar/products_images/1647371496_sdfgsdfg.jpg",
        categoria: ["parlantes"],
        portada: false,
        stock: 10,
        price: 18909,
    },
    {
        tittle: "PARLANTE PORTATIL BLUETOOTH JBL PULSE 3 WHITE",
        imgUrl: "https://www.venex.com.ar/products_images/1615385714_jbl_jblpulse3whtam_pulse_3_waterproof_portable_1353405.jpg",
        categoria: ["parlantes"],
        portada: false,
        stock: 10,
        price: 51699,
    },
    
    
    {
        tittle: "JOYSTICK REDRAGON SATURN PC/PS3 USB",
        imgUrl: "https://www.venex.com.ar/products_images/1534179393_fg.png",
        categoria: ["yoysticks"],
        portada: false,
        stock: 10,
        price: 2445,
    },
    {
        tittle: "JOYSTICK LOGITECH G F710 WIRELESS GAMEPAD C/RECEPTOR PC",
        imgUrl: "https://www.venex.com.ar/products_images/1521490446_l4665881.jpg",
        categoria: ["yoysticks"],
        portada: false,
        stock: 10,
        price: 5549,
    },
    
    
    {
        tittle: "MICROFONO LOGITECH BLUE SNOWBALL WHITE",
        imgUrl: "https://www.venex.com.ar/products_images/1584041184_blues.jpg",
        categoria: ["microfonos"],
        portada: false,
        stock: 10,
        price: 6090,
    },
    {
        tittle: "MICROFONO TRUST GXT 244 BUZZ",
        imgUrl: "https://www.venex.com.ar/products_images/1616526916_23466_pictures_product_visual_1.png",
        categoria: ["microfonos"],
        portada: false,
        stock: 10,
        price: 8490,
    },
    {
        tittle: "MICROFONO HYPERX QUADCAST CONDENSADOR MULTIPATRON",
        imgUrl: "https://www.venex.com.ar/products_images/1560875247_hxproductmicquadcast1zmlg.jpg",
        categoria: ["microfonos"],
        portada: false,
        stock: 10,
        price: 16990,
    },
    
    /* monitores*/
    
    {
        tittle: "MONITOR 22 LED SAMSUNG T350 FHD IPS 5MS HDMI VGA 75HZ",
        imgUrl: "https://www.venex.com.ar/products_images/1633033971_sd651f4s.png",
        categoria: ["monitores"],
        portada: false,
        stock: 10,
        price: 34990,
    },
    {
        tittle: "MONITOR 27 LED LG 27MK400H-B HDMI",
        imgUrl: "https://www.venex.com.ar/products_images/1571239089_crop51_l.jpg",
        categoria: ["monitores"],
        portada: false,
        stock: 10,
        price: 40999,
    },
    {
        tittle: "MONITOR 25 LENOVO G25-10 HDMI DP 144HZ",
        imgUrl: "https://www.venex.com.ar/products_images/1637096152_5s6df4gsd.jpg",
        categoria: ["monitores"],
        portada: false,
        stock: 10,
        price: 54999,
    },
    {
        tittle: "MONITOR 32 LED SAMSUNG R590 CURVO UHD 4K",
        imgUrl: "https://www.venex.com.ar/products_images/1648744210_81xzyribkll._sl1500_.jpg",
        categoria: ["monitores"],
        portada: false,
        stock: 10,
        price: 98990,
    },
    
    
    /* proyectores*/
    
    {
        tittle: "PROYECTOR BENQ EW800ST SMART WXGA 3300 LUMENES ANDROID",
        imgUrl: "https://www.venex.com.ar/products_images/1637695200_dfghdfgh.png",
        categoria: ["proyectores"],
        portada: false,
        stock: 10,
        price: 179999,
    },
    {
        tittle: "PROYECTOR EPSON X51+ XGA 3800 LUMENES",
        imgUrl: "https://www.venex.com.ar/products_images/1638552887_epson6.png",
        categoria: ["proyectores"],
        portada: false,
        stock: 10,
        price: 179999,
    },
    {
        tittle: "PROYECTOR BENQ EH600 SMART 3500 LUMENES ANDROID 1080P",
        imgUrl: "https://www.venex.com.ar/products_images/1637694496_03-eh600-front30.png",
        categoria: ["proyectores"],
        portada: false,
        stock: 10,
        price: 184699,
    },
    
    
    /* almacenamiento*/
    /* memoriaFlash*/
    {
        tittle: "MICRO SD SANDISK CON ADAPTADOR SD 16 GB CLASE 10",
        imgUrl: "https://www.venex.com.ar/products_images/1583435233_micro2.jpg",
        categoria: ["memoriaFlash"],
        portada: false,
        stock: 10,
        price: 789,
    },
    {
        tittle: "MICRO SD SANDISK ULTRA CON ADAPTADOR SD 32 GB CLASE 10",
        imgUrl: "https://www.venex.com.ar/products_images/1466181543_sandisk_ultra_microsdhc_32gb_clase_10___adaptador_1.jpg",
        categoria: ["memoriaFlash"],
        portada: false,
        stock: 10,
        price: 899,
    },
    {
        tittle: "MICRO SD SANDISK C/ADAPTADOR 64GB CLASE 10",
        imgUrl: "https://www.venex.com.ar/products_images/1535719939_61zixpropnl._sl1500_.jpg",
        categoria: ["memoriaFlash"],
        portada: false,
        stock: 10,
        price: 1289,
    },
    {
        tittle: "MICRO SD 128GB SANDISK CLASE 10",
        imgUrl: "https://www.venex.com.ar/products_images/1650642380_dfldfngbd.png",
        categoria: ["memoriaFlash"],
        portada: false,
        stock: 10,
        price: 2639,
    },
    
    
    /* pendrives*/
    {
        tittle: "PENDRIVE 16GB HIKVISION M200 METAL 2.0",
        imgUrl: "https://www.venex.com.ar/products_images/1642436540_hikvision-pen-metal_11-7bab3a3fe2e5c9790c16237820854236-1024-1024.png",
        categoria: ["pendrive"],
        portada: false,
        stock: 10,
        price: 690,
    },
    {
        tittle: "PENDRIVE 32GB SANDISK ULTRA METAL USB 3.0",
        imgUrl: "https://www.venex.com.ar/products_images/1625515885_ad6f5g1adfg.png",
        categoria: ["pendrive"],
        portada: false,
        stock: 10,
        price: 1199,
    },
    {
        tittle: "PEN DRIVE SANDISK ULTRA DUAL 3.1 32GB TIPO C",
        imgUrl: "https://www.venex.com.ar/products_images/1605645509_36346346436.jpg",
        categoria: ["pendrive"],
        portada: false,
        stock: 10,
        price: 1699,
    },
    
    
    /* discosExternos*/
    {
        tittle: "DISCO DURO EXTERNO 1TB SEAGATE BASIC USB 3.0",
        imgUrl: "https://www.venex.com.ar/products_images/1601496959_seagatebasicpdpleftdrive400x400.png",
        categoria: ["discosExternos"],
        portada: false,
        stock: 10,
        price: 6599,
    },
    {
        tittle: "DISCO DURO USB 2TB SEAGATE ONE TOUCH",
        imgUrl: "https://www.venex.com.ar/products_images/1644527166_uyiyuiyui.png",
        categoria: ["discosExternos"],
        portada: false,
        stock: 10,
        price: 11539,
    },
    {
        tittle: "DISCO DURO EXTERNO 5 TB SEAGATE EXPANSION USB 3.0",
        imgUrl: "https://www.venex.com.ar/products_images/1586459539_dis2.jpg",
        categoria: ["discosExternos"],
        portada: false,
        stock: 10,
        price: 19789,
    },
    
    
    /* impresionYScanners*/
    
    {
        tittle: "IMPRESORA MULTIFUNCION HP 315 Z4B04A SISTEMA CONTINUO",
        imgUrl: "https://www.venex.com.ar/products_images/1531432290_nmnm.png",
        categoria: ["impresionYScanners"],
        portada: false,
        stock: 10,
        price: 28599,
    },
    {
        tittle: "IMPRESORA MULTIFUNCION LASER HP M137FNW 21P/M 4ZB84A",
        imgUrl: "https://www.venex.com.ar/products_images/1570030878_impresoramultifuncionhpm137fnwlaserwifiescanerfotocopiadoraenvioatodoelpaisd_nq_np_640000mla31884398948_082019f.jpg",
        categoria: ["impresionYScanners"],
        portada: false,
        stock: 10,
        price: 49999,
    },
    {
        tittle: "SCANNER BROTHER ADS-1250W 25PPM DUPLEX",
        imgUrl: "https://www.venex.com.ar/products_images/1627675737_d65fgdf6.jpg",
        categoria: ["impresionYScanners"],
        portada: false,
        stock: 10,
        price: 50599,
    },
    {
        tittle: "MULTIFUNCION EPSON L4260 SIST CONTINUO WIFI DUPLEX",
        imgUrl: "https://www.venex.com.ar/products_images/1630423829_s6d5fg6df.jpg",
        categoria: ["impresionYScanners"],
        portada: false,
        stock: 10,
        price: 69999,
    },
    
    
    /* conectividadYRedes*/
    /* acces point*/
    
    {
        tittle: "FUENTE UBIQUITI POE 7W DC 0.3A GIGABIT",
        imgUrl: "https://www.venex.com.ar/products_images/1636058295_ubi-39.jpeg",
        categoria: ["accesPoint"],
        portada: false,
        stock: 10,
        price: 1529,
    },
    {
        tittle: "ACCESS POINT TP-LINK EAP115 WIRELESS 300MB/S OMADA WALL MOUNTING",
        imgUrl: "https://www.venex.com.ar/products_images/1647883272_ghjghj.png",
        categoria: ["accesPoint"],
        portada: false,
        stock: 10,
        price: 4199,
    },
    {
        tittle: "ACCESS POINT TP-LINK CPE 710 5GHZ 867MBPS 23DBI HIGH POWER",
        imgUrl: "https://www.venex.com.ar/products_images/1634126335_sdfghdfg.jpg",
        categoria: ["accesPoint"],
        portada: false,
        stock: 10,
        price: 8239,
    },
    
    
    /* modemRouter*/
    
    {
        tittle: "SPLITTER TP-LINK POE TL-POE10R",
        imgUrl: "https://www.venex.com.ar/products_images/1585576255_1574885417_splitter_tplink_tlpoe10_r4.005_venex_1.jpg",
        categoria: ["modemRouter"],
        portada: false,
        stock: 10,
        price: 989,
    },
    
    
    /* router*/
    
    {
        tittle: "ROUTER XIAOMI 4C 300MBPS",
        imgUrl: "https://www.venex.com.ar/products_images/1620420254_e7f12669b6c38930fbd8cd05ad9c7d17626c9711_original.jpeg",
        categoria: ["router"],
        portada: false,
        stock: 10,
        price: 2409,
    },
    {
        tittle: "ROUTER TP- LINK ARCHER AX10 DUAL BAND AX1500 GIGABIT",
        imgUrl: "https://www.venex.com.ar/products_images/1585756467_router_tplink_archer_ax10_dual_band_ax1500_gigabit_venex_1.jpg",
        categoria: ["router"],
        portada: false,
        stock: 10,
        price: 9990,
    },
    {
        tittle: "ROUTER TP-LINK ARCHER AX20 AX1800 DUAL BAND GIGABIT",
        imgUrl: "https://www.venex.com.ar/products_images/1618592054_archer-ax20_1.0_01_large_1577697750012v.jpg",
        categoria: ["router"],
        portada: false,
        stock: 10,
        price: 11990,
    },
    
    
    /* switchs*/
    
    {
        tittle: "SWITCH TP-LINK TL-SF1008D 8 PUERTOS 10/100MBPS",
        imgUrl: "https://www.venex.com.ar/products_images/1585575763_1472308158_switch_tplink_sf1008d_venex_1.jpg",
        categoria: ["switchs"],
        portada: false,
        stock: 10,
        price: 2189,
    },
    {
        tittle: "SWITCH TP-LINK TL-SF1016D 16 PUERTOS 10/100MBPS",
        imgUrl: "https://www.venex.com.ar/products_images/1585749393_1472309129_switch_tplink_tlsf1016d_16puertos_venex_1.jpg",
        categoria: ["switchs"],
        portada: false,
        stock: 10,
        price: 4609,
    },
    {
        tittle: "SWITCH TP-LINK TL-SG1024DE 24 PUERTOS 10/100/1000 ADMINISTRABLE GIGA RAK",
        imgUrl: "https://www.venex.com.ar/products_images/1645817971_1.jpg",
        categoria: ["switchs"],
        portada: false,
        stock: 10,
        price: 16990,
    },
    
    
    /* tabletas digitalizadoras y tablets*/
    
    {
        tittle: "TABLA DIGITALIZADORA XP-PEN DECO FUN XS BLACK",
        imgUrl: "https://www.venex.com.ar/products_images/1644267586_253235235.jpg",
        categoria: ["tabletasDigitalizadoras"],
        portada: false,
        stock: 10,
        price: 4190,
    },
    {
        tittle: "TABLA DIGITALIZADORA ONE BY WACOM CTL 472L SMALL",
        imgUrl: "https://www.venex.com.ar/products_images/1570480303_rtrj.jpg",
        categoria: ["tabletasDigitalizadoras"],
        portada: false,
        stock: 10,
        price: 5999,
    },
    {
        tittle: "TABLA DIGITALIZADORA WACOM CTL 4100 BLUETOOTH SMALL PISTACHO",
        imgUrl: "https://www.venex.com.ar/products_images/1646416727_tabla-digitalizadora-wacom-ctl-4100-bluetooth-small-pistacho.jpg",
        categoria: ["tabletasDigitalizadoras"],
        portada: false,
        stock: 10,
        price: 16499,
    },
    {
        tittle: "TABLA DIGITALIZADORA WACOM INTUOS WAC-PTH860P PRO PAPER LARGE",
        imgUrl: "https://www.venex.com.ar/products_images/1519848178_wacomintuospropapereditiongalleryg10.jpg",
        categoria: ["tabletasDigitalizadoras"],
        portada: false,
        stock: 10,
        price: 76899,
    },
    
    
    /* tabletas*/
    
    {
        tittle: "TABLET PCBOX PCB-T732 LIVE 7 QC 1GB 16GB ANDROID 9.0",
        imgUrl: "https://www.venex.com.ar/products_images/1598546400_tablet1.jpg",
        categoria: ["tablets"],
        portada: false,
        stock: 10,
        price: 9999,
    },
    {
        tittle: "TABLET LENOVO 10 TB M10 X306F 32GB 2GB",
        imgUrl: "https://www.venex.com.ar/products_images/1637250905_fghdgfh.png",
        categoria: ["tablets"],
        portada: false,
        stock: 10,
        price: 30579,
    },
    {
        tittle: "TABLET SAMSUNG GALAXY A7 LITE SM-T220 32GB 3GB 8.7",
        imgUrl: "https://www.venex.com.ar/products_images/1644524967_yuiyui.jpg",
        categoria: ["tablets"],
        portada: false,
        stock: 10,
        price: 33329,
    },
    {
        tittle: "TABLET LENOVO 10 TAB M10 PLUS X606F 32GB 2GB",
        imgUrl: "https://www.venex.com.ar/products_images/1631895091_1631824610_564sh5dfgh.png",
        categoria: ["tablets"],
        portada: false,
        stock: 10,
        price: 45089,
    },
    
    
    /* celulares*/
    
    {
        tittle: "CELULAR SAMSUNG GALAXY XCOVER PRO 4GB 64GB P/USO INTENSO",
        imgUrl: "https://www.venex.com.ar/products_images/1624391765_dfgsd21fg.png",
        categoria: ["celulares"],
        portada: false,
        stock: 10,
        price: 75889,
    },
    {
        tittle: "CELULAR XIAOMI MI 10 LITE 6GB 128GB BLACK",
        imgUrl: "https://www.venex.com.ar/products_images/1623100501_56456.jpg",
        categoria: ["celulares"],
        portada: false,
        stock: 10,
        price: 107990,
    },
    
    
    /* telefonosFijos*/
    
    {
        tittle: "TELEFONO IP 2 LINEAS GIGA POE YEALINK SIP-T31G",
        imgUrl: "https://www.venex.com.ar/products_images/1620851321_1594728412050.png",
        categoria: ["telefonosFijos"],
        portada: false,
        stock: 10,
        price: 12099,
    },
    {
        tittle: "TELEFONO IP 4 LINEAS GIGABIT POE YEALINK SIP-T33G",
        imgUrl: "https://www.venex.com.ar/products_images/1620931086_1594729207754-1200x800.jpg",
        categoria: ["telefonosFijos"],
        portada: false,
        stock: 10,
        price: 14299,
    },
    
    
    /* smartwatch*/
    
    {
        tittle: "RELOJ SMARTWATCH HAYLOU SOLAR LS05 BLACK",
        imgUrl: "https://www.venex.com.ar/products_images/1646417808_sfsdfsdf.png",
        categoria: ["smartwatch"],
        portada: false,
        stock: 10,
        price: 5490,
    },
    {
        tittle: "RELOJ SMARTWATCH XIAOMI MI BAND 6 BLACK",
        imgUrl: "https://www.venex.com.ar/products_images/1633457676_6sw5dgf4dsf.png",
        categoria: ["smartwatch"],
        portada: false,
        stock: 10,
        price: 8299,
    },
    {
        tittle: "RELOJ SMARTWATCH AMAZFIT GTR WHITE",
        imgUrl: "https://www.venex.com.ar/products_images/1645635083_sdfsdfsdf.png",
        categoria: ["smartwatch"],
        portada: false,
        stock: 10,
        price: 15990,
    },
    
    
    /*ACCESORIOS Y CABLES*/
    /* cargadores*/
    
    {
        tittle: "CARGADOR DE NOTEBOOK UNIVERSAL VARIAS MARCAS",
        imgUrl: "https://www.venex.com.ar/products_images/1587496739_cargadorportatil.jpg",
        categoria: ["cargadores"],
        portada: false,
        stock: 10,
        price: 3849,
    },
    {
        tittle: "CARGADOR PORTATIL KLIP XTREME KBH-200SV 15000MAH 3.1A LINTERNA",
        imgUrl: "https://www.venex.com.ar/products_images/1650471035_sdfsdfrtr.png",
        categoria: ["cargadores"],
        portada: false,
        stock: 10,
        price: 4999,
    },
    {
        tittle: "CARGADOR APPLE 96W USB-C POWER A2166",
        imgUrl: "https://www.venex.com.ar/products_images/1632756236_mx0j2.jpg",
        categoria: ["cargadores"],
        portada: false,
        stock: 10,
        price: 21990,
    },
    
    
    /* cables*/
    
    {
        tittle: "CABLE DE RED RJ-45 5M CAT5",
        imgUrl: "https://www.venex.com.ar/products_images/1626447270_65dszf1g.png",
        categoria: ["cables"],
        portada: false,
        stock: 10,
        price: 319,
    },
    {
        tittle: "CABLE USB TIPO C 1M",
        imgUrl: "https://www.venex.com.ar/products_images/1623874866_nm-usb3_800.jpg",
        categoria: ["cables"],
        portada: false,
        stock: 10,
        price: 499,
    },
    {
        tittle: "CABLE VGA-VGA M-M COMUN 1.5M",
        imgUrl: "https://www.venex.com.ar/products_images/1648744583_vga.png",
        categoria: ["cables"],
        portada: false,
        stock: 10,
        price: 799,
    },
    {
        tittle: "CABLE DVI MACHO A HDMI MACHO 1.5M",
        imgUrl: "https://www.venex.com.ar/products_images/1640198782_255195023-1.jpg",
        categoria: ["cables"],
        portada: false,
        stock: 10,
        price: 1539,
    },
    
    
    
    /* soportes*/
    
    {
        tittle: "SOPORTE LCD TV GENERICO 32 A 90 100KG 700X500 BASCULANTE",
        imgUrl: "https://www.venex.com.ar/products_images/1626977196_38729.jpg",
        categoria: ["soportes"],
        portada: false,
        stock: 10,
        price: 3289,
    },
    {
        tittle: "SOPORTE INTELAID TV 17/42 IT-TSL42",
        imgUrl: "https://www.venex.com.ar/products_images/1645115061_nb_soporte-intelaid-tv-17-42-vesa-200x200-ittsl42_ver_96723242841cc41083f42b5e919d0d4e.jpeg",
        categoria: ["soportes"],
        portada: false,
        stock: 10,
        price: 4399,
    },
    {
        tittle: "SOPORTE INTELAID DE ESCRITORIO 13/27 VESA 100X100 IT-DBSE",
        imgUrl: "https://www.venex.com.ar/products_images/1644947768_fvdfvdfv.png",
        categoria: ["soportes"],
        portada: false,
        stock: 10,
        price: 6709,
    },
    
    
    /* estabilizadores*/
    
    {
        tittle: "PROTECTOR INTELIGENTE TRV SMART E",
        imgUrl: "https://www.venex.com.ar/products_images/1628629533_ds6f5g4d5s6fg.jpg",
        categoria: ["estabilizadores"],
        portada: false,
        stock: 10,
        price: 1899,
    },
    {
        tittle: "ESTABILIZADOR PROTECTOR TRV MICROVOLT L1200",
        imgUrl: "https://www.venex.com.ar/products_images/1578335526_sddsdsd.jpg",
        categoria: ["estabilizadores"],
        portada: false,
        stock: 10,
        price: 2799,
    },
    {
        tittle: "ESTABILIZADOR TRV CONCEPT 1000 VA",
        imgUrl: "https://www.venex.com.ar/products_images/1552592445_7709e4_axdourldbaabcvta.jpg",
        categoria: ["estabilizadores"],
        portada: false,
        stock: 10,
        price: 3299,
    },
    
    
    /* ups*/
    
    {
        tittle: "UPS TRV 650 C/USB",
        imgUrl: "https://www.venex.com.ar/products_images/1634849445_wdefg514.jpg",
        categoria: ["ups"],
        portada: false,
        stock: 10,
        price: 8749,
    },
    {
        tittle: "UPS APC BACK EASY BV 650VA",
        imgUrl: "https://www.venex.com.ar/products_images/1605814096_.jpg",
        categoria: ["ups"],
        portada: false,
        stock: 10,
        price: 13799,
    },
    {
        tittle: "UPS APC BACK 2200VA 230V BX2200MI-AR",
        imgUrl: "https://www.venex.com.ar/products_images/1650304139_ghfgh.png",
        categoria: ["ups"],
        portada: false,
        stock: 10,
        price: 56999,
    },
    ];
        const miColeccion = collection(firestoreDB, 'items');

        items.forEach((item) => {
            const newDoc =doc(miColeccion);
            setDoc(newDoc, item).then(() =>{
                console.log("Document written with id: ",newDoc.id)}).catch(err => {
                    console.error("Error adding document: ", err);
                });
            });
        }


export async function createBuyOrder(orderData){
    const buyTimestamp = Timestamp.now();

    const orderWithDate = {
        ...orderData,
        date: buyTimestamp};

    const miColec = collection(firestoreDB, "buyOrders");

    const orderDoc= await setDoc(miColec, orderWithDate);

    console.log("orden lista con el ID:", orderDoc.id);
    console.log("orden lista con la fecha:", orderDoc.data());
}