import residentialImg from '../assets/images/regenerated_image_1792797709566.webp';
import airbnbImg from '../assets/images/service_airbnb_hospitality_1792769384607.webp';
import marbleImg from '../assets/images/service_marble_polishing_1792769384935.webp';

export interface CleaningServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'residentiel' | 'professionnel' | 'airbnb' | 'specifique';
  shortDesc: string;
  fullDesc: string;
  primaryKeyword: string;
  inclusions: string[];
  audience: string;
  frequency: string;
  image?: string;
  seoTitle: string;
  seoDescription: string;
}

export const CLEANZOE_NAP = {
  name: 'CleanZoe',
  fullName: 'CleanZoe - Entreprise de Nettoyage Professionnel',
  phone: '0664696470',
  formattedPhone: '+212 6 64 69 64 70',
  whatsappUrl: 'https://wa.me/212664696470',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61595717915199',
  email: 'cleanzoeservice@gmail.com',
  address: 'Dior Atlas Meuble N24 Mhamid, Marrakech, Maroc',
  locality: 'Marrakech',
  region: 'Marrakech-Safi',
  country: 'Maroc',
  postalCode: '40000',
  hours: 'Lun - Sam : 08h00 - 19h00 (Urgences & Airbnb 7j/7)',
  serviceAreas: [
    'M\'hamid',
    'Guéliz',
    'Hivernage',
    'Palmeraie',
    'Médina & Kasbah',
    'Targa',
    'Agdal',
    'Victor Hugo',
    'Route de Casablanca',
    'Route de l\'Ourika',
    'Route d\'Amizmiz'
  ]
};

