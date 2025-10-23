export interface LoremItem {
    id: number
    titre: string
    contenu: string
    categorie: 'qualite' | 'service' | 'produit' | 'engagement'
}

export const loremData: LoremItem[] = [
    {
        id: 1,
        titre: "🎯 Qualité",
        contenu: "Nos escargots sont élevés dans un environnement naturel et biologique, garantissant une chair tendre et savoureuse.",
        categorie: 'qualite'
    },
    {
        id: 2,
        titre: "🐌 Fraîcheur",
        contenu: "Tous nos produits sont préparés quotidiennement pour vous offrir une fraîcheur et une qualité optimales.",
        categorie: 'qualite'
    },
    {
        id: 3,
        titre: "🚚 Livraison",
        contenu: "Service de livraison rapide dans toute la région. Commandez avant 14h, recevez le jour même !",
        categorie: 'service'
    },
    {
        id: 4,
        titre: "⭐ Expertise",
        contenu: "Plus de 20 ans d'expérience dans l'élevage d'escargots et de volailles de qualité supérieure.",
        categorie: 'service'
    },
    {
        id: 5,
        titre: "🍗 Volaille",
        contenu: "Nos volailles sont élevées en plein air, nourries naturellement pour une viande goûteuse et tendre.",
        categorie: 'produit'
    },
    {
        id: 6,
        titre: "🌿 Naturel",
        contenu: "Respect de l'environnement et bien-être animal au cœur de nos méthodes d'élevage traditionnelles.",
        categorie: 'engagement'
    },
    {
        id: 7,
        titre: "🏆 Excellence",
        contenu: "Prix d'excellence décerné par l'association des éleveurs français pour la qualité de nos produits.",
        categorie: 'qualite'
    },
    {
        id: 8,
        titre: "📦 Sur Mesure",
        contenu: "Commandes personnalisables selon vos besoins : quantités, préparations, assaisonnements spéciaux.",
        categorie: 'service'
    },
    {
        id: 9,
        titre: "👨‍🍳 Recettes",
        contenu: "Accompagnement personnalisé avec nos recettes traditionnelles et conseils de préparation.",
        categorie: 'service'
    },
    {
        id: 10,
        titre: "📍 Local",
        contenu: "Produits 100% locaux, circuit court garantissant fraîcheur et soutien à l'économie régionale.",
        categorie: 'engagement'
    }
]

// Données groupées par catégorie
export const loremDataByCategory = {
    qualite: loremData.filter(item => item.categorie === 'qualite'),
    service: loremData.filter(item => item.categorie === 'service'),
    produit: loremData.filter(item => item.categorie === 'produit'),
    engagement: loremData.filter(item => item.categorie === 'engagement')
}

// Données pour les statistiques
export const statsData = [
    { number: "20+", text: "Ans d'expérience" },
    { number: "500+", text: "Clients satisfaits" },
    { number: "100%", text: "Produits naturels" },
    { number: "24h", text: "Livraison express" }
]

// Données pour les services principaux
export const servicesData = [
    {
        titre: "Escargots Frais",
        contenu: "Sélection d'escargots préparés selon les méthodes traditionnelles",
        icon: "🐌"
    },
    {
        titre: "Volaille de Qualité",
        contenu: "Poulets, canards et autres volailles élevés en plein air",
        icon: "🍗"
    },
    {
        titre: "Préparations Maison",
        contenu: "Recettes secrètes et assaisonnements artisanaux",
        icon: "👨‍🍳"
    },
    {
        titre: "Livraison Rapide",
        contenu: "Service de livraison maintenu au frais jusqu'à chez vous",
        icon: "🚚"
    }
]