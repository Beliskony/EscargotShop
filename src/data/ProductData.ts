export interface ProductCard {
    src: string
    title: string
    description: string
    price?: string
    category: "escargots" | "volaille" | "plats"
    featured?: boolean
}

export const productsData: ProductCard[] = [
    {
        src: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop",
        title: "Escargots de Bourgogne",
        description: "Nos escargots Gros Gris élevés en plein air, préparés à la bourguignonne avec beurre persillé maison",
        price: "24,90 €",
        category: "escargots",
        featured: true
    },
    {
        src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
        title: "Poulet Fermier Élevé en Plein Air",
        description: "Poulet jaune élevé en liberté, nourri aux céréales, chair ferme et savoureuse",
        price: "18,50 €",
        category: "volaille",
        featured: true
    },
    {
        src: "https://images.unsplash.com/photo-1551504738-4d85361ee0e4?w=400&h=300&fit=crop",
        title: "Cassolettes d'Escargots Forestiers",
        description: "Escargots préparés avec des champignons forestiers et une crème à l'ail",
        price: "19,90 €",
        category: "escargots"
    },
    {
        src: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop",
        title: "Canard Fermier de Challans",
        description: "Canard élevé en plein air, viande persillée et goûteuse, parfait pour les magrets",
        price: "22,80 €",
        category: "volaille"
    },
    {
        src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        title: "Plateau de Volailles Mixtes",
        description: "Sélection de poulet, canard et pintade pour découvrir nos différentes volailles",
        price: "35,00 €",
        category: "volaille",
        featured: true
    },
    {
        src: "https://images.unsplash.com/photo-1563379091339-03246963d96f?w=400&h=300&fit=crop",
        title: "Escargots à la Provençale",
        description: "Escargots préparés avec des tomates fraîches, basilic et huile d'olive",
        price: "21,50 €",
        category: "escargots"
    },
    {
        src: "https://images.unsplash.com/photo-1594048503180-b329871b7757?w=400&h=300&fit=crop",
        title: "Pintade Fermière Rôtie",
        description: "Pintade élevée en liberté, viande fine et savoureuse, idéale pour les repas de fête",
        price: "26,90 €",
        category: "volaille"
    },
    {
        src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        title: "Feuilleté d'Escargots au Porto",
        description: "Escargots en feuilleté avec une sauce au porto et aux échalotes",
        price: "23,50 €",
        category: "plats"
    },
    {
        src: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",
        title: "Blanquette de Volaille Traditionnelle",
        description: "Blanquette de poulet fermier avec carottes, poireaux et crème fraîche",
        price: "17,90 €",
        category: "plats"
    },
    {
        src: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop",
        title: "Escargots en Croûte d'Herbes",
        description: "Escargots en croûte de pain aux herbes de Provence et beurre d'ail",
        price: "20,90 €",
        category: "plats"
    },
    {
        src: "https://images.unsplash.com/photo-1596814604281-384dacea75aa?w=400&h=300&fit=crop",
        title: "Confit de Canard Maison",
        description: "Cuisses de canard confites lentement dans leur graisse, croustillantes à souhait",
        price: "28,50 €",
        category: "plats",
        featured: true
    },
    {
        src: "https://images.unsplash.com/photo-1606755962773-d324e2dabd76?w=400&h=300&fit=crop",
        title: "Brochettes d'Escargots et Lardons",
        description: "Brochettes gourmandes d'escargots enroulés de lardons fumés",
        price: "22,00 €",
        category: "plats"
    }
]