export const SERVICES_LIST: CleaningServiceItem[] = [
  {
    id: 'residentiel',
    slug: 'nettoyage-residentiel',
    title: 'Nettoyage Résidentiel (Maisons & Appartements)',
    category: 'residentiel',
    shortDesc: 'Entretien complet et soigné pour villas, riads et appartements à Marrakech.',
    fullDesc: 'CleanZoe prend en charge le nettoyage en profondeur de votre lieu de vie. Dépoussiérage méticuleux, assainissement des pièces d\'eau, désinfection des cuisines et nettoyage soigné des sols adaptés à l\'architecture marrakchie.',
    primaryKeyword: 'nettoyage résidentiel Marrakech',
    inclusions: [
      'Nettoyage et dégraissage complet des cuisines',
      'Détartrage et désinfection des sanitaires et salles de bain',
      'Dépoussiérage des meubles, plinthes, portes et luminaires',
      'Lavage et désinfection de tous types de sols',
      'Aération et assainissement des pièces de vie'
    ],
    audience: 'Particuliers, propriétaires de villas, locataires et résidents à Marrakech',
    frequency: 'Ponctuel ou abonnement hebdomadaire / bimensuel',
    image: residentialImg,
    seoTitle: 'Nettoyage Résidentiel et Maisons à Marrakech | CleanZoe',
    seoDescription: 'Service de nettoyage résidentiel professionnel à Marrakech. Entretien méticuleux de villas, appartements et riads avec produits certifiés.'
  },
  {
    id: 'bureaux',
    slug: 'nettoyage-bureaux',
    title: 'Nettoyage de Bureaux & Locaux Professionnels',
    category: 'professionnel',
    shortDesc: 'Espaces de travail sains, accueillants et irréprochables pour vos équipes et clients.',
    fullDesc: 'Un environnement de travail propre stimule la productivité et valorise l\'image de votre entreprise. Nos agents interviennent en horaires décalés ou réguliers pour garantir un confort optimal sans perturber vos activités.',
    primaryKeyword: 'nettoyage bureaux Marrakech',
    inclusions: [
      'Désinfection des postes de travail, écrans et combinés téléphoniques',
      'Nettoyage et vidage des corbeilles et tri sélectif',
      'Entretien approfondi des salles de réunion et espaces détente',
      'Désinfection quotidienne des sanitaires et réapprovisionnement des consommables',
      'Aspiration et traitement des moquettes et sols de bureau'
    ],
    audience: 'Entreprises, cabinets d\'avocats, agences, startups, espaces de coworking',
    frequency: 'Quotidien, hebdomadaire ou contrat sur mesure',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80&fm=webp',
    seoTitle: 'Nettoyage de Bureaux et Locaux à Marrakech | CleanZoe',
    seoDescription: 'Entreprise spécialisée dans l\'entretien régulier de bureaux, commerces et locaux professionnels à Marrakech. Devis rapide sans engagement.'
  },
  {
    id: 'airbnb',
    slug: 'nettoyage-airbnb',
    title: 'Nettoyage Airbnb & Conciergerie',
    category: 'airbnb',
    shortDesc: 'Ménage minutieux et rotation de linge entre chaque séjour de voyageurs.',
    fullDesc: 'Maximisez vos avis 5 étoiles sur Airbnb et Booking. CleanZoe assure une remise en état express et impeccable entre chaque départ et arrivée de voyageurs à Marrakech, 7 jours sur 7.',
    primaryKeyword: 'nettoyage Airbnb Marrakech',
    inclusions: [
      'Changement du linge de lit et des serviettes de bain',
      'Désinfection intégrale de la cuisine, vaisselle et réfrigérateur',
      'Nettoyage étincelant des salles de bain avec produits anticalcaires',
      'Mise en place soignée et vérification des consommables d\'accueil',
      'Rapport photo d\'intervention envoyé au propriétaire'
    ],
    audience: 'Hôtes Airbnb, propriétaires de riads en location courte durée, conciergeries',
    frequency: 'À chaque rotation de voyageurs (disponible 7j/7)',
    image: airbnbImg,
    seoTitle: 'Ménage Airbnb et Conciergerie à Marrakech | CleanZoe',
    seoDescription: 'Service de ménage Airbnb rapide et professionnel à Marrakech. Rotation de linge, désinfection et remise en état pour des avis 5 étoiles.'
  },
  {
    id: 'chantier',
    slug: 'nettoyage-apres-chantier',
    title: 'Service Après Chantier & Fin de Travaux',
    category: 'specifique',
    shortDesc: 'Élimination des résidus de plâtre, peinture, voile de ciment et poussière fine.',
    fullDesc: 'Après des travaux de construction ou de rénovation à Marrakech, confiez la remise en état à notre équipe outillée. Nous éliminons les traces les plus tenaces pour rendre les lieux immédiatement habitables.',
    primaryKeyword: 'nettoyage après chantier Marrakech',
    inclusions: [
      'Décapage des résidus de colle, ciment, silicone et peinture',
      'Aspiration industrielle de la poussière fine sur toutes surfaces',
      'Nettoyage approfondi des vitrages, encadrements et rails',
      'Dégraissage et récurage des sanitaires, faïences et robinetteries',
      'Traitement et lavage final des revêtements de sol'
    ],
    audience: 'Promoteurs immobiliers, architectes, artisans, propriétaires rénovateurs',
    frequency: 'Intervention ponctuelle de fin de chantier',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80&fm=webp',
    seoTitle: 'Nettoyage Fin de Chantier et Travaux à Marrakech | CleanZoe',
    seoDescription: 'Remise en état après travaux et fin de chantier à Marrakech. Décapage de ciment, peinture et poussière fine pour une livraison impeccable.'
  },
  {
    id: 'sols',
    slug: 'cristallisation-sols',
    title: 'Cristallisation & Décapage des Sols',
    category: 'specifique',
    shortDesc: 'Restauration de l\'éclat et protection durable pour marbre, zellige, carrelage et béton.',
    fullDesc: 'Le climat et la poussière de Marrakech ternissent rapidement les sols nobles. Grâce à nos monobrosses professionnelles et produits de traitement spécialisés, nous redonnons au marbre et aux pierres naturelles un brillant miroir durable.',
    primaryKeyword: 'cristallisation sols Marrakech',
    inclusions: [
      'Diagnostic du type de roche et degré d\'usure',
      'Décapage mécanique et élimination des cires anciennes',
      'Ponçage aux disques diamantés si micro-rayures présentes',
      'Cristallisation thermochimique pour effet miroir protecteur',
      'Application d\'hydrofuge et oléofuge olfactif'
    ],
    audience: 'Villas de prestige, hôtels, riads, halls d\'immeubles, boutiques',
    frequency: 'Traitement annuel ou rénovation ciblée',
    image: marbleImg,
    seoTitle: 'Cristallisation et Décapage de Marbre à Marrakech | CleanZoe',
    seoDescription: 'Traitement, décapage et cristallisation des sols en marbre, zellige et carrelage à Marrakech. Rénovation brillante par des professionnels.'
  },
  {
    id: 'vitres',
    slug: 'nettoyage-vitres',
    title: 'Nettoyage des Vitres & Baies Vitrées',
    category: 'specifique',
    shortDesc: 'Transparence totale, sans traces ni coulures, y compris pour les grandes hauteurs.',
    fullDesc: 'Le soleil de Marrakech met en lumière la moindre trace. Nos laveurs de vitres équipés de raclettes professionnelles et perches télescopiques garantissent une limpidité parfaite pour vos baies vitrées et verrières.',
    primaryKeyword: 'nettoyage vitres Marrakech',
    inclusions: [
      'Nettoyage intérieur et extérieur des vitrages',
      'Dépoussiérage et lavage soigné des montants, châssis et joints',
      'Nettoyage approfondi des rails coulissants de baies vitrées',
      'Traitement anti-statique réduisant l\'adhérence de la poussière',
      'Intervention sécurisée sur baies vitrées de grandes hauteurs'
    ],
    audience: 'Villas contemporaines, riads à patio vitré, bureaux et commerces',
    frequency: 'Ponctuel ou contrat régulier',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80&fm=webp',
    seoTitle: 'Nettoyage de Vitres et Baies Vitrées à Marrakech | CleanZoe',
    seoDescription: 'Lavage professionnel de vitres, verrières et baies vitrées à Marrakech. Résultat sans trace, matériel pro pour grandes hauteurs.'
  },
  {
    id: 'tapis',
    slug: 'nettoyage-tapis-moquettes',
    title: 'Nettoyage des Tapis & Moquettes',
    category: 'specifique',
    shortDesc: 'Injection-extraction professionnelle pour éliminer acariens, taches et mauvaises odeurs.',
    fullDesc: 'Nettoyage en profondeur des tapis traditionnels marocains, moquettes de bureaux et canapés en tissu. Nous utilisons des injecteurs-extracteurs haute pression préservant les fibres textiles.',
    primaryKeyword: 'nettoyage tapis Marrakech',
    inclusions: [
      'Aspiration mécanique en profondeur',
      'Détachage ciblé selon la nature des salissures',
      'Lavage par injection-extraction à chaud',
      'Traitement anti-acariens et désodorisant antibactérien',
      'Séchage accéléré'
    ],
    audience: 'Particuliers, hôtels, bureaux, restaurants',
    frequency: 'Semestriel ou annuel',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80&fm=webp',
    seoTitle: 'Nettoyage de Tapis et Moquettes à Marrakech | CleanZoe',
    seoDescription: 'Détachage et nettoyage de tapis berbères, modernes et moquettes à Marrakech. Injection-extraction et traitement anti-acariens.'
  },
  {
    id: 'piscines',
    slug: 'nettoyage-piscines',
    title: 'Nettoyage & Protection des Piscines',
    category: 'specifique',
    shortDesc: 'Entretien du bassin, filtration et plages de piscine pour une eau limpide toute l\'année.',
    fullDesc: 'Sous le climat chaud de Marrakech, la piscine est un élément central. CleanZoe effectue le nettoyage des parois, le traitement de la ligne d\'eau et le décapage haute pression des margelles et terrasses.',
    primaryKeyword: 'nettoyage piscines Marrakech',
    inclusions: [
      'Brossage des parois, du fond et de la ligne d\'eau',
      'Aspiration des impuretés et débris organiques',
      'Nettoyage et contrôle des paniers de skimmer et préfiltres',
      'Lavage haute pression des margelles et plages de piscine',
      'Conseils de maintien d\'équilibre physico-chimique'
    ],
    audience: 'Propriétaires de villas privées, maisons d\'hôtes, copropriétés',
    frequency: 'Saisonnier ou entretien régulier à l\'année',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80&fm=webp',
    seoTitle: 'Nettoyage et Entretien de Piscines à Marrakech | CleanZoe',
    seoDescription: 'Nettoyage complet de bassins, parois, margelles et plages de piscine à Marrakech. Profitez d\'un extérieur impeccable toute l\'année.'
  },
  {
    id: 'desinfection',
    slug: 'desinfection',
    title: 'Désinfection & Assainissement',
    category: 'specifique',
    shortDesc: 'Protocoles de désinfection stricts pour des environnements sains et sans germes.',
    fullDesc: 'Traitement virucide, bactéricide et fongicide certifié pour locaux professionnels, cliniques, espaces éducatifs et résidences privées.',
    primaryKeyword: 'désinfection Marrakech',
    inclusions: [
      'Nébulisation ou pulvérisation de solutions désinfectantes homologuées',
      'Traitement de surface des points de contact fréquents',
      'Assainissement des conduits d\'aération accessibles',
      'Délivrance d\'une attestation de désinfection sur demande'
    ],
    audience: 'Établissements recevant du public, bureaux, crèches, particuliers',
    frequency: 'Intervention préventive ou curative ciblée',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=80&fm=webp',
    seoTitle: 'Désinfection et Assainissement de Locaux à Marrakech | CleanZoe',
    seoDescription: 'Service professionnel de désinfection virucide et bactéricide à Marrakech. Pour bureaux, commerces et espaces de vie.'
  },
  {
    id: 'coproprietes',
    slug: 'entretien-coproprietes',
    title: 'Entretien d\'Immeubles & Copropriétés',
    category: 'professionnel',
    shortDesc: 'Parties communes soignées, cages d\'escalier, ascenseurs et halls d\'entrée accueillants.',
    fullDesc: 'CleanZoe collabore avec les syndics de copropriété et gestionnaires immobiliers à Marrakech pour valoriser le patrimoine commun par un entretien régulier rigoureux.',
    primaryKeyword: 'entretien copropriété Marrakech',
    inclusions: [
      'Balayage et lavage des halls, coursives et cages d\'escaliers',
      'Nettoyage et désinfection des cabines d\'ascenseurs et miroirs',
      'Entretien des locaux poubelles et désinfection des conteneurs',
      'Nettoyage des vitres communes et rampes d\'escalier',
      'Gestion et rotation des bacs à déchets'
    ],
    audience: 'Syndics professionnels, conseils syndicaux, résidences fermées',
    frequency: 'Contrats hebdomadaires ou bimensuels',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80&fm=webp',
    seoTitle: 'Entretien de Copropriétés et Immeubles à Marrakech | CleanZoe',
    seoDescription: 'Entretien professionnel des parties communes d\'immeubles et résidences à Marrakech. Contrats sur mesure pour syndics et propriétaires.'
  },
  {
    id: 'contrats',
    slug: 'contrats-entretien-reguliers',
    title: 'Contrats d\'Entretien Réguliers',
    category: 'professionnel',
    shortDesc: 'Tranquillité d\'esprit absolue avec un calendrier d\'intervention planifié et stable.',
    fullDesc: 'Bénéficiez d\'une tarification préférentielle et d\'une équipe dédiée grâce à nos formules d\'abonnements adaptées à vos besoins récurrents.',
    primaryKeyword: 'société de nettoyage Marrakech',
    inclusions: [
      'Cahier des charges sur mesure adapté à vos locaux',
      'Équipe formée et dédiée à votre site',
      'Supervision et contrôles qualité réguliers',
      'Facturation mensuelle claire sans frais cachés',
      'Remplacement garanti en cas d\'absence d\'un agent'
    ],
    audience: 'Bureaux, résidences, cabinets médicaux, boutiques et villas',
    frequency: 'Abonnements mensuels ou annuels reconductibles',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80&fm=webp',
    seoTitle: 'Contrats d\'Entretien Régulier à Marrakech | CleanZoe',
    seoDescription: 'Formules d\'entretien régulier pour entreprises et résidences à Marrakech. Planification flexible et équipe dédiée.'
  },
  {
    id: 'betons',
    slug: 'nettoyage-protection-betons',
    title: 'Nettoyage & Protection des Bétons',
    category: 'specifique',
    shortDesc: 'Décrassage haute pression et traitement hydrofuge pour allées, terrasses et garages.',
    fullDesc: 'Élimination des taches d\'huile, mousses, calcaire et poussières incrustées sur bétons imprimés, désactivés ou lissés.',
    primaryKeyword: 'nettoyage béton Marrakech',
    inclusions: [
      'Décapage haute pression avec régulateur thermique',
      'Traitement des taches d\'huile et graisses mécaniques',
      'Démoussage et brossage industriel',
      'Application de bouche-pores ou résine de finition hydrofuge'
    ],
    audience: 'Propriétaires de villas, parkings, centres commerciaux, entrepôts',
    frequency: 'Entretien semestriel ou remise en état ponctuelle',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80&fm=webp',
    seoTitle: 'Nettoyage et Protection des Bétons à Marrakech | CleanZoe',
    seoDescription: 'Décapage haute pression et traitement protecteur pour bétons cirés, imprimés et allées à Marrakech. Résultat durable.'
  }
];

