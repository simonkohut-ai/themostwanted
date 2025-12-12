// ═══════════════════════════════════════════════════════════════
//  FORDFOFER CONFIG - VYPLŇ SVOJE ÚDAJE TU
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
    
    // ═══ ZÁKLADNÉ INFO ═══
    name: "Šimon Kohút",              // Tvoje meno
    brand: "FordFofer",               // Názov značky
    
    // ═══ SOCIÁLNE SIETE ═══
    instagram: "@fordfofer",          // Tvoj IG handle
    instagram_url: "https://instagram.com/fordfofer",
    
    twitter: "@fordfofer",            // Tvoj Twitter/X
    twitter_url: "https://twitter.com/fordfofer",
    
    linkedin: "simon-kohut",          // LinkedIn username
    linkedin_url: "https://linkedin.com/in/simon-kohut",
    
    github: "simonkohut-ai",          // GitHub username
    github_url: "https://github.com/simonkohut-ai",
    
    tiktok: "@fordfofer",             // TikTok (ak máš)
    
    // ═══ PLATBY - SKRILL ═══
    skrill_email: "YOUR_SKRILL_EMAIL@email.com",  // ⚠️ ZMEŇ TOTO
    
    // ═══ PLATBY - PAYPAL ═══
    paypal_me: "fordfofer",           // PayPal.me link (paypal.me/fordfofer)
    paypal_email: "YOUR_PAYPAL@email.com",
    
    // ═══ PLATBY - CRYPTO ═══
    btc_address: "YOUR_BTC_WALLET_ADDRESS",
    eth_address: "YOUR_ETH_WALLET_ADDRESS", 
    usdt_address: "YOUR_USDT_WALLET_ADDRESS",
    
    // ═══ KONTAKT ═══
    email: "contact@fordfofer.com",
    
    // ═══ WEBSITE ═══
    website: "https://fordfofer.vercel.app",
    
    // ═══ GIVEAWAY ═══
    giveaway_amount: "$100",
    giveaway_deadline: "24 HODÍN"
};

// Export pre použitie v iných súboroch
if (typeof module !== 'undefined') {
    module.exports = CONFIG;
}