export const FAQS_LIST = [
  {
    q: 'Dans quels quartiers de Marrakech CleanZoe intervient-elle ?',
    a: 'Nous intervenons sur l\'ensemble de Marrakech : Guéliz, Hivernage, Palmeraie, Médina, M\'hamid, Targa, Agdal, Victor Hugo, ainsi que sur les axes périphériques (Route de l\'Ourika, Route d\'Amizmiz, Route de Casablanca).'
  },
  {
    q: 'Comment obtenir un devis de nettoyage à Marrakech ?',
    a: 'Le devis est 100% gratuit et sans engagement. Vous pouvez nous contacter directement par téléphone au 06 64 69 64 70, via WhatsApp, ou en utilisant notre calculateur de devis en ligne sur ce site pour une réponse sous 30 minutes.'
  },
  {
    q: 'Proposez-vous un service de ménage Airbnb d\'urgence entre deux séjours ?',
    a: 'Oui. CleanZoe dispose d\'une cellule dédiée aux rotations Airbnb et conciergeries disponible 7j/7 pour assurer le ménage, le changement des draps et serviettes et le réapprovisionnement entre les départs de 11h et les arrivées de 15h.'
  },
  {
    q: 'Quels équipements utilisez-vous pour la cristallisation du marbre ?',
    a: 'Nous employons des monobrosses professionnelles lourdes, des disques diamantés de différents grains et des produits cristallisant de haute qualité afin de restituer la brillance d\'origine sans altérer la pierre naturelle.'
  },
  {
    q: 'Fournissez-vous le matériel et les produits d\'entretien ?',
    a: 'Absolument. Nos techniciens arrivent sur site équipés de tout le matériel professionnel nécessaire (aspirateurs eau et poussière, injecteurs-extracteurs, monobrosses, perches et microfibres) ainsi que de produits nettoyants certifiés efficaces et respectueux de vos surfaces.'
  }
];
